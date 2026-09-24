import { site } from '@/config/site';

const query = encodeURIComponent(site.address.mapQuery);
const embedUrl = `https://www.google.com/maps?q=${query}&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

export default function ContactMap() {
  return (
    <section className="contact-map" aria-labelledby="contact-map-title">
      <div className="contact-map__head">
        <div>
          <h2 id="contact-map-title" className="contact-section-title">
            Find us
          </h2>
          <p className="contact-muted">{site.address.lines.join(', ')}</p>
        </div>
        <div className="contact-map__actions">
          <a className="contact-btn contact-btn--primary" href={directionsUrl} target="_blank" rel="noreferrer">
            Get directions
          </a>
          <a className="contact-btn contact-btn--ghost" href={mapUrl} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </div>
      </div>
      <div className="contact-map__frame">
        <iframe
          title={`Map showing ${site.address.mapQuery}`}
          src={embedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
