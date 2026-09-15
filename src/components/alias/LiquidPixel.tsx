import { aliasLiquid } from "../../data/alias";
import { AliasMedia } from "./AliasMedia";

export function LiquidStudio() {
  return (
    <div className="mt-16">
      <p className="alias-body text-[var(--dark-ink)]/80">
        {aliasLiquid.studioBefore}
        <span className="alias-ai-mark">{aliasLiquid.studioEmphasis}</span>
        {aliasLiquid.studioAfter}
      </p>
      <p className="alias-body mt-5">
        <a
          href={aliasLiquid.liveHref}
          target="_blank"
          rel="noopener noreferrer"
          className="alias-link"
        >
          {aliasLiquid.liveLabel}
        </a>
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {aliasLiquid.tools.map((tool) => (
          <figure key={tool.file}>
            <AliasMedia
              file={tool.file}
              caption={tool.footnote}
              alt={tool.alt}
              dark
              aspect="w-full"
            />
            <figcaption className="alias-caption mt-3 text-[var(--dark-ink)]/45">
              {tool.footnote}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
