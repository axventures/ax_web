import React, { lazy, Suspense } from 'react';
import { useApplicationController } from '../controllers/useApplicationController';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsCard } from './components/StatsCard';
import { ApplicationModal } from './components/ApplicationModal';
import { FooterSection } from './components/FooterSection';

// Lazy loaded below-the-fold sections
const CrowdfundingSection = lazy(() => import('./components/CrowdfundingSection').then(m => ({ default: m.CrowdfundingSection })));
const BrandTickerSection = lazy(() => import('./components/BrandTickerSection').then(m => ({ default: m.BrandTickerSection })));
const WhatWeDoSection = lazy(() => import('./components/WhatWeDoSection').then(m => ({ default: m.WhatWeDoSection })));
const KeepYouAheadSection = lazy(() => import('./components/KeepYouAheadSection').then(m => ({ default: m.KeepYouAheadSection })));
const FounderJourneySection = lazy(() => import('./components/FounderJourneySection').then(m => ({ default: m.FounderJourneySection })));
const TeamSection = lazy(() => import('./components/TeamSection').then(m => ({ default: m.TeamSection })));
const OurApproachSection = lazy(() => import('./components/OurApproachSection').then(m => ({ default: m.OurApproachSection })));
const FounderReadinessSection = lazy(() => import('./components/FounderReadinessSection').then(m => ({ default: m.FounderReadinessSection })));

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
        className="v2v-global-vertical-line"
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
        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <CrowdfundingSection />
          <BrandTickerSection />
          <WhatWeDoSection />
          <KeepYouAheadSection />
          <FounderJourneySection onApplyClick={openModal} />
          <TeamSection />
          <FounderReadinessSection onApplyClick={openModal} />
          <OurApproachSection />
        </Suspense>
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
