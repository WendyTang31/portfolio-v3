import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Header } from "./Header";
import { HERO_VIDEO, SITE } from "../data/works";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {showVideo && (
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 0.8 }}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
          src={HERO_VIDEO}
        />
      )}

      <div className="relative z-20 flex min-h-screen flex-col px-6 pb-10 pt-6 md:px-16 md:pb-12 md:pt-8">
        {/* Top bar — NY masthead + nav */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Header />
        </motion.div>

        {/* Dominant headline zone — full width */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
          className="mt-10 flex flex-1 flex-col justify-center md:mt-14 md:py-8"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero-display w-full max-w-6xl font-normal tracking-tight text-[#111] lg:max-w-[90%]"
          >
            {SITE.heroHeadline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-[15px] leading-[1.65] text-gray-700 md:mt-8 md:max-w-3xl md:text-lg"
          >
            {SITE.heroDescription}
          </motion.p>
        </motion.div>

        {/* Skills row — left to right */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="mt-8 grid grid-cols-2 gap-6 border-t border-gray-200/80 pt-8 md:mt-auto md:grid-cols-4 md:gap-8 md:pt-10"
        >
          {SITE.skills.map((skill) => (
            <motion.div
              key={skill.num}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <span className="font-mono text-[10px] tracking-widest text-gray-400">
                {skill.num}
              </span>
              <h3 className="mt-2 text-lg font-medium tracking-tight text-[#111] md:text-xl">
                {skill.label}
              </h3>
              <p className="mt-1 font-mono text-[10px] leading-relaxed text-gray-500">
                {skill.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom-right CTA — Zentto proportion */}
        <div className="mt-10 flex flex-col items-start justify-between gap-8 md:mt-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden items-center gap-4 md:flex"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300">
              <div className="flex gap-1">
                <span className="h-3 w-px bg-gray-600" />
                <span className="h-3 w-px bg-gray-600" />
              </div>
            </div>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-gray-500">
              Scroll to explore
            </span>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
            }}
            className="ml-auto max-w-xs text-right md:max-w-sm"
          >
            <motion.p
              variants={fadeUp}
              className="text-[13px] leading-[1.6] text-gray-600 md:text-[14px]"
            >
              {SITE.ctaBlurb}
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="#work"
              className="group relative mt-6 inline-flex items-center gap-3 overflow-hidden rounded-md border border-[#1a1a1a] bg-[#1a1a1a] px-6 py-3.5 text-[15px] font-medium text-white shadow-sm transition-transform hover:-translate-y-px hover:shadow-[3px_3px_0px_rgba(17,17,17,0.5)] active:translate-y-0 active:shadow-sm"
            >
              <span className="absolute inset-0 translate-x-[101%] bg-[#fcfcfc] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
              <span className="relative transition-colors group-hover:text-[#111]">
                View Work
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
