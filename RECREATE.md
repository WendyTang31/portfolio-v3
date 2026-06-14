# RECREATE.md — Full technical blueprint

> Use this file + [`PROJECTS.md`](./PROJECTS.md) to rebuild or hand off this portfolio to any AI or developer.  
> **RECREATE.md** = how it is built. **PROJECTS.md** = what it says.

Last updated: June 2026

---

## Quick start for another AI

Copy-paste this prompt:

```
Rebuild the portfolio site exactly as specified in RECREATE.md and PROJECTS.md.

Stack: React 19 + Vite 6 + TypeScript + Tailwind 4 + Motion + React Router + Lucide.
Folder: Portfolio-site 2 (or equivalent).
publicDir: "Public" (capital P) in vite.config.ts.

Pages: / (home), /contact, /projects/birdbot, /#work anchor.
Style: monochrome Neo Museum editorial — #fcfcfc, #111, #0a0a0a. No purple.

Hero: top nav bar, large headline, skills row 01–04, bottom-right CTA. NO narrative spine. NO floating overlap image in dark section.

Only Birdbot is live (isLive: true). Other works use PlaceholderImage when heroImage is null.
Match animation timings in RECREATE.md §6.
Import assets from Public/ paths in §7.
```

---

## 1. Project snapshot

| Item | Value |
|------|-------|
| Name | portfolio-site-v3 |
| Owner | Fangzhuo (Wendy) Tang |
| Style reference | Neo Museum (MotionSites) — monochrome editorial |
| Notion spec | [v3 landing page june 10](https://app.notion.com/p/v3-landing-page-june-10-37b1bd9ef6c980118b3cfada6370ba08) |

### Dependencies (from package.json)

| Package | Version |
|---------|---------|
| react / react-dom | ^19.0.0 |
| vite | ^6.2.3 |
| @vitejs/plugin-react | ^5.0.4 |
| tailwindcss | ^4.1.14 |
| @tailwindcss/vite | ^4.1.14 |
| motion | ^12.23.24 |
| lucide-react | ^0.546.0 |
| react-router-dom | ^7.6.2 |
| typescript | ~5.8.2 |

### Scripts

```json
"dev": "vite",
"build": "tsc --noEmit && vite build",
"preview": "vite preview"
```

### vite.config.ts

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: "Public",  // capital P — not default "public"
});
```

---

## 2. Folder structure

```text
Portfolio-site 2/
├── README.md              ← setup + deploy
├── PROJECTS.md            ← content plan + copy
├── RECREATE.md            ← this file
├── Public/                ← static assets (Vite publicDir)
│   ├── favicon.svg
│   ├── Work landing page 1/
│   │   └── hero video.mp4
│   └── projects/
│       └── birdbot/       ← upload images here
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.tsx
    ├── App.tsx            ← router + hash scroll
    ├── index.css          ← fonts + design tokens
    ├── vite-env.d.ts
    ├── data/
    │   ├── works.ts       ← SITE, works[], HERO_VIDEO
    │   └── birdbot.ts     ← case study copy
    ├── pages/
    │   ├── HomePage.tsx
    │   ├── ContactPage.tsx
    │   └── BirdbotCaseStudy.tsx
    └── components/
        ├── Header.tsx
        ├── Footer.tsx
        ├── HeroSection.tsx
        ├── WorkGallerySection.tsx
        ├── DarkFeatureSection.tsx
        ├── ProjectImage.tsx
        └── PlaceholderImage.tsx
```

---

## 3. Routes and pages

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `HomePage` | Hero + Work gallery + Dark feature + Footer |
| `/#work` | scroll anchor | Work gallery section (`id="work"`) |
| `/contact` | `ContactPage` | Email + LinkedIn CTAs |
| `/projects/birdbot` | `BirdbotCaseStudy` | Full Birdbot case study |

`App.tsx` includes `ScrollToHash` for `/#work` navigation from Header.

### Home page section order

1. **HeroSection** — full viewport, video background
2. **WorkGallerySection** — 5 project cards, Birdbot featured (2-col span)
3. **DarkFeatureSection** — black band, chapter carousel
4. **Footer** — copyright + LinkedIn

---

## 4. Design tokens

### Colors (strictly monochrome)

| Token | Hex | Use |
|-------|-----|-----|
| Background | `#fcfcfc` | Page base |
| Text | `#111` | Headings, body |
| Button / CTA | `#1a1a1a` | View Work, Birdbot accent |
| Dark section | `#0a0a0a` | Section 3 |
| Gray scale | Tailwind gray-300–800 | Labels, borders |

