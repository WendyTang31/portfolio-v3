import { useEffect, useState } from "react";
import { PlaceholderImage } from "./PlaceholderImage";

type ProjectImageProps = {
  src: string | null;
  alt: string;
  placeholderLabel: string;
  className?: string;
  accent?: string;
};

export function ProjectImage({
  src,
  alt,
  placeholderLabel,
  className = "",
  accent,
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <PlaceholderImage
        label={placeholderLabel}
        className={className}
        accent={accent}
      />
    );
  }

  return (
    <img
      key={src}
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
