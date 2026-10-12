# Changelog

All notable changes to Dithertron are documented here. Versions follow the
`package.json` version history.

## 1.3.0

- Preserve settings in the URL hash and restore them on back/forward navigation; slider values included.
- Generalized Game Boy Color palette handling into `SubPalette_Canvas`; NES attributes via sub-palettes.
- Added tile codebook for tile reuse on NES full-screen images, plus tile settings for GB/SMS.
- New System/Game Gear/Game Boy tile-palette systems (`sms.tiles`, `sms-gg.tiles`, `gb.color.tiles`,
  `genesis.tiles`) with proper palettes and 6-bit CRAM / tile-format `.asm` exports for NES, SMS, GG, GB, GBC.
- Mark preview-only systems with `*`; list exportable systems first; show system caveats; fixed HAM6 and
  added Amiga native export.
- Redesigned file selector with drag/drop; selecting images no longer clears the URL hash; longer 8bitworkshop
  URLs are stored directly in local storage.
- Fixed aspect ratios; show crop width x height; more accurate `getSystemInfo()`.
- Added preset audit and smoke tests; enabled `strictNullChecks`; pinned GitHub workflow actions.
- Published as the `dithertron` npm library: `dither()`, `createSystem()` for user-defined
  width/height/color count, `exportNative()`, plus the built-in systems, palettes and kernels.
  ESM, CJS and type declarations are built into `dist/` with `npm run build-lib`.
- UI-only packages (jquery, bootstrap, ...) moved to `devDependencies`.
- `package.json` license corrected to GPL-3.0 to match `LICENSE`.

## 1.2.2 — 2025-10-31

- Added Intellivision STIC dithering (color stack and one-BG modes), SNES dithering and experimental SNES export,
  ZX Spectrum bright/dark modes, VIC-20 cell export, and fixed TMS9918 Coleco transparency.
- Added unit tests (tap), `devcontainer.json`, `make setupwin`, and an improved GitHub workflow; refactored
  core code for testability (manual `restart()`, temperature falloff, similarity tests).
- Exact width/height source images now skip cropping and convert pixel-to-pixel.
- Fixed "rgba array mismatch", C64 hires color-block copy, and layout/responsive UI issues.
- Added error dialog for fingerprinting protection; upgraded Bootstrap to 4.6.2 and applied npm audit fixes.

## 1.2.1 — 2023-11-13

- Grouped system sub-types in the selector with `<optgroup>`.
- Preliminary VIC-20 dithering support.
- Added Nightwatch browser tests and `make watch`; moved several dependencies to imports.

## 1.1.21 — 2023-11-12

- Refactored into TypeScript modules and used esbuild text loaders for `.asm` files.
- Added GitHub workflow to build and deploy to GitHub Pages.
- VIC-II FLI improvements: bad-line bug handling, freeze color params after 50%, X-direction border sampling.

## 1.1.20 — 2023-11-06

- Added PC Engine support.
- Added C64 Multi FLI (MCI) support.

## 1.1.19 — 2023-10-26

- Fixed issues for TypeScript strict checking.
- Added MC6847 CG2/CG3/CG6 modes.

## 1.0.18 — 2023-05-14

- Fixed NES error.
- Added Atari ST.
- Updated Sentry and other dependencies.

## 1.0.17 — 2022-11-22

- Added Atari 8-bit 800.
- Updated Cropper.js.

## 1.0.16 — 2022-11-21

- Fixed C64 hires not using all colors.

## 1.0.15 — 2022-11-17

- Added Teletext.
- Use CSS `aspect-ratio` for the output canvas; crop rectangle defaults to the system aspect ratio.
- Reduced ordered dither strength.

## 1.0.14 — 2022-09-13

- Added ordered (hybrid) dithering slider.
- Added Compucolor, Sega Game Gear, and Commander X16 modes.

## 1.0.13 — 2022-09-07

- Added Apple IIgs.

## 1.0.12 — 2022-09-02

- Added Atari 800 support and GTIA mode 9/10.
- Added more sample images.

## 1.0.11 — 2022-08-28

- Added Amiga modes, including HAM (untested).
- k-means-like palette reduction with a diversity slider.
- Save the current system in the URL fragment.
- Added LICENSE.

## 1.0.10 — 2022-08-24

- Tweaked C64 FLI assembly.

## 1.0.9 — 2022-08-23

- Added GTIA mode 10.

## 1.0.8 — 2022-08-23

- Added palette diversity slider.
- Remove similar colors during palette selection.

## 1.0.7 — 2022-08-22

- Updated palette reduction.

## 1.0.6 — 2022-08-22

- Removed `rnd()` to improve stability with low palettes.
- Fixed C64 hires regression.

## 1.0.5 — 2022-08-22

- Fixed C64 export; use the PAL palette; added C64 FLI option.

## 1.0.4 — 2021-12-05

- Added Amstrad CPC modes.

## 1.0.3 — 2021-09-20

- Added VCS color.

## 1.0.2 — 2021-08-02

- Added CGA/EGA modes (correct 1.37 aspect ratio), Game Boy, ZX Spectrum export, and Atari ANTIC mode D.
- Dependency updates.

## 1.0.0 — 2020-06-30

- Added full-screen NES mode.
- Palette selection based on the selected error function.
- "Open in 8bitworkshop" links and more export formats; native formats for C64 and Apple II.
- `TwoColor_Canvas` refactor; TMS9918A export; VCS and Astrocade export.
- Split source files; `Float32Array` error buffer; limited Channel F colors.

## 0.0.3 — 2020-06-25

- Converted to a web worker; TypeScript build.
- Added system selection and palette swatches; initial systems: Apple II hi-res, C64 (hires/multi), NES,
  VCS, SMS, and ZX Spectrum.
- Brightness/contrast and saturation sliders; selectable dither (error) function.
- Binary download buttons (Apple II hi-res initial).

## 0.0.1 — 2020-06-18

- Initial release.