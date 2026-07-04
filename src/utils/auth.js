const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'scaleitup2026';

export async function authenticateAdmin(username, password) {
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  const response = await fetch(`${baseUrl}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || 'Unable to sign in.');
  }

  return data.data;
}

export function isValidAdminLogin(username, password) {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export function getStoredAdminSession() {
  return localStorage.getItem('admin-auth');
}

export function getStoredAdminToken() {
  return localStorage.getItem('admin-auth') || '';
}

export function saveAdminSession(token) {
  localStorage.setItem('admin-auth', token);
}

export function clearAdminSession() {
  localStorage.removeItem('admin-auth');
}
