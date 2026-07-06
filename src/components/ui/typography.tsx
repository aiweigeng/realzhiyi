import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function H1({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-2xl font-semibold leading-snug tracking-normal text-ink sm:text-3xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function Body({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-base leading-8 text-muted sm:text-lg", className)} {...props}>
      {children}
    </p>
  );
}

export function Label({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm font-medium leading-6 text-muted", className)} {...props}>
      {children}
    </p>
  );
}
