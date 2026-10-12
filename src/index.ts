// Public API of the `dithertron` npm package (no DOM or UI dependencies).
export * from "./api";
export { Dithertron, MAX_ITERATE_COUNT } from "./dither/dithertron";
export { SYSTEMS, SYSTEM_LOOKUP } from "./settings/systems";
export * as palettes from "./settings/palettes";
export * as kernels from "./dither/kernels";
export * as exportfuncs from "./export/exportfuncs";
export { ERROR_FUNCTIONS } from "./common/color";
export * from "./common/types";
