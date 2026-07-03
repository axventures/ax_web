import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AXLandingView } from './views/AXLandingView';
import { AboutPage } from './views/AboutPage';
import { FounderSummitView } from './views/summit/FounderSummitView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AXLandingView />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/founder-summit" element={<FounderSummitView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
