# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build System
- `npm run build` - Build UI and worker bundles into ./dist with esbuild
- `npm run build:lib` - Build the npm library (ESM + declarations) into ./gen
- `npm run clean` - Remove generated ./gen and ./dist directories
- `make setup` - Copy dependencies to lib/ and fonts/ directories (Unix/macOS)
- `make setupwin` - Copy dependencies to lib/ and fonts/ directories (Windows)
- `make watch` - Development mode with auto-rebuild and local server on port 8189

### Individual Build Commands
- `npm run esbuild-worker` - Build worker.js bundle for web worker
- `npm run esbuild-ui` - Build ui.js bundle for main UI (includes .asm file loading)
- `npm run typecheck` - Type-check all TypeScript sources

### Testing
- `npm run test` - Run all tests (unit + web)
- `npm run test-unit` - Run unit tests using tap framework
- `npm run test-web` - Run browser tests using Nightwatch (headless)

## Architecture Overview

Dithertron is a web-based image dithering tool that converts modern images to retro computer graphics formats. The architecture follows a web worker pattern to keep the UI responsive during computation-intensive dithering operations.

### Core Components

**Main Thread (src/ui/ui.ts)**
- Handles UI interactions, image uploads, and system selection
- Manages image preprocessing (cropping, brightness, contrast, saturation)
- Communicates with web worker via ProxyDithertron class
- Controls export functionality and file downloads

**Web Worker (src/worker/worker.ts)**
- Executes dithering computations in separate thread
- Instantiates core Dithertron class for iterative processing
- Sends pixel data updates back to main thread

**Dithering Engine (src/dither/dithertron.ts)**
- Central orchestrator managing settings, source images, and iterations
- Uses simulated annealing approach with decreasing noise over time
- Coordinates with system-specific canvas implementations

### npm Library

`src/index.ts` is the package entry point (no DOM/UI imports allowed there). `src/api.ts` holds the
headless wrapper: `dither()`, `createSystem()` (user-defined width/height/colors via `DitheringCanvas`),
`exportNative()`, `resizeImage()`. Tests: `test/unit/test-library.ts`. UI deps are devDependencies;
the published package has none. `npm run build:lib` emits ESM plus declarations into `gen/`; `prepack`
builds it before packing and `prepublishOnly` runs typecheck + unit tests. Relative imports use explicit
`.js` specifiers so the published output runs in Node ESM without a bundler.

### Canvas Class Hierarchy

Canvas classes live in `src/dither/canvas.ts` and `src/dither/basecanvas.ts`. The inheritance chain is:

```
BaseDitheringCanvas                    — core pixel update, error diffusion, palette matching
├── DitheringCanvas                    — simple reduced-palette mode (no block constraints)
├── ParamDitherCanvas                  — adds per-block parameter guessing (abstract)
│   └── BasicParamDitherCanvas         — block-based with simple w/h (abstract)
│       └── TwoColor_Canvas            — 2-color-per-block histogram guessing (abstract)
│           ├── OneColor_Canvas        — bg + 1 foreground per block (abstract)
│           │   └── Msx_Canvas         — MSX/TMS9918A scanline constraints
│           ├── Apple2_Canvas          — Apple II hi-res color bleeding
│           ├── Compucolor_Canvas      — Compucolor 2x4 blocks
│           └── Teletext_Canvas        — Teletext 2x3 blocks
├── BlockParamDitherCanvas             — complex multi-param blocks (abstract)
│   └── CommonBlockParamDitherCanvas   — shared histogram/scoring logic (abstract)
│       ├── VICII_Canvas               — C64 multicolor/hires/FLI
│       ├── ZXSpectrum_Canvas          — bright/dark attribute clash
│       ├── SNES_Canvas                — planar tile formats (SNES, NES planar, Genesis, Game Gear, etc.)
│       ├── SNES_Canvas_Direct         — SNES direct color mode
│       ├── Stic_Fgbg_Canvas           — Intellivision FGBG mode
│       ├── Stic_ColorStack_Canvas     — Intellivision Color Stack
│       └── VCSColorPlayfield_Canvas   — Atari VCS color playfield
├── HAM6_Canvas                        — Amiga Hold-And-Modify
└── (others as needed)
```

