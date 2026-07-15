import React from 'react';
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
import { useApplicationController } from '../../controllers/useApplicationController';
import { ApplicationModal } from '../components/ApplicationModal';

export const FounderSummitView: React.FC = () => {
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
    <div className="summit-wrapper" style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <Navbar onApplyClick={openModal} />
      
      <SummitHero />
      <SummitAudience />
      <SummitExperience />
      <SummitCommunity />
      <SummitPartners />
      <SummitVenue />
      <SummitPassAndFAQ />
      <SummitFooter />
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
