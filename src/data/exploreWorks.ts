import type { Work } from "./works";

/** Images for this section live in Public/projects/explore/ */
export const EXPLORE_ASSET_BASE = "/projects/explore";

/**
 * Landing page dark band — preview-only projects, separate from the main gallery.
 */
export const exploreWorks: Work[] = [
  {
    slug: "3d-printer",
    title: "3D Printer",
    subtitle: "Short description — replace when you upload this project.",
    tags: ["Fabrication"],
    accent: "#2a2a2a",
    heroImage: `${EXPLORE_ASSET_BASE}/3d-printer.png`,
    isLive: false,
    href: null,
  },
  {
    slug: "hardwares",
    title: "Hardwares",
    subtitle: "Short description — replace when you upload this project.",
    tags: ["Mechanism"],
    accent: "#3a3a3a",
    heroImage: `${EXPLORE_ASSET_BASE}/hardwares.png`,
    isLive: false,
    href: null,
  },
  {
    slug: "taxidermy",
    title: "Taxidermy",
    subtitle: "Short description — replace when you upload this project.",
    tags: ["Side project"],
    accent: "#4a4a4a",
    heroImage: `${EXPLORE_ASSET_BASE}/taxidermy.png`,
    isLive: false,
    href: null,
  },
];
