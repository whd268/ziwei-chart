# 紫微知道

<p align="center">
  <img width="820" alt="紫微知道" src="./assets/logo.zh-TW.svg" />
</p>

<p align="center">
  <strong>現代化的紫微斗數命盤分析工具</strong>
</p>

<p align="center">
  精準排盤 · AI 深度解讀 · 年度運勢 · 雙人合盤 · 人生 K 線
</p>

## 概覽

紫微知道把傳統紫微斗數知識、現代前端互動和多模型 AI 能力整合到一個可自部署的 Web 應用中。

它不只是展示命盤，而是圍繞「看得懂、用得上、方便分享」這三件事，提供更完整的分析體驗。

## 功能特性

- **精準排盤** - 基於 `iztro`，支援完整十二宮配置與傳統安星邏輯
- **AI 命盤解讀** - 提供結構化的命盤分析，支援多模型接入
- **年度運勢** - 結合限流疊宮與月度趨勢，呈現階段性變化
- **雙人合盤** - 支援四化互飛、關係匹配與互動分析
- **人生 K 線** - 以可視化方式展示長期運勢走勢
- **分享卡片** - 一鍵生成適合傳播的命格金句卡

## 快速開始

```bash
git clone https://github.com/ziweiknows/ziwei-chart.git
cd ziwei-chart/app
npm install
npm run dev
```

## 部署

### Vercel

[![Deploy with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/ziweiknows/ziwei-chart&project-name=ziwei&root-directory=app)

### Cloudflare Pages

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ziweiknows/ziwei-chart)

## 設定

在應用內開啟設定，即可配置 LLM API。支援 OpenAI-compatible 介面，也可配置 Kimi、Gemini、Claude、DeepSeek 等服務。
