import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppLink } from '@/components/ui/AppLink';
import { mobileMenu, primaryNav, productCategories } from '@/data/navigation';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';

const MOBILE_BREAKPOINT = 768;

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
  const headerRef = useRef(null);

  useBodyScrollLock(open);

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
    <div ref={headerRef} className="nav-bar-container">
      <div className="div-block-99">
        <AppLink href="/" className="w-inline-block" onClick={close}>
          <img className="left_logo-1" src="/images/e74656ae5af9.svg" width="110" height="24" alt="Montra Electric" />
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
          <img
            id="mobile-hamburger-menu"
            className="image-29"
            src="/images/a5b9310672fd.png"
            alt="Open menu"
            role="button"
            onClick={openMobileMenu}
          />
          <div className="link---navbar-link-11">
            <img src="/logo/hipco-DGO-logo.png" alt="Hipco" style={{ height: 40, width: 'auto' }} />
          </div>
        </div>
      </div>

      <div id="products-dialog" className="products-dialog div-block-354" style={open ? { display: 'block' } : undefined}>
        <div className="div-block-210">
          <img
            className="image-130"
            src="/images/58e55ca95752.svg"
            alt="Back to menu"
            role="button"
            style={view === 'products' ? { display: 'block' } : undefined}
            onClick={openMobileMenu}
          />
          <img className="image-129" src="/images/3180fef5a083.svg" alt="Close" role="button" onClick={close} />
        </div>

        <div id="menu-dialog-items" className="div-block-209" style={menuStyle}>
          {mobileMenu.map((item) => {
            const active = isItemActive(item, pathname);
            return (
              <AppLink
                key={item.label}
                href={item.href ?? '#'}
                className={`div-block-204 w-inline-block mobile-nav-item ${active ? 'is-active' : ''}`}
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
                <div className="text-block-120">{item.label}</div>
                {active && <span className="mobile-nav-indicator" />}
              </AppLink>
            );
          })}
        </div>

        <div id="products-dialog-content" className="products-dialog-content" style={productsStyle}>
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
