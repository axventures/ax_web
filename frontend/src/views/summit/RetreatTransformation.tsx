import React from 'react';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';
import { SweepingDashedLine } from '../components/DecorativeLines';

const TRANSFORMATION_SHIFTS = [
  {
    from: 'Endless Discussion',
    to: 'Immediate Execution',
    highlight: 'Action',
  },
  {
    from: 'Unvalidated Assumptions',
    to: 'Market Evidence',
    highlight: 'Evidence',
  },
  {
    from: 'Isolated Heroics',
    to: 'Synchronized Team Execution',
    highlight: 'Team Power',
  },
  {
    from: 'Task Management',
    to: 'Radical Outcome Ownership',
    highlight: 'Ownership',
  },
  {
    from: 'People Dependency',
    to: 'Repeatable Systems',
    highlight: 'Systems',
  },
  {
    from: 'Constant Idea-Switching',
    to: 'Disciplined Strategic Decisions',
    highlight: 'Focus',
  },
  {
    from: 'Emotional Reactions',
    to: 'Calm Business Judgment',
    highlight: 'Clarity',
  },
];

export const RetreatTransformation: React.FC = () => {
  return (
    <section className="retreat-section shifts-section-dark">
      <SweepingDashedLine />

      <div className="retreat-container">
        
        {/* Section Header */}
        <div className="retreat-section-header">
          <div className="retreat-tag retreat-tag-dark">
            <Sparkles size={16} />
            The Expected Shift
          </div>
          <h2 className="retreat-title retreat-title-dark">
            The 7 Founder Transformations
          </h2>
          <p className="retreat-subtitle retreat-subtitle-dark">
            The retreat creates a permanent shift from intellectual understanding to instinctive capability.
          </p>
        </div>

        {/* 7 Shifts Grid */}
        <div className="shifts-grid">
          {TRANSFORMATION_SHIFTS.map((shift, idx) => (
            <div key={idx} className="shift-card">
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                  Shift 0{idx + 1}
                </div>
                <div className="shift-from">{shift.from}</div>
              </div>

              <div className="shift-arrow">
                <ArrowRight size={20} />
              </div>

              <div className="shift-to">
                <span>{shift.to}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Quote */}
        <div style={{
          marginTop: '48px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '28px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(255, 87, 34, 0.15)',
            color: 'var(--brand-accent-coral)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Zap size={24} />
          </div>
          <div style={{ flex: '1', minWidth: '240px' }}>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>
              Real Realizations, Carried Straight Back to Your Venture
            </h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.5' }}>
              The objective is not to produce flawless presentations during the retreat, but to build visceral muscle memory that powers company building on Monday morning.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
