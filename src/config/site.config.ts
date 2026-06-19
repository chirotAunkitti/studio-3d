/**
 * ============================================================================
 *  site.config.ts  —  THE ONLY FILE MOST USERS NEED TO EDIT
 *  ไฟล์เดียวที่คุณต้องแก้เพื่อเปลี่ยนเว็บนี้เป็นธุรกิจของคุณ
 * ----------------------------------------------------------------------------
 *  Change the text, colors, links and images below and the whole site updates.
 *  แก้ข้อความ / สี / ลิงก์ / รูป ด้านล่าง แล้วทั้งเว็บจะอัปเดตตามทันที
 * ============================================================================
 */

export type NavLink = { label: string; href: string };

export type Service = {
  title: string;
  description: string;
  /** Any emoji or short label used as the icon glyph. */
  icon: string;
};

export type Stat = { value: string; label: string };

export type Project = {
  title: string;
  category: string;
  year: string;
  /** Public image path or remote URL. Leave empty to show a generated gradient. */
  image?: string;
  href?: string;
};

export type ProcessStep = { step: string; title: string; description: string };

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
};

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export type SiteConfig = {
  brand: {
    name: string;
    /** Short word shown in the logo. */
    logo: string;
    tagline: string;
  };
  /** Brand colors. Hex values. These drive the whole color system. */
  theme: {
    accent: string;
    accentSecondary: string;
    /** Background of the 3D particle field. */
    background: string;
  };
  nav: NavLink[];
  hero: {
    eyebrow: string;
    /** Each string is rendered on its own line. */
    titleLines: string[];
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: Stat[];
  };
  services: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: Service[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    stats: Stat[];
  };
  work: {
    eyebrow: string;
    heading: string;
    subheading: string;
    projects: Project[];
  };
  process: {
    eyebrow: string;
    heading: string;
    steps: ProcessStep[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    items: Testimonial[];
  };
  pricing: {
    eyebrow: string;
    heading: string;
    subheading: string;
    tiers: PricingTier[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    email: string;
    phone?: string;
    location?: string;
    socials: NavLink[];
  };
  footer: {
    note: string;
    links: NavLink[];
  };
  seo: {
    title: string;
    description: string;
    /** Absolute URL of the deployed site (used for OG tags + sitemap). */
    url: string;
    keywords: string[];
  };
};

export const siteConfig: SiteConfig = {
  brand: {
    name: "Nebula Studio",
    logo: "NEBULA",
    tagline: "Immersive digital experiences",
  },

  theme: {
    accent: "#7c5cff",
    accentSecondary: "#22d3ee",
    background: "#05060f",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Digital Studio",
    titleLines: ["We craft", "immersive", "experiences"],
    subtitle:
      "A creative studio building motion-rich, three-dimensional websites that make brands impossible to forget.",
    primaryCta: { label: "Start a project", href: "#contact" },
    secondaryCta: { label: "View our work", href: "#work" },
    stats: [
      { value: "120+", label: "Projects shipped" },
      { value: "40+", label: "Happy clients" },
      { value: "9", label: "Design awards" },
    ],
  },

  services: {
    eyebrow: "What we do",
    heading: "Services built for impact",
    subheading:
      "From the first sketch to launch day, we design and build digital products that move people.",
    items: [
      {
        title: "Web Design",
        description:
          "Bold, conversion-focused interfaces tailored to your brand and your audience.",
        icon: "◆",
      },
      {
        title: "3D & Motion",
        description:
          "Real-time 3D, particles and scroll-driven animation that turn visitors into fans.",
        icon: "✦",
      },
      {
        title: "Development",
        description:
          "Fast, accessible, SEO-ready builds on a modern Next.js foundation.",
        icon: "❖",
      },
      {
        title: "Branding",
        description:
          "Identity systems, art direction and guidelines that scale with you.",
        icon: "✺",
      },
    ],
  },

  about: {
    eyebrow: "Who we are",
    heading: "A small team obsessed with the details",
    paragraphs: [
      "We are a multidisciplinary studio of designers and engineers who believe the web should feel alive.",
      "Every project starts with strategy and ends with a product that is as performant as it is beautiful — measured, tested and built to last.",
    ],
    stats: [
      { value: "2016", label: "Founded" },
      { value: "12", label: "Team members" },
      { value: "98%", label: "Client retention" },
    ],
  },

  work: {
    eyebrow: "Selected work",
    heading: "Projects we are proud of",
    subheading: "A glimpse at the brands and products we have helped shape.",
    projects: [
      { title: "Aurora Finance", category: "Web · Brand", year: "2025" },
      { title: "Lumen Labs", category: "3D · Product", year: "2024" },
      { title: "Vertex Mobility", category: "Web · Motion", year: "2024" },
      { title: "Halo Wellness", category: "Brand · Web", year: "2023" },
    ],
  },

  process: {
    eyebrow: "How we work",
    heading: "A clear path from idea to launch",
    steps: [
      {
        step: "01",
        title: "Discover",
        description:
          "We learn your goals, audience and constraints, then define what success looks like.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "We explore directions, prototype interactions and refine until it feels right.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "We engineer a fast, accessible product with motion baked in from day one.",
      },
      {
        step: "04",
        title: "Launch",
        description:
          "We ship, measure and iterate — making sure your investment keeps paying off.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Kind words",
    heading: "Trusted by ambitious teams",
    items: [
      {
        quote:
          "They turned our vision into a site that genuinely stops people in their tracks. Engagement doubled in a month.",
        author: "Sarah Chen",
        role: "CMO, Aurora Finance",
      },
      {
        quote:
          "The most collaborative studio we have worked with. Pixel-perfect, on time, and a joy throughout.",
        author: "Marco Rossi",
        role: "Founder, Lumen Labs",
      },
      {
        quote:
          "Our new site finally matches the quality of our product. Worth every penny.",
        author: "Aisha Khan",
        role: "Head of Product, Vertex",
      },
    ],
  },

  pricing: {
    eyebrow: "Engagements",
    heading: "Simple, transparent pricing",
    subheading: "Pick the level of partnership that fits where you are today.",
    tiers: [
      {
        name: "Launch",
        price: "$4,900",
        period: "/ project",
        description: "A polished one-page site to get your brand live, fast.",
        features: [
          "Single-page design",
          "3D hero section",
          "Responsive + SEO ready",
          "2 rounds of revisions",
          "Launch on Vercel",
        ],
        cta: "Get started",
        href: "#contact",
      },
      {
        name: "Studio",
        price: "$12,000",
        period: "/ project",
        description: "A full multi-page experience for growing brands.",
        features: [
          "Up to 6 custom pages",
          "Advanced 3D & motion",
          "CMS integration",
          "Unlimited revisions",
          "Performance audit",
          "Priority support",
        ],
        cta: "Book a call",
        href: "#contact",
        featured: true,
      },
      {
        name: "Partner",
        price: "Custom",
        description: "An ongoing retainer for teams that ship continuously.",
        features: [
          "Everything in Studio",
          "Dedicated team",
          "Monthly roadmap",
          "A/B testing",
          "SLA & analytics",
        ],
        cta: "Talk to us",
        href: "#contact",
      },
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    heading: "Let us build something unforgettable",
    subheading:
      "Tell us about your project and we will get back to you within one business day.",
    email: "hello@nebula.studio",
    phone: "+1 (555) 123-4567",
    location: "Remote · Worldwide",
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Dribbble", href: "https://dribbble.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "X / Twitter", href: "https://x.com" },
    ],
  },

  footer: {
    note: "Designed & built with care.",
    links: [
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
  },

  seo: {
    title: "Nebula Studio — Immersive digital experiences",
    description:
      "Nebula Studio is a creative studio building motion-rich, three-dimensional websites that make brands impossible to forget.",
    url: "https://your-domain.com",
    keywords: [
      "creative studio",
      "3d website",
      "web design",
      "motion design",
      "next.js agency",
    ],
  },
};

export default siteConfig;
