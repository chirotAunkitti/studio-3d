import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const gradients = [
  "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
  "linear-gradient(135deg, var(--accent-secondary), var(--accent))",
  "linear-gradient(160deg, var(--accent), #0b0d1a)",
  "linear-gradient(160deg, var(--accent-secondary), #0b0d1a)",
];

export function Work() {
  const { work } = siteConfig;
  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow={work.eyebrow}
          heading={work.heading}
          subheading={work.subheading}
        />

        <Reveal
          stagger={0.12}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {work.projects.map((project, i) => (
            <a
              key={project.title}
              href={project.href ?? "#"}
              className="group block overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                    style={{ background: gradients[i % gradients.length] }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted">{project.category}</p>
                </div>
                <span className="text-sm text-muted">{project.year}</span>
              </div>
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
