import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AXLandingView = lazy(() => import('./views/AXLandingView'));
const AboutPage = lazy(() => import('./views/AboutPage'));
const FounderSummitView = lazy(() => import('./views/summit/FounderSummitView').then(m => ({ default: m.FounderSummitView })));

const PageLoader = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ffffff',
    color: '#1801AD',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '1.25rem',
    fontWeight: 600
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <div className="spinner" style={{ width: '40px', height: '40px', borderWidth: '3px', borderTopColor: '#1801AD' }} />
      <span>Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<AXLandingView />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/founder-summit" element={<FounderSummitView />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
