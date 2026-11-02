import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/home.css?url';

const meta = {
  title: 'Privacy Policy - Power Dock | Montra Electric',
  description: 'Privacy Policy for Montra Electric Power Dock.',
  stylesheet,
  bodyClass: 'body-4',
};

export default function PrivacyPowerDockPage() {
  usePageMeta(meta);

  return (
    <main className="ct-page">
      <SideActions variant="home" />
      <section className="ct-hero ct-hero--solo page-grid">
        <div className="ct-shell page-content">
          <h1 className="ct-hero__title">Privacy Policy - <span>Power Dock.</span></h1>
        </div>
      </section>
      <section className="ct-body page-grid" style={{ paddingBlock: '40px', minHeight: '40vh' }}>
        <div className="ct-shell page-content">
          <div className="ab-copy" style={{ maxWidth: '800px' }}>
            <p>This Privacy Policy specifically addresses the collection and use of information related to the Montra Electric Power Dock system and associated mobile applications.</p>
            <h3>Information Collection</h3>
            <p>We collect device telemetry, charging session data, and user account information when you interact with the Power Dock infrastructure and application.</p>
            <h3>Use of Information</h3>
            <p>Data collected is used exclusively for facilitating charging sessions, billing, network diagnostics, and improving the efficiency of the Power Dock network.</p>
            <h3>Data Security</h3>
            <p>We employ encryption and secure protocols to protect your payment details and personal information during charging sessions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
