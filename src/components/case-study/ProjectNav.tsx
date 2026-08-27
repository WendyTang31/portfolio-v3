import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectNeighbors } from "../../data/works";

type ProjectNavProps = {
  slug: string;
  className?: string;
  variant?: "light" | "alias";
};

export function ProjectNav({
  slug,
  className = "",
  variant = "light",
}: ProjectNavProps) {
  const neighbors = getProjectNeighbors(slug);
  if (!neighbors) return null;

  const isAlias = variant === "alias";
  const linkClass = isAlias
    ? "alias-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
    : "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500 transition-colors hover:text-[#111]";

  return (
    <nav
      aria-label="Project navigation"
      className={`mt-16 flex flex-col items-start justify-between gap-6 border-t pt-10 sm:flex-row sm:items-center ${
        isAlias ? "border-black/10" : "border-gray-200"
      } ${className}`}
    >
      <Link to={neighbors.prev.href} className={linkClass}>
        <ArrowLeft size={14} />
        {neighbors.prev.label}
      </Link>
      <Link to={neighbors.next.href} className={linkClass}>
        Next Project
        <ArrowRight size={14} />
        {neighbors.next.label}
      </Link>
    </nav>
  );
}
