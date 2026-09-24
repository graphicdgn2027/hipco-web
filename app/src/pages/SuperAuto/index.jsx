import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/super-auto.css?url';
import MediaAccolades from '@/components/sections/MediaAccolades';
import Faq from '@/components/sections/Faq';
import { faqs } from '@/data/faqs';
import Hero from './sections/Hero';
import Models from './sections/Models';
import Highlights from './sections/Highlights';
import Interiors from './sections/Interiors';
import Efficiency from './sections/Efficiency';
import Exteriors from './sections/Exteriors';
import Colors from './sections/Colors';
import BuiltFor from './sections/BuiltFor';
import Advantage from './sections/Advantage';
import Blogs from './sections/Blogs';

const meta = {
  title: 'Super Auto | Electric Passenger Auto Rickshaw | Montra Electric',
  description:
    'Premium electric auto rickshaw for passenger transport. Our high range EV autos offer fast charging & superior comfort for local needs. Test drive our electric auto rickshaw today.',
  stylesheet,
  bodyClass: '',
};

export default function SuperAutoPage() {
  usePageMeta(meta);
  return (
    <>
      <Hero />
      <Models />
      <Highlights />
      <Interiors />
      <Efficiency />
      <Exteriors />
      <Colors />
      <BuiltFor />
      <Advantage />
      <Blogs />
      <MediaAccolades learnMoreClassName="link-block-55" />
      <Faq title="Montra Electric Super Auto FAQs" items={faqs.superAuto} />
      <SideActions
        brochure={{
          pdf: 'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69fc67f1d5925e2f966fb988_Super_Auto_Brochure.pdf',
          requireForm: false,
        }}
      />
    </>
  );
}
