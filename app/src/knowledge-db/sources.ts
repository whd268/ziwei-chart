/**
 * [INPUT]: Depends on public bibliographic references and project source policy
 * [OUTPUT]: Provides source catalog metadata for guidance knowledge entries
 * [POS]: Keeps source provenance separate from generated analysis guidance
 * [PROTOCOL]: Update this header when changed, then check AGENTS.md/CLAUDE.md
 */

import type { KnowledgeSource } from './schema'

export const KNOWLEDGE_SOURCES: KnowledgeSource[] = [
  {
    id: 'project.analysis-position',
    type: 'project-principle',
    title: '紫微知道分析口径',
    note: '项目自定口径：以命盘事实为骨架，三合星情打底，四化动态校正，本命、大限、流年分层，吉凶并陈，避免绝对断事。',
  },
  {
    id: 'book.ziwei-doushu-quanshu',
    type: 'classic',
    title: '紫微斗数全书',
    url: 'https://www.books.com.tw/products/0011034507',
    note: '作为传统体系、安星、宫位、四化、格局等基础框架的书目来源；入库内容只做项目化归纳，不复制原文。',
  },
  {
    id: 'book.lu-wang-star-nature',
    type: 'modern-commentary',
    title: '紫微斗数讲义：星曜性质',
    author: '陆斌兆、王亭之',
    url: 'https://book.douban.com/subject/24297154/',
    note: '作为星曜性质和组合细节的现代讲义书目来源；入库内容只保留改写后的分析导向。',
  },
  {
    id: 'book.wang-tingzhi-basic',
    type: 'modern-commentary',
    title: '中州派紫微斗数初级讲义',
    author: '王亭之',
    url: 'https://book.douban.com/subject/3780709/',
    note: '作为分析原则、星曜体系和宫位判断的现代体系化参考；需标注流派口径。',
  },
  {
    id: 'book.wang-tingzhi-stars',
    type: 'modern-commentary',
    title: '王亭之谈星：紫微斗数星曜总谈',
    author: '王亭之',
    url: 'https://books.google.com/books/about/%E7%8E%8B%E4%BA%AD%E4%B9%8B%E8%AB%87%E6%98%9F.html?id=TANf661r8hoC',
    note: '作为星曜 nuance 的书目来源；入库时以项目语言重写。',
  },
  {
    id: 'book.ziwei-doushu-jingcheng',
    type: 'modern-commentary',
    title: '紫微斗数精成',
    url: 'https://book.douban.com/subject/30356217/',
    note: '作为现代综合整理的交叉参考来源，适合校验常见组合和白话表达方向。',
  },
  {
    id: 'author.cross-check',
    type: 'author-note',
    title: '项目整理：多来源交叉改写',
    note: '用于标注本项目基于多个公开书目和通用命理口径改写后的 guidance，不代表任何单一来源原文。',
  },
  {
    id: 'web.ziwei-learn-cross-check',
    type: 'web-cross-check',
    title: '紫微斗数在线学习资料交叉参考',
    url: 'https://www.ziwei.pro/zh/learn',
    note: '用于辅助确认十二宫、星曜和常见术语的现代解释方向；不复制网页原文。',
  },
]

export function getKnowledgeSource(sourceId: string): KnowledgeSource | undefined {
  return KNOWLEDGE_SOURCES.find((source) => source.id === sourceId)
}
