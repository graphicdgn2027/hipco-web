import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/home.css?url';
import MediaAccolades from '@/components/sections/MediaAccolades';
import HeroSlider from './sections/HeroSlider';
import VehicleShowcase from './sections/VehicleShowcase';

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
    <>
      <HeroSlider />
      <VehicleShowcase />
      <MediaAccolades />
      <SideActions variant="home" />
    </>
  );
}
