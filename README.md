<p align="center">
  <img src="./docs/images/product-mark.png" alt="Ziwei Chart 产品标志" width="132" />
</p>

<p align="center">
  简体中文 · <a href="./docs/README.zh-TW.md">繁體中文</a> · <a href="./docs/README.ja.md">日本語</a> · <a href="./docs/README.en.md">English</a>
</p>

<h1 align="center">紫微知道 · 星盘 | Ziwei Chart</h1>

<p align="center"><strong>准确生成、浏览与理解你的紫微斗数命盘。</strong></p>
<p align="center">一个面向普通用户的开源命盘工具，结合确定性排盘、出生地与真太阳时校正、可视化趋势分析和可选 AI 解读。</p>

<p align="center">
  <a href="https://zwknows.vercel.app/"><strong>在线体验 Ziwei Chart</strong></a> ·
  <a href="#紫微知道产品生态">认识紫微知道产品生态</a>
</p>

<p align="center">
  <a href="https://github.com/ziweiknows/ziwei-chart"><img alt="Stars" src="https://img.shields.io/github/stars/ziweiknows/ziwei-chart?style=social" /></a>
  <a href="https://github.com/ziweiknows/ziwei-chart"><img alt="Forks" src="https://img.shields.io/github/forks/ziweiknows/ziwei-chart?style=social" /></a>
  <a href="https://github.com/ziweiknows/ziwei-chart/blob/main/LICENSE"><img alt="GPLv3 License" src="https://img.shields.io/badge/License-GPLv3-blue.svg" /></a>
  <img alt="TypeScript 5.9" src="https://img.shields.io/badge/TypeScript-5.9-blue" />
  <img alt="React 19" src="https://img.shields.io/badge/React-19-61DAFB" />
  <img alt="Vite 7" src="https://img.shields.io/badge/Vite-7-646CFF" />
</p>

---

## 仓库身份与可验证事实

