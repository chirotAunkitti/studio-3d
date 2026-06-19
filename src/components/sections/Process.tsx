import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  const { process } = siteConfig;
  return (
    <section id="process" className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={process.eyebrow} heading={process.heading} />

        <Reveal stagger={0.12} className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step) => (
            <div key={step.step} className="bg-background p-8">
              <span className="text-sm font-mono text-accent">{step.step}</span>
              <h3 className="mt-4 text-xl font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
