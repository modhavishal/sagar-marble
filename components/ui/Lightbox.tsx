'use client';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type WheelEvent,
} from 'react';

import type { GalleryImage } from '@/types';
import type { LightboxController } from '@/hooks/use-lightbox';

type LightboxProps = {
  images: GalleryImage[];
  controller: LightboxController;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;

export function Lightbox({
  images,
  controller,
}: LightboxProps) {
  const {
    activeIndex,
    closeButtonRef,
    close,
    showPrevious,
    showNext,
  } = controller;

  const activeImage =
    activeIndex === null
      ? null
      : images[activeIndex];

  const [zoom, setZoom] = useState(MIN_ZOOM);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isDragging, setIsDragging] =
    useState(false);

  const dragStart = useRef({
    x: 0,
    y: 0,
  });

  const startPosition = useRef({
    x: 0,
    y: 0,
  });

  /* ---------------------------------------------
     RESET WHEN IMAGE CHANGES
  --------------------------------------------- */

  useEffect(() => {
    setZoom(MIN_ZOOM);
    setPosition({
      x: 0,
      y: 0,
    });
  }, [activeIndex]);

  /* ---------------------------------------------
     KEYBOARD
  --------------------------------------------- */

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }

      if (event.key === 'ArrowLeft') {
        showPrevious();
      }

      if (event.key === 'ArrowRight') {
        showNext();
      }

      if (event.key === '+') {
        zoomIn();
      }

      if (event.key === '-') {
        zoomOut();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [
    activeIndex,
    close,
    showPrevious,
    showNext,
  ]);

  /* ---------------------------------------------
     ZOOM IN
  --------------------------------------------- */

  const zoomIn = () => {
    setZoom((current) =>
      Math.min(
        MAX_ZOOM,
        current + ZOOM_STEP
      )
    );
  };

  /* ---------------------------------------------
     ZOOM OUT
  --------------------------------------------- */

  const zoomOut = () => {
    setZoom((current) => {
      const next = Math.max(
        MIN_ZOOM,
        current - ZOOM_STEP
      );

      if (next === MIN_ZOOM) {
        setPosition({
          x: 0,
          y: 0,
        });
      }

      return next;
    });
  };

  /* ---------------------------------------------
     DOUBLE CLICK
  --------------------------------------------- */

  const handleDoubleClick = () => {
    if (zoom > MIN_ZOOM) {
      setZoom(MIN_ZOOM);

      setPosition({
        x: 0,
        y: 0,
      });

      return;
    }

    setZoom(2);
  };

  /* ---------------------------------------------
     MOUSE WHEEL ZOOM
  --------------------------------------------- */

  const handleWheel = (
    event: WheelEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

    if (event.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  /* ---------------------------------------------
     POINTER DOWN
  --------------------------------------------- */

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    if (zoom <= MIN_ZOOM) return;

    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    setIsDragging(true);

    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
    };

    startPosition.current = {
      x: position.x,
      y: position.y,
    };
  };

  /* ---------------------------------------------
     POINTER MOVE
  --------------------------------------------- */

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    if (!isDragging || zoom <= MIN_ZOOM) {
      return;
    }

    const deltaX =
      event.clientX -
      dragStart.current.x;

    const deltaY =
      event.clientY -
      dragStart.current.y;

    setPosition({
      x: startPosition.current.x + deltaX,
      y: startPosition.current.y + deltaY,
    });
  };

  /* ---------------------------------------------
     POINTER UP
  --------------------------------------------- */

  const handlePointerUp = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    setIsDragging(false);

    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    }
  };

  if (!activeImage) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-backdrop"
        role="presentation"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        onMouseDown={(event) => {
          if (
            event.target ===
            event.currentTarget
          ) {
            close();
          }
        }}
      >
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${activeImage.caption}`}
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
          }}
          transition={{
            duration: 0.2,
          }}
        >

          {/* ---------------------------------------
              IMAGE AREA
          --------------------------------------- */}

          <div
            className="lightbox-image-area"
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onDoubleClick={handleDoubleClick}
          >
            <motion.img
              key={activeImage.src}
              className={`lightbox-image ${
                zoom > 1
                  ? 'is-zoomed'
                  : ''
              } ${
                isDragging
                  ? 'is-dragging'
                  : ''
              }`}
              src={activeImage.src}
              alt={activeImage.alt}
              draggable={false}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                scale: zoom,
                x: position.x,
                y: position.y,
              }}
              transition={{
                opacity: {
                  duration: 0.2,
                },
                scale: {
                  duration: 0.25,
                },
                x: {
                  duration: isDragging
                    ? 0
                    : 0.25,
                },
                y: {
                  duration: isDragging
                    ? 0
                    : 0.25,
                },
              }}
            />
          </div>

          {/* ---------------------------------------
              TOP RIGHT CONTROLS
          --------------------------------------- */}

          <div className="lightbox-controls">

            {/* ZOOM OUT */}

            <button
              type="button"
              className="lightbox-control"
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              aria-label="Zoom out"
              title="Zoom out"
            >
              <span className="lightbox-zoom-symbol">
                −
              </span>
            </button>

            {/* ZOOM IN */}

            <button
              type="button"
              className="lightbox-control"
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              aria-label="Zoom in"
              title="Zoom in"
            >
              <span className="lightbox-zoom-symbol">
                +
              </span>
            </button>

            {/* CLOSE */}

            <button
              ref={closeButtonRef}
              type="button"
              className="lightbox-control"
              onClick={close}
              aria-label="Close image viewer"
              title="Close"
            >
              <span className="lightbox-close-symbol">
                ×
              </span>
            </button>

          </div>

          {/* ---------------------------------------
              PREVIOUS
          --------------------------------------- */}

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-previous"
              onClick={showPrevious}
              aria-label="Previous image"
              title="Previous image"
            >
              <span aria-hidden="true">
                ‹
              </span>
            </button>
          )}

          {/* ---------------------------------------
              NEXT
          --------------------------------------- */}

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-next"
              onClick={showNext}
              aria-label="Next image"
              title="Next image"
            >
              <span aria-hidden="true">
                ›
              </span>
            </button>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
