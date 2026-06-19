"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-line span", {
        yPercent: 120,
        duration: 1,
        stagger: 0.12,
      })
        .from(
          ".hero-eyebrow",
          { opacity: 0, y: 16, duration: 0.6 },
          0.1,
        )
        .from(
          ".hero-sub",
          { opacity: 0, y: 20, duration: 0.7 },
          "-=0.5",
        )
        .from(
          ".hero-cta",
          { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 },
          "-=0.4",
        )
        .from(
          ".hero-stat",
          { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 },
          "-=0.4",
        );
    }, rootRef);
    return () => ctx.revert();
  }, [reduced]);

  const { hero } = siteConfig;

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* 3D / gradient background */}
      <div className="absolute inset-0 -z-10">
        {!reduced && <HeroCanvas />}
        <div className="absolute inset-0 bg-grid opacity-[0.35]" />
        <div
          className="absolute left-1/2 top-1/3 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
          style={{
            background: `radial-gradient(circle, var(--accent), transparent 60%)`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          <div className="hero-eyebrow">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            {hero.titleLines.map((line, i) => (
              <span
                key={i}
                className="hero-line block overflow-hidden pb-1"
              >
                <span className="inline-block">
                  {i === hero.titleLines.length - 1 ? (
                    <span className="text-gradient">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-sub mt-8 max-w-xl text-lg text-muted">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button className="hero-cta" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Button>
            <Button
              className="hero-cta"
              variant="ghost"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <dt className="text-3xl font-semibold md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted">
        Scroll
      </div>
    </section>
  );
}
