import './StickyCallButton.css';
import { CONTACT } from '../../../utils/constants';

export default function StickyCallButton({ children = 'Call Us', className = '' }) {
  const href = CONTACT.phoneHref;

  return (
    <a href={href} className={`sticky-call-button ${className}`.trim()} aria-label="Call us">
      <span className="sticky-call-button__icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 01.95-.27c1.05.27 2.2.42 3.4.42a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.15 2.35.42 3.4.09.36.01.76-.27.95l-2.03 2.44z" />
        </svg>
      </span>
      <span className="sticky-call-button__label">{children}</span>
    </a>
  );
}
