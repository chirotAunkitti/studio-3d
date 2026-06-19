import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  const { services } = siteConfig;
  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow={services.eyebrow}
          heading={services.heading}
          subheading={services.subheading}
        />

        <Reveal
          stagger={0.1}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/50"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-60"
                style={{ background: "var(--accent)" }}
              />
              <span className="text-2xl text-accent">{item.icon}</span>
              <h3 className="mt-5 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
