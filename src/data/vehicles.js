import { ROUTES } from '@/routes/paths';

/** imagePosition: CSS object-position used when the photo is cropped. */
export const vehicles = [
  {
    id: 'super-auto',
    name: 'Super Auto',
    category: 'Last Mile',
    headline: 'Leading the Charge in Last-Mile Mobility',
    summary: 'Driving smarter deliveries with powerful, efficient, and sustainable electric solutions.',
    image: '/images/hero/super-auto.jpg',
    imagePosition: 'center 60%',
    href: ROUTES.superAuto,
  },
  {
    id: 'super-cargo',
    name: 'Super Cargo',
    category: 'Last Mile',
    headline: 'Leading the Shift in Automotive',
    summary: 'Meet the Montra Electric Super Cargo range, built to carry more and cost less to run.',
    image: '/images/hero/super-cargo-range.jpg',
    imagePosition: '62% 60%',
    href: ROUTES.superCargo,
  },
  {
    id: 'eviator',
    name: 'EVIATOR',
    category: 'Small Commercial Vehicle',
    headline: 'Built to Redefine Everyday Logistics',
    summary: 'Long-range endurance, heavy-lift capability, and intelligent logistics.',
    image: '/images/hero/eviator-studio.jpg',
    imagePosition: 'center 60%',
    href: ROUTES.eviator,
  },
];
