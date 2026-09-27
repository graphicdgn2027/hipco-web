import { useCallback, useEffect, useRef, useState } from 'react';
import { AppLink } from '@/components/ui/AppLink';
import { heroSlides } from './hero-slides';
import './hero.css';

const AUTOPLAY_MS = 5500;
const SWIPE_THRESHOLD = 50;
const join = (...parts) => parts.filter(Boolean).join(' ');

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

function scrollToColors(event) {
  const target = document.getElementById('colors');
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Arrow({ direction, onClick }) {
  return (
    <button
      type="button"
      className="sah-arrow"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path
          d={direction === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

// Colour-variant hero slider: same headline/copy throughout, the vehicle cut-out and colour name change per slide.
export default function Hero() {
  const count = heroSlides.length;
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const rootRef = useRef(null);
  const elapsed = useRef(0);
  const swipeStart = useRef(null);

  const running = !hovered && !focused && !reducedMotion;

  const goTo = useCallback(
    (target) => {
      elapsed.current = 0;
      rootRef.current?.style.setProperty('--sah-progress', '0');
      setIndex(((target % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (!running) return undefined;
    let frame;
    let last = performance.now();
    const tick = (now) => {
      if (!document.hidden) elapsed.current += now - last;
      last = now;
      const progress = Math.min(elapsed.current / AUTOPLAY_MS, 1);
      rootRef.current?.style.setProperty('--sah-progress', String(progress));
      if (progress >= 1) {
        elapsed.current = 0;
        setIndex((current) => (current + 1) % count);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running, count]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') goTo(index + 1);
    if (event.key === 'ArrowLeft') goTo(index - 1);
  };

  const handlePointerDown = (event) => {
    swipeStart.current = event.clientX;
  };
  const handlePointerUp = (event) => {
    if (swipeStart.current === null) return;
    const delta = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) goTo(index + (delta < 0 ? 1 : -1));
  };

  const handlePointerMove = (event) => {
    if (event.pointerType !== 'mouse' || reducedMotion) return;
    const box = rootRef.current.getBoundingClientRect();
    rootRef.current.style.setProperty('--sah-px', String(((event.clientX - box.left) / box.width - 0.5) * 2));
    rootRef.current.style.setProperty('--sah-py', String(((event.clientY - box.top) / box.height - 0.5) * 2));
  };
  const resetParallax = () => {
    rootRef.current?.style.setProperty('--sah-px', '0');
    rootRef.current?.style.setProperty('--sah-py', '0');
    setHovered(false);
  };

  return (
    <section
      ref={rootRef}
      className="sah-hero"
      role="region"
      aria-roledescription="carousel"
      aria-label="Super Auto colour options"
      data-autoplay={running ? 'on' : 'off'}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetParallax}
      onPointerMove={handlePointerMove}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <h1 className="sah-sr-only">Montra Electric Super Auto</h1>

      <div
        className="sah-stage"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          swipeStart.current = null;
        }}
      >
        {heroSlides.map((slide, i) => (
          <article
            key={slide.id}
            className={join('sah-slide', i === index && 'is-active')}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${slide.color}`}
            inert={i !== index}
          >
            <div className="sah-text">
              <span className="sah-chip">Super Auto</span>
              <h2 className="sah-title">Leading the Charge in Last-Mile Mobility</h2>
              <p className="sah-text-copy">
                Driving smarter deliveries with powerful, efficient, and sustainable electric solutions.
              </p>
              <div className="sah-actions">
                <AppLink href="#" className="sah-btn sah-btn--solid">
                  Order Now
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AppLink>
                <a href="#colors" className="sah-btn sah-btn--ghost" onClick={scrollToColors}>
                  View Colors
                </a>
              </div>
            </div>
            <div className="sah-visual">
              <img src={slide.image} alt={`Super Auto in ${slide.color}`} loading={i === 0 ? 'eager' : 'lazy'} draggable="false" />
            </div>
          </article>
        ))}
      </div>

      <div className="sah-controls">
        <div className="sah-dots" role="tablist" aria-label="Choose colour">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={join('sah-dot', i === index && 'is-active')}
              onClick={() => goTo(i)}
            >
              <span className="sah-dot__bar">
                <span className="sah-dot__fill" />
              </span>
              <span className="sah-dot__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="sah-dot__label">{slide.color}</span>
            </button>
          ))}
        </div>
        <div className="sah-nav">
          <span className="sah-counter" aria-hidden="true">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <Arrow direction="prev" onClick={() => goTo(index - 1)} />
          <Arrow direction="next" onClick={() => goTo(index + 1)} />
        </div>
      </div>
    </section>
  );
}
