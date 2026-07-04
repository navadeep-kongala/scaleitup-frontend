/*
  BADGE.JSX
  ---------
  Small inline label/tag. Used for things like:
  - Service category labels   → <Badge>Meta Ads</Badge>
  - Result metrics on cards   → <Badge variant="gold">+212% ROI</Badge>
  - Industry tags             → <Badge variant="outline">FMCG</Badge>
*/
import './Badge.css';

export default function Badge({ children, variant = 'default', ...rest }) {
  return (
    <span className={`badge badge--${variant}`} {...rest}>
      {children}
    </span>
  );
}