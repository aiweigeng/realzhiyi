import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Body, H1, Label } from "@/components/ui/typography";
import { articles } from "@/lib/content";

export const metadata = {
  title: "文章 | 直一"
};

export default function ArticlesPage() {
  return (
    <Section className="py-20 sm:py-24">
      <Container>
        <div className="mb-12 max-w-3xl">
          <Label>文章记录</Label>
          <H1 className="mt-3 text-4xl sm:text-5xl">文章</H1>
          <Body className="mt-6">保存适合公开的思考、AI 实践、网站建设和长期创作记录。</Body>
        </div>

        <div className="space-y-10">
          {articles.map((article) => (
            <article key={article.slug} className="max-w-3xl">
              <Label>{article.date}</Label>
              <Link href={`/articles/${article.slug}`}>
                <h2 className="mt-3 text-2xl font-semibold leading-snug text-ink">{article.title}</h2>
              </Link>
              <p className="mt-4 text-base leading-7 text-muted">{article.summary}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
