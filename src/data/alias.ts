export const ALIAS_ACCENT = "#D97706";
export const ALIAS_ASSET_BASE = "/projects/alias";

export const aliasMetaDoc = {
  title: "ALIAS — Unmasking the Driver",
  description:
    "A communication language (eHMI) that lets a car express emotion, intention, and status through a liquid-ink light display — so the person behind the glass can be seen again.",
};

export const aliasHero = {
  eyebrow: "HYUNDAI REGENERATION STUDIO · eHMI · 2025",
  h1: "Unmasking the Driver",
  subline: "A communication language that lets a car express what a horn never could.",
  meta: "ALIAS  ·  Design research + interaction + hardware  ·  Fangzhuo Tang with Ryan Lee",
  video: `${ALIAS_ASSET_BASE}/hero-film-loop.mp4`,
  poster: `${ALIAS_ASSET_BASE}/hero-poster.jpg`,
  videoLabel: "hero-film-loop.mp4 / hero-poster.jpg",
  videoCaption:
    "Concept short-film loop, or the works-like car light band in motion — muted autoplay.",
};

export const aliasMask = {
  epigraph: "The car is a mask for the driver.",
  p1: "For over a hundred years, a driver's only ways to speak have been the horn, the headlight, and the hand. Sealed in glass and steel, the person disappears into traffic — and the same anonymity that online profiles give us on the internet, the car gives us on the road.",
  p2: "Psychiatrist Adam Stern describes road rage as the product of emotional distance: physical separation plus constant small misreadings. Philip Zimbardo's deindividuation studies found the same thing decades earlier — people hidden behind a mask punish more, and feel less. The car is that mask, worn by everyone at once.",
  wall: "What if the car could unmask the driver instead of hiding them?",
  image: `${ALIAS_ASSET_BASE}/mask-moodboard.jpg`,
  imageFile: "mask-moodboard.jpg",
  imageAlt: "Moodboard of a mask, a driver behind glass, and a still from Lord of the Flies.",
  imageCaption: "Mask / Lord of the Flies still / driver-in-glass moodboard",
  stats: [
    { value: "96%", label: "of drivers admit to aggressive driving behavior" },
    { value: "500%", label: "rise in road-rage-related fatalities over 10 years" },
    { value: "18%", label: "spike in U.S. traffic fatalities in 2021" },
  ],
  sourcesPlaceholder: "[PLACEHOLDER: cite exact sources — Wendy to confirm.]",
};

export const aliasStatement = {
  h2: "Design statement",
  lead: "Create a non-verbal, intuitively understandable external interaction system (eHMI) for road users — communicating",
  keywords: ["emotion", "intention", "status"] as const,
  mid: "to increase",
  keywords2: ["empathy", "safety"] as const,
  end: "in traffic.",
};

export const aliasNature = {
  h2: "Communication is a survival skill",
  body: "Every social animal, humans included, communicates through more than one channel at once — color, rhythm, motion, sound. Nature does it to survive and to bond; humans layered abstract symbols and language on top. I looked to that multi-channel logic — the way cuttlefish skin grows a pattern rather than switching it on — as the model for a light that behaves like a living surface.",
  moodboard: [
    {
      file: "nature-moodboard-1.jpg",
      alt: "Cuttlefish skin growing a pattern.",
    },
    {
      file: "nature-moodboard-2.jpg",
      alt: "Warning coloration in nature — peacock or similar signal.",
    },
    {
      file: "nature-moodboard-3.jpg",
      alt: "Warning signals and display in animals.",
    },
    {
      file: "nature-moodboard-4.jpg",
      alt: "Human icons and pictograms.",
    },
    {
      file: "nature-moodboard-5.jpg",
      alt: "Pictogram language reference.",
    },
    {
      file: "nature-moodboard-6.jpg",
      alt: "Multi-channel communication moodboard still.",
    },
  ],
};

