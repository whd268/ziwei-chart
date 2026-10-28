/* ============================================================
   运势雷达图组件
   ============================================================

   四维度: 事业、财运、感情、健康
   ============================================================ */

import { useMemo } from 'react'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import { RadarChart } from 'echarts/charts'
import { RadarComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { RadarIcon } from '@/components/icons/KLineIcon'
import type { FortuneScore } from '@/lib/fortune-score'

// 注册 ECharts 组件
echarts.use([RadarChart, RadarComponent, TooltipComponent, CanvasRenderer])

interface ScoreRadarProps {
  score: FortuneScore
  period: string
}

export function ScoreRadar({ score, period }: ScoreRadarProps) {
  const option = useMemo(() => ({
    backgroundColor: 'transparent',
    radar: {
      indicator: [
        { name: '事业', max: 100 },
        { name: '财运', max: 100 },
        { name: '感情', max: 100 },
        { name: '健康', max: 100 },
      ],
      shape: 'polygon',
      splitNumber: 4,
      axisName: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 12,
      },
      splitLine: {
        lineStyle: { color: 'rgba(255,255,255,0.08)' },
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(124,58,237,0.02)', 'rgba(124,58,237,0.04)'],
        },
      },
      axisLine: {
        lineStyle: { color: 'rgba(255,255,255,0.1)' },
      },
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(15,15,35,0.95)',
      borderColor: 'rgba(124,58,237,0.3)',
      textStyle: { color: '#fff' },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [
              score.dimensions.career,
              score.dimensions.wealth,
              score.dimensions.relationship,
              score.dimensions.health,
            ],
            name: period,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(212,175,55,0.4)' },
                { offset: 1, color: 'rgba(124,58,237,0.2)' },
              ]),
            },
            lineStyle: {
              color: 'rgba(212,175,55,0.8)',
              width: 2,
            },
            itemStyle: {
              color: '#D4AF37',
            },
          },
        ],
      },
    ],
  }), [score, period])

  // 维度得分条
  const dimensions = [
    { key: 'career', label: '事业', value: score.dimensions.career, color: 'from-amber-500 to-orange-500' },
    { key: 'wealth', label: '财运', value: score.dimensions.wealth, color: 'from-gold to-amber-400' },
    { key: 'relationship', label: '感情', value: score.dimensions.relationship, color: 'from-pink-500 to-rose-500' },
    { key: 'health', label: '健康', value: score.dimensions.health, color: 'from-emerald-500 to-green-500' },
  ]

  return (
    <div
      className="
        p-4 rounded-2xl
        bg-white/[0.02] border border-white/[0.06]
        backdrop-blur-sm
      "
    >
      {/* 标题 */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="flex items-center gap-2 text-sm text-text-muted font-medium">
          <RadarIcon className="h-4 w-4 text-gold/70" />
          {period} 运势分析
        </h3>
        <div className="flex items-center gap-2">
          <span
            className={`
              text-2xl font-bold
              ${score.trend === 'up' ? 'text-green-400' : score.trend === 'down' ? 'text-rose-400' : 'text-gold'}
            `}
          >
            {score.total}
          </span>
          <span
            className={`
              text-lg
              ${score.trend === 'up' ? 'text-green-400' : score.trend === 'down' ? 'text-rose-400' : 'text-text-muted'}
            `}
          >
            {score.trend === 'up' ? '↑' : score.trend === 'down' ? '↓' : '→'}
          </span>
        </div>
      </div>

      {/* 雷达图 */}
      <ReactEChartsCore
        echarts={echarts}
        option={option}
        style={{ height: '200px' }}
        opts={{ renderer: 'canvas' }}
      />

      {/* 维度条形图 */}
      <div className="space-y-3 mt-4">
        {dimensions.map(dim => (
          <div key={dim.key} className="flex items-center gap-3">
            <span className="text-xs text-text-muted w-8">{dim.label}</span>
            <div className="flex-1 h-2 bg-white/[0.05] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${dim.color} transition-all duration-500`}
                style={{ width: `${dim.value}%` }}
              />
            </div>
            <span className="text-xs text-text-secondary w-8 text-right">{dim.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
