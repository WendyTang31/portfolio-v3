import { aliasLiquid } from "../../data/alias";

function MitosisDemo() {
  return (
    <div className="alias-blob-stage alias-demo-mitosis aspect-[4/3] w-full" aria-hidden>
      <div className="alias-blob alias-blob-a" />
      <div className="alias-blob alias-blob-b" />
    </div>
  );
}

function InkDemo() {
  return (
    <div className="alias-blob-stage alias-demo-ink aspect-[4/3] w-full" aria-hidden>
      <div className="alias-blob alias-blob-a" />
      <div className="alias-blob alias-blob-b" />
      <div className="alias-blob alias-blob-c" />
    </div>
  );
}

function WaveDemo() {
  return (
    <div className="alias-blob-stage alias-demo-wave aspect-[4/3] w-full" aria-hidden>
      <div className="alias-blob alias-blob-a" />
    </div>
  );
}

const demos = {
  mitosis: MitosisDemo,
  ink: InkDemo,
  wave: WaveDemo,
};

export function LiquidTriptych() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {aliasLiquid.triptych.map((card) => {
        const Demo = demos[card.demo];
        return (
          <article key={card.title}>
            <Demo />
            <p className="alias-mono mt-4 text-[10px] uppercase tracking-[0.18em] text-[var(--glow)]">
              {card.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--dark-ink)]/80">{card.line}</p>
            <p className="alias-caption mt-2 text-[var(--dark-ink)]/40">
              {card.file} — drop in a grow-loop clip to replace the CSS demo
            </p>
          </article>
        );
      })}
    </div>
  );
}

export function LiquidPrinciple() {
  return (
    <div className="relative overflow-hidden py-16 text-center md:py-24">
      <div className="alias-principle-glow pointer-events-none absolute inset-0" />
      <p className="alias-h1 relative text-[var(--glow)]">{aliasLiquid.principleZh}</p>
      <p className="alias-h2 relative mt-6 italic text-[var(--dark-ink)]">
        {aliasLiquid.principleEn}
      </p>
    </div>
  );
}
