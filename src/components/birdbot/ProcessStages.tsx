import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  birdbotProcessIntro,
  birdbotProcessStages,
} from "../../data/birdbot";
import { ProjectImage } from "../ProjectImage";
import { ProcessSlideCarousel } from "./ProcessSlideCarousel";

export function ProcessStages() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <p className="text-base leading-relaxed text-gray-700">
        {birdbotProcessIntro}
      </p>
      <div className="mt-8 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
        {birdbotProcessStages.map((stage, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={stage.n}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50"
                aria-expanded={isOpen}
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    Stage {stage.n}
                  </span>
                  <span className="text-lg font-medium tracking-tight text-[#111]">
                    {stage.title}
                  </span>
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-gray-100 px-6 pb-6 pt-2">
                  <p className="text-sm leading-relaxed text-gray-700">
                    {stage.body}
                  </p>
                  {stage.slides && stage.slides.length > 0 ? (
                    <ProcessSlideCarousel slides={stage.slides} alt={stage.title} />
                  ) : (
                    stage.media && (
                      <div className="mt-6 overflow-hidden rounded-lg border border-gray-200 bg-white">
                        <div className="relative flex aspect-[4/3] w-full items-center justify-center md:aspect-[16/10]">
                          <ProjectImage
                            src={`/projects/birdbot/${stage.media}`}
                            alt={stage.title}
                            placeholderLabel={stage.media}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
