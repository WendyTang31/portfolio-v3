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
      "Mechanical systems and carbon-fiber fabrication for the RISD Rover team.",
    tags: ["Robotics", "Team", "Fabrication"],
    accent: "#2a2a2a",
    heroImage: null,
    isLive: false,
    href: null,
  },
  {
    slug: "3d-printer",
    title: "Future Computer",
    subtitle:
      "Self-driven mechatronics — motion control, hardware systems, software tuning.",
    tags: ["Mechatronics", "Fabrication"],
    accent: "#3a3a3a",
    heroImage: null,
    isLive: false,
    href: null,
  },
  {
    slug: "ai-camera",
    title: "AI Privacy Camera",
    subtitle: "Senior fall detection with privacy-first sensing.",
    tags: ["AI", "Product", "Research"],
    accent: "#4a4a4a",
    heroImage: "/projects/ai-camera/hero-ai-camera-assembly.webp",
    isLive: false,
    href: null,
  },
  {
    slug: "taxidermy-club",
    title: "Autonomous Car Language",
    subtitle:
      "Founded RISD club connecting anatomy, natural history, and hands-on making.",
    tags: ["Nature", "Community", "Material"],
    accent: "#e8e8e8",
    heroImage: null,
    isLive: false,
    href: null,
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
