# App Agent Guide

> L2 | Parent: `../AGENTS.md`

## Scope

This directory contains the Vite React application. Read this file before
modifying files under `app/`.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Zustand
- Vitest
- ESLint
- iztro
- Vercel Analytics

## Commands

Run from `app/`:

```powershell
npm run dev
npm run lint
npm run test
npm run build
```

Targeted examples:

```powershell
npm run test -- true-solar-time
npm run test -- retrieve
npm run test -- sync-zwknows
```

## Member List

`src/main.tsx`: React entry point and app mounting.

`src/App.tsx`: Top-level application composition.

`src/components/`: Feature UI components. Keep deterministic calculation logic in
`src/lib/` instead of embedding it in components.

`src/components/ui/`: Small reusable UI primitives.

`src/components/OpenSourceLinks.tsx`: GitHub repository and license links for
open source attribution in the app shell.

`src/lib/`: Business helpers for date handling, astrology support, true solar
time, birthplace data, LLM wiring, and scoring.

`src/lib/true-solar-time.ts`: True solar time and birthplace matching logic.

`src/lib/birthplace-data.json`: Local coordinate dataset used for birthplace
matching.

`src/knowledge-db/`: Structured guidance database and retrieval pipeline.

`src/knowledge/`: Static domain knowledge used by the app.

`src/stores/`: Zustand state boundaries.

`tests/`: Tests that sit outside `src`, including workflow contract tests.

## Change Rules

- UI behavior changes should keep form flows usable for non-technical users.
- True solar time changes must protect users from needing raw longitude, latitude,
  or manual minute correction unless explicitly requested later.
- Birthplace matching changes should be tested against realistic city input.
- Workflow changes should keep the source repository guard and deployment mirror
  intent intact.
- Documentation changes are required for meaningful app behavior, module, command,
  or workflow changes.

## Verification Guide

- Calculation helper change: run the matching targeted Vitest file and then
  `npm run test`.
- UI component change: run `npm run lint`, relevant tests, and browser-check the
  changed flow when practical.
- Build or dependency change: run `npm run build`.
- GitHub workflow change: run `npm run test -- sync-zwknows`.

[PROTOCOL]: Update this file when app structure, commands, key files, or app-level
development rules change.
