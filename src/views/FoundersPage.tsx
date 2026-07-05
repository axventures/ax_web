import React from 'react';
import { Navbar } from './components/Navbar';
import { ApplicationModal } from './components/ApplicationModal';
import { useApplicationController } from '../controllers/useApplicationController';
import { FoundersFRPSection } from './components/FoundersFRPSection';
import { FooterSection } from './components/FooterSection';

export const FoundersPage: React.FC = () => {
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fcfaff' }}>
      <Navbar onApplyClick={openModal} />

      <main style={{ flexGrow: 1, paddingTop: '120px' }}>
        <FoundersFRPSection onApplyClick={openModal} />
      </main>

      <FooterSection />

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
