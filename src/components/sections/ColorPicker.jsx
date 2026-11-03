import { useCallback, useEffect, useId, useRef, useState } from 'react';
import './color-picker.css';

const join = (...parts) => parts.filter(Boolean).join(' ');

/**
 * Vehicle colour selector with auto-loop scroll, directional transitions, and radio swatches.
 */
export default function ColorPicker({
  maskClassName,
  arrowClassName,
  stackedLabel = false,
  animated = false,
  autoplay = true,
  delay = 3500,
  slides,
  colors,
}) {
  const maskRef = useRef(null);
  const radioGroupName = useId();
  const swipeStart = useRef(null);
  const interactionTimer = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [selection, setSelection] = useState({ active: 0, previous: null, direction: 'next' });
  const { active, previous, direction } = selection;

  const pauseInteraction = useCallback((durationMs = 4000) => {
    setIsInteracting(true);
    if (interactionTimer.current) clearTimeout(interactionTimer.current);
    interactionTimer.current = setTimeout(() => {
      setIsInteracting(false);
    }, durationMs);
  }, []);

  const select = useCallback((index, moveDirection) => {
    const target = (index + slides.length) % slides.length;
    setSelection(current => target === current.active ? current : {
      active: target,
      previous: current.active,
      direction: moveDirection || (target > current.active ? 'next' : 'previous'),
    });
    if (!animated) {
      maskRef.current?.children[target]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [slides.length, animated]);

  // Auto-loop scroll timer
  useEffect(() => {
    if (!autoplay || slides.length < 2 || isInteracting) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const interval = setInterval(() => {
      select(active + 1, 'next');
    }, delay);

    return () => clearInterval(interval);
  }, [autoplay, delay, slides.length, isInteracting, active, select]);

  useEffect(() => {
    return () => {
      if (interactionTimer.current) clearTimeout(interactionTimer.current);
    };
  }, []);

  const label = (
    <div className="color-label" id="colorLabel" aria-live="polite" aria-atomic="true">
      {colors[active]?.name}
    </div>
  );

  return (
    <div
      className={join('vechile-warpper', animated && 'vehicle-colors--interactive')}
      data-direction={direction}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={() => setIsInteracting(false)}
      onTouchStart={() => pauseInteraction(5000)}
    >
      <div
        className="vechile-slider w-slider"
        role="region"
        aria-label="Vehicle colours"
        onKeyDown={animated ? (event) => {
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
          event.preventDefault();
          select(active + (event.key === 'ArrowRight' ? 1 : -1), event.key === 'ArrowRight' ? 'next' : 'previous');
          pauseInteraction(5000);
        } : undefined}
        tabIndex={animated ? 0 : undefined}
      >
        <div
          ref={maskRef}
          className={join('w-slider-mask', maskClassName)}
          onPointerDown={animated ? (event) => {
            if (!event.isPrimary || event.button !== 0) return;
            swipeStart.current = { x: event.clientX, y: event.clientY };
            event.currentTarget.setPointerCapture(event.pointerId);
            setIsInteracting(true);
          } : undefined}
          onPointerUp={animated ? (event) => {
            if (!swipeStart.current) return;
            const dx = event.clientX - swipeStart.current.x;
            const dy = event.clientY - swipeStart.current.y;
            swipeStart.current = null;
            if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy)) {
              select(active + (dx < 0 ? 1 : -1), dx < 0 ? 'next' : 'previous');
            }
            pauseInteraction(4000);
          } : undefined}
          onPointerCancel={() => {
            swipeStart.current = null;
            pauseInteraction(3000);
          }}
          onLostPointerCapture={() => {
            swipeStart.current = null;
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={join('w-slide', animated && i === active && 'is-current', animated && i === previous && 'is-leaving', animated && previous !== null && i === active && 'is-entering')}
              aria-hidden={i !== active}
              inert={i !== active}
            >
              <div className="slide-in">
                <div className="base-container-style-with-fix-hight">
                  <img
                    className={slide.className}
                    src={slide.src}
                    srcSet={slide.srcSet}
                    sizes={slide.sizes}
                    width={slide.width}
                    loading="lazy"
                    draggable={animated ? false : undefined}
                    alt={colors[i]?.name ?? ''}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {animated ? (
          <>
            <button
              type="button"
              className="vehicle-color-arrow vehicle-color-arrow--previous"
              aria-label="Previous colour"
              onClick={() => {
                select(active - 1, 'previous');
                pauseInteraction(4000);
              }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m14 5-7 7 7 7" /></svg>
            </button>
            <button
              type="button"
              className="vehicle-color-arrow vehicle-color-arrow--next"
              aria-label="Next colour"
              onClick={() => {
                select(active + 1, 'next');
                pauseInteraction(4000);
              }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m10 5 7 7-7 7" /></svg>
            </button>
          </>
        ) : (
          <>
            <div
              className={join('w-slider-arrow-left', arrowClassName)}
              role="button"
              tabIndex={0}
              aria-label="Previous colour"
              onClick={() => {
                select(active - 1, 'previous');
                pauseInteraction(4000);
              }}
            />
            <div
              className={join('w-slider-arrow-right', arrowClassName)}
              role="button"
              tabIndex={0}
              aria-label="Next colour"
              onClick={() => {
                select(active + 1, 'next');
                pauseInteraction(4000);
              }}
            />
          </>
        )}
      </div>
      <div className="code-embed-2 w-embed">
        <div className="color-picker" style={animated ? { '--selected-color': active } : undefined}>
          {stackedLabel ? (
            <div className={animated ? 'vehicle-color-caption' : undefined} style={animated ? undefined : { display: 'flex', flexDirection: 'column', gap: 5, marginRight: 'auto', position: 'relative' }}>
              {label}
              <div className="color-pointer" id="colorPointer" />
            </div>
          ) : (
            <>
              {label}
              <div className="color-pointer" />
            </>
          )}
          <div className="color-nav" role={animated ? 'radiogroup' : undefined} aria-label={animated ? 'Choose vehicle colour' : undefined}>
            {colors.map((color, i) => animated ? (
              <label key={color.name} className="vehicle-color-option">
                <input
                  type="radio"
                  name={radioGroupName}
                  value={color.name}
                  className={join('vehicle-color-radio', color.className)}
                  aria-label={color.name}
                  checked={i === active}
                  onChange={() => {
                    select(i);
                    pauseInteraction(5000);
                  }}
                />
              </label>
            ) : (
              <div
                key={color.name}
                className={join('color-dot', color.className, i === active && 'active')}
                role="button"
                tabIndex={0}
                aria-label={color.name}
                aria-pressed={i === active}
                onClick={() => {
                  select(i);
                  pauseInteraction(5000);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    select(i);
                    pauseInteraction(5000);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
