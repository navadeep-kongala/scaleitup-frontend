import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import StickyCallButton from './components/ui/StickyCallButton/StickyCallButton';
import WhatsAppButton from './components/ui/WhatsAppButton/WhatsAppButton';
import { initAnalytics } from './utils/analytics';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => { initAnalytics(); }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <AppRoutes />
      <Footer />
      {/* Floating buttons — placed here once, show on every page */}
      <StickyCallButton />
      <WhatsAppButton />
    </>
  );
}