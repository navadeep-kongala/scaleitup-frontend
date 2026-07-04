/*
  CONSTANTS.JS
  ------------
  Fixed values used in multiple places across the site. Keeping them
  here (instead of typing them directly into components) means you
  only update one spot if, say, your phone number or social links change.
*/

export const SITE_NAME = 'SkaleItUp';
export const SITE_TAGLINE = 'We build systems that help businesses scale.';
export const SITE_URL = 'https://www.skaleitup.com';

export const CONTACT = {
  phone: '+91 93982 56690',
  phoneHref: 'tel:+91 93982 56690',
  email: 'hello@skaleitup.com',
  whatsapp: 'https://wa.me/9398256690?text=hii%20we%20want%20your%20services',
  address: 'Hyderabad, Telangana, India',
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/skaleitup/?hl=en',
  linkedin: 'https://linkedin.com/company/skaleitup',
  facebook: 'https://facebook.com/skaleitup',
};

// Used by utils/analytics.js — replace with your real tracking IDs
export const ANALYTICS = {
  ga4MeasurementId: 'G-XXXXXXXXXX',
  metaPixelId: '000000000000000',
  gtmContainerId: 'GTM-XXXXXXX',
};