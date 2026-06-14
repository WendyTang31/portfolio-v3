# PROJECTS.md — Portfolio content plan (v3)

> Last updated: 6/10/2026  
> Portfolio folder: `Desktop/Portfolio-site 2/`  
> Style reference: Neo Museum (MotionSites) — [Notion spec](https://app.notion.com/p/v3-landing-page-june-10-37b1bd9ef6c980118b3cfada6370ba08)  
> Setup commands: see [`README.md`](./README.md)

**Media rule:** All images and video live inside this project folder only. You upload them yourself — nothing is pulled from other Desktop folders.

---

## Media on disk right now

Checked against `Portfolio-site 2/` only:

| File | Current location | Target location (after scaffold) | Status |
|------|------------------|--------------------------------|--------|
| Hero video | `Public/Work landing page 1/hero video.mp4` | `public/hero-video.mp4` | **On disk** — move when scaffolding |
| `README.md` | project root | — | On disk |
| `PROJECTS.md` | project root | — | On disk |
| Birdbot images | — | `public/projects/birdbot/` | **Not uploaded yet** |
| Other project images | — | `public/projects/[slug]/` | **Not uploaded yet** |
| Vite / `src/` code | — | `src/` | **Not started yet** |

---

## Media folder structure (you upload here)

Create this inside `Portfolio-site 2/` as you gather files. Use lowercase `public/` once the Vite project is scaffolded (rename `Public` → `public` first).

```text
Portfolio-site 2/
└── public/
    ├── hero-video.mp4                          ← landing background (move from current path)
    └── projects/
        ├── birdbot/
        │   ├── hero-birdbot-assembly.webp    ← home card + case study hero
        │   ├── 01.png                        ← dark section gallery (or .webp)
        │   ├── 02.png
        │   ├── 03.png
        │   ├── 01-research-emu-reference.webp
        │   ├── 02-research-ijrr-reference.webp
        │   ├── 03-cad-leg-assembly.webp
        │   ├── 04-mechanism-knee-pulley-tendon.webp
        │   ├── 05-fabrication-mid-assembly.webp
        │   ├── 06-fabrication-laser-cut-legs.webp
        │   ├── 07-electronics-layout.webp
        │   ├── 08-iteration-feet-comparison.webp
        │   └── 10-demo-motion.webp           ← or .mp4 for motion demo
        ├── rover/                            ← placeholder until v2
        ├── 3d-printer/
        ├── ai-camera/
        └── taxidermy-club/
```

### When to upload what

| Milestone | Minimum files you need in `public/` |
|-----------|-------------------------------------|
| **Build Hero (Section 1)** | `hero-video.mp4` only |
| **Build work gallery (Section 2)** | Above + `projects/birdbot/hero-birdbot-assembly.webp` |
| **Build dark feature band (Section 3)** | Above + `projects/birdbot/01.png`, `02.png`, `03.png` |
| **Build Birdbot case study** | Full set in `projects/birdbot/` (see §6 process table) |
| **Other projects (v1 placeholders)** | Optional — code can use gray boxes until you add images |

**Export tips:** WebP preferred for photos (smaller, faster). Max width ~1600px for hero, ~1200px for inline process images.

---

## v1 goals (from Notion)

1. Only **Birdbot** has real content for now
2. A visitor can scroll through the entire home page in **6–7 seconds**
3. Use **placeholders** everywhere you will fill in later
4. Home shows **4–5 works**; Birdbot on top; same layout rhythm, different color/animation per card
5. Other works stay as placeholders until you add them
6. **Birdbot is clickable** → `/projects/birdbot`
7. Header: **Home · Work · Contact**
8. Footer: **LinkedIn** button

---

## 1. Site map

| Page | Route | v1 status | Notes |
|------|-------|-----------|-------|
| Landing (all works) | `/` | Build now | 3 scroll sections; placeholders OK |
| Work anchor | `/#work` | Build now | Header "Work" scrolls here |
| Contact | `/contact` | Placeholder | Simple page or mailto link |
| **Birdbot** case study | `/projects/birdbot` | Build now | Only full case study in v1 |
| NASA HERC Rover | `/projects/rover` | v2 | Card placeholder only |
| 3D Printer | `/projects/3d-printer` | v2 | Card placeholder only |
| AI Privacy Camera | `/projects/ai-camera` | v2 | Card placeholder only |
| Taxidermy Club | `/projects/taxidermy-club` | v2 | Card placeholder only |

**Removed from v1:** `/about` as a separate page (your intro lives in the hero section for now).

---

## 2. Landing page — three sections

Neo Museum used museum chapters; your version uses **work chapters**.

```
Section 1 — Hero          → your name + hero video + tagline
Section 2 — Work gallery  → 5 project cards (Birdbot live, rest placeholder)
Section 3 — Dark feature  → auto-cycling work previews
         ↓ click Birdbot
/projects/birdbot         → full case study
```

### 2A. Section 1 — Hero (revised layout)

Hybrid layout: NY magazine hierarchy + IGNITEX skills row + Zentto bottom-right CTA.

**Reading order:**
- **Top → bottom:** Dominant headline, then supporting sentence
- **Left → right:** Skills row 01–04 (Robotics, Fabrication, Mechanism, Prototyping)
- **Perimeter:** Small name + nav top; blurb + CTA bottom-right

| Zone | Element | Content source | Status |
|------|---------|----------------|--------|
| Top bar | Name (masthead, small) | `works.ts` → `SITE.name` | Built |
| Top bar | Nav | Home · Work · Contact | Built |
| Headline zone | Dominant statement (full width, large) | `works.ts` → `SITE.heroHeadline` | Built |
| Headline zone | Supporting sentence | `works.ts` → `SITE.heroDescription` | Built |
| Skills row | 01–04 labels + details | `works.ts` → `SITE.skills` | Built |
| Bottom-right | CTA blurb | `works.ts` → `SITE.ctaBlurb` | Built |
| Bottom-right | View Work button | scroll to `#work` | Built |
| Bottom-left | Scroll hint (desktop) | "Scroll to explore" | Built |
| Background | Hero video | `Public/Work landing page 1/hero video.mp4` | On disk |

**Edit all hero copy in** [`src/data/works.ts`](src/data/works.ts) → `SITE` object. Save file → browser refreshes.

### 2B. Section 2 — Work gallery

Section label: `[ 02 ] Selected Work`

Main heading (placeholder):

> `[FILL IN — one line about the kind of work you show — mechanisms, robotics, physical prototyping]`

Action pills (filter tags — decorative in v1, no real filter yet):

| Pill | Icon |
|------|------|
| Robotics | `Cpu` or `Bot` |
| Fabrication | `Hammer` |
| Biomimicry | `Leaf` |
| Research | `BookOpen` |
| [FILL IN] | — |

Bottom strip (desktop only):

- Left: `I DESIGN FROM STRUCTURE TO MOTION.`
- Right: `FANGZHUO TANG © 2026`

### 2C. Section 3 — Dark feature band ("Other work to explore")

Background: `#0a0a0a`. Auto-cycles through **separate** preview-only projects — not the same list as Section 2.

| Element | v1 behavior |
|---------|-------------|
| Data source | [`src/data/exploreWorks.ts`](src/data/exploreWorks.ts) — **not** `works.ts` |
| Heading | `Other work [icons] to explore.` |
| Subheader | `Sketches, experiments, and side projects.` |
| Tagline | `NOT JUST OBJECTS — SYSTEMS YOU CAN READ` |
| Pills | `Fabrication` · `Mechanism` · `Iteration` |
| Left panel | Cycling images per explore project — **[ ] upload** |
| Right panel | Chapter list — flexible count; click swaps preview only (no case study links) |
| Footer line | `BUILT BY HAND, TESTED IN MATTER` |

**Two lists — do not mix them up:**

| Section | Edit this file | Images go here |
|---------|----------------|----------------|
| Section 2 — Selected Work gallery | `src/data/works.ts` | `Public/projects/[slug]/` (e.g. `birdbot/`) |
| Section 3 — Dark explore carousel | `src/data/exploreWorks.ts` | `Public/projects/explore/[slug]/` |

**To add an explore project:** add a row to `exploreWorks.ts`, create `Public/projects/explore/[slug]/`, drop in `hero.webp` (and optional `01.png`, `02.png`), set `heroImage` / `galleryImages` paths. Remove rows freely — the carousel adapts to array length.

**SandTransitionImage:** Optional dissolve effect between cycling images (SVG filter). Nice-to-have, not required for v1.

---

## 3. Work slots (home page order)

Same card format for all five. Birdbot is largest (slot 1). Each slot has its own accent color and entrance animation — customize later.

| Slot | Project | Slug | Accent | Clickable v1? | Status |
|------|---------|------|--------|---------------|--------|
| 1 | **Birdbot** | `birdbot` | `#1a1a1a` | Yes → `/projects/birdbot` | **Live** (copy ready; media **[ ] upload**) |
| 2 | NASA HERC Rover | `rover` | `#2a2a2a` | No — "Coming soon" | Placeholder |
| 3 | 3D Printer | `3d-printer` | `#3a3a3a` | No | Placeholder |
| 4 | AI Privacy Camera | `ai-camera` | `#4a4a4a` | No | Placeholder |
| 5 | Taxidermy Club | `taxidermy-club` | `#e8e8e8` on dark | No | Placeholder |

Rhythm: **Engineering → Human/systems → Fabrication → Research → Nature**

### Slot 1 — Birdbot (landing card)

- **Title:** Birdbot
- **Subtitle:** A bird-inspired legged robot whose intelligence lives in its structure — a passive, tendon-driven leg built to move efficiently and legibly.
- **Tags:** Robotics · Mechatronics · Biomimicry · Fabrication
- **Hero image:** `public/projects/birdbot/hero-birdbot-assembly.webp` — **[ ] upload**
- **Gallery images (dark section cycle):** `public/projects/birdbot/01.png`, `02.png`, `03.png` — **[ ] upload**

### Slot 2 — NASA HERC Rover (placeholder)

- **Title:** NASA HERC Rover
- **Subtitle:** `[FILL IN]` — e.g. Mechanical systems and carbon-fiber fabrication for the RISD Rover team.
- **Tags:** Robotics · Team · Fabrication
- **Hero image:** `public/projects/rover/hero.webp` — **[ ] upload** (or gray box in code)
- **Notes:** Prominent second project after Birdbot (reviewer feedback).

### Slot 3 — 3D Printer (placeholder)

- **Title:** 3D Printer
- **Subtitle:** `[FILL IN]` — e.g. Self-driven mechatronics project — motion control, hardware systems, software tuning.
- **Tags:** Mechatronics · Fabrication
- **Hero image:** `public/projects/3d-printer/hero.webp` — **[ ] upload**

### Slot 4 — AI Privacy Camera (placeholder)

- **Title:** AI Privacy Camera
- **Subtitle:** `[FILL IN]` — e.g. Senior fall detection with privacy-first sensing.
- **Tags:** AI · Product · Research
- **Hero image:** `public/projects/ai-camera/hero.webp` — **[ ] upload**

### Slot 5 — Taxidermy Club (placeholder)

- **Title:** Taxidermy Club
- **Subtitle:** `[FILL IN]` — e.g. Founded RISD club connecting anatomy, natural history, and hands-on making.
- **Tags:** Nature · Community · Material
- **Hero image:** `public/projects/taxidermy-club/hero.webp` — **[ ] upload**

---

## 4. Header and footer

### Header

| Link | Target |
|------|--------|
| Home | `/` |
| Work | `/#work` |
| Contact | `/contact` |

Style: `text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase`

Mobile: hamburger menu (two lines → X animation), full-width overlay with same links.

### Footer

| Element | Value |
|---------|-------|
| LinkedIn button | https://linkedin.com/in/wendyid |
| Email (optional) | ftang@risd.edu |
| Copyright | `FANGZHUO TANG © 2026` |

---

## 5. Contact page (placeholder)

| Field | v1 content |
|-------|------------|
| Headline | `[FILL IN — e.g. Get in touch]` |
| Body | `[FILL IN — open to robotics and AI hardware roles]` |
| Email CTA | `ftang@risd.edu` |
| LinkedIn CTA | https://linkedin.com/in/wendyid |

No form required in v1 — mailto + LinkedIn is enough.

---

## 6. Flagship — Birdbot case study (`/projects/birdbot`)

> **Canonical spec + copy:** see [`BIRDBOT_CASE_STUDY.md`](BIRDBOT_CASE_STUDY.md)

### Card preview (already on home — keep short)

See Slot 1 in §3.

### Case study meta row (top of page — like The Box)

| Role | When | Focus | Tools |
|------|------|-------|-------|
| Industrial designer & solo builder | Dec 2025 – May 2026, ongoing | Leg mechanism, intelligence embodied in physical structure, iterative prototyping | Fusion 360, 3D printing, laser cutting, Arduino, AI agents (Claude / Cursor) |

### One-sentence pitch

> A self-directed, bird-inspired legged robot — designed and fabricated from scratch to test whether a passive, tendon-pulley leg can walk efficiently and move in ways the humans around it can read.

---

### Overview

Birdbot is a self-directed bipedal robot leg inspired by the anatomy of the emu. It started from a simple question about how birds actually move: they run in crouched, compliant, "grounded-running" postures that look energetically wasteful but aren't — and I wanted to know how much of that efficiency comes from the *structure* of the leg rather than from clever control. So instead of putting a motor at every joint, I built the leg around a passive tendon-pulley mechanism with a tuned spring, so that a large part of the gait's behavior is stored in the mechanics. Two motors drive the whole thing.

The guiding idea is that intelligence can be embodied in physical structure. A real bird leg coordinates multiple joints through tendons and elastic tissue with almost no "compute"; I wanted to see how far that principle carries into a buildable robot. From day one the goal was a working physical prototype at meaningful scale — not a CAD exercise — because that's the only way to feel where the real engineering lives: torque budgets, tendon routing, belt tension, structural stiffness, and the difference between a model that moves on screen and a leg that holds up under repeated load.

A second thread runs underneath the engineering: legibility. If a robot is going to work near people, its motion needs to be predictable to them. Passive, animal-like motion may read as more legible than the stiff, fully-actuated motion of conventional robots — and Birdbot is the testbed for that question.

---

### Context / Problem

Most capable legged robots today — Boston Dynamics' Atlas, Agility Robotics' Digit — solve locomotion with heavy actuation and sophisticated control. They're remarkable, but they're also actuator-dense, power-hungry, and their motion can feel opaque to a person standing nearby. Birds solve the same problem differently: compliant, spring-loaded legs that offload work into morphology.

The gap I'm exploring is how much locomotion behavior can be moved *out of the controller and into the structure* — and whether doing so buys you two things at once: better energy economy (elastic energy storage and return, like a real grounded-running bird) and more human-legible motion. This matters to anyone working on legged locomotion and sim-to-real transfer, to HRI research, and — practically — as a demonstration that I can reason about mechanism, biology, and fabrication in one project.

---

### Approach

I designed big-picture before parts. I started from biology and kept fidelity to the emu: segment proportions of femur : tibia : tarsus : toe ≈ 1 : 2.05 : 1.95 : 0.65 (total leg ~770 mm), and a crouched standing posture rather than a human-like extended one. Those numbers set the geometry before any single part existed.

The core architecture decision was tendon-driven instead of direct-drive. A motor-per-joint design is simpler to control but heavier, stiffer, and less lifelike; a tendon-pulley layout with a global spring gives the leg passive compliance — it can store and return energy through a stride the way an animal leg does. The trade-off is honest: more mechanical complexity and more to tune (tendon routing, spring stiffness, belt tension), in exchange for fewer actuators (two motors), lighter distal mass, and dynamics that actually resemble the biology.

From there the build went outward in layers: joints first (a geared hip "tooth adaptor" and a knee pulley ring), then the tendons that couple them, then the drivetrain (a ZGA37RG geared DC motor driving a 30-tooth pulley through a timing belt with an idler for tension), then the electronics (a PCA9685 PWM driver, an MG996R servo, and the ZGA37RG motor on an Arduino).

---

### Process (images + captions — largest section)

Process images should be **large on the page**, not tiny thumbnails.  
Upload every file to `public/projects/birdbot/` using the filenames below.

| # | Upload as | Caption | Section | Status |
|---|-----------|---------|---------|--------|
| 1 | `01-research-emu-reference.webp` | Emu leg anatomy and segment-ratio study (1 : 2.05 : 1.95 : 0.65) | Research | [ ] upload |
| 2 | `02-research-ijrr-reference.webp` | Reference research — legged-robot CAD and grounded-running biomechanics | Research | [ ] upload |
| 3 | `03-cad-leg-assembly.webp` | Full two-leg assembly in Fusion 360 | CAD | [ ] upload |
| 4 | `04-mechanism-knee-pulley-tendon.webp` | Knee pulley ring and tendon routing | Mechanism | [ ] upload |
| 5 | `05-fabrication-mid-assembly.webp` | Mid-assembly: body and first leg | Fabrication | [ ] upload |
| 6 | `06-fabrication-laser-cut-legs.webp` | Laser-cut leg segments (v3) | Fabrication | [ ] upload |
| 7 | `07-electronics-layout.webp` | Electronics layout | Electronics | [ ] upload |
| 8 | `08-iteration-feet-comparison.webp` | Feet iteration v1 → v3 | Iteration | [ ] upload |
| 9 | `hero-birdbot-assembly.webp` | Body + two legs assembled | Outcome | [ ] upload |
| 10 | `10-demo-motion.webp` or `10-demo-motion.mp4` | Actuated motion test | Demo | [ ] upload |

**Landing gallery (Section 3 cycle):** also upload `01.png`, `02.png`, `03.png` — can be the same photos as process images, exported at smaller size if you prefer.

---

### Mechanism breakdown

- **Hip joint / tooth adaptor** — geared interface that sets the hip angle and transfers drive into the thigh segment.
- **Knee pulley ring** — routes the tendon around the knee so motor torque flexes and extends the joint at the chosen ratio.
- **Tendons (1, 2, 3)** — tension elements that passively couple the joints.
- **Feet (iterated)** — ground-contact element; iterated for grip and shock absorption.
- **DC motor + 30T pulley + idler** — ZGA37RG motor, timing belt, idler for tension.
- **Spring / tensioner** — stores and returns elastic energy; keeps belt/tendon tension.
- **Electronics** — PCA9685 PWM driver, MG996R servo, ZGA37RG DC motor, Arduino.

---

### Iteration log

| Version | Date | What changed | Why |
|---------|------|--------------|-----|
| v1 | Jan 2026 | First single-leg mechanism | Validate tendon-pulley architecture |
| v2 | Feb–Mar 2026 | Feet geometry and joint clearance | Resolve interference before full assembly |
| v3 | March 2026 | Laser-cut leg segments | Stiffer, lighter, faster to iterate |
| Current | May 2026 | Body + two legs assembled | Bipedal platform |

---

### Outcome

The bipedal platform is assembled. Current work: hardening for repeatable testing — fasteners, belt tension, tougher material for load-bearing parts. Not yet walking autonomously; reliable actuated motion is the current milestone.

**Engineering lessons:** Belt tension, tendon routing, and spring stiffness matter more than part shapes. PLA gets brittle under cyclic load.

**Design lessons:** Two actuators forced clearer mechanism thinking. A lot of "intelligence" can live in structure rather than code.

**Next milestones:**
1. Reliable actuated gait with sensor logging (IMU + foot force)
2. Export leg to URDF for NVIDIA Isaac Lab simulation
3. Reinforcement learning toward autonomous walking

---

### System diagram

```
Biology (emu proportions, grounded running)
    → Mechanism concept (tendon-pulley + global spring)
    → CAD (Fusion 360)
    → Fabrication (3D print + laser cut)
    → Assembly (body + two legs)
    → Electronics (Arduino, PCA9685, motors)
    → Control & simulation (future: IMU → URDF → Isaac Lab → RL)
```

---

### Birdbot — copy tone notes

- Lead with **physical build**, not abstract research language
- Short sentences, clear headings
- Show **iteration** — feet, legs, tendons across versions
- First image = **hero-birdbot-assembly.webp**

---

## 7. Explicitly NOT in portfolio v1

| Project | Why later |
|---------|-----------|
| AV × HRI / biomimicry car tool | Separate future web app |
| HMG studio summer 2026 | In progress — v2 candidate |
| Full robot leg IMU + RL pipeline | In progress — update Birdbot when ready |

---

## 8. Asset checklist

All paths relative to `Portfolio-site 2/`. You upload; code references these filenames.

| Asset | Path | Status |
|-------|------|--------|
| Hero video | `public/hero-video.mp4` | **On disk** — at `Public/Work landing page 1/hero video.mp4`; move on scaffold |
| Birdbot hero | `public/projects/birdbot/hero-birdbot-assembly.webp` | [ ] upload |
| Birdbot gallery | `public/projects/birdbot/01.png`, `02.png`, `03.png` | [ ] upload |
| Birdbot process 01–08 | `public/projects/birdbot/01-research-*.webp` … `08-iteration-*.webp` | [ ] upload |
| Birdbot demo | `public/projects/birdbot/10-demo-motion.webp` or `.mp4` | [ ] upload (optional for v1 launch) |
| Rover placeholder | `public/projects/rover/hero.webp` | [ ] upload (gray box OK) |
| 3D Printer placeholder | `public/projects/3d-printer/hero.webp` | [ ] upload (gray box OK) |
| AI Camera placeholder | `public/projects/ai-camera/hero.webp` | [ ] upload (gray box OK) |
| Taxidermy Club placeholder | `public/projects/taxidermy-club/hero.webp` | [ ] upload (gray box OK) |

---

## 9. Open questions

- [ ] Display name: `FANGZHUO TANG` vs `WENDY TANG` on hero?
- [ ] Hero tagline and sidebar copy (§2A placeholders)
- [ ] Swap Birdbot hero to CAD render instead of assembly photo?
- [ ] Include AI workflow (Claude/Cursor) on Birdbot page? **Recommended: yes**
- [ ] Contact page: mailto only, or simple form later?

---

## 10. `works.ts` starter shape

Mirror this in `src/data/works.ts` when scaffolding. Image paths are **expected** — upload files before those sections go live.

```typescript
export const works = [
  {
    slug: "birdbot",
    title: "Birdbot",
    subtitle: "A bird-inspired legged robot whose intelligence lives in its structure...",
    tags: ["Robotics", "Mechatronics", "Biomimicry", "Fabrication"],
    accent: "#1a1a1a",
    heroImage: "/projects/birdbot/hero-birdbot-assembly.webp",
    galleryImages: ["/projects/birdbot/01.png", "/projects/birdbot/02.png", "/projects/birdbot/03.png"],
    isLive: true,
    href: "/projects/birdbot",
  },
  {
    slug: "rover",
    title: "NASA HERC Rover",
    subtitle: "[FILL IN]",
    tags: ["Robotics", "Team", "Fabrication"],
    accent: "#2a2a2a",
    heroImage: null,
    isLive: false,
    href: null,
  },
  // ... 3d-printer, ai-camera, taxidermy-club — same shape, isLive: false
];
```