export const aliasPrior = {
  h2: "Carmakers have tried to give cars a bigger vocabulary",
  gap: "Most of these speak about the car. ALIAS is built to speak between road users.",
  cards: [
    {
      title: "BMW Vision Dee",
      line: "E-Ink body panels that change the car's color.",
      file: "prior-bmw.jpg",
      alt: "BMW Vision Dee E-Ink body panels.",
    },
    {
      title: "Hyundai Parametric Pixels",
      line: "Pixel lighting reimagining the turn signal.",
      file: "prior-hyundai.jpg",
      alt: "Hyundai Parametric Pixels lighting.",
    },
    {
      title: "Jaguar Virtual Eyes",
      line: 'Mechanical eyes that tell a pedestrian "I see you."',
      file: "prior-jaguar.jpg",
      alt: "Jaguar Virtual Eyes pedestrian signal.",
    },
    {
      title: "Toyota projection",
      line: "Projected signals telling people it's safe to cross.",
      file: "prior-toyota.jpg",
      alt: "Toyota projected crossing signal.",
    },
  ],
};

export const aliasResearch = {
  intro:
    "I ran three rounds of testing to find out what a car actually needs to say — and how.",
  test1: {
    title: "Test 1 — Initial understanding",
    body: "A graphics test plus interviews: which messages are essential, and how do people intuitively read a symbol? The clearest need showed up in urban, cross-vehicle moments — driver ↔ pedestrian, cyclist, and biker — where empathy and safety break down most.",
    quote:
      '"When carmakers put technology into vehicles, runners and cyclists need to be part of that conversation." — interviewee',
    summary:
      "Test 1 found the strongest need in urban cross-vehicle moments: driver to pedestrian, cyclist, and biker. Exact vote counts are pending.",
    bars: [
      { scenario: "Driver ↔ pedestrian", highlight: true },
      { scenario: "Driver ↔ cyclist", highlight: true },
      { scenario: "Driver ↔ biker", highlight: true },
      { scenario: "Vehicle ↔ vehicle", highlight: false },
      { scenario: "Parking / static", highlight: false },
    ],
  },
  test2: {
    title: "Test 2 — Style understanding",
    body: "I tested the same eight messages in four styles, from abstract to literal — abstract geometry, traffic-sign iconography, emoji/pictogram, and plain text — scoring each for clarity and for visual stimulation (how much it grabs attention, which for a driver is a cost).",
    finding:
      "Representative imagery reads clearest — but it's also the most stimulating. Faces won for emotion; convention won for intention.",
    direction:
      "Direction: use representative imagery in a low-stimulation style — legible enough to read at a glance, calm enough not to distract the driver, and quiet enough to sit inside a brand's design language.",
    styles: ["Abstract", "Traffic sign", "Emoji", "Text"] as const,
    scenarios: [
      "Frustration",
      "Apology",
      "Thanks",
      "Pay attention",
      "Going now",
      "Yielding",
      "Emergency",
      "I see you",
    ],
    summary:
      "Test 2: representative imagery (emoji/pictogram) scored highest for clarity and also highest for stimulation. Faces won for emotion; traffic-sign convention won for intention. Exact cell scores are pending.",
  },
  test3: {
    title: "Test 3 — Concept evaluation",
    body: "Finally I compared ALIAS against how people communicate today — horn, gesture, or nothing — across seven scenarios, scoring clarity, empathy, and aggression.",
    takeaways: [
      {
        n: "01",
        title: "Biggest gains where no channel exists.",
        body: '"Pay attention" +2.5, "Emergency" +2.4 — the horn reads as aggression, and silence says nothing at all.',
      },
      {
        n: "02",
        title: "Empathy rises even when the message isn't decoded.",
        body: "For frustration and apology, clarity stayed flat but empathy still rose. People couldn't read the exact message — and it still softened the exchange.",
      },
      {
        n: "03",
        title: "Depicting the recipient can backfire.",
        body: 'A "yielding" symbol that pictured an elderly pedestrian read as insulting — the only case where aggression went up.',
      },
    ],
    keyFindingTitle: "Clarity and empathy come apart.",
    keyFinding:
      "Traffic today isn't mainly suffering a clarity deficit — it's suffering a social-presence deficit. Simply being seen trying to communicate repairs the exchange before the vocabulary is even learned.",
    keyLine: "It's the effort that counts.",
    summary:
      "Test 3 compared ALIAS to horn, gesture, or nothing. Pay attention improved clarity by 2.5; emergency by 2.4. Frustration and apology did not get clearer but empathy still rose. Yielding was the only case where aggression increased, when the symbol pictured an elderly pedestrian.",
    rows: [
      {
        scenario: "Pay attention",
        clarity: { value: 2.5, direction: "up" as const },
        empathy: { value: null, direction: "up" as const },
        aggression: { value: null, direction: "down" as const },
      },
      {
        scenario: "Emergency",
        clarity: { value: 2.4, direction: "up" as const },
        empathy: { value: null, direction: "up" as const },
        aggression: { value: null, direction: "down" as const },
      },
      {
        scenario: "Frustration",
        clarity: { value: 0, direction: "flat" as const },
        empathy: { value: null, direction: "up" as const },
        aggression: { value: null, direction: "unknown" as const },
      },
      {
        scenario: "Apology",
        clarity: { value: 0, direction: "flat" as const },
        empathy: { value: null, direction: "up" as const },
        aggression: { value: null, direction: "unknown" as const },
      },
      {
        scenario: "Going now",
        clarity: { value: null, direction: "unknown" as const },
        empathy: { value: null, direction: "unknown" as const },
        aggression: { value: null, direction: "unknown" as const },
      },
      {
        scenario: "Thanks",
        clarity: { value: null, direction: "unknown" as const },
        empathy: { value: null, direction: "unknown" as const },
        aggression: { value: null, direction: "unknown" as const },
      },
      {
        scenario: "Yielding",
        clarity: { value: null, direction: "unknown" as const },
        empathy: { value: null, direction: "unknown" as const },
        aggression: { value: null, direction: "up" as const },
      },
    ],
    scoresPlaceholder:
      "[PLACEHOLDER: remaining exact scores per scenario — confirm from the research deck. Only +2.5, +2.4, and the stated directions are from the brief.]",
  },
  systems: {
    body: "These four things move together: clarity and empathy build safety; aggression erodes it. ALIAS aims to raise the first two and lower the last.",
    summary:
      "Relationship map: clarity and empathy build safety; aggression erodes safety.",
  },
};

