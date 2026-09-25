import { Carousel, CarouselItem } from '@/components/ui/Carousel';
import { TabContent, TabLink, TabMenu, TabPane, Tabs } from '@/components/ui/Tabs';
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
  return (
    <Tabs className="tabs-2">
      <TabMenu className="tabs-menu-3">
        {tabs.map((tab, i) => (
          <TabLink key={tab.label} index={i} className="tab-link-tab-1-3 w-inline-block">
            <div className={tab.labelClassName}>{tab.label}</div>
          </TabLink>
        ))}
      </TabMenu>
      <TabContent className="tabs-content">
        {tabs.map((tab, i) => (
          <TabPane key={tab.label} index={i} className={tab.paneClassName}>
            <Carousel variant="team" wrapClassName="w-dyn-list" listClassName="w-dyn-items">
              {tab.items.map((item, itemIndex) => (
                <CarouselItem key={`${itemIndex}-${item.href}`} className="w-dyn-item">
                  <MediaCard {...item} />
                </CarouselItem>
              ))}
            </Carousel>
          </TabPane>
        ))}
      </TabContent>
    </Tabs>
  );
}
