'use client';

import { MotionConfig } from 'framer-motion';
import { galleryImages } from '@/data/gallery';
import { useTheme } from '@/hooks/use-theme';
import { useLightbox } from '@/hooks/use-lightbox';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { MachinerySection } from '@/components/sections/MachinerySection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Lightbox } from '@/components/ui/Lightbox';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

/**
 * The home page. Owns the two pieces of state shared across sections — the
 * colour scheme and which gallery image is open — and lays the sections out.
 */
export function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const lightbox = useLightbox(galleryImages.length);

  return (
    <MotionConfig reducedMotion="user">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <HeroSection />
        <ProductsSection />
        <MachinerySection />
        <WhyUsSection />
        <GallerySection onOpenImage={lightbox.open} />
        <ContactSection />
      </main>

     <SiteFooter theme={theme} />
      <WhatsAppButton />
      <Lightbox images={galleryImages} controller={lightbox} />
    </MotionConfig>
  );
}
