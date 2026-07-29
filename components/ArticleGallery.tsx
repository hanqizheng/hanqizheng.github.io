"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Children,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

type ArticleGalleryProps = {
  children: ReactNode;
  labels: {
    previous: string;
    next: string;
    status: string;
  };
};

type GalleryMetrics = {
  center: number;
  step: number;
  slideWidth: number;
};

const AUTOPLAY_DELAY = 7000;

export function ArticleGallery({ children, labels }: ArticleGalleryProps) {
  const slides = useMemo(() => Children.toArray(children), [children]);
  const loopedSlides = slides.length > 1 ? [slides.at(-1), ...slides, slides[0]] : slides;
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const physicalIndexRef = useRef(slides.length > 1 ? 1 : 0);
  const logicalIndexRef = useRef(0);
  const currentXRef = useRef(0);
  const metricsRef = useRef<GalleryMetrics | null>(null);
  const lockedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startTime: 0, baseX: 0, deltaX: 0 });
  const autoplayRemainingRef = useRef(AUTOPLAY_DELAY);
  const autoplayIndexRef = useRef(-1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [autoplayCycle, setAutoplayCycle] = useState(0);
  const galleryStatus = formatGalleryStatus(labels.status, activeIndex + 1, slides.length);

  const setTrackX = useCallback((value: number, cancelAnimation = true) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    if (cancelAnimation) {
      track.getAnimations().forEach((animation) => animation.cancel());
    }

    currentXRef.current = value;
    track.style.transform = `translate3d(${value}px, 0, 0)`;
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track || slides.length === 0) {
      return;
    }

    const measure = () => {
      const items = track.querySelectorAll<HTMLElement>(".article-gallery-item");
      const item = items[0];

      if (!item) {
        return;
      }

      const slideWidth = item.getBoundingClientRect().width;
      const step =
        items.length > 1
          ? items[1].getBoundingClientRect().left - item.getBoundingClientRect().left
          : slideWidth;
      const center = (viewport.getBoundingClientRect().width - slideWidth) / 2;
      metricsRef.current = { center, step, slideWidth };
      setTrackX(center - physicalIndexRef.current * step, false);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [setTrackX, slides.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    };
    const preventHorizontalBrowserGesture = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (Math.abs(deltaX) > 6 && Math.abs(deltaX) > Math.abs(deltaY) && event.cancelable) {
        event.preventDefault();
      }
    };

    viewport.addEventListener("touchstart", handleTouchStart, { passive: true });
    viewport.addEventListener("touchmove", preventHorizontalBrowserGesture, { passive: false });

    return () => {
      viewport.removeEventListener("touchstart", handleTouchStart);
      viewport.removeEventListener("touchmove", preventHorizontalBrowserGesture);
    };
  }, []);

  const moveOne = useCallback(async (direction: -1 | 1, overshoot: boolean) => {
    if (slides.length < 2 || lockedRef.current) {
      return;
    }

    const metrics = metricsRef.current;
    const track = trackRef.current;

    if (!metrics || !track) {
      return;
    }

    lockedRef.current = true;
    const nextPhysicalIndex = physicalIndexRef.current + direction;
    const nextLogicalIndex = (logicalIndexRef.current + direction + slides.length) % slides.length;
    const targetX = metrics.center - nextPhysicalIndex * metrics.step;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const overshootDistance =
      overshoot && !prefersReducedMotion ? Math.min(metrics.slideWidth * 0.08, 96) : 0;
    const startX = currentXRef.current;
    const duration = prefersReducedMotion ? 0 : overshoot ? 720 : 540;

    try {
      const keyframes =
        overshootDistance > 0
          ? [
              { transform: `translate3d(${startX}px, 0, 0)` },
              {
                transform: `translate3d(${targetX - direction * overshootDistance}px, 0, 0)`,
                offset: 0.74
              },
              { transform: `translate3d(${targetX}px, 0, 0)` }
            ]
          : [
              { transform: `translate3d(${startX}px, 0, 0)` },
              { transform: `translate3d(${targetX}px, 0, 0)` }
            ];
      const animation = track.animate(keyframes, {
        duration,
        easing: overshoot ? "cubic-bezier(0.22, 0.8, 0.22, 1)" : "cubic-bezier(0.22, 0.72, 0, 1)",
        fill: "forwards"
      });
      await animation.finished;
      animation.cancel();
    } catch {
      // A resize or a new gesture can cancel the current animation safely.
    }

    physicalIndexRef.current = nextPhysicalIndex;
    logicalIndexRef.current = nextLogicalIndex;
    setActiveIndex(nextLogicalIndex);
    setTrackX(targetX, false);

    if (nextPhysicalIndex === 0) {
      physicalIndexRef.current = slides.length;
      setTrackX(metrics.center - slides.length * metrics.step, false);
    } else if (nextPhysicalIndex === slides.length + 1) {
      physicalIndexRef.current = 1;
      setTrackX(metrics.center - metrics.step, false);
    }

    window.setTimeout(() => {
      lockedRef.current = false;
    }, 180);
  }, [setTrackX, slides.length]);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const handleHorizontalWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) || Math.abs(event.deltaX) < 8) {
        return;
      }

      event.preventDefault();
      void moveOne(event.deltaX > 0 ? 1 : -1, true);
    };

    viewport.addEventListener("wheel", handleHorizontalWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", handleHorizontalWheel);
  }, [moveOne]);

  useEffect(() => {
    if (slides.length < 2 || reducedMotion) {
      return;
    }

    if (autoplayIndexRef.current !== activeIndex) {
      autoplayIndexRef.current = activeIndex;
      autoplayRemainingRef.current = AUTOPLAY_DELAY;
      setAutoplayCycle((cycle) => cycle + 1);
    }

    if (autoplayPaused) {
      return;
    }

    const startedAt = Date.now();
    const timeout = window.setTimeout(() => {
      autoplayRemainingRef.current = AUTOPLAY_DELAY;
      void moveOne(1, false);
    }, autoplayRemainingRef.current);

    return () => {
      window.clearTimeout(timeout);

      if (autoplayIndexRef.current === activeIndex) {
        autoplayRemainingRef.current = Math.max(
          0,
          autoplayRemainingRef.current - (Date.now() - startedAt)
        );
      }
    };
  }, [activeIndex, autoplayPaused, moveOne, reducedMotion, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (lockedRef.current || slides.length < 2) {
      return;
    }

    setAutoplayPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startTime: Date.now(),
      baseX: currentXRef.current,
      deltaX: 0
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragRef.current.active || lockedRef.current) {
      return;
    }

    const deltaX = event.clientX - dragRef.current.startX;
    dragRef.current.deltaX = deltaX;

    if (Math.abs(deltaX) > 6 && event.cancelable) {
      event.preventDefault();
    }

    setTrackX(dragRef.current.baseX + deltaX);
  }

  function handlePointerEnd() {
    if (!dragRef.current.active || lockedRef.current) {
      setAutoplayPaused(false);
      return;
    }

    const metrics = metricsRef.current;
    const elapsed = Math.max(Date.now() - dragRef.current.startTime, 1);
    const velocity = Math.abs(dragRef.current.deltaX) / elapsed;
    const threshold = metrics ? Math.min(metrics.slideWidth * 0.12, 72) : 48;
    const shouldMove = Math.abs(dragRef.current.deltaX) > threshold || velocity > 0.45;
    const direction = dragRef.current.deltaX < 0 ? 1 : -1;
    dragRef.current.active = false;

    if (shouldMove) {
      void moveOne(direction, true);
      setAutoplayPaused(false);
      return;
    }

    if (metrics) {
      const targetX = metrics.center - physicalIndexRef.current * metrics.step;
      setTrackX(targetX);
    }

    setAutoplayPaused(false);
  }

  return (
    <section
      className="article-gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label={galleryStatus}
      tabIndex={0}
      onMouseEnter={() => setAutoplayPaused(true)}
      onMouseLeave={() => setAutoplayPaused(false)}
      onFocusCapture={() => setAutoplayPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setAutoplayPaused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          void moveOne(-1, false);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          void moveOne(1, false);
        }
      }}
    >
      {slides.length > 1 ? (
        <div className={`article-gallery-controls${autoplayPaused ? " is-paused" : ""}`}>
          <button
            className="article-gallery-control"
            type="button"
            onClick={() => void moveOne(-1, false)}
            aria-label={labels.previous}
          >
            <ChevronLeft aria-hidden="true" size={18} strokeWidth={1.6} />
          </button>
          <button
            className="article-gallery-control article-gallery-control-next"
            type="button"
            onClick={() => void moveOne(1, false)}
            aria-label={labels.next}
          >
            {!reducedMotion ? (
              <span
                className="article-gallery-progress"
                key={`${activeIndex}-${autoplayCycle}`}
                aria-hidden="true"
              />
            ) : null}
            <ChevronRight aria-hidden="true" size={18} strokeWidth={1.6} />
          </button>
          <span className="sr-only" aria-live="polite">
            {galleryStatus}
          </span>
        </div>
      ) : null}
      <div
        className="article-gallery-viewport"
        ref={viewportRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        <div className="article-gallery-track" ref={trackRef}>
          {loopedSlides.map((slide, index) => (
            <div className="article-gallery-item" aria-hidden={slides.length > 1 && (index === 0 || index === loopedSlides.length - 1)} key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatGalleryStatus(template: string, current: number, total: number) {
  return template.replace("{current}", String(current)).replace("{total}", String(total));
}
