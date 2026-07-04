/*
  CONTACTSERVICE.JS
  -----------------
  All API calls related to the contact form live here, separate from
  the Contact.jsx page component. This keeps the page focused on UI,
  and the "how do we talk to the server" logic in one reusable place.

  Used by: pages/Contact.jsx
  Talks to: back-end/src/routes/contact.routes.js
*/

import { api } from './api';

// Sends the contact form data to the back-end, which saves it to the
// database (ContactSubmission model) and triggers a lead notification email.
export async function submitContactForm(formData) {
  return api('/contact', {
    method: 'POST',
    body: formData, // expects { name, email, phone?, message }
  });
}