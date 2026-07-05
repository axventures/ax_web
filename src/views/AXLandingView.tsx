import React from 'react';
import { useApplicationController } from '../controllers/useApplicationController';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsCard } from './components/StatsCard';
import { ApplicationModal } from './components/ApplicationModal';
import { FooterSection } from './components/FooterSection';

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
  const {
    isModalOpen,
    isSubmitting,
    isSuccess,
    errors,
    openModal,
    closeModal,
    submitApplication,
    clearError,
  } = useApplicationController();

  return (
    <div style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {/* Global Decorative Vertical Line (Left Side) */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: '40px',
          width: '1px',
          borderLeft: '1px dashed rgba(24, 1, 173, 0.2)',
          zIndex: 50,
          pointerEvents: 'none'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '-5px',
          width: '9px',
          height: '9px',
          background: 'var(--brand-blue)',
          transform: 'rotate(45deg)'
        }} />
      </div>

      {/* Navigation Header */}
      <Navbar onApplyClick={openModal} />

      {/* Hero Wrapper containing Hero and Stats Card */}
      <div className="hero-wrapper">

        {/* Hero Section */}
        <HeroSection />

        {/* Stats Card */}
        <StatsCard />
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
          <FounderJourneySection onApplyClick={openModal} />
          <FounderReadinessSection onApplyClick={openModal} />
          <SectionDivider />
          <MentorsSection />
          <SectionDivider />
          <div className="hide-on-mobile">
            <FoundersFRPSection onApplyClick={openModal} />
            <SectionDivider />
          </div>
          <OurApproachSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Application Form Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        isSubmitting={isSubmitting}
        isSuccess={isSuccess}
        errors={errors}
        onClose={closeModal}
        onSubmit={submitApplication}
        clearError={clearError}
      />
    </div>
  );
};
export default AXLandingView;
