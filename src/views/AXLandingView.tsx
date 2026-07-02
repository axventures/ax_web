import React from 'react';
import { useApplicationController } from '../controllers/useApplicationController';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsCard } from './components/StatsCard';
import { CrowdfundingSection } from './components/CrowdfundingSection';
import { BrandTickerSection } from './components/BrandTickerSection';
import { KeepYouAheadSection } from './components/KeepYouAheadSection';
import { FounderJourneySection } from './components/FounderJourneySection';
import { TeamSection } from './components/TeamSection';
import { OurApproachSection } from './components/OurApproachSection';
import { ApplicationModal } from './components/ApplicationModal';

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
        <BrandTickerSection />
        <KeepYouAheadSection />
        <FounderJourneySection onApplyClick={openModal} />
        <TeamSection />
        <OurApproachSection />
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: '80px 24px 120px 24px',
          borderTop: '1px solid rgba(24, 1, 173, 0.08)',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'hsl(var(--text-muted))',
          backgroundColor: '#ffffff',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p>© {new Date().getFullYear()} AX Ventures. All rights reserved.</p>
      </footer>

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
