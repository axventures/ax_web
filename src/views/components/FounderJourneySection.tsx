import React from 'react';
import { DashedArcTopLeft, DiamondMarker } from './DecorativeLines';

interface JourneyStep {
  phase: string;
  title: string;
  description: string;
  isCta?: boolean;
}

const steps: JourneyStep[] = [
  {
    phase: 'PHASE 01',
    title: 'Apply',
    description: 'Submit your startup. We look for ambitious founders ready to build the future.',
  },
  {
    phase: 'PHASE 02',
    title: 'Assessment',
    description: 'A deep dive into your capabilities, team dynamics, and market opportunity.',
  },
  {
    phase: 'PHASE 03',
    title: 'Readiness',
    description: 'Equipping you with the mindset, resources, and alignment before execution.',
  },
  {
    phase: 'PHASE 04',
    title: 'Execution',
    description: 'Hands-on building, product-market fit validation, and initial traction.',
  },
  {
    phase: 'PHASE 05',
    title: 'Investment',
    description: 'Structuring your business, financials, and pitch deck for institutional funding.',
  },
  {
    phase: 'PHASE 06',
    title: 'Growth',
    description: 'Scaling your product, acquiring customers, and optimizing operations.',
  },
  {
    phase: 'PHASE 07',
    title: 'Ecosystem',
    description: "Lifetime access to AX's network of founders, mentors, and resources.",
  },
];

interface FounderJourneySectionProps {
  onApplyClick: () => void;
}

export const FounderJourneySection: React.FC<FounderJourneySectionProps> = ({ onApplyClick }) => {
  return (
    <section className="journey-section" id="founder-journey" aria-labelledby="journey-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative line drawings */}
      <DashedArcTopLeft />
      <DiamondMarker style={{ top: '15%', right: '8%' }} />
      <DiamondMarker style={{ bottom: '20%', left: '4%' }} />
      <div className="journey-container">
        {/* Left Side: Sticky Header (Mondai / YC style) */}
        <div className="journey-header-sidebar">
          <span className="journey-subtitle-label">Our Method</span>
          <h2 className="journey-title" id="journey-heading">
            How AX Works
          </h2>
          <p className="journey-subtitle-desc">
            A structured, stage-by-stage pathway designed to take founders from early-stage concept to venture-scale success.
          </p>
          <button onClick={onApplyClick} className="btn btn-primary" style={{ marginTop: '24px' }}>
            Apply to AX
          </button>
        </div>

        {/* Right Side: Vertical Timeline */}
        <div className="journey-timeline-flow">
          <div className="timeline-line" />
          
          {steps.map((step, index) => (
            <div key={index} className="timeline-step-node">
              {/* Dot on the line */}
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
              </div>
              
              {/* Step Content */}
              <div className="timeline-content-card">
                <span className="timeline-step-phase">{step.phase}</span>
                <h4 className="timeline-step-title">{step.title}</h4>
                <p className="timeline-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
          
          {/* Final CTA Node */}
          <div className="timeline-step-node cta-node">
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot cta-dot" />
            </div>
            <div className="timeline-content-card cta-card">
              <span className="timeline-step-phase" style={{ color: 'hsl(var(--primary))' }}>NEXT STEP</span>
              <h4 className="timeline-step-title">Join AX</h4>
              <p className="timeline-step-desc" style={{ marginBottom: '16px' }}>
                Ready to accelerate your growth? Start your application today.
              </p>
              <button
                onClick={onApplyClick}
                className="journey-cta-btn"
                style={{ cursor: 'pointer' }}
              >
                Begin Journey <span style={{ marginLeft: '4px' }}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderJourneySection;
