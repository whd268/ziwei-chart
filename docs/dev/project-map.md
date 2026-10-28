# Project Map

> L2 | Parent: `AGENTS.md`

## Purpose

This file gives future agents a fast structural map before they touch code. Keep
it factual and compact.

## Application Shape

The app is a Vite React application under `app/`. It uses TypeScript, React 19,
Zustand, Tailwind CSS 4, Vitest, ESLint, iztro for Zi Wei Dou Shu charting, and
Vercel Analytics.

Primary runtime flow:

1. User enters birth data in the form.
2. Birth date and birthplace inputs are normalized.
3. True solar time correction can adjust the effective birth time.
4. iztro generates the chart.
5. App state stores the chart and user selections.
6. UI renders chart, fortune, match, K-line, share, and AI interpretation views.
7. Knowledge retrieval grounds AI prompts with local structured guidance.

## App Module Map

<directory>
app/src/components/ - React UI components grouped by feature.
app/src/components/ui/ - Small reusable UI primitives.
app/src/lib/ - Business logic helpers and calculation support.
app/src/stores/ - Zustand state.
app/src/knowledge-db/ - Structured guidance database and retrieval pipeline.
app/src/knowledge/ - Static Zi Wei Dou Shu knowledge modules.
app/tests/ - Tests outside source tree, currently including workflow validation.
</directory>

## Important Files

- `app/src/components/BirthForm.tsx` - birth input, birthplace matching entry, and true solar time options.
- `app/src/components/OpenSourceLinks.tsx` - GitHub repository and license links for open source attribution.
- `app/src/lib/true-solar-time.ts` - true solar time calculation and birthplace matching helpers.
- `app/src/lib/birthplace-data.json` - local city/region coordinate dataset.
- `app/src/lib/birth-date.ts` - birth date handling.
- `app/src/lib/astro.ts` - chart-facing astrology helpers.
- `app/src/knowledge-db/retrieval/retrieve.ts` - guidance retrieval.
- `.github/workflows/sync-zwknows.yml` - deployment mirror synchronization.

## Data Sources

- Birthplace coordinate data comes from the open source `88250/city-geo` dataset.
- License text is tracked in `docs/licenses/city-geo-MulanPSL2.txt`.
- Domain knowledge is stored in the numbered root folders and in app knowledge modules.

## Boundaries

- UI components should call business helpers instead of embedding calculation logic.
- `app/src/lib/` owns deterministic data transformation and calculation helpers.
- `app/src/knowledge-db/` owns retrieval data and prompt-grounding context.
- Workflow tests under `app/tests/` protect repository automation contracts.

[PROTOCOL]: Update this file when module ownership, data flow, important files, or
source data changes.
