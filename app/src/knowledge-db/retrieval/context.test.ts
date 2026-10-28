import { describe, expect, it } from 'vitest'
import type { KnowledgeContext } from '@/knowledge'
import { buildGuidancePromptContext, deriveGuidanceSignals } from './context'

const sampleKnowledge: KnowledgeContext = {
  命宫主星: [],
  身宫主星: [],
  身宫位置: '命宫',
  十二宫: [
    {
      name: '命宫',
      stem: '甲',
      majorStars: [{ name: '紫微' }],
      minorStars: [],
      adjectiveStars: [],
      isBodyPalace: true,
    },
    {
      name: '财帛宫',
      stem: '壬',
      majorStars: [{ name: '武曲', mutagen: '化忌' }],
      minorStars: [],
      adjectiveStars: [],
      isBodyPalace: false,
    },
  ],
  大限: [],
  流年: [],
  四化分布: [],
  格局提示: ['杀破狼：开创变化较强，人生起伏较明显。'],
}

describe('guidance prompt context', () => {
  it('derives star-palace and sihua signals from extracted knowledge', () => {
    const signals = deriveGuidanceSignals(sampleKnowledge)

    expect(signals).toContainEqual({
      entities: ['紫微', '命宫'],
      appliesTo: ['命宫'],
      topics: ['命宫'],
      weight: 75,
    })
    expect(signals).toContainEqual({
      entities: ['武曲', '化忌', '财帛宫'],
      appliesTo: ['财帛宫'],
      topics: ['四化', '财帛宫'],
      weight: 100,
    })
  })

  it('builds a prompt section with matched guidance and source metadata', () => {
    const context = buildGuidancePromptContext({
      knowledge: sampleKnowledge,
      task: 'natal',
      limit: 8,
    })

    expect(context).toContain('【专业知识导向】')
    expect(context).toContain('武曲化忌与财务课题')
    expect(context).toContain('紫微在命宫')
    expect(context).toContain('以下内容用于提醒分析重点和判断边界')
  })
})
