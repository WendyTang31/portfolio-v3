import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import {
  HAVEN_ACCENT,
  HAVEN_ASSET_BASE,
  havenContext,
  havenFinalChoice,
  havenHero,
  havenIdeation,
  havenIteration,
  havenMeta,
  havenSolution,
  havenUsers,
} from "../data/haven";
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

function FullBleedImage({
  src,
  alt,
  placeholderLabel,
  aspect = "aspect-[16/10]",
}: {
  src: string;
  alt: string;
  placeholderLabel: string;
  aspect?: string;
}) {
  return (
    <div className={`mt-8 overflow-hidden ${aspect}`}>
      <ProjectImage
        src={src}
        alt={alt}
        placeholderLabel={placeholderLabel}
        accent={HAVEN_ACCENT}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function HavenCaseStudy() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <section className="relative h-[100svh] w-full overflow-hidden">
        <ProjectImage
          src={havenHero.render}
          alt={havenHero.title}
          placeholderLabel="head-image.png"
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
        <FadeUp className="mt-16 grid gap-6 border-b border-gray-200 pb-10 sm:grid-cols-2 md:grid-cols-4">
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
              <p className="mt-2 text-sm leading-relaxed text-gray-800">{item.value}</p>
            </div>
          ))}
        </FadeUp>

        {/* 01 — Context */}
        <FadeUp className="mt-20">
          <SectionLabel>{havenContext.label}</SectionLabel>
          <FullBleedImage
            src={`${HAVEN_ASSET_BASE}/${havenContext.manifesto}`}
            alt="Haven manifesto"
            placeholderLabel={havenContext.manifesto}
            aspect="aspect-[16/10]"
          />
          <div className="mt-10">
            <BeatHeadline>{havenContext.headline}</BeatHeadline>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {havenContext.body}
          </p>
          <blockquote
            className="mt-8 border-l-2 pl-5 text-lg font-medium leading-snug text-[#111] md:text-xl"
            style={{ borderColor: HAVEN_ACCENT }}
          >
            {havenContext.bridge}
          </blockquote>
          <ul className="mt-6 space-y-2">
            {havenContext.taglines.map((line) => (
              <li key={line} className="text-sm leading-relaxed text-gray-600">
                {line}
              </li>
            ))}
          </ul>
          <FullBleedImage
            src={`${HAVEN_ASSET_BASE}/${havenContext.image}`}
            alt="Haven context"
            placeholderLabel={havenContext.image}
          />
        </FadeUp>

        {/* 02 — Solution */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenSolution.label}</SectionLabel>
          <BeatHeadline>{havenSolution.headline}</BeatHeadline>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {havenSolution.body}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {havenSolution.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="border-t-2 pt-4"
                style={{ borderColor: `${HAVEN_ACCENT}66` }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  {pillar.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{pillar.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:items-stretch">
            <div className="overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[280px]">
              <ProjectImage
                src={`${HAVEN_ASSET_BASE}/${havenSolution.image}`}
                alt="Haven product presence"
                placeholderLabel={havenSolution.image}
                accent={HAVEN_ACCENT}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden bg-black aspect-[4/3] md:aspect-auto md:min-h-[280px]">
              <video
                src={`${HAVEN_ASSET_BASE}/${havenSolution.emojiVideo}`}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Haven emoji interaction"
              />
            </div>
            <div className="overflow-hidden bg-black aspect-[4/3] md:aspect-auto md:min-h-[280px]">
              <video
                src={`${HAVEN_ASSET_BASE}/${havenSolution.appVideo}`}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Haven caregiver app — good morning"
              />
            </div>
          </div>
        </FadeUp>

        {/* 03 — Users */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenUsers.label}</SectionLabel>
          <BeatHeadline>{havenUsers.headline}</BeatHeadline>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {havenUsers.body}
          </p>
          <p
            className="mt-8 border-l-2 pl-5 text-lg font-medium leading-snug text-[#111] md:text-xl"
            style={{ borderColor: HAVEN_ACCENT }}
          >
            {havenUsers.finding}
          </p>
          <blockquote className="mt-8 max-w-2xl text-base italic leading-relaxed text-gray-800">
            “{havenUsers.quote.text}”
            <footer className="mt-2 font-mono text-[10px] not-italic uppercase tracking-widest text-gray-500">
              {havenUsers.quote.attribution}
            </footer>
          </blockquote>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {havenUsers.painPoints.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-medium text-[#111]">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
          <FullBleedImage
            src={`${HAVEN_ASSET_BASE}/${havenUsers.image}`}
            alt="Research comparison"
            placeholderLabel={havenUsers.image}
            aspect="aspect-[16/9]"
          />
        </FadeUp>

        {/* 04 — First ideation */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenIdeation.label}</SectionLabel>
          <BeatHeadline>{havenIdeation.headline}</BeatHeadline>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {havenIdeation.body}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {havenIdeation.seeds.map((seed) => (
              <div
                key={seed.title}
                className="border-l-2 pl-4"
                style={{ borderColor: `${HAVEN_ACCENT}55` }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  {seed.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{seed.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {havenIdeation.sketches.map((sketch) => (
              <div key={sketch.file}>
                <div className="overflow-hidden bg-white">
                  <ProjectImage
                    src={`${HAVEN_ASSET_BASE}/${sketch.file}`}
                    alt={sketch.caption}
                    placeholderLabel={sketch.file}
                    accent={HAVEN_ACCENT}
                    className="aspect-[4/3] w-full object-contain"
                  />
                </div>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-gray-500">
                  {sketch.caption}
                </p>
              </div>
            ))}
          </div>
          <FullBleedImage
            src={`${HAVEN_ASSET_BASE}/${havenIdeation.moodboard}`}
            alt="Haven moodboard"
            placeholderLabel={havenIdeation.moodboard}
            aspect="aspect-[16/9]"
          />
        </FadeUp>

        {/* 05 — Iteration (image-led) */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenIteration.label}</SectionLabel>
          <BeatHeadline>{havenIteration.headline}</BeatHeadline>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {havenIteration.body}
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {havenIteration.directions.map((direction) => (
              <div key={direction.n}>
                <div className="overflow-hidden">
                  <ProjectImage
                    src={`${HAVEN_ASSET_BASE}/${direction.image}`}
                    alt={direction.title}
                    placeholderLabel={direction.image}
                    accent={HAVEN_ACCENT}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    {direction.n}
                  </span>
                  <h3 className="text-base font-medium tracking-tight text-[#111]">
                    {direction.title}
                  </h3>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{direction.body}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* 06 — Final choice */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenFinalChoice.label}</SectionLabel>
          <BeatHeadline>{havenFinalChoice.headline}</BeatHeadline>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {havenFinalChoice.body}
          </p>
          <div className="mt-8 space-y-4">
            {havenFinalChoice.principles.map((item) => (
              <div
                key={item.title}
                className="border-l-2 pl-4"
                style={{ borderColor: `${HAVEN_ACCENT}55` }}
              >
                <p className="text-sm font-medium text-[#111]">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {havenFinalChoice.renders.map((render) => (
              <div key={render.file}>
                <div className="overflow-hidden">
                  <ProjectImage
                    src={`${HAVEN_ASSET_BASE}/${render.file}`}
                    alt={render.caption ?? render.file}
                    placeholderLabel={render.caption ?? render.file}
                    accent={HAVEN_ACCENT}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                {render.caption && (
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-gray-500">
                    {render.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-12 border-t border-gray-200 pt-8 text-sm leading-relaxed text-gray-600">
            {havenFinalChoice.status}
          </p>
        </FadeUp>
      </article>

      <Footer />
    </div>
  );
}
