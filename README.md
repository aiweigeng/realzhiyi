# realzhiyi

`realzhiyi` 是 Aiwei 的个人网站项目。

目标是建立一个长期个人网站，用来承载 Aiwei 的身份、想法、文章、项目、工具和成长记录。

这个仓库属于 Aiwei OS 之下的具体项目。它应该继承 Aiwei OS 的原则，但不复制整套系统。

## 与 Aiwei OS 的关系

Aiwei OS 定义长期的为什么、原则、身份、工作流、Commands 和 Playbooks。

本项目定义个人网站相关的具体内容：

- 个人网站应该包含什么。
- 公开页面如何组织。
- 文章、项目和工具如何呈现。
- 网站如何跟随 Aiwei 的长期创作循环一起成长。

在进行重要工作前，AI Agent 应该先阅读：

- Aiwei OS `BOOT.md`
- 本仓库 `AGENTS.md`
- `docs/overview.md`
- `docs/decisions.md`

## 项目类型

`website system`

本项目服务于 Aiwei OS 的核心循环：

```text
Observe
Think
Create
Preserve
Share
Observe
```

个人网站应该保存并分享 Aiwei 适合公开的思考、作品和项目。

## 初始范围

第一版应该保持简单。

优先关注：

- 清楚的个人首页。
- 稳定的公开身份表达。
- 文章或笔记的入口。
- 项目和工具的入口。
- 一个可以慢慢成长、但不变重的结构。

暂时避免：

- 过度设计的个人品牌包装。
- 在内容还不充分时建立复杂内容系统。
- 过早自动化。
- 把 Aiwei OS 文档复制到本仓库。

## 建议的未来结构

本仓库先从项目记忆开始。技术栈可以在网站方向更清楚后再加入。

未来可能的结构：

```text
docs/
  overview.md
  decisions.md
content/
  articles/
  notes/
  projects/
public/
src/
```

只有当真实网站工作需要时，才创建这些目录。
