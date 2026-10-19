#!/usr/bin/env node
/**
 * Release helper: bump the package version, move the changelog's Unreleased
 * entries under the new version, commit, and tag.
 *
 *   npm run release -- patch
 *   npm run release -- minor --push
 *   npm run release -- 1.0.0 --push
 *
 * Runs `npm run typecheck` and `npm test` first (skip with --no-tests) and
 * refuses to run on a dirty tree. `--dry-run` prints the plan and stops
 * before anything is written.
 *
 * The tag is what CI/`prepublishOnly` sees; publishing is a separate step:
 *
 *   npm publish
 *   git push --follow-tags
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { bumpVersion, releaseChangelog, today } from './release-lib.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const push = args.includes('--push');
const skipTests = args.includes('--no-tests');
const kind = args.find((arg) => !arg.startsWith('--'));

function fail(message) {
  console.error(`release: ${message}`);
  process.exit(1);
}

if (!kind) {
  fail('usage: npm run release -- <patch|minor|major|x.y.z> [--push] [--dry-run] [--no-tests]');
}

const run = (cmd, cmdArgs) => execFileSync(cmd, cmdArgs, { cwd: root, stdio: 'inherit' });
const capture = (cmd, cmdArgs) =>
  execFileSync(cmd, cmdArgs, { cwd: root, encoding: 'utf8' }).trim();

// Fail early rather than committing a release on top of unrelated changes.
if (capture('git', ['status', '--porcelain'])) {
  fail('working tree is not clean; commit or stash first');
}
if (capture('git', ['rev-parse', '--abbrev-ref', 'HEAD']) === 'HEAD') {
  fail('detached HEAD; check out a branch first');
}

const changelogPath = join(root, 'CHANGELOG.md');
const changelog = readFileSync(changelogPath, 'utf8');
const current = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')).version;
const next = bumpVersion(current, kind);
const tag = `v${next}`;
const updatedChangelog = releaseChangelog(changelog, next, today());

if (capture('git', ['tag', '--list', tag])) {
  fail(`tag ${tag} already exists`);
}

if (next === current) {
  console.log(`release: releasing current version ${next} (no bump)`);
} else {
  console.log(`release: ${current} -> ${next}`);
}
console.log(`release: changelog ${updatedChangelog === changelog ? 'unchanged' : 'updated'}`);

if (dryRun) {
  console.log(`release: dry run, would commit and tag ${tag}`);
  process.exit(0);
}

if (!skipTests) {
  try {
    run('npm', ['run', 'typecheck']);
    run('npm', ['test']);
  } catch {
    fail('typecheck or tests failed; nothing was bumped');
  }
}

// Bump package.json and package-lock.json (npm version refuses a dirty tree
// only because it commits/tags by default; --no-git-tag-version keeps that
// here, so we commit both files with the changelog below).
run('npm', ['version', next, '--no-git-tag-version', '--allow-same-version']);
writeFileSync(changelogPath, updatedChangelog);
// The tree was verified clean above, so -A only picks up the bump and changelog.
run('git', ['add', '-A']);
run('git', ['commit', '-m', tag]);
run('git', ['tag', '-a', tag, '-m', tag]);

if (push) {
  run('git', ['push', '--follow-tags']);
  console.log(`release: pushed ${tag}`);
} else {
  console.log(`release: done. next:\n  npm publish\n  git push --follow-tags`);
}
