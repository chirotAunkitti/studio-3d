"use client";

import {
  createElement,
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Vertical travel distance in px. */
  y?: number;
  delay?: number;
  /** When set, animates direct children with this stagger (seconds). */
  stagger?: number;
};

/**
 * Scroll-triggered fade-up reveal powered by GSAP ScrollTrigger.
 * Falls back to fully visible content when the user prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  as,
  y = 28,
  delay = 0,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const targets =
      stagger != null ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.9,
        ease: "power3.out",
        delay,
        stagger: stagger ?? 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, delay, stagger]);

  return createElement(
    as ?? "div",
    { ref, className: cn(className) },
    children,
  );
}
