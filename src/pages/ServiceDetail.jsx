import { useParams, Link } from 'react-router-dom';
import services from '../data/services';
import Button from '../components/ui/Button/Button';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="section">
        <div className="container">
          <h1>Service not found</h1>
          <p>That service doesn't exist. <Link to="/services">View all services</Link>.</p>
        </div>
      </main>
    );
  }

  const index = services.findIndex((s) => s.slug === slug) + 1;

  return (
    <main>
      <section className="section section--dark">
        <div className="container">
          <p className="eyebrow">Service {String(index).padStart(2, '0')}</p>
          <h1>{service.title}</h1>
          <p style={{ color: 'var(--color-text-inverse-muted)', maxWidth: 640, margin: '16px 0 32px', lineHeight: 1.7 }}>
            {service.summary}
          </p>
          <Button href="/contact">Get a Quote</Button>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: '1.5rem' }}>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.5rem', background: '#fff' }}>
            <h2 style={{ marginTop: 0 }}>Overview</h2>
            <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>{service.overview}</p>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.5rem', background: '#fff' }}>
              <h3 style={{ marginTop: 0 }}>What we do</h3>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#4b5563', lineHeight: 1.8 }}>
                {service.whatWeDo.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.5rem', background: '#fff' }}>
              <h3 style={{ marginTop: 0 }}>Expected outcomes</h3>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#4b5563', lineHeight: 1.8 }}>
                {service.outcomes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.5rem', background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)' }}>
            <h3 style={{ marginTop: 0 }}>Best fit for</h3>
            <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>{service.idealFor}</p>
          </div>
        </div>
      </section>
    </main>
  );
}