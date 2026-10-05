import React from 'react';
import { Eye, MessageSquare, Cpu } from 'lucide-react';
import { TopoLinesTopLeft, WaveLinesBottomRight } from '../components/DecorativeLines';

const OBSERVATION_PILLARS = [
  {
    title: 'Communication',
    desc: 'Clarity, listening dynamics, and tone under severe time compression.',
  },
  {
    title: 'Decision-Making',
    desc: 'Evaluating tradeoffs quickly, resisting distractions, and executing pivots.',
  },
  {
    title: 'Ownership',
    desc: 'Stepping in proactively when teammates falter or unexpected issues arise.',
  },
  {
    title: 'Execution',
    desc: 'Moving rapidly from ideas to tangible working prototypes and sales calls.',
  },
  {
    title: 'Adaptability',
    desc: 'Flexibility when original assumptions break and sudden curveballs hit.',
  },
  {
    title: 'Leadership',
    desc: 'Coordinating without over-directing; guiding the squad through friction.',
  },
];

const DEBRIEF_QUESTIONS = [
  'What actually happened versus what you planned?',
  'What information did you use — and what did you overlook?',
  'Who truly took ownership when the breakdown occurred?',
  'Where does this exact behavioral pattern appear in your real company?',
];

export const RetreatObservation: React.FC = () => {
  return (
    <section className="retreat-section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <TopoLinesTopLeft opacity={0.25} />
      <WaveLinesBottomRight opacity={0.25} />

      <div className="retreat-container">
        
        {/* Section Header */}
        <div className="retreat-section-header">
          <div className="retreat-tag">
            <Eye size={16} />
            The Assessment Engine
          </div>
          <h2 className="retreat-title">
            Observation & Debrief Framework
          </h2>
          <p className="retreat-subtitle">
            AX creates the scenario, steps back, and records unbiased observations. No intrusive coaching during the challenge — only sharp, transformative debriefs.
          </p>
        </div>

        {/* 2-Column Observation & Debrief Layout */}
        <div className="observation-grid">
          
          {/* Left: 6 Evaluated Dimensions */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <Cpu size={18} style={{ color: 'var(--brand-blue)' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
                6 Evaluated Behavioral Dimensions
              </h3>
            </div>
            
            <div className="observation-pillars">
              {OBSERVATION_PILLARS.map((pillar, idx) => (
                <div key={idx} className="obs-pillar-card">
                  <h4>{pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Debrief Philosophy Box */}
          <div className="debrief-showcase-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-accent-coral)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              <MessageSquare size={16} />
              The Debrief Principle
            </div>

            <p className="debrief-quote">
              "The goal of debrief is not to announce a right answer, but to illuminate how you naturally operate under fire."
            </p>
            <div className="debrief-quote-author">
              AX VENTURES BLUEPRINT
            </div>

            <div style={{ marginTop: '28px', borderTop: '1px solid rgba(24, 1, 173, 0.1)', paddingTop: '20px' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 12px 0' }}>
                Key Inquiries Explored After Every Simulation:
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {DEBRIEF_QUESTIONS.map((q, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--brand-blue)', fontWeight: 800 }}>•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
