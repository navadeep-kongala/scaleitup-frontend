export default function TermsAndConditions() {
  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 820, display: 'grid', gap: '1rem' }}>
        <h1 style={{ marginBottom: '0.25rem' }}>Terms &amp; Conditions</h1>
        <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
          These Terms &amp; Conditions govern your use of the <strong>SkaleItUp</strong> website and services. By accessing our website, you agree to comply with these terms.
        </p>

        <section style={{ display: 'grid', gap: '0.6rem' }}>
          <h2 style={{ margin: 0 }}>Use of Website</h2>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#4b5563', lineHeight: 1.7 }}>
            <li>Content on this site is for informational purposes only.</li>
            <li>You may not copy, reproduce, or distribute our content without permission.</li>
          </ul>
        </section>

        <section style={{ display: 'grid', gap: '0.6rem' }}>
          <h2 style={{ margin: 0 }}>Services</h2>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#4b5563', lineHeight: 1.7 }}>
            <li>All services are provided under agreed contracts or proposals.</li>
            <li>Results may vary depending on industry, competition, and market conditions.</li>
          </ul>
        </section>

        <section style={{ display: 'grid', gap: '0.6rem' }}>
          <h2 style={{ margin: 0 }}>Payments</h2>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#4b5563', lineHeight: 1.7 }}>
            <li>Payment terms will be defined in individual contracts.</li>
            <li>Late payments may result in suspension of services.</li>
          </ul>
        </section>

        <section style={{ display: 'grid', gap: '0.6rem' }}>
          <h2 style={{ margin: 0 }}>Limitation of Liability</h2>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
            SkaleItUp is not liable for indirect or consequential damages arising from the use of our services. We provide strategies and systems, but ultimate business outcomes depend on multiple external factors.
          </p>
        </section>

        <section style={{ display: 'grid', gap: '0.6rem' }}>
          <h2 style={{ margin: 0 }}>Changes to Terms</h2>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
            We may update these Terms &amp; Conditions periodically. Continued use of our website implies acceptance of the updated terms.
          </p>
        </section>
      </div>
    </main>
  );
}