import { t } from "tap";
import { dither, createSystem, exportNative, listSystems, resizeImage, palettes, kernels } from "../../src/index";

// horizontal red->blue gradient, RGBA bytes
function gradient(w: number, h: number) {
  const data = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      data[i] = 255 - Math.round(255 * x / (w - 1));
      data[i + 2] = Math.round(255 * x / (w - 1));
      data[i + 3] = 255;
    }
  }
  return { data, width: w, height: h };
}

t.test("custom system dithers to the requested size and color count", async t => {
  const res = dither(gradient(64, 48), { width: 32, height: 24, colors: 4 });
  t.equal(res.width, 32);
  t.equal(res.height, 24);
  t.equal(res.pal.length, 4);
  t.equal(res.img.length, 32 * 24);
  t.equal(res.rgba.length, 32 * 24 * 4);
  t.equal(res.native, undefined);
  const used = new Set(res.img);
  t.ok(used.size <= 4 && used.size >= 2, "used colors: " + used.size);
  for (const c of used) t.ok(res.pal.includes(c));
  for (const i of res.indexed) t.ok(i < 4);
  t.end();
});

t.test("custom palette is respected", async t => {
  const res = dither(gradient(16, 16),
    { width: 16, height: 16, colors: 2, palette: ['#ff0000', [0, 0, 255], 0x00ff00] });
  t.equal(res.pal.length, 2);
  for (const c of res.pal) t.ok([0xff0000ff, 0xffff0000, 0xff00ff00].includes(c), c.toString(16));
  t.end();
});

t.test("createSystem validates input", async t => {
  t.throws(() => createSystem({ width: 0, height: 10, colors: 4 }));
  t.throws(() => createSystem({ width: 10, height: 10, colors: 1 }));
  t.throws(() => createSystem({ width: 10, height: 10, colors: 4, palette: ['#000000', '#ffffff'] }));
  t.throws(() => createSystem({ width: 10, height: 10, colors: 2, palette: ['nope', '#ffffff'] }));
  const sys = createSystem({ width: 8, height: 8, colors: 2, id: 'mine' });
  t.equal(sys.id, 'mine');
  t.equal(sys.conv, 'DitheringCanvas');
  t.end();
});

t.test("built-in system by id produces native export", async t => {
  const sys = listSystems().find(s => s.id == 'c64.hires')!;
  const res = dither(gradient(100, 100), 'c64.hires', { diffuse: 0.5, ditherfn: kernels.FLOYD });
  t.equal(res.width, sys.width);
  t.ok(res.native && res.native.length > 0);
  t.same(exportNative(res.message, res.settings), res.native);
  t.throws(() => dither(gradient(4, 4), 'no.such.system'));
  t.end();
});

t.test("exportNative throws without exporter", async t => {
  const res = dither(gradient(8, 8), { width: 8, height: 8, colors: 2 });
  t.throws(() => exportNative(res.message, res.settings), /no native exporter/);
  t.end();
});

t.test("resizeImage averages and validates", async t => {
  const px = new Uint8Array([0, 0, 0, 255, 100, 200, 50, 255]);
  const out = resizeImage({ data: px, width: 2, height: 1 }, 1, 1);
  t.equal(out[0], (0xff000000 | (25 << 16) | (100 << 8) | 50) >>> 0);
  t.throws(() => resizeImage({ data: new Uint8Array(3), width: 2, height: 1 }, 1, 1));
  t.ok(palettes.MONO_RGB.length == 2);
  t.end();
});
