import React from 'react';
import { useNavigate } from 'react-router-dom';
import './summit.css';
import { SummitHero } from './SummitHero';
import { SummitAudience } from './SummitAudience';
import { SummitExperience } from './SummitExperience';
import { SummitCommunity } from './SummitCommunity';
import { SummitPartners } from './SummitPartners';
import { SummitVenue } from './SummitVenue';
import { SummitPassAndFAQ } from './SummitPassAndFAQ';
import { SummitFooter } from './SummitFooter';
import { Navbar } from '../components/Navbar';

export const FounderSummitView: React.FC = () => {

  const navigate = useNavigate();
  const handleApplyClick = () => navigate('/apply');

  return (
    <div className="summit-wrapper" style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <Navbar onApplyClick={handleApplyClick} />
      
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