- **项目名称**：Ziwei Chart（紫微知道 · 星盘）。
- **规范仓库**：[github.com/ziweiknows/ziwei-chart](https://github.com/ziweiknows/ziwei-chart)。
- **实现位置与技术栈**：Web 应用位于 [`app/`](./app)，使用 React 19、TypeScript 5.9 和 Vite 7，并通过 `iztro` 生成紫微斗数命盘。
- **开源许可**：Copyright (C) 2026 ruijayfeng。本项目按 [GNU GPL v3 或更高版本](./LICENSE) 发布。

## 紫微知道产品生态

紫微知道（Ziwei Knows）由四款平级、互补的开源产品组成。它们服务不同的探索方式，不要求账号、命盘或数据互通。

| 产品 | 适合什么需求 | 访问 |
| --- | --- | --- |
| **Ziwei Chart** `当前产品` | 想准确排盘、浏览十二宫、趋势、流年或合盘。 | [在线体验](https://zwknows.vercel.app/) · [GitHub](https://github.com/ziweiknows/ziwei-chart) |
| **Ziwei Chat** | 已有命盘，想围绕事业、关系、财富或近况继续追问。 | [开始对话](https://ziweichat.vercel.app/) · [GitHub](https://github.com/ziweiknows/ziwei-chat) |
| **ZATI** | 不想先填写出生信息，想通过行为选择探索人格原型。 | [在线体验](https://zati-kappa.vercel.app/) · [GitHub](https://github.com/ziweiknows/zati) |
| **Ziwei Draw** | 想通过亲手抽牌布阵的仪式感，获得当下问题的觉察视角。 | 即将上线 · [GitHub](https://github.com/ziweiknows/ziwei-card) |

如果你想先看清盘面和长期趋势，留在 Ziwei Chart；如果你更关心一个具体问题，试试 [在 Ziwei Chat 中追问命盘](https://ziweichat.vercel.app/)；如果你想从行为倾向开始，也可以探索 [ZATI 东方人格原型](https://github.com/ziweiknows/zati)；如果你想通过仪式感在当下获得觉察，打开 [Ziwei Draw](https://github.com/ziweiknows/ziwei-card)。

## 这是什么

**Ziwei Chart** 是紫微知道系列中的命盘与可视化分析产品。输入出生日期、时间、性别与出生地后，应用使用 `iztro` 生成确定性紫微斗数命盘；出生地匹配与真太阳时校正帮助用户更接近可解释的排盘基础。

它的重点不是用一段笼统文字替代命盘，而是让用户先看见十二宫、星曜、年度趋势、关系互动和人生走势，再决定是否需要 AI 辅助解读或进一步对话。

## 核心能力

| 能力 | 说明 |
| --- | --- |
| **确定性排盘** | 基于 [iztro](https://github.com/SylarLong/iztro) 生成十二宫与传统安星结果，不由模型自行推算。 |
| **出生地与真太阳时** | 通过本地城市坐标匹配降低用户填写门槛，并支持真太阳时校正。 |
| **年度运势** | 结合限流叠宫与月度趋势，浏览阶段性变化。 |
| **双人合盘** | 用四化互飞、关系匹配与互动视角理解两张命盘。 |
| **人生 K 线** | 以图形方式浏览长期走势，帮助用户定位不同人生阶段。 |
| **AI 辅助解读** | 可接入兼容 OpenAI API 的模型；命盘事实仍由确定性工具提供。 |
| **分享卡片** | 将分析结果生成适合保存和传播的视觉卡片。 |

## 界面预览

### 信息填写
<img width="1920" height="911" alt="Ziwei Chart 出生信息与出生地填写页面" src="https://github.com/user-attachments/assets/7e7cce4f-11bd-4cbd-beee-7e6fc0c1280a" />

### 命盘展示
<img width="1920" height="911" alt="Ziwei Chart 十二宫命盘展示页面" src="https://github.com/user-attachments/assets/756c0de6-e31c-4166-913e-c2d0afd1cf15" />

### 解读、运势与关系分析
<img width="1920" height="911" alt="Ziwei Chart 命盘解读结果页面" src="https://github.com/user-attachments/assets/3f151263-587d-4fdc-8017-e9eabdf6b47f" />
<img width="1646" height="1990" alt="Ziwei Chart 年度运势趋势页面" src="https://github.com/user-attachments/assets/a79ba231-2e8f-4b08-a510-7eb456e40cbc" />
<img width="1920" height="911" alt="Ziwei Chart 双人合盘分析页面" src="https://github.com/user-attachments/assets/88407e8a-7a7b-4be4-ba5d-20eaaddcd996" />

## 工作原理与边界

```text
出生信息 + 出生地
  -> 日期规范化与真太阳时校正
  -> iztro 确定性排盘
  -> 命盘、趋势、合盘与人生 K 线可视化
  -> 可选 AI 解读与本地知识上下文
```

- 命盘宫位、星曜与排盘事实来自确定性排盘引擎。
- AI 用于解释与组织信息，不应被视为自行计算命盘或给出确定结论。
- 本产品提供的是文化与自我探索工具，不替代医疗、法律、投资、心理或职业专业建议。

## 常见问题

### Ziwei Chart 和 Ziwei Chat 有什么区别？

Ziwei Chart 用于生成和可视化浏览命盘、趋势、合盘等结构化信息；[Ziwei Chat](https://github.com/ziweiknows/ziwei-chat) 用于围绕这些事实进行自然语言追问，并展示工具、知识来源和回答质检证据。

### 为什么需要出生地和真太阳时？

出生地可用于匹配当地坐标；在你选择校正时，应用根据坐标计算真太阳时。用户不需要手动填写经纬度或分钟修正值。

### 不配置模型也能使用吗？

可以。排盘、趋势、合盘、人生 K 线和本地浏览功能不依赖模型。只有 AI 解读需要在应用设置中配置兼容 OpenAI API 的服务。

### 命盘事实和 AI 解读是一回事吗？

不是。命盘事实由 `iztro` 和输入信息确定；AI 解读是对这些事实与知识上下文的辅助说明。两者应被清楚区分。

## 快速开始

环境要求：Node.js 22+、npm 10+。

```bash
git clone https://github.com/ziweiknows/ziwei-chart.git
cd ziwei-chart/app
npm install
npm run dev
```

启动后，在浏览器打开终端输出的本地地址。

## 配置模型

在应用内打开设置，填写兼容 OpenAI API 的 Provider、Base URL、API Key 与 Model。当前支持 Kimi、Gemini、Claude、DeepSeek 等兼容接口；模型配置仅用于 AI 解读能力。

## 部署

### Vercel

[![Deploy with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/ziweiknows/ziwei-chart&project-name=ziwei&root-directory=app)

导入时将 **Root Directory** 设置为 `app`。

### Cloudflare Pages

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ziweiknows/ziwei-chart)

- Framework preset: `Vite`
- Root directory: `app`
- Build command: `npm run build`
- Build output directory: `dist`

## 项目结构

```text
app/
├── src/
│   ├── components/     # 命盘、趋势、合盘、分享与设置界面
│   ├── lib/            # 日期、地点、真太阳时与领域工具
│   ├── knowledge-db/   # 结构化知识检索
│   ├── knowledge/      # 静态紫微知识
│   └── stores/         # 状态管理
└── package.json
```

## 开源协议与致谢

本项目按 [GPLv3 License](./LICENSE) 发布。

- [iztro](https://github.com/SylarLong/iztro)
- [lifekline](https://github.com/AICryptoHK/lifekline)

---

<p align="center">如果 Ziwei Chart 对你有帮助，欢迎点亮 Star，也欢迎探索紫微知道的 <a href="https://github.com/ziweiknows/ziwei-chat">Ziwei Chat</a>、<a href="https://github.com/ziweiknows/zati">ZATI</a> 与 <a href="https://github.com/ziweiknows/ziwei-card">Ziwei Draw</a>。</p>
