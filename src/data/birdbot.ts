export const birdbotHero = {
  title: "BURB",
  tagline:
    "A emu-tendon inspired walking bipedal leg that stores its intelligence in structure.",
  video: "/projects/birdbot/hero-loop.mp4",
  poster: "/projects/birdbot/hero-birdbot-assembly.webp",
};

export const birdbotMeta = {
  role: "Designer & solo builder",
  when: "Dec 2025 – May 2026, ongoing",
  tools: "Fusion 360, 3D printing, laser cutting, Arduino, AI agents",
  context: "Hyundai Motor Group Regeneration Studio, RISD",
};

export const birdbotPillars = [
  "A functional, simplified hardware system-- only two motors per leg.",
  "A platform that combines biology research, engineering hardware with design considerations.",
  "A fully-tested walking gaits, structural robustness and modularity swaptable mechanical components.",
];

export const whatItIs = {
  headline: "Approach robotics as a designer",
  body: "BURB is a bipedal robotic leg inspired by ground-walking birds such as the emu and ostrich. It achieves walking efficiency through passive mechanisms and can stand still without any active motors. This project provides an alternative perspective on approaching engineering problems using a biomimicry methodology.",
};

export const theProblem = {
  label: "The problem",
  headline:
    "Almost no consumers can afford a bipedal rotot.",
  body: "The problem is the actuators, which account for 50% of the total cost. Warehouse and logistics robots can lift, climb, and recover from stumbles, but they pay for it: around $150,000 per robot. They are also power-hungry, maintenance-intensive, and constrained by their complex control systems.",
  humanVsRobot:
    "The question is: how much versatility do robots really need? If hardware complexity is reduced, costs can be lowered, making robots more accessible to consumers.What can we do with it them.",
  hmwQuestion:
    "How might we make bipedal robots more accessible, less dependence on actuators and complex control?",
};

export const theInsight = {
  label: "The insight",
  headline: "Birds already solved efficient walking — with passive mechanism in their legs.",
  body: "Ratites — emus and ostriches — are close in scale and weight to today's bipedal robots, and they evolved to run efficiently across uneven ground like savanna and grassland. They don't do it with heavy neural control. They do it with passive mechanics.",
  passiveMechanism:
    "As body weight presses down through a stride, the leg's tendons store elastic energy and release it to push the body forward. The same multi-joint tendons stiffen to lock the leg, so the robot can hold a standing pose at almost zero energy cost.",
  ostrichVideo: "/projects/birdbot/ostrich-walking.mp4",
};

export const gaitResults = {
  label: "Gait results",
  headline: "Three walking patterns — programmed from real emu data.",
  body: "Using kinematic data from the emu and the Gait Designer tool, I programmed three distinct gait patterns and ran each one on the physical leg. The leg is mounted on an aluminum extrusion frame for repeatable testing.",
  flexibilityNote:
    "Because the tendon-driven structure is compliant, the leg absorbs small differences in ground height on its own — flexibility is built into the mechanics, not added by extra control code.",
  video: "/projects/birdbot/result.mp4",
  gaitLabels: ["Walking", "Walk-run transition", "Hopping"],
};

export const birdbotCitation = {
  label: "Reference",
  text: 'Badri-Spröwitz, A., Feldotto, B., Chitra, M., Andrada, E., & Daley, M. A. (2022). Bird-inspired robot leg achieves energy-efficient locomotion. Science Robotics.',
  url: "https://www.science.org/doi/10.1126/scirobotics.abg4055",
};

export type ProcessSlide =
  | { type: "image"; file: string }
  | { type: "video"; file: string; poster?: string };

export type ProcessStage = {
  n: string;
  title: string;
  body: string;
  media?: string;
  slides?: ProcessSlide[];
};

export const birdbotProcessIntro =
  "Three fidelities — cardboard, small model, working prototype — and a workflow for turning biology into buildable parameters.";

