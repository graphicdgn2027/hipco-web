import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppLink } from '@/components/ui/AppLink';
import { allProducts, mobileMenu, primaryNav } from '@/data/navigation';
import { ROUTES } from '@/routes/paths';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';

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

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(true);
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
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // Automatically close menu whenever pathname changes
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

  return (
    <div
      ref={headerRef}
      className={`nav-bar-container page-grid ${isScrolled ? 'is-scrolled' : ''}`}
    >
      <div className="div-block-99 page-content">
        {/* Left: Montra Electric Black Logo */}
        <AppLink href="/" className="w-inline-block" onClick={close}>
          <img
            className="left_logo-1"
            src="/navbar-logo/montra-logo-hbk.svg"
            width="135"
            height="28"
            alt="Montra Electric"
          />
        </AppLink>

        {/* Center: Desktop Navigation Links */}
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
                    toggleMenu();
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

        {/* Right side container */}
        <div className="divframer-5odmon-container-2">
          {/* Mobile Hamburger Button */}
          <button
            id="mobile-hamburger-menu"
            type="button"
            className={`mobile-hamburger-btn ${open ? 'is-active' : ''}`}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>

          {/* Desktop Hipco & DGO Logo */}
          <div className="link---navbar-link-11 desktop-distributor-logo">
            <img
              src="/navbar-logo/hipco-DGO-combine.svg"
              alt="Hipco & Diwakar Golchha Organisation"
              style={{ height: 38, width: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Dimmed Backdrop Overlay */}
      {open && (
        <div
          className="mobile-drawer-backdrop"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            close();
          }}
          aria-hidden="true"
        />
      )}

      {/* Redesigned Products Dialog (Desktop Dropdown & Mobile Drawer) */}
      <div
        id="products-dialog"
        className={`products-dialog ${open ? 'is-open' : ''}`}
      >
        {/* ==============================================================
            MOBILE DRAWER VIEW (< 992px)
            ============================================================== */}
        <div className="mobile-drawer-inner">
          {/* Mobile Drawer Sticky Header */}
          <div className="mobile-drawer-header">
            <AppLink href="/" onClick={close} className="drawer-logo-link">
              <img
                src="/navbar-logo/montra-logo-hbk.svg"
                alt="Montra Electric"
                style={{ height: 26, width: 'auto', display: 'block' }}
              />
            </AppLink>

            <button
              type="button"
              className="drawer-close-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                close();
              }}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu List with Accordion Products */}
          <div className="mobile-menu-list">
            <div className="mobile-menu-section-title">Navigation</div>

            {/* Home */}
            <AppLink
              href={ROUTES.home}
              className={`mobile-menu-row ${pathname === ROUTES.home ? 'is-active' : ''}`}
              onClick={close}
            >
              <span className="mobile-menu-title">Home</span>
              <svg className="mobile-menu-chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </AppLink>

            {/* About Us */}
            <AppLink
              href={ROUTES.about}
              className={`mobile-menu-row ${pathname.startsWith(ROUTES.about) ? 'is-active' : ''}`}
              onClick={close}
            >
              <span className="mobile-menu-title">About Us</span>
              <svg className="mobile-menu-chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </AppLink>

            {/* REDESIGNED: Our Products Accordion with Vehicle Cards */}
            <div className="mobile-product-accordion-card">
              <button
                type="button"
                className={`mobile-menu-row is-products-trigger ${productsExpanded ? 'is-expanded' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setProductsExpanded((prev) => !prev);
                }}
                aria-expanded={productsExpanded}
              >
                <div className="mobile-menu-label-wrap">
                  <span className="mobile-menu-title">Our Products</span>
                  <span className="mobile-menu-badge">3 Models</span>
                </div>
                <svg
                  className={`mobile-menu-chevron-icon accordion-arrow ${productsExpanded ? 'is-rotated' : ''}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {productsExpanded && (
                <div className="mobile-product-sublist">
                  {allProducts.map((prod) => {
                    const isProdActive = pathname === prod.href;
                    return (
                      <AppLink
                        key={prod.name}
                        href={prod.href}
                        className={`mobile-product-card ${isProdActive ? 'is-active' : ''}`}
                        onClick={close}
                      >
                        <div className="mobile-product-thumb-wrap">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="mobile-product-thumb"
                          />
                        </div>
                        <div className="mobile-product-info">
                          <div className="mobile-product-name-row">
                            <span className="mobile-product-name">{prod.name}</span>
                            <span className="mobile-product-tag">{prod.badge}</span>
                          </div>
                          <span className="mobile-product-desc">{prod.tagline}</span>
                        </div>
                        <svg className="mobile-product-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </AppLink>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Book a Test Drive */}
            <AppLink
              href={ROUTES.bookTestDrive}
              className={`mobile-menu-row ${pathname === ROUTES.bookTestDrive ? 'is-active' : ''}`}
              onClick={close}
            >
              <span className="mobile-menu-title">Book a Test Drive</span>
              <svg className="mobile-menu-chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </AppLink>

            {/* Become a Dealer */}
            <AppLink
              href={ROUTES.becomeDealer}
              className={`mobile-menu-row ${pathname === ROUTES.becomeDealer ? 'is-active' : ''}`}
              onClick={close}
            >
              <span className="mobile-menu-title">Become a Dealer</span>
              <svg className="mobile-menu-chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </AppLink>

            {/* Find a Dealer */}
            <AppLink
              href={ROUTES.findDealer}
              className={`mobile-menu-row ${pathname === ROUTES.findDealer ? 'is-active' : ''}`}
              onClick={close}
            >
              <span className="mobile-menu-title">Find a Dealer</span>
              <svg className="mobile-menu-chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </AppLink>

            {/* Contact Us */}
            <AppLink
              href={ROUTES.contact}
              className={`mobile-menu-row ${pathname === ROUTES.contact ? 'is-active' : ''}`}
              onClick={close}
            >
              <span className="mobile-menu-title">Contact Us</span>
              <svg className="mobile-menu-chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </AppLink>
          </div>

          {/* Mobile Quick Action Buttons (Auto-close on click) */}
          <div className="mobile-drawer-cta">
            <AppLink href={ROUTES.bookTestDrive} className="mobile-cta-btn primary" onClick={close}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Book a Test Drive
            </AppLink>
            <AppLink href={ROUTES.findDealer} className="mobile-cta-btn secondary" onClick={close}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Find a Dealer
            </AppLink>
          </div>

          {/* Distributor Footer placed at very bottom of mobile drawer */}
          <div className="mobile-drawer-footer">
            <img
              src="/navbar-logo/hipco-DGO-combine.svg"
              alt="Hipco & Diwakar Golchha Organisation"
              className="mobile-drawer-footer-logo"
            />
            <p className="mobile-drawer-footer-text">Official Distributor in Nepal</p>
          </div>
        </div>

        {/* ==============================================================
            REDESIGNED DESKTOP PRODUCTS MEGA-MENU DROPDOWN (≥ 992px)
            ============================================================== */}
        <div className="desktop-products-dropdown">
          <div className="desktop-dropdown-header">
            <div>
              <div className="desktop-dropdown-eyebrow">Montra Electric Lineup</div>
              <h3 className="desktop-dropdown-title">One Platform. Multiple Possibilities.</h3>
              <p className="desktop-dropdown-subtitle">Engineered for superior reliability, endurance, and sustainability on Nepal's roads.</p>
            </div>
            <button
              type="button"
              className="desktop-dropdown-close"
              onClick={close}
              aria-label="Close products menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="desktop-products-grid">
            {allProducts.map((prod) => (
              <AppLink
                key={prod.name}
                href={prod.href}
                className={`desktop-product-card ${pathname === prod.href ? 'is-active' : ''}`}
                onClick={close}
              >
                <div className="desktop-product-badge-row">
                  <span className="desktop-product-category">{prod.category}</span>
                  <span className="desktop-product-pill">{prod.badge}</span>
                </div>
                <div className="desktop-product-img-wrap">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="desktop-product-img"
                  />
                </div>
                <div className="desktop-product-details">
                  <h4 className="desktop-product-heading">{prod.name}</h4>
                  <p className="desktop-product-desc">{prod.tagline}</p>
                  <div className="desktop-product-link">
                    <span>Explore {prod.name}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </AppLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
