import { Children, cloneElement, useCallback, useEffect, useRef, useState } from 'react';

const join = (...parts) => parts.filter(Boolean).join(' ');
const SWIPE_THRESHOLD = 50;

export function Slide({ className = '', children, style, ...rest }) {
  return (
    <div className={join('w-slide', className)} style={style} {...rest}>
      {children}
    </div>
  );
}

// React port of the Webflow slider: "slide" and "cross" animations, arrows, dots, autoplay and swipe.
export function Slider({
  className = '',
  delay = 4000,
  animation = 'slide',
  autoplay = false,
  duration = 500,
  easing = 'ease',
  infinite = true,
  arrows = true,
  nav = true,
  navSpacing = 3,
  maskClassName = '',
  leftArrowClassName = '',
  rightArrowClassName = '',
  leftIconClassName = '',
  rightIconClassName = '',
  navClassName = '',
  children,
}) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const pointerStart = useRef(null);

  const goTo = useCallback(
    (target) => {
      if (infinite) setIndex(((target % count) + count) % count);
      else setIndex(Math.min(Math.max(target, 0), count - 1));
    },
    [count, infinite],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!autoplay || count < 2) return undefined;
    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [autoplay, count, delay, next]);

  const slideStyle = (i) => {
    if (animation === 'cross') {
      const active = i === index;
      return {
        transform: `translateX(-${i * 100}%)`,
        opacity: active ? 1 : 0,
        visibility: active ? 'visible' : 'hidden',
        transition: `opacity ${duration}ms ${easing}`,
      };
    }
    return {
      transform: `translateX(-${index * 100}%)`,
      opacity: 1,
      transition: `transform ${duration}ms ${easing}`,
    };
  };

  const onPointerDown = (event) => {
    pointerStart.current = event.clientX;
  };
  const onPointerUp = (event) => {
    if (pointerStart.current === null) return;
    const delta = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) next();
    else prev();
  };

  const onArrowKey = (action) => (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <div className={join('w-slider', className)} role="region" aria-label="carousel">
      <div
        className={join('w-slider-mask', maskClassName)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
      >
        {slides.map((slide, i) => cloneElement(slide, { key: slide.key ?? i, style: slideStyle(i) }))}
      </div>
      {arrows && (
        <>
          <div
            className={join('w-slider-arrow-left', leftArrowClassName)}
            role="button"
            tabIndex={0}
            aria-label="previous slide"
            onClick={prev}
            onKeyDown={onArrowKey(prev)}
          >
            <div className={join('w-icon-slider-left', leftIconClassName)} />
          </div>
          <div
            className={join('w-slider-arrow-right', rightArrowClassName)}
            role="button"
            tabIndex={0}
            aria-label="next slide"
            onClick={next}
            onKeyDown={onArrowKey(next)}
          >
            <div className={join('w-icon-slider-right', rightIconClassName)} />
          </div>
        </>
      )}
      {nav && (
        <div className={join('w-slider-nav', navClassName)}>
          {slides.map((slide, i) => (
            <div
              key={slide.key ?? i}
              className={join('w-slider-dot', i === index && 'w-active')}
              style={{ marginLeft: navSpacing, marginRight: navSpacing }}
              role="button"
              tabIndex={i === index ? 0 : -1}
              aria-label={`Show slide ${i + 1} of ${count}`}
              aria-pressed={i === index}
              onClick={() => goTo(i)}
              onKeyDown={onArrowKey(() => goTo(i))}
            >
              {navClassName.includes('w-num') ? i + 1 : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
