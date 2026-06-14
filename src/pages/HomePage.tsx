import { HeroSection } from "../components/HeroSection";
import { WorkGallerySection } from "../components/WorkGallerySection";
import { DarkFeatureSection } from "../components/DarkFeatureSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkGallerySection />
      <DarkFeatureSection />
      <Footer />
    </>
  );
}
