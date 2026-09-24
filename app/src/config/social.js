import { site } from './site';

// Product lines keep their own channels except Facebook/Instagram, which use the Nepal accounts.
const overrides = {
  'e-scv': {
    youtube: 'https://www.youtube.com/@montraelectricscv',
    linkedin: 'https://www.linkedin.com/company/montra-electric-scv/',
    x: 'https://x.com/Scv_Eviator',
  },
};

export function socialLinksFor(pathname) {
  const match = Object.keys(overrides).find((segment) => pathname.includes(segment));
  return match ? { ...site.social, ...overrides[match] } : site.social;
}
