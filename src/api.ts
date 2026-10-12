import { DithertronSettings, DitherKernel, PixelsAvailableMessage } from "./common/types";
import { Dithertron, MAX_ITERATE_COUNT } from "./dither/dithertron";
import { SYSTEMS, SYSTEM_LOOKUP } from "./settings/systems";
import { generateRGBPalette } from "./settings/palettes";
import * as exportfuncs from "./export/exportfuncs";

/** A palette entry: packed `r | g<<8 | b<<16`, `#rrggbb`, or `[r, g, b]`. */
export type ColorInput = number | string | [number, number, number];

/** RGBA pixels, 4 bytes per pixel in R,G,B,A order (like canvas ImageData). */
export interface ImageInput {
    data: Uint8Array | Uint8ClampedArray | Uint32Array;
    width: number;
    height: number;
}

/** Describes a simple user-defined system: any size, N colors, no block constraints. */
export interface CustomSystemOptions {
    width: number;
    height: number;
    /** Number of colors in the output palette. */
    colors: number;
    /**
     * Colors to choose from. The best `colors` of them are picked for the image.
     * Defaults to every 12-bit RGB color, i.e. a fully adaptive palette.
     */
    palette?: ColorInput[] | Uint32Array;
    id?: string;
    name?: string;
    /** Pixel aspect ratio (display hint only). */
    scaleX?: number;
}

export interface DitherOptions {
    /** Maximum iterations (default and cap-for-convergence: MAX_ITERATE_COUNT + 1). */
    iterations?: number;
    /** Error diffusion strength, 0..1. */
    diffuse?: number;
    /** Ordered dither strength, 0..1. */
    ordered?: number;
    /** Initial noise (bit shift). */
    noise?: number;
    /** Error diffusion kernel, e.g. one of `kernels.FLOYD`. */
    ditherfn?: DitherKernel;
    /** How different the chosen palette colors should be. */
    paletteDiversity?: number;
    /** 'perceptual' (default), 'hue', 'dist' or 'max'. */
    errfn?: string;
}

export interface DitherResult {
    width: number;
    height: number;
    /** Palette actually used, as packed ABGR (alpha=255) values. */
    pal: Uint32Array;
    /** Palette index of each pixel. */
    indexed: Uint32Array;
    /** Dithered image, packed ABGR (little-endian RGBA bytes). */
    img: Uint32Array;
    /** Same memory as `img`, as RGBA bytes (ready for ImageData / PNG encoders). */
    rgba: Uint8ClampedArray;
    iterations: number;
    /** True if the algorithm converged before hitting the iteration limit. */
    converged: boolean;
    /** The settings used (including any custom system). */
    settings: DithertronSettings;
    /** Raw result, as accepted by the `export*` functions. */
    message: PixelsAvailableMessage;
    /** Native binary for the system, if it has an exporter (see `exportNative`). */
    native?: Uint8Array;
}

/** All built-in systems (skips UI separators). */
export function listSystems(): DithertronSettings[] {
    return SYSTEMS.filter((s): s is DithertronSettings => s != null);
}

export function getSystem(id: string): DithertronSettings {
    const sys = SYSTEM_LOOKUP[id];
    if (!sys) throw new Error("Unknown system: " + id);
    return sys;
}

function packColor(c: ColorInput): number {
    if (typeof c == 'number') return c & 0xffffff;
    if (typeof c == 'string') {
        const m = /^#?([0-9a-f]{6})$/i.exec(c.trim());
        if (!m) throw new Error("Bad color: " + c);
        const v = parseInt(m[1], 16);
        return ((v >> 16) & 0xff) | (v & 0xff00) | ((v & 0xff) << 16);
    }
    if (Array.isArray(c) && c.length >= 3) {
        return (c[0] & 0xff) | ((c[1] & 0xff) << 8) | ((c[2] & 0xff) << 16);
    }
    throw new Error("Bad color: " + c);
}

function isPositiveInt(n: any) {
    return typeof n == 'number' && Number.isInteger(n) && n > 0;
}

/** Builds a `DithertronSettings` for a user-defined width/height/color count. */
export function createSystem(opts: CustomSystemOptions): DithertronSettings {
    if (!isPositiveInt(opts.width) || !isPositiveInt(opts.height)) {
        throw new Error("width and height must be positive integers");
    }
    if (!isPositiveInt(opts.colors) || opts.colors < 2) {
        throw new Error("colors must be an integer >= 2");
    }
    const pal: number[] = opts.palette
        ? Array.from(opts.palette as ArrayLike<ColorInput>, packColor)
        : Array.from(generateRGBPalette(4, 4, 4));
    if (opts.colors > pal.length) {
        throw new Error("colors (" + opts.colors + ") exceeds palette size (" + pal.length + ")");
    }
    const id = opts.id || `custom.${opts.width}x${opts.height}x${opts.colors}`;
    const sys: DithertronSettings = {
        id,
        name: opts.name || id,
        width: opts.width,
        height: opts.height,
        conv: 'DitheringCanvas',
        pal,
        reduce: opts.colors,
    };
    if (opts.scaleX != null) sys.scaleX = opts.scaleX;
    return sys;
}

