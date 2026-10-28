/**
 * [INPUT]: Depends on knowledge-db schema and project sihua interpretation policy
 * [OUTPUT]: Provides guidance entries for the four transformations
 * [POS]: Shared four-transformation context for all AI analysis tasks
 * [PROTOCOL]: Update this header when changed, then check AGENTS.md/CLAUDE.md
 */

import type { KnowledgeEntry } from '../schema'

const SOURCE_REFS = [
  'project.analysis-position',
  'book.ziwei-doushu-quanshu',
  'book.wang-tingzhi-basic',
  'author.cross-check',
]

export const SIHUA_ENTRIES: KnowledgeEntry[] = [
  {
    id: 'sihua.hua-lu.guidance',
    domain: 'sihua',
    title: '化禄导向',
    entities: ['化禄'],
    appliesTo: ['四化'],
    topics: ['资源', '顺势', '人缘', '财禄'],
    priority: 86,
    guidance: {
      focus: ['资源流入', '人缘助力', '顺势机会', '所化星曜的正向发挥'],
      likelyThemes: ['事情较容易打开局面', '人情、资源或机会较顺', '相关宫位较容易出现可用条件'],
      nuance: ['化禄不是必然发财，要看宫位主题与是否被忌煞冲破', '化禄也可能带来欲望或依赖舒适区'],
      avoid: ['不要把化禄直接写成一定有钱', '不要忽略同时存在的煞忌和大限流年压力'],
    },
    taskFit: {
      natal: '用于说明命主容易获得资源的领域。',
      yearly: '用于说明当年较顺的切入点。',
      match: '用于说明一方对另一方的助益。',
      kline: '可作为阶段上行动能的参考。',
    },
    sourceRefs: SOURCE_REFS,
    sourceLevel: 'A',
    confidence: 0.84,
    reviewStatus: 'reviewed',
  },
  {
    id: 'sihua.hua-quan.guidance',
    domain: 'sihua',
    title: '化权导向',
    entities: ['化权'],
    appliesTo: ['四化'],
    topics: ['主导', '竞争', '责任', '压力'],
    priority: 84,
    guidance: {
      focus: ['掌控欲和行动力', '责任加重', '竞争态势', '相关宫位的主导权'],
      likelyThemes: ['需要主动处理问题', '有争取位置或话语权的机会', '成就与压力同时增加'],
      nuance: ['化权不只是权力，也常伴随负担和对抗', '要观察命主是否有能力承接这份主导权'],
      avoid: ['不要只写升权掌权', '不要忽略压力、冲突和人际摩擦'],
    },
    taskFit: {
      natal: '用于说明性格和人生主题中的主导倾向。',
      yearly: '用于说明当年竞争、职权和压力来源。',
      match: '用于说明关系里谁更想掌控节奏。',
      kline: '可提高波动和主动突破倾向。',
    },
    sourceRefs: SOURCE_REFS,
    sourceLevel: 'A',
    confidence: 0.82,
    reviewStatus: 'reviewed',
  },
  {
    id: 'sihua.hua-ke.guidance',
    domain: 'sihua',
    title: '化科导向',
    entities: ['化科'],
    appliesTo: ['四化'],
    topics: ['名誉', '文书', '贵人', '缓和'],
    priority: 84,
    guidance: {
      focus: ['名声评价', '文书资质', '贵人缓和', '问题被温和处理的路径'],
      likelyThemes: ['适合通过专业、学习、表达、证照或声誉解决问题', '相关宫位较有缓冲余地'],
      nuance: ['化科偏缓和和名誉，不一定带来直接利益', '若与化忌同见，可看作压力中的补救方式'],
      avoid: ['不要把化科夸大成重大成功', '不要忽略它偏间接、偏缓和的性质'],
    },
    taskFit: {
      natal: '用于说明贵人、名誉和修饰能力。',
      yearly: '用于说明当年可借专业、证照、文书或贵人化解。',
      match: '用于说明关系里较温和的沟通与缓冲点。',
      kline: '可作为风险缓和因子。',
    },
    sourceRefs: SOURCE_REFS,
    sourceLevel: 'A',
    confidence: 0.82,
    reviewStatus: 'reviewed',
  },
  {
    id: 'sihua.hua-ji.guidance',
    domain: 'sihua',
    title: '化忌导向',
    entities: ['化忌'],
    appliesTo: ['四化'],
    topics: ['执着', '阻滞', '消耗', '课题'],
    priority: 90,
    guidance: {
      focus: ['执着点', '反复消耗', '阻滞来源', '相关宫位的长期课题'],
      likelyThemes: ['事情容易费心费力', '相关宫位有反复、拖延或心理负担', '需要管理风险和预期'],
      nuance: ['化忌不是绝对灾祸，应结合宫位、星曜、三方四正和运限引动', '化忌也可能表现为专注、责任或难以放下'],
      avoid: ['不要直接断灾祸', '不要脱离宫位解释化忌', '不要用恐吓式语言'],
    },
    taskFit: {
      natal: '用于说明命主长期执着和需要修正的课题。',
      yearly: '用于提示当年压力和反复消耗之处。',
      match: '用于说明关系里容易卡住或互相牵动的主题。',
      kline: '可作为下行压力和波动来源，但不应单独决定低点。',
    },
    sourceRefs: SOURCE_REFS,
    sourceLevel: 'A',
    confidence: 0.86,
    reviewStatus: 'reviewed',
  },
]
