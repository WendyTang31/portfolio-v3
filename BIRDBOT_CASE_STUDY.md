# Birdbot Case Study — Page Spec

Route: `/projects/birdbot`  
Status: Spec approved — implemented in `BirdbotCaseStudy.tsx`  
Feeds: `src/data/birdbot.ts`, `src/pages/BirdbotCaseStudy.tsx`

Architecture: **Simplified Plan D (low-risk hybrid)**. Full-screen video hero → beat-based
scroll narrative → two interactive components only (`<Compare>`, `<ProcessStages>`).
Feeds `PROJECTS.md §6` and `BirdbotCaseStudy.tsx`.

Voice: confident, plain, designer-who-can-engineer. Every beat = **bold headline (the takeaway)**
+ a 2–3 sentence caption. Headlines carry the story for a 7-second skim; captions reward the curious.

---

## 1. Page architecture (top to bottom)

| # | Section | What's on screen | Interaction | Build risk |
|---|---------|------------------|-------------|------------|
| 0 | **Hero** | Full-viewport birdbot video, looping. Title + one-line tagline overlaid, scroll cue at bottom. | Autoplay loop only | Low |
| 1 | **What it is** | One-line statement + 3 pillars + meta row (Role / When / Tools / Context) | Scroll reveal | Low |
| 2 | **The problem** | Warehouse-robot cost/actuator/energy bottleneck → human-vs-robot contrast → the HMW question as a full-width line | Scroll reveal | Low |
| 3 | **The insight** | How ground-birds walk passively + `<Compare>` (tendon vs motor) + dissection + research grounding | One static compare block | Low |
| 4 | **Process** | Five stages from biology to a walking leg, collapsed in `<ProcessStages>` | One accordion (`useState`) | Low–Med |
| 5 | **What it does now** | Passive standing + gait on 2 motors/leg + assembly callout + the AI interface | Scroll reveal (optional lightbox later) | Low |
| 6 | **Where it's going** | Proof-of-concept claim + HRI turn + next steps + invitation to talk | Scroll reveal | Low |
| 7 | **Footer** | Existing | — | — |

**Only two new components:** `<Compare>` (pure layout, no state) and `<ProcessStages>` (one `useState`
for the open index). Everything else reuses `fadeUp` you already have.

### Hero video — implementation notes

