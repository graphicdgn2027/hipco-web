import { AppLink } from '@/components/ui/AppLink';
import MediaTabs from '@/components/sections/MediaTabs';
import { sharedMedia } from '@/data/media';
import './media-card.css';

export default function MediaAccolades() {
  return (
    <section className="media-accolades-section">
      <div className="media-accolades-container">
        <div className="media-section-header">
          <div className="media-section-header__left">
            <h2 className="media-section-title">
              Media &amp; <span className="media-section-title--green">Accolades</span>
            </h2>
            <p className="media-section-subtitle">Celebrating Achievements, Sharing Stories</p>
          </div>
          <div className="media-section-header__right">
            <AppLink href="/media-accolades" className="media-learn-more-btn">
              <span>Learn More</span>
              <svg
                width="14"
                height="14"
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
            </AppLink>
          </div>
        </div>
        <MediaTabs tabs={sharedMedia} />
      </div>
    </section>
  );
}
