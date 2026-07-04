/*
  CARD.JSX
  --------
  A generic container card. Used for blog post previews, portfolio
  items, team members, or any grid of similar content blocks.

  Props:
    children  → whatever content you want inside the card
    href      → if provided, the whole card becomes a clickable link
    className → lets you pass extra class names to override styles
                per use-case (e.g. a blog card might add "card--blog")
*/
import './Card.css';

export default function Card({ children, href, className = '', ...rest }) {
  const classes = `card ${className}`;

  /* If an href is provided, wrap everything in an anchor tag so the
     entire card is clickable, not just a button inside it */
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}