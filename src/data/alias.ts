export const ALIAS_ACCENT = "#D97706";
export const ALIAS_ASSET_BASE = "/projects/ALIAS";

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
  video: `${ALIAS_ASSET_BASE}/hero-short.mp4`,
  poster: `${ALIAS_ASSET_BASE}/hero1.png`,
  videoLabel: "hero-short.mp4",
  videoCaption:
    "Concept short-film loop, or the works-like car light band in motion — muted autoplay.",
};

export const aliasMask = {
  epigraph: "The car is a mask for the driver.",
  p1: "For over a hundred years, a driver's only ways to speak have been the horn, the headlight, and the hand. Sealed in glass and steel, the person disappears into traffic — and the same anonymity that online profiles give us on the internet, the car gives us on the road.",
  p2: "Psychiatrist Adam Stern describes road rage as the product of emotional distance: physical separation plus constant small misreadings. Philip Zimbardo's deindividuation studies found the same thing decades earlier — people hidden behind a mask punish more, and feel less. The car is that mask, worn by everyone at once.",
  wall: "What if the car could unmask the driver instead of hiding them?",
  imageFile: "hero1.png",
  imageAlt: "Studio render of the ALIAS concept car with a liquid-pixel front skin.",
  stats: [
    { value: "96%", label: "of drivers admit to aggressive driving behavior" },
    { value: "500%", label: "rise in road-rage-related fatalities over 10 years" },
    { value: "18%", label: "spike in U.S. traffic fatalities in 2021" },
  ],
};

export const aliasStatement = {
  h2: "Design statement",
  copy: "Create a non-verbal, intuitively understandable external interaction system (eHMI) for road users — communicating emotion, intention, status to increase empathy and safety in traffic.",
};

export const aliasNature = {
  h2: "Communication is a survival skill",
  body: "Every social animal, humans included, communicates through more than one channel at once — color, rhythm, motion, sound. Nature does it to survive and to bond; humans layered abstract symbols and language on top. I looked to that multi-channel logic — the way cuttlefish skin grows a pattern rather than switching it on — as the model for a light that behaves like a living surface.",
  image: "Final Presentation (3).png",
  imageAlt:
    "Three-panel nature reference: cuttlefish camouflage, social grooming, and human cave symbols.",
  whatIfImage: "side-render.jpg",
  whatIfAlt: "Side profile of the ALIAS concept car.",
  whatIfCopy:
    "A vehicle that expresses the driver's humanity, conveying a wider range of intentions and emotions beyond the current method of headlights and horns",
};

export const aliasMarket = {
  h2: "Carmakers have tried to give cars a bigger vocabulary",
  gap: "Most of these speak about the car. ALIAS is built to speak between road users.",
  image: "Final Presentation (2).png",
  imageAlt:
    "Prior eHMI examples: color-changing body panels, pixel lighting, expressive virtual eyes, and projected road signals.",
};

