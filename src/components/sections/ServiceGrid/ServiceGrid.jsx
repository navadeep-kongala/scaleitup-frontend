import services from '../../../data/services';
import './ServiceGrid.css';

function ServiceIcon({ name }) {
  switch (name) {
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19h16" />
          <path d="M7 15v-4" />
          <path d="M12 15V7" />
          <path d="M17 15v-2" />
        </svg>
      );
    case 'social':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M8 10h8" />
          <path d="M8 14h5" />
        </svg>
      );
    case 'search':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.2-4.2" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
          <path d="m19 14 0.8 2.2L22 17l-2.2 0.8L19 20l-0.8-2.2L16 17l2.2-0.8L19 14Z" />
        </svg>
      );
    case 'desktop':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
        </svg>
      );
    case 'palette':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13" cy="5" r="2" />
          <circle cx="7" cy="10" r="2" />
          <circle cx="15" cy="17" r="2" />
          <path d="M9 10c-1.4 1.2-2.2 2.8-2.2 4.7" />
          <path d="M11 7c2.9 0 5.2 1.5 6.2 3.8" />
        </svg>
      );
    case 'growth':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 18V9" />
          <path d="M12 18V5" />
          <path d="M19 18v-7" />
        </svg>
      );
    case 'chat':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 7h12" />
          <path d="M6 11h8" />
          <path d="M6 15h5" />
          <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 3V6a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case 'robot':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="7" width="16" height="10" rx="2" />
          <rect x="8" y="10" width="2" height="2" rx="1" />
          <rect x="14" y="10" width="2" height="2" rx="1" />
          <path d="M9 17v2" />
          <path d="M15 17v2" />
          <path d="M8 7V5" />
          <path d="M16 7V5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      );
  }
}

export default function ServiceGrid({ limit }) {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="service-grid">
      {visibleServices.map((service, index) => (
        <a key={service.slug} href={`/services/${service.slug}`} className="service-card">
          <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="service-card__icon" aria-hidden="true">
            <ServiceIcon name={service.icon} />
          </span>
          <h3 className="service-card__title">{service.title}</h3>
          <p className="service-card__summary">{service.summary}</p>
          <span className="service-card__arrow" aria-hidden="true">→</span>
        </a>
      ))}
    </div>
  );
}