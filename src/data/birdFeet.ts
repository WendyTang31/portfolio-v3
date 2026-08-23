// Bird Feet assets live in Public/projects/bird-feet/

export const BIRD_FEET_ACCENT = "#4a5648";
export const BIRD_FEET_ASSET_BASE = "/projects/bird-feet";

export const birdFeetHero = {
  title: "Bird Feet",
  kicker: "Case Study · Biomimicry · Mechanisms",
  tagline:
    "Bio-inspired landing gear from bird feet — adaptive grip for uneven terrain.",
  image: `${BIRD_FEET_ASSET_BASE}/hero-bird-feet.webp`,
};

export const birdFeetMeta = {
  role: "Design lead — mechanism, bio translation & prototyping",
  when: "2025",
  tools: "Biomechanics study, cardboard, TPU / PLA / resin print, silicone, fishing-wire tendon",
  context: "Urban air mobility · adaptive landing systems",
};

export const birdFeetWhatItIs = {
  headline: "Bio-inspired landing gear from bird feet",
  body: "As future aircraft move toward urban air mobility (UAM), landing will increasingly occur on uneven and unpredictable terrain rather than flat runways. Most existing landing gear systems are not designed for this condition, creating risks during touchdown. My team designed an adaptive landing mechanism inspired by bird feet. The system can passively conform to irregular ground surfaces while actively stabilizing and gripping the surface during landing.",
  question:
    "How might we design a mechanism that enables aircraft and drones to land on uneven terrain?",
};

export const birdFeetFieldChallenges = {
  label: "Field challenges",
  headline: "UAM needs to land where cities actually are — not only on prepared pads.",
  items: [
    {
      title: "Lack of infrastructure",
      body: "Vertiports require flat, reinforced sites that are scarce, expensive to build, and difficult to integrate into dense cities.",
    },
    {
      title: "Last-mile issue",
      body: "Limited landing locations place users far from their final destination, reducing convenience and preventing UAM from functioning as true public mobility.",
    },
  ],
  image: "01-context.png",
  imageCaption: "Uneven, unprepared landing conditions in real urban and field contexts.",
};

export const birdFeetDesignChallenges = {
  label: "Design challenges",
  headline: "Strength, weight, and scale have to hold together.",
  items: [
    {
      title: "Research gap",
      body: "Few existing studies on adaptive landing gear for uneven terrain.",
    },
    {
      title: "Design trade-off",
      body: "Balancing structural strength with minimal added weight.",
    },
    {
      title: "Scale challenge",
      body: "Translating bird-scale mechanics to aircraft-scale loads.",
    },
  ],
};

export const birdFeetNature = {
  label: "Answer from nature",
  headline: "Predatory birds already land and grip anywhere while carrying precious load.",
  body: "Nature has already provided answers on how to fly and land efficiently almost anywhere while carrying precious load. Predatory birds are our reference. The question is how to adapt that mechanism within the limits of material and manufacturability.",
  image: "02-nature-reference.png",
  imageCaption: "Biological reference — multi-joint feet that adapt and lock onto irregular surfaces.",
};

export const birdFeetBiomech = {
  label: "Bio mechanic study",
  headline: "Multi-joint articulation, soft tissue, and tendon lock.",
  body: "Their feet combine multi-joint articulation, compliant soft tissue, and tendon-based locking mechanisms to adapt to terrain and generate strong gripping forces — enabling both stable perching and effective prey capture.",
  studies: [
    {
      file: "03-microscope-joint.png",
      caption: "Joint of chicken feet under the microscope.",
      type: "image" as const,
    },
    {
      file: "04-grip-analysis.png",
      caption: "Analysis of feet gripping movement.",
      type: "image" as const,
    },
    {
      file: "chicken-feet-study.mp4",
      caption: "Physical tendon pull study on chicken feet.",
      type: "video" as const,
      poster: "03-microscope-joint.png",
    },
  ],
};

export type BirdFeetProcessStage = {
  n: string;
  title: string;
  body: string;
  media: { type: "image" | "video"; file: string; caption?: string }[];
};

export const birdFeetProcess = {
  label: "Prototyping process",
  headline: "From pull tests to a proof of concept — with expert critique along the way.",
  stages: [
    {
      n: "01",
      title: "Mechanical testing & iteration",
      body: "Tested range of motion, compliance, and friction, using a simple pulling mechanism to achieve coordinated multi-joint movement.",
      media: [
        { type: "video" as const, file: "test-1-rom.mp4", caption: "Range of motion test" },
        { type: "video" as const, file: "test-2-compliance.mp4", caption: "Compliance and friction test" },
        {
          type: "video" as const,
          file: "individual-movement.mp4",
          caption: "Individual joint movement",
        },
      ],
    },
    {
      n: "02",
      title: "Proof of concept",
      body: "Rapid prototyping with cardboard, 3D-printed TPU, PLA, resin, and silicone elastic bands to validate the mechanism.",
      media: [
        {
          type: "image" as const,
          file: "06-prototype-cardboard.jpg",
          caption: "Early cardboard articulation study",
        },
        {
          type: "image" as const,
          file: "07-prototype-print.jpg",
          caption: "Printed segments and soft elements",
        },
        {
          type: "image" as const,
          file: "08-prototype-assembly.jpg",
          caption: "Assembled multi-finger prototype",
        },
        {
          type: "image" as const,
          file: "09-prototype-detail.jpg",
          caption: "Joint and tendon routing detail",
        },
      ],
    },
    {
      n: "03",
      title: "Expert feedback",
      body: "We reached out to professionals in biology, mechanical engineering, and mobility design to ensure accurate biological translation and mechanical feasibility.",
      media: [
        {
          type: "image" as const,
          file: "05-biomech-diagram.png",
          caption: "Biomechanics and motion diagram",
        },
        {
          type: "image" as const,
          file: "10-cad-or-process.png",
          caption: "Process and packaging studies",
        },
      ],
    },
  ] satisfies BirdFeetProcessStage[],
};

export const birdFeetResult = {
  label: "Result",
  headline: "Four fingers, sixteen joints — one linear tendon pull.",
  body: "In application, the mechanism is a compact central housing with four articulated fingers and a total of sixteen joints, allowing the structure to conform to uneven terrain during landing. Multi-degree-of-freedom motion is achieved through a single linear actuation using a tendon-like fishing wire. Upon ground contact, the joints passively adapt to surface geometry; when the wire is tensioned, the fingers contract simultaneously, generating inward and downward forces that grip the ground and stabilize the aircraft.",
  demos: [
    {
      label: "Gripping",
      file: "gripping.mp4",
      poster: "11-result-still.png",
    },
    {
      label: "Contracting",
      file: "contracting.mp4",
      poster: "11-result-still.png",
    },
  ],
  still: "11-result-still.png",
};
