/**
 * [INPUT]: Depends on structured astrolabe concepts and source metadata
 * [OUTPUT]: Provides shared types for the guidance knowledge database
 * [POS]: Schema boundary for knowledge-db entries, retrieval, and future prompt assembly
 * [PROTOCOL]: Update this header when changed, then check AGENTS.md/CLAUDE.md
 */

export type KnowledgeDomain =
  | 'principle'
  | 'concept'
  | 'star'
  | 'palace'
  | 'sihua'
  | 'pattern'
  | 'combo'
  | 'fortune'

export type KnowledgeTask = 'natal' | 'yearly' | 'match' | 'kline' | 'share'

export type SourceType =
  | 'project-principle'
  | 'classic'
  | 'modern-commentary'
  | 'web-bibliography'
  | 'web-cross-check'
  | 'author-note'
  | 'test-case'

export type SourceLevel = 'S' | 'A' | 'B' | 'C'

export type ReviewStatus = 'draft' | 'reviewed' | 'verified'

export interface KnowledgeSource {
  id: string
  type: SourceType
  title: string
  author?: string
  url?: string
  note: string
}

export interface GuidanceBlock {
  focus: string[]
  likelyThemes: string[]
  nuance: string[]
  avoid: string[]
}

export interface TaskFit {
  natal?: string
  yearly?: string
  match?: string
  kline?: string
  share?: string
}

export interface KnowledgeEntry {
  id: string
  domain: KnowledgeDomain
  title: string
  entities: string[]
  appliesTo: string[]
  topics: string[]
  priority: number
  guidance: GuidanceBlock
  taskFit?: TaskFit
  sourceRefs: string[]
  sourceLevel: SourceLevel
  confidence: number
  reviewStatus: ReviewStatus
}
