# Ziwei Knows README Ecosystem Design

## Goal

Make the three public repositories work as complementary product landing pages
under the Ziwei Knows brand. README pages should convert visitors into product
users first and serve setup, deployment, and contribution needs second.

## Product Model

The products are peers, not a forced funnel:

| Product | Public name | Job |
| --- | --- | --- |
| Ziwei Chart | Ziwei Knows · Chart | Deterministic chart creation, visual exploration, and trend analysis. |
| Ziwei Chat | Ziwei Knows · Chat | Evidence-backed AI conversation about chart facts and real questions. |
| ZATI | Ziwei Knows · Ziwei Archetype Type Indicator | Low-barrier Eastern archetype self-exploration through behavioral choices. |

Ziwei Chart currently has the strongest search and GitHub traffic. It may carry
more ecosystem discovery links, but it is not positioned as a superior or parent
product. Every README presents all three products as equal choices for different
needs.

## Shared README Architecture

All three README files follow this order:

1. Product-specific hero: product name, one-sentence value, product-specific
   visual, technology and license badges.
2. Primary action: use the current product. This is the only dominant CTA.
3. `Ziwei Knows Product Ecosystem`: three peer product cards, current repository
   marked as `Current product`, and need-based cross-links.
4. What the current product is and who it helps.
5. Core capabilities and real screenshots.
6. Product-specific mechanism and reliability boundaries.
7. FAQ written as direct answers to real user search questions.
8. Quick start, configuration, deployment, contribution, and license.

The ecosystem block uses explicit links to repositories and public sites. Until
the organization migration is complete, links use the existing `ruijayfeng/*`
locations. They will be updated together after transfer to `ziweiknows/*`.

## Product-Specific Content

### Ziwei Chart

- Keep its multilingual entry points and high-value search terms: Zi Wei Dou Shu
  chart, true solar time, annual fortune, compatibility chart, and life trend.
- Make online chart use the primary CTA, then recommend Chat for question-led
  interpretation and ZATI for behavioral self-exploration.
- Retain detailed feature screenshots and self-hosting instructions.
- Add concise FAQ answers about birth data, birthplace matching, true solar
  time, model configuration, and the difference between Chart and Chat.

### Ziwei Chat

- Preserve the current README's high-information format: calm hero, numbered
  contents, capability table, architecture diagram, operating modes, and
  boundaries.
- Change the main product title to `Ziwei Knows · Chat | Ziwei Chat` in the
  ecosystem copy while retaining the product personality `Zhiwei`.
- Recommend Chart for full visual chart exploration and ZATI for users seeking
  an entry without birth data.
- Add FAQ answers about deterministic facts, evidence, local mode, privacy, and
  the relationship with Chart.

### ZATI

- Keep the product distinct from both charting and AI: behavioral choices create
  the type; Eastern cultural archetypes provide its expression.
- Lead with the quick and standard assessment CTA, followed by the sixteen
  archetype result experience.
- Recommend Chart and Chat only as optional, equal next explorations.
- Add FAQ answers about diagnosis, scoring, privacy, the 24/56-question modes,
  and what ZATI does not claim to measure.

## Visual and Logo Rules

Ziwei Chat is the visual reference for information density, hierarchy, dividers,
tables, and restrained use of assets. It is not a template to copy verbatim.

- The existing `Zhiwei` companion mark is the series mascot and shared visual
  identity. Ziwei Chat keeps that exact mark unchanged.
- Chart retains its existing `docs/assets/logo.svg` as its current hero asset.
  Its `let the chart speak` tagline remains Chart-specific, but future Chart
  mascot artwork must use the Zhiwei mark as a character reference.
- ZATI's future archetype artwork must use the Zhiwei mark as a character
  reference. It should depict the same guide in a distinct assessment context,
  not introduce a second mascot.
- Sibling illustrations may vary pose, crop, and product context, but preserve
  the mascot's hooded silhouette, calm three-quarter portrait language,
  monochrome ink treatment, and star-at-the-throat motif. Do not make an exact
  copy of the Chat artwork.
- The shared ecosystem block uses `Ziwei Knows / 紫微知道` with the existing
  mascot as the series visual cue. This establishes a shared IP without
  implying that one product owns the whole series.
- Use real product screenshots with descriptive alt text. Do not create generic
  decorative art merely to fill the README.

## GEO and Search Rules

- Each README owns a distinct primary search intent; do not repeat identical
  product paragraphs or keyword lists across repositories.
- Put a factual product definition and primary terms in the title, first 160
  words, headings, image alt text, and FAQ answers.
- Prefer verifiable claims: named chart engine, deterministic fact boundaries,
  local-first behavior, question counts, and tested product capabilities.
- Cross-link with descriptive anchors such as `Ask chart questions in Ziwei
  Chat`, never vague `click here` links.
- Preserve Chart's Chinese, Traditional Chinese, Japanese, and English entry
  points. Add translated README pages to Chat and ZATI only after the Chinese
  canonical content stabilizes.

## Non-Goals

- No claim that the three products share accounts, profiles, birth data, or
  results; they currently only share brand and discovery links.
- No attempt to rank the three products in the ecosystem.
- No keyword stuffing, synthetic usage metrics, or unsupported AI capability
  claims.

## Validation

Before release, check that every external link resolves, every screenshot is
rendered with meaningful alt text, the current product has the clearest CTA,
cross-links describe a complementary need, and the command/deployment sections
match the repository's actual scripts and hosting model.
