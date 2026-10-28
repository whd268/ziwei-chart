# Ziwei Knows Organization Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the three public Ziwei Knows product repositories from `ruijayfeng` into the `ziweiknows` organization without losing repository history, community assets, deployment continuity, or personal authorship attribution.

**Architecture:** The transfer uses GitHub's repository-transfer API with final repository names specified in the transfer request, preserving repository identity and redirects. The Chart deployment mirror remains at `ruijayfeng/zwknows`; its source workflow is updated to trust only the final organization repository before transfer.

**Tech Stack:** GitHub CLI, GitHub REST API, GitHub Actions, Vercel, Git remotes, GitHub organization profile repository.

## Global Constraints

- Transfer ownership; never recreate or re-push repositories.
- Final names are `ziweiknows/ziwei-chart`, `ziweiknows/ziwei-chat`, and `ziweiknows/zati`.
- Preserve public visibility, default branches, Git history, Stars, Forks, Issues, Pull Requests, releases, secrets, webhooks, and deploy keys.
- Keep `ruijayfeng/zwknows` in place until the source-to-mirror deployment sync succeeds after transfer.
- Preserve existing untracked Chat design assets by never staging or deleting them.
- Make `Ziwei Knows · 紫微知道` the product publisher while retaining `ruijayfeng` as founder and primary maintainer in organization and repository metadata.

---

### Task 1: Capture Migration Baseline and Verify Target Organization

**Files:**
- Verify: `ruijayfeng/ziwei`, `ruijayfeng/ziwei_chat`, `ruijayfeng/ZATI`
- Verify: `ziweiknows` organization

- [ ] **Step 1: Record repository assets and default branches**

Run `gh repo view` for all source repositories and record Stars, Forks,
visibility, default branch, and license. Verify that `ruijayfeng` has the
`admin` organization role and the final repository names are available.

- [ ] **Step 2: Record transfer-sensitive settings**

Run `gh secret list`, `gh workflow list`, and inspect deployed project settings.
Record Chart's `ZWKNOWS_SYNC_TOKEN` and its `Sync zwknows deployment repository`
workflow as post-transfer validation targets.

### Task 2: Make Chart's Deployment Workflow Organization-Safe

**Files:**
- Modify: `.github/workflows/sync-zwknows.yml`
- Modify: `AGENTS.md`
- Modify: `docs/dev/progress.md`
- Modify: `docs/dev/workflow.md`

- [ ] **Step 1: Point the source-repository guard at `ziweiknows/ziwei-chart`**

Change the workflow condition to:

```yaml
if: github.repository == 'ziweiknows/ziwei-chart'
```

Keep the mirror remote `ruijayfeng/zwknows.git` unchanged.

- [ ] **Step 2: Update migration-sensitive documentation**

Describe `ziweiknows/ziwei-chart` as the source repository and
`ruijayfeng/zwknows` as the retained Vercel mirror. Update debugging commands
to use the final source path.

- [ ] **Step 3: Verify and commit the pre-transfer change**

Run `npm run test -- sync-zwknows` from `app/`, then commit the workflow and
documentation changes to `main` before transfer.

### Task 3: Transfer and Rename Repositories

**Files:**
- External: GitHub repositories and organization settings

- [ ] **Step 1: Transfer repositories using final names**

Call GitHub's transfer endpoint for:

```text
ruijayfeng/ziwei      -> ziweiknows/ziwei-chart
ruijayfeng/ziwei_chat -> ziweiknows/ziwei-chat
ruijayfeng/ZATI       -> ziweiknows/zati
```

- [ ] **Step 2: Verify preserved assets**

Compare final repository metadata with the baseline: visibility, default branch,
Stars, Forks, and license. Check that Chart's secret and workflow remain present.

### Task 4: Update Canonical Metadata and Local Remotes

**Files:**
- Modify: `D:\Ziwei\ziweiknowV1\README.md`
- Modify: `D:\Ziwei\ziwei_chat\README.md`
- Modify: `D:\Ziwei\ZATI\README.md`
- Modify: `D:\Ziwei\ziweiknowV1\AGENTS.md`
- Modify: `D:\Ziwei\ziweiknowV1\docs\dev\project-map.md`
- Modify: `D:\Ziwei\ziweiknowV1\docs\dev\progress.md`
- Modify: `D:\Ziwei\ziweiknowV1\docs\dev\workflow.md`

- [ ] **Step 1: Replace personal repository URLs with final organization URLs**

Use canonical organization paths in clone instructions, badges, deployment URLs,
ecosystem tables, and cross-product links. Leave the retained deployment mirror
URL unchanged.

- [ ] **Step 2: Update local remotes**

Run:

```powershell
git remote set-url origin https://github.com/ziweiknows/ziwei-chart.git
git remote set-url origin https://github.com/ziweiknows/ziwei-chat.git
git remote set-url origin https://github.com/ziweiknows/zati.git
```

- [ ] **Step 3: Verify links and push canonical URL updates**

Check all organization URLs return `200`, run the Chart workflow test, and push
the metadata commits using the new remotes.

### Task 5: Publish Organization Profile and Validate Deployment

**Files:**
- Create: `ziweiknows/.github/profile/README.md`

- [ ] **Step 1: Create an organization profile repository**

Create public `ziweiknows/.github` and add the profile README. It introduces the
three equal products, identifies Jay Feng (`@ruijayfeng`) as founder and primary
maintainer, and links each product's public site and source repository.

- [ ] **Step 2: Validate Chart sync after transfer**

Trigger `Sync zwknows deployment repository` from `ziweiknows/ziwei-chart`.
Confirm its run succeeds and the source `main` SHA equals
`ruijayfeng/zwknows:main`.

- [ ] **Step 3: Verify production and GitHub presentation**

Confirm Chart and Chat public URLs return `200`, organization profile renders,
the three repositories are public, and `ruijayfeng` remains listed as primary
contributor through preserved history and explicit maintainer metadata.
