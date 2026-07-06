# Decisions

本文档记录 `realzhiyi` 的重要项目决策。

## 2026-07-04: 初始化为 Aiwei OS 网站项目

Decision:

将 `realzhiyi` 初始化为 Aiwei OS 之下的 `website system` 项目。

Reason:

用户目标是建立个人网站。Aiwei OS 将个人网站定义为长期方向之一，而 New Project Playbook 要求新项目继承 Aiwei OS 原则，但不复制整套系统。

Implications:

- 本仓库只保存项目特定知识。
- Aiwei OS 仍然是原则、身份、工作流、Commands 和 Playbooks 的 source of truth。
- 初始仓库结构以文档为先。
- 初始化阶段不添加前端框架或构建系统。

Assumptions:

- 在实现之前，先建立项目记忆是更有价值的第一步。
- 网站技术栈应在第一版公开内容和页面目标更清楚后再选择。

## 2026-07-04: 锁定首页 UI 系统为 Tailwind CSS + 自定义极简组件

Decision:

`realzhiyi` 首页使用 Next.js + Tailwind CSS，并建立一个自定义的最小组件系统作为后续页面基础。

Reason:

个人网站的目标是长期承载思考、文章、作品和介绍。相比引入完整 UI 框架或模板，自定义极简组件更符合内容优先、低维护和克制表达的方向。

Implications:

- 首页采用 `src/app/page.tsx` 实现。
- 基础组件放在 `src/components/ui/`。
- 当前组件系统包含 `Button`、`Card`、`Container`、`Section` 和 `Typography`。
- 禁止将 shadcn/ui、MUI、Ant Design、Chakra UI 或 UI template kit 作为项目 UI 系统。
- 后续页面应复用现有基础组件和 Tailwind 设计规则。
- 如果需要明显偏离该 UI 系统，应先执行 Architecture Review。

Assumptions:

- 第一版首页暂时使用占位文章和项目内容，后续由真实公开内容替换。
- 首页不使用视觉特效、插画系统或 SaaS landing page 结构。

## 2026-07-04: 建立全站中文导航与静态内容结构

Decision:

将 `realzhiyi` 从单页首页扩展为全站基础结构，包含首页、文章、作品、关于和文章详情页。全站使用统一 Layout，顶部导航使用中文，Footer 只保留版权与标语。

Reason:

用户明确要求网站具备完整可访问路由、统一组件系统和中文导航。个人网站的长期方向也需要文章、作品和关于页面作为最小公开结构。

Implications:

- 全局 Layout 负责顶部 `Navbar`、底部 `Footer` 和页面主内容区域。
- 导航只包含：首页、文章、作品、关于。
- `Footer` 只显示 `© 2026 直一 制心一处者当可无事不办`。
- 内容区域通过 `Container` 保持 `1100px` 最大宽度。
- 文章和作品使用 `src/lib/content.ts` 中的静态 mock 数据。
- 当前不引入 CMS、数据库、MDX 或复杂内容层。
- 文章列表中的文章必须能点击进入已注册的详情页。

Assumptions:

- 现阶段保持中文单语网站更符合公开主页的表达方向。
- 首页不再承担各页面入口功能，页面访问主要依赖全站导航。
- 第一篇长文来自用户提供的 XMind 素材和文字方向，后续可以逐步替换或扩展为真实文章库。

## 2026-07-04: 首页加入人生系统交互模块并移除全站分割线

Decision:

首页在首屏 Banner 后展示“假如有人生系统”模块，用五种财富作为可点击节点，点击后查看每个节点的分析、细节和当前实践协议。全站不再使用页面分割线作为结构表达。

Reason:

用户希望首页从占位说明转向更具体的个人实践表达，并希望内容来自自己阅读《The 5 Types of Wealth》后的真实生活调整。五种财富之间存在系统关系，适合用交互节点呈现，而不是只做静态长文。

Implications:

- 首页首屏保留打字 Banner，但高度增加，打字速度变慢；后续根据实际观感调整为只播放一遍，完成后不再保留闪动光标。
- 首页删除旧的“正在建设”和“观察/思考/创造”占位区块。
- 全站移除导航、页脚、页面区块和文章详情中的分割线。
- 交互模块不引入新依赖，继续使用 Next.js、React 和 Tailwind CSS。

Assumptions:

- 当前首页模块是对用户提供素材的提炼，不代表最终文章版本。
- 模块可以保留轻量科技感，但不应该变成炫技网站或覆盖真实内容。

## 2026-07-06: 文章和作品列表改为简洁文本列表

Decision:

文章页和作品页的列表不再使用卡片容器，也不再使用 hover 视觉样式，改为更轻的文本列表。

Reason:

个人网站当前更需要清楚、耐读、低维护的内容入口。相比卡片式展示，文本列表更克制，也更适合文章和长期作品记录。

Implications:

- 文章列表只保留日期、标题和摘要，标题仍作为文章入口。
- 作品列表只保留状态、名称和描述。
- `Card` 组件仍保留给未来真正需要框定的重复项、模态或工具界面使用。

Assumptions:

- 当前作品数量较少，简洁列表比网格卡片更适合阅读和维护。

## 2026-07-06: 站点公开身份使用 Aiwei / Real · 直一

Decision:

网站浏览器标题使用 `Real · 直一`，导航左侧标识使用 `Aiwei`，关于页主标题使用“我是Aiwei”，并保留“你也可以叫我直一。”作为称呼说明。

Reason:

用户希望公开主页更明确地呈现 Aiwei 这个身份，同时保留“直一”作为个人称呼和站点气质的一部分。

Implications:

- 全站默认 metadata title 为 `Real · 直一`。
- 子页面标题沿用 `页面名 | Real · 直一` 的结构。
- favicon 使用“一”字作为轻量识别符号。
- 关于页提供 `aiweigeng@gmail.com` 作为公开邮箱联系入口。

Assumptions:

- 这是公开身份和基础品牌表达的调整，不需要引入 logo 系统、品牌规范或额外设计资产。
