import { useState, useEffect } from 'react';
import { Carousel, CarouselItem } from '@/components/ui/Carousel';
import './media-card.css';

function MediaCard({ href, image: initialImage, imageSrcSet, imageSizes, date, title, source }) {
  const [imgSrc, setImgSrc] = useState(initialImage);
  const [loading, setLoading] = useState(!initialImage);

  useEffect(() => {
    // If no initial image is provided, dynamically fetch real-time thumbnail from link metadata
    if (!initialImage && href) {
      setLoading(true);
      fetch(`https://api.microlink.io?url=${encodeURIComponent(href)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data?.image?.url) {
            setImgSrc(data.data.image.url);
          }
        })
        .catch((err) => {
          console.error('Failed to fetch link metadata image:', err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setImgSrc(initialImage);
    }
  }, [initialImage, href]);

  return (
    <a href={href} className="media-card" target="_blank" rel="noreferrer">
      <div className="media-card__image">
        {loading ? (
          <div className="media-card__image-placeholder" style={{ width: '100%', height: '100%', background: '#e9eef2' }} />
        ) : (
          <img
            src={imgSrc}
            srcSet={imageSrcSet}
            sizes={imageSizes}
            loading="lazy"
            referrerPolicy="no-referrer"
            alt={title || ''}
            draggable="false"
            onError={() => {
              // Fallback to real-time metadata fetch if the provided image fails to load
              if (href && imgSrc === initialImage && !imgSrc.startsWith('/')) {
                fetch(`https://api.microlink.io?url=${encodeURIComponent(href)}`)
                  .then((res) => res.json())
                  .then((data) => {
                    if (data?.data?.image?.url) {
                      setImgSrc(data.data.image.url);
                    }
                  })
                  .catch(() => {});
              }
            }}
          />
        )}
      </div>
      <div className="media-card__body">
        <time className="media-card__date">{date}</time>
        <h3 className="media-card__title">{title}</h3>
        <span className="media-card__source">{source}</span>
      </div>
    </a>
  );
}

export default function MediaTabs({ tabs }) {
  const allItems = tabs.flatMap((tab) => tab.items);

  return (
    <div className="media-carousel-container">
      <Carousel variant="team" wrapClassName="w-dyn-list" listClassName="w-dyn-items">
        {allItems.map((item, itemIndex) => (
          <CarouselItem key={`${itemIndex}-${item.href}`} className="w-dyn-item">
            <MediaCard {...item} />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}
