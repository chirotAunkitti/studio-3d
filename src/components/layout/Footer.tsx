import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-semibold tracking-[0.25em]">
              {siteConfig.brand.logo}
            </div>
            <p className="mt-2 max-w-xs text-sm text-muted">
              {siteConfig.brand.tagline}
            </p>
          </div>

          <ul className="flex flex-wrap gap-6">
            {siteConfig.footer.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {siteConfig.brand.name}. {siteConfig.footer.note}
          </span>
          <span>{siteConfig.contact.location}</span>
        </div>
      </Container>
    </footer>
  );
}
