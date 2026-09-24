import { useRef, useState } from 'react';

const join = (...parts) => parts.filter(Boolean).join(' ');

/**
 * Vehicle colour selector: one slide per colour; picking a dot scrolls that slide into view.
 * stackedLabel renders the label above a pointer (Super Auto layout).
 */
export default function ColorPicker({ maskClassName, arrowClassName, stackedLabel = false, slides, colors }) {
  const maskRef = useRef(null);
  const [active, setActive] = useState(0);

  const select = (index) => {
    setActive(index);
    maskRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const label = (
    <div className="color-label" id="colorLabel">
      {colors[active]?.name}
    </div>
  );

  return (
    <div className="vechile-warpper">
      <div className="vechile-slider w-slider" role="region" aria-label="Vehicle colours">
        <div ref={maskRef} className={join('w-slider-mask', maskClassName)}>
          {slides.map((slide, i) => (
            <div key={slide.src} className="w-slide" aria-hidden={i !== active}>
              <div className="slide-in">
                <div className="base-container-style-with-fix-hight">
                  <img
                    className={slide.className}
                    src={slide.src}
                    srcSet={slide.srcSet}
                    sizes={slide.sizes}
                    width={slide.width}
                    loading="lazy"
                    alt={colors[i]?.name ?? ''}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={join('w-slider-arrow-left', arrowClassName)} aria-hidden="true" />
      </div>
      <div className="code-embed-2 w-embed">
        <div className="color-picker">
          {stackedLabel ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginRight: 'auto', position: 'relative' }}>
              {label}
              <div className="color-pointer" id="colorPointer" />
            </div>
          ) : (
            <>
              {label}
              <div className="color-pointer" />
            </>
          )}
          <div className="color-nav">
            {colors.map((color, i) => (
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
