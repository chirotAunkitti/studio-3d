import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { about } = siteConfig;
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {about.heading}
            </h2>
          </Reveal>

          <Reveal className="flex flex-col justify-center gap-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal
          stagger={0.12}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
        >
          {about.stats.map((stat) => (
            <div key={stat.label} className="bg-background p-8">
              <div className="text-4xl font-semibold text-gradient">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
