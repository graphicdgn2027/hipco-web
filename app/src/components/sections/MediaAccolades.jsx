import { AppLink } from '@/components/ui/AppLink';
import MediaTabs from '@/components/sections/MediaTabs';
import { sharedMedia } from '@/data/media';

export default function MediaAccolades({ learnMoreClassName = 'link-block-56' }) {
  return (
    <div className="base-container-padding-flex-gap">
      <div className="w-layout-blockcontainer frame-5-2 w-container">
        <div className="carousel-header">
          <h2 className="heading-2">
            Media &amp;<span className="text-span-green"> Accolades</span>
            <br />
          </h2>
          <p className="paragraph-2">Celebrating Achievements, Sharing Stories</p>
        </div>
        <div className="div-block-60">
          <AppLink href="/media-accolades" className={`${learnMoreClassName} w-inline-block`}>
            <div className="text-block-31">Learn More &nbsp;&nbsp;&gt;</div>
          </AppLink>
        </div>
      </div>
      <div className="div-block-189">
        <MediaTabs tabs={sharedMedia} />
      </div>
    </div>
  );
}
