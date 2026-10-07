'use client';

import { motion } from 'framer-motion';
import { ADDRESS, PHONE_HREF, PHONE_NUMBER } from '@/lib/constants';

/** ડેકોરેટિવ hero artwork માં દર્શાવાતા stacked slabs ની સંખ્યા. */
const SLAB_COUNT = 7;

/** શરૂઆતનો સ્ક્રીન: headline, call to action અને CSSથી બનાવેલ slab stack. */
export function HeroSection() {
  return (
    <motion.header
      className="hero"
      id="top"
      initial={false}
      animate="visible"
    >
      <div className="wrap hero-inner">
        <motion.div
          className="hero-copy"
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
        >
          <p className="eyebrow">
            <span /> પેઢીઓ સુધી ટકી રહે તેવો પથ્થર
          </p>

          <h1>રાજસ્થાનની સુંદરતા  તમારા ઘરમાં લાવો.</h1>

          <p className="hero-description">
            માધવાપુર રોડ, પાતા ખાતે અમારા યાર્ડમાં કાળજીપૂર્વક પસંદ કરાયેલ
            લાલ સેન્ડસ્ટોન, ગ્રેનાઈટ અને ટાઇલ્સ.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={PHONE_HREF}>
              કૉલ કરો {PHONE_NUMBER}
            </a>

            <a className="button button-outline" href="#products">
              અમારા પથ્થરો જુઓ
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
            visible: {
              opacity: 1,
              scale: 1,
              x: 0,
              transition: { duration: 0.9 },
            },
          }}
        >
          <div className="stone-mark">SM</div>

          <div className="stack">
            {Array.from({ length: SLAB_COUNT }, (_, index) => (
              <div className="slab" key={index} />
            ))}
          </div>

          <span className="art-caption">
            કુદરતે બનાવ્યું. તમે પસંદ કર્યું.
          </span>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#products">
        અમારો સંગ્રહ જુઓ <span>↓</span>
      </a>
    </motion.header>
  );
}