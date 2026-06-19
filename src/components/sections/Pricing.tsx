import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { pricing } = siteConfig;
  return (
    <section id="pricing" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow={pricing.eyebrow}
          heading={pricing.heading}
          subheading={pricing.subheading}
          align="center"
        />

        <Reveal
          stagger={0.12}
          className="mt-14 grid items-start gap-6 lg:grid-cols-3"
        >
          {pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                tier.featured
                  ? "border-accent/60 bg-surface shadow-[0_20px_60px_-30px_var(--accent)]"
                  : "border-border bg-surface",
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-medium">{tier.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold">{tier.price}</span>
                {tier.period && (
                  <span className="mb-1 text-sm text-muted">{tier.period}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-muted">{tier.description}</p>

              <ul className="mt-6 flex flex-col gap-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 text-accent">✓</span>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={cn(
                  "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
                  tier.featured
                    ? "bg-accent text-white hover:-translate-y-0.5"
                    : "border border-border hover:border-accent/60 hover:bg-accent/10",
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
