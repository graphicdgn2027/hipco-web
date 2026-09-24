import { Carousel, CarouselItem } from '@/components/ui/Carousel';
import { TabContent, TabLink, TabMenu, TabPane, Tabs } from '@/components/ui/Tabs';

function MediaCard({ href, image, imageSrcSet, imageSizes, date, title, source }) {
  return (
    <a href={href} className="div-block-167 w-inline-block">
      <img className="image-102" src={image} srcSet={imageSrcSet} sizes={imageSizes} loading="lazy" alt="" />
      <div className="div-block-166">
        <div className="text-block-100">{date}</div>
        <div className="text-block-99 blog-text-class">{title}</div>
        <div className="div-block-168">
          <div className="text-block-34">{source}</div>
        </div>
      </div>
      <div className="w-embed" />
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
