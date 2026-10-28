# 紫微知道

<p align="center">
  <img width="820" alt="紫微知道" src="./assets/logo.ja.svg" />
</p>

<p align="center">
  <strong>現代的な紫微斗数チャート分析ツール</strong>
</p>

<p align="center">
  精密な命盤作成 · AI 解釈 · 年運分析 · 相性診断 · ライフカーブ可視化
</p>

## 概要

紫微知道は、伝統的な紫微斗数の知識、モダンな Web UI、複数モデル対応の AI を組み合わせたセルフホスト可能なアプリです。

命盤を表示するだけでなく、「理解しやすいこと」「使いやすいこと」「共有しやすいこと」を重視しています。

## 主な機能

- **精密な命盤作成** - `iztro` ベースで 12 宮を含むチャートを生成
- **AI 解釈** - 構造化された命盤分析を出力
- **年運分析** - 月次トレンドまで含めた運勢推移
- **相性診断** - 二人の命盤を比較して関係性を分析
- **ライフカーブ** - 長期的な運勢の流れを可視化
- **共有カード** - 共有向けの金言カードを生成

## はじめに

```bash
git clone https://github.com/ziweiknows/ziwei-chart.git
cd ziwei-chart/app
npm install
npm run dev
```

## デプロイ

### Vercel

[![Deploy with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/ziweiknows/ziwei-chart&project-name=ziwei&root-directory=app)

### Cloudflare Pages

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ziweiknows/ziwei-chart)

## 設定

アプリ内の設定画面から LLM API を設定できます。OpenAI-compatible API に加えて、Kimi、Gemini、Claude、DeepSeek なども利用できます。
