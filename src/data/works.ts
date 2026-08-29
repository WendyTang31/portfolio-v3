import upscaledRenderUrl from "../assets/haven/upscaled-render.png";

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
  /** When false, the project stays off the homepage and out of prev/next. */
  listed?: boolean;
};

export const HERO_VIDEO = "/Work landing page 1/hero video.mp4";

export const works: Work[] = [
  {
    slug: "alias",
    title: "ALIAS",
    subtitle:
      "A communication language that lets a car express what a horn never could.",
    tags: ["eHMI", "Interaction", "Research", "Hardware"],
    accent: "#D97706",
    heroImage: "/projects/ALIAS/hero1.png",
    isLive: true,
    href: "/projects/alias",
    listed: false,
  },
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
    slug: "haven",
    title: "Haven",
    subtitle: "Care monitoring that bonds two generations — without surveillance.",
    tags: ["Industrial Design", "AI Hardware", "Privacy", "Elder Care"],
    accent: "#6e7a64",
    heroImage: upscaledRenderUrl,
    galleryImages: [
      "/projects/haven/idea-3.png",
      "/projects/haven/idea-2.png",
      "/projects/haven/moodboard.png",
    ],
    isLive: true,
    href: "/projects/haven",
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
    title: "Landing Gripper",
    subtitle:
      "Bio-inspired landing gear from bird feet — an adaptive mechanism for aircraft and drones on uneven terrain.",
    tags: ["Biomimicry", "Mechanisms", "UAM", "Prototyping"],
    accent: "#4a5648",
    heroImage: "/projects/bird-feet/cover.png",
    galleryImages: [
      "/projects/bird-feet/11-result-still.png",
      "/projects/bird-feet/08-prototype-assembly.jpg",
      "/projects/bird-feet/02-nature-reference.png",
    ],
    isLive: true,
    href: "/projects/bird-feet",
  },
];

export type ProjectNeighbor = {
  label: string;
  href: string;
};

/** Linear prev/next through live gallery projects (wraps at ends). */
export function getProjectNeighbors(slug: string): {
  prev: ProjectNeighbor;
  next: ProjectNeighbor;
} | null {
  const liveWorks = works.filter((work): work is Work & { href: string } =>
    Boolean(work.isLive && work.href && work.listed !== false),
  );
  const index = liveWorks.findIndex((work) => work.slug === slug);
  if (index === -1) {
    if (liveWorks.length === 0) return null;
    const last = liveWorks[liveWorks.length - 1];
    const first = liveWorks[0];
    return {
      prev: { label: last.title, href: last.href },
      next: { label: first.title, href: first.href },
    };
  }

  const prevWork = liveWorks[(index - 1 + liveWorks.length) % liveWorks.length];
  const nextWork = liveWorks[(index + 1) % liveWorks.length];

  return {
    prev: { label: prevWork.title, href: prevWork.href },
    next: { label: nextWork.title, href: nextWork.href },
  };
}

export type Skill = {
  num: string;
  label: string;
  detail: string;
};

export const SITE = {
  name: "FANGZHUO TANG",
  heroHeadline: "Designing technology that feels alive.",
  heroDescription:
    "Industrial designer in human–robot interaction: communicate empathy, stories, and future vision across the physical and the digital.",
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
      label: "Prototyping",
      detail: "Physical making & iteration",
    },
    {
      num: "04",
      label: "System",
      detail: "How parts work as a whole",
    },
  ] as Skill[],
  linkedin: "https://linkedin.com/in/wendyid",
  email: "ftangwendy@gmail.com",
};
