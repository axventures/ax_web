import React from 'react';

export const CrowdfundingSection: React.FC = () => {
  return (
    <>
      <section className="crowdfunding-section" id="crowdfunding">
        {/* Light mint green background band running behind */}
        <div className="crowdfunding-bg-band" />

        <div className="crowdfunding-container">
          {/* Left Side: Serif heading and description text */}
          <div className="crowdfunding-text-content">
            <h2 className="crowdfunding-title">
              Why<em> AX - Ventures</em> Exists
            </h2>
            <p className="crowdfunding-description">
              Most startups don't fail because founders lack ideas.
              They fail because founders lack the systems, structure, leadership, execution discipline, and support required to build sustainable companies.
              AX Ventures exists to change that. We work alongside founders to help them build stronger businesses through structured execution, strategic partnerships, operational systems, and founder development.  
            </p>
            {/* Visual indicator / custom divider matching the hand-drawn aesthetic */}
            <div style={{
              marginTop: '24px',
              width: '40px',
              height: '3px',
              borderRadius: '2px',
              background: 'white',
              opacity: 0.8
            }} />
          </div>

          {/* Right Side: Hand-drawn overlapping illustration */}
          <div className="crowdfunding-image-content">
            <img
              src="/Grain.png"
              alt="Crowdfunding projects illustration"
              className="crowdfunding-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CrowdfundingSection;
