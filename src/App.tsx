import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AXLandingView } from './views/AXLandingView';
import { AboutPage } from './views/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AXLandingView />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
