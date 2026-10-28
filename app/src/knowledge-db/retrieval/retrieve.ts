/**
 * [INPUT]: Depends on guidance entries and task-aware retrieval signals
 * [OUTPUT]: Provides local guidance retrieval for prompt assembly
 * [POS]: Lightweight browser-side retrieval layer between astrolabe facts and AI prompts
 * [PROTOCOL]: Update this header when changed, then check AGENTS.md/CLAUDE.md
 */

import { KNOWLEDGE_ENTRIES } from '../entries'
import type { KnowledgeEntry, KnowledgeTask } from '../schema'

export interface GuidanceSignal {
  entities: string[]
  appliesTo?: string[]
  topics?: string[]
  weight?: number
}

export interface RetrieveGuidanceOptions {
  task: KnowledgeTask
  signals: GuidanceSignal[]
  includePrinciples?: boolean
  limit?: number
}

interface ScoredEntry {
  entry: KnowledgeEntry
  score: number
}

const DEFAULT_LIMIT = 12

const DOMAIN_WEIGHT: Record<KnowledgeEntry['domain'], number> = {
  combo: 20,
  pattern: 16,
  sihua: 12,
  star: 10,
  palace: 6,
  fortune: 6,
  concept: 4,
  principle: 0,
}

const GLOBAL_PRINCIPLE_IDS = new Set([
  'principle.chart-facts-first',
  'principle.guidance-not-verdict',
  'principle.no-absolute-fate',
])

const STAR_ENTITIES = new Set([
  '紫微',
  '天机',
  '太阳',
  '武曲',
  '天同',
  '廉贞',
  '天府',
  '太阴',
  '贪狼',
  '巨门',
  '天相',
  '天梁',
  '七杀',
  '破军',
  '文昌',
  '文曲',
  '左辅',
  '右弼',
  '擎羊',
  '陀罗',
])

function countMatches(source: string[], target: string[]): number {
  if (source.length === 0 || target.length === 0) return 0
  const targetSet = new Set(target)
  return source.filter((item) => targetSet.has(item)).length
}

function isBroadEntityEntry(entry: KnowledgeEntry, signal: GuidanceSignal): boolean {
  return (
    (entry.domain === 'star' || entry.domain === 'palace' || entry.domain === 'sihua') &&
    entry.entities.length === 1 &&
    signal.entities.includes(entry.entities[0])
  )
}

function hasUnmatchedSpecificStar(entry: KnowledgeEntry, signal: GuidanceSignal): boolean {
  if (entry.domain !== 'combo' && entry.domain !== 'pattern') return false
  return entry.entities.some((entity) => STAR_ENTITIES.has(entity) && !signal.entities.includes(entity))
}

function scoreEntry(entry: KnowledgeEntry, options: RetrieveGuidanceOptions): number {
  let bestScore = options.includePrinciples && GLOBAL_PRINCIPLE_IDS.has(entry.id)
    ? entry.priority + 10
    : 0

  for (const signal of options.signals) {
    const entityMatches = countMatches(entry.entities, signal.entities)
    const appliesToMatches = countMatches(entry.appliesTo, signal.appliesTo ?? [])
    const topicMatches = countMatches(entry.topics, signal.topics ?? [])
    const hasAnyMatch = entityMatches > 0 || appliesToMatches > 0 || topicMatches > 0

    if (!hasAnyMatch) continue
    if ((entry.domain === 'combo' || entry.domain === 'pattern') && entityMatches < 2) continue
    if (hasUnmatchedSpecificStar(entry, signal)) continue

    const signalWeight = signal.weight ?? 50
    const taskWeight = entry.taskFit?.[options.task] ? 15 : 0
    const broadEntityWeight = isBroadEntityEntry(entry, signal) ? 18 : 0
    const score =
      entry.priority +
      DOMAIN_WEIGHT[entry.domain] +
      entityMatches * 40 +
      appliesToMatches * 20 +
      topicMatches * 10 +
      taskWeight +
      broadEntityWeight +
      signalWeight / 10

    bestScore = Math.max(bestScore, score)
  }

  return bestScore
}

export function retrieveGuidance(options: RetrieveGuidanceOptions): KnowledgeEntry[] {
  const limit = options.limit ?? DEFAULT_LIMIT
  const reservedPrinciples = options.includePrinciples
    ? KNOWLEDGE_ENTRIES.filter((entry) => GLOBAL_PRINCIPLE_IDS.has(entry.id))
    : []
  const reservedIds = new Set(reservedPrinciples.map((entry) => entry.id))
  const remainingLimit = Math.max(0, limit - reservedPrinciples.length)

  const rankedEntries = KNOWLEDGE_ENTRIES
    .filter((entry) => !reservedIds.has(entry.id))
    .map<ScoredEntry>((entry) => ({
      entry,
      score: scoreEntry(entry, options),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      if (b.entry.priority !== a.entry.priority) return b.entry.priority - a.entry.priority
      return a.entry.id.localeCompare(b.entry.id)
    })
    .slice(0, remainingLimit)
    .map(({ entry }) => entry)

  return [...reservedPrinciples, ...rankedEntries].slice(0, limit)
}
