import { createElement, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return createElement(
    as,
    { className: cn("mx-auto w-full max-w-6xl px-6 md:px-8", className) },
    children,
  );
}
