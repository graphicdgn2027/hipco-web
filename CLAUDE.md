# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 + Vite + React Router site for Montra Electric vehicles (Hipco, Nepal). The application uses a component-based architecture with React's lazy loading and Suspense for code splitting.

## Development Workflow

### 1. Basic Development Commands

All commands run from the repository root. You must run `npm install` first.

**Core Commands:**
- `npm run dev` - Dev server on http://localhost:5173
- `npm run build` - Production build into `dist`
- `npm run preview` - Serve the production build
- `npm run lint` - Oxlint

**Additional Commands:**
- `npm run build:zip` - Create deployment zip for cPanel (see scripts/build-zip.js)
- `npm run deploy:cpanel` - Build for cPanel deployment (build + zip)

### 2. Architecture Overview

**File Structure:**

```
src/
  main.jsx                 entry: router + third-party scripts
  App.jsx
  routes/                  route table (index.jsx) and path constants (paths.js)
  layouts/MainLayout.jsx   Header + page + Footer
  pages/<Page>/            page-specific sections
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

**Route Configuration:**
- Routes are defined in `src/routes/index.jsx` using React Router with lazy loading
- Route paths are centralized in `src/routes/paths.js` (ROUTES object)
- Dynamic imports (lazy) are used for page components to reduce initial bundle size
- All routes wrap content in `MainLayout` for consistent layout

**Navigation System:**
- Primary navigation: `src/data/navigation.js` (primaryNav, mobileMenu)
- Product categories: defined in same file with grid positioning for Webflow
- Footer links: organized in columns with Webflow grid IDs
- Internationalization: Nepali date handling in `BookTestDrive` page

**Styling & Layout:**
- Uses Webflow adapters for grid system: `src/styles/grid.css` (16/12/4-column)
- Per-page styles: `src/styles/webflow/<page>.css` swapped dynamically via `usePageMeta`
- Global styles: `src/styles/global.css`
- Grid system: at 1280px+ content occupies columns 2–15 of 16, tablet uses 12 columns

**Component Organization:**
- Shared sections across pages: Faq, MediaAccolades, MediaTabs, ColorPicker
- UI components: Slider, Tabs, Dropdown, Carousel, AppLink
- Common components: Header, Footer, SideActions, BrochureModal

### 3. Common Edits

**Data Updates:**
- Contact info, social links: `src/config/site.js` (social overrides in `src/config/social.js`)
- Navigation links: `src/data/navigation.js`
- FAQs: `src/data/faqs.js`
- Media content: `src/data/media.js`
- Product pages: `src/pages/<Page>/sections/`

**Configuration:**
- Site settings: `src/config/site.js` (brochure endpoint, contact info, social links, analytics)
- Environment variables: VITE_OZONETEL_API_KEY, VITE_OZONETEL_DID

### 4. Development Patterns

**Page Structure:**
- Each page creates its own directory in `src/pages/<Page>/`
- Pages have `index.jsx` for meta and section composition
- Page sections are separate components in `sections/*.jsx`

**Component Patterns:**
- Functional components with hooks
- Uses TypeScript JSX (`.jsx` extension)
- Uses custom hooks (`usePageMeta`, `useBodyScrollLock`)
- Lazy loading for route components

**Styling Patterns:**
- Use `page-grid` on full-width sections and `page-content` on content wrappers
- Webflow classNames are preserved from original design
- CSS modules not used - styles are global

### 5. Testing

This project uses minimal test setup. To run tests:
- Check package.json for test scripts (currently none defined)
- Run `npm run lint` to check code quality with Oxlint

### 6. Build Process

**Standard Build:**
- `npm run build` uses Vite to create production build in `dist`

**cPanel Deployment Build:**
- `npm run deploy:cpanel` runs Vite build then creates deployment zip
- Creates `hipco-cpanel-deployment.zip` with all files from `dist/`

**Build Script:**
- `scripts/build-zip.js` uses archiver to create zip from dist directory
- Configured for cPanel deployment requirements

### 7. Environment Variables

Required environment variables:
- VITE_OZONETEL_API_KEY: For chat widget integration
- VITE_OZONETEL_DID: For chat widget integration

Check `src/config/site.js` for all required configuration values.

### 8. Code Standards

**Linting:**
- Uses Oxlint with React plugin
- Rules of hooks enabled
- Only-export-components enabled with allowConstantExport

**Code Quality:**
- Functional React components
- Custom hooks pattern
- Lazy loading for route components
- Per-page CSS swapping for Webflow compatibility

### 9. Debugging & Monitoring

**For development:**
- Enable analytics in `site.js` (currently enabled)
- Check browser console for errors
- Use React DevTools for React issues

**Chat Widget:**
- Configured via site.js config.chat
- Uses Ozonetel chat widget
- Requires API_KEY and DID environment variables

### 10. Future Considerations

**Architecture Notes:**
- Framework-agnostic design with Webflow adapters
- Shared component sections for consistency across pages
- Dynamic styling system for Webflow CMS integration

**Areas for Improvement:**
- Consider implementing TypeScript for better type safety
- Could benefit from a component library for shared UI patterns
- Future optimization opportunities in bundle size reduction