- Full viewport: `h-[100svh]` (use `svh`, not `vh`, so mobile browser chrome doesn't crop it).
- Autoplay on mobile **only works** with all of: `autoPlay muted loop playsInline`.
- Always set a `poster` (first frame as `.webp`) so there's no black flash before load.
- Compress hard — target a short loop (8–15s) under ~5–8 MB.
- Add a bottom-to-transparent dark gradient behind the title so white text stays legible over any frame.

**Assets:** `Public/projects/birdbot/hero-loop.mp4`, `hero-poster.webp` (fallback: `hero-birdbot-assembly.webp`)

---

## 2. Page copy (paste-ready)

### Hero overlay

- **Title:** Birdbot
- **Tagline:** A bird-inspired walking leg that stores its intelligence in structure, not motors.

---

### Section 1 — What it is

**Headline:** Intelligence you can build into a leg — not just program into a controller.

Birdbot is a bipedal robot leg inspired by ground-walking birds like the emu and ostrich. Instead
of putting a motor at every joint, it runs on a passive multi-joint tendon system that stores and
returns elastic energy, so much of the walking behavior lives in the mechanics rather than the code.
Two motors drive each leg.

**Three pillars:**

- A functional, simplified hardware system.
- A clear biomimicry process — translating biology into design.
- A platform that makes bio-inspired robotics accessible to designers and students, not just labs.

**Meta row:**

Role — Industrial designer & solo builder · When — Dec 2025–May 2026 (ongoing) · Tools — Fusion 360,
3D printing, laser cutting, Arduino, AI agents (Claude / Cursor) · Context — HMG Regeneration Studio, RISD

---

### Section 2 — The problem

*Section label:* The problem

**Headline:** Today's bipedal robots are extraordinary — and almost nobody can afford to use one.

Warehouse and logistics robots can lift, climb, and recover from a stumble, but they pay for it:
around **$150,000 per robot**, with actuators alone making up roughly **half** of that cost. They're
also power-hungry, maintenance-heavy, and boxed in by their control systems.

**Beat — human vs robot:**

A human worker takes a ten-minute break every two hours, self-maintains, trains in minutes, and adapts
to a new floor layout on the spot. A comparable robot needs about four hours to recharge, constant
maintenance, data to train on, and stays limited by its structure and algorithms.

**The question (full-width statement):**

> How might we make bipedal robots walk more efficiently — with passive mechanisms, and less
> dependence on actuators and complex control?

---

### Section 3 — The insight

*Section label:* The insight

**Headline:** Birds already solved efficient walking — with structure, not computation.

Ratites — emus and ostriches — are close in scale and weight to today's bipedal robots, and they
evolved to run efficiently across uneven ground like savanna and grassland. They don't do it with
heavy neural control. They do it with passive mechanics.

**Beat — the passive mechanism:**

As body weight presses down through a stride, the leg's tendons store elastic energy and release it
to push the body forward. The same multi-joint tendons stiffen to lock the leg, so the robot can hold
a standing pose at almost zero energy cost.

**`<Compare>` block — two ways to drive a leg:**

| Passive · multi-joint tendon (this project) | Active · motor-driven (conventional) |
|---|---|
| A few motors set the leg in motion; tuned tendons and a spring coordinate the joints and store energy. | A motor and controller at nearly every joint. |
| Lighter, cheaper, fewer actuators, animal-like motion. | Precise, but actuator-dense, expensive, power-hungry. |
| Behavior lives partly in the mechanics. | Behavior lives entirely in the control loop. |

**Beat — validation through biology:**

To check this against the real thing, I dissected a chicken leg from the supermarket — identifying the
major flexor and extensor groups, then pulling each tendon by hand to watch how it moved the joints.
*(Add a trigger-warning note on the dissection footage.)*

**Beat — grounding in research:**

The approach builds on Badri-Spröwitz et al. (2022), whose avian-inspired "BirdBot" reached an
energy-efficient gait using only four motors and minimal sensing — about 75% less energy than
comparable robots, including passive standing.

---

### Section 4 — Process (inside `<ProcessStages>` accordion)

*Section label:* Process — from biology to a walking leg

*Intro line (always visible above the accordion):* Three fidelities — cardboard, small model, working
prototype — and a workflow for turning biology into buildable parameters.

**Stage 1 · Physical prototyping** — Designing the spring mechanism and joint assembly across three stages of fidelity.

**Stage 2 · Validation through biology** — Dissecting a chicken leg to map tendon-driven joint movement.

**Stage 3 · Recreating the gait** — Four phases: touchdown, stance, toe-off, swing.

**Stage 4 · Translating biological data into movement** — Database + Gait Designer tools (artifact links TBD).

**Stage 5 · Build, test, iterate** — Belt tension, tendon routing, spring stiffness lessons.

---

### Section 5 — What it does now

*Section label:* What it does now

**Headline:** Passive standing, and a full gait — on two motors per leg.

**Assembly callout:** String tensioner · slider · DC motor · compression spring · timing belt · idlers · bearing holder · one-way bearing · global tendon · feet extensor / flexor.

---

### Section 6 — Where it's going

*Section label:* Where it's going

**Headline:** If motion gets cheaper, what do we actually design robots to do?

**Invitation:** This project isn't finished. If any of this is your field, I'd love to hear where you'd take it next.

---

## 3. Data shape (`src/data/birdbot.ts`)

- `birdbotHero` — title, tagline, video, poster
- `birdbotMeta` — role, when, tools, context
- `birdbotPillars` — Section 1 bullets
- `whatItIs`, `theProblem`, `theInsight`, `whatItDoesNow`, `whereItsGoing` — narrative blocks
- `tendonVsMotor` — compare table
- `birdbotProcess` — intro + 5 accordion stages

---

## 4. Build order

1. Hero video
2. Re-flow narrative into beats (`birdbot.ts`)
3. `<Compare>`
4. `<ProcessStages>`
5. Recompose `BirdbotCaseStudy.tsx`

Ship after step 5. Lightbox / filterable gallery = v1.1.
