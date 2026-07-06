# Project Overview

## Project Name

realzhiyi

## Goal

建立 Aiwei 的个人网站。

这个网站应该成为 Aiwei 长期的公开主页，用来承载身份、想法、文章、项目、工具和成长记录。

## Project Type

`website system`

## Relationship to Aiwei OS

Aiwei OS 定义长期个人操作系统：

- 为什么建设
- 用什么原则指导决策
- 应该保留什么身份和表达风格
- AI Agent 如何协作
- 重复工作如何沉淀成 Commands 和 Playbooks

`realzhiyi` 是这个大系统里的一个具体项目。它以 Aiwei OS 为基础，但这里只保留个人网站相关的文档和实现。

## Initial Website Intent

个人网站应该：

- 清楚、真实地呈现 Aiwei
- 收集公开文章和笔记
- 展示选定项目和工具
- 通过真实作品记录长期成长
- 保持足够简单，便于长期维护

## Current Phase

全站基础结构实现阶段。

技术栈已确定为 Next.js + Tailwind CSS。网站使用自定义极简组件系统，避免引入通用 UI 套件，让页面保持内容优先、低维护和长期可扩展。

当前已经建立统一的全局 Layout、中文导航、Footer、首页、文章页、作品页、关于页和文章详情页。首页在首屏 Banner 后加入了“假如人生也有一套操作系统”交互模块，用用户阅读《The 5 Types of Wealth》后的真实实践素材提炼五种财富节点。关于页保持极简身份介绍，保留 Aiwei / 直一 的称呼关系、身份标语、关注方向和邮箱联系入口。文章内容已经开始从静态 mock 过渡到用户提供的真实公开文章，其中包括 AI 趋势判断、本地模型部署、AI Agent 工作流体验，以及《假如人生也有一套操作系统》这类阅读后的个人实践记录；文章和作品列表采用无卡片的简洁文本列表；作品内容仍暂时使用静态 mock 数据，不引入 CMS 或复杂数据层。

## UI System

`realzhiyi` 使用 Tailwind CSS + Custom Minimal Component System。

基础组件包括：

- `Button`
- `Card`
- `Container`
- `Section`
- `Navbar`
- `Footer`
- `Typography`

UI 方向：

- 极简
- 内容优先
- 大留白
- 长期阅读
- 非 SaaS 模板
- 不使用页面分割线作为结构表达
- 不使用 shadcn/ui、MUI、Ant Design、Chakra UI 或 UI template kit

所有后续页面应沿用这个系统。任何明显偏离都需要先做 Architecture Review。

## Near-Term Questions

- 文章、笔记和项目的真实内容应该如何组织？
- 首页的人生系统模块后续是否需要扩展成独立文章或专题页？
- 当前静态 mock 数据何时替换为真实公开内容？
