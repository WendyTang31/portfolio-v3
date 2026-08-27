import { useEffect, useState } from "react";
import { ALIAS_ACCENT, ALIAS_ASSET_BASE } from "../../data/alias";

type AliasMediaProps = {
  file: string;
  caption: string;
  alt: string;
  kind?: "image" | "video" | "film";
  dark?: boolean;
  aspect?: string;
  poster?: string;
  fit?: "cover" | "contain";
};

function SlotFallback({
  file,
  caption,
  dark,
  className,
}: {
  file: string;
  caption: string;
  dark: boolean;
  className: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border border-dashed px-4 text-center ${
        dark
          ? "border-white/15 bg-[#141416] text-white/45"
          : "border-gray-300 bg-gray-100/70 text-gray-500"
      } ${className}`}
    >
      <span className="alias-mono text-[10px] uppercase tracking-[0.16em]">{file}</span>
      <span className="max-w-[36ch] text-[11px] leading-relaxed">{caption}</span>
    </div>
  );
}

export function AliasMedia({
  file,
  caption,
  alt,
  kind = "image",
  dark = false,
  aspect = "aspect-[16/10]",
  poster,
  fit = "cover",
}: AliasMediaProps) {
  const [failed, setFailed] = useState(false);
  const src = `${ALIAS_ASSET_BASE}/${file.split("/").map(encodeURIComponent).join("/")}`;
  const posterSrc = poster
    ? `${ALIAS_ASSET_BASE}/${poster.split("/").map(encodeURIComponent).join("/")}`
    : undefined;
  const objectFit = fit === "contain" ? "object-contain bg-white" : "object-cover";

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    return <SlotFallback file={file} caption={caption} dark={dark} className={`${aspect} w-full`} />;
  }

  if (kind === "video" || kind === "film") {
    return (
      <video
        src={src}
        poster={posterSrc}
        aria-label={alt}
        className={`${aspect} w-full ${objectFit} ${dark ? "alias-band" : ""}`}
        autoPlay={kind !== "film"}
        muted
        loop={kind !== "film"}
        playsInline
        preload={kind === "film" ? "metadata" : "auto"}
        controls={kind === "film"}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${aspect} w-full ${objectFit}`}
      onError={() => setFailed(true)}
      style={{ backgroundColor: `${ALIAS_ACCENT}12` }}
    />
  );
}
