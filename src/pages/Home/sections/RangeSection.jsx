import { AppLink } from '@/components/ui/AppLink';
import { ArrowIcon } from '@/components/ui/Button';
import { vehicles } from '@/data/vehicles';
import './range.css';

export default function RangeSection() {
  return (
    <section id="vehicle-range" className="hp-section hp-section--page" aria-labelledby="range-title">
      <div className="hp-container">
        <header className="hp-heading">
          <p className="hp-eyebrow">Our range</p>
          <h2 id="range-title" className="hp-title">
            One vision, multiple mobility solutions
          </h2>
          <p className="hp-lead">
            One platform. Multiple possibilities. Endless electric potential. A thoughtfully engineered range of
            electric mobility solutions, built to deliver performance, reliability, and long-term sustainability.
          </p>
        </header>

        <ul className="range-grid">
          {vehicles.map((vehicle) => (
            <li key={vehicle.id}>
              <AppLink href={vehicle.href} className="range-card" aria-labelledby={`range-${vehicle.id}`}>
                <span className="range-card__image">
                  <img src={vehicle.image} alt="" loading="lazy" style={{ objectPosition: vehicle.imagePosition }} />
                </span>
                <span className="range-card__body">
                  <span className="range-card__category">{vehicle.category}</span>
                  <span id={`range-${vehicle.id}`} className="range-card__name">
                    {vehicle.name}
                  </span>
                  <span className="range-card__summary">{vehicle.summary}</span>
                  <span className="range-card__cta">
                    Explore {vehicle.name}
                    <ArrowIcon />
                  </span>
                </span>
              </AppLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
