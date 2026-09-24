import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/eviator.css?url';
import Faq from '@/components/sections/Faq';
import { faqs } from '@/data/faqs';
import Hero from './sections/Hero';
import TrueEv from './sections/TrueEv';
import ElectricIntelligence from './sections/ElectricIntelligence';
import UseCases from './sections/UseCases';
import ReeferOption from './sections/ReeferOption';
import Features from './sections/Features';
import Ecosystem from './sections/Ecosystem';
import Colors from './sections/Colors';
import BuiltFor from './sections/BuiltFor';
import Advantage from './sections/Advantage';
import MediaAccolades from './sections/MediaAccolades';

const meta = {
  title: 'EVIATOR Electric Small Commercial Vehicle | Montra Electric',
  description:
    'The Montra Electric EVIATOR is an electric small commercial vehicle built for urban and intercity logistics, with 32kWh and 50kWh variants.',
  stylesheet,
  bodyClass: '',
};

export default function EviatorPage() {
  usePageMeta(meta);
  return (
    <>
      <Hero />
      <TrueEv />
      <ElectricIntelligence />
      <UseCases />
      <ReeferOption />
      <Features />
      <Ecosystem />
      <Colors />
      <BuiltFor />
      <Advantage />
      <MediaAccolades />
      <Faq title="Montra Electric Eviator Electric Mini Truck FAQs" items={faqs.eviator} />
      <SideActions
        brochure={{
          pdf: 'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a420aca1c64100dbb2134a1_EVIATOR%20Range%20Brochure.pdf',
          requireForm: true,
        }}
      />
    </>
  );
}
