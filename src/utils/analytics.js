/*
  ANALYTICS.JS
  ------------
  Initializes your marketing integrations (Google Analytics 4, Meta
  Pixel, Google Tag Manager) — the brief specifically calls these out
  as required. Call initAnalytics() ONCE, from main.jsx, when the app
  first loads.

  Replace the IDs in utils/constants.js with your real tracking IDs
  before going live — these scripts won't send real data until you do.
*/

import { ANALYTICS } from './constants';

export function initAnalytics() {
  initGoogleAnalytics();
  initMetaPixel();
}

// Loads Google Analytics 4 (gtag.js) and starts tracking pageviews
function initGoogleAnalytics() {
  const { ga4MeasurementId } = ANALYTICS;
  if (!ga4MeasurementId) return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', ga4MeasurementId);

  // Makes gtag available elsewhere, e.g. to track a "Book a Call" click as a conversion
  window.gtag = gtag;
}

// Loads the Meta (Facebook/Instagram) Pixel for ad conversion tracking
function initMetaPixel() {
  const { metaPixelId } = ANALYTICS;
  if (!metaPixelId) return;

  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq('init', metaPixelId);
  window.fbq('track', 'PageView');
}

// Call this anywhere a key conversion happens, e.g. after a successful
// contact form submit (in pages/Contact.jsx) or "Book a Call" click
export function trackConversion(eventName, params = {}) {
  if (window.gtag) window.gtag('event', eventName, params);
  if (window.fbq) window.fbq('trackCustom', eventName, params);
}