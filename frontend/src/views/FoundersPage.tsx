import { useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FoundersFRPSection } from './components/FoundersFRPSection';
import { FooterSection } from './components/FooterSection';

export const FoundersPage: React.FC = () => {

  const navigate = useNavigate();
  const handleApplyClick = () => navigate('/apply');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fcfaff' }}>
      <Navbar onApplyClick={handleApplyClick} />

      <main style={{ flexGrow: 1, paddingTop: '120px' }}>
        <FoundersFRPSection onApplyClick={handleApplyClick} />
      </main>

      <FooterSection />

    </div>
  );
};
