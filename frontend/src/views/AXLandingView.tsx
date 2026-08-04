import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsCard } from './components/StatsCard';
import { FooterSection } from './components/FooterSection';
import { InteractiveTileGrid } from './components/InteractiveTileGrid';

import { CrowdfundingSection } from './components/CrowdfundingSection';
import { BrandTickerSection } from './components/BrandTickerSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { KeepYouAheadSection } from './components/KeepYouAheadSection';
import { FounderJourneySection } from './components/FounderJourneySection';
import { OurApproachSection } from './components/OurApproachSection';
import { FounderReadinessSection } from './components/FounderReadinessSection';
import { MentorsSection } from './components/MentorsSection';

import { FoundersFRPSection } from './components/FoundersFRPSection';
import { SectionDivider } from './components/SectionDivider';

export const AXLandingView: React.FC = () => {
  const navigate = useNavigate();
  const handleApplyClick = () => navigate('/apply');

  return (
    <div style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column' }}>

      {/* Navigation Header */}
      <Navbar onApplyClick={handleApplyClick} />

      {/* Hero Wrapper containing Hero and Stats Card */}
      <div className="hero-wrapper">

        {/* Interactive tile grid — covers full hero wrapper */}
        <div className="hero-grid-container">
          <InteractiveTileGrid />
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Stats Card */}
        <StatsCard onApplyClick={handleApplyClick} />
      </div>

      {/* Main Sections */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <CrowdfundingSection />
          <SectionDivider />
          <BrandTickerSection />
          <SectionDivider />
          <WhatWeDoSection />
          <SectionDivider />
          <KeepYouAheadSection />
          <FounderJourneySection onApplyClick={handleApplyClick} />
          <FounderReadinessSection onApplyClick={handleApplyClick} />
          <SectionDivider />
          <MentorsSection />
          <SectionDivider />
          <FoundersFRPSection onApplyClick={handleApplyClick} />
          <SectionDivider />
          <OurApproachSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};
export default AXLandingView;
