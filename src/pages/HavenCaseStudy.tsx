import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, HeartHandshake, Radar, ToggleRight } from "lucide-react";
import {
  HAVEN_ACCENT,
  HAVEN_ASSET_BASE,
  havenDirection,
  havenExisting,
  havenExploded,
  havenFeatures,
  havenForm,
  havenHero,
  havenInterviews,
  havenMeta,
  havenNeeds,
  havenOpening,
  havenRendering,
  havenStats,
  havenVision,
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

function FeatureIcon({ type }: { type: "radar" | "toggle" | "heart" }) {
  const Icon =
    type === "radar" ? Radar : type === "toggle" ? ToggleRight : HeartHandshake;
  return (
    <div
      className="flex h-11 w-11 items-center justify-center rounded-full"
      style={{ backgroundColor: "#c17a5a" }}
      aria-hidden
    >
      <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
    </div>
  );
}

function Media({
  file,
  alt,
  type = "image",
  fit = false,
  aspect = "aspect-[16/10]",
  object = "object-cover",
}: {
  file: string;
  alt: string;
  type?: "image" | "video";
  fit?: boolean;
  aspect?: string;
  object?: string;
}) {
  const src = `${HAVEN_ASSET_BASE}/${file}`;
  const containerClass = fit
    ? "mt-8 overflow-hidden rounded-lg border border-gray-200 bg-[#fcfcfc]"
    : `mt-8 overflow-hidden bg-black ${aspect}`;
  const mediaClass = fit ? "w-full h-auto object-contain" : `h-full w-full ${object}`;

  return (
    <div className={containerClass}>
      {type === "video" ? (
        <video
          src={src}
          className={mediaClass}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
        />
      ) : (
        <ProjectImage
          src={src}
          alt={alt}
          placeholderLabel={file}
          accent={HAVEN_ACCENT}
          className={mediaClass}
        />
      )}
    </div>
  );
}

function FitGridImage({
  file,
  alt,
  caption,
}: {
  file: string;
  alt: string;
  caption?: string;
}) {
  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-[#fcfcfc]">
        <ProjectImage
          src={`${HAVEN_ASSET_BASE}/${file}`}
          alt={alt}
          placeholderLabel={file}
          accent={HAVEN_ACCENT}
          className="w-full h-auto object-contain"
        />
      </div>
      {caption && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-gray-500">
          {caption}
        </p>
      )}
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
          placeholderLabel="environment.png"
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

        {/* Context */}
        <FadeUp className="mt-20">
          <SectionLabel>{havenOpening.label}</SectionLabel>
          <div className="mt-6 max-w-2xl space-y-4">
            {havenOpening.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-gray-700 md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenStats.label}</SectionLabel>
          <Media file={havenStats.image} alt={havenStats.imageCaption} fit />
        </FadeUp>

        {/* Existing devices */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenExisting.label}</SectionLabel>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {havenExisting.body}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
            {havenExisting.formNote}
          </p>
          <Media file={havenExisting.image} alt="Existing monitoring devices" fit />
        </FadeUp>

        {/* Vision */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenVision.label}</SectionLabel>
          <p
            className="mt-6 max-w-2xl border-l-2 pl-5 text-xl font-medium leading-snug text-[#111] md:text-2xl"
            style={{ borderColor: HAVEN_ACCENT }}
          >
            {havenVision.body}
          </p>
          <Media file={havenVision.image} alt="Haven vision" fit />
        </FadeUp>

        {/* Interviews */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenInterviews.label}</SectionLabel>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            {havenInterviews.intro}
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {[havenInterviews.caregivers, havenInterviews.seniors].map((group) => (
              <div key={group.title}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  {group.title}
                </p>
                <div className="relative mt-4 overflow-hidden rounded-lg border border-gray-200 bg-[#fcfcfc] px-6 py-8 min-h-[280px]">
                  <ProjectImage
                    src={`${HAVEN_ASSET_BASE}/${group.image}`}
                    alt=""
                    placeholderLabel={group.image}
                    accent={HAVEN_ACCENT}
                    className="pointer-events-none absolute inset-0 m-auto h-auto w-full max-w-[220px] object-contain opacity-20"
                  />
                  <ul className="relative z-10 space-y-4">
                    {group.quotes.map((quote) => (
                      <li
                        key={quote}
                        className="text-sm italic leading-relaxed text-gray-800"
                      >
                        “{quote}”
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Needs */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenNeeds.label}</SectionLabel>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                Caregiver
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                {havenNeeds.caregiver}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                Senior
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                {havenNeeds.senior}
              </p>
            </div>
          </div>
          <p
            className="mt-10 max-w-2xl border-l-2 pl-5 text-lg font-medium leading-snug text-[#111] md:text-xl"
            style={{ borderColor: HAVEN_ACCENT }}
          >
            {havenNeeds.thesis}
          </p>
        </FadeUp>

        {/* Features */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenFeatures.label}</SectionLabel>
          <div className="mt-10 grid items-stretch gap-10 md:grid-cols-3">
            {havenFeatures.items.map((item) => (
              <div key={item.title} className="flex h-full flex-col">
                <FeatureIcon type={item.icon} />
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#111]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {item.body}
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-[#f4f4f2]">
                  <video
                    src={`${HAVEN_ASSET_BASE}/${item.video}`}
                    className="aspect-[9/19] w-full object-cover object-top"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={item.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Form / style */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenForm.label}</SectionLabel>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700">
            {havenForm.body}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {havenForm.images.map((img) => (
              <FitGridImage
                key={img.file}
                file={img.file}
                alt={img.caption}
                caption={img.caption}
              />
            ))}
          </div>
        </FadeUp>

        {/* Direction */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenDirection.label}</SectionLabel>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700">
            {havenDirection.body}
          </p>
          <Media file={havenDirection.image} alt="Four design directions" fit />
        </FadeUp>

        {/* Exploded */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenExploded.label}</SectionLabel>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600">
            {havenExploded.body}
          </p>
          <Media file={havenExploded.image} alt="Exploded view placeholder" fit />
        </FadeUp>

        {/* Rendering */}
        <FadeUp className="mt-24">
          <SectionLabel>{havenRendering.label}</SectionLabel>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {havenRendering.images.map((img) => (
              <FitGridImage
                key={img.file}
                file={img.file}
                alt={img.caption}
                caption={img.caption}
              />
            ))}
          </div>
          <div className="mt-6">
            <FitGridImage
              file={havenRendering.fullWidth.file}
              alt={havenRendering.fullWidth.caption}
              caption={havenRendering.fullWidth.caption}
            />
          </div>
        </FadeUp>
      </article>

      <Footer />
    </div>
  );
}