/**
 * Resizes RGBA pixels to `width` x `height` by area averaging (stretching to fit),
 * returning packed ABGR with alpha forced to 255.
 */
export function resizeImage(image: ImageInput, width: number, height: number): Uint32Array {
    const { width: sw, height: sh } = image;
    if (!isPositiveInt(sw) || !isPositiveInt(sh)) throw new Error("bad image size");
    if (image.data.byteLength != sw * sh * 4) {
        throw new Error(`image data is ${image.data.byteLength} bytes, expected ${sw * sh * 4}`);
    }
    const src = new Uint8Array(image.data.buffer, image.data.byteOffset, image.data.byteLength);
    const out = new Uint32Array(width * height);
    const out8 = new Uint8Array(out.buffer);
    const xs = sw / width, ys = sh / height;
    for (let y = 0; y < height; y++) {
        const y0 = y * ys, y1 = y0 + ys;
        for (let x = 0; x < width; x++) {
            const x0 = x * xs, x1 = x0 + xs;
            let r = 0, g = 0, b = 0, wsum = 0;
            for (let sy = Math.floor(y0); sy < Math.min(sh, Math.ceil(y1)); sy++) {
                const wy = Math.min(sy + 1, y1) - Math.max(sy, y0);
                for (let sx = Math.floor(x0); sx < Math.min(sw, Math.ceil(x1)); sx++) {
                    const w = wy * (Math.min(sx + 1, x1) - Math.max(sx, x0));
                    const i = (sy * sw + sx) * 4;
                    r += src[i] * w; g += src[i + 1] * w; b += src[i + 2] * w;
                    wsum += w;
                }
            }
            const o = (y * width + x) * 4;
            out8[o] = Math.round(r / wsum);
            out8[o + 1] = Math.round(g / wsum);
            out8[o + 2] = Math.round(b / wsum);
            out8[o + 3] = 255;
        }
    }
    return out;
}

/**
 * Converts the result of `dither()` (or any `PixelsAvailableMessage`) to the
 * system's native binary format. Throws if the system has no exporter.
 */
export function exportNative(message: PixelsAvailableMessage, settings: DithertronSettings): Uint8Array {
    const name = settings.toNative;
    const fn = name && (exportfuncs as any)[name];
    if (typeof fn != 'function') {
        throw new Error("System " + settings.id + " has no native exporter");
    }
    return fn(message, settings);
}

/**
 * Dithers `image` for `system`, which is a built-in system id, a
 * `DithertronSettings` object, or `CustomSystemOptions` for a user-defined one.
 * The image is resized (stretched) to the system's width x height if needed.
 * Runs synchronously; for big images use a worker.
 */
export function dither(
    image: ImageInput,
    system: string | DithertronSettings | CustomSystemOptions,
    options: DitherOptions = {}
): DitherResult {
    let settings: DithertronSettings;
    if (typeof system == 'string') {
        settings = getSystem(system);
    } else if ('conv' in system) {
        settings = system;
    } else {
        settings = createSystem(system);
    }
    settings = Object.assign({}, settings);
    for (const k of ['diffuse', 'ordered', 'noise', 'ditherfn', 'paletteDiversity', 'errfn'] as const) {
        if (options[k] != null) (settings as any)[k] = options[k];
    }
    const { width, height } = settings;
    let pixels: Uint32Array;
    if (image.data instanceof Uint32Array && image.width == width && image.height == height) {
        pixels = new Uint32Array(image.data); // already the right size; copy so the caller's data is untouched
        if (pixels.length != width * height) throw new Error("image size mismatch");
    } else {
        pixels = resizeImage(image, width, height);
    }

    const dt = new Dithertron();
    dt.setSettings(settings);
    dt.setSourceImage(pixels);
    let last: PixelsAvailableMessage | null = null;
    dt.pixelsAvailable = (msg) => { last = msg; };
    const maxIters = options.iterations ?? MAX_ITERATE_COUNT + 1;
    let iterations = 0;
    let more = true;
    while (more && iterations < maxIters) {
        more = dt.iterate();
        iterations++;
    }
    if (!last) throw new Error("no iterations were run");
    const message: PixelsAvailableMessage = last;
    const result: DitherResult = {
        width: message.width,
        height: message.height,
        pal: message.pal,
        indexed: message.indexed,
        img: message.img,
        rgba: new Uint8ClampedArray(message.img.buffer, message.img.byteOffset, message.img.byteLength),
        iterations,
        converged: !more,
        settings: dt.sysparams,
        message,
    };
    if (settings.toNative) result.native = exportNative(message, dt.sysparams);
    return result;
}
