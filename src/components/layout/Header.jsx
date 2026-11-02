import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppLink } from '@/components/ui/AppLink';
import { allProducts, mobileMenu, primaryNav, productCategories } from '@/data/navigation';
import { ROUTES } from '@/routes/paths';
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

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useBodyScrollLock(open);

  const isVehiclePage =
    pathname.startsWith('/lastmile') ||
    pathname.startsWith('/e-scv');

  // Auto-expand accordion if already on a vehicle page
  useEffect(() => {
    if (isVehiclePage) {
      setProductsExpanded(true);
    }
  }, [pathname, isVehiclePage]);

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

  const toggleProducts = () => {
    setOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setOpen((prev) => !prev);
  };

  // Close when pathname changes (auto-close on navigation)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Handle click outside and Escape key
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
              toggleMobileMenu();
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

      {/* Clean Reverted Products Dialog (Desktop 2-col clean grid & Mobile drawer) */}
      <div
        id="products-dialog"
        className={`products-dialog div-block-354 ${open ? 'is-open' : ''}`}
      >
        {/* Top Header / Close Row */}
        <div className="div-block-210">
          {/* Mobile Drawer Logo */}
          <AppLink href="/" onClick={close} className="drawer-logo-link">
            <img
              src="/navbar-logo/montra-logo-hbk.svg"
              alt="Montra Electric"
              style={{ height: 26, width: 'auto', display: 'block' }}
            />
          </AppLink>

          <div className="drawer-header-actions">
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
        </div>

        {/* Mobile Menu List View */}
        <div id="menu-dialog-items" className="div-block-209 mobile-menu-list">
          <div className="mobile-menu-section-title">Navigation</div>
          {mobileMenu.map((item) => {
            const active = isItemActive(item, pathname);

            // Our Products Accordion Group on Mobile
            if (item.opensProducts) {
              return (
                <div key={item.label} className="mobile-menu-accordion-group">
                  <button
                    type="button"
                    className={`mobile-menu-row is-accordion-trigger ${productsExpanded ? 'is-expanded' : ''} ${active ? 'is-active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setProductsExpanded((prev) => !prev);
                    }}
                    aria-expanded={productsExpanded}
                  >
                    <div className="mobile-menu-label-wrap">
                      <span className="mobile-menu-title">{item.label}</span>
                      <span className="mobile-menu-badge">3 Models</span>
                    </div>
                    <svg
                      className={`mobile-menu-chevron-icon ${productsExpanded ? 'is-rotated' : ''}`}
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
                    <div className="mobile-products-accordion-list">
                      {allProducts.map((product) => {
                        const isProductActive = pathname === product.href;
                        return (
                          <AppLink
                            key={product.name}
                            href={product.href}
                            className={`mobile-product-subitem ${isProductActive ? 'is-active' : ''}`}
                            onClick={close}
                          >
                            <div className="mobile-product-thumb-wrap">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="mobile-product-thumb"
                                width="56"
                                height="38"
                              />
                            </div>
                            <div className="mobile-product-info">
                              <div className="mobile-product-name-row">
                                <span className="mobile-product-name">{product.name}</span>
                                <span className="mobile-product-badge">{product.badge}</span>
                              </div>
                              <span className="mobile-product-category">{product.category}</span>
                            </div>
                            <svg className="mobile-product-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </AppLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <AppLink
                key={item.label}
                href={item.href ?? '#'}
                className={`mobile-menu-row ${active ? 'is-active' : ''}`}
                onClick={close}
                aria-current={active ? 'page' : undefined}
              >
                <div className="mobile-menu-label-wrap">
                  <span className="mobile-menu-title">{item.label}</span>
                </div>
                <svg className="mobile-menu-chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </AppLink>
            );
          })}

          {/* Quick Action Buttons (Auto-close on click) */}
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

          {/* Distributor Footer at bottom of mobile menu */}
          <div className="mobile-drawer-footer">
            <img
              src="/navbar-logo/hipco-DGO-combine.svg"
              alt="Hipco & Diwakar Golchha Organisation"
              className="mobile-drawer-footer-logo"
            />
            <p className="mobile-drawer-footer-text">Official Distributor in Nepal</p>
          </div>
        </div>

        {/* Clean Original Products Grid (Desktop Dropdown) */}
        <div id="products-dialog-content" className="products-dialog-content">
          {productCategories.map((category) => (
            <div key={category.title} id={category.gridId} className="div-block-204">
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
