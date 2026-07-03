import React from 'react';
import './summit.css';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SummitHero } from './SummitHero';
import { SummitAudience } from './SummitAudience';
import { SummitExperience } from './SummitExperience';
import { SummitCommunity } from './SummitCommunity';
import { SummitVenueAndPartners } from './SummitVenueAndPartners';
import { SummitPassAndFAQ } from './SummitPassAndFAQ';
import { SummitFooter } from './SummitFooter';

export const FounderSummitView: React.FC = () => {
  return (
    <div className="summit-wrapper">
      {/* Minimal Navbar */}
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '24px', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src="/ax_logo.jpg" alt="AX Ventures" style={{ height: '40px', borderRadius: '4px' }} />
          <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--summit-blue)', letterSpacing: '-0.02em' }}>AX VENTURES</span>
        </div>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--summit-grey)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>
      
      <SummitHero />
      <SummitAudience />
      <SummitExperience />
      <SummitCommunity />
      <SummitVenueAndPartners />
      <SummitPassAndFAQ />
      <SummitFooter />
    </div>
  );
};
