# Studio 3D — Immersive Agency / Company Template

A premium, motion-rich website template built with **Next.js 16, React 19, Three.js (React Three Fiber), GSAP and Tailwind CSS**. Designed so you can change a **single file** and turn it into a site for *any* business.

> ภาษาไทยอยู่ด้านล่าง — scroll down for Thai instructions.

---

## ✨ Features

- 3D interactive particle hero (React Three Fiber)
- Scroll-driven animations & text reveal (GSAP ScrollTrigger)
- Buttery smooth scrolling (Lenis)
- Light / dark mode (next-themes)
- Fully responsive
- **One-file content & color editing** via `src/config/site.config.ts`
- SEO ready: metadata, Open Graph image, `sitemap.xml`, `robots.txt`
- Working contact form (plug in your email provider)
- Accessible: respects `prefers-reduced-motion`
- 100% TypeScript

---

## 🚀 Use it without cloning (recommended)

You do **not** need to be a developer. Two no-clone options:

### Option A — Deploy to Vercel (1 click)
1. Put this folder in a GitHub repo (drag-and-drop upload works on github.com).
2. Replace `YOUR_GITHUB_REPO_URL` below and click the button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

3. Vercel builds and gives you a live URL in ~1 minute. Edit `site.config.ts` on GitHub and Vercel redeploys automatically.

### Option B — Import on Vercel
Go to [vercel.com/new](https://vercel.com/new), import your repo, keep all defaults, click **Deploy**. No terminal needed.

---

## 🛠 Run locally (optional, for developers)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node.js 18.18+ (Node 20+ recommended).

---

## 🎨 Make it yours — edit ONE file

Open **`src/config/site.config.ts`**. Everything lives there:

| What you change | Where |
| --- | --- |
| Brand name & logo text | `brand` |
| Accent colors (recolors the whole site + 3D) | `theme.accent`, `theme.accentSecondary` |
| Menu links | `nav` |
| Headline, subtitle, buttons, stats | `hero` |
| Services, About, Work, Process, Testimonials | matching keys |
| Pricing tiers | `pricing.tiers` |
| Email, phone, socials | `contact` |
| Page title / description / keywords | `seo` |

Change a color hex or any text, save, and the whole site updates. That is how you turn this into a clinic, café, studio, startup — anything.

### Project images
Drop images in `public/` and reference them in `work.projects[].image` (e.g. `/work-1.jpg`). Leave `image` empty to use the built-in gradient.

---

## ✉️ Connecting the contact form

Out of the box the form validates and shows a success message (no email is sent). To receive messages, open `src/app/api/contact/route.ts` and either:
- Uncomment the **Resend** block and set `RESEND_API_KEY` + `CONTACT_TO_EMAIL` (see `.env.example`), or
- Point the `fetch` in `src/components/sections/Contact.tsx` at a [Formspree](https://formspree.io) form URL.

---

## 📁 Structure

```
src/
  app/                 # routes, layout, SEO (sitemap, robots, OG image), API
  components/
    layout/            # Navbar, Footer
    sections/          # Hero, Services, About, Work, Process, ...
    three/             # 3D particle field + canvas
    providers/         # theme, smooth scroll, color injection
    ui/                # Container, Button, Reveal, SectionHeading, Eyebrow
  config/
    site.config.ts     # ⭐ EDIT THIS
  hooks/
  lib/
```

---

## 🇹🇭 วิธีใช้ (ภาษาไทย)

**เว็บนี้แก้ไฟล์เดียวเปลี่ยนเป็นธุรกิจอะไรก็ได้** เปิดไฟล์ `src/config/site.config.ts` แล้วแก้:
- `brand` = ชื่อแบรนด์ / โลโก้
- `theme.accent`, `theme.accentSecondary` = สีหลัก (เปลี่ยนสีทั้งเว็บ + 3D)
- `hero`, `services`, `about`, `work`, `pricing`, `contact`, `seo` = ข้อความแต่ละส่วน

**ใช้งานโดยไม่ต้อง clone:**
1. อัปโหลดโฟลเดอร์นี้ขึ้น GitHub (ลากวางบนเว็บ github.com ได้เลย)
2. เข้า [vercel.com/new](https://vercel.com/new) เลือก repo กด Deploy รอประมาณ 1 นาที ได้เว็บสดทันที
3. แก้ `site.config.ts` บน GitHub แล้ว Vercel จะอัปเดตเว็บให้อัตโนมัติ

**รันในเครื่อง (ถ้าต้องการ):** `npm install` แล้ว `npm run dev`

**ฟอร์มติดต่อ:** ค่าเริ่มต้นจะเด้งข้อความสำเร็จเฉยๆ ถ้าจะรับอีเมลจริง ดูวิธีต่อ Resend/Formspree ในหัวข้อ *Connecting the contact form* ด้านบน

---

## 📄 License

Provided under the license you purchased on Gumroad. Do not resell or redistribute the source files.
