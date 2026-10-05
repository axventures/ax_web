import React from 'react';
import { Flame, Lock, HelpCircle, ArrowUpRight } from 'lucide-react';
import { ContourLinesTopRight, DashedArcTopLeft } from '../components/DecorativeLines';

interface ChallengeData {
  id: string;
  name: string;
  duration: string;
  coreQuestion: string;
  curiousBriefing: string;
  capability: string;
  vibe: string;
}

const CHALLENGES: ChallengeData[] = [
  {
    id: 'CHALLENGE 01',
    name: 'Bridge',
    duration: '30 MIN',
    coreQuestion: 'Can you work together and execute under extreme constraints?',
    curiousBriefing:
      'Given severely restricted resources and an aggressive deadline, your squad must engineer a physical test of stability. No instructions provided. Who leads? Who executes? And what breaks first?',
    capability: 'Resource Scarcity & Team Sync',
    vibe: 'Rapid Collaboration',
  },
  {
    id: 'CHALLENGE 02',
    name: 'Business',
    duration: '75–90 MIN',
    coreQuestion: 'Can you spot an opportunity, package an offer, and sell it immediately?',
    curiousBriefing:
      'Zero advertising budget. Zero prepared pitch decks. 15 minutes to take a raw market opportunity directly to real human beings and secure confirmed interest before the buzzer sounds.',
    capability: 'Zero-Budget Sales & Offer Creation',
    vibe: 'Market Traction',
  },
  {
    id: 'CHALLENGE 03',
    name: 'Decision Experiment',
    duration: '45–50 MIN',
    coreQuestion: 'When tempting new opportunities emerge, do you pivot or hold the line?',
    curiousBriefing:
      'Midway into execution, an alluring, lucrative new deal appears from an unexpected quarter. Do you stay, modify, pivot, or reject? Every decision costs valuable time.',
    capability: 'Opportunity vs. Distraction',
    vibe: 'Strategic Clarity',
  },
  {
    id: 'CHALLENGE 04',
    name: 'Ownership',
    duration: '45–50 MIN',
    coreQuestion: 'Can you take responsibility when assigned roles unexpectedly collapse?',
    curiousBriefing:
      'A high-stakes mission is assigned across 4 founders. Suddenly, key pillars crumble without warning. In the face of failure, who steps in to say: "I’ll handle it"?',
    capability: 'Radical Accountability',
    vibe: 'Crisis Leadership',
  },
  {
    id: 'CHALLENGE 05',
    name: 'System',
    duration: 'PILOT PHASE',
    coreQuestion: 'Can you make work repeatable instead of depending on a single star?',
    curiousBriefing:
      'Build a production engine from scratch, optimize the workflow, and then watch what happens when a critical individual is abruptly removed from the pipeline.',
    capability: 'Process Architecture & Scalability',
    vibe: 'Systems Engineering',
  },
  {
    id: 'CHALLENGE 06',
    name: 'Founder Under Pressure',
    duration: 'PILOT PHASE',
    coreQuestion: 'Can you separate emotional reaction from sound business judgment?',
    curiousBriefing:
      'A dynamic simulation where runway shrinks, key stakeholders threaten departure, and original assumptions fall apart in real time. Can you maintain calm decision discipline?',
    capability: 'Emotional Control & Crisis Reasoning',
    vibe: 'High-Stakes Resilience',
  },
];

export const RetreatChallenges: React.FC = () => {
  return (
    <section id="challenges" className="retreat-section retreat-geo-grid">
      <ContourLinesTopRight opacity={0.25} />
      <DashedArcTopLeft opacity={0.3} />

      <div className="retreat-container">
        
        {/* Section Header */}
        <div className="retreat-section-header">
          <div className="retreat-tag">
            <Flame size={16} />
            The 6 Core Simulations
          </div>
          <h2 className="retreat-title">
            The Challenges
          </h2>
          <p className="retreat-subtitle">
            Six high-intensity, unannounced real-world scenarios designed to test instincts, expose blind spots, and build unshakeable operating capabilities.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="challenges-grid">
          {CHALLENGES.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              
              <div>
                <div className="challenge-top">
                  <span className="challenge-badge-id">{challenge.id}</span>
                  <span className="challenge-duration-pill">{challenge.duration}</span>
                </div>

                <h3 className="challenge-name">{challenge.name}</h3>

                <p className="challenge-curious-prompt">
                  "{challenge.coreQuestion}"
                </p>

                <p className="challenge-teaser-text">
                  {challenge.curiousBriefing}
                </p>
              </div>

              <div className="challenge-footer">
                <div>
                  <span className="challenge-capability-tag">{challenge.capability}</span>
                </div>
                <div className="challenge-classified-badge">
                  <Lock size={12} />
                  <span>Unscripted</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Note on Unannounced Metrics */}
        <div style={{
          marginTop: '48px',
          background: 'rgba(24, 1, 173, 0.04)',
          border: '1px dashed rgba(24, 1, 173, 0.2)',
          borderRadius: '16px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <HelpCircle size={22} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
              <strong>Zero Performative Answers:</strong> AX presents the objectives but keeps observation criteria unannounced to preserve authentic founder behavior and raw decision dynamics.
            </p>
          </div>
          <a
            href="/apply"
            style={{
              fontSize: '0.88rem',
              fontWeight: 700,
              color: 'var(--brand-blue)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              whiteSpace: 'nowrap'
            }}
          >
            Apply for Next Cohort
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