export const birdbotProcessStages: ProcessStage[] = [
  {
    n: "01",
    title: "Physical prototyping",
    body: "Designing the spring mechanism and joint assembly across three stages of fidelity, because the only way to feel where the real engineering lives — torque, tendon routing, belt tension, stiffness — is to build at real scale, not in CAD.",
    media: "physical-prototype.png",
  },
  {
    n: "02",
    title: "Validation through biology",
    body: "Dissecting a chicken leg to identify flexor and extensor groups, then manually pulling tendons to map how each one drives joint movement and range of motion.",
    slides: [
      { type: "image", file: "dissection.png" },
      { type: "video", file: "dissection-video.mp4", poster: "dissection.png" },
    ],
  },
  {
    n: "03",
    title: "Recreating the gait",
    body: "Breaking the walk into four phases — touchdown, stance, toe-off, swing — and hand-rigging the leg to move through each one to confirm the mechanism reproduces the real motion.",
    slides: [
      { type: "image", file: "anatomy-diagram.png" },
      { type: "image", file: "gait-diagram.png" },
      { type: "video", file: "gait-video.mp4", poster: "gait-diagram.png" },
    ],
  },
  {
    n: "04",
    title: "Translating biological data into movement",
    body: "Extracting data from 20 biology papers into a structured database (morphology, kinematics), converting it into hardware parameters, then building two tools: a Biological Database that organizes the source research, and a Gait Designer — an Arduino-code generator that turns locomotion data into keyframed gait animations and returns analytical feedback. (Artifact links coming soon.)",
    slides: [
      { type: "video", file: "gait-designer.mp4", poster: "gait-diagram.png" },
    ],
  },
  {
    n: "05",
    title: "Build, test, iterate",
    body: "Each loop: build, test the code, find the next failure point. Engineering lessons — belt tension, tendon routing, and spring stiffness matter more than part shapes; PLA goes brittle under cyclic load.",
    slides: [
      { type: "image", file: "test1.jpg" },
      { type: "image", file: "test2.jpg" },
      { type: "image", file: "test3.jpg" },
      { type: "image", file: "test4.jpg" },
      { type: "image", file: "test5.jpg" },
    ],
  },
];

export const whatItDoesNow = {
  label: "What it does now",
  headline: "Passive standing, and a full gait — on two motors per leg.",
  beats: [
    "The platform stands passively with no motors activated, holding position because the multi-joint tendons stiffen to lock the leg.",
    "It recreates the walking gait with a simplified hardware system — two motors per leg, four total.",
  ],
  assemblyVideo: "/projects/birdbot/passive-standing.mp4",
  assemblyPoster: "/projects/birdbot/hero-birdbot-assembly.webp",
  assemblyParts: [
    "String tensioner",
    "Slider",
    "DC motor",
    "Compression spring",
    "Timing belt",
    "Idlers",
    "Bearing holder",
    "One-way bearing",
    "Global tendon",
    "Feet extensor / flexor",
  ],
  assemblyNote:
    "Across hip, knee, ankle, and digit — labeled on the assembly render.",
};

export const whereItsGoing = {
  label: "Where it's going",
  headline: "If motion gets cheaper, what do we actually design robots to do?",
  beats: [
    "In the process, I created a user-friendly interface that turns scientific data into runnable code, making the workflow reusable instead of keeping it locked in my head. This sparked my interest in how AI can unlock creativity by helping designers tackle engineering challenges faster and more effectively.",
    "Today, many people assume that only research labs or large technology companies can build bipedal robots because they often introduce significant complexity through four to six motors. I reduced the system to just two motors and demonstrated that this is no longer the case.",
    "While building it, I noticed that natural movement does not necessarily come from adding more control systems and motors. In biological systems, natural motion often emerges through passive mechanics. Today's robots move in discrete segments—rotate, stop, rotate—and can appear rigid and mechanical because they are. A leg that combines active actuation with passive tendon mechanics may appear more natural and intuitive, making its movement easier for humans to understand and potentially helping establish trust between humans and robots.",
  ],
  hriThesis:
    "How does motion — speed, acceleration curves, the shape of the movement — change a person's perception of a robot?",
  nextSteps:
    "Talking to people about my projects, flesh out my directions. Learning Reinforcemnet Learning.",
  invitation:
    "Stay curious.",
};
