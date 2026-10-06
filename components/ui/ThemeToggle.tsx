'use client';

import { useEffect, useState } from 'react';
import type { Theme } from '@/types';
import { MoonIcon, SunIcon } from '@/components/ui/icons';

type ThemeToggleProps = {
  /** The scheme currently in use. */
  theme: Theme;
  /** Switches to the other colour scheme. */
  onToggle: () => void;
};

/** Round button in the header that swaps the dark and light colour schemes. */
export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="theme-toggle"
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        <MoonIcon />
      </button>
    );
  }

  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
  const label = `Switch to ${nextTheme} mode`;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

