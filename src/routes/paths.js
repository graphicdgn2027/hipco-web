export const ROUTES = {
  home: '/',
  superAuto: '/lastmile/superauto',
  superCargo: '/lastmile/supercargo',
  eviator: '/e-scv/eviator',
  contact: '/contact-us',
};

const appPaths = Object.values(ROUTES);

export const stripQueryAndHash = (href) => href.split(/[?#]/)[0];

export const isAppRoute = (href) => appPaths.includes(stripQueryAndHash(href));
