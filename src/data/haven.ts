// Haven — simple case-study outline. Media in Public/projects/haven/
// Hero imported so Vite serves it reliably.

import upscaledRenderUrl from "../assets/haven/upscaled-render.png";

export const HAVEN_ACCENT = "#6e7a64";
export const HAVEN_ASSET_BASE = "/projects/haven";

export const havenHero = {
  title: "Haven",
  kicker: "AI hardware · elder care · industrial design",
  tagline: "Care monitoring that bonds two generations — without surveillance.",
  render: upscaledRenderUrl,
};

export const havenMeta = {
  role: "Industrial design — form, interaction & product identity",
  team: "Early-stage venture / Haven",
  year: "2025–2026",
  context: "Aging in place · privacy-first sensing",
};

/** Opening context */
export const havenOpening = {
  label: "Context",
  paragraphs: [
    "More and more seniors are living alone.",
    "They face health decline and losing agency in daily care — yet most still want to stay home, not move into a care facility.",
    "Meanwhile, caregivers worry about their parents and want to check in on their health constantly.",
  ],
};

/** Stats / research chart — chart carries the copy */
export const havenStats = {
  label: "The shift",
  image: "bacground-research.png",
  imageCaption: "Background research — living alone & aging in place",
};

/** Existing products problem */
export const havenExisting = {
  label: "The problem with today",
  body: "Most elder-care monitors can detect falls, track health data, and send alerts — but they still feel like surveillance. They intrude on daily life.",
  formNote:
    "Cold, boxy, hard edges. Security-camera language. White medical plastic. A black lens as an eye, always watching.",
  image: "context.png",
};

/** Vision */
export const havenVision = {
  label: "What if",
  body: "Imagine a care-monitoring device that is not surveillance — but a way to bond seniors and caregivers. It gives the senior privacy, and the caregiver a sense of ease.",
  image: "haven.png",
};

/** Interviews */
export const havenInterviews = {
  label: "User interviews",
  intro: "Through interviews, both sides’ needs became clearer.",
  caregivers: {
    title: "Caregivers",
    image: "caregive-icon.svg",
    quotes: [
      "The cost of an unrecorded event is extremely high.",
      "Wandering is the nightmare scenario — for dementia families, the #1 fear is a parent walking out the front door.",
      "Mom didn’t like them at first because she thought I was stalking her.",
    ],
  },
  seniors: {
    title: "Seniors",
    image: "senior-icon.svg",
    quotes: [
      "I always forget to take my pills, forget things — I feel less able to take care of myself.",
      "I don’t like to wear sensor alarms, pads, or call buttons. I would unplug the security cameras. I don’t need an aide around all the time.",
    ],
  },
};

/** Underlying needs */
export const havenNeeds = {
  label: "Underlying needs",
  caregiver:
    "Caregivers need to know about emergencies and falls — without intruding into everyday life.",
  senior:
    "Seniors want less anxiety about falling — while keeping a sense of agency most of the time.",
  thesis:
    "The device should be a link of life between both sides — not something that only pleases the caregiver.",
};

/** Tech / features */
export const havenFeatures = {
  label: "Technology / features",
  items: [
    {
      title: "Sense without staring",
      body: "Radar-based sensing — no video is ever captured.",
      video: "device-page.mp4",
      icon: "radar" as const,
      // Full UI visible — inset like the quiet-mode frame
      videoClass: "h-full w-full object-contain object-center scale-[0.88]",
    },
    {
      title: "Agency for the senior",
      body: "A privacy mode seniors can switch on for quiet time during their day.",
      video: "quiet-mode.mp4",
      icon: "toggle" as const,
      videoClass: "h-full w-full object-cover object-center",
    },
    {
      title: "Connection, not only alerts",
      body: "Bonds both sides with subtle moments of joy and care — instead of redundant health check-ins.",
      video: "good-morning.mp4",
      icon: "heart" as const,
      // Zoom past yellow/beige export margins
      videoClass: "h-full w-full object-cover object-center scale-[1.22]",
    },
  ],
};

/** Form / style */
export const havenForm = {
  label: "Form / style",
  body: "Sketches across form, physical interaction, CMF, display, and lamp language.",
  images: [
    { file: "sk-1.png", caption: "Form studies" },
    { file: "sk-2.png", caption: "Physical interaction" },
    { file: "sk-3.png", caption: "Display / hub" },
    { file: "sk-4.png", caption: "CMF & lamp language" },
  ],
};

/** Direction */
export const havenDirection = {
  label: "Direction",
  body: "Four directions — from richer UI to pure physical privacy.",
  axes: {
    yTop: "Complex / unique",
    yBottom: "Simple / average",
    xLeft: "UIUX",
    xRight: "Physical Interaction",
  },
  /** Relative placement inside each quadrant, matching the original matrix */
  items: [
    {
      file: "exploration-4.png",
      alt: "Exploration 4 — richer UI direction",
      quadrant: "top-left" as const,
      className: "left-[6%] top-[8%] w-[78%]",
    },
    {
      file: "exploration-1.png",
      alt: "Exploration 1 — physical interaction direction",
      quadrant: "top-right" as const,
      className: "right-[6%] top-[10%] w-[72%]",
    },
    {
      file: "exploration-5.png",
      alt: "Exploration 5 — new concept",
      quadrant: "bottom-left" as const,
      className: "left-[6%] top-[6%] w-[58%]",
    },
    {
      file: "exploration-2.png",
      alt: "Exploration 2 — simple UI direction",
      quadrant: "bottom-left" as const,
      className: "right-[4%] bottom-[6%] w-[62%]",
    },
    {
      file: "exploration-3.png",
      alt: "Exploration 3 — simple physical direction",
      quadrant: "bottom-right" as const,
      className: "left-[8%] top-[10%] w-[74%]",
    },
  ],
};

/** Exploded view */
export const havenExploded = {
  label: "Exploded view",
  body: "Internal layout and packaging — placeholder.",
  image: "06-product-family.png",
};

/** Rendering */
export const havenRendering = {
  label: "Rendering",
  images: [
    { file: "tilt-render-x.png", caption: "Tilt view" },
    { file: "top-render.png", caption: "Top view" },
  ],
  fullWidth: { file: "cmf-render.png", caption: "CMF" },
};

/** Shared type for optional haven image tooling */
export type RenderBeat = {
  id: string;
  headline: string;
  body: string;
  renders: { file: string; caption?: string }[];
};
