import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import {
  ROVER_ACCENT,
  ROVER_ASSET_BASE,
  roverApproach,
  roverComparison,
  roverDecision,
  roverFabrication,
  roverHero,
  roverMeta,
  roverProblem,
  roverReference,
  roverResult,
  roverRole,
  roverWhatItIs,
  roverWhyDesign,
} from "../data/rover";
import { ConceptCompare } from "../components/rover/ConceptCompare";
import { MediaSlideCarousel } from "../components/rover/MediaSlideCarousel";
import { RoverProcessStages } from "../components/rover/RoverProcessStages";
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

export function RoverCaseStudy() {
  const [evaluationOpen, setEvaluationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <section className="relative h-[100svh] w-full overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            title={`${roverHero.title} hero video`}
            src={roverHero.youtubeVideo}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
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
            Case Study · Team · Robotics
          </p>
          <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
            {roverHero.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">{roverHero.tagline}</p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
          Scroll
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-20 md:px-8">
        <FadeUp className="mt-20">
          <SectionLabel>My role</SectionLabel>
          <BeatHeadline>What I owned on the team.</BeatHeadline>
          <ul className="mt-8 space-y-3">
            {roverRole.map((line) => (
              <li
                key={line}
                className="border-l-2 pl-4 text-sm leading-relaxed text-gray-700"
                style={{ borderColor: `${ROVER_ACCENT}55` }}
              >
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-6 border-y border-gray-200 py-8 sm:grid-cols-2">
            {[
              { label: "Role", value: roverMeta.role },
              { label: "When", value: roverMeta.when },
              { label: "Team", value: roverMeta.team },
              { label: "Tools", value: roverMeta.tools },
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
          <BeatHeadline>{roverWhatItIs.headline}</BeatHeadline>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {roverWhatItIs.body}
          </p>
          <p className="mt-6 border-l-2 pl-4 text-sm leading-relaxed text-gray-600"
            style={{ borderColor: `${ROVER_ACCENT}44` }}
          >
            {roverWhatItIs.competitionNote}
          </p>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{roverProblem.label}</SectionLabel>
          <BeatHeadline>{roverProblem.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {roverProblem.body}
          </p>
          <blockquote className="mt-10 border-l-2 pl-6 text-xl font-medium leading-snug tracking-tight text-[#111] md:text-2xl"
            style={{ borderColor: ROVER_ACCENT }}
          >
            {roverProblem.question}
          </blockquote>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{roverApproach.label}</SectionLabel>
          <BeatHeadline>{roverApproach.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {roverApproach.body}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {roverApproach.gallery.map((item) => (
              <div key={item.file}>
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <ProjectImage
                    src={`${ROVER_ASSET_BASE}/${item.file}`}
                    alt={item.caption ?? item.file}
                    placeholderLabel={item.caption ?? item.file}
                    accent={ROVER_ACCENT}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                {item.caption && (
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    {item.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{roverComparison.label}</SectionLabel>
          <BeatHeadline>{roverComparison.headline}</BeatHeadline>
          <ConceptCompare
            left={roverComparison.left}
            right={roverComparison.right}
          />
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{roverDecision.label}</SectionLabel>
          <BeatHeadline>{roverDecision.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {roverDecision.body}
          </p>
          <p className="mt-6 text-base font-medium leading-relaxed text-[#111]">
            {roverDecision.outcome}
          </p>
          <button
            type="button"
            onClick={() => setEvaluationOpen((open) => !open)}
            className="mt-8 flex w-full items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50"
            aria-expanded={evaluationOpen}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-600">
              {roverDecision.detail.summaryLabel}
            </span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-gray-500 transition-transform ${evaluationOpen ? "rotate-180" : ""}`}
            />
          </button>
          {evaluationOpen && (
            <div className="mt-4 space-y-6 rounded-lg border border-gray-200 bg-white p-6">
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <ProjectImage
                  src={`${ROVER_ASSET_BASE}/${roverDecision.detail.image}`}
                  alt={roverDecision.detail.caption}
                  placeholderLabel={roverDecision.detail.caption}
                  accent={ROVER_ACCENT}
                  className="aspect-[16/10] w-full object-contain"
                />
              </div>
              <p className="text-xs leading-relaxed text-gray-600">
                {roverDecision.detail.caption}
              </p>
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  {roverDecision.detail.ergonomicLabel}
                </p>
                <div className="aspect-video overflow-hidden rounded-lg border border-gray-200">
                  <iframe
                    title={roverDecision.detail.ergonomicLabel}
                    src={roverDecision.detail.ergonomicVideo}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{roverFabrication.label}</SectionLabel>
          <BeatHeadline>{roverFabrication.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {roverFabrication.body}
          </p>
          <RoverProcessStages stages={roverFabrication.stages} />
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{roverResult.label}</SectionLabel>
          <BeatHeadline>{roverResult.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {roverResult.body}
          </p>
          <MediaSlideCarousel
            slides={roverResult.slides}
            assetBase={ROVER_ASSET_BASE}
            alt="Rover result"
            accent={ROVER_ACCENT}
          />
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{roverWhyDesign.label}</SectionLabel>
          <BeatHeadline>{roverWhyDesign.headline}</BeatHeadline>
          <div className="mt-6 space-y-4">
            {roverWhyDesign.beats.map((beat) => (
              <p key={beat} className="text-base leading-relaxed text-gray-700">
                {beat}
              </p>
            ))}
          </div>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-gray-500">
            Next steps
          </p>
          <p className="mt-2 text-base leading-relaxed text-gray-700">
            {roverWhyDesign.nextSteps}
          </p>
        </FadeUp>

        <FadeUp className="mt-16 border-t border-gray-200 pt-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
            {roverReference.label}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-gray-500">
            {roverReference.text}{" "}
            <a
              href={roverReference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-300 underline-offset-2 transition-colors hover:text-gray-800"
            >
              Official HERC site
            </a>
          </p>
        </FadeUp>
      </article>

      <Footer />
    </div>
  );
}
