/*
  NOTFOUND.JSX
  ------------
  The catch-all 404 page — shown for any URL that doesn't match a
  route in AppRoutes.jsx (e.g. a typo'd link or a deleted page).
*/
import Button from '../components/ui/Button/Button';

export default function NotFound() {
  return (
    <main className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ marginBottom: 16 }}>404</h1>
        <p style={{ marginBottom: 32 }}>This page doesn't exist.</p>
        <Button href="/">Back to Home</Button>
      </div>
    </main>
  );
}