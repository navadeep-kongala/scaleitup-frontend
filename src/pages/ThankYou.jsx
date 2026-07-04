/*
  THANKYOU.JSX
  ------------
  Shown after a successful contact form submission or booking — good
  for tracking a "conversion" event in Google Analytics/Meta Pixel,
  since this page only loads when someone actually converts.
*/
import Button from '../components/ui/Button/Button';

export default function ThankYou() {
  return (
    <main className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <p className="eyebrow">Message received</p>
        <h1 style={{ marginBottom: 16 }}>Thank you!</h1>
        <p style={{ marginBottom: 32 }}>
          We'll be in touch within one business day to schedule your call.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </main>
  );
}