// Minimal PNG helpers: insert a pHYs chunk that carries the pixel aspect ratio,
// so exported images open with the right shape in viewers and image editors.

const crcTable = (() => {
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++)
            c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
        table[n] = c >>> 0;
    }
    return table;
})();

export function crc32(bytes: Uint8Array): number {
    let c = 0xffffffff;
    for (let i = 0; i < bytes.length; i++)
        c = crcTable[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
}

export function pngChunk(type: string, data: Uint8Array): Uint8Array {
    const chunk = new Uint8Array(12 + data.length);
    const dv = new DataView(chunk.buffer);
    dv.setUint32(0, data.length);
    for (let i = 0; i < 4; i++) chunk[4 + i] = type.charCodeAt(i);
    chunk.set(data, 8);
    dv.setUint32(8 + data.length, crc32(chunk.subarray(4, 8 + data.length)));
    return chunk;
}

// Insert or replace the pHYs chunk so the PNG carries the pixel aspect ratio.
// `scaleX` is the width/height ratio of one target pixel, so wider pixels mean
// fewer pixels per metre horizontally. Images without a pHYs chunk are assumed
// to be square (96 dpi).
export function pngWithPixelAspect(buf: ArrayBuffer, scaleX: number): Uint8Array {
    const src = new Uint8Array(buf);
    const phys = new Uint8Array(9);
    const dv = new DataView(phys.buffer);
    const ppuY = 3779; // 96 dpi
    const ppuX = Math.max(1, Math.round(ppuY / (scaleX || 1)));
    dv.setUint32(0, ppuX);
    dv.setUint32(4, ppuY);
    phys[8] = 1; // unit: metre
    const physChunk = pngChunk('pHYs', phys);

    const parts: Uint8Array[] = [src.subarray(0, 8)]; // PNG signature
    let pos = 8;
    let inserted = false;
    while (pos + 8 <= src.length) {
        const len = new DataView(src.buffer, src.byteOffset + pos, 4).getUint32(0);
        const type = String.fromCharCode(src[pos + 4], src[pos + 5], src[pos + 6], src[pos + 7]);
        const end = pos + 12 + len;
        if (type === 'pHYs') {
            // drop the old chunk; one is inserted before the first IDAT
        } else {
            if (!inserted && type === 'IDAT') {
                parts.push(physChunk);
                inserted = true;
            }
            parts.push(src.subarray(pos, end));
        }
        pos = end;
    }
    if (!inserted) parts.push(physChunk);
    let total = 0;
    for (const p of parts) total += p.length;
    const out = new Uint8Array(total);
    let ofs = 0;
    for (const p of parts) {
        out.set(p, ofs);
        ofs += p.length;
    }
    return out;
}
