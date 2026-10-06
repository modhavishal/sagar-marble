'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/** Focusable controls inside the lightbox, used for the tab trap. */
const FOCUSABLE_SELECTOR = '.lightbox button:not(:disabled)';

export type LightboxController = {
  /** Index of the open image, or null when the lightbox is closed. */
  activeIndex: number | null;
  isOpen: boolean;
  /** Focus lands here when the lightbox opens. */
  closeButtonRef: React.RefObject<HTMLButtonElement>;
  open: (index: number) => void;
  close: () => void;
  showPrevious: () => void;
  showNext: () => void;
};

/**
 * Drives the gallery lightbox: which image is open, stepping forwards and
 * backwards (wrapping around), and the keyboard and focus behaviour that goes
 * with a modal viewer.
 */
export function useLightbox(imageCount: number): LightboxController {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = activeIndex !== null;

  const open = useCallback((index: number): void => {
    setActiveIndex(index);
  }, []);

  const close = useCallback((): void => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback((): void => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + imageCount) % imageCount,
    );
  }, [imageCount]);

  const showNext = useCallback((): void => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % imageCount));
  }, [imageCount]);

  // While the lightbox is open: lock page scroll, move focus into the dialog,
  // wire up Escape and the arrow keys, and keep Tab inside its controls.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();

      if (event.key === 'Tab') {
        const buttons = document.querySelectorAll<HTMLButtonElement>(FOCUSABLE_SELECTOR);
        const firstButton = buttons[0];
        const lastButton = buttons[buttons.length - 1];

        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          lastButton?.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault();
          firstButton?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, close, showPrevious, showNext]);

  return { activeIndex, isOpen, closeButtonRef, open, close, showPrevious, showNext };
}
