/**
 * [INPUT]: Depends on knowledge-db schema, sources, and starter entries
 * [OUTPUT]: Provides public exports for the guidance knowledge database
 * [POS]: Public module boundary for future RAG retrieval integration
 * [PROTOCOL]: Update this header when changed, then check AGENTS.md/CLAUDE.md
 */

export type {
  GuidanceBlock,
  KnowledgeDomain,
  KnowledgeEntry,
  KnowledgeSource,
  KnowledgeTask,
  ReviewStatus,
  SourceLevel,
  SourceType,
  TaskFit,
} from './schema'
export { getKnowledgeSource, KNOWLEDGE_SOURCES } from './sources'
export { getKnowledgeEntry, KNOWLEDGE_ENTRIES } from './entries'
export type { GuidanceSignal, RetrieveGuidanceOptions } from './retrieval/retrieve'
export { retrieveGuidance } from './retrieval/retrieve'
export type { BuildGuidancePromptOptions } from './retrieval/context'
export { buildGuidancePromptContext, deriveGuidanceSignals } from './retrieval/context'
