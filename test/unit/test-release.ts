import { t } from "tap";
// Plain .mjs helpers so the release script and these tests share one copy.
// @ts-ignore no type declarations for the script module
import { bumpVersion, releaseChangelog, today } from "../../scripts/release-lib.mjs";

t.test("bumpVersion increments patch, minor, and major", async t => {
  t.equal(bumpVersion("1.2.3", "patch"), "1.2.4");
  t.equal(bumpVersion("1.2.3", "minor"), "1.3.0");
  t.equal(bumpVersion("1.2.3", "major"), "2.0.0");
  t.end();
});

t.test("bumpVersion accepts an explicit version, including the current one", async t => {
  t.equal(bumpVersion("1.2.3", "0.2.0"), "0.2.0");
  t.equal(bumpVersion("1.2.3", "1.2.3"), "1.2.3");
  t.end();
});

t.test("bumpVersion rejects unknown bumps and malformed current versions", async t => {
  t.throws(() => bumpVersion("1.2.3", "huge"), /unknown bump/);
  t.throws(() => bumpVersion("1.2", "patch"), /not x\.y\.z/);
  t.end();
});

t.test("releaseChangelog moves Unreleased entries under the new version", async t => {
  const changelog = "## [Unreleased]\n\n### Added\n- thing\n";
  t.equal(
    releaseChangelog(changelog, "1.0.0", "2026-01-02"),
    "## [Unreleased]\n\n## [1.0.0] - 2026-01-02\n\n### Added\n- thing\n"
  );
  t.end();
});

t.test("releaseChangelog keeps already-released sections intact", async t => {
  const changelog = "## [Unreleased]\n\n### Added\n- thing\n";
  const text = `${changelog}\n## [0.1.0] - 2025-01-01\n\n- old\n`;
  t.equal(
    releaseChangelog(text, "1.0.0", "2026-01-02"),
    "## [Unreleased]\n\n## [1.0.0] - 2026-01-02\n\n### Added\n- thing\n\n## [0.1.0] - 2025-01-01\n\n- old\n"
  );
  t.end();
});

t.test("releaseChangelog adds an Unreleased section when missing", async t => {
  t.match(releaseChangelog("# Changelog\n", "1.0.0", "2026-01-02"),
    "## [Unreleased]\n\n## [1.0.0] - 2026-01-02\n");
  t.end();
});

t.test("today formats a local date as YYYY-MM-DD", async t => {
  t.equal(today(new Date(2026, 0, 2)), "2026-01-02");
  t.end();
});
