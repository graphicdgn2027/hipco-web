import MediaCarousel from '@/components/sections/MediaCarousel';
import { Button } from '@/components/ui/Button';
import { sharedMedia } from '@/data/media';

export default function NewsSection() {
  return (
    <section className="hp-section hp-section--raised" aria-labelledby="news-title">
      <div className="hp-container">
        <div className="hp-heading hp-heading--row">
          <div>
            <p className="hp-eyebrow">In the news</p>
            <h2 id="news-title" className="hp-title">
              Media &amp; accolades
            </h2>
            <p className="hp-lead">Celebrating achievements, sharing stories.</p>
          </div>
          <Button href="/media-accolades" variant="secondary">
            View all
          </Button>
        </div>
        <MediaCarousel items={sharedMedia} />
      </div>
    </section>
  );
}