export const aliasLiquid = {
  h2: "Liquid Pixel",
  intro:
    "HMG's light language is built from separate square pixels. I reimagined them as bubbles of ink: surfaces that meet, merge, swell, and collapse under real physics — light that behaves like a living thing instead of a grid switching on and off.",
  principleZh: "光不闪烁，光生长",
  principleEn: "Light doesn't flash. It grows.",
  triptych: [
    {
      title: "Continuity",
      line: "the division of a cell (mitosis).",
      file: "liquid-mitosis.mp4",
      demo: "mitosis" as const,
      alt: "Looping grow animation of a cell dividing.",
    },
    {
      title: "Spontaneity",
      line: "the bleed of ink and calligraphy.",
      file: "liquid-ink.mp4",
      demo: "ink" as const,
      alt: "Looping grow animation of ink bleeding.",
    },
    {
      title: "Motion",
      line: "the traveling patterns of cuttlefish skin.",
      file: "liquid-cuttlefish.mp4",
      demo: "wave" as const,
      alt: "Looping grow animation of a traveling light pattern.",
    },
  ],
};

export const aliasGrammar = {
  h2: "Three things a car needs to say",
  framing:
    "Expressive signals get to be human and animated. Safety-critical signals stay anchored to convention. That split is the whole grammar.",
  columns: [
    {
      type: "Emotion",
      mode: "expressive",
      trigger: "triggered automatically (biometrics, facial expression, the car's vision).",
      example: "e.g. mild frustration, apology, thanks.",
      file: "symbol-emotion.svg",
      alt: "ALIAS emotion symbol.",
    },
    {
      type: "Intention",
      mode: "imperative",
      trigger: "triggered manually (interior interface, voice).",
      example: "e.g. pay attention, going now, yielding.",
      file: "symbol-intention.svg",
      alt: "ALIAS intention symbol.",
    },
    {
      type: "Status",
      mode: "imperative",
      trigger: "triggered automatically (car sensors).",
      example: 'e.g. emergency, AV vs. human mode, "I see you."',
      file: "symbol-status.svg",
      alt: "ALIAS status symbol.",
    },
  ],
};

