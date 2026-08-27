import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import "../alias.css";
import { Footer } from "../components/Footer";
import { ProjectNav } from "../components/case-study/ProjectNav";
import { AliasMedia } from "../components/alias/AliasMedia";
import { LiquidStudio } from "../components/alias/LiquidPixel";
import { MediaSlideCarousel } from "../components/rover/MediaSlideCarousel";
import {
  ALIAS_ACCENT,
  ALIAS_ASSET_BASE,
  aliasMetaDoc,
  aliasHero,
  aliasMask,
  aliasStatement,
  aliasNature,
  aliasMarket,
  aliasResearch,
  aliasLiquid,
  aliasScenarios,
  aliasMaking,
  aliasClose,
  aliasCredits,
} from "../data/alias";

function FadeUp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AliasCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = aliasMetaDoc.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? "";
    meta?.setAttribute("content", aliasMetaDoc.description);
    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <div className="alias-page min-h-screen">
      <section className="relative h-[100svh] w-full overflow-hidden bg-[var(--dark)]">
        <AliasMedia
          file="hero-short.mp4"
          caption={aliasHero.videoCaption}
          alt={aliasHero.videoCaption}
          kind="video"
          dark
          aspect="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />

        <Link
          to="/#work"
          className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/55 px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/75 md:left-16 md:top-8"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          Back to Work
        </Link>

        <nav className="absolute right-6 top-6 z-10 hidden items-center gap-6 md:right-16 md:top-8 md:flex">
          {[
            { label: "Home", to: "/" },
            { label: "Work", to: "/#work" },
            { label: "Contact", to: "/contact" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="alias-mono text-[10px] uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-16 left-6 max-w-4xl text-[var(--dark-ink)] md:left-16">
          <p className="alias-mono text-[10px] uppercase tracking-[0.2em] text-[var(--glow)]">
            {aliasHero.eyebrow}
          </p>
          <h1 className="alias-h1 alias-grow-in mt-4 text-[var(--glow)]">{aliasHero.h1}</h1>
          <p className="alias-body mt-5 max-w-xl text-[var(--dark-ink)]/85">{aliasHero.subline}</p>
          <p className="alias-mono mt-6 text-[10px] uppercase tracking-[0.16em] text-white/55">
            {aliasHero.meta}
          </p>
        </div>

        <p className="alias-mono absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-white/55">
          Scroll
        </p>
      </section>

      <section className="alias-section">
        <div className="alias-wrap">
          <FadeUp>
            <AliasMedia
              file={aliasMask.imageFile}
              caption={aliasMask.imageAlt}
              alt={aliasMask.imageAlt}
              aspect="w-full"
              fit="contain"
            />
          </FadeUp>
          <FadeUp className="mt-10">
            <p className="alias-h2 italic">{aliasMask.epigraph}</p>
            <p className="alias-body mt-8 text-[var(--ink-soft)]">{aliasMask.p1}</p>
            <p className="alias-body mt-5 text-[var(--ink-soft)]">{aliasMask.p2}</p>
          </FadeUp>
        </div>
      </section>

      <section className="alias-dark px-[var(--gutter)] py-16 md:py-20">
        <div className="alias-wrap grid gap-10 md:grid-cols-3">
          {aliasMask.stats.map((stat) => (
            <div key={stat.value}>
              <p className="alias-h1 text-[var(--glow)]">{stat.value}</p>
              <p className="alias-mono mt-3 text-[11px] uppercase leading-relaxed tracking-[0.14em] text-[var(--dark-ink)]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="alias-section">
        <FadeUp className="alias-wrap">
          <h2 className="alias-h2">{aliasMask.wall}</h2>
        </FadeUp>
      </section>

      <section className="alias-dark alias-section">
        <FadeUp className="alias-wrap text-center">
          <p className="alias-mono text-[10px] uppercase tracking-[0.18em] text-[var(--glow)]">
            {aliasStatement.h2}
          </p>
          <p className="alias-statement-copy mx-auto mt-5 max-w-2xl">{aliasStatement.copy}</p>
        </FadeUp>
      </section>

      <section className="alias-section">
        <div className="alias-wrap">
          <FadeUp>
            <div className="alias-pair">
              <article>
                <h2 className="alias-pair-title">{aliasNature.h2}</h2>
                <p className="alias-pair-body">{aliasNature.body}</p>
                <div className="mt-4">
                  <AliasMedia
                    file={aliasNature.image}
                    caption={aliasNature.imageAlt}
                    alt={aliasNature.imageAlt}
                    aspect="w-full"
                    fit="contain"
                  />
                </div>
              </article>
              <article>
                <h2 className="alias-pair-title">{aliasMarket.h2}</h2>
                <p className="alias-pair-body">{aliasMarket.gap}</p>
                <div className="mt-4">
                  <AliasMedia
                    file={aliasMarket.image}
                    caption={aliasMarket.imageAlt}
                    alt={aliasMarket.imageAlt}
                    aspect="w-full"
                    fit="contain"
                  />
                </div>
              </article>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="alias-dark px-[var(--gutter)]">
        <FadeUp>
          <figure className="alias-whatif">
            <img
              src={`${ALIAS_ASSET_BASE}/${encodeURIComponent(aliasNature.whatIfImage)}`}
              alt={aliasNature.whatIfAlt}
            />
            <div className="alias-whatif-veil" aria-hidden />
            <p className="alias-whatif-copy">{aliasNature.whatIfCopy}</p>
          </figure>
        </FadeUp>
      </section>

      <section className="alias-section">
        <div className="alias-wrap">
          <FadeUp>
            <h2 className="text-2xl font-semibold tracking-tight md:text-[1.75rem]">{aliasResearch.intro}</h2>
          </FadeUp>

          <FadeUp className="mt-16">
            <p className="alias-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
              {aliasResearch.test1.title}
            </p>
            <p className="alias-body mt-4 text-[var(--ink-soft)]">{aliasResearch.test1.body}</p>
            <div className="mt-8">
              <AliasMedia
                file={aliasResearch.test1.image}
                caption={aliasResearch.test1.summary}
                alt={aliasResearch.test1.summary}
                aspect="w-full"
                fit="contain"
              />
            </div>
            <div className="mt-6">
              <AliasMedia
                file={aliasResearch.test1.photo}
                caption={aliasResearch.test1.photoAlt}
                alt={aliasResearch.test1.photoAlt}
                aspect="w-full"
                fit="contain"
              />
            </div>
            <p className="alias-mono mt-6 text-sm leading-relaxed text-[var(--ink-soft)]">
              {aliasResearch.test1.quote}
            </p>
          </FadeUp>

          <FadeUp className="mt-20">
            <p className="alias-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
              {aliasResearch.test2.title}
            </p>
            <p className="alias-body mt-4 text-[var(--ink-soft)]">{aliasResearch.test2.body}</p>
            <div className="mt-8">
              <AliasMedia
                file={aliasResearch.test2.image}
                caption={aliasResearch.test2.summary}
                alt={aliasResearch.test2.summary}
                aspect="w-full"
                fit="contain"
              />
            </div>
            <div className="mt-6">
              <AliasMedia
                file={aliasResearch.test2.photo}
                caption={aliasResearch.test2.photoAlt}
                alt={aliasResearch.test2.photoAlt}
                aspect="w-full"
                fit="contain"
              />
            </div>
            <p className="mt-8 text-lg font-semibold leading-snug">{aliasResearch.test2.finding}</p>
            <blockquote className="mt-6 border-l-2 border-[var(--accent)] pl-5 text-sm leading-relaxed text-[var(--ink-soft)]">
              {aliasResearch.test2.direction}
            </blockquote>
          </FadeUp>

          <FadeUp className="mt-20">
            <p className="alias-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
              {aliasResearch.test3.title}
            </p>
            <p className="alias-body mt-4 text-[var(--ink-soft)]">{aliasResearch.test3.body}</p>
            <div className="mt-8">
              <AliasMedia
                file={aliasResearch.test3.systemsMap}
                caption={aliasResearch.test3.systemsMapAlt}
                alt={aliasResearch.test3.systemsMapAlt}
                aspect="w-full"
                fit="contain"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                {
                  file: aliasResearch.test3.clipA,
                  label: aliasResearch.test3.clipALabel,
                  alt: aliasResearch.test3.clipAAlt,
                  footnote: aliasResearch.test3.clipAFootnote,
                },
                {
                  file: aliasResearch.test3.clipB,
                  label: aliasResearch.test3.clipBLabel,
                  alt: aliasResearch.test3.clipBAlt,
                  footnote: aliasResearch.test3.clipBFootnote,
                },
              ].map((clip) => (
                <figure key={clip.file} className="min-w-0">
                  <p className="alias-mono mb-2 text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                    {clip.label}
                  </p>
                  <AliasMedia
                    file={clip.file}
                    caption={clip.alt}
                    alt={clip.alt}
                    kind="video"
                    aspect="aspect-video"
                    fit="contain"
                  />
                  <figcaption className="alias-caption mt-2">{clip.footnote}</figcaption>
                </figure>
              ))}
            </div>
            <p className="alias-body mt-10 text-[var(--ink-soft)]">{aliasResearch.test3.finding}</p>
          </FadeUp>
        </div>
      </section>

      <section className="alias-dark alias-section">
        <div className="alias-wrap">
          <FadeUp>
            <h2 className="alias-h2 text-[var(--glow)]">{aliasLiquid.h2}</h2>
            <p className="alias-body mt-6 text-[var(--dark-ink)]/80">{aliasLiquid.intro}</p>
          </FadeUp>
          <FadeUp className="mt-12 flex justify-center">
            <div className="w-full max-w-[34rem]">
              <AliasMedia
                file={aliasLiquid.file}
                caption={aliasLiquid.alt}
                alt={aliasLiquid.alt}
                kind="video"
                dark
                aspect="w-full"
              />
            </div>
          </FadeUp>
          <FadeUp>
            <LiquidStudio />
          </FadeUp>
        </div>
      </section>

      <section className="alias-dark alias-section">
        <div className="alias-wrap space-y-16">
          {aliasScenarios.map((scene) => (
            <FadeUp key={scene.file}>
              <p className="alias-mono text-[10px] uppercase tracking-[0.18em] text-[var(--glow)]">
                {scene.label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold md:text-3xl">{scene.title}</h3>
              <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-[var(--dark-ink)]/75">
                {scene.caption}
              </p>
              <div className="mt-6 overflow-hidden">
                <AliasMedia
                  file={scene.file}
                  caption={scene.caption}
                  alt={scene.alt}
                  dark
                  aspect="aspect-video"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="alias-section">
        <div className="alias-wrap">
          <FadeUp>
            <h2 className="alias-h2">{aliasMaking.h2}</h2>
            <div className="mt-8">
              <AliasMedia
                file={aliasMaking.video}
                caption={aliasMaking.videoAlt}
                alt={aliasMaking.videoAlt}
                kind="video"
                aspect="w-full"
              />
            </div>
            <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
              <AliasMedia
                file={aliasMaking.worksLike.file}
                caption={aliasMaking.worksLike.alt}
                alt={aliasMaking.worksLike.alt}
                kind="video"
                aspect="w-full"
              />
              <AliasMedia
                file={aliasMaking.looksLike.file}
                caption={aliasMaking.looksLike.alt}
                alt={aliasMaking.looksLike.alt}
                aspect="w-full"
                fit="contain"
              />
            </div>
            <h2 className="alias-h2 mt-16">{aliasMaking.process.h2}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {aliasMaking.process.pair.map((shot) => (
                <AliasMedia
                  key={shot.file}
                  file={shot.file}
                  caption={shot.alt}
                  alt={shot.alt}
                  aspect="w-full"
                />
              ))}
            </div>
            <MediaSlideCarousel
              slides={aliasMaking.process.slides}
              assetBase={ALIAS_ASSET_BASE}
              alt={aliasMaking.process.h2}
              accent={ALIAS_ACCENT}
            />
          </FadeUp>
        </div>
      </section>

      <section className="alias-dark alias-section">
        <FadeUp className="alias-wrap text-center">
          <p className="alias-body mx-auto text-[var(--dark-ink)]/80">{aliasClose.body}</p>
          <p className="alias-h1 alias-grow-in mt-12 text-[var(--glow)]">{aliasClose.final}</p>
          <p className="alias-mono mx-auto mt-8 max-w-xl text-[11px] leading-relaxed tracking-[0.04em] text-[var(--dark-ink)]/50">
            {aliasClose.epigraph}
          </p>
        </FadeUp>
      </section>

      <section className="alias-section">
        <FadeUp className="alias-wrap grid gap-8 text-sm leading-relaxed text-[var(--ink-soft)] md:grid-cols-2">
          <div>
            <p className="alias-mono text-[10px] uppercase tracking-[0.16em]">Role</p>
            <p className="mt-2 text-[var(--ink)]">{aliasCredits.role}</p>
          </div>
          <div>
            <p className="alias-mono text-[10px] uppercase tracking-[0.16em]">Team</p>
            <p className="mt-2 text-[var(--ink)]">{aliasCredits.team}</p>
          </div>
          <div>
            <p className="alias-mono text-[10px] uppercase tracking-[0.16em]">Studio</p>
            <p className="mt-2 text-[var(--ink)]">{aliasCredits.studio}</p>
          </div>
          <div>
            <p className="alias-mono text-[10px] uppercase tracking-[0.16em]">Year · Exhibited</p>
            <p className="mt-2 text-[var(--ink)]">
              {aliasCredits.year} · {aliasCredits.exhibited}
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="alias-mono text-[10px] uppercase tracking-[0.16em]">Tools</p>
            <p className="mt-2 text-[var(--ink)]">{aliasCredits.tools}</p>
          </div>
        </FadeUp>

        <ProjectNav slug="alias" variant="alias" className="alias-wrap mt-16" />
      </section>

      <Footer />
    </div>
  );
}
