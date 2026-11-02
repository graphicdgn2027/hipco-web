import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/home.css?url';
import MediaTabs from '@/components/sections/MediaTabs';
import { sharedMedia } from '@/data/media';

const meta = {
  title: 'Media & Accolades | Montra Electric',
  description: 'News, announcements, and accolades for Montra Electric vehicles.',
  stylesheet,
  bodyClass: 'body-4',
};

export default function MediaAccoladesPage() {
  usePageMeta(meta);

  return (
    <main className="ct-page">
      <SideActions variant="home" />
      <section className="ct-hero ct-hero--solo page-grid">
        <div className="ct-shell page-content">
          <p className="ct-eyebrow">Press Room</p>
          <h1 className="ct-hero__title">Media &amp; <span>Accolades.</span></h1>
          <p className="ct-hero__lead">
            Latest news, announcements and achievements from Montra Electric.
          </p>
        </div>
      </section>
      <section className="ct-body page-grid" style={{ paddingBlock: '60px' }}>
        <div className="ct-shell page-content">
          <MediaTabs title="" tabs={sharedMedia} />
        </div>
      </section>
    </main>
  );
}
