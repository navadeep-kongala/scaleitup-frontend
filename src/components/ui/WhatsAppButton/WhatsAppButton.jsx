import './WhatsAppButton.css';
import Button from '../Button/Button';
import { CONTACT } from '../../../utils/constants';

const DEFAULT_MESSAGE = 'Hi there! I would love to chat about growing my business.';

export default function WhatsAppButton({
  children = 'Chat on WhatsApp',
  message = DEFAULT_MESSAGE,
  className = '',
}) {
  const baseHref = CONTACT.whatsapp;
  const href = `${baseHref}${baseHref.includes('?') ? '&' : '?'}text=${encodeURIComponent(message)}`;

  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="solid"
      size="md"
      className={`whatsapp-button ${className}`.trim()}
    >
      <span className="whatsapp-button__icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.098-.472-.149-.672.149-.198.297-.767.967-.94 1.167-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.787-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.612-.92-2.206-.242-.579-.487-.5-.672-.51-.173-.009-.372-.01-.572-.01s-.521.075-.793.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347z" />
          <path fill="currentColor" d="M12.047 2.001c-5.518 0-9.993 4.475-9.993 9.993 0 1.763.46 3.47 1.334 4.982l-1.379 4.999 5.135-1.35c1.44.788 3.085 1.2 4.903 1.2 5.517 0 9.993-4.476 9.993-9.994S17.564 2 12.047 2zm0 17.838c-1.6 0-3.135-.434-4.455-1.254l-.318-.19-3.046.8.813-2.95-.207-.327c-.805-1.268-1.23-2.726-1.23-4.129 0-4.384 3.57-7.954 7.954-7.954 4.383 0 7.954 3.57 7.954 7.954 0 4.384-3.571 7.954-7.954 7.954z" />
        </svg>
      </span>
      {children}
    </Button>
  );
}
