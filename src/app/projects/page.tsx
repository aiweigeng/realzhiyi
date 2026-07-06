import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Body, H1, Label } from "@/components/ui/typography";
import { projects } from "@/lib/content";

export const metadata = {
  title: "作品 | 直一"
};

export default function ProjectsPage() {
  return (
    <Section className="py-20 sm:py-24">
      <Container>
        <div className="mb-12 max-w-3xl">
          <Label>作品记录</Label>
          <H1 className="mt-3 text-4xl sm:text-5xl">作品</H1>
          <Body className="mt-6">记录正在建设的系统、网站和 AI 编程实践。先保持少量、真实、可持续更新。</Body>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <article className="max-w-3xl" key={project.name}>
              <Label>{project.status}</Label>
              <h2 className="mt-3 text-2xl font-semibold leading-snug text-ink">{project.name}</h2>
              <p className="mt-4 text-base leading-7 text-muted">{project.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
