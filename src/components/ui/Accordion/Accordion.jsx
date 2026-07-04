/*
  ACCORDION.JSX
  -------------
  Expandable FAQ component. Clicking a question toggles the answer
  open/closed. Used on service pages and the homepage FAQ section.

  Usage:
    const faqs = [
      { question: 'How long does onboarding take?', answer: '...' },
    ];
    <Accordion items={faqs} />
*/
import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ items = [] }) {
  /* Tracks which question is currently open by its index.
     null means all are closed. Only one can be open at a time. */
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}>
            <button
              className="accordion__trigger"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              {/* Plus/minus icon — built from CSS so no icon library needed */}
              <span className="accordion__icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {/* The answer only renders in the DOM when open, so it takes no
                height at all when closed (true collapse, not just hidden) */}
            {isOpen && (
              <div className="accordion__body">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}