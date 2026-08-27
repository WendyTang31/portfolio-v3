import { aliasLiquid } from "../../data/alias";
import { AliasMedia } from "./AliasMedia";

export function LiquidStudio() {
  return (
    <div className="mt-16">
      <p className="alias-body text-[var(--dark-ink)]/80">{aliasLiquid.studio}</p>
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
