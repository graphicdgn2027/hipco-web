import { ROUTES } from '@/routes/paths';

export const primaryNav = [
  { label: 'Our Product', className: 'nav1-our-products', opensProducts: true },
  { label: 'About Us', className: 'nav-2-about-us', href: '#' },
  { label: 'Find a Dealer', className: 'nav-4-test-drive', href: '#' },
];

export const mobileMenu = [
  { label: 'Our Products', opensProducts: true },
  { label: 'About Us', href: '#' },
  { label: 'Become a Dealer', href: '/become-a-dealer' },
  { label: 'Find a Dealer', href: '#' },
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
      { label: 'About Us', href: '#', className: 'link-block-54-copy', textClassName: 'text-block-155' },
      { label: 'Sitemap', href: '/sitemap', className: 'link-block-44' },
      {
        label: 'Supplier Code of Conduct',
        href: 'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69fc47b3a575464a781d8291_SCoc.pdf',
        className: 'link-block-53',
        external: true,
      },
    ],
  },
  {
    id: 'w-node-ad4fc399-69b2-4256-755a-c0ca2328859e-23288569',
    links: [
      { label: 'Investors', href: '/investors', className: 'link-block-45' },
      { label: 'Find a Dealer', href: '#', className: 'link-block-46' },
      { label: 'Become a Dealer', href: '/become-a-dealer', className: 'link-block-48' },
      { label: 'Contact Us', href: '/contact-us', className: 'link-block-49' },
    ],
  },
  {
    id: 'w-node-ad4fc399-69b2-4256-755a-c0ca232885b1-23288569',
    links: [
      { label: 'Brand Assets', href: '/brand-assets', className: 'link-block-51' },
      { label: 'Media & Accolades', href: '/media-accolades', className: 'link-block-42' },
      { label: 'Blogs', href: '/blogs', className: 'link-block-50' },
    ],
  },
];

export const legalLinks = [
  { label: 'Privacy Policy - Power Dock', href: '/privacy-policy-powerdock' },
  { label: 'Privacy Policy', href: '/privacy' },
];
