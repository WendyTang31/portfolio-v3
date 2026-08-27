import { motion } from "motion/react";
import { Header } from "./Header";
import { SITE } from "../data/works";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#f7f6f3]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-[18%] top-[8%] h-[68vh] w-[68vh] rounded-full bg-[#ece7de]/70 blur-3xl" />
        <div className="absolute -left-[12%] bottom-[0%] h-[52vh] w-[52vh] rounded-full bg-[#e7ece8]/55 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_72%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300/80 to-transparent" />
      </div>

      <div className="relative z-20 flex min-h-screen flex-col px-6 pb-10 pt-6 md:px-16 md:pb-12 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Header />
        </motion.div>

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
            className="text-hero-subline mt-6 max-w-3xl text-[#4a4a48] md:mt-8"
          >
            {SITE.heroDescription}
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="mt-8 grid grid-cols-2 gap-6 border-t border-gray-300/70 pt-8 md:mt-auto md:grid-cols-4 md:gap-8 md:pt-10"
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

        <div className="mt-10 flex flex-col items-start justify-between gap-8 md:mt-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden items-center gap-3 md:flex"
          >
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
            className="ml-auto text-right"
          >
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
