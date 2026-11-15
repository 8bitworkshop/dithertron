import { t } from "tap";
import { loadDither, doDither, compareWithRef, doTest } from "../test-utils.js";
import * as kernels from "../../src/dither/kernels.js";

t.test("Can restart dithertron", async t => {
  var dt = await loadDither('c64.hires', 'seurat.jpg');
  await doDither(dt, dt.sysparams.id + '-1', 10);
  await compareWithRef(t, dt, 150, 50);
  dt.sysparams.diffuse = 0.5;
  dt.sysparams.ditherfn = kernels.SIERRALITE;
  await doDither(dt, dt.sysparams.id + '-2', 25);
  await compareWithRef(t, dt, 100, 40);
  t.end();
});

t.test("Serpentine scan does not leak error between iterations", async t => {
  // The mirrored kernel on right-to-left rows used to deposit error into
  // pixels that had already been scanned. That stale error carried over into
  // the next iteration and made the dither oscillate instead of converging.
  var dt = await loadDither('apple2.hires', 'myersflat.jpg');
  dt.sysparams.diffuse = 0.75;
  dt.sysparams.ditherfn = kernels.FLOYD;
  dt.sysparams.serpentine = true;
  var iters = 0;
  while (dt.iterate() && iters < 50) iters++;
  t.ok(iters < 50, "should converge, took " + iters + " iterations");
  var dc = dt.dithcanv!;
  dc.commit = () => { };    // freeze the block params
  dc.errorThreshold = 0;    // accept every pixel change
  dc.iterate();
  t.equal(dc.changes, 0, "an iteration with frozen params must be stable");
  t.end();
});
