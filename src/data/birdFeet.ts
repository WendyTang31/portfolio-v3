// Bird Feet assets live in Public/projects/bird-feet/

export const BIRD_FEET_ACCENT = "#4a5648";
export const BIRD_FEET_ASSET_BASE = "/projects/bird-feet";

export const birdFeetHero = {
  title: "Bird Feet",
  kicker: "Case Study · Biomimicry · Mechanisms",
  tagline:
    "Bio-inspired landing gear from bird feet — adaptive grip for uneven terrain.",
  image: `${BIRD_FEET_ASSET_BASE}/ps-scene.png`,
};

export const birdFeetMeta = {
  role: "Design lead — mechanism, bio translation & prototyping",
  when: "2025",
  tools: "Biomechanics study, cardboard, TPU / PLA / resin print, silicone, fishing-wire tendon",
  context: "Urban air mobility · adaptive landing systems",
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
  images: ["hero-bird-feet.webp", "ps-scene.png"],
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
      file: "feet-movement.png",
      caption: "Grip and wrap motion of the foot.",
      type: "image" as const,
    },
    {
      file: "brainstorm.jpg",
      caption: "Mechanism brainstorm — tendon, scale, and terrain.",
      type: "image" as const,
    },
    {
      file: "chicken-feet-study.mp4",
      caption: "Physical tendon pull study on chicken feet.",
      type: "video" as const,
      poster: "microscope.png",
    },
    {
      file: "microscope.png",
      caption: "Joint of chicken feet under the microscope.",
      type: "image" as const,
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
  headline: "From pull tests to a proof of concept.",
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
        {
          type: "video" as const,
          file: "edited-video.mp4",
          caption: "Coordinated movement test",
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
  renders: [
    { type: "image" as const, file: "render1.png" },
    { type: "image" as const, file: "render2.png" },
    { type: "image" as const, file: "render3.png" },
  ],
};
