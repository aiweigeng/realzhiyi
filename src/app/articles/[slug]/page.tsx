import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Body, H1, Label } from "@/components/ui/typography";
import { articles } from "@/lib/content";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "文章 | 直一"
    };
  }

  return {
    title: `${article.title} | 直一`,
    description: article.summary
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <Section className="py-20 sm:py-24">
      <Container>
        <article className="mx-auto max-w-3xl">
          <Label>{article.date}</Label>
          <H1 className="mt-4 text-4xl sm:text-5xl">{article.title}</H1>
          <Body className="mt-6">{article.summary}</Body>

          <div className="mt-12 space-y-7 text-lg leading-9 text-ink">
            {article.body.map((block, index) => {
              const key = `article-block-${index}`;

              if (typeof block === "string") {
                return <p key={key}>{block}</p>;
              }

              if (block.type === "code") {
                return (
                  <pre
                    key={key}
                    className="overflow-x-auto rounded-lg bg-ink px-5 py-4 text-sm leading-7 text-paper"
                  >
                    <code>{block.text}</code>
                  </pre>
                );
              }

              if (block.type === "image") {
                return (
                  <figure key={key} className="py-2">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={block.width}
                      height={block.height}
                      className="h-auto w-full rounded-md"
                      priority={index === 0}
                    />
                    {block.caption ? (
                      <figcaption className="mt-3 text-sm leading-6 text-muted">{block.caption}</figcaption>
                    ) : null}
                  </figure>
                );
              }

              return (
                <h2 key={key} className="pt-6 text-2xl font-semibold leading-snug text-ink">
                  {block.text}
                </h2>
              );
            })}
          </div>

          <div className="mt-12">
            <Button href="/articles" variant="secondary">
              返回文章
            </Button>
          </div>
        </article>
      </Container>
    </Section>
  );
}
