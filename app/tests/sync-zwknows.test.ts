import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

describe('sync-zwknows workflow', () => {
  const workflow = readFileSync(resolve(__dirname, '../../.github/workflows/sync-zwknows.yml'), 'utf8')

  it('only syncs from the canonical source repository', () => {
    expect(workflow).toContain("github.repository == 'ziweiknows/ziwei-chart'")
  })

  it('pushes main to the deployment repository with the configured token', () => {
    expect(workflow).toContain('ruijayfeng/zwknows.git')
    expect(workflow).toContain('secrets.ZWKNOWS_SYNC_TOKEN')
    expect(workflow).toContain('persist-credentials: false')
    expect(workflow).toContain('git fetch zwknows-sync main')
    expect(workflow).toContain('--force-with-lease=refs/heads/main:${EXPECTED_ZWKNOWS_HEAD}')
    expect(workflow).toContain('HEAD:main')
  })
})
