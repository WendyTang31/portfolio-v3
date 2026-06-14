export const ROVER_ACCENT = "#3b4650";
export const ROVER_ASSET_BASE = "/projects/rover";

export const roverHero = {
  title: "NASA HERC Rover",
  tagline:
    "Designing the steering for a human-powered Mars rover — where a hard mechanical problem became a design decision.",
  youtubeVideo:
    "https://www.youtube.com/embed/vxJUGhOyEZM?autoplay=1&mute=1&loop=1&playlist=vxJUGhOyEZM&controls=0&modestbranding=1&rel=0&playsinline=1",
  image: `${ROVER_ASSET_BASE}/hero-rover.webp`,
};

export const roverMeta = {
  role: "Steering system — concept, testing & carbon-fiber fabrication",
  when: "2025, ongoing",
  team: "RISD Rover — NASA Human Exploration Rover Challenge (HERC)",
  tools: "Fusion 360, cardboard prototyping, carbon-fiber layup, physical testing",
};

export const roverRole = [
  "Owned the steering subsystem end to end — the one part of the rover that needed the deepest mechanical and geometric understanding.",
  "Generated and physically tested two competing steering concepts, then chose between them on performance and ride feel.",
  "Fabricated the final mechanism in carbon fiber, iterating the part through destructive strength testing.",
];

export const roverWhatItIs = {
  headline: "Approach a mechanical-engineering problem as a designer.",
  body: "The NASA Human Exploration Rover Challenge asks student teams to build a human-powered rover that can cross rough, unpredictable terrain. RISD Rover entered as a design-led team in a field of engineering schools — betting on a lighter, more integrated, more rideable machine. I took sole ownership of the steering system and carried it from first principles to a finished carbon-fiber part.",
  competitionNote:
    "Teams are evaluated on mission task completion, efficiency within the time limit, and safe, reliable control across terrain without failures or rule violations.",
};

export const roverProblem = {
  label: "The problem",
  headline: "Steering is where performance and human experience collide.",
  body: "Most HERC teams come from engineering programs and out-muscle the problem. As a design team, our edge had to be integration, low weight, and a rover that is actually intuitive to ride — while holding a three-wheel trike layout for simplicity and weight. But steering carries hard, competing constraints at once: weight, performance, space packaging, and durability. It is also the subsystem that demands the most geometry and mechanical theory, so it is the part I took on.",
  question:
    "How can a steering system perform under real constraints — weight, packaging, durability — while staying intuitive to ride?",
};

export type RoverSlide =
  | { type: "image"; file: string; caption?: string }
  | { type: "video"; file: string; poster?: string; caption?: string };

export const roverApproach = {
  label: "Approach",
  headline: "Understand the geometry by building it, not just calculating it.",
  body: "Steering behavior — bump steer, steering angle, stability — falls out of the length, connections, and geometry of the linkage. The fastest way to feel how those trade against each other is to build them. I studied existing steering mechanisms, then made cardboard models and integration sketches to test geometry against the chassis before committing anything to metal.",
  gallery: [
    {
      type: "image" as const,
      file: "cardboard-steering.jpg",
      caption: "Cardboard models to read steering geometry by hand.",
    },
    {
      type: "image" as const,
      file: "integration-sketch.jpg",
      caption: "Sketching the steering integration onto the chassis.",
    },
  ],
};

export const roverComparison = {
  label: "Two concepts",
  headline: "Two ways to steer — and a real tradeoff between them.",
  left: {
    name: "Crank · four-bar steering",
    image: `${ROVER_ASSET_BASE}/crank-arm-iteration.jpg`,
    video: `${ROVER_ASSET_BASE}/crank-test.mp4`,
    points: [
      "Dual-pivot four-bar linkage with more optimal tie-rod geometry.",
      "Larger steering angles and reduced bump steer.",
      "Keeps intuitive side-to-side control.",
    ],
  },
  right: {
    name: "Horizontal · bearing steering",
    image: `${ROVER_ASSET_BASE}/IMG_8606.JPG`,
    video: `${ROVER_ASSET_BASE}/horizontal-test.mp4`,
    points: [
      "Centrally pivoted handlebar that mirrors bicycle ergonomics.",
      "Familiar to ride, but constrained by chassis geometry.",
      "Limited steering angle and more bump steer on uneven ground.",
    ],
  },
};

