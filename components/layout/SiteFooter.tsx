'use client';

import { motion } from 'framer-motion';
import { ADDRESS, SITE_NAME, SITE_TAGLINE } from '@/lib/constants';
import { Brand } from '@/components/ui/Brand';

/** Slim footer with the wordmark, tagline and copyright line. */
export function SiteFooter() {
  return (
    <motion.footer
      className="site-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="wrap footer-inner">
        <Brand />
        <p>{SITE_TAGLINE}</p>
        <span>
          © {new Date().getFullYear()} {SITE_NAME} · {ADDRESS.footerLabel}
        </span>
      </div>
    </motion.footer>
  );
}
