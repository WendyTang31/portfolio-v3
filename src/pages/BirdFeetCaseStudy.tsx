import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import {
  BIRD_FEET_ACCENT,
  BIRD_FEET_ASSET_BASE,
  birdFeetBiomech,
  birdFeetDesignChallenges,
  birdFeetFieldChallenges,
  birdFeetHero,
  birdFeetMeta,
  birdFeetNature,
  birdFeetProcess,
  birdFeetResult,
} from "../data/birdFeet";
import { ProjectImage } from "../components/ProjectImage";
import { MediaSlideCarousel } from "../components/rover/MediaSlideCarousel";
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

export function BirdFeetCaseStudy() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <section className="relative h-[100svh] w-full overflow-hidden bg-black">
        <ProjectImage
          src={birdFeetHero.image}
          alt={birdFeetHero.title}
          placeholderLabel="ps-scene.png"
          accent={BIRD_FEET_ACCENT}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

        <Link
          to="/#work"
          className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/55 px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/75 md:left-16 md:top-8"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          Back to Work
        </Link>

        <div className="absolute bottom-16 left-6 text-white md:left-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">
            {birdFeetHero.kicker}
          </p>
          <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
            {birdFeetHero.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">{birdFeetHero.tagline}</p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
          Scroll
        </div>
      </section>

      <article className="mx-auto w-full max-w-[1600px] px-6 pb-20 md:px-10 lg:px-16">
        <FadeUp className="mt-20">
          <div className="grid gap-6 border-y border-gray-200 py-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { label: "Role", value: birdFeetMeta.role },
              { label: "When", value: birdFeetMeta.when },
              { label: "Tools", value: birdFeetMeta.tools },
              { label: "Context", value: birdFeetMeta.context },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{birdFeetFieldChallenges.label}</SectionLabel>
          <BeatHeadline>{birdFeetFieldChallenges.headline}</BeatHeadline>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {birdFeetFieldChallenges.items.map((item) => (
              <div
                key={item.title}
                className="border-l-2 pl-4"
                style={{ borderColor: `${BIRD_FEET_ACCENT}55` }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-lg border border-gray-200">
            {birdFeetFieldChallenges.images.map((file) => (
              <ProjectImage
                key={file}
                src={`${BIRD_FEET_ASSET_BASE}/${file}`}
                alt={birdFeetFieldChallenges.imageCaption}
                placeholderLabel={file}
                accent={BIRD_FEET_ACCENT}
                className="aspect-[16/10] w-full object-cover"
              />
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-gray-600">
            {birdFeetFieldChallenges.imageCaption}
          </p>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{birdFeetDesignChallenges.label}</SectionLabel>
          <BeatHeadline>{birdFeetDesignChallenges.headline}</BeatHeadline>
          <ul className="mt-8 space-y-5">
            {birdFeetDesignChallenges.items.map((item, index) => (
              <li key={item.title} className="flex gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-base font-medium text-[#111]">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-700">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{birdFeetNature.label}</SectionLabel>
          <BeatHeadline>{birdFeetNature.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">{birdFeetNature.body}</p>
          <div className="mt-8 overflow-hidden rounded-lg border border-gray-200">
            <ProjectImage
              src={`${BIRD_FEET_ASSET_BASE}/${birdFeetNature.image}`}
              alt={birdFeetNature.imageCaption}
              placeholderLabel={birdFeetNature.image}
              accent={BIRD_FEET_ACCENT}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-gray-600">
            {birdFeetNature.imageCaption}
          </p>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{birdFeetBiomech.label}</SectionLabel>
          <BeatHeadline>{birdFeetBiomech.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">{birdFeetBiomech.body}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {birdFeetBiomech.studies.map((study) => (
              <div key={study.file}>
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-black">
                  {study.type === "video" ? (
                    <video
                      className="aspect-[4/3] w-full object-cover"
                      src={`${BIRD_FEET_ASSET_BASE}/${study.file}`}
                      poster={
                        study.poster
                          ? `${BIRD_FEET_ASSET_BASE}/${study.poster}`
                          : undefined
                      }
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                    />
                  ) : (
                    <ProjectImage
                      src={`${BIRD_FEET_ASSET_BASE}/${study.file}`}
                      alt={study.caption}
                      placeholderLabel={study.file}
                      accent={BIRD_FEET_ACCENT}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  )}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-gray-600">{study.caption}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{birdFeetProcess.label}</SectionLabel>
          <BeatHeadline>{birdFeetProcess.headline}</BeatHeadline>
          <div className="mt-12 space-y-16">
            {birdFeetProcess.stages.map((stage) => (
              <div key={stage.n}>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    {stage.n}
                  </span>
                  <h3 className="text-xl font-medium tracking-tight text-[#111] md:text-2xl">
                    {stage.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
                  {stage.body}
                </p>
                {stage.slides && stage.slides.length > 0 ? (
                  <MediaSlideCarousel
                    slides={stage.slides}
                    assetBase={BIRD_FEET_ASSET_BASE}
                    alt={stage.title}
                    accent={BIRD_FEET_ACCENT}
                  />
                ) : (
                  <div
                    className={`mt-6 grid gap-4 ${
                      (stage.media?.length ?? 0) > 2 ? "sm:grid-cols-2" : "md:grid-cols-2"
                    }`}
                  >
                    {(stage.media ?? []).map((item) => (
                      <div key={item.file}>
                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-black">
                          {item.type === "video" ? (
                            <video
                              className="aspect-[4/3] w-full object-cover"
                              src={`${BIRD_FEET_ASSET_BASE}/${item.file}`}
                              autoPlay
                              muted
                              loop
                              playsInline
                              controls
                            />
                          ) : (
                            <ProjectImage
                              src={`${BIRD_FEET_ASSET_BASE}/${item.file}`}
                              alt={item.caption ?? item.file}
                              placeholderLabel={item.file}
                              accent={BIRD_FEET_ACCENT}
                              className="aspect-[4/3] w-full object-cover"
                            />
                          )}
                        </div>
                        {item.caption && (
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            {item.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="mt-20">
          <SectionLabel>{birdFeetResult.label}</SectionLabel>
          <BeatHeadline>{birdFeetResult.headline}</BeatHeadline>
          <p className="mt-6 text-base leading-relaxed text-gray-700">{birdFeetResult.body}</p>
          <MediaSlideCarousel
            slides={birdFeetResult.renders}
            assetBase={BIRD_FEET_ASSET_BASE}
            alt="Bird Feet result render"
            accent={BIRD_FEET_ACCENT}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {birdFeetResult.demos.map((demo) => (
              <div key={demo.file}>
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-black">
                  <video
                    className="aspect-[4/3] w-full object-cover"
                    src={`${BIRD_FEET_ASSET_BASE}/${demo.file}`}
                    poster={`${BIRD_FEET_ASSET_BASE}/${demo.poster}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  {demo.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </article>

      <Footer />
    </div>
  );
}
