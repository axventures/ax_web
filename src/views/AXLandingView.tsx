import React from 'react';
import { useApplicationController } from '../controllers/useApplicationController';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsCard } from './components/StatsCard';
import { CrowdfundingSection } from './components/CrowdfundingSection';
import { BrandTickerSection } from './components/BrandTickerSection';
import { KeepYouAheadSection } from './components/KeepYouAheadSection';
import { FounderJourneySection } from './components/FounderJourneySection';
import { TestimonialsSection } from './components/TestimonialsSection';
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
  } = useApplicationController();

  return (
    <div style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Wrapper containing Navbar, Hero, and Stats Card */}
      <div className="hero-wrapper">
        {/* Navigation Header */}
        <Navbar onApplyClick={openModal} />

        {/* Hero Section */}
        <HeroSection onApplyClick={openModal} />

        {/* Stats Card */}
        <StatsCard />
      </div>

      {/* Main Sections */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CrowdfundingSection />
        <BrandTickerSection />
        <KeepYouAheadSection />
        <FounderJourneySection onApplyClick={openModal} />
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <footer
        style={{
          marginTop: '80px',
          padding: '24px',
          borderTop: '1px solid rgba(15, 23, 42, 0.04)',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'hsl(var(--text-muted))',
          zIndex: 1,
        }}
      >
        <p>© {new Date().getFullYear()} AX Ventures. All rights reserved.</p>
        <p style={{ fontSize: '0.72rem', marginTop: '4px', opacity: 0.7 }}>
          Decoupled MVC Architecture Setup
        </p>
      </footer>

      {/* Application Form Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        isSubmitting={isSubmitting}
        isSuccess={isSuccess}
        errors={errors}
        onClose={closeModal}
        onSubmit={submitApplication}
      />
    </div>
  );
};
export default AXLandingView;