No purple or indigo.

### Fonts

- **Inter** (300, 400, 500, 600) — sans, headings, body
- **JetBrains Mono** (400, 500) — nav, labels, section numbers

### Custom utility (index.css)

```css
.text-hero-display {
  font-size: clamp(3rem, 9vw, 6.5rem);
  line-height: 1;
  letter-spacing: -0.03em;
}
```

### Selection

`::selection` → black background, white text.

---

## 5. Component map

| File | Renders |
|------|---------|
| `Header.tsx` | Top bar: small `SITE.name` left, Home/Work/Contact right, mobile hamburger |
| `HeroSection.tsx` | Video bg, headline, description, skills 01–04, bottom-right CTA + scroll hint |
| `WorkGallerySection.tsx` | `[ 02 ] Selected Work`, heading, filter pills, 5-card grid |
| `DarkFeatureSection.tsx` | "Curated work & discovery", left image carousel, right chapter list |
| `Footer.tsx` | Copyright + LinkedIn button |
| `ContactPage.tsx` | Get in touch, mailto + LinkedIn |
| `BirdbotCaseStudy.tsx` | Meta row, sections from birdbot.ts, process images |
| `ProjectImage.tsx` | Image with fallback to PlaceholderImage on error |
| `PlaceholderImage.tsx` | Dashed border box with upload label |

---

## 6. Animation spec

### Shared variant

```typescript
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};
```

### HeroSection

| Element | Timing |
|---------|--------|
| Header | fade in, 0.6s |
| Hero video | `showVideo` after **1200ms** delay; opacity 0 → 0.35 over 0.8s |
| Headline + description | staggerChildren 0.12s, delayChildren 0.2s |
| Skills row | whileInView, stagger 0.08s |
| CTA blurb + button | delayChildren 0.6s |
| Scroll hint | delay 1.2s |

### WorkGallerySection

- Section label, heading: `whileInView`, once, margin -80px / -100px
- Cards: stagger 0.08s per index

### DarkFeatureSection

| Element | Timing |
|---------|--------|
| Chapter auto-cycle | `setInterval` **2500ms**, wraps 0–4 |
| Image transition | AnimatePresence mode="wait", scale 0.96→1, 0.5s |
| Heading | whileInView, y 30→0 |

### CTA button hover

- Slide white panel: `duration-700`, `cubic-bezier(0.16, 1, 0.3, 1)`
- Button lift: `hover:-translate-y-px`, shadow offset

### 6–7 second scroll goal

Hero compact + gallery `min-h-[50vh]` + fast dark cycle = full pass in ~6–7s.

---

## 7. Asset import guide

All files go in **`Public/`** (capital P). URLs in code start with `/`.

### Current files on disk

| Path | Used by |
|------|---------|
| `Public/Work landing page 1/hero video.mp4` | `HERO_VIDEO` in works.ts → HeroSection video |
| `Public/favicon.svg` | index.html |
| `Public/projects/birdbot/.gitkeep` | placeholder folder |

### Expected uploads (you add these)

| Path | Used by |
|------|---------|
| `Public/projects/birdbot/hero-birdbot-assembly.webp` | Work card, Birdbot case study hero |
| `Public/projects/birdbot/01.png` | Dark section gallery cycle |
| `Public/projects/birdbot/02.png` | Dark section gallery cycle |
| `Public/projects/birdbot/03.png` | Dark section gallery cycle |
| `Public/projects/birdbot/01-research-emu-reference.webp` | Case study process |
| `Public/projects/birdbot/02-research-ijrr-reference.webp` | Case study process |
| `Public/projects/birdbot/03-cad-leg-assembly.webp` | Case study process |
| `Public/projects/birdbot/04-mechanism-knee-pulley-tendon.webp` | Case study process |
| `Public/projects/birdbot/05-fabrication-mid-assembly.webp` | Case study process |
| `Public/projects/birdbot/06-fabrication-laser-cut-legs.webp` | Case study process |
| `Public/projects/birdbot/07-electronics-layout.webp` | Case study process |
| `Public/projects/birdbot/08-iteration-feet-comparison.webp` | Case study process |
| `Public/projects/birdbot/10-demo-motion.webp` | Case study demo (optional) |

### Migrating assets to another project

