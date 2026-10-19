import { smokeTestSystem, systemChunk } from "../system-smoke.js";

// 2 of 6 shards of the all-systems smoke test (see system-smoke.ts)
systemChunk(1, 6).forEach(smokeTestSystem);
