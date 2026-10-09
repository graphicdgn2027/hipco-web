import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/home.css?url';

const meta = {
  title: 'Privacy Policy | Montra Electric',
  description: 'Privacy Policy for Montra Electric website.',
  stylesheet,
  bodyClass: 'body-4',
};

export default function PrivacyPage() {
  usePageMeta(meta);

  return (
    <main className="ct-page">
      <SideActions variant="home" />
      <section className="ct-hero ct-hero--solo">
        <div className="ct-shell">
          <h1 className="ct-hero__title">Privacy <span>Policy.</span></h1>
        </div>
      </section>
      <section className="ct-body" style={{ padding: '40px 0', minHeight: '40vh' }}>
        <div className="ct-shell">
          <div className="ab-copy" style={{ maxWidth: '800px' }}>
            <p>At HIPCO Trading Pvt. Ltd., we value your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website.</p>
            <h3>Information Collection</h3>
            <p>We may collect personal information such as your name, phone number, email address, and location when you book a test drive, submit a dealership inquiry, or contact us through our website.</p>
            <h3>Use of Information</h3>
            <p>Your information is used to respond to your inquiries, schedule test drives, provide customer support, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
            <h3>Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.</p>
            <h3>Contact Us</h3>
            <p>If you have any questions about our Privacy Policy, please contact us at info@hipco.com.np.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
