import { useEffect, useRef } from 'react';
import SideActions from '@/components/common/SideActions';
import { AppLink } from '@/components/ui/AppLink';
import usePageMeta from '@/hooks/usePageMeta';
import { ROUTES } from '@/routes/paths';
import stylesheet from '@/styles/webflow/home.css?url';
import './about.css';

const meta = {
  title: 'About Us | HIPCO Trading Pvt. Ltd.',
  description: 'HIPCO Trading Pvt. Ltd. is building a sustainable electric mobility platform for Nepal.',
  stylesheet,
  bodyClass: 'body-4',
};

const range = [
  { name: 'Super Auto', category: 'Passenger three-wheeler', image: '/images/hero/super-auto.jpg', href: ROUTES.superAuto },
  { name: 'Super Cargo', category: 'Cargo three-wheeler', image: '/images/hero/super-cargo-range.jpg', href: ROUTES.superCargo },
  { name: 'EVIATOR', category: 'Small commercial vehicle', image: '/images/hero/eviator-studio.jpg', href: ROUTES.eviator },
];

const sustainPillars = [
  {
    id: 'zero',
    title: 'Zero Emissions',
    body: "Every vehicle we deliver puts a zero-emission transport option on Nepal's roads, reducing carbon output one journey at a time.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'local',
    title: 'Local Impact',
    body: "Through our growing dealer network and service centres, we create skilled jobs and build long-term economic value across Nepal.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 6l2.5 7.5H30l-6 4.5 2.5 7.5L20 21l-6.5 4.5 2.5-7.5-6-4.5h7.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 27v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'tech',
    title: 'Clean Technology',
    body: "Advanced electric vehicle platforms engineered for reliability across Nepal's diverse terrain, altitude, and weather conditions.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="14" width="24" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 14V11a2 2 0 012-2h8a2 2 0 012 2v3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 21h4M25 21h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 28v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'future',
    title: 'Sustainable Future',
    body: "Building the infrastructure, financing partnerships, and community confidence Nepal needs to fully transition to electric mobility.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 28c4-8 12-14 20-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 12v6M17 15l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M26 20l1.5 1.5L30 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const focusAreas = [
  'Montra electric three-wheelers',
  'Electric vehicle sales and distribution',
  'Dealer network development',
  'Customer and fleet engagement',
  'After-sales and service support',
  'Vehicle financing partnerships',
];

const futureItems = [
  {
    num: '01',
    title: 'Market Expansion',
    body: "Growing our authorised dealer network to connect more communities to clean, reliable electric transport across Nepal.",
  },
  {
    num: '02',
    title: 'New EV Segments',
    body: "Exploring additional electric vehicle categories suited to Nepal's evolving passenger and commercial transport needs.",
  },
  {
    num: '03',
    title: 'Fleet Programs',
    body: "Building commercial fleet solutions and financing programs for businesses ready to make the switch to electric.",
  },
];

function Arrow({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function useScrollReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const items = root.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    root.classList.add('ab-reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootRef]);
}

export default function AboutPage() {
  usePageMeta(meta);
  const pageRef = useRef(null);
  useScrollReveal(pageRef);

  return (
    <main className="about-page" ref={pageRef}>
      {/* Hero */}
      <section className="ab-hero">
        <div className="ab-shell">
          <div className="ab-hero__grid">
            <div data-reveal>
              <p className="ab-label ab-label--light">Electric mobility in Nepal</p>
              <h1 className="ab-hero__title">
                Electric mobility,
                <br />
                <span>made for Nepal.</span>
              </h1>
            </div>
            <div className="ab-hero__right" data-reveal>
              <p className="ab-hero__lead">
                Building the next chapter of sustainable transport with Montra Electric Vehicles.
              </p>
              <div className="ab-hero__stats">
                <div className="ab-hero__stat">
                  <span className="ab-hero__stat-value">3</span>
                  <span className="ab-hero__stat-label">EV Models</span>
                </div>
                <div className="ab-hero__stat">
                  <span className="ab-hero__stat-value">100<small>%</small></span>
                  <span className="ab-hero__stat-label">Electric</span>
                </div>
                <div className="ab-hero__stat">
                  <span className="ab-hero__stat-value">1</span>
                  <span className="ab-hero__stat-label">Nepal Mission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are — clean modern */}
      <section className="ab-editorial">
        <div className="ab-shell">

          {/* Feature row: headline left, image right */}
          <div className="ab-editorial__feature">
            <div className="ab-editorial__feature-text" data-reveal>
              <div className="ab-editorial__eyeline">
                <p className="ab-label">Who we are</p>
                <span className="ab-editorial__badge">01</span>
              </div>
              <h2 className="ab-editorial__headline">
                A growing commitment to the future of mobility.
              </h2>
              <p className="ab-editorial__tagline">
                Building Nepal&rsquo;s electric vehicle ecosystem &mdash; clean, reliable, and built to last.
              </p>
            </div>

            <figure className="ab-editorial__fig" data-reveal style={{ '--ab-delay': '80ms' }}>
              <div className="ab-editorial__img-wrap">
                <img
                  src="/images/about/montra-range.webp"
                  alt="The Montra Electric range: Super Auto, Super Cargo and EVIATOR"
                  width="1920"
                  height="1080"
                  fetchPriority="high"
                />
              </div>
            </figure>
          </div>

          {/* Divider */}
          <hr className="ab-editorial__divider" data-reveal />

          {/* Three labelled columns */}
          <div className="ab-editorial__cols" data-reveal>
            <div className="ab-editorial__col">
              <p className="ab-editorial__col-label">The Group</p>
              <p className="ab-editorial__col-text">
                <strong>The Diwakar Golchha Organisation (DGO)</strong> is a legacy-driven Nepali
                conglomerate with interests in manufacturing, trading, consumer goods, real estate, and
                financial services. Guided by integrity, innovation, and service excellence, DGO has long
                contributed to Nepal&rsquo;s industrial growth.
              </p>
            </div>
            <div className="ab-editorial__col">
              <p className="ab-editorial__col-label">Our Role</p>
              <p className="ab-editorial__col-text">
                <strong>HIPCO Trading Pvt. Ltd.</strong> is the authorised distributor of TI Clean
                Mobility Pvt. Ltd. in Nepal &mdash; representing Montra Electric vehicles in the electric
                three-wheeler segment and building end-to-end capabilities in sales, dealer development,
                customer support, and after-sales service.
              </p>
            </div>
            <div className="ab-editorial__col">
              <p className="ab-editorial__col-label">Our Ambition</p>
              <p className="ab-editorial__col-text">
                As electric mobility evolves, HIPCO is expanding beyond a single product category &mdash;
                building a broader, sustainable e-mobility platform that carries forward the Group&rsquo;s
                commitment to Nepal&rsquo;s development with a new focus on environmental progress.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* The range we bring */}
      <section className="ab-section ab-section--muted">
        <div className="ab-shell">
          <div className="ab-heading-row" data-reveal>
            <div>
              <p className="ab-label">The range we bring</p>
              <h2 className="ab-title">Montra Electric vehicles in Nepal.</h2>
            </div>
          </div>
          <ul className="ab-range">
            {range.map((vehicle, index) => (
              <li key={vehicle.name} data-reveal style={{ '--ab-delay': `${index * 90}ms` }}>
                <AppLink href={vehicle.href} className="ab-range__card">
                  <span className="ab-range__media">
                    <img src={vehicle.image} alt="" loading="lazy" />
                  </span>
                  <span className="ab-range__body">
                    <span>
                      <span className="ab-range__category">{vehicle.category}</span>
                      <span className="ab-range__name">{vehicle.name}</span>
                    </span>
                    <span className="ab-range__arrow" aria-hidden="true">
                      <Arrow />
                    </span>
                  </span>
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our journey */}
      <section className="ab-section">
        <div className="ab-shell ab-split">
          <div data-reveal>
            <p className="ab-label">Our journey</p>
            <h2 className="ab-title">Our road to success, innovation &amp; redefining mobility.</h2>
          </div>
          <div className="ab-copy" data-reveal>
            <p>
              Montra Nepal was founded with a clear purpose: to transform mobility through advanced commercial
              electric vehicle solutions for Nepal's sustainability, innovation, and customer value. We build on
              DGO's long legacy, combining engineering expertise with advanced manufacturing capabilities to deliver
              superior products, convenience, and after-sales support.
            </p>
            <p>
              By focusing on total cost of ownership, reliability, charging convenience, and after-sales support, we
              aim to deliver a seamless and efficient electric mobility experience. Our goal goes beyond distributing
              vehicles — we are building an ecosystem for clean, accessible, and sustainable mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="ab-section ab-section--muted">
        <div className="ab-shell">
          <div className="ab-heading-row" data-reveal>
            <p className="ab-label">What drives us</p>
            <h2 className="ab-title">Our core principles, designed to perform.</h2>
          </div>
          <div className="ab-principles-grid">
            <div className="ab-principle ab-principle--vision" data-reveal>
              <h3 className="ab-principle__heading">Our Vision</h3>
              <p className="ab-principle__body">
                To advance the quality of life by delivering a sustainable, more responsible and efficient e-mobility
                ecosystem that makes transportation in Nepal more accessible, innovative, and reliable.
              </p>
              <div className="ab-principle__accent" aria-hidden="true">Vision</div>
            </div>
            <div className="ab-principle ab-principle--mission" data-reveal style={{ '--ab-delay': '130ms' }}>
              <h3 className="ab-principle__heading">Our Mission</h3>
              <p className="ab-principle__body">
                To empower the dreams and ambitions of a new generation by bringing clean, reliable, and affordable
                electric three-wheelers to Nepal&rsquo;s roads &mdash; supporting progress and promoting environmental
                responsibility while keeping service and quality at the centre of everything we do.
              </p>
              <p className="ab-principle__body ab-principle__body--small">
                Through every dealer we onboard, every vehicle we deliver, and every customer we support, we are
                building the EV infrastructure Nepal needs to move forward sustainably.
              </p>
              <div className="ab-principle__accent" aria-hidden="true">Mission</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current focus */}
      <section className="ab-section">
        <div className="ab-shell">
          <div data-reveal>
            <p className="ab-label">Current focus</p>
            <h2 className="ab-title ab-title--narrow">Creating confidence in every journey.</h2>
          </div>
          <ul className="ab-focus">
            {focusAreas.map((title, index) => (
              <li key={title} className="ab-focus__item" data-reveal style={{ '--ab-delay': `${(index % 3) * 80}ms` }}>
                <span className="ab-focus__index">{String(index + 1).padStart(2, '0')}</span>
                <span className="ab-focus__title">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sustainability — redesigned interactive section */}
      <section className="ab-sustain">
        <div className="ab-shell">
          <div className="ab-sustain__head">
            <div data-reveal>
              <p className="ab-label ab-label--light">Sustainability</p>
              <h2 className="ab-title ab-title--light">Advancing green solutions every day.</h2>
            </div>
            <p className="ab-sustain__lead" data-reveal>
              Delivering green mobility is a commitment we live through every policy, partnership, and product
              decision. Connecting people and places with zero-emission vehicles is how we stay true to Nepal's
              natural heritage while building its economic future.
            </p>
          </div>
          <div className="ab-sustain__grid">
            {sustainPillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className="ab-sustain__card"
                data-reveal
                style={{ '--ab-delay': `${index * 80}ms` }}
              >
                <div className="ab-sustain__icon">{pillar.icon}</div>
                <h3 className="ab-sustain__card-title">{pillar.title}</h3>
                <p className="ab-sustain__card-body">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future direction — redesigned */}
      <section className="ab-future">
        <div className="ab-shell">
          <div className="ab-future__head" data-reveal>
            <p className="ab-label">Future direction</p>
            <h2 className="ab-title">Moving Nepal forward, electrically.</h2>
            <p className="ab-copy ab-copy--lead">
              HIPCO will continue to explore other electric mobility segments and related solutions suited to Nepal's
              changing transport needs.
            </p>
          </div>
          <div className="ab-future__grid">
            {futureItems.map((item, index) => (
              <div
                key={item.num}
                className="ab-future__card"
                data-reveal
                style={{ '--ab-delay': `${index * 100}ms` }}
              >
                <span className="ab-future__card-num">{item.num}</span>
                <h3 className="ab-future__card-title">{item.title}</h3>
                <p className="ab-future__card-body">{item.body}</p>
                <div className="ab-future__card-line" aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="ab-future__office" data-reveal>
            <div className="ab-future__office-info">
              <p className="ab-label">Visit us</p>
              <p className="ab-office__name">HIPCO Trading Pvt. Ltd.</p>
              <address className="ab-office__address">
                A Subsidiary of Diwakar Golchha Organisation
                <br />
                Golchha House, Ganabahal, Kathmandu, Nepal
              </address>
            </div>
            <AppLink href={ROUTES.contact} className="ab-btn ab-btn--dark">
              Get in touch
              <Arrow />
            </AppLink>
          </div>
        </div>
      </section>

      <SideActions variant="home" />
    </main>
  );
}
