import { t } from "tap";
import { doTest, loadDither } from "../test-utils.js";
import { dither, getSystem, kernels } from "../../src/index.js";
import { getRGBChroma } from "../../src/common/color.js";
import * as exportfuncs from "../../src/export/exportfuncs.js";

doTest('msx', 'keyssunset.jpg', { maxiters: 20, quality: 100, diffuse: 0.5 });
doTest('msx', 'dhuku.jpg', { maxiters: 20, quality: 130, diffuse: 0.5 });

// horizontal black -> white gradient, RGBA bytes
function grayGradient(w: number, h: number) {
    const data = new Uint8Array(w * h * 4);
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const v = Math.round(255 * x / (w - 1));
            const i = (y * w + x) * 4;
            data[i] = data[i + 1] = data[i + 2] = v;
            data[i + 3] = 255;
        }
    }
    return { data, width: w, height: h };
}

t.test("MSX2 screen 2 export", async t => {
    const dt = await loadDither('msx2', 'keyssunset.jpg');
    Object.assign(dt.sysparams, { diffuse: 0.5, ditherfn: kernels.SIERRALITE });
    dt.setSettings(dt.sysparams);
    let last: any = null;
    dt.pixelsAvailable = (msg) => { last = msg; };
    dt.clear();
    let iters = 0;
    while (dt.iterate() && iters < 30) iters++;
    t.ok(last != null, 'produced a frame');
    t.equal(last.pal.length, 16, 'reduces the V9938 palette to 16 colors');

    const out = exportfuncs.exportMSX2(last, dt.sysparams);
    // pattern table (0x1800) + color table (0x1800) + 16 RGB333 palette entries
    t.equal(out.length, 0x3000 + 32, 'pattern table, color table and palette');
    let badColor = 0;
    for (let i = 0x1800; i < 0x3000; i++) {
        if ((out[i] >> 4) > 15 || (out[i] & 0xf) > 15) badColor++;
    }
    t.equal(badColor, 0, 'color table holds two 4-bit palette indices');
    let badPalette = 0;
    for (let i = 0x3000; i < out.length; i++) {
        if (out[i] & 0x88) badPalette++; // RGB333 entries keep the high bit clear
    }
    t.equal(badPalette, 0, 'palette entries are RGB333');
    t.end();
});

t.test("gray bias keeps a black-and-white image gray on MSX", async t => {
    const sys = getSystem('msx');
    const image = grayGradient(sys.width, sys.height);
    const options = { diffuse: 0.5, ditherfn: kernels.SIERRALITE, iterations: 40 };

    const plain = dither(image, 'msx', options);
    const plainUsed = Array.from(new Set(plain.indexed));
    t.ok(plainUsed.some(i => getRGBChroma(plain.pal[i]) > 16),
        "without the bias, midtones pick colorful palette entries");

    // 1.5 is the UI slider default (50); it must already be enough to go gray.
    for (const grayBias of [1.5, 3]) {
        const biased = dither(image, 'msx', { ...options, grayBias });
        const biasedUsed = Array.from(new Set(biased.indexed));
        t.ok(biasedUsed.length >= 2, `uses more than one gray (bias ${grayBias})`);
        for (const i of biasedUsed) {
            t.ok(getRGBChroma(biased.pal[i]) <= 8,
                "uses only gray palette entries, got " + biased.pal[i].toString(16));
        }
        t.equal(biased.settings.grayBias, grayBias);
    }
    t.end();
});

t.test("gray bias leaves a saturated image colorful", async t => {
    const sys = getSystem('msx');
    const image = grayGradient(sys.width, sys.height);
    // tint the gradient red so every pixel is clearly colorful
    for (let i = 0; i < image.data.length; i += 4) {
        image.data[i + 1] = 0;
        image.data[i + 2] = 0;
    }
    const res = dither(image, 'msx', { diffuse: 0.5, ditherfn: kernels.SIERRALITE, iterations: 40, grayBias: 3 });
    const used = Array.from(new Set(res.indexed));
    t.ok(used.some(i => getRGBChroma(res.pal[i]) > 16), "still uses color");
    t.end();
});
