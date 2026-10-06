'use client';

import { useCallback, useEffect, useState } from 'react';
import type { Theme } from '@/types';
import { THEME_STORAGE_KEY } from '@/lib/constants';

const isTheme = (value: string | null): value is Theme =>
  value === 'dark' || value === 'light';

const readStoredTheme = (): Theme | null => {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isTheme(stored) ? stored : null;
};

export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';

    return readStoredTheme() ?? 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}