# Ziwei Knows README Ecosystem Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the Chart, Chat, and ZATI README files into complementary product landing pages with a shared Ziwei Knows ecosystem navigation.

**Architecture:** Each repository retains a self-contained README and its actual setup, deployment, and license information. A repeated Markdown ecosystem section links the three peer products by user need, while product-specific hero copy, FAQs, and visual placeholders preserve distinct acquisition intent.

**Tech Stack:** GitHub-flavored Markdown, existing repository images, GitHub relative links, npm and pnpm command documentation.

## Global Constraints

- Products are peers; no README represents one as the parent of another.
- Ziwei Chart receives extra ecosystem discovery content because it has stronger traffic, not product rank.
- Keep the existing Ziwei Chat mascot and leave all new or changed logo assets as explicit placeholders.
- Do not claim account, profile, chart, or data interoperability that does not exist.
- Preserve documented commands, deployment behavior, and license terms.
- Use existing `ruijayfeng/*` repository URLs until the organization transfer is complete.

---

### Task 1: Establish Shared Ecosystem Copy

**Files:**
- Modify: `D:\Ziwei\ziweiknowV1\README.md`
- Modify: `D:\Ziwei\ziwei_chat\README.md`
- Modify: `D:\Ziwei\ZATI\README.md`

**Interfaces:**
- Consumes: the three current public repository URLs.
- Produces: a three-product `Ziwei Knows Product Ecosystem` section with each current product labelled and all links resolvable.

- [ ] **Step 1: Add peer product cards after the hero and before the current product overview**

Use the same three products in every README: Ziwei Chart for visual chart
exploration, Ziwei Chat for evidence-backed chart conversation, and ZATI for
Eastern archetype self-exploration. Mark only the current repository as
`Current product`.

- [ ] **Step 2: Verify peer positioning and links**

Run: `rg -n "parent product|next step|Ziwei Knows Product Ecosystem|ruijayfeng/(ziwei|ziwei_chat|ZATI)" README.md`

Expected: every ecosystem section links the three repositories without calling
any product a parent or required prerequisite.

### Task 2: Rewrite Ziwei Chart as the High-Traffic Product Entry

**Files:**
- Modify: `D:\Ziwei\ziweiknowV1\README.md`

**Interfaces:**
- Consumes: existing screenshots, translated README entry points, Vercel URL,
  Vite commands, GPLv3 license, and deterministic chart features.
- Produces: a user-first Chart README that preserves multilingual and
  self-hosting discovery value.

- [ ] **Step 1: Replace generic hero copy with Chart-specific product identity and primary online CTA**

State that Chart is for deterministic Zi Wei Dou Shu chart creation and visual
exploration. Keep the existing Chart logo asset. Add a clearly labelled
placeholder for a future mascot variation rather than generating an image.

- [ ] **Step 2: Add need-based product discovery and Chart FAQ**

Document the difference between Chart and Chat, birth data and true solar time,
local model configuration, and the difference between chart facts and AI
interpretation.

- [ ] **Step 3: Preserve functional setup and deployment documentation**

Keep `app` as the project root, `npm run dev`, Vercel, Cloudflare Pages, and
the existing screenshot gallery intact.

### Task 3: Adapt Ziwei Chat Without Replacing Its Existing Design Language

**Files:**
- Modify: `D:\Ziwei\ziwei_chat\README.md`

**Interfaces:**
- Consumes: the current Zhiwei mascot, Next.js runtime, optional database modes,
  Apache-2.0 license, and documented command set.
- Produces: a Chat README that keeps the current hierarchy while clearly naming
  it as the Chat member of the Ziwei Knows product family.

- [ ] **Step 1: Preserve the hero mascot and revise only its brand framing**

Keep `docs/images/zhiwei-mark.png` unchanged. Add the product name `Ziwei
Knows · Chat` without changing the companion identity `Zhiwei`.

- [ ] **Step 2: Insert the shared ecosystem block and product-specific FAQ**

Cover deterministic chart facts, evidence, privacy, local mode, and when users
may prefer visual exploration in Chart or behavioral self-exploration in ZATI.

- [ ] **Step 3: Keep runtime, database, evaluation, deployment, and license copy accurate**

Retain current commands and the explicit database-optional deployment model.

### Task 4: Turn ZATI into a Conversion-Focused Peer Product README

**Files:**
- Modify: `D:\Ziwei\ZATI\README.md`

**Interfaces:**
- Consumes: current quick and standard assessment modes, four-axis scoring,
  sixteen archetypes, local progress, pnpm commands, and prototype license
  state.
- Produces: a ZATI README that makes its non-diagnostic scope and distinct
  product value clear.

- [ ] **Step 1: Reframe the hero around product use and preserve a mascot-art placeholder**

Use the full product name and a primary test CTA placeholder. Do not claim a
public URL until one is supplied. Reserve an explicit slot for a future Zhiwei
mascot variation.

- [ ] **Step 2: Add the shared ecosystem block and ZATI FAQ**

Explain the 24/56-question modes, scoring boundaries, local storage, lack of
diagnostic claims, and the optional relationship to Chart and Chat.

- [ ] **Step 3: Preserve implementation evidence and command correctness**

Keep the React/Vite stack, all pnpm scripts, the current MVP state, and the
unpublished license status.

### Task 5: Validate and Commit Each Repository Separately

**Files:**
- Verify: `D:\Ziwei\ziweiknowV1\README.md`
- Verify: `D:\Ziwei\ziwei_chat\README.md`
- Verify: `D:\Ziwei\ZATI\README.md`

**Interfaces:**
- Consumes: completed Markdown files.
- Produces: clean Markdown diffs with valid relative assets and live external
  repository links.

- [ ] **Step 1: Check Markdown references and diff whitespace**

Run in each repository:

```powershell
git diff --check
rg -n "docs/images/zhiwei-mark.png|docs/assets/logo.svg|ruijayfeng/(ziwei|ziwei_chat|ZATI)" README.md
```

Expected: no whitespace errors; every referenced local asset exists; every
ecosystem repository URL is present.

- [ ] **Step 2: Review for unsupported claims**

Run in each repository:

```powershell
rg -n "shared account|shared data|required prerequisite|diagnosis|guaranteed" README.md
```

Expected: no shared-data or required-prerequisite claim; ZATI's non-diagnostic
boundary remains explicit.

- [ ] **Step 3: Commit each repository separately**

```powershell
git add README.md
git commit -m "docs: connect Ziwei Knows product ecosystem"
```
