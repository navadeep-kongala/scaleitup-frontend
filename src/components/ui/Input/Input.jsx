/*
  INPUT.JSX
  ---------
  Reusable form input — used inside the Contact form, newsletter
  sign-up, and any future form. Wraps a label + input (or textarea)
  together so they're always paired correctly for accessibility.

  Props:
    label       → text label shown above the field
    id          → links the <label> to the <input> for accessibility
    type        → "text" | "email" | "tel" | "textarea" — defaults to "text"
    error       → error message string shown in red below the field
    ...rest     → value, onChange, placeholder, required, etc. pass straight through
*/
import './Input.css';

export default function Input({ label, id, type = 'text', error, ...rest }) {
  return (
    <div className={`input-group ${error ? 'input-group--error' : ''}`}>
      {/* Label above the field — clicking it focuses the input (accessibility) */}
      {label && <label className="input-label" htmlFor={id}>{label}</label>}

      {type === 'textarea' ? (
        <textarea id={id} className="input-field input-field--textarea" {...rest} />
      ) : (
        <input id={id} type={type} className="input-field" {...rest} />
      )}

      {/* Only renders if an error string was passed in */}
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}