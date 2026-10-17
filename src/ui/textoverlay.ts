// Text overlay for the target-resolution image.
//
// This is the "tier 0" approach: the browser's own rasterizer draws the glyphs
// (Canvas2D fillText), we threshold the alpha channel to a 1-bit mask, then
// composite the mask with palette-snapped colors. Because every composited
// color is an exact palette entry, the ditherer sees zero error at those
// pixels, so the browser's anti-aliasing (and whatever hinting it does or
// doesn't apply) never reaches the output.
//
// The mask is built at the *target* resolution, not the source resolution:
// downscaling already-rasterized glyphs through pica turns them into mush.

// Shipped with the app via `make setup` (SIL OFL 1.1, see
// fonts/press-start-2p-LICENSE.txt).
const PIXEL_FONT_FAMILY = 'Press Start 2P';
const PIXEL_FONT_URL = 'fonts/press-start-2p-latin-400-normal.woff2';

// Google Fonts are fetched on demand (CSS API -> woff2). Google serves the
// font files with `access-control-allow-origin: *`, so this works cross-origin
// without any server-side proxy. The bundled pixel font above stays the offline
// default; everything else degrades to `monospace` until it loads.

// Mask values.
const MASK_NONE = 0;
const MASK_BG = 1;
const MASK_FG = 2;

// Hash keys for the controls this module owns.
const URL_KEYS: { [id: string]: string } = {
    textOverlayEnable: 'texton',
    textOverlayInput: 'text',
    textOverlayFont: 'font',
    textOverlaySize: 'fsize',
    textOverlayScaleX: 'fsx',
    textOverlayScaleY: 'fsy',
    textOverlayLineHeight: 'flh',
    textOverlayX: 'fx',
    textOverlayY: 'fy',
    textOverlayFg: 'fg',
    textOverlayBg: 'bg',
    textOverlayBox: 'fbox',
};

// Font scale factors: clamp to something sane so we never divide by zero.
function clampScale(v: number): number {
    if (!isFinite(v) || v <= 0) return 1;
    return Math.min(v, 16);
}

// Line height multiplier: allow tightening/loosening, but not to nonsense.
function clampLineHeight(v: number): number {
    if (!isFinite(v) || v <= 0) return 1.2;
    return Math.min(Math.max(v, 0.5), 4);
}

function elem<T extends HTMLElement>(id: string): T {
    return document.getElementById(id) as T;
}

function debounce(fn: () => void, ms: number): () => void {
    let timer: any = 0;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, ms);
    };
}

// Packed "#rrggbb" -> r | g<<8 | b<<16 (the format palettes/tmp use).
export function hexToPackedRGB(hex: string): number {
    const v = parseInt((hex || '').replace('#', ''), 16);
    if (isNaN(v)) return 0xffffff;
    return ((v >> 16) & 0xff) | (v & 0xff00) | ((v & 0xff) << 16);
}

// Nearest palette entry to a packed RGB value (roughly perceptual weights).
function snapToPalette(rgb: number, pal: Uint32Array | number[] | undefined): number {
    if (!pal || pal.length == 0) return rgb & 0xffffff;
    const r = rgb & 0xff, g = (rgb >> 8) & 0xff, b = (rgb >> 16) & 0xff;
    let best = rgb & 0xffffff, bestscore = Infinity;
    for (let i = 0; i < pal.length; i++) {
        const c = pal[i];
        const dr = r - (c & 0xff), dg = g - ((c >> 8) & 0xff), db = b - ((c >> 16) & 0xff);
        const score = dr * dr * 0.3 + dg * dg * 0.6 + db * db * 0.1;
        if (score < bestscore) {
            bestscore = score;
            best = c & 0xffffff;
        }
    }
    return best;
}

type TextControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * Owns the overlay controls (#textOverlay*), the font, and the compositing.
 *
 * @param onChange    called when a control changes so the image is re-rendered
 * @param onURLChange called so the location hash can be updated (replace=true)
 */
export class TextOverlay {
    private enable = elem<HTMLInputElement>('textOverlayEnable');
    private section = elem<HTMLElement>('textOverlaySection');
    private input = elem<HTMLTextAreaElement>('textOverlayInput');
    private font = elem<HTMLSelectElement>('textOverlayFont');
    private size = elem<HTMLInputElement>('textOverlaySize');
    private scaleX = elem<HTMLInputElement>('textOverlayScaleX');
    private scaleY = elem<HTMLInputElement>('textOverlayScaleY');
    private lineHeight = elem<HTMLInputElement>('textOverlayLineHeight');
    private x = elem<HTMLInputElement>('textOverlayX');
    private y = elem<HTMLInputElement>('textOverlayY');
    private fg = elem<HTMLInputElement>('textOverlayFg');
    private bg = elem<HTMLInputElement>('textOverlayBg');
    private box = elem<HTMLInputElement>('textOverlayBox');
    private defaults: { [id: string]: string } = {};
    // Families that the browser resolves itself; never fetched.
    private static GENERIC_FONTS = new Set(['monospace', 'sans-serif', 'serif',
        'cursive', 'fantasy', 'system-ui']);
    // Bundled locally by `make setup`; never fetched.
    private static LOCAL_FONTS = new Set([PIXEL_FONT_FAMILY]);
    private fontLoads = new Map<string, Promise<void>>();
    private loadedFont = '';

    constructor(private onChange: () => void, private onURLChange: (replace: boolean) => void) {
        for (const el of this.controls())
            this.defaults[el.id] = TextOverlay.value(el);
        for (const el of this.controls()) {
            if (el === this.input) continue; // handled by the debounced listener below
            el.addEventListener('change', () => {
                this.syncVisibility();
                this.requestFont();
                this.onChange();
                this.onURLChange(true);
            });
        }
        // live-ish feedback while typing, but debounced: the 'change' event on a
        // textarea only fires on blur, and a full re-dither per keystroke is too slow
        this.input.addEventListener('input', debounce(() => {
            this.onChange();
            this.onURLChange(true);
        }, 400));
        this.loadLocalFont();
        this.syncVisibility();
    }

    private controls(): TextControl[] {
        return [this.enable, this.input, this.font, this.size, this.scaleX, this.scaleY,
            this.lineHeight, this.x, this.y, this.fg, this.bg, this.box];
    }

    private static value(el: TextControl): string {
        if (el instanceof HTMLInputElement && el.type == 'checkbox') return el.checked ? '1' : '0';
        return el.value;
    }

    private static isFetchable(family: string): boolean {
        return !!family
            && !TextOverlay.GENERIC_FONTS.has(family.toLowerCase())
            && !TextOverlay.LOCAL_FONTS.has(family);
    }

    private loadLocalFont() {
        if (typeof FontFace === 'undefined') return;
        try {
            const face = new FontFace(PIXEL_FONT_FAMILY, 'url(' + PIXEL_FONT_URL + ')');
            face.load().then((f) => {
                // FontFaceSet.add() is only typed via lib "DOM.Iterable", which
                // this project doesn't include.
                (document.fonts as FontFaceSet & { add(font: FontFace): void }).add(f);
                // re-render now that the real (pixel) font is available
                if (this.enabled) this.onChange();
            }).catch((e) => console.warn('Dithertron: could not load pixel font', e));
        } catch (e) {
            console.warn('Dithertron: FontFace unavailable', e);
        }
    }

    /**
     * Ensure the selected font is available, fetching it from Google Fonts on
     * demand, and re-render once the glyphs actually arrive (otherwise the
     * first pass would silently draw the fallback face).
     */
    private requestFont() {
        const family = this.font.value;
        if (family == this.loadedFont) return;
        this.loadedFont = family;
        if (!TextOverlay.isFetchable(family)) return;
        this.loadGoogleFont(family).then(() => {
            if (this.enabled) this.onChange();
        });
    }

    private loadGoogleFont(family: string): Promise<void> {
        const pending = this.fontLoads.get(family);
        if (pending) return pending;
        const promise = new Promise<void>((resolve) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.crossOrigin = 'anonymous';
            link.href = 'https://fonts.googleapis.com/css2?family=' +
                family.trim().replace(/ /g, '+') + '&display=swap';
            link.onload = () => {
                // The stylesheet only registers the @font-face; wait for the
                // font data itself before rendering.
                if (typeof document.fonts != 'undefined' && document.fonts.load)
                    document.fonts.load('16px "' + family + '"').then(() => resolve(), () => resolve());
                else
                    resolve();
            };
            link.onerror = () => {
                console.warn('Dithertron: could not load font', family);
                resolve();
            };
            document.head.appendChild(link);
        });
        this.fontLoads.set(family, promise);
        return promise;
    }

    get enabled(): boolean {
        return this.enable.checked;
    }

    syncVisibility() {
        this.section.style.display = this.enable.checked ? '' : 'none';
    }

    // --- URL persistence ---

    appendQueryParams(qs: { [name: string]: string }) {
        for (const el of this.controls()) {
            const value = TextOverlay.value(el);
            if (value != this.defaults[el.id]) qs[URL_KEYS[el.id]] = value;
        }
    }

    /** Returns true if applying the params changed any control. */
    applyQueryParams(qs: { [name: string]: string }): boolean {
        let changed = false;
        for (const el of this.controls()) {
            const value = qs[URL_KEYS[el.id]] ?? this.defaults[el.id];
            if (el instanceof HTMLSelectElement) {
                if (el.value != value && Array.from(el.options).some((o) => o.value == value)) {
                    el.value = value;
                    changed = true;
                }
            } else if (el instanceof HTMLInputElement && el.type == 'checkbox') {
                const checked = value == '1' || value == 'true';
                if (el.checked != checked) {
                    el.checked = checked;
                    changed = true;
                }
            } else if (el.value != value) {
                el.value = value;
                changed = true;
            }
        }
        this.requestFont();
        this.syncVisibility();
        return changed;
    }

    // --- rendering ---

    private renderMask(width: number, height: number): Uint8Array | null {
        const text = this.input.value;
        if (!this.enabled || !text || width <= 0 || height <= 0) return null;
        const size = Math.max(1, Math.round(parseFloat(this.size.value) || 8));
        const scaleX = clampScale(parseFloat(this.scaleX.value));
        const scaleY = clampScale(parseFloat(this.scaleY.value));
        const lineHeight = clampLineHeight(parseFloat(this.lineHeight.value));
        const x = Math.round(parseFloat(this.x.value) || 0);
        const y = Math.round(parseFloat(this.y.value) || 0);
        // one draw call per line; advance is in unscaled (1x) pixels
        const lines = text.replace(/\r\n?/g, '\n').split('\n');
        const advance = size * lineHeight;
        const off = document.createElement('canvas');
        off.width = width;
        off.height = height;
        const ctx = off.getContext('2d', { willReadFrequently: true } as any) as CanvasRenderingContext2D | null;
        if (!ctx) return null;
        // Don't quote generic families ("sans-serif" etc.), only named ones.
        const family = this.font.value || PIXEL_FONT_FAMILY;
        const familyCss = TextOverlay.GENERIC_FONTS.has(family.toLowerCase())
            ? family : '"' + family + '"';
        ctx.font = size + 'px ' + familyCss + ', monospace';
        ctx.textBaseline = 'top';
        ctx.fillStyle = '#fff';
        const mask = new Uint8Array(width * height);
        if (this.box.checked) {
            // metrics are measured at 1x, so scale the box bounds ourselves
            let textWidth = 0;
            for (const line of lines)
                textWidth = Math.max(textWidth, ctx.measureText(line).width);
            const x0 = Math.max(0, x - 1), y0 = Math.max(0, y - 1);
            const x1 = Math.min(width, x + Math.ceil(textWidth * scaleX) + 1);
            const y1 = Math.min(height,
                y + Math.ceil((advance * (lines.length - 1) + size * 1.25) * scaleY) + 1);
            for (let by = y0; by < y1; by++)
                for (let bx = x0; bx < x1; bx++)
                    mask[by * width + bx] = MASK_BG;
        }
        // Draw the glyphs through the scale transform, so the text origin still
        // lands on the target pixel (x, y).
        ctx.save();
        ctx.scale(scaleX, scaleY);
        for (let i = 0; i < lines.length; i++)
            ctx.fillText(lines[i], x / scaleX, (y + i * advance) / scaleY);
        ctx.restore();
        // threshold the alpha channel: this is the tier-0 "hinting" step
        const data = ctx.getImageData(0, 0, width, height).data;
        for (let i = 0; i < mask.length; i++)
            if (data[i * 4 + 3] >= 128) mask[i] = MASK_FG;
        return mask;
    }

    /**
     * Composite the overlay into a target-resolution RGBA buffer, in place.
     * `pal` is the active system palette; the chosen colors are snapped to it.
     */
    apply(imageData: Uint32Array, width: number, height: number, pal: Uint32Array | number[] | undefined) {
        const mask = this.renderMask(width, height);
        if (!mask) return;
        const fg = snapToPalette(hexToPackedRGB(this.fg.value), pal);
        const bg = snapToPalette(hexToPackedRGB(this.bg.value), pal);
        const u8 = new Uint8ClampedArray(imageData.buffer);
        for (let i = 0; i < mask.length; i++) {
            const m = mask[i];
            if (m == MASK_NONE) continue;
            const col = m == MASK_FG ? fg : bg;
            const o = i * 4;
            u8[o] = col & 0xff;
            u8[o + 1] = (col >> 8) & 0xff;
            u8[o + 2] = (col >> 16) & 0xff;
            u8[o + 3] = 255;
        }
    }
}
