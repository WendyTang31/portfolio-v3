import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Bone, BookOpen, Cpu, Hammer, Leaf } from "lucide-react";
import { works } from "../data/works";
import { ProjectImage } from "./ProjectImage";

const pills = [
  { label: "Robotics", icon: Cpu },
  { label: "Fabrication", icon: Hammer },
  { label: "Biomimicry", icon: Leaf },
  { label: "Research", icon: BookOpen },
  { label: "Mechanism", icon: Bone },
];

export function WorkGallerySection() {
  return (
    <section
      id="work"
      className="relative z-20 flex min-h-[50vh] w-full flex-col items-center bg-[#fcfcfc] px-8 pb-12 pt-20 md:min-h-[60vh] md:px-16 md:pb-16 md:pt-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] md:text-[11px]"
      >
        <span className="text-gray-500">[ 02 ]</span>{" "}
        <span className="font-bold text-gray-900">Selected Work</span>
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1000px] text-center text-[2rem] font-medium leading-[1.1] tracking-tight text-[#111] md:text-[3.5rem] lg:text-[4rem]"
      >
        Connecting E-motion through systems, materials, interactions with users
      </motion.h2>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          animate: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
        }}
        className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4"
      >
        {pills.map(({ label, icon: Icon }) => (
          <motion.span
            key={label}
            variants={{
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
            }}
            className="rounded-full border border-gray-300 bg-white/50 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-wider text-gray-800 backdrop-blur-sm transition-colors hover:border-black hover:bg-black hover:text-white"
          >
            <span className="inline-flex items-center gap-2">
              <Icon size={14} strokeWidth={2} />
              {label}
            </span>
          </motion.span>
        ))}
      </motion.div>

      <div className="mt-16 grid w-full max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
        {works.map((work, index) => {
          const isFeatured = index === 0;
          const wrapperClass = isFeatured
            ? "flex h-full w-full min-h-0 md:col-span-2 lg:row-span-2"
            : "flex h-full w-full min-h-0";

          const card = (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08 }}
              className="group flex h-full min-h-0 w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-[4px_4px_0px_rgba(17,17,17,0.15)]"
            >
              <div
                className={
                  isFeatured
                    ? "min-h-[220px] flex-1 overflow-hidden lg:min-h-0"
                    : "overflow-hidden"
                }
              >
                <ProjectImage
                  src={work.heroImage}
                  alt={work.title}
                  placeholderLabel={`${work.title} — upload hero image`}
                  accent={work.accent}
                  className={
                    isFeatured
                      ? "block h-full w-full object-cover"
                      : "aspect-[4/3] w-full object-cover"
                  }
                />
              </div>
              <div
                className={`p-6 ${isFeatured ? "shrink-0" : "flex flex-1 flex-col"}`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    {work.title}
                  </h3>
                  {!work.isLive && (
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400">
                      Soon
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
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

          if (work.isLive && work.href) {
            return (
              <Link key={work.slug} to={work.href} className={wrapperClass}>
                {card}
              </Link>
            );
          }

          return (
            <div key={work.slug} className={wrapperClass}>
              {card}
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none mt-16 hidden w-full max-w-6xl justify-between font-mono text-[10px] uppercase tracking-widest text-gray-500 md:flex">
        <span>I DESIGN FROM STRUCTURE TO MOTION.</span>
        <span>FANGZHUO TANG © 2026</span>
      </div>
    </section>
  );
}
