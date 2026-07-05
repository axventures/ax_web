import React from 'react';
import './summit.css';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SummitHero } from './SummitHero';
import { SummitAudience } from './SummitAudience';
import { SummitExperience } from './SummitExperience';
import { SummitCommunity } from './SummitCommunity';
import { SummitPartners } from './SummitPartners';
import { SummitVenue } from './SummitVenue';
import { SummitPassAndFAQ } from './SummitPassAndFAQ';
import { SummitFooter } from './SummitFooter';

export const FounderSummitView: React.FC = () => {
  return (
    <div className="summit-wrapper">
      {/* Minimal Navbar */}
      <nav className="summit-nav" aria-label="Summit navigation">
        <div className="summit-nav-logo">
          <img src="/ax_logo.jpg" alt="AX Ventures" />
          <span className="summit-nav-title">AX VENTURES</span>
        </div>
        <Link to="/" className="summit-nav-back">
          <ArrowLeft size={16} /> <span>Back to Home</span>
        </Link>
      </nav>
      
      <SummitHero />
      <SummitAudience />
      <SummitExperience />
      <SummitCommunity />
      <SummitPartners />
      <SummitVenue />
      <SummitPassAndFAQ />
      <SummitFooter />
    </div>
  );
};
