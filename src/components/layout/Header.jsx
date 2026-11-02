import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppLink } from '@/components/ui/AppLink';
import { mobileMenu, primaryNav, productCategories } from '@/data/navigation';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';

const MOBILE_BREAKPOINT = 992;

function isItemActive(item, currentPath) {
  if (item.opensProducts) {
    return (
      currentPath.startsWith('/lastmile') ||
      currentPath.startsWith('/e-scv')
    );
  }
  if (!item.href) return false;
  if (item.href === '/') {
    return currentPath === '/';
  }
  return currentPath === item.href || currentPath.startsWith(item.href);
}

// view: null = CSS default layout (desktop product grid), 'menu' = mobile menu list, 'products' = mobile product grid.
export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useBodyScrollLock(open);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => {
    setOpen(false);
    setView(null);
  };

  const openProducts = () => {
    setOpen(true);
    setView(window.innerWidth < MOBILE_BREAKPOINT ? 'products' : null);
  };

  const toggleProducts = () => {
    if (open) {
      close();
    } else {
      openProducts();
    }
  };

  const openMobileMenu = () => {
    setOpen(true);
    setView('menu');
  };

  const showMobileProducts = () => {
    setOpen(true);
    setView('products');
  };

  // Close when pathname changes
  useEffect(() => {
    close();
  }, [pathname]);

  // Click outside and escape key handling
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        close();
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const menuStyle = view ? { display: view === 'menu' ? 'flex' : 'none' } : undefined;
  const productsStyle = view ? { display: view === 'products' ? 'flex' : 'none' } : undefined;

  return (
    <div
      ref={headerRef}
      className={`nav-bar-container page-grid ${isScrolled ? 'is-scrolled' : ''}`}
    >
      <div className="div-block-99 page-content">
        <AppLink href="/" className="w-inline-block" onClick={close}>
          <img
            className="left_logo-1"
            src="/navbar-logo/montra-logo-hbk.svg"
            width="135"
            height="28"
            alt="Montra Electric"
          />
        </AppLink>
        <div className="div-block-270">
          {primaryNav.map((item) => {
            const isCurrent = isItemActive(item, pathname);
            const active = open ? Boolean(item.opensProducts) : isCurrent;
            return (
              <AppLink
                key={item.label}
                href={item.href ?? '#'}
                className={`${item.className} w-inline-block nav-link-item ${active ? 'is-active' : ''}`}
                onClick={(e) => {
                  if (item.opensProducts) {
                    e.preventDefault();
                    toggleProducts();
                  } else {
                    close();
                  }
                }}
                aria-current={active ? 'page' : undefined}
                aria-expanded={item.opensProducts ? open : undefined}
                aria-haspopup={item.opensProducts ? 'dialog' : undefined}
              >
                <div className={`link---navbar-link-6 ${active ? 'is-active' : ''}`}>
                  <div className="text-23">{item.label}</div>
                  {active && <span className="nav-tab-indicator" />}
                </div>
              </AppLink>
            );
          })}
        </div>
        <div className="divframer-5odmon-container-2">
          <button
            id="mobile-hamburger-menu"
            type="button"
            className={`mobile-hamburger-btn ${open ? 'is-active' : ''}`}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={open ? close : openMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <div className="link---navbar-link-11">
            <img
              src="/navbar-logo/hipco-DGO-combine.svg"
              alt="Hipco & Diwakar Golchha Organisation"
              style={{ height: 38, width: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {open && <div className="mobile-drawer-backdrop" onClick={close} aria-hidden="true" />}

      {/* Mobile App Drawer & Desktop Products Dropdown */}
      <div
        id="products-dialog"
        className={`products-dialog div-block-354 ${open ? 'is-open' : ''} ${view === 'products' ? 'is-products-view' : 'is-menu-view'}`}
        style={{ display: open ? 'block' : 'none' }}
      >
        {/* Mobile Drawer Header */}
        <div className="mobile-drawer-header">
          <AppLink href="/" onClick={close} className="drawer-logo-link">
            <img
              src="/navbar-logo/montra-logo-hbk.svg"
              alt="Montra Electric"
              style={{ height: 26, width: 'auto', display: 'block' }}
            />
          </AppLink>

          <div className="drawer-header-actions">
            {view === 'products' && (
              <button
                type="button"
                className="drawer-back-btn"
                onClick={openMobileMenu}
                aria-label="Back to menu"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
              </button>
            )}
            <button
              type="button"
              className="drawer-close-btn"
              onClick={close}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu List View */}
        <div id="menu-dialog-items" className="div-block-209 mobile-menu-list" style={menuStyle}>
          <div className="mobile-menu-section-title">Navigation</div>
          {mobileMenu.map((item) => {
            const active = isItemActive(item, pathname);
            return (
              <AppLink
                key={item.label}
                href={item.href ?? '#'}
                className={`mobile-menu-row ${active ? 'is-active' : ''} ${item.opensProducts ? 'is-products-trigger' : ''}`}
                onClick={(e) => {
                  if (item.opensProducts) {
                    e.preventDefault();
                    showMobileProducts();
                  } else {
                    close();
                  }
                }}
                aria-current={active ? 'page' : undefined}
              >
                <div className="mobile-menu-label-wrap">
                  <span className="mobile-menu-title">{item.label}</span>
                  {item.opensProducts && (
                    <span className="mobile-menu-badge">3 Models</span>
                  )}
                </div>
                <svg className="mobile-menu-chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </AppLink>
            );
          })}

          {/* Quick Action Buttons at bottom of mobile menu */}
          <div className="mobile-drawer-cta">
            <AppLink href="/book-test-drive" className="mobile-cta-btn primary" onClick={close}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Book a Test Drive
            </AppLink>
            <AppLink href="/findadealer" className="mobile-cta-btn secondary" onClick={close}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Find a Dealer
            </AppLink>
          </div>

          {/* Distributor Footer */}
          <div className="mobile-drawer-footer">
            <img
              src="/navbar-logo/hipco-DGO-combine.svg"
              alt="Hipco & Diwakar Golchha Organisation"
              style={{ height: 30, width: 'auto' }}
            />
            <p className="mobile-drawer-footer-text">Official Distributor in Nepal</p>
          </div>
        </div>

        {/* Desktop Products Dropdown & Mobile Products Screen */}
        <div id="products-dialog-content" className="products-dialog-content" style={productsStyle}>
          {productCategories.map((category) => (
            <div key={category.title} id={category.gridId} className="div-block-204 mobile-category-card">
              <AppLink href={category.href} className={`${category.linkClassName} w-inline-block`} onClick={close}>
                <div className="products-category">{category.title}</div>
                <img className="product-menu-chevron" src="/images/c57a213f3828.svg" alt="" />
              </AppLink>
              <div className="products-row">
                {category.products.map((product) => (
                  <AppLink key={product.name} href={product.href} className="product-card w-inline-block" onClick={close}>
                    <img className="our-product-image" src={product.image} width={product.width} alt={product.name} />
                    <div className="product-name">{product.name}</div>
                  </AppLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
