import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { ProcessSlide } from "../../data/birdbot";

const SLIDE_INTERVAL_MS = 5000;

type ProcessSlideCarouselProps = {
  slides: ProcessSlide[];
  alt: string;
};

export function ProcessSlideCarousel({ slides, alt }: ProcessSlideCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];
  const hasMultipleSlides = slides.length > 1;

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    if (!hasMultipleSlides) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [hasMultipleSlides, activeIndex, slides.length]);

  return (
    <div className="relative mt-6 overflow-hidden rounded-lg border border-gray-200">
      <div className="relative aspect-[4/3] w-full bg-white md:aspect-[16/10]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeIndex}-${activeSlide.file}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {activeSlide.type === "image" ? (
              <img
                src={`/projects/birdbot/${activeSlide.file}`}
                alt={alt}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <video
                key={activeSlide.file}
                src={`/projects/birdbot/${activeSlide.file}`}
                poster={
                  activeSlide.poster
                    ? `/projects/birdbot/${activeSlide.poster}`
                    : undefined
                }
                className="max-h-full max-w-full object-contain"
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </motion.div>
        </AnimatePresence>

        {hasMultipleSlides && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-[#111]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-[#111]"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>
      <div className="border-t border-gray-200 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
        <span className="text-gray-800">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="text-gray-300"> / </span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
