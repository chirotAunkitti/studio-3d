import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const { testimonials } = siteConfig;
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          heading={testimonials.heading}
        />

        <Reveal stagger={0.12} className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-8"
            >
              <blockquote className="text-lg leading-relaxed">
                <span className="text-accent">&ldquo;</span>
                {t.quote}
                <span className="text-accent">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
                  }}
                >
                  {t.author.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium">{t.author}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
