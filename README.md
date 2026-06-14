# Fangzhuo (Wendy) Tang — Portfolio Site v3

A fast, editorial landing page for your design work. Inspired by the **Neo Museum** reference (monochrome, motion-driven, museum-catalog feel) — adapted for an industrial designer portfolio.

**All copy, project order, and page structure live in [`PROJECTS.md`](./PROJECTS.md).**  
**Full technical blueprint (for AI handoff or rebuild): [`RECREATE.md`](./RECREATE.md).**  
This file covers how to run and build the site.

---

## What you are building

| Piece | What it does |
|-------|--------------|
| **Landing page** (`/`) | One scroll: hero video → work gallery → dark feature band. A visitor can skim everything in **6–7 seconds**. |
| **Birdbot case study** (`/projects/birdbot`) | Full editorial project page. Only live project in v1. |
| **Contact** (`/contact`) | Simple contact page (placeholder OK for now). |
| **Header** | Home · Work · Contact |
| **Footer** | LinkedIn button |

v1 ships with **Birdbot only**. Four other works appear as placeholder cards on the home page — you fill them in later.

---

## Stack

| Tool | Role |
|------|------|
| React 19 + Vite 6 | App framework and dev server |
| TypeScript | Safer code as the site grows |
| Tailwind CSS 4 | Styling |
| Motion (Framer Motion) | Entrance animations, scroll reveals, chapter transitions |
| Lucide React | Icons (arrows, menu, social) |
| React Router | Routes between home, contact, and Birdbot |

**Not** Next.js — this project uses Vite for a lighter, animation-focused single-page feel.

---

## First-time setup

You need **Node.js LTS** installed: https://nodejs.org/

### 1. Scaffold the project (first time only)

When you are ready to build, run this in the `Portfolio-site 2` folder:

```bash
npm create vite@latest . -- --template react-ts
npm install motion lucide-react react-router-dom
npm install -D tailwindcss @tailwindcss/vite
```

Then configure Tailwind in `vite.config.ts` and add fonts in `src/index.css` (see Design tokens below).

### 2. Fix the public folder

Vite expects a lowercase `public/` folder. You currently have `Public/` (capital P).

**Option A (recommended):** Rename `Public` → `public` before scaffolding.

**Option B:** In `vite.config.ts`, set `publicDir: 'Public'`.

### 3. Move the hero video

Copy or move:

```
Public/Work landing page 1/hero video.mp4  →  public/hero-video.mp4
```

Keep `public/projects/birdbot/` as-is (images are already there).

### 4. Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open **http://localhost:5173**

### Windows troubleshooting (PowerShell)

If you see *"running scripts is disabled"* when running `npm run dev`, use:

```powershell
npm.cmd run dev
```

Or fix permanently (once per user):

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

See [`RECREATE.md`](./RECREATE.md) §9 for more detail.

---

## Target folder structure

After scaffold, the project should look like this:

```text
Portfolio-site 2/
├── README.md                 ← you are here (commands + setup)
├── PROJECTS.md               ← all copy and content structure
├── public/
│   ├── hero-video.mp4
│   └── projects/birdbot/
│       ├── hero-birdbot-assembly.webp
│       ├── 01.png
│       ├── 02.png
│       └── 03.png
└── src/
    ├── App.tsx               ← landing page (3 scroll sections)
    ├── main.tsx
    ├── index.css             ← fonts + Tailwind theme
    ├── data/
    │   └── works.ts          ← 5 projects; only birdbot isLive: true
    ├── pages/
    │   ├── BirdbotCaseStudy.tsx
    │   └── Contact.tsx
    └── components/
        ├── Header.tsx
        ├── Footer.tsx
        ├── HeroSection.tsx
        ├── WorkGallerySection.tsx
        ├── DarkFeatureSection.tsx
        ├── ProjectImage.tsx
        └── PlaceholderImage.tsx
```

Sync `src/data/works.ts` from the work slots in `PROJECTS.md` §3.

---

## Design tokens

