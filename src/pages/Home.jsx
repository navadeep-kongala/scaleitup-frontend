import Hero from '../components/sections/Hero/Hero.jsx';
import ServiceGrid from '../components/sections/ServiceGrid/ServiceGrid';
import Button from '../components/ui/Button/Button';

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="section">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2>Services built to scale you</h2>
          <p style={{ maxWidth: 520, margin: '12px 0 32px' }}>
            Nine specialized services, one accountable team — built around
            measurable business outcomes, not vanity metrics.
          </p>
          <ServiceGrid limit={6} />
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Button href="/services" variant="outline">View All Services</Button>
          </div>
        </div>
      </section>

      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <p className="eyebrow">Ready to scale?</p>
          <h2 style={{ marginBottom: 24 }}>Let's build your growth system</h2>
          <Button href="/contact" size="lg">Book a Free Strategy Call</Button>
        </div>
      </section>
    </main>
  );
}