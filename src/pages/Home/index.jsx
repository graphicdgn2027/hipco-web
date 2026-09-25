import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/home.css?url';
import ContactCta from './sections/ContactCta';
import HeroSlider from './sections/HeroSlider';
import NewsSection from './sections/NewsSection';
import RangeSection from './sections/RangeSection';
import './home.css';

const meta = {
  title: "Montra Electric | India's Leading Electric Commercial Vehicle Company",
  description:
    'Leading manufacturer of electric commercial vehicles in India. Explore electric trucks, tractors, auto rickshaws & mini trucks. Test drive our EV commercial vehicles today.',
  stylesheet,
  bodyClass: 'body-4',
};

export default function HomePage() {
  usePageMeta(meta);
  return (
    <div className="hp">
      <HeroSlider />
      <RangeSection />
      <NewsSection />
      <ContactCta />
      <SideActions variant="home" />
    </div>
  );
}