export const roverDecision = {
  label: "The decision",
  headline: "Chosen on performance and ride feel — not just one number.",
  body: "I evaluated both systems on overall performance — comparing the Indirect Bearing (IB) and Crank Four-Bar (C4B) systems — and on ergonomics: how the steering actually felt to ride.",
  outcome:
    "The crank four-bar won. Better steering geometry, and easier to fabricate without the space-packaging problems the horizontal system forced onto the chassis.",
  detail: {
    summaryLabel: "See the full evaluation",
    image: "evaluation-chart.png",
    caption:
      "Overall-performance comparison: IB (Indirect Bearing) vs C4B (Crank Four-Bar).",
    ergonomicLabel: "Ergonomic ride comparison",
    ergonomicVideo: "https://www.youtube.com/embed/wU6QFYZ07Hs",
  },
};

export type RoverProcessStage = {
  n: string;
  title: string;
  body: string;
  slides?: RoverSlide[];
};

export const roverFabrication = {
  label: "Fabrication in carbon fiber",
  headline: "Built light, then tested to failure.",
  body: "I fabricated the crank steering in carbon fiber, iterating the crank-arm shape from strength tests on the joints and connecting points. The method: start from the thinnest possible layup, break it to find the true strength and stiffness limit, then add a layer and run it again.",
  stages: [
    {
      n: "01",
      title: "Layup & shape iteration",
      body: "Each crank-arm generation started thin, then gained layers only after a destructive test revealed where it failed.",
      slides: [
        {
          type: "image" as const,
          file: "carbon-layup.jpg",
          caption: "Carbon-fiber layup of the crank arm.",
        },
        {
          type: "image" as const,
          file: "crank-arm-iteration.jpg",
          caption: "Crank-arm shape across strength-test iterations.",
        },
        {
          type: "image" as const,
          file: "strength-test.jpg",
          caption: "Destructive testing — breaking each layup to find its limit.",
        },
      ],
    },
  ] satisfies RoverProcessStage[],
};

export const roverResult = {
  label: "Result",
  headline: "Mounted, and steering smoothly.",
  body: "Temporarily mounted on the chassis, the steering operated smoothly and is ready for the next stage. Once the full rover is assembled, the team moves to real-world terrain testing.",
  slides: [
    {
      type: "image" as const,
      file: "result-mounted.jpg",
      caption: "Steering system temporarily mounted on the chassis.",
    },
    {
      type: "image" as const,
      file: "result-render.png",
      caption: "CAD render of the final crank steering assembly.",
    },
  ],
};

export const roverWhyDesign = {
  label: "Why this is a design project",
  headline:
    "An engineer optimizes a linkage. A designer decides what the rider should feel.",
  beats: [
    "The hard part was not the math — it was holding four competing constraints and a human experience in one decision, and resolving them by prototyping rather than spec-ing on paper.",
    "Generating two real concepts and choosing between them on ride feel as well as performance is design judgment, not pure optimization.",
    "My contribution to the team: I took on the subsystem everyone else avoided and turned it into proof that a design team can win on integration and feel, not just raw engineering.",
  ],
  nextSteps: "Next: full rover assembly, then real-world terrain testing.",
};

export const roverReference = {
  label: "Competition",
  text: "NASA Human Exploration Rover Challenge (HERC) — official rules and mission tasks.",
  url: "https://www.nasa.gov/learning-resources/nasa-human-exploration-rover-challenge/",
};
