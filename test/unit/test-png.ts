import t from "tap";
import zlib from "zlib";
import { pngWithPixelAspect, pngChunk, crc32 } from "../../src/common/png.js";

function makePng(withPhys = false): Uint8Array {
    const ihdr = new Uint8Array(13);
    const dv = new DataView(ihdr.buffer);
    dv.setUint32(0, 1); // width
    dv.setUint32(4, 1); // height
    ihdr[8] = 8; // bit depth
    ihdr[9] = 2; // color type: truecolor
    const raw = zlib.deflateSync(Buffer.from([0, 255, 0, 0]));
    const parts = [
        new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
        pngChunk('IHDR', ihdr),
    ];
    if (withPhys) {
        const phys = new Uint8Array(9);
        new DataView(phys.buffer).setUint32(0, 1);
        new DataView(phys.buffer).setUint32(4, 1);
        phys[8] = 1;
        parts.push(pngChunk('pHYs', phys));
    }
    parts.push(pngChunk('IDAT', new Uint8Array(raw)));
    parts.push(pngChunk('IEND', new Uint8Array(0)));
    let total = 0;
    for (const p of parts) total += p.length;
    const out = new Uint8Array(total);
    let ofs = 0;
    for (const p of parts) { out.set(p, ofs); ofs += p.length; }
    return out;
}

function chunks(png: Uint8Array) {
    const result: { type: string, data: Uint8Array }[] = [];
    let pos = 8;
    while (pos + 8 <= png.length) {
        const dv = new DataView(png.buffer, png.byteOffset + pos, 4);
        const len = dv.getUint32(0);
        const type = String.fromCharCode(png[pos + 4], png[pos + 5], png[pos + 6], png[pos + 7]);
        const data = png.subarray(pos + 8, pos + 8 + len);
        const crc = new DataView(png.buffer, png.byteOffset + pos + 8 + len, 4).getUint32(0);
        result.push({ type, data, crc });
        pos += 12 + len;
    }
    return result;
}

t.test('pngWithPixelAspect inserts a pHYs chunk before IDAT', async t => {
    const out = pngWithPixelAspect(makePng().buffer, 2);
    const cs = chunks(out);
    t.same(cs.map(c => c.type), ['IHDR', 'pHYs', 'IDAT', 'IEND']);
    const phys = cs[1];
    const dv = new DataView(phys.data.buffer, phys.data.byteOffset, phys.data.length);
    t.equal(dv.getUint32(0), 1890, 'x pixels per metre for wide pixels');
    t.equal(dv.getUint32(4), 3779, 'y pixels per metre (96 dpi)');
    t.equal(phys.data[8], 1, 'unit is metre');
    t.end();
});

t.test('pngWithPixelAspect replaces an existing pHYs chunk', async t => {
    let png = makePng(true);
    png = pngWithPixelAspect(png.buffer, 0.5);
    png = pngWithPixelAspect(png.buffer, 1);
    const cs = chunks(png);
    t.equal(cs.filter(c => c.type === 'pHYs').length, 1, 'only one pHYs chunk');
    const dv = new DataView(cs[1].data.buffer, cs[1].data.byteOffset, cs[1].data.length);
    t.equal(dv.getUint32(0), 3779, 'square pixels get 96 dpi on both axes');
    t.equal(dv.getUint32(4), 3779);
    t.end();
});

t.test('crc32 matches the PNG specification', async t => {
    // CRC of the IEND chunk type with no data is 0xAE426082
    t.equal(crc32(new Uint8Array([73, 69, 78, 68])), 0xae426082);
    t.end();
});
