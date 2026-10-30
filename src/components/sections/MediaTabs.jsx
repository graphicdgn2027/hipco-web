import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import './media-card.css';

function MediaCard({ href, image, imageSrcSet, imageSizes, date, title, source }) {
  return (
    <a href={href} className="media-card" target="_blank" rel="noopener noreferrer">
      <div className="media-card__image">
        <img
          src={image}
          srcSet={imageSrcSet}
          sizes={imageSizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
          loading="lazy"
          alt={title || 'Montra Electric'}
          draggable="false"
        />
      </div>
      <div className="media-card__body">
        <time className="media-card__date">{date}</time>
        <h3 className="media-card__title" title={title}>{title}</h3>
        <div className="media-card__footer">
          <span className="media-card__source">{source}</span>
        </div>
      </div>
    </a>
  );
}

export default function MediaTabs({ tabs }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const allItems = tabs?.flatMap((tab) => tab.items) || [];

  return (
    <div className="media-carousel-container">
      <Swiper
        modules={[Navigation, Keyboard, A11y]}
        navigation={{ prevEl, nextEl }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="media-swiper"
      >
        {allItems.map((item, itemIndex) => (
          <SwiperSlide key={`${itemIndex}-${item.href || item.title}`} className="media-slide">
            <MediaCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className="media-nav-btn media-nav-btn--prev"
        ref={setPrevEl}
        aria-label="Previous slide"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        className="media-nav-btn media-nav-btn--next"
        ref={setNextEl}
        aria-label="Next slide"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
