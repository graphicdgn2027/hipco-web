import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import { AppLink } from '@/components/ui/AppLink';
import { ROUTES } from '@/routes/paths';
import stylesheet from '@/styles/webflow/home.css?url';

const meta = {
  title: 'Sitemap | Montra Electric',
  description: 'Navigate through all pages of Montra Electric website.',
  stylesheet,
  bodyClass: 'body-4',
};

export default function SitemapPage() {
  usePageMeta(meta);

  return (
    <main className="ct-page">
      <SideActions variant="home" />
      <section className="ct-hero ct-hero--solo page-grid">
        <div className="ct-shell page-content">
          <h1 className="ct-hero__title">Sitemap</h1>
        </div>
      </section>
      <section className="ct-body page-grid" style={{ paddingBlock: '40px', minHeight: '40vh' }}>
        <div className="ct-shell page-content">
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '2' }}>
            <li><AppLink href={ROUTES.home}>Home</AppLink></li>
            <li><AppLink href={ROUTES.superAuto}>Super Auto</AppLink></li>
            <li><AppLink href={ROUTES.superCargo}>Super Cargo</AppLink></li>
            <li><AppLink href={ROUTES.eviator}>EVIATOR</AppLink></li>
            <li><AppLink href={ROUTES.about}>About Us</AppLink></li>
            <li><AppLink href={ROUTES.contact}>Contact Us</AppLink></li>
            <li><AppLink href={ROUTES.findDealer}>Find a Dealer</AppLink></li>
            <li><AppLink href={ROUTES.bookTestDrive}>Book a Test Drive</AppLink></li>
            <li><AppLink href={ROUTES.becomeDealer}>Become a Dealer</AppLink></li>
            <li><AppLink href={ROUTES.mediaAccolades}>Media &amp; Accolades</AppLink></li>
            <li><AppLink href={ROUTES.privacy}>Privacy Policy</AppLink></li>
            <li><AppLink href={ROUTES.privacyPowerDock}>Privacy Policy - Power Dock</AppLink></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
