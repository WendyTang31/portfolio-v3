import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ProjectImage } from "../ProjectImage";

type ProcessThumbStripProps = {
  label: string;
  summaryLabel: string;
  intro: string;
  thumbs: string[];
  assetBase: string;
  accent: string;
};

export function ProcessThumbStrip({
  label,
  summaryLabel,
  intro,
  thumbs,
  assetBase,
  accent,
}: ProcessThumbStripProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
        {label}
      </p>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50"
        aria-expanded={open}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-gray-600">
          {summaryLabel}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="mt-4 rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-sm leading-relaxed text-gray-700">{intro}</p>
          <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
            {thumbs.map((file) => (
              <div
                key={file}
                className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-gray-200"
              >
                <ProjectImage
                  src={`${assetBase}/${file}`}
                  alt={file}
                  placeholderLabel={file}
                  accent={accent}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
