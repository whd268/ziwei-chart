/**
 * [INPUT]: Depends on starter guidance entry modules
 * [OUTPUT]: Provides a single entry list for the guidance knowledge database
 * [POS]: Aggregation point for future retrieval and prompt assembly
 * [PROTOCOL]: Update this header when changed, then check AGENTS.md/CLAUDE.md
 */

import type { KnowledgeEntry } from '../schema'
import { COMBO_ENTRIES } from './combos'
import { FORTUNE_ENTRIES } from './fortune'
import { KLINE_ENTRIES } from './kline'
import { MATCH_ENTRIES } from './match'
import { PALACE_ENTRIES } from './palaces'
import { PRINCIPLE_ENTRIES } from './principles'
import { SIHUA_ENTRIES } from './sihua'
import { SIHUA_PALACE_ENTRIES } from './sihuaPalaces'
import { STAR_ENTRIES } from './stars'
import { SUPPORT_ENTRIES } from './support'

export const KNOWLEDGE_ENTRIES: KnowledgeEntry[] = [
  ...PRINCIPLE_ENTRIES,
  ...SIHUA_ENTRIES,
  ...SIHUA_PALACE_ENTRIES,
  ...STAR_ENTRIES,
  ...PALACE_ENTRIES,
  ...COMBO_ENTRIES,
  ...MATCH_ENTRIES,
  ...SUPPORT_ENTRIES,
  ...FORTUNE_ENTRIES,
  ...KLINE_ENTRIES,
]

export function getKnowledgeEntry(entryId: string): KnowledgeEntry | undefined {
  return KNOWLEDGE_ENTRIES.find((entry) => entry.id === entryId)
}
