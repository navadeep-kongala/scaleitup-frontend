/*
  MAIN.JSX
  --------
  The real entry point of the app. Loads global styles, wraps the app
  in BrowserRouter (needed for routing/useLocation), and mounts <App />
  into the #root div in index.html.

  Note: initAnalytics() is intentionally NOT called here — it's already
  triggered once inside App.jsx via useEffect. Calling it here too would
  run it before React even mounts, and if it throws, the whole page
  would fail to render.
*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/tokens.css';
import './styles/typography.css';
import './styles/global.css';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);