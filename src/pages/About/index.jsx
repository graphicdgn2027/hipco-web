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

const focusAreas = [
  ['01', 'Montra electric three-wheelers'],
  ['02', 'Electric vehicle sales and distribution'],
  ['03', 'Dealer network development'],
  ['04', 'Customer and fleet engagement'],
  ['05', 'After-sales and service support'],
  ['06', 'Vehicle financing partnerships'],
];

export default function AboutPage() {
  usePageMeta(meta);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-shell about-hero__content">
          <div className="about-hero__brand">
            <img src="/logo/hipco-DGO-logo.png" alt="HIPCO" />
            <span>A Diwakar Golchha Organisation company</span>
          </div>
          <p className="about-eyebrow">Electric mobility in Nepal</p>
          <h1>Electric mobility,<br /><em>made for Nepal.</em></h1>
          <p className="about-hero__lead">Building the next chapter of sustainable transport with Montra Electric Vehicles.</p>
          <div className="about-hero__line" aria-hidden="true" />
        </div>
        <div className="about-hero__glow" aria-hidden="true" />
      </section>

      <section className="about-intro about-shell">
        <p className="about-section-label">Who we are</p>
        <div className="about-intro__grid">
          <h2>A growing commitment to the future of mobility.</h2>
          <div className="about-copy">
            <p>
              <strong>The Diwakar Golchha Organisation (DGO)</strong> is a legacy-driven Nepali conglomerate with
              interests in manufacturing, trading, consumer goods, real estate, and financial services. Its portfolio
              includes well-known names such as Hulas Steel Industries and HIPCO Trading Pvt. Ltd. Guided by
              integrity, innovation, and service excellence, and supported by thousands of employees, DGO has long
              contributed to Nepal’s industrial growth.
            </p>
            <p>
              <strong>HIPCO Trading Pvt. Ltd.</strong>, a subsidiary of DGO, is the authorized distributor of TI Clean
              Mobility Pvt. Ltd. in Nepal. It represents Montra Electric vehicles in the country’s electric
              three-wheeler segment. The company is building capabilities in sales, distribution, dealer development,
              customer support, and after-sales service, with the goal of bringing world-class electric vehicle
              technology to Nepal and making clean, modern mobility accessible to more people.
            </p>
            <p>
              As electric mobility evolves, HIPCO is expanding beyond a single product category. Its aim is to build
              a broader, sustainable e-mobility platform for Nepal, carrying forward the Group’s commitment to the
              country’s development with a new focus on environmental progress.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story about-shell">
        <p className="about-section-label">Our journey</p>
        <div className="about-intro__grid">
          <h2>
            Our Road to <em>Success, Innovation &amp; Redefining Mobility</em>
          </h2>
          <div className="about-copy">
            <p>
              Montra Nepal was founded with a clear purpose: to transform mobility through advanced commercial
              electric vehicle solutions for Nepal’s sustainability, innovation, and customer value. We build on
              DGO’s long legacy, combining engineering expertise with advanced manufacturing capabilities to deliver
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

      <section className="about-principles">
        <div className="about-shell">
          <div className="about-section-heading">
            <p className="about-section-label">What drives us</p>
            <h2>Our Core Principles, Designed to Perform.</h2>
          </div>
          <div className="about-principles__grid">
            <article className="about-principles__card">
              <h3>Our Vision</h3>
              <p>
                To advance the quality of life by delivering a sustainable, more responsible and efficient e-mobility
                ecosystem that makes transportation in Nepal more accessible, innovative, and reliable.
              </p>
            </article>
            <article className="about-principles__card">
              <h3>Our Mission</h3>
              <p>
                Our mission is to empower the dreams and ambitions of a new generation by bringing clean, reliable,
                and affordable electric three-wheelers to Nepal’s roads — supporting progress and promoting
                environmental responsibility while keeping service and quality at the centre of everything we do.
              </p>
              <p>
                Through every dealer we onboard, every vehicle we deliver, and every customer we support, we are
                building the EV infrastructure Nepal needs to move forward sustainably.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-focus">
        <div className="about-shell">
          <div className="about-section-heading">
            <p className="about-section-label">Current focus</p>
            <h2>Creating confidence in every journey.</h2>
          </div>
          <div className="about-focus__grid">
            {focusAreas.map(([number, title]) => (
              <article className="about-focus__card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-green">
        <div className="about-shell about-green__content">
          <p className="about-section-label">Sustainability</p>
          <h2>
            Advancing <em>Green Solutions Every Day</em>
          </h2>
          <p className="about-green__text">
            Delivering green mobility is a commitment we live through every policy, partnership, and product
            decision. As a responsible company, connecting people and places with zero-emission vehicles is how we
            stay true to Nepal’s natural heritage while building its economic future. We continue to focus on
            sustainable and advanced electric mobility solutions.
          </p>
          <a href="https://www.montranepal.com" target="_blank" rel="noreferrer" className="about-cta">
            Visit Montra Nepal
          </a>
        </div>
      </section>

      <section className="about-future">
        <div className="about-shell about-future__content">
          <p className="about-section-label">Future direction</p>
          <h2>Moving Nepal forward,<br /><em>electrically.</em></h2>
          <p>
            HIPCO will continue to explore other electric mobility segments and related solutions suited to Nepal’s
            changing transport needs.
          </p>
          <div className="about-office">
            <p className="about-section-label">Visit us</p>
            <p className="about-office__name">HIPCO Trading Pvt. Ltd.</p>
            <p className="about-office__address">
              A Subsidiary of Diwakar Golchha Organisation
              <br />
              Golchha House, Ganabahal, Kathmandu, Nepal
            </p>
            <div className="about-office__actions">
              <a href="https://www.montranepal.com" target="_blank" rel="noreferrer" className="about-office__link">
                www.montranepal.com
              </a>
              <AppLink href={ROUTES.contact} className="about-cta">
                Get in Touch
              </AppLink>
            </div>
          </div>
        </div>
      </section>
      <SideActions variant="home" />
    </main>
  );
}
