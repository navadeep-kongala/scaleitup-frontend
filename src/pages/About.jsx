const teamMembers = [
  'Founder & Growth Strategist',
  'Social Media Manager',
  'Performance Marketing Specialist',
  'UI/UX Designer',
  'Website Developer',
  'Graphic Designer',
  'Video Editors & Photographers',
];

const clients = [
  'Tasty Gold Oils',
  'Melbourne Autotech',
  'Toys & Tales',
  'Reisa Interio',
  'Bombay Cloth House',
  'Bhagyashree Industries',
  'Hyderabad Furniture Factory',
];

export default function About() {
  return (
    <main className="section">
      <div className="container" style={{ display: 'grid', gap: '2rem' }}>
        <section style={{ display: 'grid', gap: '1rem', maxWidth: '760px' }}>
          <p className="eyebrow">Who we are</p>
          <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>Your Growth Partner for Scaling Businesses</h1>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.8 }}>
            At <strong>SkaleItUp</strong>, we don’t just market businesses—we build systems that help them scale. Our mission is to transform ambitious companies into growth-driven brands by combining strategy, creativity, and performance marketing.
          </p>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.8 }}>
            We position ourselves as a <strong>premium growth agency</strong>, trusted by business owners, founders, and decision-makers across industries. From manufacturing and real estate to healthcare, retail, and startups, we partner with organizations that are ready to grow and thrive in the digital era.
          </p>
        </section>

        <section>
          <h2 style={{ marginBottom: '0.8rem' }}>Why Choose Us?</h2>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#4b5563', lineHeight: 1.8, display: 'grid', gap: '0.5rem' }}>
            <li><strong>Proven Expertise:</strong> We’ve delivered measurable results across industries including FMCG, automotive, interior design, education, and retail.</li>
            <li><strong>Strategic Approach:</strong> Every project starts with understanding your business challenges and ends with scalable solutions.</li>
            <li><strong>Premium Experience:</strong> Our websites, campaigns, and branding reflect confidence, innovation, and professionalism.</li>
            <li><strong>Long-Term Partnerships:</strong> We focus on building lasting relationships, not just short-term projects.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: '0.8rem' }}>Our Team</h2>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.8 }}>
            Behind SkaleItUp is a team of specialists working together to bring creativity, technical expertise, and business acumen to every project.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginTop: '1rem' }}>
            {teamMembers.map((member) => (
              <div key={member} style={{ border: '1px solid #e5e7eb', borderRadius: '0.9rem', padding: '1rem', background: '#fff' }}>
                {member}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '0.8rem' }}>Our Clients</h2>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.8 }}>
            We’ve partnered with brands such as:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginTop: '1rem' }}>
            {clients.map((client) => (
              <span key={client} style={{ border: '1px solid #e5e7eb', borderRadius: '999px', padding: '0.6rem 0.9rem', background: '#f9fafb', fontWeight: 600 }}>
                {client}
              </span>
            ))}
          </div>
          <p style={{ marginTop: '1rem', color: '#4b5563', lineHeight: 1.8 }}>
            Each collaboration showcases our ability to deliver <strong>measurable growth, strong brand positioning, and digital transformation</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}