/**
 * [INPUT]: Depends on knowledge-db schema and cross-checked auxiliary-star guidance
 * [OUTPUT]: Provides support and malefic auxiliary-star guidance entries
 * [POS]: Auxiliary layer for interpreting modifiers without making absolute judgments
 * [PROTOCOL]: Update this header when changed, then check AGENTS.md/CLAUDE.md
 */

import type { KnowledgeEntry } from '../schema'

const SOURCE_REFS = [
  'project.analysis-position',
  'book.ziwei-doushu-quanshu',
  'book.lu-wang-star-nature',
  'web.ziwei-learn-cross-check',
  'author.cross-check',
]

function supportEntry(
  id: string,
  title: string,
  entities: string[],
  topics: string[],
  focus: string[],
  likelyThemes: string[],
  nuance: string[],
  avoid: string[],
  priority = 82,
): KnowledgeEntry {
  return {
    id,
    domain: 'combo',
    title,
    entities,
    appliesTo: ['命宫', '三方四正', '全局'],
    topics,
    priority,
    guidance: { focus, likelyThemes, nuance, avoid },
    taskFit: {
      natal: '用于修正主星和宫位的强弱表现。',
      yearly: '用于判断当年助力、阻力和缓冲条件。',
      kline: '用于调整波动和风险缓冲。',
    },
    sourceRefs: SOURCE_REFS,
    sourceLevel: 'B',
    confidence: 0.7,
    reviewStatus: 'draft',
  }
}

export const SUPPORT_ENTRIES: KnowledgeEntry[] = [
  supportEntry(
    'support.zuo-you.guidance',
    '左辅右弼助力导向',
    ['左辅', '右弼', '辅弼'],
    ['贵人', '协作', '组织支持'],
    ['是否有可靠协助和组织资源', '主星能力是否能被团队承接', '命主是否善于借力而不是单打独斗'],
    ['容易得到协助、同伴、幕僚或制度资源', '适合通过团队、贵人和组织放大能力'],
    ['辅弼不是免费好运，也需要命主愿意协作和分配权责', '落在不同宫位时助力领域不同'],
    ['不要直接断贵人必来', '不要忽略协作成本和责任分工'],
    88,
  ),
  supportEntry(
    'support.chang-qu.guidance',
    '文昌文曲表达导向',
    ['文昌', '文曲', '昌曲'],
    ['文书', '表达', '审美', '学习'],
    ['文书、考试、表达和审美是否成为优势', '是否适合通过内容、证照、设计、写作或传播增益', '是否存在文书差错风险'],
    ['有利学习、表达、文案、审美和专业包装', '可帮助主星更容易被看见和理解'],
    ['昌曲若逢化忌或煞重，反而要注意文书、合约和表达误差', '现代可转译为内容和传播能力'],
    ['不要机械断学历高', '不要忽略文书风险'],
  ),
  supportEntry(
    'support.kui-yue.guidance',
    '魁钺贵人导向',
    ['天魁', '天钺', '魁钺'],
    ['贵人', '提携', '机会'],
    ['是否有长辈、上级、专业人士或制度性提携', '机会是否来自正式渠道或关键人物', '命主是否能承接贵人给的台阶'],
    ['容易遇到提携、推荐、帮助或关键机会', '适合重视礼节、资质和正式路径'],
    ['贵人星不等于自动成功，仍要看能力承接和宫位主题', '贵人也可能带来责任和期待'],
    ['不要直接断必有贵人', '不要忽略自身准备'],
  ),
  supportEntry(
    'support.lu-cun.guidance',
    '禄存资源导向',
    ['禄存'],
    ['资源', '守财', '稳定'],
    ['稳定资源、收入或存量优势', '是否偏重守成和安全边际', '资源是否被羊陀夹制或责任占用'],
    ['有利稳定积累、资源保留和现实保障', '适合稳健经营和长期规划'],
    ['禄存偏存量和守成，不等于暴发', '若结构受压，资源也可能变成责任或保守'],
    ['不要直接断富', '不要忽略资源流动性和压力'],
  ),
  supportEntry(
    'support.huo-ling.guidance',
    '火铃突发压力导向',
    ['火星', '铃星', '火铃'],
    ['突发', '急躁', '爆发力', '风险'],
    ['事件是否带突发性和急迫感', '情绪、决策或外部环境是否容易快速升温', '能否把爆发力用于突破而不是冲动'],
    ['火铃可带行动爆发和突破，也会提高意外、冲突和波动', '适合写成“节奏快、风险高、需控火候”'],
    ['火铃不是绝对灾，但会放大急躁、突发和不稳定', '需看落宫和是否与忌煞叠加'],
    ['不要直接断灾祸', '不要制造恐慌', '不要忽略其行动力'],
  ),
  supportEntry(
    'support.di-kong-di-jie.guidance',
    '空劫落空与破耗导向',
    ['地空', '地劫', '空劫'],
    ['落空', '破耗', '精神性', '风险'],
    ['计划是否容易落空、延迟或预期不符', '资源是否有看得见但留不住的情况', '是否适合降低杠杆和幻想'],
    ['空劫常提示理想与现实落差、资源破耗或精神性追求', '也可带来跳脱框架和非物质取向'],
    ['空劫不等于一无所有，应看它落在哪个宫位和是否被吉曜缓和', '现代输出应强调预期管理和风险控制'],
    ['不要直接断败光', '不要忽略创意、出世和重新定义价值的可能'],
  ),
]
