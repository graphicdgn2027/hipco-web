import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/home.css?url';
import '../Contact/contact.css'; // Reuse contact layout styles for form

const meta = {
  title: 'Become a Dealer | HIPCO Trading Pvt. Ltd.',
  description: 'Join our growing network of Montra Electric dealers across Nepal.',
  stylesheet,
  bodyClass: 'body-4',
};

export default function BecomeDealerPage() {
  usePageMeta(meta);

  return (
    <main className="ct-page">
      <SideActions variant="home" />
      <section className="ct-hero ct-hero--solo">
        <div className="ct-shell">
          <p className="ct-eyebrow">Partner with us</p>
          <h1 className="ct-hero__title">Become a <span>Dealer.</span></h1>
          <p className="ct-hero__lead">
            Join Nepal's electric mobility revolution. Partner with HIPCO Trading Pvt. Ltd. and bring Montra Electric vehicles to your region.
          </p>
        </div>
      </section>
      <section className="ct-body">
        <div className="ct-shell">
          <div className="btd-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="btd-card__heading">Express Your Interest</h2>
            <form className="btd-form__grid" onSubmit={(e) => e.preventDefault()} style={{ marginTop: '20px' }}>
              <label className="btd-field">
                <span>Full Name <em>*</em></span>
                <input type="text" placeholder="Your Name" required />
              </label>
              <label className="btd-field">
                <span>Phone <em>*</em></span>
                <input type="tel" placeholder="+977 98XXXXXXXX" required />
              </label>
              <label className="btd-field">
                <span>Email <em>*</em></span>
                <input type="email" placeholder="you@example.com" required />
              </label>
              <label className="btd-field">
                <span>Proposed Dealership Location <em>*</em></span>
                <input type="text" placeholder="City / District" required />
              </label>
              <label className="btd-field btd-field--wide">
                <span>Prior Business Experience</span>
                <textarea rows="4" placeholder="Briefly describe your current business or automobile experience..."></textarea>
              </label>
              <div className="btd-form__footer" style={{ gridColumn: '1 / -1' }}>
                <button type="button" className="btd-btn btd-btn--primary">Submit Inquiry</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
