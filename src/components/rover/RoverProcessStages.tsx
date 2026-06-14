import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  ROVER_ACCENT,
  ROVER_ASSET_BASE,
  type RoverProcessStage,
} from "../../data/rover";
import { MediaSlideCarousel } from "./MediaSlideCarousel";

type RoverProcessStagesProps = {
  intro?: string;
  stages: RoverProcessStage[];
};

export function RoverProcessStages({ intro, stages }: RoverProcessStagesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {intro && (
        <p className="text-base leading-relaxed text-gray-700">{intro}</p>
      )}
      <div className="mt-8 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
        {stages.map((stage, index) => {
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
                  {stage.slides && stage.slides.length > 0 && (
                    <MediaSlideCarousel
                      slides={stage.slides}
                      assetBase={ROVER_ASSET_BASE}
                      alt={stage.title}
                      accent={ROVER_ACCENT}
                    />
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
