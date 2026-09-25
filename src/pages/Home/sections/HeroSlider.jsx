import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowIcon, Button } from '@/components/ui/Button';
import { vehicles } from '@/data/vehicles';
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

function IconButton({ label, path, onClick, pressed }) {
  return (
    <button type="button" className="hx-icon-btn" onClick={onClick} aria-label={label} aria-pressed={pressed}>
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
        <path d={path} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

// Image-led carousel: autoplay with per-slide progress, pause control, arrows, tabs, keyboard and swipe.
export default function HeroSlider() {
  const count = vehicles.length;
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const rootRef = useRef(null);
  const elapsed = useRef(0);
  const swipeStart = useRef(null);

  const running = !hovered && !focused && !userPaused && !reducedMotion;

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

  const handleMouseLeave = () => {
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
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onPointerMove={handlePointerMove}
      onFocus={(event) => setFocused(event.target.matches(':focus-visible'))}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <h1 className="hx-sr-only">Montra Electric commercial vehicles</h1>

      <div
        className="hx-stage"
        aria-live={running ? 'off' : 'polite'}
        onPointerDown={(event) => {
          swipeStart.current = event.clientX;
        }}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          swipeStart.current = null;
        }}
      >
        {vehicles.map((vehicle, i) => (
          <article
            key={vehicle.id}
            className={join('hx-slide', i === index && 'is-active')}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${vehicle.name}`}
            inert={i !== index}
          >
            <div className="hx-media">
              <img
                src={vehicle.image}
                alt={`${vehicle.name} electric vehicle`}
                style={{ objectPosition: vehicle.imagePosition }}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                draggable="false"
              />
            </div>
            <div className="hx-content">
              <div className="hx-copy">
                <span className="hx-chip">{vehicle.category}</span>
                <h2 className="hx-title">{vehicle.headline}</h2>
                <p className="hx-text">{vehicle.summary}</p>
                <div className="hx-actions">
                  <Button href={vehicle.href} icon={<ArrowIcon />}>
                    Explore {vehicle.name}
                  </Button>
                  <Button href="#vehicle-range" variant="secondary" onClick={scrollToRange}>
                    View all vehicles
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="hx-controls">
        <div className="hx-tabs" role="tablist" aria-label="Choose slide">
          {vehicles.map((vehicle, i) => (
            <button
              key={vehicle.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={join('hx-tab', i === index && 'is-active')}
              onClick={() => goTo(i)}
            >
              <span className="hx-tab__bar">
                <span className="hx-tab__fill" />
              </span>
              <span className="hx-tab__label">{vehicle.name}</span>
            </button>
          ))}
        </div>
        <div className="hx-nav">
          <IconButton
            label={userPaused ? 'Play slideshow' : 'Pause slideshow'}
            path={userPaused ? 'M8 5l11 7-11 7z' : 'M9 5v14M15 5v14'}
            pressed={userPaused}
            onClick={() => setUserPaused((paused) => !paused)}
          />
          <IconButton label="Previous slide" path="M15 5l-7 7 7 7" onClick={() => goTo(index - 1)} />
          <IconButton label="Next slide" path="M9 5l7 7-7 7" onClick={() => goTo(index + 1)} />
        </div>
      </div>
    </section>
  );
}
