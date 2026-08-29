import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Lock } from "lucide-react";
import { works, type Work } from "../data/works";
import { ProjectImage } from "./ProjectImage";

const [featuredWork, ...otherWorks] = works;

function WorkCardLink({
  work,
  children,
  className = "",
}: {
  work: Work;
  children: React.ReactNode;
  className?: string;
}) {
  if (work.isLive && work.href) {
    return (
      <Link to={work.href} className={`block h-full ${className}`}>
        {children}
      </Link>
    );
  }

  return <div className={`h-full ${className}`}>{children}</div>;
}

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05 }}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-[3px_3px_0px_rgba(17,17,17,0.12)]"
    >
      <div
        className={`w-full overflow-hidden bg-[#f3f3f3] ${
          featured ? "aspect-[21/9] md:aspect-[2.4/1]" : "aspect-[3/2]"
        }`}
      >
        <ProjectImage
          src={work.heroImage}
          alt={work.title}
          placeholderLabel={`${work.title} — upload hero image`}
          accent={work.accent}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div
        className={`flex flex-1 flex-col ${
          featured ? "px-5 py-4 md:px-8 md:py-6" : "px-4 py-3.5 md:px-6 md:py-5"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-medium tracking-tight text-[#111] ${
              featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
            }`}
          >
            {work.title}
          </h3>
          {work.locked ? (
            <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[8px] uppercase tracking-widest text-gray-400">
              <Lock size={10} strokeWidth={1.75} />
              Locked
            </span>
          ) : (
            !work.isLive && (
              <span className="shrink-0 font-mono text-[8px] uppercase tracking-widest text-gray-400">
                Soon
              </span>
            )
          )}
        </div>
        <p
          className={`mt-1.5 leading-relaxed text-gray-600 ${
            featured
              ? "max-w-3xl text-base md:mt-2 md:text-lg"
              : "line-clamp-2 text-sm md:text-[15px]"
          }`}
        >
          {work.subtitle}
        </p>
        <div className={`flex flex-wrap gap-1.5 ${featured ? "mt-3" : "mt-2"}`}>
          {work.tags.slice(0, featured ? 4 : 3).map((tag) => (
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
  if (!featuredWork) return null;

  return (
    <section
      id="work"
      className="relative z-20 flex min-h-[100svh] w-full flex-col items-center bg-[#fcfcfc] px-4 py-8 md:px-6 md:py-10 lg:px-8"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        className="mx-auto mb-4 w-full max-w-[min(96vw,1760px)] font-mono text-[10px] uppercase tracking-[0.2em] md:mb-5"
      >
        <span className="text-gray-500">[ 02 ]</span>{" "}
        <span className="font-bold text-gray-900">Selected Work</span>
      </motion.p>

      <div className="mx-auto flex w-full max-w-[min(96vw,1760px)] flex-col gap-4 md:gap-5 lg:gap-6">
        <WorkCardLink work={featuredWork}>
          <WorkCard work={featuredWork} index={0} featured />
        </WorkCardLink>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5 lg:gap-6">
          {otherWorks.map((work, index) => (
            <WorkCardLink key={work.slug} work={work}>
              <WorkCard work={work} index={index + 1} />
            </WorkCardLink>
          ))}
        </div>
      </div>
    </section>
  );
}
