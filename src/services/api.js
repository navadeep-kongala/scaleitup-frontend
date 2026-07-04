/*
  API.JS
  ------
  The single shared connection point to your back-end server. Every
  other service file (contactService.js, blogService.js, etc.) imports
  this instead of writing its own fetch() logic — so if your back-end
  URL ever changes, you edit ONE line here.
*/

// Reads the back-end URL from an environment variable (set in .env),
// falling back to the Vite proxy path for local development.
const BASE_URL = import.meta.env.VITE_API_URL || '/api';

/*
  A small wrapper around fetch() that:
  - automatically prefixes every request with the back-end base URL
  - automatically sets JSON headers
  - automatically parses the JSON response
  - throws a readable error if the server responds with a failure status

  Usage elsewhere: api('/contact', { method: 'POST', body: { name, email } })
*/
export async function api(path, { method = 'GET', body, headers = {} } = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    // Try to read a useful error message from the server, otherwise use a generic one
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || `Request failed: ${response.status}`);
  }

  return response.json();
}