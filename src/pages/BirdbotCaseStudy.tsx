import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import {
  birdbotHero,
  birdbotMeta,
  birdbotPillars,
  theInsight,
  theProblem,
  whatItDoesNow,
  birdbotCitation,
  gaitResults,
  whatItIs,
  whereItsGoing,
} from "../data/birdbot";
import { ProcessStages } from "../components/birdbot/ProcessStages";
import { Footer } from "../components/Footer";

function FadeUp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
      {children}
    </p>
  );
}

function BeatHeadline({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-medium tracking-tight text-[#111] md:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
}

export function BirdbotCaseStudy() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <section className="relative h-[100svh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={birdbotHero.video}
          poster={birdbotHero.poster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <Link
          to="/#work"
          className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/55 px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/75 md:left-16 md:top-8"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          Back to Work
        </Link>

        <div className="absolute bottom-16 left-6 text-white md:left-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">
            Case Study · Robotics
          </p>
          <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
            {birdbotHero.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">{birdbotHero.tagline}</p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
          Scroll
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-20 md:px-8">
        <FadeUp className="mt-20">
          <BeatHeadline>{whatItIs.headline}</BeatHeadline>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {whatItIs.body}
          </p>
          <ul className="mt-8 space-y-3">
            {birdbotPillars.map((pillar) => (
              <li
                key={pillar}
                className="border-l-2 border-gray-200 pl-4 text-sm leading-relaxed text-gray-700"
              >
                {pillar}
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-6 border-y border-gray-200 py-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { label: "Role", value: birdbotMeta.role },
              { label: "When", value: birdbotMeta.when },
              { label: "Tools", value: birdbotMeta.tools },
              { label: "Context", value: birdbotMeta.context },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-800">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{theProblem.label}</SectionLabel>
          <BeatHeadline>{theProblem.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {theProblem.body}
          </p>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {theProblem.humanVsRobot}
          </p>
          <blockquote className="mt-10 border-l-2 border-[#111] pl-6 text-xl font-medium leading-snug tracking-tight text-[#111] md:text-2xl">
            {theProblem.hmwQuestion}
          </blockquote>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{theInsight.label}</SectionLabel>
          <BeatHeadline>{theInsight.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {theInsight.body}
          </p>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {theInsight.passiveMechanism}
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-gray-200 bg-black">
            <video
              className="aspect-[16/10] w-full object-cover"
              src={theInsight.ostrichVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>Process — from biology to a walking leg</SectionLabel>
          <ProcessStages />
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{whatItDoesNow.label}</SectionLabel>
          <BeatHeadline>{whatItDoesNow.headline}</BeatHeadline>
          <div className="mt-6 space-y-4">
            {whatItDoesNow.beats.map((beat) => (
              <p key={beat} className="text-base leading-relaxed text-gray-700">
                {beat}
              </p>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-lg border border-gray-200">
            <video
              className="aspect-[16/10] w-full object-cover"
              src={whatItDoesNow.assemblyVideo}
              poster={whatItDoesNow.assemblyPoster}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-gray-500">
            {whatItDoesNow.assemblyNote}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {whatItDoesNow.assemblyParts.map((part) => (
              <span
                key={part}
                className="rounded-full border border-gray-200 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-gray-600"
              >
                {part}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{gaitResults.label}</SectionLabel>
          <BeatHeadline>{gaitResults.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {gaitResults.body}
          </p>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {gaitResults.flexibilityNote}
          </p>
          <div className="mt-8 grid overflow-hidden rounded-lg border border-gray-200 md:grid-cols-[minmax(0,1fr)_11rem] lg:grid-cols-[minmax(0,1fr)_13rem]">
            <div className="flex min-h-[360px] items-center justify-center md:min-h-[560px]">
              <video
                className="max-h-[70vh] w-full object-contain"
                src={gaitResults.video}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="flex flex-col justify-between gap-8 border-t border-gray-200 px-6 py-10 md:border-l md:border-t-0 md:py-14">
              {gaitResults.gaitLabels.map((label, index) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium leading-snug tracking-tight text-[#111] md:text-lg">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{whereItsGoing.label}</SectionLabel>
          <BeatHeadline>{whereItsGoing.headline}</BeatHeadline>
          <div className="mt-6 space-y-4">
            {whereItsGoing.beats.map((beat) => (
              <p key={beat} className="text-base leading-relaxed text-gray-700">
                {beat}
              </p>
            ))}
          </div>
          <p className="mt-8 text-base font-medium leading-relaxed text-[#111]">
            Part II — HRI thesis
          </p>
          <p className="mt-2 text-base leading-relaxed text-gray-700">
            {whereItsGoing.hriThesis}
          </p>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-gray-500">
            Next steps
          </p>
          <p className="mt-2 text-base leading-relaxed text-gray-700">
            {whereItsGoing.nextSteps}
          </p>
          <p className="mt-10 border-t border-gray-200 pt-8 text-lg leading-relaxed text-gray-800">
            {whereItsGoing.invitation}
          </p>
        </FadeUp>

        <FadeUp className="mt-16 border-t border-gray-200 pt-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
            {birdbotCitation.label}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-gray-500">
            {birdbotCitation.text}{" "}
            <a
              href={birdbotCitation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-300 underline-offset-2 transition-colors hover:text-gray-800"
            >
              Read paper
            </a>
          </p>
        </FadeUp>
      </article>

      <Footer />
    </div>
  );
}
