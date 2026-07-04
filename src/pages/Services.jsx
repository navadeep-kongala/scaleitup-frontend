/*
  SERVICES.JSX
  ------------
  The "hub" page listing ALL 9 services (different from ServiceDetail.jsx,
  which shows ONE service). Reuses the same ServiceGrid component used
  on the homepage, just without the `limit` prop so every service shows.
*/
import ServiceGrid from '../components/sections/ServiceGrid/ServiceGrid';

export default function Services() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">What we do</p>
        <h1 style={{ marginBottom: 32 }}>Our Services</h1>
        <ServiceGrid />
      </div>
    </main>
  );
}