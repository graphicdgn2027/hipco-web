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
    grid.css              shared 16/12/4-column layout tokens and Webflow adapters
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

Use `page-grid` on full-width sections and `page-content` on their content wrapper.
At 1280px and above, content occupies columns 2–15 of 16, reserving exactly one
outer column per side; tablet uses 12 columns
with 24–32px gutters, and mobile uses 4 columns with 16–20px gutters. Do not add
another page gutter or fixed container width inside `page-content`.

Existing product sections use `page-grid page-section`: each direct child occupies
the content tracks, with shared vertical spacing. The Super Auto hero
uses a 14-column `hero-grid` inside `page-content`, with `hero-text` spanning 6
tracks and `hero-image` spanning 8. Tablet uses a 12-column hero with a 5/7 split.
Below 768px they stack in reading order. Full-bleed banner
media retains its original presentation while its text overlay uses the page grid.
The Home hero retains its original layout in `pages/Home/sections/hero.css`.
