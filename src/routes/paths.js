export const ROUTES = {
  home: '/',
  superAuto: '/lastmile/superauto',
  superCargo: '/lastmile/supercargo',
  eviator: '/e-scv/eviator',
  about: '/about-us',
  contact: '/contact-us',
  findDealer: '/find-a-dealer',
};

const appPaths = Object.values(ROUTES);

export const stripQueryAndHash = (href) => href.split(/[?#]/)[0];

export const isAppRoute = (href) => appPaths.includes(stripQueryAndHash(href));
