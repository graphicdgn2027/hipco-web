import { Link, useLocation } from 'react-router-dom';
import { site } from '@/config/site';
import { isAppRoute, stripQueryAndHash } from '@/routes/paths';

const join = (...parts) => parts.filter(Boolean).join(' ') || undefined;

// Router-aware anchor. Known routes use client-side navigation, "#" is inert,
// and any other internal path falls back to the legacy site origin.
export function AppLink({ href = '#', className, onClick, children, ...rest }) {
  const { pathname } = useLocation();

  if (href === '#') {
    const handleClick = (event) => {
      event.preventDefault();
      onClick?.(event);
    };
    return (
      <a href="#" className={className} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }

  const isCurrent = stripQueryAndHash(href) === pathname;
  const classes = join(className, isCurrent && 'w--current');
  const aria = isCurrent ? { 'aria-current': 'page' } : {};

  if (isAppRoute(href)) {
    return (
      <Link to={href} className={classes} onClick={onClick} {...aria} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={`${site.legacyOrigin}${href}`} className={classes} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
