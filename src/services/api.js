/*
  API.JS
  ------
  Always points to the local backend on port 5000 during development.
  In production it reads from VITE_API_URL environment variable.
*/

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function api(path, { method = 'GET', body, headers = {}, signal } = {}) {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method,
      signal,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Request failed: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    // Catch network errors and show a readable message
    if (err.message === 'Failed to fetch') {
      throw new Error('Cannot reach server. Make sure backend is running on port 5000.');
    }
    throw err;
  }
}