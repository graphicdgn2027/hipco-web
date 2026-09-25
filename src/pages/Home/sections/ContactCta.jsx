import { Button } from '@/components/ui/Button';
import { site } from '@/config/site';
import { ROUTES } from '@/routes/paths';
import './cta.css';

const customerCare = site.contact.find((item) => item.primary);

export default function ContactCta() {
  return (
    <section className="hp-section hp-section--page" aria-labelledby="cta-title">
      <div className="hp-container">
        <div className="cta">
          <div className="cta__copy">
            <h2 id="cta-title" className="cta__title">
              Ready to go electric?
            </h2>
            <p className="cta__text">
              Talk to our team about test drives, pricing and dealership enquiries. We&apos;re based at{' '}
              {site.address.lines.join(', ')}.
            </p>
          </div>
          <div className="cta__actions">
            <Button href={ROUTES.contact} variant="inverse">
              Contact us
            </Button>
            <Button href={customerCare.href} variant="outline-inverse">
              Call {customerCare.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
