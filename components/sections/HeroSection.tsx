'use client';

import { motion } from 'framer-motion';
import { ADDRESS, PHONE_HREF, PHONE_NUMBER } from '@/lib/constants';

/** Number of stacked slabs drawn in the decorative hero artwork. */
const SLAB_COUNT = 7;

/** Opening screen: headline, call to action and the CSS-drawn slab stack. */
export function HeroSection() {
  return (
    <motion.header
  className="hero"
  id="top"
  initial={false}
  animate="visible">
      <div className="wrap hero-inner">
        <motion.div
          className="hero-copy"
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <p className="eyebrow">
            <span /> Stone for generations
          </p>
          <h1>Bring the warmth of Rajasthan to your home.</h1>
          <p className="hero-description">
            Red sandstone, granite and tiles, selected with care at our yard on Madhavapur Road,
            Pata.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={PHONE_HREF}>
              Call {PHONE_NUMBER}
            </a>
            <a className="button button-outline" href="#products">
              Explore our stone
            </a>
          </div>
          <p className="hero-location">
            {ADDRESS.locality} <span>·</span> {ADDRESS.region}
          </p>
        </motion.div>

        <motion.div
          className="hero-art"
          aria-hidden="true"
          variants={{
            hidden: { opacity: 0, scale: 0.94, x: 18 },
            visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9 } },
          }}
        >
          <div className="stone-mark">SM</div>
          <div className="stack">
            {Array.from({ length: SLAB_COUNT }, (_, index) => (
              <div className="slab" key={index} />
            ))}
          </div>
          <span className="art-caption">Made by nature. Chosen by you.</span>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#products">
        Discover our collection <span>↓</span>
      </a>
    </motion.header>
  );
}
