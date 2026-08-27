import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { works, type Work } from "../data/works";
import { ProjectImage } from "./ProjectImage";

function workGridClass(index: number) {
  // Laptop+: 3 wide cards on top, 2 wider cards below
  if (index < 3) return "md:col-span-1 lg:col-span-2";
  return "md:col-span-1 lg:col-span-3";
}

function WorkCard({ work, index }: { work: Work; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05 }}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-[3px_3px_0px_rgba(17,17,17,0.12)]"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-[#f3f3f3]">
        <ProjectImage
          src={work.heroImage}
          alt={work.title}
          placeholderLabel={`${work.title} — upload hero image`}
          accent={work.accent}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col px-4 py-3 md:px-5 md:py-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-medium tracking-tight text-[#111] md:text-lg">
            {work.title}
          </h3>
          {!work.isLive && (
            <span className="shrink-0 font-mono text-[8px] uppercase tracking-widest text-gray-400">
              Soon
            </span>
          )}
        </div>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-600 md:text-sm">
          {work.subtitle}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {work.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[8px] uppercase tracking-wider text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function WorkGallerySection() {
  return (
    <section
      id="work"
      className="relative z-20 flex min-h-[100svh] w-full flex-col bg-[#fcfcfc] px-5 py-8 md:px-10 md:py-10 lg:px-12"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        className="mb-4 w-full max-w-[1600px] font-mono text-[10px] uppercase tracking-[0.2em] md:mb-5"
      >
        <span className="text-gray-500">[ 02 ]</span>{" "}
        <span className="font-bold text-gray-900">Selected Work</span>
      </motion.p>

      <div className="grid w-full max-w-[1600px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
        {works.map((work, index) => {
          const card = <WorkCard work={work} index={index} />;

          if (work.isLive && work.href) {
            return (
              <Link
                key={work.slug}
                to={work.href}
                className={`block h-full ${workGridClass(index)}`}
              >
                {card}
              </Link>
            );
          }

          return (
            <div key={work.slug} className={`h-full ${workGridClass(index)}`}>
              {card}
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none mt-4 hidden w-full max-w-[1600px] justify-between font-mono text-[9px] uppercase tracking-widest text-gray-500 md:flex">
        <span>I DESIGN FROM STRUCTURE TO MOTION.</span>
        <span>FANGZHUO TANG © 2026</span>
      </div>
    </section>
  );
}