Each canvas class implements:
- `getValidColors(imageIndex)` — returns palette indices valid at a given pixel position
- `guessParam()` / `guessBlockParam()` — analyzes histogram to pick best colors per block
- `init()` — allocates parameter arrays
- `commit()` — finalizes all parameters after an iteration

### System Configuration (src/settings/systems.ts)

Systems are defined as `DithertronSettings` objects (types in `src/common/types.ts`). Key fields:

| Field | Purpose |
|-------|---------|
| `id`, `name` | Identifier and display name |
| `width`, `height` | Target resolution in pixels |
| `scaleX` | Aspect ratio correction factor |
| `conv` | Canvas class name (string, resolved at runtime in worker) |
| `pal` | Palette as `number[]` or `Uint32Array` of packed RGB values |
| `block` | Block geometry: `{w, h, colors, xb?, yb?, msbToLsb?}` |
| `cell` | Cell/tile bit packing: `{w, h, msbToLsb}` |
| `cb` | Color block (separate from pixel block): `{w, h, xb?, yb?}` |
| `paletteChoices` | Constraints on bg/aux/border/pixel color selection ranges |
| `reduce` | Number of palette colors to reduce to (for DitheringCanvas) |
| `param` | Parameter allocation: `{block?, cb?, cell?, extra?}` |
| `subPalettes` | Shared sub-palettes picked per block by `SubPalette_Canvas`: `{count, colors?, sharedFirstColor?, area?}`. `area` (pixels) makes several blocks share one choice, e.g. NES attributes are 16x16. `count: 1` gives a single-palette preset |
| `tiles` | Limit distinct tiles: `{max, flipX?, flipY?}`. Chosen by `TileCodebook` (`src/dither/tilecodebook.ts`) after the dither settles; works for full-palette and sub-palette canvases (see `tileSlotColors`). Works best with ordered dithering |
| `fli` | C64 FLI settings: `{bug, blankLeft, blankRight, blankColumns}` |
| `customize` | System-specific options (e.g. `flipPalette`, `planeToMemory`, `singleColor`) |
| `toNative` | Export function name in `src/export/exportfuncs.ts` |
| `exportFormat` | Binary format spec: `{bpp, np, brev, flip, yremap, bitremap}` |

A `null` entry in the SYSTEMS array acts as a UI separator (systems above the separator have runnable 8bitworkshop source code).

### Palette Definitions (src/settings/palettes.ts)

Palettes are arrays of packed RGB values using `RGB(r, g, b)` which packs as `r | (g << 8) | (b << 16)`. Each system references a specific palette constant.

### Export System (src/export/exportfuncs.ts)

Multi-format export supporting:
- Native binary formats (C64 PRG, NES CHR, Apple II binary)
- Assembly code generation with system-specific templates (loaded from .asm files)
- PNG image export for preview
- Direct integration with 8bitworkshop for immediate testing

### Adding a New System

To add a new retro system:
1. **Define palette** in `src/settings/palettes.ts` if not already present
2. **Choose or create canvas class** in `src/dither/canvas.ts`:
   - Simple reduced palette → use `DitheringCanvas` (set `reduce` in settings)
   - 2-color blocks → extend `TwoColor_Canvas` or `OneColor_Canvas`
   - Multi-color blocks with parameters → extend `CommonBlockParamDitherCanvas`
3. **Register canvas** in the canvas registry (worker resolves by string name)
4. **Add system entry** to `SYSTEMS` array in `src/settings/systems.ts`
5. **Add export function** in `src/export/exportfuncs.ts` if native export is needed

### Development Notes

- TypeScript target is ES2017 with DOM libraries
- Uses esbuild for fast bundling with sourcemaps
- Worker bundle excludes Node.js modules (path, fs)
- UI bundle includes .asm text file loading capability
- Strict typing disabled but function types enforced
- Testing covers both unit tests (tap) and browser automation (Nightwatch)