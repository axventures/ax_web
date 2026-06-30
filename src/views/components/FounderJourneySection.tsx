import React from 'react';

interface FounderJourneySectionProps {
  onApplyClick: () => void;
}

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
  {
    phase: 'NEXT STEP',
    title: 'Join AX',
    description: 'Ready to accelerate your growth? Start your application today.',
    isCta: true,
  },
];

export const FounderJourneySection: React.FC<FounderJourneySectionProps> = ({ onApplyClick }) => {
  return (
    <section className="journey-section" id="founder-journey" aria-labelledby="journey-heading">
      <div className="journey-container">
        
        {/* Section Header */}
        <div className="journey-header">
          <h2 className="journey-title" id="journey-heading">
            How AX Works
          </h2>
          <p className="journey-subtitle">
            Our structured, stage-by-stage process is designed to turn ambitious ideas into venture-scale successes.
          </p>
        </div>

        {/* Journey Grid */}
        <div className="journey-grid">
          
          {/* Main Brand Card (Green, spans 2 rows on desktop) */}
          <div className="journey-main-card">
            {/* Badge Icon */}
            <svg
              width="56"
              height="56"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="journey-badge-icon"
              aria-hidden="true"
            >
              <circle cx="32" cy="26" r="18" fill="currentColor" fillOpacity="0.15" />
              <circle cx="32" cy="26" r="14" stroke="currentColor" strokeWidth="2.5" />
              <path
                d="M32 18.5L35.5 25.5L43 26.5L37.5 31.5L39 39L32 35L25 39L26.5 31.5L21 26.5L28.5 25.5L32 18.5Z"
                fill="currentColor"
              />
              <path
                d="M24 38L18 54L32 48L46 54L40 38"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h3 className="journey-main-title">
              The
              <br />
              Founder
              <br />
              Journey¹
            </h3>

            {/* Footnotes at the bottom */}
            <div className="journey-footnotes">
              <div className="journey-footnote-item">
                1. A structured 7-stage pathway designed to take founders from early-stage concept to venture-scale success.
              </div>
              <div className="journey-footnote-item">
                2. Each phase is backed by dedicated partners, resources, and mentor networks to ensure execution excellence.
              </div>
            </div>
          </div>

          {/* Step Cards */}
          {steps.map((step, index) => {
            if (step.isCta) {
              return (
                <div key={index} className="journey-card journey-card--cta">
                  <div>
                    <span className="journey-card-phase">{step.phase}</span>
                    <h4 className="journey-card-title">{step.title}</h4>
                  </div>
                  <div>
                    <p className="journey-card-desc" style={{ marginBottom: '12px' }}>
                      {step.description}
                    </p>
                    <button
                      onClick={onApplyClick}
                      className="journey-cta-btn"
                      style={{ border: 'none', cursor: 'pointer' }}
                    >
                      Begin Journey <span style={{ marginLeft: '4px' }}>→</span>
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="journey-card">
                <div>
                  <span className="journey-card-phase">{step.phase}</span>
                  <h4 className="journey-card-title">{step.title}</h4>
                </div>
                <p className="journey-card-desc">{step.description}</p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FounderJourneySection;
