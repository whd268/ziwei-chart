/**
 * [INPUT]: Depends on knowledge-db schema and relationship-analysis guidance
 * [OUTPUT]: Provides match-specific guidance entries for two-chart analysis
 * [POS]: Relationship layer that helps AI compare charts without turning into fixed scoring
 * [PROTOCOL]: Update this header when changed, then check AGENTS.md/CLAUDE.md
 */

import type { KnowledgeEntry } from '../schema'

const SOURCE_REFS = [
  'project.analysis-position',
  'book.wang-tingzhi-basic',
  'web.ziwei-learn-cross-check',
  'author.cross-check',
]

function matchEntry(
  id: string,
  title: string,
  entities: string[],
  topics: string[],
  focus: string[],
  likelyThemes: string[],
  nuance: string[],
  avoid: string[],
): KnowledgeEntry {
  return {
    id,
    domain: 'combo',
    title,
    entities,
    appliesTo: ['合盘', '夫妻宫', '命宫'],
    topics,
    priority: 82,
    guidance: { focus, likelyThemes, nuance, avoid },
    taskFit: {
      match: '用于双人合盘的互动分析。',
    },
    sourceRefs: SOURCE_REFS,
    sourceLevel: 'B',
    confidence: 0.68,
    reviewStatus: 'draft',
  }
}

export const MATCH_ENTRIES: KnowledgeEntry[] = [
  matchEntry(
    'match.life-palace-contrast.guidance',
    '合盘命宫性情对看',
    ['合盘', '命宫', '主星'],
    ['性情互补', '相处模式', '关系本质'],
    ['双方命宫主星的节奏是否相近', '一方重稳定还是开创，另一方重感受还是效率', '差异是否形成互补或摩擦'],
    ['命宫对看适合判断相处底层节奏', '强弱、动静、理性情感、外放内敛的差异会影响磨合'],
    ['命宫不同不代表不合，重点是差异是否能被理解和分工', '合盘应写互动，不应分别复述两张命盘'],
    ['不要用单一分数定关系', '不要只说互补或相克而不解释互动机制'],
  ),
  matchEntry(
    'match.spouse-palace-mirror.guidance',
    '夫妻宫互看导向',
    ['合盘', '夫妻宫', '伴侣画像'],
    ['伴侣期待', '亲密关系', '磨合'],
    ['A 的夫妻宫期待是否接近 B 的命宫气质', 'B 的夫妻宫期待是否接近 A 的命宫气质', '期待落差在哪些具体相处场景出现'],
    ['夫妻宫互看能帮助判断伴侣画像和现实对象是否对味', '期待相近时关系较易进入，期待落差时需要沟通和调适'],
    ['夫妻宫不应直接断成败，要结合命宫、福德和现实成熟度', '互看不是找完全一样，而是看能否承接彼此需求'],
    ['不要断定必成或必分', '不要把夫妻宫凶象写成关系无解'],
  ),
  matchEntry(
    'match.sihua-mutual-trigger.guidance',
    '四化互飞互动导向',
    ['合盘', '四化', '互飞'],
    ['关系牵动', '助益', '压力'],
    ['一方四化触发对方哪些宫位主题', '化禄、化权、化科、化忌分别带来资源、主导、缓和或课题', '双方是否互相激发同一领域'],
    ['四化互飞适合描述谁更容易激发谁的事业、财务、情绪或关系课题', '化忌可表示牵挂和执着，不应只看成伤害'],
    ['互飞需要结合双方本命承接能力', '同一触发在不同成熟度下可能表现为帮助或压力'],
    ['不要把化忌互飞直接断成克害', '不要脱离宫位主题泛讲缘分'],
  ),
  matchEntry(
    'match.fortune-palace-emotional-comfort.guidance',
    '福德宫情绪舒适度导向',
    ['合盘', '福德宫', '情绪'],
    ['情绪舒适', '精神需求', '相处质感'],
    ['双方福德宫显示的放松方式是否兼容', '关系能否让彼此恢复精力而不是持续消耗', '精神需求和生活节奏是否相互理解'],
    ['长期关系不只看吸引力，也看福德宫的舒适和恢复能力', '福德不合时，日常小事容易消耗耐心'],
    ['福德宫差异可通过生活规则和独处空间调和', '不应把情绪节奏不同直接写成不合'],
    ['不要只看桃花和夫妻宫', '不要忽略日常生活和精神恢复'],
  ),
  matchEntry(
    'match.external-support.guidance',
    '合盘外部支持系统导向',
    ['合盘', '外部支持', '家庭'],
    ['现实展望', '家庭', '朋友圈', '资源'],
    ['双方家庭、朋友、事业环境是否支持关系', '关系是否被现实责任、距离、社交圈或资源结构牵动', '外部压力能否被共同承担'],
    ['长期关系不只看两人感情，也看外部系统是否帮忙减压或制造压力', '家庭、工作、金钱和朋友圈会影响关系稳定度'],
    ['外部支持不足不代表关系失败，但需要更清楚的现实安排和边界', '外部支持强也不代表自动长久'],
    ['不要只用命盘断关系成败', '不要忽略现实资源和双方选择'],
  ),
  matchEntry(
    'match.conflict-repair.guidance',
    '合盘冲突修复导向',
    ['合盘', '冲突', '修复'],
    ['磨合', '沟通', '修复能力'],
    ['双方冲突后谁先退让、谁需要解释、谁需要空间', '是否有福德宫或化科类缓冲', '关系是否有复盘和修复机制'],
    ['适合把冲突写成可管理的互动机制，而不是直接判坏', '修复能力往往比是否没有冲突更重要'],
    ['命盘显示摩擦时，应给出具体沟通策略和边界建议', '关系中的强吸引也可能伴随强摩擦'],
    ['不要把磨合写成无解', '不要只给空泛沟通建议'],
  ),
]
