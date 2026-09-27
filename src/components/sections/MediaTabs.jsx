import { Carousel, CarouselItem } from '@/components/ui/Carousel';
import './media-card.css';

function MediaCard({ href, image, imageSrcSet, imageSizes, date, title, source }) {
  return (
    <a href={href} className="media-card" target="_blank" rel="noreferrer">
      <div className="media-card__image">
        <img src={image} srcSet={imageSrcSet} sizes={imageSizes} loading="lazy" alt="" draggable="false" />
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
