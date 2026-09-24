import { useState } from 'react';
import BrochureModal from '@/components/common/BrochureModal';
import { AppLink } from '@/components/ui/AppLink';
import { site } from '@/config/site';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import { downloadFile } from '@/services/brochure';

// Webflow component variants: the home page shows "View Brochure", product pages show "Download Brochure".
const VARIANTS = {
  home: 'w-variant-5fb23f4e-0f51-fe84-c528-e1b29f03093f',
  product: 'w-variant-8b046784-2286-f1de-a1a3-d2bff07b69f4',
};

const join = (...parts) => parts.filter(Boolean).join(' ');

function ActionIcon({ href, icon, iconClassName, external }) {
  const img = <img src={icon} alt="" className={iconClassName} />;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="div-block-96 w-inline-block">
        {img}
      </a>
    );
  }
  if (href) {
    return (
      <AppLink href={href} className="div-block-96 w-inline-block">
        {img}
      </AppLink>
    );
  }
  return <div className="div-block-96">{img}</div>;
}

/**
 * brochure.pdf: file offered by "Download Brochure"; brochure.requireForm: collect a lead before downloading.
 */
export default function SideActions({ variant = 'product', brochure }) {
  const [hovered, setHovered] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  useBodyScrollLock(modalOpen);

  const variantClass = VARIANTS[variant];
  const isHome = variant === 'home';

  const handleDownload = () => {
    if (!brochure?.pdf) return;
    if (brochure.requireForm) setModalOpen(true);
    else downloadFile(brochure.pdf);
  };

  // rowVariantOn: the label row also carries the variant class (matches the Webflow component markup).
  const actions = [
    { id: 1, label: 'Find Dealer', icon: '/images/d06736c0568e.svg', href: '#', variantOn: isHome, rowVariantOn: isHome },
    { id: 2, label: 'Book A Test Drive', icon: '/images/42406fb6988b.svg', href: '#' },
    { id: 3, label: 'View Brochure', icon: '/images/37132f2c09d9.svg', variantOn: !isHome },
    { id: 4, label: 'Download Brochure', icon: '/images/217bd0c755e6.svg', variantOn: isHome, rowVariantOn: !isHome, onClick: handleDownload },
    { id: 5, label: 'WhatsApp Chat', icon: '/images/0baef1d87799.svg', href: site.whatsappChat, external: true, iconClassName: 'image-28' },
  ];

  return (
    <div className={join('grid-6', !isHome && variantClass)}>
      {actions.map((action) => (
        <div
          key={action.id}
          className={join(`grid-div-${action.id}`, action.variantOn && variantClass)}
          onMouseEnter={() => setHovered(action.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={action.onClick}
          role={action.onClick ? 'button' : undefined}
        >
          <div
            className={join(`row${action.id}`, action.rowVariantOn && variantClass)}
            style={{ display: hovered === action.id ? 'flex' : 'none' }}
          >
            <div className="text-block-54">{action.label}</div>
          </div>
          <ActionIcon
            href={action.href}
            icon={action.icon}
            iconClassName={action.iconClassName}
            external={action.external}
          />
        </div>
      ))}
      <BrochureModal
        open={modalOpen}
        pdfUrl={brochure?.pdf}
        variantClassName={variantClass}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
