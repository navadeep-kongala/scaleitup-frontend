/*
  APPROUTES.JSX
  -------------
  The site's full route map. Each <Route> connects a URL path to the
  page component that should render for it. ":slug" is a placeholder
  segment — e.g. visiting /services/meta-ads renders ServiceDetail
  with slug = "meta-ads".
*/
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import Portfolio from '../pages/Portfolio';
import CaseStudies from '../pages/CaseStudies';
import CaseStudyDetail from '../pages/CaseStudyDetail';
import Industries from '../pages/Industries';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsAndConditions from '../pages/TermsAndConditions';
import ThankYou from '../pages/ThankYou';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/thank-you" element={<ThankYou />} />
      {/* "*" catches any URL not matched above */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}