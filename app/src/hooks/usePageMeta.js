import { useLayoutEffect } from 'react';

function setMeta(selector, value) {
  const el = document.head.querySelector(selector);
  if (el && value) el.setAttribute('content', value);
}

// Applies per-page document title, meta tags, Webflow stylesheet and body class.
export default function usePageMeta({ title, description, stylesheet, bodyClass = '' }) {
  useLayoutEffect(() => {
    document.getElementById('page-styles')?.setAttribute('href', stylesheet);
    document.body.className = bodyClass;
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    window.scrollTo(0, 0);
  }, [title, description, stylesheet, bodyClass]);
}
