import { t } from "tap";
import { dither, getSystem, kernels } from "../../src/index.js";

function solid(w: number, h: number, v: number) {
    const data = new Uint8Array(w * h * 4);
    for (let i = 0; i < w * h; i++) {
        data[i * 4] = data[i * 4 + 1] = data[i * 4 + 2] = v;
        data[i * 4 + 3] = 255;
    }
    return { data, width: w, height: h };
}

// The UI defaults for a photo: strong error diffusion, no ordered dithering.
const OPTIONS = {
    diffuse: 0.75,
    ordered: 0,
    noise: 5,
    ditherfn: kernels.FLOYD,
    serpentine: true,
    iterations: 100,
};

// Palettes with fewer than two gray shades cannot dither a gray ramp. The bias
// must not push grays toward their darkest, least colorful entry: that turned
// white into mid green on the Game Boy and mid gray into black on CGA.
for (const id of ['gb.tiles', 'x86.cga.04h.1']) {
    t.test(`gray bias is ignored on ${id} (no gray shades)`, async t => {
        const sys = getSystem(id);
        for (const v of [64, 128, 192, 224, 255]) {
            const image = solid(sys.width, sys.height, v);
            const plain = dither(image, id, OPTIONS);
            const biased = dither(image, id, { ...OPTIONS, grayBias: 1.5 });
            t.same(biased.indexed, plain.indexed, `gray ${v} is unchanged`);
        }
        t.end();
    });
}

t.test("gray bias still prefers grays when the palette has them", async t => {
    const sys = getSystem('msx');
    const opts = { ...OPTIONS, ditherfn: kernels.SIERRALITE };
    const plain = dither(solid(sys.width, sys.height, 192), 'msx', opts);
    const biased = dither(solid(sys.width, sys.height, 192), 'msx', { ...opts, grayBias: 1.5 });
    t.notSame(biased.indexed, plain.indexed, "the bias changes the result");
    t.end();
});
