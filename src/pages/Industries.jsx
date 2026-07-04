/*
  INDUSTRIES.JSX
  --------------
  Lists the industries SkaleItUp serves (manufacturing, real estate,
  healthcare, etc — from your brief). Could reuse a simple grid of
  industry name + icon, similar in spirit to ServiceGrid.
*/
const INDUSTRIES = [
  'Manufacturing', 'Interior Design', 'Real Estate', 'Education',
  'Healthcare & Clinics', 'Retail', 'Restaurants & Cafés',
  'Automotive', 'FMCG', 'Startups', 'SMEs',
];

export default function Industries() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Who we serve</p>
        <h1 style={{ marginBottom: 24 }}>Industries We Serve</h1>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {INDUSTRIES.map((name) => (
            <li
              key={name}
              style={{
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-pill)',
                padding: '8px 18px',
                fontSize: '0.9rem',
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}