export const aliasScenarios = [
  {
    label: "S1 · EMOTION",
    title: "Mild frustration",
    caption:
      "A driver gets cut off; the band shows a restrained flush of frustration instead of a horn blast.",
    file: "scn-frustration.webm",
    alt: "ALIAS tail-band animation for mild frustration.",
  },
  {
    label: "S1 · EMOTION",
    title: "Apology",
    caption: "The other car answers with a sign for sorry.",
    file: "scn-apology.webm",
    alt: "ALIAS tail-band animation for apology.",
  },
  {
    label: "S1 · EMOTION",
    title: "Happiness / thanks",
    caption: "The moment resolves; the driver leaves easy.",
    file: "scn-thanks.webm",
    alt: "ALIAS tail-band animation for thanks.",
  },
  {
    label: "S2 · INTENTION",
    title: "Pay attention",
    caption:
      "Merging into traffic with a runner crossing; the car draws the runner's eye and waves them through.",
    file: "scn-payattention.webm",
    alt: "ALIAS tail-band animation for pay attention.",
  },
  {
    label: "S2 · INTENTION",
    title: "Going now",
    caption: "At a four-way standoff, one car simply says going — and goes.",
    file: "scn-goingnow.webm",
    alt: "ALIAS tail-band animation for going now.",
  },
  {
    label: "S3 · STATUS",
    title: "Emergency",
    caption: "A driver racing to a flight signals urgency to everyone around.",
    file: "scn-emergency.webm",
    alt: "ALIAS tail-band animation for emergency.",
  },
  {
    label: "S3 · STATUS",
    title: "I see you",
    caption:
      "A nervous motorcyclist filtering past sees the car acknowledge them, and passes reassured; a car holds for an elderly pedestrian still in the crosswalk.",
    file: "scn-iseeyou.webm",
    alt: "ALIAS tail-band animation for I see you.",
  },
];

export const aliasFilm = {
  h2: "The short film.",
  file: "alias-short-film.mp4",
  alt: "ALIAS concept short film — a family vehicle driving into the city, running the full vocabulary in context.",
  embedPlaceholder: "[PLACEHOLDER: Vimeo/YouTube embed id if the file is hosted off-site.]",
};

export const aliasMaking = {
  h2: "Two prototypes",
  worksLike: {
    title: "Works-like",
    body: "A full-width rear light band on an actual vehicle, driven by flexible P2.5 LED modules and an asynchronous controller, powered off a portable station so it can run curbside.",
    file: "proto-workslike.jpg",
    video: "proto-workslike.mp4",
    alt: "Works-like prototype: full-width LED tail band lit on a real vehicle.",
  },
  looksLike: {
    title: "Looks-like",
    body: "A quarter-scale model with the same modules inside a 3D-printed body, plus three arcade buttons so anyone can trigger the vocabulary by hand.",
    file: "proto-lookslike.jpg",
    video: "proto-lookslike.mp4",
    alt: "Looks-like quarter-scale model with arcade-button pedestal.",
  },
  tooling: {
    body: "To design the animations pixel-for-pixel I built my own browser-based tool — metaball rendering, a full object model, state-machine sequencing, and export at the exact LED resolution — so what I drew is exactly what the hardware shows.",
    file: "tool-ui.png",
    alt: "Screenshot of the custom ALIAS LED animation tool.",
  },
};

export const aliasClose = {
  body: "ALIAS turns rigid, binary light into something fluid and expressive — living ink instead of a warning lamp. The point was never only to make cars clearer. It was to let them carry a little of the humanity the mask takes away, so the person behind the glass can be seen again.",
  final: "Unmask the driver.",
  epigraph: "\"There's really no benefit… it shouldn't happen, but it does.\"",
};

export const aliasCredits = {
  role: "Design research · interaction design · custom animation tooling · hardware prototyping",
  rolePlaceholder: "[PLACEHOLDER: confirm / trim this role wording.]",
  team: "Fangzhuo (Wendy) Tang with Ryan Lee",
  studio: "Hyundai (HMG) Regeneration Studio — RISD · Advisors: Max, Jess",
  year: "2025",
  exhibited: "Woods-Gerry Gallery, RISD",
  tools: "IBM Plex type system · custom LED animation tool · After Effects · P2.5 LED hardware",
};

/** Prev/next until Wendy confirms neighbors. Gallery order puts Haven before ALIAS; BURB wraps. */
export const aliasNeighbors = {
  prev: { label: "Haven", href: "/projects/haven" },
  next: { label: "BURB", href: "/projects/birdbot" },
  note: "[PLACEHOLDER: Wendy to confirm prev/next neighbors.]",
};
