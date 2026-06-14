import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bone, Dna, Leaf } from "lucide-react";
import { exploreWorks } from "../data/exploreWorks";
import { ProjectImage } from "./ProjectImage";

export function DarkFeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWork = exploreWorks[activeIndex];
  const gallery =
    activeWork.galleryImages ??
    (activeWork.heroImage ? [activeWork.heroImage] : []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % exploreWorks.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const displayImage =
    gallery[activeIndex % Math.max(gallery.length, 1)] ?? activeWork.heroImage;

  return (
    <section className="relative z-30 flex w-full flex-col bg-[#0a0a0a] text-white">
      <div className="relative z-10 px-8 pb-8 pt-32 md:px-16 md:pt-40">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-[1.8rem] font-medium leading-[1.15] tracking-tight md:text-[3rem] lg:text-[3.5rem]"
          >
            Other work
            <span className="mx-2 inline-flex gap-2 align-middle md:mx-4">
              {[Bone, Dna, Leaf].map((Icon, i) => (
                <span
                  key={i}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-black text-gray-400 md:h-12 md:w-12"
                >
                  <Icon size={18} />
                </span>
              ))}
            </span>
            to explore.
          </motion.h2>

          <div>
            <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-gray-400 md:text-[10px]">
              Not just objects — systems you can read
            </p>
            <div className="flex flex-wrap gap-2">
              {["Fabrication", "Mechanism", "Iteration"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-gray-600 px-4 py-2 font-mono text-[9px] uppercase tracking-widest text-gray-300"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col border-t border-gray-800 md:flex-row">
        <div className="flex min-h-[320px] flex-col border-gray-800 md:min-h-[420px] md:w-[35%] md:border-r">
          <div className="relative flex flex-1 items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeWork.slug}-${displayImage}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative h-full w-full"
              >
                <ProjectImage
                  src={displayImage ?? null}
                  alt={activeWork.title}
                  placeholderLabel={`${activeWork.title}`}
                  accent={activeWork.accent}
                  className="mx-auto h-full max-h-[280px] w-[80%] object-contain mix-blend-lighten"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="border-t border-gray-800 px-8 py-4 font-mono text-[10px] uppercase tracking-widest text-[#888]">
            <span className="text-white">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-[#333]"> / </span>
            <span>{String(exploreWorks.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="md:w-[65%]">
          <div className="border-b border-gray-800 p-8 font-mono text-[10px] uppercase tracking-widest text-gray-400">
            Sketches, experiments, and side projects.
            <span className="float-right text-gray-500">
              Chapter {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>

          {exploreWorks.map((work, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={work.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex w-full items-center border-b border-gray-800/80 px-8 py-8 text-left transition-colors ${isActive ? "text-white" : "text-[#444] hover:text-[#999]"}`}
              >
                <span className="text-2xl font-medium tracking-tight md:text-[2rem]">
                  {work.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-gray-800 px-8 py-8 font-mono text-[10px] uppercase tracking-widest text-gray-500">
        Built by hand, tested in matter
      </div>
    </section>
  );
}
