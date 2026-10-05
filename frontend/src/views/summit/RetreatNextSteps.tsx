import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { SweepingDashedLineAlt } from '../components/DecorativeLines';

const FRP_PILLARS = [
  'Turn retreat realizations into immediate practical priorities',
  'Instill founder clarity, operating cadence, and mental discipline',
  'Develop scalable customer acquisition & sales capabilities',
  'Construct automated venture systems that remove individual dependencies',
  'Build a crystal-clear roadmap tracked through execution, not theory',
];

export const RetreatNextSteps: React.FC = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/apply');
  };

  return (
    <section className="retreat-section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <SweepingDashedLineAlt />

      <div className="retreat-container">
        
        {/* Next Steps Card Banner */}
        <div className="next-steps-banner">
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="retreat-tag retreat-tag-dark" style={{ marginBottom: '20px' }}>
              <Award size={16} />
              Post-Retreat Trajectory
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, margin: '0 0 16px 0', lineHeight: 1.15, color: '#FFFFFF' }}>
              From Retreat Insights to <span style={{ color: '#7AA2FF' }}>FRP Execution</span>
            </h2>

            <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#CBD5E1', maxWidth: '780px', lineHeight: 1.6, margin: '0 0 28px 0' }}>
              The Founders Retreat is an assessment and entry gateway. The journey continues with the <strong>AX Ventures Founder Readiness Program (FRP)</strong> for teams ready to build durable, scalable companies.
            </p>

            {/* FRP Feature List */}
            <div className="frp-feature-grid">
              {FRP_PILLARS.map((pillar, idx) => (
                <div key={idx} className="frp-feature-item">
                  <CheckCircle2 size={18} style={{ color: '#7AA2FF', flexShrink: 0 }} />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            {/* Application CTA Box */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              paddingTop: '32px'
            }}>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                  Ready to test your execution instincts?
                </div>
                <div style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
                  Limited to 12 selective seats per cohort. Review is ongoing.
                </div>
              </div>

              <button onClick={handleApply} className="retreat-btn-primary" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
                <Rocket size={20} />
                Apply for Founders Retreat
                <ArrowRight size={20} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
