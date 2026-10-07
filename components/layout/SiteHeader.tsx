'use client';

import { motion } from 'framer-motion';
import type { Theme } from '@/types';
import { navLinks, visitLink } from '@/data/site';
import { Brand } from '@/components/ui/Brand';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

type SiteHeaderProps = {
  /** The colour scheme currently in use. */
  theme: Theme;
  /** Switches to the other colour scheme. */
  onToggleTheme: () => void;
};

/** Fixed navigation bar with the wordmark, in-page links and theme toggle. */
export function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  return (
    <motion.nav
      className="site-nav"
      aria-label="Main navigation"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 0.68, 0, 1] }}
    >
      <div className="wrap nav-inner">
        <Brand theme={theme}   />

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href={visitLink.href}>
            {visitLink.label}
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </motion.nav>
  );
}
