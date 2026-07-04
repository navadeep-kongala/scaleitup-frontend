import Button from '../../ui/Button/Button';
import './Hero.css';

const STATS = [
  { value: '150+', label: 'Projects delivered' },
  { value: '3.2x', label: 'Average client ROI' },
  { value: '11', label: 'Industries served' },
];

export default function Hero() {
  return (
    <section className="hero section--dark">
      <div className="container hero__inner">
        <p className="eyebrow">Premium growth partner</p>

        <h1 className="hero__headline">
          We build <span className="hero__highlight">systems</span><br />
          that help businesses scale
        </h1>

        <p className="hero__subtext">
          Performance marketing, branding, and automation — built for founders
          who want measurable growth, not vanity metrics.
        </p>

        <div className="hero__actions">
          <Button href="/contact" size="lg">Book a Free Strategy Call</Button>
          <Button href="/portfolio" variant="outline" size="lg">See Our Work</Button>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container hero__stats-inner">
          {STATS.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}