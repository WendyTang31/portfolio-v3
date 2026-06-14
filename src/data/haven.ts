// Haven assets: upload to Public/projects/haven/
// hero-render.webp, owl-id-sketches.webp, owl-form-render.webp, form-cmf-render.webp,
// in-context-shelf.webp, privacy-shutter-detail.webp, led-detail.webp,
// module-system-render.webp, module-configs.webp, process-sketches.webp,
// process-owl-studies.webp, process-module-v1.webp, process-module-v3.webp

export const HAVEN_ACCENT = "#6e7a64";
export const HAVEN_ASSET_BASE = "/projects/haven";

// Temp hero: swap to `${HAVEN_ASSET_BASE}/hero-render.webp` when uploaded
const HAVEN_HERO_TEMP = "/projects/ai-camera/hero-ai-camera-assembly.webp";

export const havenHero = {
  title: "Haven",
  kicker: "AI hardware · elder care",
  tagline:
    "Eldercare monitoring that watches over a home — without making it feel watched.",
  render: HAVEN_HERO_TEMP,
};

export const havenHook =
  "“How do I know she's okay — without hovering?” Every adult child caring for an aging parent lives inside that question.";

export const havenWhatItIs = {
  headline: "Care that knows when to step in — and when to stay quiet.",
  body: "Haven is intelligent elder-care monitoring for families. A small in-home device watches for the moments that matter — a fall, a wander, a stove left on — and stays silent the rest of the time, so a caregiver can step away without the anxiety of constantly checking in. Processing happens on the device; in alert-only mode, nothing but the alert ever leaves the home.",
};

export const havenMeta = {
  role: "Industrial design — form, product identity & CMF",
  team: "Haven Labs (early-stage startup)",
  year: "2026",
  context: "Privacy-first AI hardware for aging in place",
};

export const havenProblem = {
  label: "The design problem",
  headline: "Two people have to love it — not just one.",
  body: "The buyer is the adult child, often the “sandwich generation” caring for their own kids and aging parents at once — time-poor and anxious. But the person who lives with the device is the parent. And this category's graveyard is full of monitors that children bought and parents quietly unplugged the moment they left the house. So the real problem was never sensing a fall. It was making a device an elder actually welcomes into their home.",
  thesis:
    "How do you turn a surveillance camera into something a home wants to keep?",
};

export type RenderBeat = {
  id: string;
  headline: string;
  body: string;
  renders: { file: string; caption?: string }[];
};

export const havenRenderBeats: RenderBeat[] = [
  {
    id: "identity",
    headline: "Watchful, not watching.",
    body: "Most home cameras read as surveillance — a glossy white eye in the corner. I built Haven's identity around the owl: a creature we associate with quiet vigilance and care, not suspicion. Softened, slightly chibi proportions turn “being watched” into “being watched over.”",
    renders: [
      {
        file: "owl-id-sketches.webp",
        caption:
          "Owl identity studies — from real owl anatomy to a calm, simplified form.",
      },
      {
        file: "owl-form-render.webp",
        caption: "The resolved character: alert but gentle.",
      },
    ],
  },
  {
    id: "form",
    headline: "Made to belong on a shelf — not a security mount.",
    body: "Warm wood and textile in place of clinical plastic. The lens sits behind a soft front, so the device reads as a companion object — closer to a small clock or speaker than a camera — and stays small enough to sit on a corner shelf without taking over the room.",
    renders: [
      {
        file: "form-cmf-render.webp",
        caption: "Warm woods and textiles; the lens deadfronted behind fabric.",
      },
      {
        file: "in-context-shelf.webp",
        caption: "In context — an object a living room keeps.",
      },
    ],
  },
  {
    id: "privacy",
    headline: "Dignity, designed in.",
    body: "Caregivers told us the hardest part is helping without stripping a parent's dignity. So privacy here isn't only a software setting — it's physical: a shutter the elder can close themselves, and a quiet light that shows when the device is processing. The product defers to the person living with it.",
    renders: [
      {
        file: "privacy-shutter-detail.webp",
        caption: "A physical shutter the elder controls.",
      },
      {
        file: "led-detail.webp",
        caption: "A subtle “just checking in” indicator.",
      },
    ],
  },
  {
    id: "system",
    headline: "One hub, quiet satellites.",
    body: "A central hub with small satellite modules covers the rooms that matter. I worked the module down through three configurations to keep every piece small and calm enough to disappear into a home.",
    renders: [
      {
        file: "module-system-render.webp",
        caption: "Hub and satellite family.",
      },
      {
        file: "module-configs.webp",
        caption: "Compact module, v1 → v3.",
      },
    ],
  },
];

export const havenProcess = {
  label: "Process",
  summaryLabel: "See the process",
  intro:
    "Concept sketches → owl-identity studies → three module configurations → renders.",
  thumbs: [
    "process-sketches.webp",
    "process-owl-studies.webp",
    "process-module-v1.webp",
    "process-module-v3.webp",
  ],
};

export const havenPositioning = {
  label: "The shift",
  headline: "A wellness companion — not a monitoring camera.",
  body: "That reframe is the whole project: from a device that makes a parent feel surveilled to one that makes a family feel connected. Haven is in early development; this is the design direction for its first product.",
};
