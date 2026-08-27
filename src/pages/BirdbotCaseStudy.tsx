import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import {
  birdbotHero,
  birdbotMeta,
  theInsight,
  theProblem,
  whatItDoesNow,
  birdbotCitation,
  gaitResults,
  birdbotGallery,
  whereItsGoing,
} from "../data/birdbot";
import { ProcessStages } from "../components/birdbot/ProcessStages";
import { ProjectImage } from "../components/ProjectImage";
import { ImageLightbox } from "../components/haven/ImageLightbox";
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

export function BirdbotCaseStudy({ standalone = false }: { standalone?: boolean }) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );

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

        {standalone ? (
          <p className="absolute left-6 top-6 z-10 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80 md:left-16 md:top-8">
            {birdbotHero.title} · Fangzhuo Tang
          </p>
        ) : (
          <Link
            to="/#work"
            className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/55 px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/75 md:left-16 md:top-8"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            Back to Work
          </Link>
        )}

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

      <div className="px-6 pb-20 md:px-12 lg:px-16">
        <article className="mx-auto w-full max-w-[1600px]">
        <FadeUp className="mt-20">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-[#ececec]">
            <ProjectImage
              src={birdbotHero.frontRender}
              alt="BURB bipedal robotic leg, front CAD render"
              placeholderLabel="front.png"
              className="w-full h-auto object-contain"
            />
          </div>
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
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-700">
            {gaitResults.body}
          </p>
          <div className="mt-10 flex justify-center">
            <div className="flex items-stretch gap-3">
              <video
                className="h-auto w-auto max-h-[92vh] max-w-full object-contain"
                src={gaitResults.video}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="flex w-[6.5rem] shrink-0 flex-col justify-around py-[3%]">
                {gaitResults.gaitLabels.map((label, index) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-medium leading-snug tracking-tight text-[#111]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{birdbotGallery.label}</SectionLabel>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                {birdbotGallery.leftLabel}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {birdbotGallery.left.map((item, index) => (
                  <button
                    key={item.file}
                    type="button"
                    onClick={() => setLightbox({ src: item.file, alt: item.alt })}
                    className="overflow-hidden rounded-lg border border-gray-200 bg-[#111] text-left"
                  >
                    <ProjectImage
                      src={item.file}
                      alt={item.alt}
                      placeholderLabel={item.alt}
                      className={`w-full object-cover ${index < 2 ? "aspect-[3/4]" : "aspect-[3/2]"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                {birdbotGallery.rightLabel}
              </p>
              <div className="flex flex-col gap-3">
                {birdbotGallery.right.map((item) => (
                  <button
                    key={item.file}
                    type="button"
                    onClick={() => setLightbox({ src: item.file, alt: item.alt })}
                    className="overflow-hidden rounded-lg border border-gray-200 bg-[#ececec] text-left"
                  >
                    <ProjectImage
                      src={item.file}
                      alt={item.alt}
                      placeholderLabel={item.alt}
                      className="h-auto w-full object-contain"
                    />
                  </button>
                ))}
              </div>
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
      </div>

      <Footer />

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
