/**
 * [INPUT]: Depends on extracted chart knowledge and local guidance retrieval
 * [OUTPUT]: Provides prompt-ready guidance context for AI analysis calls
 * [POS]: Adapter from existing extractKnowledge output to the new guidance knowledge database
 * [PROTOCOL]: Update this header when changed, then check AGENTS.md/CLAUDE.md
 */

import type { KnowledgeContext } from '@/knowledge'
import type { KnowledgeEntry, KnowledgeTask } from '../schema'
import { retrieveGuidance, type GuidanceSignal } from './retrieve'

export interface BuildGuidancePromptOptions {
  knowledge: KnowledgeContext
  task: KnowledgeTask
  limit?: number
}

const HIGH_VALUE_PALACES = new Set(['命宫', '财帛宫', '官禄宫', '夫妻宫', '福德宫', '疾厄宫'])

function starSignalWeight(palaceName: string): number {
  return HIGH_VALUE_PALACES.has(palaceName) ? 75 : 55
}

function pushStarSignals(signals: GuidanceSignal[], knowledge: KnowledgeContext): void {
  for (const palace of knowledge.十二宫) {
    for (const star of [...palace.majorStars, ...palace.minorStars]) {
      signals.push({
        entities: [star.name, palace.name],
        appliesTo: [palace.name],
        topics: [palace.name],
        weight: starSignalWeight(palace.name),
      })

      if (star.mutagen) {
        signals.push({
          entities: [star.name, star.mutagen, palace.name],
          appliesTo: [palace.name],
          topics: ['四化', palace.name],
          weight: 100,
        })
      }
    }
  }
}

function pushPatternSignals(signals: GuidanceSignal[], knowledge: KnowledgeContext): void {
  for (const pattern of knowledge.格局提示) {
    if (pattern.includes('杀破狼')) {
      signals.push({
        entities: ['七杀', '破军', '贪狼', '杀破狼'],
        appliesTo: ['格局'],
        topics: ['开创', '变化'],
        weight: 88,
      })
    }
    if (pattern.includes('机月同梁')) {
      signals.push({
        entities: ['天机', '太阴', '天同', '天梁', '机月同梁'],
        appliesTo: ['格局'],
        topics: ['文职', '服务'],
        weight: 86,
      })
    }
  }
}

function pushTimeSignals(signals: GuidanceSignal[], knowledge: KnowledgeContext): void {
  if (knowledge.大限.length > 0 || knowledge.流年.length > 0) {
    signals.push({
      entities: ['本命', '大限', '流年'],
      appliesTo: ['运限'],
      topics: ['运势'],
      weight: 80,
    })
  }
}

export function deriveGuidanceSignals(knowledge: KnowledgeContext): GuidanceSignal[] {
  const signals: GuidanceSignal[] = []

  pushStarSignals(signals, knowledge)
  pushPatternSignals(signals, knowledge)
  pushTimeSignals(signals, knowledge)

  return signals
}

function listItems(items: string[], maxItems = 3): string {
  return items.slice(0, maxItems).map((item) => `   - ${item}`).join('\n')
}

function formatEntry(entry: KnowledgeEntry, index: number): string {
  const focus = listItems(entry.guidance.focus)
  const nuance = listItems(entry.guidance.nuance, 2)
  const avoid = listItems(entry.guidance.avoid, 2)

  return `${index + 1}. ${entry.title}
   适用：${entry.appliesTo.join('、') || '全局'}；主题：${entry.topics.join('、')}
   分析重点：
${focus}
   细节边界：
${nuance}
   避免误用：
${avoid}
   来源等级：${entry.sourceLevel}；可信度：${entry.confidence.toFixed(2)}；审核：${entry.reviewStatus}`
}

export function buildGuidancePromptContext(options: BuildGuidancePromptOptions): string {
  const signals = deriveGuidanceSignals(options.knowledge)
  const entries = retrieveGuidance({
    task: options.task,
    signals,
    includePrinciples: true,
    limit: options.limit,
  })

  if (entries.length === 0) return ''

  return `【专业知识导向】
以下内容用于提醒分析重点和判断边界，不是机械判词。请结合命盘事实、本命/大限/流年的层次综合判断；输出时自然融入分析，不要逐条复述知识库。

${entries.map(formatEntry).join('\n\n')}`
}
