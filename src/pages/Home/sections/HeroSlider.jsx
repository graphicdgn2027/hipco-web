import { useCallback, useEffect, useRef, useState } from 'react';
import { AppLink } from '@/components/ui/AppLink';
import { heroSlides } from '@/data/hero';
import './hero.css';

const AUTOPLAY_MS = 6500;
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

function scrollToRange(event) {
  const target = document.getElementById('vehicle-range');
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Arrow({ direction, onClick }) {
  return (
    <button type="button" className="hx-arrow" onClick={onClick} aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}>
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

// Image-led hero carousel: autoplay with per-slide progress, pause on hover/focus, arrows, dots, keyboard, swipe and pointer parallax.
export default function HeroSlider() {
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
      rootRef.current?.style.setProperty('--hx-progress', '0');
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
      rootRef.current?.style.setProperty('--hx-progress', String(progress));
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
    rootRef.current.style.setProperty('--hx-px', String(((event.clientX - box.left) / box.width - 0.5) * 2));
    rootRef.current.style.setProperty('--hx-py', String(((event.clientY - box.top) / box.height - 0.5) * 2));
  };
  const resetParallax = () => {
    rootRef.current?.style.setProperty('--hx-px', '0');
    rootRef.current?.style.setProperty('--hx-py', '0');
    setHovered(false);
  };

  return (
    <section
      ref={rootRef}
      className="hx-hero"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured vehicles"
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
      <h1 className="hx-sr-only">Montra Electric commercial vehicles</h1>

      <div className="hx-stage" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerCancel={() => (swipeStart.current = null)}>
        {heroSlides.map((slide, i) => (
          <article
            key={slide.id}
            className={join('hx-slide', i === index && 'is-active')}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${slide.label}`}
            inert={i !== index}
          >
            <div className="hx-media">
              <img src={slide.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : 'auto'} draggable="false" />
            </div>
            <div className="hx-shade" />
            <div className="hx-content">
              <span className="hx-chip">{slide.category}</span>
              <h2 className="hx-title">{slide.title}</h2>
              <p className="hx-text">{slide.text}</p>
              <div className="hx-actions">
                <AppLink href={slide.href} className="hx-btn hx-btn--solid">
                  Explore {slide.label}
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </AppLink>
                <a href="#vehicle-range" className="hx-btn hx-btn--ghost" onClick={scrollToRange}>
                  View all vehicles
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="hx-controls">
        <div className="hx-dots" role="tablist" aria-label="Choose slide">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={join('hx-dot', i === index && 'is-active')}
              onClick={() => goTo(i)}
            >
              <span className="hx-dot__bar">
                <span className="hx-dot__fill" />
              </span>
              <span className="hx-dot__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="hx-dot__label">{slide.label}</span>
            </button>
          ))}
        </div>
        <div className="hx-nav">
          <span className="hx-counter" aria-hidden="true">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <Arrow direction="prev" onClick={() => goTo(index - 1)} />
          <Arrow direction="next" onClick={() => goTo(index + 1)} />
        </div>
      </div>
    </section>
  );
}
