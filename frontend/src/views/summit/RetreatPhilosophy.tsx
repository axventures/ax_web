import React from 'react';
import { Target, Compass, CheckCircle2, RotateCw, AlertTriangle, Layers } from 'lucide-react';
import { TopoLinesTopLeft, SweepingDashedLineAlt } from '../components/DecorativeLines';

const LEARNING_STEPS = [
  {
    num: '01',
    title: 'Challenge',
    desc: 'A clear, high-constraint mission is given without giving away what capability is observed.',
  },
  {
    num: '02',
    title: 'Experience',
    desc: 'Founders act under pressure, real time constraints, and limited resources.',
  },
  {
    num: '03',
    title: 'Discussion',
    desc: 'The team deconstructs what happened, tactical choices made, and where breakdowns occurred.',
  },
  {
    num: '04',
    title: 'Insight',
    desc: 'Behavioral gaps, leadership reflexes, and execution bottlenecks become clearly visible.',
  },
  {
    num: '05',
    title: 'Reflection',
    desc: 'Founders connect retreat experiences directly to blind spots in their actual companies.',
  },
  {
    num: '06',
    title: 'Next Level',
    desc: 'The next mission immediately tests another foundational founder capability.',
  },
];

export const RetreatPhilosophy: React.FC = () => {
  return (
    <section className="retreat-section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <TopoLinesTopLeft opacity={0.3} />
      <SweepingDashedLineAlt />

      <div className="retreat-container">
        
        {/* Section Header */}
        <div className="retreat-section-header">
          <div className="retreat-tag">
            <Compass size={16} />
            The AX Methodology
          </div>
          <h2 className="retreat-title">
            Built for Action, Not Theory
          </h2>
          <p className="retreat-subtitle">
            The AX Founders Retreat is designed as an intensive founder laboratory rather than a classroom, conference, or conventional workshop.
          </p>
        </div>

        {/* Philosophy Comparison Grid */}
        <div className="retreat-philosophy-grid">
          
          <div className="philosophy-box">
            <h3>
              <AlertTriangle size={24} style={{ color: 'var(--brand-accent-coral)' }} />
              Why Traditional Events Fail
            </h3>
            <p>
              Founders already know concepts like focus, delegation, rapid sales, and systems thinking. But in conventional conferences and panels:
            </p>
            <ul className="bullet-points-list">
              <li>
                <div className="bullet-icon">✕</div>
                <span>Lectures only address intellectual comprehension, not instinctive behavioral reflexes.</span>
              </li>
              <li>
                <div className="bullet-icon">✕</div>
                <span>Conversations remain performative rather than exposing real operational habits.</span>
              </li>
              <li>
                <div className="bullet-icon">✕</div>
                <span>Theory does not prepare founders for chaotic, high-pressure execution under uncertainty.</span>
              </li>
            </ul>
          </div>

          <div className="philosophy-box accent-box">
            <h3>
              <Target size={24} style={{ color: 'var(--brand-blue)' }} />
              What AX Is Creating
            </h3>
            <p>
              Situations reflecting the raw pressure of building a real venture from zero:
            </p>
            <ul className="bullet-points-list">
              <li>
                <div className="bullet-icon">
                  <CheckCircle2 size={14} />
                </div>
                <span>Help founders understand their instincts through real-time action, not hypotheticals.</span>
              </li>
              <li>
                <div className="bullet-icon">
                  <CheckCircle2 size={14} />
                </div>
                <span>Expose decision-making gaps in resource scarcity, personnel pivots, and sales urgency.</span>
              </li>
              <li>
                <div className="bullet-icon">
                  <CheckCircle2 size={14} />
                </div>
                <span>Form an unshakeable practical foundation for the founder's next growth stage.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* The 6-Stage Learning Loop */}
        <div className="learning-loop-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-blue)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                <RotateCw size={16} />
                The Continuous Cycle
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
                The AX Learning Loop
              </h3>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(24, 1, 173, 0.06)', padding: '8px 16px', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-blue)' }}>
              <Layers size={16} />
              6 Repeated Evolutionary Cycles
            </div>
          </div>

          <div className="learning-loop-grid">
            {LEARNING_STEPS.map((step) => (
              <div key={step.num} className="loop-step-card">
                <div className="loop-step-num">{step.num}</div>
                <h4 className="loop-step-title">{step.title}</h4>
                <p className="loop-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
