import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_8px_30px_-8px_var(--accent)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_var(--accent)]",
  ghost:
    "border border-border bg-surface text-foreground hover:border-accent/60 hover:bg-accent/10",
};

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
