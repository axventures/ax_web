import React from 'react';
import { useApplicationController } from '../controllers/useApplicationController';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsCard } from './components/StatsCard';
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
      {/* Dynamic Grid Background with Top Glows */}
      <div className="landing-bg-container" />

      {/* Navigation Header */}
      <Navbar onApplyClick={openModal} />

      {/* Main Sections */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <HeroSection onApplyClick={openModal} />
        <StatsCard />
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
