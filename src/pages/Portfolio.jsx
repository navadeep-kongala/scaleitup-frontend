const projects = [
  {
    title: 'Tasty Gold Oils',
    category: 'FMCG',
    description: 'We helped increase brand visibility in a competitive market through performance marketing campaigns with Meta Ads and Google Ads.',
    result: '3x increase in sales inquiries',
  },
  {
    title: 'Melbourne Autotech',
    category: 'Automotive',
    description: 'We established credibility in the automotive service industry through a website revamp, SEO optimization, and targeted campaigns.',
    result: '40% growth in customer bookings',
  },
  {
    title: 'Toys & Tales',
    category: 'Retail',
    description: 'We drove footfall and online engagement through storytelling-led social media and influencer collaborations.',
    result: '2x increase in store visits and engagement',
  },
  {
    title: 'Reisa Interio',
    category: 'Interior Design',
    description: 'We positioned the brand as premium through a branding overhaul, portfolio showcase website, and focused paid campaigns.',
    result: 'High-value project leads and stronger positioning',
  },
  {
    title: 'Hyderabad Furniture Factory',
    category: 'Manufacturing',
    description: 'We improved visibility and lead generation through an SEO-driven content strategy and Google Ads.',
    result: '60% increase in organic traffic',
  },
];

const industries = [
  'FMCG',
  'Manufacturing',
  'Interior Design',
  'Education',
  'Automotive',
  'Retail & Fashion',
  'Restaurants & Cafés',
  'Real Estate',
  'Healthcare & Clinics',
  'Startups & SMEs',
];

export default function Portfolio() {
  return (
    <main className="section">
      <div className="container" style={{ display: 'grid', gap: '2rem' }}>
        <section style={{ display: 'grid', gap: '1rem', maxWidth: '760px' }}>
          <p className="eyebrow">Our work</p>
          <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>A portfolio built around measurable growth.</h1>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
            At <strong>SkaleItUp</strong>, every project is a proof point of our philosophy: we don’t just market businesses, we build systems that help them scale.
          </p>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
            Our portfolio highlights diverse industries, bold strategies, and measurable outcomes. Each case study demonstrates how we transform challenges into growth opportunities.
          </p>
        </section>

        <section style={{ display: 'grid', gap: '1.25rem' }}>
          {projects.map((project) => (
            <article key={project.title} style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.4rem', background: '#fff', boxShadow: '0 15px 35px rgba(0,0,0,0.04)' }}>
              <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: '#6b7280', fontSize: '0.8rem' }}>{project.category}</p>
              <h2 style={{ margin: '0.35rem 0 0.55rem' }}>{project.title}</h2>
              <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>{project.description}</p>
              <p style={{ margin: '0.8rem 0 0', fontWeight: 700, color: '#111827' }}>{project.result}</p>
            </article>
          ))}
        </section>

        <section>
          <h2 style={{ marginBottom: '0.8rem' }}>Industries We Serve</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
            {industries.map((industry) => (
              <span key={industry} style={{ border: '1px solid #e5e7eb', borderRadius: '999px', padding: '0.6rem 0.9rem', background: '#f9fafb', fontWeight: 600 }}>
                {industry}
              </span>
            ))}
          </div>
        </section>

        <section style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.5rem', background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)' }}>
          <h2 style={{ marginTop: 0 }}>Our Promise</h2>
          <p style={{ marginBottom: '1rem', color: '#4b5563', lineHeight: 1.7 }}>
            Every portfolio project is more than a campaign—it’s a <strong>growth story</strong>. We measure success not by vanity metrics, but by <strong>real business outcomes</strong>: sales, leads, brand equity, and long-term scalability.
          </p>
          <a href="/contact" style={{ display: 'inline-block', padding: '0.8rem 1.2rem', borderRadius: '999px', background: '#111827', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Book a Call</a>
        </section>
      </div>
    </main>
  );
}