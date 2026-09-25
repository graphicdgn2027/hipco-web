import { AppLink } from '@/components/ui/AppLink';
import MediaCarousel from '@/components/sections/MediaCarousel';
import { eviatorMedia } from '@/data/media';

export default function MediaAccolades() {
  return (
    <div className="w-layout-blockcontainer base-container-padding-flex-gap w-container">
      <div className="w-layout-blockcontainer frame-5-2 w-container">
        <div className="carousel-header">
          <h2 className="heading-2">
            Media &amp;&nbsp;<span className="text-span">Accolades</span>
            <br />
          </h2>
          <p className="paragraph-2">Milestones achieved. Stories that inspire progress.</p>
        </div>
        <div className="div-block-60">
          <AppLink className="link-block-57 w-inline-block" href="/media-accolades">
            <div className="text-block-31">Learn More &nbsp;&nbsp;&gt;</div>
          </AppLink>
        </div>
      </div>
      <div className="div-block-189">
        <MediaCarousel items={eviatorMedia} />
      </div>
    </div>
  );
}
