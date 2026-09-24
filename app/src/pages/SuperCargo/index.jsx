import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/super-cargo.css?url';
import MediaAccolades from '@/components/sections/MediaAccolades';
import Faq from '@/components/sections/Faq';
import { faqs } from '@/data/faqs';
import Hero from './sections/Hero';
import Models from './sections/Models';
import WhatSetsItApart from './sections/WhatSetsItApart';
import Interior from './sections/Interior';
import Features from './sections/Features';
import Exteriors from './sections/Exteriors';
import Utility from './sections/Utility';
import Colors from './sections/Colors';
import BuiltFor from './sections/BuiltFor';
import Advantage from './sections/Advantage';
import Blogs from './sections/Blogs';

const meta = {
  title: 'Super Cargo | Electric Cargo Auto Rickshaw | Montra Electric',
  description:
    'Efficient electric cargo auto rickshaw for last-mile delivery. Get reliable, eco-friendly performance &amp; low running costs with our EV goods carrier auto rickshaw.',
  stylesheet,
  bodyClass: '',
};

export default function SuperCargoPage() {
  usePageMeta(meta);
  return (
    <>
      <Hero />
      <Models />
      <WhatSetsItApart />
      <Interior />
      <Features />
      <Exteriors />
      <Utility />
      <Colors />
      <BuiltFor />
      <Advantage />
      <MediaAccolades />
      <Blogs />
      <Faq title="Montra Electric Super Cargo FAQs" items={faqs.superCargo} />
      <SideActions
        brochure={{
          pdf: 'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69e6ecf0c5bbcc7b0be7c3fb_Super%20Cargo%20Brochure.pdf',
          requireForm: true,
        }}
      />
    </>
  );
}
