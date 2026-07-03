import React from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export const SummitExperience: React.FC = () => {
  return (
    <section className="summit-section" style={{ backgroundColor: 'var(--summit-blue)', color: 'white' }}>
      
      <div className="summit-geo-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: 0 }}></div>
      
      <div className="summit-container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="summit-section-title" style={{ textAlign: 'center' }}>The Founder Experience</h2>
        <p className="summit-body-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}>
          This is not a conference. This is a founder experience. Your day is designed to create momentum.
        </p>

        {/* Timeline */}
        <div className="summit-timeline">
          {['Arrival', 'Founder Welcome', 'Meaningful Conversations', 'Expert Perspectives', 'Business Networking', 'Founder Showcase', 'Community Connections', 'Next Opportunities'].map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="summit-timeline-item">
                <span className="summit-timeline-dot"></span>
                {step}
              </div>
              {idx < 7 && <div className="summit-timeline-arrow"><ArrowDown size={20} /></div>}
            </React.Fragment>
          ))}
        </div>

        <p className="summit-body-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '48px auto 100px', fontWeight: 600 }}>
          By the time you leave, you'll know more people, discover new opportunities and gain perspectives that would normally take months to build.
        </p>

        <h2 className="summit-section-title" style={{ textAlign: 'center' }}>What You Will Experience</h2>
        
        <div className="summit-grid-3">
          
          <div className="summit-feature-card">
            <CheckCircle2 className="summit-icon" />
            <h4 className="summit-feature-title">Build Relationships</h4>
            <p>Meet founders building across different industries. Exchange ideas. Solve problems together. Discover future collaborations.</p>
          </div>
          
          <div className="summit-feature-card">
            <CheckCircle2 className="summit-icon" />
            <h4 className="summit-feature-title">Learn From Real Builders</h4>
            <p>Hear practical lessons from entrepreneurs, operators and business leaders who understand what it actually takes to build.</p>
          </div>
          
          <div className="summit-feature-card">
            <CheckCircle2 className="summit-icon" />
            <h4 className="summit-feature-title">Expand Your Network</h4>
            <p>Every meaningful company is built through people. Meet future collaborators, service providers, experienced founders, and ecosystem partners.</p>
          </div>
          
          <div className="summit-feature-card">
            <CheckCircle2 className="summit-icon" />
            <h4 className="summit-feature-title">Showcase Your Vision</h4>
            <p>Selected founders will have opportunities to introduce themselves and their businesses to the community, creating visibility and opening doors.</p>
          </div>
          
          <div className="summit-feature-card" style={{ gridColumn: '1 / -1' }}>
            <CheckCircle2 className="summit-icon" />
            <h4 className="summit-feature-title">Discover New Opportunities</h4>
            <p>Every founder arrives with questions. Many leave with introductions, partnerships, conversations and possibilities they didn't expect.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
