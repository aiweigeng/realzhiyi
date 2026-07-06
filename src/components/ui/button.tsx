import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "border-ink bg-ink text-paper hover:bg-transparent hover:text-ink",
  secondary: "border-line bg-transparent text-ink hover:border-ink"
};

export function Button({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md border px-5 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        variants[variant],
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
