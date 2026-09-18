import { useEffect, useLayoutEffect, useRef } from 'react';
import { matchPath, useNavigate } from 'react-router-dom';
import { routePaths } from '../routes.js';

const LIVE_SITE = 'https://www.montraelectric.com';
const loadedScriptSrcs = new Set();
const executedTrackerSnippets = new Set();
const TRACKER_SNIPPET = /clarity|fbq\(|gtag\(|googletagmanager/;

function loadExternalScript(src, attrs) {
  return new Promise((resolve) => {
    const el = document.createElement('script');
    attrs.forEach(({ name, value }) => el.setAttribute(name, value));
    el.async = false;
    el.onload = el.onerror = () => resolve();
    document.body.appendChild(el);
  });
}

// Scripts inserted via innerHTML never run, so re-create them in document order.
// Their DOMContentLoaded/load listeners are captured and invoked once all scripts ran,
// because those events already fired before React mounted the page.
async function runScripts(container, isCancelled) {
  const readyCallbacks = [];
  const originalDocAdd = document.addEventListener;
  const originalWinAdd = window.addEventListener;
  const capture = (target, original) =>
    function (type, listener, options) {
      if (type === 'DOMContentLoaded' || (type === 'load' && target === window)) {
        readyCallbacks.push(listener);
        return;
      }
      return original.call(this, type, listener, options);
    };
  document.addEventListener = capture(document, originalDocAdd);
  window.addEventListener = capture(window, originalWinAdd);

  try {
    for (const oldScript of container.querySelectorAll('script')) {
      if (isCancelled()) return;
      const attrs = Array.from(oldScript.attributes);
      const src = oldScript.getAttribute('src');
      oldScript.remove();

      if (src) {
        if (loadedScriptSrcs.has(src)) continue;
        loadedScriptSrcs.add(src);
        await loadExternalScript(src, attrs);
      } else {
        const code = oldScript.textContent;
        if (TRACKER_SNIPPET.test(code)) {
          if (executedTrackerSnippets.has(code)) continue;
          executedTrackerSnippets.add(code);
        }
        const el = document.createElement('script');
        attrs.forEach(({ name, value }) => el.setAttribute(name, value));
        // Block scope keeps top-level const/let from clashing when another page re-runs similar scripts.
        el.textContent = `{\n${code}\n}`;
        container.appendChild(el);
      }
    }
  } finally {
    document.addEventListener = originalDocAdd;
    window.addEventListener = originalWinAdd;
  }

  if (isCancelled()) return;
  for (const cb of readyCallbacks) {
    try {
      if (typeof cb === 'function') cb.call(document, new Event('DOMContentLoaded'));
      else cb?.handleEvent?.(new Event('DOMContentLoaded'));
    } catch (err) {
      console.error(err);
    }
  }

  const { Webflow } = window;
  if (Webflow) {
    try {
      Webflow.destroy();
      Webflow.ready();
      Webflow.require('ix2')?.init();
    } catch (err) {
      // Non-fatal: ignore Webflow re-initialization warning
    }
  }
}

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
}

export default function HtmlPage({ html, title, description, stylesheet, wfPageId, bodyClass = '' }) {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.getElementById('page-styles')?.setAttribute('href', stylesheet);
    document.documentElement.setAttribute('data-wf-page', wfPageId);
    document.body.className = bodyClass;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    window.scrollTo(0, 0);
  }, [stylesheet, wfPageId, bodyClass, title, description]);

  useEffect(() => {
    let cancelled = false;
    runScripts(containerRef.current, () => cancelled);
    return () => {
      cancelled = true;
    };
  }, [html]);

  const handleClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href === '#' || href === 'javascript:void(0)') {
      if (!link.hasAttribute('data-product-open') && !link.hasAttribute('data-w-tab')) {
        e.preventDefault();
      }
      return;
    }

    if (!href || !href.startsWith('/') || href.startsWith('//') || link.target === '_blank') return;

    e.preventDefault();
    const path = href.split(/[?#]/)[0];
    if (routePaths.some((p) => matchPath(p, path))) {
      navigate(href);
    } else {
      window.location.assign(LIVE_SITE + href);
    }
  };

  // After HTML is injected, make all images lazy-load if not already set
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.querySelectorAll('img').forEach((img) => {
      if (!img.getAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      // Add decoding=async for non-blocking image decode
      if (!img.getAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
    // Defer iframes (videos, maps) with lazy loading too
    container.querySelectorAll('iframe').forEach((el) => {
      if (!el.getAttribute('loading')) {
        el.setAttribute('loading', 'lazy');
      }
    });
  }, [html]);

  return <div ref={containerRef} onClick={handleClick} dangerouslySetInnerHTML={{ __html: html }} />;
}
