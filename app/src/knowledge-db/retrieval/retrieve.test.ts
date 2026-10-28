import { describe, expect, it } from 'vitest'
import { retrieveGuidance } from './retrieve'

describe('retrieveGuidance', () => {
  it('prioritizes exact combo guidance over broad sihua guidance', () => {
    const result = retrieveGuidance({
      task: 'natal',
      signals: [
        {
          entities: ['武曲', '化忌', '财帛宫'],
          appliesTo: ['财帛宫'],
          topics: ['财运'],
          weight: 100,
        },
      ],
      limit: 3,
    })

    expect(result[0]?.id).toBe('combo.wuqu.hua-ji.wealth.guidance')
    expect(result.some((entry) => entry.entities.includes('化忌'))).toBe(true)
  })

  it('includes global principles when requested', () => {
    const result = retrieveGuidance({
      task: 'yearly',
      signals: [
        {
          entities: ['本命', '大限', '流年'],
          appliesTo: ['运限'],
          topics: ['运势'],
          weight: 80,
        },
      ],
      includePrinciples: true,
      limit: 4,
    })

    expect(result.some((entry) => entry.id === 'principle.chart-facts-first')).toBe(true)
    expect(result.some((entry) => entry.id === 'principle.layered-time-reading')).toBe(true)
  })

  it('uses task fit as a ranking signal', () => {
    const result = retrieveGuidance({
      task: 'share',
      signals: [
        {
          entities: ['紫微', '命宫'],
          appliesTo: ['命宫'],
          topics: ['性情'],
          weight: 80,
        },
      ],
      limit: 1,
    })

    expect(result[0]?.id).toBe('combo.ziwei.life-palace.guidance')
  })

  it('falls back to broad star guidance when no exact combo exists', () => {
    const result = retrieveGuidance({
      task: 'natal',
      signals: [
        {
          entities: ['天机', '命宫'],
          appliesTo: ['命宫'],
          topics: ['性情'],
          weight: 75,
        },
      ],
      limit: 3,
    })

    expect(result.some((entry) => entry.id === 'star.tianji.guidance')).toBe(true)
  })

  it('falls back to palace guidance for task-specific analysis', () => {
    const result = retrieveGuidance({
      task: 'match',
      signals: [
        {
          entities: ['夫妻宫'],
          appliesTo: ['夫妻宫'],
          topics: ['感情'],
          weight: 70,
        },
      ],
      limit: 3,
    })

    expect(result.some((entry) => entry.id === 'palace.spouse.guidance')).toBe(true)
  })

  it('retrieves relationship-specific sihua combo guidance', () => {
    const result = retrieveGuidance({
      task: 'match',
      signals: [
        {
          entities: ['太阴', '化忌', '夫妻宫'],
          appliesTo: ['夫妻宫'],
          topics: ['感情'],
          weight: 100,
        },
      ],
      limit: 3,
    })

    expect(result[0]?.id).toBe('combo.taiyin.hua-ji.relationship.guidance')
  })

  it('retrieves classic pattern guidance with multiple star entities', () => {
    const result = retrieveGuidance({
      task: 'natal',
      signals: [
        {
          entities: ['紫微', '天府', '紫府同宫'],
          appliesTo: ['命宫'],
          topics: ['格局'],
          weight: 90,
        },
      ],
      limit: 3,
    })

    expect(result[0]?.id).toBe('pattern.zi-fu-tong-gong.guidance')
  })

  it('retrieves fortune timing guidance for yearly analysis', () => {
    const result = retrieveGuidance({
      task: 'yearly',
      signals: [
        {
          entities: ['本命', '大限', '流年'],
          appliesTo: ['运限'],
          topics: ['运势'],
          weight: 80,
        },
      ],
      limit: 5,
    })

    expect(result.some((entry) => entry.id === 'fortune.yearly-trigger.guidance')).toBe(true)
    expect(result.some((entry) => entry.id === 'fortune.decadal-stage.guidance')).toBe(true)
  })

  it('retrieves career-specific star palace guidance', () => {
    const result = retrieveGuidance({
      task: 'natal',
      signals: [
        {
          entities: ['天机', '官禄宫'],
          appliesTo: ['官禄宫'],
          topics: ['事业'],
          weight: 90,
        },
      ],
      limit: 3,
    })

    expect(result[0]?.id).toBe('combo.tianji.career.guidance')
  })

  it('retrieves desire and relationship guidance for tanlang in spouse palace', () => {
    const result = retrieveGuidance({
      task: 'match',
      signals: [
        {
          entities: ['贪狼', '夫妻宫'],
          appliesTo: ['夫妻宫'],
          topics: ['感情'],
          weight: 90,
        },
      ],
      limit: 3,
    })

    expect(result[0]?.id).toBe('combo.tanlang.spouse-palace.guidance')
  })

  it('retrieves match-specific comparison guidance', () => {
    const result = retrieveGuidance({
      task: 'match',
      signals: [
        {
          entities: ['合盘', '夫妻宫', '伴侣画像'],
          appliesTo: ['夫妻宫'],
          topics: ['磨合'],
          weight: 90,
        },
      ],
      limit: 4,
    })

    expect(result.some((entry) => entry.id === 'match.spouse-palace-mirror.guidance')).toBe(true)
  })

  it('retrieves sihua palace guidance for yearly wealth pressure', () => {
    const result = retrieveGuidance({
      task: 'yearly',
      signals: [
        {
          entities: ['化忌', '财帛宫'],
          appliesTo: ['财帛宫'],
          topics: ['财运'],
          weight: 95,
        },
      ],
      limit: 4,
    })

    expect(result[0]?.id).toBe('combo.hua-ji.wealth-palace.guidance')
  })

  it('retrieves sihua palace guidance for career authority', () => {
    const result = retrieveGuidance({
      task: 'yearly',
      signals: [
        {
          entities: ['化权', '官禄宫'],
          appliesTo: ['官禄宫'],
          topics: ['事业'],
          weight: 95,
        },
      ],
      limit: 4,
    })

    expect(result[0]?.id).toBe('combo.hua-quan.career-palace.guidance')
  })

  it('retrieves kline dimension guidance for career scoring', () => {
    const result = retrieveGuidance({
      task: 'kline',
      signals: [
        {
          entities: ['K线', '事业', '官禄宫'],
          appliesTo: ['官禄宫'],
          topics: ['事业'],
          weight: 90,
        },
      ],
      limit: 4,
    })

    expect(result[0]?.id).toBe('fortune.kline.career-dimension.guidance')
  })

  it('retrieves auspicious support guidance for left and right assistants', () => {
    const result = retrieveGuidance({
      task: 'natal',
      signals: [
        {
          entities: ['左辅', '右弼', '命宫'],
          appliesTo: ['命宫'],
          topics: ['贵人'],
          weight: 85,
        },
      ],
      limit: 4,
    })

    expect(result[0]?.id).toBe('support.zuo-you.guidance')
  })

  it('retrieves external support guidance for match analysis', () => {
    const result = retrieveGuidance({
      task: 'match',
      signals: [
        {
          entities: ['合盘', '外部支持', '家庭'],
          appliesTo: ['合盘'],
          topics: ['现实展望'],
          weight: 85,
        },
      ],
      limit: 4,
    })

    expect(result.some((entry) => entry.id === 'match.external-support.guidance')).toBe(true)
  })
})
