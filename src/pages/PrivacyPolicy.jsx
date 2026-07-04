export default function PrivacyPolicy() {
  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 820, display: 'grid', gap: '1rem' }}>
        <h1 style={{ marginBottom: '0.25rem' }}>Privacy Policy</h1>
        <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
          At <strong>SkaleItUp</strong>, we value your privacy. This policy explains how we collect, use, and protect your personal information when you interact with our website and services.
        </p>

        <section style={{ display: 'grid', gap: '0.6rem' }}>
          <h2 style={{ margin: 0 }}>Information We Collect</h2>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#4b5563', lineHeight: 1.7 }}>
            <li>Contact details such as name, email, and phone number when you fill out forms.</li>
            <li>Business information shared during consultations.</li>
            <li>Website usage data through Google Analytics, Meta Pixel, and other tracking tools.</li>
          </ul>
        </section>

        <section style={{ display: 'grid', gap: '0.6rem' }}>
          <h2 style={{ margin: 0 }}>How We Use Your Information</h2>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#4b5563', lineHeight: 1.7 }}>
            <li>To respond to inquiries and provide services.</li>
            <li>To improve our website and marketing campaigns.</li>
            <li>To send updates, offers, and educational content with your consent.</li>
          </ul>
        </section>

        <section style={{ display: 'grid', gap: '0.6rem' }}>
          <h2 style={{ margin: 0 }}>Data Protection</h2>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
            We use secure servers and encryption to protect your data. We do not sell or share your information with third parties, except trusted partners required to deliver our services.
          </p>
        </section>

        <section style={{ display: 'grid', gap: '0.6rem' }}>
          <h2 style={{ margin: 0 }}>Cookies &amp; Tracking</h2>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
            Our website uses cookies and tracking tools to enhance user experience and measure performance. You can disable cookies in your browser settings.
          </p>
        </section>

        <section style={{ display: 'grid', gap: '0.6rem' }}>
          <h2 style={{ margin: 0 }}>Your Rights</h2>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
            You may request access, correction, or deletion of your personal data at any time by contacting us.
          </p>
        </section>
      </div>
    </main>
  );
}