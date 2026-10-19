import { smokeTestSystem, systemChunk } from "../system-smoke.js";

// 3 of 6 shards of the all-systems smoke test (see system-smoke.ts)
systemChunk(2, 6).forEach(smokeTestSystem);
