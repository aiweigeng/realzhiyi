import { TypewriterText } from "@/components/site/typewriter-text";
import { WealthSystem } from "@/components/site/wealth-system";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Body, H1, H2, Label } from "@/components/ui/typography";

const heroText = "在技术、故事与生活之间，持续创造一些有用且美好的东西。";

export default function Home() {
  return (
    <>
      <Section className="flex min-h-[72svh] items-center py-28 sm:min-h-[78svh] sm:py-36">
        <Container>
          <div className="max-w-4xl">
            <H1 className="leading-[1.5]" style={{ lineHeight: 1.5 }}>
              <TypewriterText text={heroText} />
            </H1>
            <p className="mt-8 text-xl font-semibold leading-relaxed sm:text-2xl">
              <span className="box-decoration-clone bg-ink px-1 py-0.5 text-white [-webkit-box-decoration-break:clone]">
                上个时代的程序员，AI 时代的观察者。
              </span>
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pb-28 pt-8">
        <Container>
          <div className="max-w-3xl">
            <Label>来自《The 5 Types of Wealth》的生活实验</Label>
            <H2 className="mt-3">假如人生也有一套操作系统</H2>
            <Body className="mt-6">
              假如人生也有一套系统，那五种财富就不是五个分开的目标，而是五个彼此牵动的模块。时间决定你能把注意力投向哪里，关系决定你和世界如何交换能量，心理决定系统出问题时能不能自我修复，身体是所有运行的底层性能，财务则像一层缓冲区，让你在变化面前不至于立刻崩盘。它们最后指向的，并不是某种宏大的成功，而是一种更日常也更难得的状态：知道自己在过什么样的生活，也有能力一点点把它修正成更接近内心的样子。
            </Body>
          </div>

          <WealthSystem />
        </Container>
      </Section>
    </>
  );
}
