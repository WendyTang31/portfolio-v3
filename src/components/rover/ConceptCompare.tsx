import { ROVER_ACCENT } from "../../data/rover";
import { CaseStudyVideo } from "../case-study/CaseStudyVideo";
import { ProjectImage } from "../ProjectImage";

type CompareSide = {
  name: string;
  video?: string;
  image?: string;
  points: string[];
};

type ConceptCompareProps = {
  left: CompareSide;
  right: CompareSide;
};

function CompareColumn({ side }: { side: CompareSide }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-lg border border-gray-200">
        {side.video ? (
          <CaseStudyVideo
            src={side.video}
            poster={side.image}
            label={`${side.name} — upload test video`}
            accent={ROVER_ACCENT}
            className="aspect-[4/3] w-full object-cover md:aspect-[16/10]"
          />
        ) : (
          <ProjectImage
            src={side.image ?? null}
            alt={side.name}
            placeholderLabel={`${side.name} — upload image`}
            accent={ROVER_ACCENT}
            className="aspect-[4/3] w-full object-cover md:aspect-[16/10]"
          />
        )}
      </div>
      <h3 className="mt-5 text-lg font-medium tracking-tight text-[#111] md:text-xl">
        {side.name}
      </h3>
      <ul className="mt-3 space-y-2">
        {side.points.map((point) => (
          <li
            key={point}
            className="border-l-2 border-gray-200 pl-4 text-sm leading-relaxed text-gray-700"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ConceptCompare({ left, right }: ConceptCompareProps) {
  return (
    <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-8">
      <CompareColumn side={left} />
      <CompareColumn side={right} />
    </div>
  );
}
