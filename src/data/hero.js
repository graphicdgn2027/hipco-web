import { ROUTES } from '@/routes/paths';

/** position: CSS object-position used when the photo is cropped to the hero. */
export const heroSlides = [
  {
    id: 'super-auto',
    label: 'Super Auto',
    category: 'Last Mile',
    title: 'Leading the Charge in Last-Mile Mobility',
    text: 'Driving smarter deliveries with powerful, efficient, and sustainable electric solutions.',
    image: '/images/hero/super-auto.jpg',
    position: 'center 60%',
    href: ROUTES.superAuto,
  },
  {
    id: 'super-cargo',
    label: 'Super Cargo',
    category: 'Last Mile',
    title: 'Leading the Shift in Automotive',
    text: 'Meet the Montra Electric Super Cargo range, built to carry more and cost less to run.',
    image: '/images/hero/super-cargo-range.jpg',
    position: '62% 60%',
    href: ROUTES.superCargo,
  },
  {
    id: 'eviator',
    label: 'EVIATOR',
    category: 'Small Commercial Vehicle',
    title: 'Built to Redefine Everyday Logistics',
    text: 'Long-range endurance, heavy-lift capability, and intelligent logistics.',
    image: '/images/hero/eviator-studio.jpg',
    position: 'center 60%',
    href: ROUTES.eviator,
  },
];
