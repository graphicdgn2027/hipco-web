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
