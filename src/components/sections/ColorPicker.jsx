import { useId, useRef, useState } from 'react';
import './color-picker.css';

const join = (...parts) => parts.filter(Boolean).join(' ');

/**
 * Vehicle colour selector with optional directional transitions and radio swatches.
 */
export default function ColorPicker({ maskClassName, arrowClassName, stackedLabel = false, animated = false, slides, colors }) {
  const maskRef = useRef(null);
  const radioGroupName = useId();
  const swipeStart = useRef(null);
  const [selection, setSelection] = useState({ active: 0, previous: null, direction: 'next' });
  const { active, previous, direction } = selection;

  const select = (index, moveDirection) => {
    const target = (index + slides.length) % slides.length;
    setSelection(current => target === current.active ? current : {
      active: target,
      previous: current.active,
      direction: moveDirection || (target > current.active ? 'next' : 'previous'),
    });
    if (!animated) {
      maskRef.current?.children[target]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  const label = (
    <div className="color-label" id="colorLabel" aria-live="polite" aria-atomic="true">
      {colors[active]?.name}
    </div>
  );

  return (
    <div className={join('vechile-warpper', animated && 'vehicle-colors--interactive')} data-direction={direction}>
      <div
        className="vechile-slider w-slider"
        role="region"
        aria-label="Vehicle colours"
        onKeyDown={animated ? (event) => {
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
          event.preventDefault();
          select(active + (event.key === 'ArrowRight' ? 1 : -1), event.key === 'ArrowRight' ? 'next' : 'previous');
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
          } : undefined}
          onPointerUp={animated ? (event) => {
            if (!swipeStart.current) return;
            const dx = event.clientX - swipeStart.current.x;
            const dy = event.clientY - swipeStart.current.y;
            swipeStart.current = null;
            if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy)) {
              select(active + (dx < 0 ? 1 : -1), dx < 0 ? 'next' : 'previous');
            }
          } : undefined}
          onPointerCancel={() => { swipeStart.current = null; }}
          onLostPointerCapture={() => { swipeStart.current = null; }}
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
            <button type="button" className="vehicle-color-arrow vehicle-color-arrow--previous" aria-label="Previous colour" onClick={() => select(active - 1, 'previous')}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m14 5-7 7 7 7" /></svg>
            </button>
            <button type="button" className="vehicle-color-arrow vehicle-color-arrow--next" aria-label="Next colour" onClick={() => select(active + 1, 'next')}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m10 5 7 7-7 7" /></svg>
            </button>
          </>
        ) : <div className={join('w-slider-arrow-left', arrowClassName)} aria-hidden="true" />}
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
                  onChange={() => select(i)}
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
                onClick={() => select(i)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    select(i);
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
