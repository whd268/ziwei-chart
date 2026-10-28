# Development Progress

> L2 | Parent: `AGENTS.md`

## Current State

- Branch: `main`
- Source repository: `ziweiknows/ziwei-chart`
- Deployment mirror: `ruijayfeng/zwknows`
- Vercel should remain connected to `zwknows/main`
- Source-to-mirror sync verified through: `eb76a165dac652e24ac674d322386e7447a3acf0`
- Working tree was clean before this documentation task.

## Recently Completed

- Replaced the prefixed LICENSE layout with the unmodified canonical GNU GPLv3
  text so GitHub can identify the repository license; the project copyright and
  GPLv3-or-later notice remain explicit in README.
- Added a compact README repository-identity section with the canonical GitHub
  URL and facts verified from `app/package.json` and the application source.
- Added visible GitHub repository and MIT License links to the app shell.
- Added true solar time correction support.
- Added free-text birthplace matching.
- Added local city and region coordinate dataset from `88250/city-geo`.
- Added Vercel Analytics.
- Added GitHub Actions workflow to sync `ziwei/main` to `zwknows/main`.
- Added workflow validation test for `sync-zwknows.yml`.
- Fixed sync workflow credential persistence by setting `persist-credentials: false`.
- Confirmed workflow succeeds with a classic PAT stored as `ZWKNOWS_SYNC_TOKEN`.

## Organization Migration

The Chart source repository moved to `ziweiknows/ziwei-chart`; Ziwei Chat and
ZATI moved to `ziweiknows/ziwei-chat` and `ziweiknows/zati`. GitHub preserved
the repositories' public visibility, history, community assets, workflows, and
the Chart `ZWKNOWS_SYNC_TOKEN` secret. The post-transfer source-to-mirror sync
completed successfully at `8922cc2d738334e5d7bb6ee6f43f105870728c8b`.

## Known Verification Baseline

Previously passed:

```powershell
cd app
npm run lint
npm run test
npm run build
npm run test -- sync-zwknows
```

Reverified on 2026-07-31 after the LICENSE/README evidence update:

- ESLint passed.
- Vitest passed 28/28 application tests.
- The sync workflow test passed 2/2 tests.
- The TypeScript and Vite production build completed successfully.
- The local LICENSE matches GitHub's canonical GPL-3.0 template after trimming
  leading and trailing whitespace.

Known build note: Vite may report a large chunk warning. That warning was already
known and is not by itself a failure.

## Open Risks

- `CLAUDE.md` currently reads as mojibake in this environment and should not be
  treated as the primary agent entry point.
- The birthplace matching experience depends on the quality and coverage of the
  local coordinate dataset.
- The deployment mirror sync depends on the GitHub secret `ZWKNOWS_SYNC_TOKEN`
  retaining both `repo` and `workflow` permissions.
- `npm ci` currently reports 11 dependency audit findings (1 low, 2 moderate,
  8 high); remediation needs a separately scoped dependency review because this
  documentation/license change does not alter the lockfile.

## Next Useful Work

- Keep `ruijayfeng/zwknows` as the Vercel mirror unless the deployment model is
  deliberately migrated and revalidated.
- Consider replacing or migrating the garbled `CLAUDE.md` once the new docs have
  been accepted.
- Add feature-level tests whenever true solar time or birthplace matching behavior
  changes.
- Use GitHub issue templates for new feature, bug, and internal development work.
- Keep the in-app open source links pointed at `ziweiknows/ziwei-chart`.

[PROTOCOL]: Update this file after each feature, fix, release, deployment change,
or notable verification run.
