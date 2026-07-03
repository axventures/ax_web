import React from 'react';

export const SummitAudience: React.FC = () => {
  return (
    <section 
      className="summit-section summit-bg-white"
      style={{
        backgroundImage: 'url(/businessman_struggling.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundColor: 'rgba(255, 255, 255, 0.95)' // Overlay to ensure text readability
      }}
    >
      <div className="summit-container">
        
        <div className="summit-split-layout">
          
          {/* Who Should Attend */}
          <div className="summit-split-col">
            <h2 className="summit-section-title dark-text">Who Should Attend?</h2>
            <p className="summit-body-text dark-text">
              This summit is built for people who are actively building. Whether you're working on your first idea or growing an early-stage company, you'll find yourself surrounded by people solving similar challenges.
            </p>
            
            <h3 className="summit-subtitle dark-text">Perfect For</h3>
            <ul className="summit-checklist dark-text">
              <li>First-Time Founders</li>
              <li>Startup Teams</li>
              <li>Student Entrepreneurs</li>
              <li>Product Builders</li>
              <li>Business Owners</li>
              <li>Freelancers Building Companies</li>
              <li>Creative Entrepreneurs</li>
              <li>Technology Builders</li>
              <li>Startup Operators</li>
            </ul>
          </div>
          
          {/* Why This Summit Is Different */}
          <div className="summit-split-col summit-card-highlight">
            <h2 className="summit-section-title">Why This Summit Is Different</h2>
            
            <div className="summit-comparison-block">
              <p>Most events give you speeches.</p>
              <p className="highlight">We create conversations.</p>
            </div>
            
            <div className="summit-comparison-block">
              <p>Most events give you visitors.</p>
              <p className="highlight">We bring together builders.</p>
            </div>
            
            <div className="summit-comparison-block">
              <p>Most events end with applause.</p>
              <p className="highlight">This one begins with relationships.</p>
            </div>
            
            <p className="summit-body-text" style={{ marginTop: '32px' }}>
              Every session, every interaction and every experience is intentionally designed to help founders connect with the people who can influence their journey.
            </p>
            
            <div className="summit-bullet-group">
              <span className="summit-bullet">No unnecessary hype.</span>
              <span className="summit-bullet">No generic networking.</span>
              <span className="summit-bullet">No passive audience.</span>
            </div>
            
            <p className="summit-bold-statement">
              Just people building companies together.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
