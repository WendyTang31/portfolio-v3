import { useEffect } from "react";
import { X } from "lucide-react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
};

export function ImageLightbox({ src, alt, caption, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        aria-label="Close"
      >
        <X size={20} />
      </button>
      <div
        className="flex max-h-[90vh] max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[80vh] max-w-full object-contain"
        />
        {caption && (
          <p className="mt-4 max-w-xl text-center text-sm leading-relaxed text-white/80">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
