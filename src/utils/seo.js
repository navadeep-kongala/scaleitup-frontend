/*
  SEO.JS
  ------
  A small helper that sets the page <title> and meta description tags
  for whichever page is currently showing. Since this is a single-page
  React app, the browser doesn't reload between pages — so without
  this helper, every page would keep showing the same title/description
  forever, which is bad for SEO and for browser tabs/bookmarks.

  Usage inside any page component:
    import { useSeo } from '../utils/seo';
    useSeo({ title: 'About Us | SkaleItUp', description: '...' });
*/

import { useEffect } from 'react';
import { SITE_NAME } from './constants';

export function useSeo({ title, description }) {
  useEffect(() => {
    // Sets the browser tab title
    document.title = title ? `${title}` : SITE_NAME;

    // Updates (or creates) the <meta name="description"> tag
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]); // re-runs whenever the page changes title/description
}