/*
  MODAL.JSX
  ---------
  A popup overlay — useful for video embeds (e.g. showreel), enlarged
  portfolio images, or a quick-enquiry form without leaving the page.

  Usage:
    const [open, setOpen] = useState(false);
    <button onClick={() => setOpen(true)}>Watch Showreel</button>
    <Modal isOpen={open} onClose={() => setOpen(false)} title="Our Showreel">
      <iframe src="..." />
    </Modal>

  Clicking the dark backdrop OR the × button closes the modal.
  Pressing Escape also closes it (via the keydown listener below).
*/
import { useEffect } from 'react';
import './Modal.css';

export default function Modal({ isOpen, onClose, title, children }) {
  /* Close the modal when the Escape key is pressed */
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  /* Prevent background scrolling while modal is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    /* Backdrop — clicking it closes the modal */
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      {/* Stop clicks inside the modal content from closing it */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {title && <h3 className="modal-title">{title}</h3>}
          <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}