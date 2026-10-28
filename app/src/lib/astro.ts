/* ============================================================
   iztro 排盘引擎封装
   ============================================================

   流派标准（文墨天机对齐）:
   - 年分界: 正月初一 (yearDivide: normal)
   - 运限分界: 正月初一 (horoscopeDivide: normal)
   - 子初换日: 23:00 即换日 (dayDivide: forward)
   - 小限分界: 自然年 (ageDivide: normal)
   - 安星法: 中州派 (algorithm: zhongzhou)
   ============================================================ */

import { astro } from 'iztro'
import type FunctionalAstrolabe from 'iztro/lib/astro/FunctionalAstrolabe'
import { resolveBirthTime, type ResolvedBirthTime } from './true-solar-time'

/* ------------------------------------------------------------
   全局配置初始化 - 文墨天机标准
   ------------------------------------------------------------ */

astro.config({
  yearDivide: 'normal',       // 年干四化: 正月初一分年
  horoscopeDivide: 'normal',  // 大限流年: 正月初一分界
  ageDivide: 'normal',        // 小限: 按自然年分
  dayDivide: 'forward',       // 子初换日: 23:00 即换日
  algorithm: 'zhongzhou',     // 安星法: 中州派
})

export type Gender = 'male' | 'female'

export interface BirthInfo {
  year: number
  month: number
  day: number
  hour: number
  gender: Gender
  birthplace?: string
  trueSolarEnabled?: boolean
  resolvedBirthTime?: ResolvedBirthTime
  isLeapMonth?: boolean
  fixLeap?: boolean
}

/* ------------------------------------------------------------
   生成命盘
   ------------------------------------------------------------ */

export function generateChart(info: BirthInfo): FunctionalAstrolabe {
  const { gender, fixLeap = true } = info
  const resolvedTime = info.resolvedBirthTime ?? resolveBirthTime({
    year: info.year,
    month: info.month,
    day: info.day,
    hour: info.hour,
    birthplace: info.birthplace,
    enabled: info.trueSolarEnabled ?? true,
  })

  const dateStr = `${resolvedTime.year}-${resolvedTime.month}-${resolvedTime.day}`
  const timeIndex = resolvedTime.timeIndex
  const genderName = gender === 'male' ? '男' : '女'

  return astro.bySolar(dateStr, timeIndex, genderName, fixLeap)
}

/* ------------------------------------------------------------
   时辰选项
   ------------------------------------------------------------ */

const SHICHEN_NAMES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'] as const

export function hourToShichen(hour: number): string {
  const index = Math.floor(((hour + 1) % 24) / 2)
  return SHICHEN_NAMES[index] + '时'
}

export function getShichenOptions() {
  return SHICHEN_NAMES.map((name, index) => {
    const startHour = index === 0 ? 23 : (index * 2 - 1)
    const endHour = index === 11 ? 22 : index === 0 ? 0 : (index * 2)
    const label = index === 0
      ? `${name}时 (23:00-00:59)`
      : `${name}时 (${String(startHour).padStart(2, '0')}:00-${String(endHour).padStart(2, '0')}:59)`
    return {
      value: index === 0 ? 23 : index * 2,
      label,
    }
  })
}

/* ------------------------------------------------------------
   导出类型
   ------------------------------------------------------------ */

export type { FunctionalAstrolabe }
