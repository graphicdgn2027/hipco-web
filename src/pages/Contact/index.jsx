import SideActions from '@/components/common/SideActions';
import { site } from '@/config/site';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/home.css?url';

const meta = {
  title: 'Contact Us | Hipco Montra Electric',
  description: 'Get in touch with Hipco for Montra Electric vehicles: customer care, sales and inquiries.',
  stylesheet,
  bodyClass: 'body-4',
};

export default function ContactPage() {
  usePageMeta(meta);
  return (
    <>
      <div style={{ background: '#0b0f14', color: '#fff', paddingTop: 110, paddingBottom: 56 }}>
        <div className="base-container-padding-flex-gap">
          <div className="carousel-header">
            <h2 className="heading-2" style={{ color: '#fff' }}>
              Contact <span className="text-span">Us</span>
            </h2>
            <p className="paragraph-2" style={{ color: '#fff' }}>
              We&apos;re here to help you explore our range of electric vehicles.
            </p>
          </div>
        </div>
      </div>
      <div className="base-container-padding-flex-gap" style={{ paddingTop: 48, paddingBottom: 80, minHeight: '40vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {site.contact.map((item) => (
            <p key={item.label} className="paragraph-2" style={{ margin: 0 }}>
              <strong>{item.label}: </strong>
              <a href={item.href}>{item.text}</a>
            </p>
          ))}
        </div>
      </div>
      <SideActions variant="home" />
    </>
  );
}
