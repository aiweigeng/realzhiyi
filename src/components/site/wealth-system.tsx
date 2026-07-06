"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const wealthModules = [
  {
    id: "time",
    code: "01",
    title: "时间财富",
    signal: "有限性、反目标、启动序列",
    color: "#5e8c63",
    rgb: "94, 140, 99",
    position: { x: 50, y: 9 },
    summary:
      "时间不是日程表里的空格，而是注意力、优先级和生活秩序共同形成的系统容量。",
    details: [
      "核心觉察：时间有限，世事无常。接受这个前提后，重要的不是做更多事，而是减少不必要的扩散。",
      "有效机制：用反目标识别会把自己带偏的人、事、物；确认优先级后，把任务写具体、写进文档，再按单元逐个击破。",
      "正在形成的启动序列：早晨散步至少 30 分钟，不看手机；回家洗漱、吃早饭、倒水后进入阅读或工作。晚上洗漱后离开电脑和手机，转入 iPad 阅读和睡眠。"
    ],
    protocol: "把每一天从临时反应，调回有入口、有边界、有收束的执行单元。"
  },
  {
    id: "social",
    code: "02",
    title: "社会财富",
    signal: "连接、线下经验、公开表达",
    color: "#2c8990",
    rgb: "44, 137, 144",
    position: { x: 88, y: 36 },
    summary:
      "社会财富来自真实连接，也来自把想法清楚表达给更多人的能力。",
    details: [
      "原有基础：你已经重视线下关系，喜欢和朋友爬山、打羽毛球、徒步、在咖啡馆聊天，也会主动和有意思的人搭话。",
      "新的增长点：公众演讲不只是内容本身，还包括结构、节奏、手势和表达方式。学习最佳实践后，注意力从“讲什么”扩展到“如何让别人更容易接住”。",
      "系统意义：关系让生活有温度，表达让思想可以连接更远的人。两者合在一起，社会财富才不只是社交数量。"
    ],
    protocol: "把真实关系继续养厚，同时慢慢训练可公开表达的结构感。"
  },
  {
    id: "mental",
    code: "03",
    title: "心理财富",
    signal: "成长型思维、苏格拉底式提问",
    color: "#9272c8",
    rgb: "146, 114, 200",
    position: { x: 73, y: 86 },
    summary:
      "心理财富是面对问题时，仍然能提问、校正、练习，并重新开始建设的能力。",
    details: [
      "关键提醒：成长型思维曾经带来明显的快乐与收获，但在遇到事情时会被忘记。这说明它需要被做成习惯，而不是只停留在读书感悟里。",
      "实验结果：按照苏格拉底式提问一步步追问，最终找到了更适合自己的答案；再把成长型思维放进去，问题开始出现可执行路径。",
      "循环方式：面对人事物时多一些耐心、多一些思考、多一些练习。这个循环既服务当下选择，也会反过来校正最初的想法。"
    ],
    protocol: "把情绪中的问题，转译成可以被提问、拆解和练习的建设路径。"
  },
  {
    id: "physical",
    code: "04",
    title: "物质财富",
    signal: "运动、营养、恢复",
    color: "#d9784d",
    rgb: "217, 120, 77",
    position: { x: 27, y: 86 },
    summary:
      "身体不是背景资源，而是所有长期计划最底层的运行环境。",
    details: [
      "已经执行：每天散步半小时到一小时，早晨空腹测量体重；多数时间自己做饭，多吃新鲜蔬菜和未加工食物，吃早饭，刻意补水。",
      "恢复变化：晚上十一点洗漱上床，取消闹钟，尽量睡到自然醒。睡眠质量明显提升，也会通过饭后散步、晒太阳和延长户外时间给身体充电。",
      "下一步：把睡眠时间固定得更早、更稳定，增加可处理任务的时间；恢复到一定程度后，再准备启动 5AM Project。"
    ],
    protocol: "用稳定身体状态，为阅读、创作、执行和长期项目建立安全边际。"
  },
  {
    id: "financial",
    code: "05",
    title: "财务财富",
    signal: "收入、消费、长期投资",
    color: "#b7a441",
    rgb: "183, 164, 65",
    position: { x: 12, y: 36 },
    summary:
      "财务财富不是单独的账户数字，它和身体状态、任务管理、技能增长一起构成安全边际。",
    details: [
      "消费支柱：已经减少冲动消费，让支出更可靠地低于收入。这个变化带来了以前没有过的掌控感。",
      "收入支柱：受到“开支消减有效，但收入增长无限”的启发，开始利用已有技能培养新技能，尝试增加多元收入。",
      "长期投资：正在阅读投资相关书籍，并设定财务目标与开支管理。健康饮食、睡眠、放空、任务执行，都在共同支撑更长期的财务安全。"
    ],
    protocol: "先建立低波动的生活底盘，再让技能、收入和长期投资逐步复利。"
  }
];

