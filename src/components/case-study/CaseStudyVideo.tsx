import { useState } from "react";
import { PlaceholderImage } from "../PlaceholderImage";
import { ProjectImage } from "../ProjectImage";

type CaseStudyVideoProps = {
  src: string;
  poster?: string;
  label: string;
  accent?: string;
  className?: string;
  controls?: boolean;
};

export function CaseStudyVideo({
  src,
  poster,
  label,
  accent = "#3b4650",
  className = "aspect-[16/10] w-full object-cover",
  controls = false,
}: CaseStudyVideoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    if (poster) {
      return (
        <ProjectImage
          src={poster}
          alt={label}
          placeholderLabel={label}
          accent={accent}
          className={className}
        />
      );
    }

    return (
      <PlaceholderImage
        label={label}
        accent={accent}
        className={`flex items-center justify-center border border-dashed border-gray-300 ${className}`}
      />
    );
  }

  return (
    <video
      src={src}
      poster={poster}
      className={className}
      autoPlay={!controls}
      muted
      loop={!controls}
      playsInline
      controls={controls}
      onError={() => setFailed(true)}
    />
  );
}
