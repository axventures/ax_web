import React from 'react';
import { useNavigate } from 'react-router-dom';
import './retreat.css';
import { RetreatHero } from './RetreatHero';
import { RetreatPhilosophy } from './RetreatPhilosophy';
import { RetreatChallenges } from './RetreatChallenges';
// import { RetreatTransformation } from './RetreatTransformation';
import { RetreatObservation } from './RetreatObservation';
import { RetreatCohortStructure } from './RetreatCohortStructure';
import { RetreatNextSteps } from './RetreatNextSteps';
import { RetreatFooter } from './RetreatFooter';
import { Navbar } from '../components/Navbar';

export const FoundersRetreatView: React.FC = () => {
  const navigate = useNavigate();
  const handleApplyClick = () => navigate('/apply');

  return (
    <div className="retreat-wrapper">
      <Navbar onApplyClick={handleApplyClick} />
      
      <main id="retreat-main">
        <RetreatHero />
        <RetreatPhilosophy />
        <RetreatChallenges />
        {/* <RetreatTransformation /> */}
        <RetreatObservation />
        <RetreatCohortStructure />
        <RetreatNextSteps />
      </main>

      <RetreatFooter />
    </div>
  );
};

// Backwards compatibility export
export const FounderSummitView = FoundersRetreatView;
export default FoundersRetreatView;
