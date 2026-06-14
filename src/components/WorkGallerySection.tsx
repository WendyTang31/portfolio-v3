import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { works, type Work } from "../data/works";
import { ProjectImage } from "./ProjectImage";

function WorkCard({
  work,
  index,
  featured = false,
}: {
  work: Work;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08 }}
      className={`group relative w-full overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-[4px_4px_0px_rgba(17,17,17,0.15)] ${
        featured ? "min-h-[62vh] md:min-h-[72vh]" : "min-h-[48vh] md:min-h-[52vh]"
      }`}
    >
      <div className="absolute inset-0">
        <ProjectImage
          src={work.heroImage}
          alt={work.title}
          placeholderLabel={`${work.title} — upload hero image`}
          accent={work.accent}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-[#fcfcfc] via-[#fcfcfc]/95 to-transparent px-6 pb-6 pt-24 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:px-8 md:pb-8">
        <div className="mb-2 flex items-center justify-between gap-4">
          <h3
            className={`font-medium tracking-tight text-[#111] ${
              featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {work.title}
          </h3>
          {!work.isLive && (
            <span className="shrink-0 font-mono text-[9px] uppercase tracking-widest text-gray-400">
              Soon
            </span>
          )}
        </div>
        <p
          className={`max-w-2xl leading-relaxed text-gray-600 ${
            featured ? "text-sm md:text-base" : "text-sm"
          }`}
        >
          {work.subtitle}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] uppercase tracking-wider text-gray-500"
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
  const [featured, ...rest] = works;

  return (
    <section
      id="work"
      className="relative z-20 flex w-full flex-col items-center bg-[#fcfcfc] px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-28 lg:px-16"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-8 w-full max-w-[1600px] font-mono text-[10px] uppercase tracking-[0.2em] md:text-[11px]"
      >
        <span className="text-gray-500">[ 02 ]</span>{" "}
        <span className="font-bold text-gray-900">Selected Work</span>
      </motion.p>

      <div className="flex w-full max-w-[1600px] flex-col gap-6 md:gap-8">
        {featured.isLive && featured.href ? (
          <Link to={featured.href} className="block w-full">
            <WorkCard work={featured} index={0} featured />
          </Link>
        ) : (
          <WorkCard work={featured} index={0} featured />
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {rest.map((work, index) => {
            const card = <WorkCard work={work} index={index + 1} />;

            if (work.isLive && work.href) {
              return (
                <Link key={work.slug} to={work.href} className="block w-full">
                  {card}
                </Link>
              );
            }

            return <div key={work.slug}>{card}</div>;
          })}
        </div>
      </div>

      <div className="pointer-events-none mt-16 hidden w-full max-w-[1600px] justify-between font-mono text-[10px] uppercase tracking-widest text-gray-500 md:flex">
        <span>I DESIGN FROM STRUCTURE TO MOTION.</span>
        <span>FANGZHUO TANG © 2026</span>
      </div>
    </section>
  );
}
