/*
  BLOGSERVICE.JS
  --------------
  All API calls related to blog posts. Since blog content is published
  over time (unlike static service/industry copy), it's fetched live
  from the back-end rather than stored in a local data file.

  Used by: pages/Blog.jsx, pages/BlogPost.jsx
  Talks to: back-end/src/routes/blog.routes.js
*/

import { api } from './api';
import { getStoredAdminToken } from '../utils/auth';

function buildCacheBustUrl(path) {
  const url = new URL(path, window.location.origin);
  url.searchParams.set('_t', Date.now().toString());
  return url.pathname + url.search;
}

// Fetches the list of published blog posts, e.g. for the /blog listing page
export async function getBlogPosts() {
  return api(buildCacheBustUrl('/blog'));
}

// Fetches a single blog post by its URL slug, e.g. for /blog/:slug
export async function getBlogPostBySlug(slug) {
  return api(buildCacheBustUrl(`/blog/${slug}`));
}

// Creates a new blog post via the backend admin endpoint
export async function createBlogPost(formData) {
  const token = getStoredAdminToken();
  const headers = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/blog`, {
    method: 'POST',
    headers,
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || `Request failed: ${response.status}`);
  }

  return response.json();
}