export function WealthSystem() {
  const [activeId, setActiveId] = useState(wealthModules[0].id);
  const activeModule = wealthModules.find((module) => module.id === activeId) ?? wealthModules[0];
  const activeIndex = wealthModules.findIndex((module) => module.id === activeModule.id);
  const systemStyle = {
    "--active-color": activeModule.color,
    "--active-rgb": activeModule.rgb
  } as CSSProperties;

  return (
    <section
      aria-label="五种财富人生系统"
      className="mt-14 overflow-hidden rounded-lg bg-[#10120f] text-paper shadow-[0_30px_80px_rgba(32,32,29,0.16)]"
      style={systemStyle}
    >
      <div className="relative grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(var(--active-rgb),0.28),transparent_28%),radial-gradient(circle_at_76%_82%,rgba(247,245,238,0.1),transparent_26%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(247,245,238,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(247,245,238,0.5)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative min-h-[610px] p-5 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs uppercase text-paper/55">Life System Map</p>
            <p className="font-mono text-xs text-paper/45">
              {String(activeIndex + 1).padStart(2, "0")} / {String(wealthModules.length).padStart(2, "0")}
            </p>
          </div>

          <div className="relative mx-auto mt-8 aspect-square max-w-[560px]">
            <div className="absolute inset-[7%] rounded-full border border-paper/10" />
            <div className="absolute inset-[16%] rounded-full border border-paper/10" />
            <div className="absolute inset-[25%] rounded-full border border-paper/10" />
            <div className="absolute inset-[10%] animate-[system-orbit_24s_linear_infinite] rounded-full border border-dashed border-paper/15" />
            <div className="absolute inset-[20%] animate-[system-orbit_18s_linear_infinite_reverse] rounded-full border border-dashed border-paper/10" />
            <div className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 animate-[system-orbit_16s_linear_infinite] rounded-full bg-[conic-gradient(from_90deg,transparent,rgba(var(--active-rgb),0.34),transparent,rgba(247,245,238,0.12),transparent)] opacity-70 blur-sm" />

            <svg aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100">
              <polygon
                className="fill-none stroke-[rgba(247,245,238,0.18)]"
                points={wealthModules.map((module) => `${module.position.x},${module.position.y}`).join(" ")}
                strokeWidth="0.35"
              />
              {wealthModules.map((module) => (
                <line
                  className={cn(
                    "stroke-[rgba(247,245,238,0.16)] transition duration-500",
                    module.id === activeModule.id && "stroke-[var(--active-color)]"
                  )}
                  key={module.id}
                  strokeWidth={module.id === activeModule.id ? "0.7" : "0.25"}
                  x1="50"
                  x2={module.position.x}
                  y1="50"
                  y2={module.position.y}
                />
              ))}
            </svg>

            <button
              className="group absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-paper/15 bg-paper/[0.08] text-center shadow-[0_0_70px_rgba(var(--active-rgb),0.26)] backdrop-blur transition duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/80"
              onClick={() => setActiveId(wealthModules[(activeIndex + 1) % wealthModules.length].id)}
              type="button"
            >
              <span className="absolute inset-0 animate-[system-pulse_2.8s_ease-in-out_infinite] rounded-full border border-[var(--active-color)] opacity-55" />
              <span className="font-mono text-[10px] uppercase text-paper/45">Core</span>
              <span className="mt-1 text-base font-semibold leading-5 text-paper">人生系统</span>
              <span className="mt-2 h-1.5 w-12 rounded-full bg-[var(--active-color)] transition-colors" />
            </button>

            {wealthModules.map((module) => {
              const isActive = module.id === activeModule.id;
              const moduleStyle = {
                "--module-color": module.color,
                "--module-rgb": module.rgb,
                left: `${module.position.x}%`,
                top: `${module.position.y}%`
              } as CSSProperties;

              return (
                <button
                  aria-label={`查看${module.title}`}
                  aria-pressed={isActive}
                  className={cn(
                    "group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/80",
                    isActive ? "scale-110" : "hover:scale-105"
                  )}
                  key={module.id}
                  onClick={() => setActiveId(module.id)}
                  style={moduleStyle}
                  type="button"
                >
                  <span
                    className={cn(
                      "relative flex h-16 w-16 items-center justify-center rounded-full border bg-[#151811] font-mono text-sm font-semibold shadow-[0_0_36px_rgba(var(--module-rgb),0.24)] backdrop-blur transition duration-300",
                      isActive ? "border-[var(--module-color)] text-paper" : "border-paper/15 text-paper/65"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute inset-1 rounded-full bg-[var(--module-color)] transition duration-300",
                        isActive ? "animate-[system-pulse_2.6s_ease-in-out_infinite] opacity-25" : "opacity-10"
                      )}
                    />
                    <span className="relative">{module.code}</span>
                  </span>
                  <span
                    className={cn(
                      "max-w-24 rounded-full bg-[#10120f]/75 px-3 py-1 text-xs leading-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur transition",
                      isActive ? "text-paper" : "text-paper/58"
                    )}
                  >
                    {module.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative mt-4 grid grid-cols-5 gap-2">
            {wealthModules.map((module) => {
              const isActive = module.id === activeModule.id;

              return (
                <button
                  aria-label={`切换到${module.title}`}
                  aria-pressed={isActive}
                  className={cn(
                    "h-2 rounded-full bg-paper/12 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/80",
                    isActive && "shadow-[0_0_22px_rgba(var(--active-rgb),0.5)]"
                  )}
                  key={module.id}
                  onClick={() => setActiveId(module.id)}
                  style={{ backgroundColor: isActive ? module.color : undefined }}
                  type="button"
                />
              );
            })}
          </div>
        </div>

        <aside className="relative border-t border-paper/10 bg-[#f7f5ee]/[0.055] p-6 backdrop-blur sm:p-8 lg:border-l lg:border-t-0">
          <div className="absolute left-0 top-0 h-px w-full animate-[system-scan_3.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[var(--active-color)] to-transparent lg:h-full lg:w-px lg:bg-gradient-to-b" />

          <div className="relative animate-[detail-enter_420ms_ease-out_both]" key={activeModule.id}>
            <p className="font-mono text-xs uppercase text-paper/45">Active Node</p>
            <div className="mt-5 flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-sm text-paper/50">{activeModule.code}</p>
                <h3 className="mt-2 text-3xl font-semibold leading-[1.18] tracking-normal text-paper sm:text-4xl">
                  {activeModule.title}
                </h3>
              </div>
              <span className="mt-2 h-12 w-12 shrink-0 rounded-full border border-paper/15 bg-[var(--active-color)]/20 shadow-[0_0_34px_rgba(var(--active-rgb),0.34)]">
                <span className="block h-full w-full rounded-full bg-[var(--active-color)] opacity-35 blur-sm" />
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-paper/58">{activeModule.signal}</p>
            <p className="mt-7 text-lg leading-8 text-paper/82">{activeModule.summary}</p>

            <div className="mt-8 space-y-3">
              {activeModule.details.map((detail, index) => (
                <div
                  className="group relative overflow-hidden rounded-lg border border-paper/10 bg-paper/[0.055] p-4 transition duration-300 hover:border-paper/18 hover:bg-paper/[0.075]"
                  key={detail}
                  style={{ animation: `detail-enter 420ms ease-out ${index * 70}ms both` }}
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-[var(--active-color)] opacity-70" />
                  <p className="pl-2 text-sm leading-7 text-paper/76">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-paper/10 bg-paper/[0.075] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <p className="font-mono text-xs uppercase text-paper/42">Current Protocol</p>
              <p className="mt-3 text-base leading-8 text-paper/86">{activeModule.protocol}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
