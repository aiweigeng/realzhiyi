import Link from "next/link";

import { Container } from "@/components/ui/container";

const navigation = [
  { label: "首页", href: "/" },
  { label: "文章", href: "/articles" },
  { label: "作品", href: "/projects" },
  { label: "关于", href: "/about" }
];

export function Navbar() {
  return (
    <header className="bg-canvas/95">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link className="text-base font-semibold text-ink" href="/" aria-label="回到首页">
          Aiwei
        </Link>
        <nav aria-label="主导航" className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm text-muted">
          {navigation.map((item) => (
            <Link className="transition-colors duration-150 hover:text-ink" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
