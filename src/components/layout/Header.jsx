import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppLink } from '@/components/ui/AppLink';
import { mobileMenu, primaryNav, productCategories } from '@/data/navigation';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';

const MOBILE_BREAKPOINT = 768;

// view: null = CSS default layout (desktop product grid), 'menu' = mobile menu list, 'products' = mobile product grid.
// The dialog is tied to the path it was opened on, so navigating closes it.
export default function Header() {
  const { pathname } = useLocation();
  const [dialog, setDialog] = useState({ path: null, view: null });
  const open = dialog.path === pathname;
  const view = open ? dialog.view : null;

  useBodyScrollLock(open);

  const openProducts = () =>
    setDialog({ path: pathname, view: window.innerWidth < MOBILE_BREAKPOINT ? 'menu' : null });
  const openMobileMenu = () => setDialog({ path: pathname, view: 'menu' });
  const showMobileProducts = () => setDialog({ path: pathname, view: 'products' });
  const close = () => setDialog({ path: null, view: null });

  const menuStyle = view ? { display: view === 'menu' ? 'flex' : 'none' } : undefined;
  const productsStyle = view ? { display: view === 'products' ? 'flex' : 'none' } : undefined;

  return (
    <div className="nav-bar-container">
      <div className="div-block-99">
        <AppLink href="/" className="w-inline-block">
          <img className="left_logo-1" src="/images/e74656ae5af9.svg" width="110" height="24" alt="Montra Electric" />
        </AppLink>
        <div className="div-block-270">
          {primaryNav.map((item) => (
            <AppLink
              key={item.label}
              href={item.href ?? '#'}
              className={`${item.className} w-inline-block`}
              onClick={item.opensProducts ? openProducts : undefined}
            >
              <div className="link---navbar-link-6">
                <div className="text-23">{item.label}</div>
              </div>
            </AppLink>
          ))}
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
          {mobileMenu.map((item) => (
            <AppLink
              key={item.label}
              href={item.href ?? '#'}
              className="div-block-204 w-inline-block"
              onClick={item.opensProducts ? showMobileProducts : undefined}
            >
              <div className="text-block-120">{item.label}</div>
            </AppLink>
          ))}
        </div>

        <div id="products-dialog-content" className="products-dialog-content" style={productsStyle}>
          {productCategories.map((category) => (
            <div key={category.title} id={category.gridId} className="div-block-204">
              <AppLink href={category.href} className={`${category.linkClassName} w-inline-block`}>
                <div className="products-category">{category.title}</div>
                <img className="product-menu-chevron" src="/images/c57a213f3828.svg" alt="" />
              </AppLink>
              <div className="products-row">
                {category.products.map((product) => (
                  <AppLink key={product.name} href={product.href} className="product-card w-inline-block">
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