Pulled from your [Notion v3 spec](https://app.notion.com/p/v3-landing-page-june-10-37b1bd9ef6c980118b3cfada6370ba08).

### Colors

| Token | Hex | Use |
|-------|-----|-----|
| Background | `#fcfcfc` | Page base |
| Text | `#111` | Headings, body |
| Button / accent | `#1a1a1a` | CTAs, Birdbot theme |
| Dark section | `#0a0a0a` | Section 3 feature band |

Strictly monochrome — no purple or indigo.

### Fonts (Google Fonts)

- **Sans:** Inter (300, 400, 500, 600) — headings and body
- **Mono:** JetBrains Mono (400, 500) — labels, nav, section numbers

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}
```

### Motion timing (keep the page fast)

| Beat | Target | Notes |
|------|--------|-------|
| Hero wordmark entrance | ~1.2 s | Staggered letter blocks |
| Hero video fade-in | +0.5 s after 1.2 s delay | Shorter than Neo Museum's 2.8 s |
| Work gallery section | ~2 s scroll | Use `min-h-[50vh]`, not full screen |
| Dark band auto-cycle | ~2.5 s | 3–5 chapter previews |
| Footer | ~0.5 s | |

**Total skim: ~6–7 seconds.** Visitors can linger; default motion should not feel slow.

### Reusable animation variants

```typescript
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const letterBlock = {
  initial: { y: 120, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};
```

---

## Assets — what is ready

| Asset | Path | Status |
|-------|------|--------|
| Hero video | `public/hero-video.mp4` | Ready — move from `Public/Work landing page 1/` |
| Birdbot hero image | `public/projects/birdbot/hero-birdbot-assembly.webp` | Ready |
| Birdbot gallery | `01.png`, `02.png`, `03.png` | Ready |
| Placeholder thumbs (other works) | `public/projects/[slug]/` | Not yet — use gray placeholder boxes in code |

Full asset checklist: `PROJECTS.md` §8.

---

## Editing content

1. **Copy and structure** → edit `PROJECTS.md`
2. **Code data** → mirror changes in `src/data/works.ts`
3. **Birdbot case study** → long-form copy is in `PROJECTS.md` §4; implement in `BirdbotCaseStudy.tsx`

Use `[FILL IN]` markers in `PROJECTS.md` as your to-do list for placeholder text.

---

## Deploy (new custom domain)

When the site looks right locally:

1. Run `npm.cmd run build` — must succeed
2. Push the folder to a **GitHub** repository (e.g. `portfolio-v3`)
3. Sign up at [Vercel](https://vercel.com) → **Add New Project** → import your repo
4. Vercel settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy — you get a free URL like `portfolio-v3.vercel.app`
6. **Buy a new domain** (Namecheap, Cloudflare, etc.) — e.g. `fangzhuotang.com`
7. Vercel → Project → **Settings → Domains → Add** your domain
8. Copy DNS records from Vercel into your registrar; wait 10 min–48 hr
9. HTTPS is automatic. Every `git push` updates the live site.

**Cost:** Vercel free tier for personal portfolios; domain ~$10–15/year.

Full step-by-step: [`RECREATE.md`](./RECREATE.md) §10.

---

## Continue working in a new chat

Your code lives in this folder — not in any single Cursor chat.

1. Open `Portfolio-site 2` in Cursor
2. Start a new chat: *"Read RECREATE.md and PROJECTS.md. Continue portfolio v3."*
3. Commit to Git after each good change

Handoff doc: [`RECREATE.md`](./RECREATE.md)

---

## Links

- Portfolio (current): https://wendytangportfolio.com/
- LinkedIn: https://linkedin.com/in/wendyid
- Email: ftang@risd.edu
- Notion spec: [v3 landing page june 10](https://app.notion.com/p/v3-landing-page-june-10-37b1bd9ef6c980118b3cfada6370ba08)

---

## Doc map

| File | Purpose |
|------|---------|
| `README.md` | Run, troubleshoot, deploy |
| `PROJECTS.md` | Copy, content plan, asset checklist |
| `RECREATE.md` | Full rebuild spec for any AI — stack, animations, assets, routes |
