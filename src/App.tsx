import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AXLandingView from './views/AXLandingView';
import AboutPage from './views/AboutPage';
import { FounderSummitView } from './views/summit/FounderSummitView';
import { FoundersPage } from './views/FoundersPage';
import { NotFoundView } from './views/NotFoundView';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AXLandingView />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/founder-summit" element={<FounderSummitView />} />
        <Route path="/founders" element={<FoundersPage />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