export const aliasResearch = {
  intro: "Three rounds of user research.",
  test1: {
    title: "Test 1 — Initial understanding",
    body: "A graphics test plus interviews: which messages are essential, and how do people intuitively read a symbol? The clearest need showed up in urban, cross-vehicle moments — driver ↔ pedestrian, cyclist, and biker — where empathy and safety break down most.",
    quote:
      '"When carmakers put technology into vehicles, runners and cyclists need to be part of that conversation." — interviewee',
    summary:
      "Test 1 graphics test: eight messages with abstract symbol sketches — sorry, going, thank you, stressed, happy, yield, frustration, emergency.",
    image: "Final Presentation.png",
    photo: "user-test1.jpg",
    photoAlt: "Test 1 user research session.",
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
      "Test 2: representative imagery (emoji/pictogram) scored highest for clarity and also highest for stimulation. Faces won for emotion; traffic-sign convention won for intention.",
    image: "test-2-graphics.png",
    photo: "test-2-web.jpg",
    photoAlt: "Works-like LED panel mounted on a car hood, showing liquid-pixel rings.",
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
    clipA: "emergencyA.mp4",
    clipB: "emergencyB.mp4",
    clipALabel: "A",
    clipBLabel: "B",
    clipAAlt: "Emergency scenario clip A.",
    clipBAlt: "Emergency scenario clip B.",
    abFootnote: "[PLACEHOLDER: A/B test footnote — what A and B are. Wendy to add.]",
    systemsMap: "system-map-slide.png",
    systemsMapAlt: "Systems map: clarity and empathy build safety; aggression erodes it.",
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
  file: "liquid-pixel.mp4",
  alt: "Liquid Pixel light language: ink-like pixels growing, merging, and traveling.",
  studio:
    "We created the software with AI agent — liquid studio, a local, deterministic editor for designing and controlling dot-matrix/LED morphing animations, combining animation, procedural math, hardware mapping, and research-data generation in one tool.",
  tools: [
    {
      file: "2d.png",
      footnote: "animation editor",
      alt: "Liquid Studio animation editor, with a bike-rider drawing on the 2D canvas.",
    },
    {
      file: "3d.png",
      footnote: "UV projection interface",
      alt: "Liquid Studio 3D preview, projecting the animation onto the car body.",
    },
  ],
};

export const aliasScenarios = [
  {
    label: "S1 · EMOTION",
    title: "Mild frustration",
    caption:
      "A driver gets cut off; the band shows a restrained flush of frustration instead of a horn blast.",
    file: "render-animation/mild-frustration.gif",
    alt: "ALIAS render animation for mild frustration.",
  },
  {
    label: "S1 · EMOTION",
    title: "Apology",
    caption: "The other car answers with a sign for sorry.",
    file: "render-animation/apology.gif",
    alt: "ALIAS render animation for apology.",
  },
  {
    label: "S1 · EMOTION",
    title: "Happiness / thanks",
    caption: "The moment resolves; the driver leaves easy.",
    file: "render-animation/happiness.gif",
    alt: "ALIAS render animation for thanks.",
  },
  {
    label: "S2 · INTENTION",
    title: "Pay attention",
    caption:
      "Merging into traffic with a runner crossing; the car draws the runner's eye and waves them through.",
    file: "render-animation/pay-attention.gif",
    alt: "ALIAS render animation for pay attention.",
  },
  {
    label: "S2 · INTENTION",
    title: "Going now",
    caption: "At a four-way standoff, one car simply says going — and goes.",
    file: "render-animation/going now.gif",
    alt: "ALIAS render animation for going now.",
  },
  {
    label: "S3 · STATUS",
    title: "Emergency",
    caption: "A driver racing to a flight signals urgency to everyone around.",
    file: "render-animation/emergency.gif",
    alt: "ALIAS render animation for emergency.",
  },
  {
    label: "S3 · STATUS",
    title: "I see you",
    caption:
      "A nervous motorcyclist filtering past sees the car acknowledge them, and passes reassured; a car holds for an elderly pedestrian still in the crosswalk.",
    file: "render-animation/i-see-you.gif",
    alt: "ALIAS render animation for I see you.",
  },
  {
    label: "S3 · STATUS",
    title: "Human to AV mode",
    caption: "The band shows the shift from a human driver to autonomous mode.",
    file: "render-animation/human-av.gif",
    alt: "ALIAS render animation for human to AV mode.",
  },
];

export const aliasMaking = {
  h2: "Physical Modle",
  video: "physical.mp4",
  videoAlt: "Physical prototype of the ALIAS light band.",
  worksLike: {
    title: "Works-like",
    body: "A full-width rear light band on an actual vehicle, driven by flexible P2.5 LED modules and an asynchronous controller, powered off a portable station so it can run curbside.",
    file: "physical-video2.mp4",
    kind: "video" as const,
    alt: "Works-like prototype: full-width LED tail band lit on a real vehicle.",
  },
  looksLike: {
    title: "Looks-like",
    body: "A quarter-scale model with the same modules inside a 3D-printed body, plus three arcade buttons so anyone can trigger the vocabulary by hand.",
    file: "physical-photo3.jpg",
    kind: "image" as const,
    alt: "Looks-like quarter-scale model with arcade-button pedestal.",
  },
  process: {
    h2: "Building process",
    pair: [
      { file: "proto-1.jpg", alt: "Plywood works-like prototype on the bench, with the LED panel and wiring exposed." },
      { file: "proto-2.jpg", alt: "Quarter-scale looks-like model during the build." },
    ],
    slides: [
      { type: "image" as const, file: "Mid-Fellowship Presentation.png" },
      { type: "image" as const, file: "b1.jpg" },
      { type: "image" as const, file: "b2.jpg" },
      { type: "image" as const, file: "b3.jpg" },
      { type: "image" as const, file: "b4.jpg" },
      { type: "image" as const, file: "b5.png" },
    ],
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
