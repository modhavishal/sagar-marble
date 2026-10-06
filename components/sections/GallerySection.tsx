'use client';

import { motion } from 'framer-motion';
import { galleryImages } from '@/data/gallery';

type GallerySectionProps = {
  /** Called with the index of the image the visitor clicked. */
  onOpenImage: (index: number) => void;
};

/** Mosaic of yard photos; each tile opens the shared lightbox. */
export function GallerySection({ onOpenImage }: GallerySectionProps) {
  return (
    <motion.section
      className="section gallery-section"
      id="gallery"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7 }}
    >
      <div className="wrap">
        <div className="section-heading gallery-heading">
          <p className="eyebrow">From our yard</p>
          <h2 className="section-title">See the stone for yourself.</h2>
        </div>

        <div className="gallery">
          {galleryImages.map((image, index) => (
            <motion.figure
              className={`gallery-item gallery-item-${index + 1}`}
              key={image.src}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <button
                type="button"
                className="gallery-trigger"
                onClick={() => onOpenImage(index)}
                aria-label={`View larger image: ${image.caption}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </button>
              <figcaption>{image.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
