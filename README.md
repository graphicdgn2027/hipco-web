# Hipco Web

React 19 + Vite + React Router site for Montra Electric vehicles (Hipco, Nepal).

## Scripts

Run from the repo root (`npm install` first):

| Command           | What it does                     |
| ----------------- | -------------------------------- |
| `npm run dev`     | Dev server on http://localhost:5173 |
| `npm run build`   | Production build into `dist`     |
| `npm run preview` | Serve the production build       |
| `npm run lint`    | Oxlint                           |

## Structure

```
src/
  main.jsx                 entry: router + third-party scripts
  App.jsx
  routes/                  route table (index.jsx) and path constants (paths.js)
  layouts/MainLayout.jsx   Header + page + Footer
  pages/<Page>/
    index.jsx              page meta + section composition
    sections/*.jsx         one component per page section
  components/
    layout/                Header (nav + products menu), Footer
    common/                SideActions (floating buttons), BrochureModal
    sections/              sections shared across pages (Faq, MediaAccolades, MediaTabs, ColorPicker)
    ui/                    AppLink, Slider, Tabs, Dropdown, Carousel (Swiper)
  config/                  site-wide settings: contacts, social links, analytics, chat widget
  data/                    content: navigation, FAQs, media articles
  hooks/                   usePageMeta, useBodyScrollLock
  services/                API calls (brochure lead form)
  utils/                   third-party script loaders
  styles/
    global.css
    webflow/<page>.css     per-page stylesheet, swapped by usePageMeta
public/
  images/                  content images (content-hashed names)
  logo/                    brand logos
```

## Common edits

- Contact numbers, emails, social links: `src/config/site.js` (per-product social overrides in `src/config/social.js`).
- Navbar, footer links and the products menu: `src/data/navigation.js`.
- FAQs: `src/data/faqs.js`. Media & Accolades articles: `src/data/media.js`.
- Page content: `src/pages/<Page>/sections/`.

Styling comes from the original Webflow stylesheets, so keep the existing `className`s when editing markup.
