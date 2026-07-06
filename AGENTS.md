# AGENTS

本文档定义 AI Agent 在 `realzhiyi` 中应该如何协作。

## Source of Truth

本项目遵循 Aiwei OS。

Agent 应该先从 Aiwei OS `BOOT.md` 开始。如果用户请求匹配现有 Command，则使用对应的 Aiwei OS Command 和 Playbook。

不要把 Aiwei OS 的核心文档复制到本仓库：

- `WHY.md`
- `PERSONA.md`
- `PRINCIPLES.md`

这些文档属于 Aiwei OS。本仓库只保存项目特定的知识。

## Mission

帮助建立 Aiwei 的个人网站，让它成为长期公开主页，用来承载：

- 个人身份
- 文章和笔记
- 项目和工具
- 适合公开的思考与成长记录

目标不是做一个炫技网站，而是做一个清楚、耐用、低维护的个人网站，支持长期创作。

## Working Rules

- 修改文件前先阅读已有项目文档。
- 保持小步修改，并解释重要修改的原因。
- 在真实内容或产品需求出现前，优先保持简单结构。
- 保留 Aiwei 的表达风格：真诚、清楚、克制，基于真实实践。
- 不编造个人经历、成果、项目或身份背书。
- 在网站实现阶段真正需要之前，不添加框架、依赖或构建工具。
- 重要的网站决策应记录在 `docs/decisions.md`。
- 项目上下文应记录在 `docs/overview.md`，不要只留在聊天中。

## Website Direction

本项目属于 Aiwei OS 的 `website system`。

个人网站应该让这些事情更容易：

- 分享适合公开的作品。
- 保存重要想法和项目记录。
- 连接文章、项目和工具。
- 帮助访问者理解 Aiwei 是谁、正在建设什么。

## Collaboration Style

在进行较大修改前，简要说明：

- 将修改什么
- 为什么需要修改
- 可能涉及哪些文件

完成后说明：

- 修改了什么
- 为什么这样修改
- 仍然存在的假设或风险
