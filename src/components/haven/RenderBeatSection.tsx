import { useState } from "react";
import type { RenderBeat } from "../../data/haven";
import { ProjectImage } from "../ProjectImage";
import { ImageLightbox } from "./ImageLightbox";

type RenderBeatSectionProps = {
  beat: RenderBeat;
  assetBase: string;
  accent: string;
};

type LightboxState = {
  src: string;
  alt: string;
  caption?: string;
};

export function RenderBeatSection({
  beat,
  assetBase,
  accent,
}: RenderBeatSectionProps) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  return (
    <section id={beat.id} className="scroll-mt-24">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
        {beat.id}
      </p>
      <h2 className="text-2xl font-medium tracking-tight text-[#111] md:text-3xl lg:text-4xl">
        {beat.headline}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
        {beat.body}
      </p>

      <div
        className={`mt-8 grid gap-6 ${beat.renders.length > 1 ? "md:grid-cols-2" : ""}`}
      >
        {beat.renders.map((render) => {
          const src = `${assetBase}/${render.file}`;
          const alt = render.caption ?? render.file;

          return (
            <div key={render.file}>
              <button
                type="button"
                onClick={() => setLightbox({ src, alt, caption: render.caption })}
                className="group block w-full overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-[4px_4px_0px_rgba(110,122,100,0.2)]"
              >
                <div className="flex min-h-[40vh] items-center justify-center bg-[#fcfcfc] md:min-h-[55vh]">
                  <ProjectImage
                    src={src}
                    alt={alt}
                    placeholderLabel={render.caption ?? render.file}
                    accent={accent}
                    className="max-h-[55vh] w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              </button>
              {render.caption && (
                <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-gray-500">
                  {render.caption}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          caption={lightbox.caption}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
