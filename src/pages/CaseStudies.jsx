const caseStudies = [
  {
    title: 'Tasty Gold Oils',
    category: 'FMCG',
    challenge: 'Competing in a crowded FMCG market with limited brand visibility.',
    strategy: 'Performance marketing campaigns using Meta Ads and Google Ads, supported by SEO-driven content.',
    execution: 'Targeted audience segmentation, creative ad design, and conversion tracking.',
    results: ['3x increase in sales inquiries', 'Stronger brand recall across regional markets'],
  },
  {
    title: 'Melbourne Autotech',
    category: 'Automotive',
    challenge: 'Establishing credibility in the automotive service industry.',
    strategy: 'Website revamp, SEO optimization, and targeted digital campaigns.',
    execution: 'Modern UI/UX design, keyword-rich content, and Google Ads.',
    results: ['40% growth in customer bookings within 6 months', 'Improved online reputation and trust'],
  },
  {
    title: 'Toys & Tales',
    category: 'Retail',
    challenge: 'Driving both footfall and online engagement for a retail brand.',
    strategy: 'Social media storytelling and influencer collaborations.',
    execution: 'Engaging reels, interactive campaigns, and influencer partnerships.',
    results: ['2x increase in store visits', 'Significant boost in online engagement metrics'],
  },
  {
    title: 'Reisa Interio',
    category: 'Interior Design',
    challenge: 'Positioning as a premium interior design firm.',
    strategy: 'Branding overhaul, portfolio showcase website, and paid ads.',
    execution: 'Visual storytelling, premium design layouts, and targeted campaigns.',
    results: ['High-value project leads', 'Stronger premium brand positioning'],
  },
  {
    title: 'Hyderabad Furniture Factory',
    category: 'Retail/Manufacturing',
    challenge: 'Competing with large-scale furniture retailers.',
    strategy: 'SEO-driven content strategy and Google Ads.',
    execution: 'Optimized product pages, blog content, and targeted ad campaigns.',
    results: ['60% increase in organic traffic', 'Consistent lead generation'],
  },
];

export default function CaseStudies() {
  return (
    <main className="section">
      <div className="container" style={{ display: 'grid', gap: '2rem' }}>
        <section style={{ display: 'grid', gap: '1rem', maxWidth: '760px' }}>
          <p className="eyebrow">Proof, not promises</p>
          <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>Real Businesses. Real Challenges. Real Growth.</h1>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
            At <strong>SkaleItUp</strong>, we believe proof speaks louder than promises. Our case studies showcase how we’ve helped businesses across industries overcome challenges, implement strategies, and achieve measurable growth.
          </p>
        </section>

        <section style={{ display: 'grid', gap: '1.25rem' }}>
          {caseStudies.map((study) => (
            <article key={study.title} style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.4rem', background: '#fff', boxShadow: '0 15px 35px rgba(0,0,0,0.04)' }}>
              <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: '#6b7280', fontSize: '0.8rem' }}>{study.category}</p>
              <h2 style={{ margin: '0.35rem 0 0.65rem' }}>{study.title}</h2>
              <p style={{ margin: '0.3rem 0', color: '#4b5563', lineHeight: 1.7 }}><strong>Challenge:</strong> {study.challenge}</p>
              <p style={{ margin: '0.3rem 0', color: '#4b5563', lineHeight: 1.7 }}><strong>Strategy:</strong> {study.strategy}</p>
              <p style={{ margin: '0.3rem 0', color: '#4b5563', lineHeight: 1.7 }}><strong>Execution:</strong> {study.execution}</p>
              <div style={{ marginTop: '0.8rem' }}>
                <p style={{ margin: '0 0 0.35rem', fontWeight: 700, color: '#111827' }}>Results:</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#4b5563', lineHeight: 1.7 }}>
                  {study.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.5rem', background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)' }}>
          <h2 style={{ marginTop: 0 }}>Why Our Case Studies Matter</h2>
          <p style={{ marginBottom: '0.7rem', color: '#4b5563', lineHeight: 1.7 }}>
            Each case study is structured to show business challenges, strategic approach, execution process, and measurable results. This storytelling approach builds trust, demonstrates expertise, and proves that SkaleItUp delivers real business outcomes—not just marketing campaigns.
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#4b5563', lineHeight: 1.7 }}>
            <li>Business Challenges</li>
            <li>Strategic Approach</li>
            <li>Execution Process</li>
            <li>Measurable Results</li>
          </ul>
        </section>
      </div>
    </main>
  );
}