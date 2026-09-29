import SideActions from '@/components/common/SideActions';
import { dealers } from '@/data/dealers';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/home.css?url';
import './find-dealer.css';

const meta = {
  title: 'Find a Dealer | HIPCO Trading Pvt. Ltd.',
  description: 'Find your nearest Montra Electric dealer across Nepal, from HIPCO Trading Pvt. Ltd.',
  stylesheet,
  bodyClass: 'body-4',
};

const waLink = (number) =>
  `https://api.whatsapp.com/send?phone=977${number}&text=${encodeURIComponent('Hi, I would like to know more about Montra Electric vehicles.')}`;

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.4 8.6c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.5-.1.1-.3.3-.4.4-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.2.1.4 0 .5-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.2.4.4.1.2.1.9-.2 1.4-.3.5-1.4 1.1-2 1.1-.5 0-1.2 0-3.7-1.1-3.1-1.4-5.1-4.5-5.2-4.7-.1-.2-.9-1.3-.9-2.5 0-1.2.6-1.8.8-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FindDealerPage() {
  usePageMeta(meta);

  return (
    <>
      <div className="fd-hero">
        <div className="fd-container">
          <p className="fd-eyebrow">HIPCO Trading &middot; Montra Electric</p>
          <h1 className="fd-title">
            Find a <span>Dealer</span>
          </h1>
          <p className="fd-lead">Our authorized dealer network across Nepal, ready to help with sales and service.</p>
        </div>
      </div>

      <div className="fd-container fd-body">
        <div className="fd-grid">
          {dealers.map((dealer) => (
            <article className="fd-card" key={`${dealer.name}-${dealer.location}`}>
              <p className="fd-card__location">{dealer.location}</p>
              <h2 className="fd-card__name">{dealer.name}</h2>
              <p className="fd-card__owner">{dealer.owner}</p>
              <div className="fd-card__actions">
                <a href={`tel:+977${dealer.cell}`} className="fd-btn fd-btn--ghost">
                  <PhoneIcon />
                  Call {dealer.cell}
                </a>
                <a href={waLink(dealer.whatsapp)} target="_blank" rel="noreferrer" className="fd-btn fd-btn--solid">
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <SideActions variant="home" />
    </>
  );
}
