import SideActions from '@/components/common/SideActions';
import { site } from '@/config/site';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/home.css?url';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import './contact.css';

const meta = {
  title: 'Contact Us | Hipco Montra Electric',
  description:
    'Visit or contact Hipco at BNJ Tower, Tripureshwor, Kathmandu for Montra Electric vehicles: customer care, sales, directions and inquiries.',
  stylesheet,
  bodyClass: 'body-4',
};

const phones = site.contact.filter((item) => item.href.startsWith('tel:'));
const emails = site.contact.filter((item) => item.href.startsWith('mailto:'));

const SOCIAL = [
  { key: 'facebook', label: 'Facebook' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'x', label: 'X' },
];

function InfoCard({ title, children }) {
  return (
    <div className="contact-card contact-info">
      <h3 className="contact-info__title">{title}</h3>
      {children}
    </div>
  );
}

export default function ContactPage() {
  usePageMeta(meta);
  return (
    <>
      <div className="contact-hero">
        <div className="contact-container">
          <p className="contact-eyebrow">Hipco &middot; Montra Electric</p>
          <h1 className="contact-title">
            Contact <span>Us</span>
          </h1>
          <p className="contact-lead">
            Questions about our electric vehicles, a test drive or dealership? Reach out or visit our office in Kathmandu.
          </p>
        </div>
      </div>

      <div className="contact-container contact-body">
        <div className="contact-layout">
          <div className="contact-info-column">
            <InfoCard title="Visit us">
              <address className="contact-address">
                {site.address.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </InfoCard>
            <InfoCard title="Call us">
              <ul className="contact-list">
                {phones.map((item) => (
                  <li key={item.label}>
                    <span className="contact-muted">{item.label}</span>
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Email us">
              <ul className="contact-list">
                {emails.map((item) => (
                  <li key={item.label}>
                    <span className="contact-muted">{item.label}</span>
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Follow us">
              <ul className="contact-social">
                {SOCIAL.map((item) => (
                  <li key={item.key}>
                    <a href={site.social[item.key]} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
          <ContactForm />
        </div>
        <ContactMap />
      </div>
      <SideActions variant="home" />
    </>
  );
}
