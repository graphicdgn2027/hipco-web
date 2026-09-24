import { site } from '@/config/site';

function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
}

function initClarity(id) {
  window.clarity =
    window.clarity ||
    function clarity(...args) {
      (window.clarity.q = window.clarity.q || []).push(args);
    };
  loadScript(`https://www.clarity.ms/tag/${id}?ref=gtm2`);
}

function initFacebookPixel(ids) {
  if (!window.fbq) {
    const fbq = function fbq(...args) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;
    loadScript('https://connect.facebook.net/en_US/fbevents.js');
  }
  ids.forEach((id) => window.fbq('init', id));
  window.fbq('track', 'PageView');
}

function initLinkedIn(partnerId) {
  new Image().src = `https://px.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif`;
}

function initChatWidget({ scriptSrc, config }) {
  window.chatConfig = config;
  loadScript(scriptSrc);
}

// Persists UTM parameters so lead forms can attribute campaigns.
function captureUtm() {
  const params = new URLSearchParams(window.location.search);
  const utm = {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
  };
  if (utm.utm_source || utm.utm_medium || utm.utm_campaign) {
    localStorage.setItem('utm_data', JSON.stringify(utm));
  }
}

export function initThirdParty() {
  captureUtm();
  if (site.features.analytics) {
    initClarity(site.analytics.clarityId);
    initFacebookPixel(site.analytics.facebookPixelIds);
    initLinkedIn(site.analytics.linkedInPartnerId);
  }
  if (site.features.chatWidget) initChatWidget(site.chat);
}
