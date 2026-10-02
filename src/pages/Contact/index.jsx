import { useState } from 'react';
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
    'Visit or contact Hipco at Golchha House, Ganabahal, Kathmandu for Montra Electric vehicles: customer care, sales, directions and inquiries.',
  stylesheet,
  bodyClass: 'body-4',
};

const phones = site.contact.filter((item) => item.href.startsWith('tel:'));
const emails  = site.contact.filter((item) => item.href.startsWith('mailto:'));

const SOCIAL = [
  { key: 'facebook',  label: 'Facebook',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
  { key: 'instagram', label: 'Instagram',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg> },
  { key: 'youtube',   label: 'YouTube',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#fff" /></svg> },
  { key: 'linkedin',  label: 'LinkedIn',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg> },
  { key: 'x',         label: 'X / Twitter',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
];

function isOfficeOpen() {
  const utcMs = Date.now() + new Date().getTimezoneOffset() * 60000;
  const np    = new Date(utcMs + 345 * 60000); // UTC+5:45
  const h     = np.getHours();
  return np.getDay() !== 6 && h >= 9 && h < 18;
}

const MAP_QUERY = encodeURIComponent('Golchha House, Ganabahal, Kathmandu, Nepal');

const COPY_ICON = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="8" height="9" rx="1.5" />
    <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v8A1.5 1.5 0 0 0 3.5 13H5" />
  </svg>
);
const CHECK_ICON = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l4 4 6-7" />
  </svg>
);

export default function ContactPage() {
  usePageMeta(meta);
  const [copied, setCopied]  = useState(null);
  const open                 = isOfficeOpen();

  const copy = (text, key) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <main className="ct-page">
      <SideActions variant="home" />

      {/* ── Hero ── */}
      <section className="ct-hero">
        <div className="ct-shell">
          <p className="ct-eyebrow">Hipco &middot; Montra Electric</p>
          <h1 className="ct-hero__title">Get in <span>touch.</span></h1>
          <p className="ct-hero__lead">
            Questions about our EVs, a test drive, or dealership opportunities?
            We&rsquo;re here &mdash; reach out or visit us in Kathmandu.
          </p>
          <div className="ct-hero__actions">
            <a className="ct-hero__btn ct-hero__btn--primary" href={phones[0]?.href}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12.5 19.79 19.79 0 0 1 1.07 3.9 2 2 0 0 1 3.04 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6.01 6.01l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call now
            </a>
            <a className="ct-hero__btn ct-hero__btn--wa" href={site.whatsappChat} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Main body ── */}
      <section className="ct-body">
        <div className="ct-shell">
          <div className="ct-layout">

            {/* ── Sidebar ── */}
            <aside className="ct-details">

              {/* Address */}
              <div className="ct-detail-block">
                <div className="ct-detail-block__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div className="ct-detail-block__content">
                  <p className="ct-detail-block__title">Corporate office</p>
                  <address className="ct-detail-block__address">
                    <strong>HIPCO Trading Pvt. Ltd.</strong>
                    <span>A Subsidiary of Diwakar Golchha Organisation</span>
                    <span>Golchha House, Ganabahal</span>
                    <span>Kathmandu, Nepal</span>
                  </address>
                  <a
                    className="ct-dir-link"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="ct-detail-block">
                <div className="ct-detail-block__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12.5 19.79 19.79 0 0 1 1.07 3.9 2 2 0 0 1 3.04 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6.01 6.01l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="ct-detail-block__content">
                  <p className="ct-detail-block__title">Phone</p>
                  <ul className="ct-detail-block__list">
                    {phones.map((p) => (
                      <li key={p.label}>
                        <span>{p.label}</span>
                        <div className="ct-contact-item">
                          <a href={p.href}>{p.text}</a>
                          <button
                            className={`ct-copy-btn${copied === p.label ? ' is-copied' : ''}`}
                            onClick={() => copy(p.text, p.label)}
                            aria-label={`Copy ${p.text}`}
                            title={copied === p.label ? 'Copied!' : 'Copy'}
                          >
                            {copied === p.label ? CHECK_ICON : COPY_ICON}
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Email */}
              <div className="ct-detail-block">
                <div className="ct-detail-block__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="ct-detail-block__content">
                  <p className="ct-detail-block__title">Email</p>
                  <ul className="ct-detail-block__list">
                    {emails.map((e) => (
                      <li key={e.label}>
                        <span>{e.label}</span>
                        <div className="ct-contact-item">
                          <a href={e.href}>{e.text}</a>
                          <button
                            className={`ct-copy-btn${copied === e.label ? ' is-copied' : ''}`}
                            onClick={() => copy(e.text, e.label)}
                            aria-label={`Copy ${e.text}`}
                            title={copied === e.label ? 'Copied!' : 'Copy'}
                          >
                            {copied === e.label ? CHECK_ICON : COPY_ICON}
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hours */}
              <div className="ct-detail-block">
                <div className="ct-detail-block__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" />
                  </svg>
                </div>
                <div className="ct-detail-block__content">
                  <div className="ct-hours-head">
                    <p className="ct-detail-block__title">Office hours</p>
                    <span className={`ct-status ct-status--${open ? 'open' : 'closed'}`}>
                      <span className="ct-status__dot" />
                      {open ? 'Open now' : 'Closed'}
                    </span>
                  </div>
                  <ul className="ct-hours-list">
                    <li>
                      <span>Sunday – Friday</span>
                      <span>9:00 AM – 6:00 PM</span>
                    </li>
                    <li className="is-closed">
                      <span>Saturday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social */}
              <div className="ct-detail-block ct-detail-block--social">
                <div className="ct-detail-block__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
                <div className="ct-detail-block__content">
                  <p className="ct-detail-block__title">Follow us</p>
                  <div className="ct-social-grid">
                    {SOCIAL.map((s) => (
                      <a key={s.key} className="ct-social-item" href={site.social[s.key]} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </aside>

            {/* ── Form ── */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <div className="ct-shell">
        <ContactMap />
      </div>
    </main>
  );
}
