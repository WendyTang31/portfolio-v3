import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import {
  HAVEN_ACCENT,
  HAVEN_ASSET_BASE,
  havenHero,
  havenHook,
  havenMeta,
  havenPositioning,
  havenProblem,
  havenProcess,
  havenRenderBeats,
  havenWhatItIs,
} from "../data/haven";
import { ProcessThumbStrip } from "../components/haven/ProcessThumbStrip";
import { RenderBeatSection } from "../components/haven/RenderBeatSection";
import { ProjectImage } from "../components/ProjectImage";
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

export function HavenCaseStudy() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <section className="relative h-[100svh] w-full overflow-hidden">
        <ProjectImage
          src={havenHero.render}
          alt={havenHero.title}
          placeholderLabel="hero-render.webp"
          accent={HAVEN_ACCENT}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

        <Link
          to="/#work"
          className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/55 px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/75 md:left-16 md:top-8"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          Back to Work
        </Link>

        <div className="absolute bottom-16 left-6 text-white md:left-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">
            {havenHero.kicker}
          </p>
          <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
            {havenHero.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">{havenHero.tagline}</p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
          Scroll
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-6 pb-20 md:px-8">
        <FadeUp className="mt-20">
          <blockquote className="border-l-2 pl-6 text-xl font-medium italic leading-snug tracking-tight text-[#111] md:text-2xl lg:text-3xl"
            style={{ borderColor: HAVEN_ACCENT }}
          >
            {havenHook}
          </blockquote>
        </FadeUp>

        <FadeUp className="mt-20">
          <BeatHeadline>{havenWhatItIs.headline}</BeatHeadline>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {havenWhatItIs.body}
          </p>
          <div className="mt-12 grid gap-6 border-y border-gray-200 py-8 sm:grid-cols-2">
            {[
              { label: "Role", value: havenMeta.role },
              { label: "Team", value: havenMeta.team },
              { label: "Year", value: havenMeta.year },
              { label: "Context", value: havenMeta.context },
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
          <SectionLabel>{havenProblem.label}</SectionLabel>
          <BeatHeadline>{havenProblem.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {havenProblem.body}
          </p>
          <blockquote
            className="mt-10 border-l-2 pl-6 text-xl font-medium leading-snug tracking-tight text-[#111] md:text-2xl"
            style={{ borderColor: HAVEN_ACCENT }}
          >
            {havenProblem.thesis}
          </blockquote>
        </FadeUp>

        <div className="mt-24 space-y-24">
          {havenRenderBeats.map((beat) => (
            <FadeUp key={beat.id}>
              <RenderBeatSection
                beat={beat}
                assetBase={HAVEN_ASSET_BASE}
                accent={HAVEN_ACCENT}
              />
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-24">
          <ProcessThumbStrip
            label={havenProcess.label}
            summaryLabel={havenProcess.summaryLabel}
            intro={havenProcess.intro}
            thumbs={havenProcess.thumbs}
            assetBase={HAVEN_ASSET_BASE}
            accent={HAVEN_ACCENT}
          />
        </FadeUp>

        <FadeUp className="mt-20 border-t border-gray-200 pt-12">
          <SectionLabel>{havenPositioning.label}</SectionLabel>
          <BeatHeadline>{havenPositioning.headline}</BeatHeadline>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {havenPositioning.body}
          </p>
        </FadeUp>
      </article>

      <Footer />
    </div>
  );
}
