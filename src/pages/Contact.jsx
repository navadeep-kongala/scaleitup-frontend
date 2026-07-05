/*
  CONTACT.JSX
  -----------
  The contact page — your brief calls for a contact form, Google Maps
  embed, and WhatsApp/call buttons here. This starter version has a
  basic working form (with local state) that you can later connect to
  your back-end's /api/contact endpoint (see contactService.js).
*/
import { useState } from 'react';
import { submitContactForm } from '../services/contactService';
import Button from '../components/ui/Button/Button';
import WhatsAppButton from '../components/ui/WhatsAppButton/WhatsAppButton';
import StickyCallButton from '../components/ui/StickyCallButton/StickyCallButton';

export default function Contact() {
  // Holds the current values typed into the form fields
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Runs every time the user types in any field — updates just that field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // stops the page from reloading on submit
    setError('');
    setSuccessMessage('');
    setIsSubmitting(true);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 10000);

    try {
      const response = await submitContactForm(form, { signal: controller.signal });
      setSuccessMessage(response.message || 'Thanks — we will be in touch within one business day.');
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      if (err.name === 'AbortError') {
        setError('The request timed out. Please try again.');
      } else {
        setError(err.message || 'Unable to send your message. Please try again later.');
      }
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Get in touch</p>
        <h1 style={{ marginBottom: 24 }}>Let's Build Your Growth System</h1>

        {submitted ? (
          <p>{successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: 480, display: 'grid', gap: 16 }}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ padding: 12, borderRadius: 8, border: '1px solid var(--color-border-light)' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ padding: 12, borderRadius: 8, border: '1px solid var(--color-border-light)' }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={handleChange}
              style={{ padding: 12, borderRadius: 8, border: '1px solid var(--color-border-light)' }}
            />
            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              style={{ padding: 12, borderRadius: 8, border: '1px solid var(--color-border-light)' }}
            />
            {error && <p style={{ color: 'var(--color-error)', margin: 0 }}>{error}</p>}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}

        {/* Google Maps embed + sticky contact buttons */}
        <div style={{ marginTop: 32 }}>
          <iframe
            title="ScaleItUp location"
            src="https://www.google.com/maps?q=Hyderabad%2C%20India&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: 8 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 9999, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <WhatsAppButton />
          <StickyCallButton />
        </div>
      </div>
    </main>
  );
}