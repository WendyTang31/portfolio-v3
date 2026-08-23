// Haven assets: Public/projects/haven/ for most media.
// Hero is imported so Vite always serves newly added files (Public can lag until restart).

import headImageUrl from "../assets/haven/head-image.png";

export const HAVEN_ACCENT = "#6e7a64";
export const HAVEN_ASSET_BASE = "/projects/haven";

export const havenHero = {
  title: "Haven",
  kicker: "AI hardware · elder care · industrial design",
  tagline: "A peace of mind — felt as care, never as being watched.",
  render: headImageUrl,
};

export const havenMeta = {
  role: "Industrial design — form, interaction & product identity",
  team: "Early-stage venture / Haven",
  year: "2025–2026",
  context: "Privacy-first home presence for aging in place",
};

/** Slide 20 · flesh: manifesto slide + context photo + bridge */
export const havenContext = {
  label: "01 — Context / problem",
  headline:
    "There's a gap in senior health monitoring — between caregivers who want to know they're safe, and seniors who need privacy and dignity.",
  body: "Seniors need quiet companionship. Caregivers need to know a day went okay — without hovering, and without turning love into a livestream.",
  bridge:
    "A device can't replace care. It can carry a simple message across the gap: I'm thinking of you.",
  taglines: [
    "Existing camera products on the market are purely functional — but they fail to bring seniors a real sense of safety and care.",
  ],
  manifesto: "hero-haven.png",
  image: "context.png",
};

/** Slide 21 · flesh: product presence + emoji personality + caregiver app tone */
export const havenSolution = {
  label: "02 — Solution overview",
  headline: "Peace of mind for both sides — without constant watching.",
  body: "Haven lets the senior choose when they are seen, while still bonding them with caregivers. Sense what matters; keep the warmth.",
  pillars: [
    {
      title: "Sense without staring",
      body: "Radar technology — no video being captured.",
    },
    {
      title: "Agency for the senior",
      body: "A privacy mode seniors can switch on for quiet time during their day.",
    },
    {
      title: "Connection, not only alerts",
      body: "Bond both sides with subtle moments of joy and care — instead of redundant health check-ins.",
    },
  ],
  image: "idea-2.png",
  emojiVideo: "emoji.mp4",
  appVideo: "good-morning.mp4",
};

/** Slide 22 · flesh: research quote + market/pain comparison */
export const havenUsers = {
  label: "03 — Understanding users",
  headline: "Ten conversations. One clear ask.",
  body: "Builders, caregivers, and seniors: systems fail when it matters — and cameras get unplugged when they feel like watching.",
  finding:
    "Peace of mind through daily patterns — and the elder has to want the device enough to keep it on.",
  quote: {
    text: "What families often want isn't just safety alerts, it's peace of mind through visibility into daily patterns.",
    attribution: "Michelle Erskine · primary caregiver",
  },
  painPoints: [
    { title: "Alert overload", body: "Hundreds of pings instead of one calm read of the day." },
    { title: "Fails when it matters", body: "Pendants miss. Wearables miss falls. Trust collapses." },
    { title: "Feels like watching", body: "Surveillance form gets rejected — or unplugged." },
  ],
  image: "comparison.png",
};

export type HavenIdeationDirection = {
  n: string;
  title: string;
  body: string;
  image: string;
};

/** Slide 23 · flesh: early sketches + mood language */
export const havenIdeation = {
  label: "04 — First ideation",
  headline: "Warmth first. Camera second.",
  body: "Belonging before optics — furniture language, privacy in the hand.",
  seeds: [
    { title: "Press to hide", body: "A clear physical act to pause being watched." },
    { title: "Furniture language", body: "Softer silhouettes that sit with the room." },
    { title: "Warm exchange", body: "Glow, emoji, good mornings — care as conversation." },
  ],
  sketches: [
    { file: "sketch-1.png", caption: "Form studies" },
    { file: "sketch-2.png", caption: "Clock / hub language" },
    { file: "sketch-3.png", caption: "Soft disc bodies" },
  ],
  moodboard: "moodboard.png",
};

/** Slide 24 · flesh: four exploration directions from slides 8–11 */
export const havenIteration = {
  label: "05 — Iteration",
  headline: "Four directions — richer UI to pure physical privacy.",
  body: "Evaluated for home fit, clarity of privacy, and emotional tone.",
  directions: [
    {
      n: "01",
      title: "Toy-like companion",
      body: "Cute form; lens toggles back; emoji and time on the face.",
      image: "exploration-1.png",
    },
    {
      n: "02",
      title: "Press-the-head privacy",
      body: "Press the head down — haptic, unmistakable privacy.",
      image: "exploration-2.png",
    },
    {
      n: "03",
      title: "Donut + ambient glow",
      body: "Softer silhouette; night glow; head presses for privacy.",
      image: "exploration-3.png",
    },
    {
      n: "04",
      title: "Elegant UI-forward",
      body: "Refined form; privacy via button or the screen itself.",
      image: "exploration-4.png",
    },
  ] satisfies HavenIdeationDirection[],
};

/** Slide 25 · flesh: concept photos — direction still open */
export const havenFinalChoice = {
  label: "06 — Final choice",
  headline: "Holding the middle — still in progress.",
  body: "Enough UI for warmth between generations. Enough bodily action that privacy never hides in a settings menu.",
  principles: [
    { title: "Privacy as agency", body: "They turn watching off; sensing still protects when self-rescue isn't possible." },
    { title: "Calm signal", body: "A simple daily picture of health — video as exception, not default." },
    { title: "A presence you'd keep", body: "Form and light that belong in a living room." },
  ],
  status: "Still in progress — research spine, exploration spectrum, and direction. Not a finished ship.",
  renders: [
    { file: "idea-1.png", caption: "Companion character" },
    { file: "idea-2.png", caption: "Hub family" },
    { file: "idea-3.png", caption: "In the room" },
  ],
};

/** Kept for shared haven image tooling */
export type RenderBeat = {
  id: string;
  headline: string;
  body: string;
  renders: { file: string; caption?: string }[];
};
