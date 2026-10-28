/**
 * [INPUT]: Depends on knowledge-db schema and fortune scoring guidance
 * [OUTPUT]: Provides K-line-specific guidance for score and volatility generation
 * [POS]: Numeric trend guidance layer for AI generated lifetime K-line data
 * [PROTOCOL]: Update this header when changed, then check AGENTS.md/CLAUDE.md
 */

import type { KnowledgeEntry } from '../schema'

const SOURCE_REFS = [
  'project.analysis-position',
  'author.cross-check',
]

function klineEntry(
  id: string,
  title: string,
  entities: string[],
  appliesTo: string[],
  topics: string[],
  focus: string[],
  likelyThemes: string[],
  nuance: string[],
  avoid: string[],
  priority = 84,
): KnowledgeEntry {
  return {
    id,
    domain: 'fortune',
    title,
    entities,
    appliesTo,
    topics,
    priority,
    guidance: { focus, likelyThemes, nuance, avoid },
    taskFit: {
      kline: '用于 AI 生成人生 K 线的数值趋势和 brief 说明。',
    },
    sourceRefs: SOURCE_REFS,
    sourceLevel: 'C',
    confidence: 0.66,
    reviewStatus: 'draft',
  }
}

export const KLINE_ENTRIES: KnowledgeEntry[] = [
  klineEntry(
    'fortune.kline.career-dimension.guidance',
    'K 线事业维度评分导向',
    ['K线', '事业', '官禄宫'],
    ['官禄宫', '事业'],
    ['事业', '评分', '趋势'],
    ['官禄宫星曜和四化作为事业维度主依据', '命宫能力和大限阶段作为承接条件', '化权、化科、化禄可提高事业动能，化忌和重煞提高压力波动'],
    ['事业高分通常体现职位、项目、权责、专业认可或主动突破', '事业低分更适合写成压力、调整、瓶颈或职责过重'],
    ['事业分数不等于社会地位绝对高低，而是该年事业顺逆和承接能力', '开创格局可高波动，不应简单判坏'],
    ['不要把低分写成失业灾难', '不要让事业分和财运分完全同步'],
    90,
  ),
  klineEntry(
    'fortune.kline.wealth-dimension.guidance',
    'K 线财富维度评分导向',
    ['K线', '财运', '财帛宫'],
    ['财帛宫', '财运'],
    ['财富', '现金流', '评分'],
    ['财帛宫、田宅宫和官禄宫共同影响财富维度', '化禄看资源流入，化忌看现金流压力，化权看主动经营，化科看缓和和信用'],
    ['财富高分可表现为收入机会、资产稳定、现金流改善', '财富低分可表现为支出增加、账目压力、投资审慎期'],
    ['财富分数不是投资建议，也不是收入预测', '财运好时也可能因扩张导致支出同步增加'],
    ['不要给买卖建议', '不要把化忌年份一律写成破产'],
  ),
  klineEntry(
    'fortune.kline.relationship-dimension.guidance',
    'K 线关系维度评分导向',
    ['K线', '感情', '夫妻宫'],
    ['夫妻宫', '感情'],
    ['关系', '情绪', '评分'],
    ['夫妻宫、福德宫和迁移宫共同影响关系维度', '化禄看好感和助力，化忌看执着和磨合，破军/贪狼等提高关系变化度'],
    ['关系高分可表现为支持、默契、关系推进或社交舒展', '关系低分可表现为沟通成本、边界调整或情绪消耗'],
    ['关系分数不应直接断婚恋成败', '低分年份可写成磨合或自我调整期'],
    ['不要断分手离婚', '不要把桃花写成必然外遇'],
  ),
  klineEntry(
    'fortune.kline.health-dimension.guidance',
    'K 线健康维度评分导向',
    ['K线', '健康', '疾厄宫'],
    ['疾厄宫', '健康'],
    ['健康', '压力', '评分'],
    ['疾厄宫作为健康维度主依据', '福德宫和官禄宫提示精神压力与工作负荷', '化忌和煞曜提示风险管理，化科和天梁类导向提示缓冲和修复'],
    ['健康高分适合写成精力恢复、作息改善、压力可控', '健康低分适合写成注意作息、体检和风险管理'],
    ['健康维度只能做生活提醒，不可做医学诊断', '分数反映风险管理强弱，不代表具体疾病'],
    ['不要诊断疾病', '不要给治疗方案', '不要制造恐慌'],
  ),
  klineEntry(
    'fortune.kline.continuity.guidance',
    'K 线连续性与影线导向',
    ['K线', '连续性', '影线'],
    ['K线'],
    ['open', 'close', 'high', 'low', '波动'],
    ['每年 open 必须等于上一年 close', 'high/low 表示年内波动，不应脱离 open/close 过远', '大限切换处可以出现趋势转折'],
    ['稳定格局曲线更平滑，杀破狼、七杀、破军、重煞忌年份波动更大', '高低影线用于表达机会和风险同时存在'],
    ['K 线是叙事化趋势，不是金融预测', '数值应体现阶段节奏和连续性'],
    ['不要随机生成每年分数', '不要让 high 低于 open/close 或 low 高于 open/close', '不要破坏连续性'],
    92,
  ),
]
