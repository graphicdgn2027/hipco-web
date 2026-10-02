import { ROUTES } from '@/routes/paths';

export const primaryNav = [
  { label: 'Our Product', className: 'nav1-our-products', opensProducts: true },
  { label: 'About Us', className: 'nav-2-about-us', href: ROUTES.about },
  { label: 'Book a Test Drive', className: 'nav-4-test-drive', href: ROUTES.bookTestDrive },
  { label: 'Find a Dealer', className: 'nav-4-test-drive', href: ROUTES.findDealer },
  { label: 'Contact Us', className: 'nav-4-test-drive', href: ROUTES.contact },
];

export const mobileMenu = [
  { label: 'Our Products', opensProducts: true },
  { label: 'About Us', href: ROUTES.about },
  { label: 'Book a Test Drive', href: ROUTES.bookTestDrive },
  { label: 'Become a Dealer', href: '/become-a-dealer' },
  { label: 'Find a Dealer', href: ROUTES.findDealer },
  { label: 'Contact Us', href: ROUTES.contact },
];

export const productCategories = [
  {
    title: 'Last Mile',
    href: '/lastmile',
    linkClassName: 'link-block',
    gridId: 'w-node-b613eaa0-ff04-41dc-1e2c-b101510d68e1-9803b98a',
    products: [
      { name: 'SUPER AUTO', href: ROUTES.superAuto, image: '/images/69494312f449.png', width: 150 },
      { name: 'Super Cargo', href: ROUTES.superCargo, image: '/images/ad272490b010.png', width: 150 },
    ],
  },
  {
    title: 'Small Commercial Vehicle',
    href: '/e-scv',
    linkClassName: 'link-block-4',
    gridId: 'w-node-b613eaa0-ff04-41dc-1e2c-b101510d68f0-9803b98a',
    products: [{ name: 'Eviator', href: ROUTES.eviator, image: '/images/fd426928e166.png', width: 180 }],
  },
];

export const footerColumns = [
  {
    id: 'w-node-ad4fc399-69b2-4256-755a-c0ca23288579-23288569',
    heading: 'Our Product',
    links: [
      { label: 'Super Auto', href: ROUTES.superAuto, className: 'link-block-35' },
      { label: 'Super Cargo', href: ROUTES.superCargo, className: 'link-block-36' },
      { label: 'EVIATOR', href: ROUTES.eviator, className: 'link-block-37' },
    ],
  },
  {
    id: 'w-node-ad4fc399-69b2-4256-755a-c0ca2328858b-23288569',
    links: [
      { label: 'About Us', href: ROUTES.about, className: 'link-block-54-copy', textClassName: 'text-block-155' },
      { label: 'Sitemap', href: '/sitemap', className: 'link-block-44' },
    ],
  },
  {
    id: 'w-node-ad4fc399-69b2-4256-755a-c0ca2328859e-23288569',
    links: [
      { label: 'Find a Dealer', href: ROUTES.findDealer, className: 'link-block-46' },
      { label: 'Contact Us', href: ROUTES.contact, className: 'link-block-49' },
    ],
  },
  {
    id: 'w-node-ad4fc399-69b2-4256-755a-c0ca232885b1-23288569',
    links: [
      { label: 'Media & Accolades', href: '/media-accolades', className: 'link-block-42' },
    ],
  },
];

export const legalLinks = [
  { label: 'Privacy Policy - Power Dock', href: '/privacy-policy-powerdock' },
  { label: 'Privacy Policy', href: '/privacy' },
];
