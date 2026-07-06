import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Body, H1 } from "@/components/ui/typography";

export const metadata = {
  title: "关于 | 直一"
};

export default function AboutPage() {
  return (
    <Section className="py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <H1 className="text-4xl sm:text-5xl">直一</H1>
          <Body className="mt-6">上个时代的程序员，AI 时代的观察者。</Body>
          <Body className="mt-4">关注 AI 如何改变人的工作、创造、商业与生活方式。</Body>
        </div>
      </Container>
    </Section>
  );
}
