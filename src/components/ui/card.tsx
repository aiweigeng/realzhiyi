import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "section";
};

export function Card({
  as: Component = "article",
  children,
  className,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-lg border border-line bg-paper p-6 shadow-soft transition-colors duration-150 hover:border-ink",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
