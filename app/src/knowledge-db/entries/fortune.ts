/**
 * [INPUT]: Depends on knowledge-db schema and cross-checked timing guidance
 * [OUTPUT]: Provides decadal and yearly fortune guidance entries
 * [POS]: Timing-specific layer for yearly analysis and K-line generation
 * [PROTOCOL]: Update this header when changed, then check AGENTS.md/CLAUDE.md
 */

import type { KnowledgeEntry } from '../schema'

const SOURCE_REFS = [
  'project.analysis-position',
  'book.ziwei-doushu-quanshu',
  'book.wang-tingzhi-basic',
  'web.ziwei-learn-cross-check',
  'author.cross-check',
]

function fortuneEntry(
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
    domain: 'fortune',
    title,
    entities,
    appliesTo: ['运限', '大限', '流年'],
    topics,
    priority: 78,
    guidance: { focus, likelyThemes, nuance, avoid },
    taskFit: {
      yearly: '用于年度运势分层分析。',
      kline: '用于人生 K 线阶段趋势和波动解释。',
    },
    sourceRefs: SOURCE_REFS,
    sourceLevel: 'B',
    confidence: 0.7,
    reviewStatus: 'draft',
  }
}

export const FORTUNE_ENTRIES: KnowledgeEntry[] = [
  fortuneEntry(
    'fortune.decadal-stage.guidance',
    '大限阶段主题导向',
    ['大限', '十年阶段'],
    ['十年主题', '阶段趋势', '人生周期'],
    ['大限所在宫位代表十年主轴', '大限四化提示该阶段资源、权责、名誉和课题', '本命强弱决定大限能承接到什么程度'],
    ['十年阶段会反复围绕某类主题展开', '大限好坏通常比单一年份更能决定趋势底色'],
    ['大限不是单独断事，需与本命结构和流年触发共同判断', '同一大限中仍会有流年高低起伏'],
    ['不要用一年事件覆盖整个大限', '不要脱离本命断大限吉凶'],
  ),
  fortuneEntry(
    'fortune.yearly-trigger.guidance',
    '流年触发导向',
    ['流年', '流年四化'],
    ['年度事件', '触发', '应期'],
    ['流年命宫落点', '流年四化进入哪些本命宫位', '该年是否触发本命或大限已有主题'],
    ['流年更像触发器，常把本命和大限的潜在主题推到台前', '年度重点应围绕被引动宫位展开'],
    ['流年四化不能脱离本命宫位和大限阶段解释', '流年吉凶通常是阶段里的具体波峰波谷'],
    ['不要只凭流年四化断全年', '不要把一年波动写成终身定局'],
  ),
  fortuneEntry(
    'fortune.palace-overlap.guidance',
    '限流叠宫导向',
    ['叠宫', '本命', '大限', '流年'],
    ['宫位重叠', '应事领域', '层次判断'],
    ['流年命宫叠入本命何宫', '大限宫位与本命宫位是否重复主题', '同一主题被多层引动时优先分析'],
    ['叠宫能帮助判断事件领域，而不是单纯判断吉凶', '多层同向时主题更明显'],
    ['叠宫结果应作为“今年重点在哪”的线索', '吉凶仍要看星曜、四化、辅煞和现实承接'],
    ['不要把叠宫当作单一结论', '不要忽略本命底色'],
  ),
  fortuneEntry(
    'fortune.positive-negative-balance.guidance',
    '运势吉凶平衡导向',
    ['吉凶', '运势', '波动'],
    ['平衡表达', '机会', '风险'],
    ['机会和压力是否同宫或互相牵动', '吉象能否缓和忌煞', '风险是否有可操作的管理方式'],
    ['好运常伴随责任，压力中也可能有转机', '年度分析应同时写机会、风险和行动建议'],
    ['吉凶混杂时，应说明条件和取舍，而不是简单打分', '对用户有用的是行动边界和关注重点'],
    ['不要只报喜或只报忧', '不要用恐吓式语言表达低谷'],
  ),
  fortuneEntry(
    'fortune.kline-volatility.guidance',
    'K 线波动导向',
    ['K线', '人生曲线', '波动'],
    ['趋势', '波动', '评分'],
    ['大限作为趋势水位', '流年作为年内波动', '煞忌和开创格局提高波动，稳定格局降低波动'],
    ['人生 K 线应有阶段感，不应每年随机起伏', '高波动不等于全坏，可能代表机会和风险并存'],
    ['K 线数值是分析表达，不是确定预测', '分数应体现趋势和风险，不应制造确定性命运感'],
    ['不要生成机械直线', '不要把低分写成灾难', '不要让 open/close 失去连续性'],
  ),
]
