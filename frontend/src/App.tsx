import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AXLandingView from './views/AXLandingView';
import AboutPage from './views/AboutPage';
import { FounderSummitView } from './views/summit/FounderSummitView';
import { FoundersPage } from './views/FoundersPage';
import { NotFoundView } from './views/NotFoundView';
import { ContactPage } from './views/ContactPage';
import { FRPApplicationPage } from "./views/apply/FRPApplicationPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AXLandingView />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/founder-summit" element={<FounderSummitView />} />
        <Route path="/founders" element={<FoundersPage />} />
        <Route path="/apply" element={<FRPApplicationPage />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
