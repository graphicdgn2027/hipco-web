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
                  Call {dealer.cell}
                </a>
                <a href={waLink(dealer.whatsapp)} target="_blank" rel="noreferrer" className="fd-btn fd-btn--solid">
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
