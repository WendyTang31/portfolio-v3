import headImageUrl from "../assets/haven/head-image.png";

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  accent: string;
  heroImage: string | null;
  galleryImages?: string[];
  isLive: boolean;
  href: string | null;
};

export const HERO_VIDEO = "/Work landing page 1/hero video.mp4";

export const works: Work[] = [
  {
    slug: "birdbot",
    title: "BURB",
    subtitle:
      "A bird-inspired legged robot whose intelligence lives in its structure — a passive, tendon-driven leg built to move efficiently and legibly.",
    tags: ["Robotics", "Mechatronics", "Biomimicry", "Fabrication"],
    accent: "#634141",
    heroImage: "/projects/birdbot/hero-birdbot-assembly.webp",
    galleryImages: [
      "/projects/birdbot/01.png",
      "/projects/birdbot/02.png",
      "/projects/birdbot/03.png",
    ],
    isLive: true,
    href: "/projects/birdbot",
  },
  {
    slug: "rover",
    title: "NASA HERC Rover",
    subtitle:
      "Designing the steering for a human-powered Mars rover — concept testing, comparison, and carbon-fiber fabrication.",
    tags: ["Robotics", "Team", "Fabrication"],
    accent: "#3b4650",
    heroImage: "/projects/rover/hero-rover.webp",
    isLive: true,
    href: "/projects/rover",
  },
  {
    slug: "bird-feet",
    title: "Bird Feet",
    subtitle:
      "Bio-inspired landing gear from bird feet — an adaptive mechanism for aircraft and drones on uneven terrain.",
    tags: ["Biomimicry", "Mechanisms", "UAM", "Prototyping"],
    accent: "#4a5648",
    heroImage: "/projects/bird-feet/hero-bird-feet.webp",
    galleryImages: [
      "/projects/bird-feet/11-result-still.png",
      "/projects/bird-feet/08-prototype-assembly.jpg",
      "/projects/bird-feet/02-nature-reference.png",
    ],
    isLive: true,
    href: "/projects/bird-feet",
  },
  {
    slug: "haven",
    title: "Haven",
    subtitle: "Care monitoring that bonds two generations — without surveillance.",
    tags: ["Industrial Design", "AI Hardware", "Privacy", "Elder Care"],
    accent: "#6e7a64",
    heroImage: headImageUrl,
    galleryImages: [
      "/projects/haven/idea-3.png",
      "/projects/haven/idea-2.png",
      "/projects/haven/moodboard.png",
    ],
    isLive: true,
    href: "/projects/haven",
  },
  {
    slug: "alias",
    title: "ALIAS",
    subtitle:
      "A communication language that lets a car express what a horn never could.",
    tags: ["eHMI", "Interaction", "Research", "Hardware"],
    accent: "#D97706",
    heroImage: "/projects/alias/hero-poster.jpg",
    isLive: true,
    href: "/projects/alias",
  },
];

export type Skill = {
  num: string;
  label: string;
  detail: string;
};

export const SITE = {
  name: "FANGZHUO TANG",
  heroHeadline: "NATURE . DESIGN .TECHNOLOGY",
  heroDescription:
    "I design embodied intelligence that feels alive and expresses intention and emotion",
  ctaBlurb:
    "Industrial designer building robots and future AI hardware — from HRI to physical prototypes.",
  skills: [
    {
      num: "01",
      label: "Robotics",
      detail: "Rapid prototype & mechatronics",
    },
    {
      num: "02",
      label: "Design",
      detail: "Form & human experience & stories",
    },
    {
      num: "03",
      label: "Vision",
      detail: "Technology & society",
    },
    {
      num: "04",
      label: "Drive",
      detail: "Curiousity & constant learning",
    },
  ] as Skill[],
  linkedin: "https://linkedin.com/in/wendyid",
  email: "ftangwendy@gmail.com",
};