1. Copy entire `Public/` folder into new project root
2. Keep `publicDir: "Public"` in vite.config OR rename to `public/` and update paths
3. `ProjectImage` shows PlaceholderImage when file missing — site still runs

---

## 8. Content data shapes

### SITE (works.ts) — edit for hero copy

```typescript
export const SITE = {
  name: "FANGZHUO TANG",
  heroHeadline: "NATURE . DESIGN .TECHNOLOGY",
  heroDescription: "Design embodied intelligence that feels alive...",
  ctaBlurb: "Industrial designer building robots...",
  skills: [
    { num: "01", label: "Robotics", detail: "Legged systems & mechatronics" },
    { num: "02", label: "Fabrication", detail: "Print, laser cut, assembly" },
    { num: "03", label: "Mechanism", detail: "Tendon-driven & compliant structures" },
    { num: "04", label: "Prototyping", detail: "Physical builds at real scale" },
  ],
  linkedin: "https://linkedin.com/in/wendyid",
  email: "ftang@risd.edu",
};
```

### works[] — 5 projects, only birdbot isLive

| Slot | slug | isLive | href |
|------|------|--------|------|
| 1 | birdbot | true | /projects/birdbot |
| 2 | rover | false | null |
| 3 | 3d-printer | false | null |
| 4 | ai-camera | false | null |
| 5 | taxidermy-club | false | null |

Birdbot `heroImage`: `/projects/birdbot/hero-birdbot-assembly.webp`  
Birdbot `galleryImages`: `01.png`, `02.png`, `03.png`

### birdbot.ts

Exports: `birdbotMeta`, `birdbotPitch`, `birdbotSections[]`, `birdbotProcess[]`, `birdbotMechanisms[]`  
Full copy in file — mirror PROJECTS.md §6.

---

## 9. Build and run (Windows)

### PowerShell script policy fix

If `npm run dev` fails with *"running scripts is disabled"*:

```powershell
npm.cmd run dev
```

Or once per user:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### Commands

```powershell
Set-Location -LiteralPath "c:\Users\FangzhuoTang\Desktop\Portfolio-site 2"
npm.cmd install
npm.cmd run dev      # http://localhost:5173
npm.cmd run build    # output: dist/
npm.cmd run preview  # preview production build
```

---

## 10. Deploy with new custom domain

### Flow

```
Local folder → GitHub → Vercel → your domain (e.g. fangzhuotang.com)
```

### Steps

1. `npm.cmd run build` — must pass
2. Create GitHub repo (e.g. `portfolio-v3`), push code
3. [vercel.com](https://vercel.com) → Import repo
4. Build: `npm run build` | Output: `dist`
5. Buy domain at registrar (Namecheap, Cloudflare, etc.)
6. Vercel → Settings → Domains → Add domain → copy DNS records to registrar
7. Wait for DNS (10 min – 48 hr). HTTPS is automatic.

Every `git push` redeploys the live site.

**Cost:** Vercel free tier for portfolios; domain ~$10–15/year.

---

## 11. Continue working without this chat

| Survives chat end? | Item |
|--------------------|------|
| Yes | All code in `Portfolio-site 2/` |
| Yes | README, PROJECTS, RECREATE |
| Yes | Live site after deploy |
| Maybe | This Cursor chat history |

**New chat prompt:** *"Read RECREATE.md, PROJECTS.md, and README.md. Continue portfolio v3."*

**Backup habit:** `git commit` after each good change.

**Cursor usage:** Settings → Account / Usage (plan-dependent).

---

## 12. Changelog (layout decisions)

| Date | Change |
|------|--------|
| Jun 2026 | Initial v3 Vite build — Neo Museum style |
| Jun 2026 | Hero revision: top nav, smaller name, skills row, bottom-right CTA |
| Jun 2026 | Removed Nature/Design/Technology narrative spine |
| Jun 2026 | Enlarged headline (`text-hero-display` clamp 3rem–6.5rem) |
| Jun 2026 | Removed floating Birdbot overlap placeholder in DarkFeatureSection |

### Intentionally NOT in v1

- SandTransitionImage dissolve effect
- Floating pterodactyl-style overlap (removed — showed empty frame without image)
- `/about` page
- Live case studies beyond Birdbot

---

## 13. Related docs

| File | Role |
|------|------|
| [README.md](./README.md) | Setup, run, deploy, troubleshoot |
| [PROJECTS.md](./PROJECTS.md) | Content, site map, Birdbot copy, asset checklist |
