import { t } from "tap";
import { doTest } from "../test-utils.js";
import { dither, getSystem, kernels } from "../../src/index.js";
import { getRGBChroma } from "../../src/common/color.js";

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

t.test("gray bias keeps a black-and-white image gray on MSX", async t => {
    const sys = getSystem('msx');
    const image = grayGradient(sys.width, sys.height);
    const options = { diffuse: 0.5, ditherfn: kernels.SIERRALITE, iterations: 40 };

    const plain = dither(image, 'msx', options);
    const plainUsed = Array.from(new Set(plain.indexed));
    t.ok(plainUsed.some(i => getRGBChroma(plain.pal[i]) > 16),
        "without the bias, midtones pick colorful palette entries");

    const biased = dither(image, 'msx', { ...options, grayBias: 3 });
    const biasedUsed = Array.from(new Set(biased.indexed));
    t.ok(biasedUsed.length >= 2, "uses more than one gray");
    for (const i of biasedUsed) {
        t.ok(getRGBChroma(biased.pal[i]) <= 8,
            "uses only gray palette entries, got " + biased.pal[i].toString(16));
    }
    t.equal(biased.settings.grayBias, 3);
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
