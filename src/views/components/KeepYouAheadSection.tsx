import React from 'react';
import { DashedArcTopLeft, WaveLinesBottomRight } from './DecorativeLines';

const cards = [
  {
    id: 'card-strong-founder',
    title: 'Strong Founder',
    description: 'We build strong foundations from day one, using proven frameworks to help founders scale with confidence.',
    accent: '#1801AD',
  },
  {
    id: 'card-founder-detail',
    title: 'Clarity. Leadership. Resilience.',
    description: 'Developing founders with clarity, leadership, resilience, and decision-making ability to navigate the toughest challenges.',
    accent: '#4f46e5',
  },
  {
    id: 'card-strong-team',
    title: 'Strong Team',
    description: 'Building high-performing teams with the right talent, culture, accountability, and shared vision.',
    accent: '#1801AD',
  },
  {
    id: 'card-team-detail',
    title: 'Aligned. Accountable. Scalable.',
    description: 'Helping founders build aligned teams, strong cultures, and scalable organizational structures.',
    accent: '#4f46e5',
  },
  {
    id: 'card-strong-system',
    title: 'Strong System',
    description: 'Building scalable systems that create consistency, efficiency, and predictable growth.',
    accent: '#1801AD',
  },
  {
    id: 'card-system-detail',
    title: 'Operations. Sales. Infrastructure.',
    description: 'Implementing execution systems, operational workflows, sales processes, and business infrastructure.',
    accent: '#4f46e5',
  },
  {
    id: 'card-strong-company',
    title: 'Strong Company',
    description: 'Building strong companies with clear vision, scalable systems, and execution excellence.',
    accent: '#1801AD',
  },
  {
    id: 'card-company-detail',
    title: 'Sustainable. Enduring. Impactful.',
    description: 'When founders, teams, and systems become stronger, companies become sustainable and built to last.',
    accent: '#4f46e5',
  },
];

export const KeepYouAheadSection: React.FC = () => {
  return (
    <section className="kyah-section" id="how-we-help" aria-labelledby="kyah-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative line drawings */}
      <DashedArcTopLeft />
      <WaveLinesBottomRight />

      <div className="kyah-container">

        {/* Header text */}
        <div className="kyah-header">
          <h2 className="kyah-title" id="kyah-heading">
            The AX Formula<span className="kyah-reg">®</span>
          </h2>
          <p className="kyah-subtitle">
            From structured daily execution to deep operational support, we give founders every advantage they need to build lasting companies.
          </p>
          <p className="kyah-tagline">
            Here's how we deliver on that promise every day.
          </p>
        </div>

        {/* Cards grid — hover to reveal description */}
        <div className="kyah-cards">
          {cards.map((card) => (
            <div
              key={card.id}
              className="kyah-card kyah-card--reveal"
              id={card.id}
              style={{ '--card-accent': card.accent } as React.CSSProperties}
            >
              {/* Accent bar */}
              <div className="kyah-card-accent-bar" />

              {/* Title — always visible */}
              <h3 className="kyah-card-title">{card.title}</h3>

              {/* Description — reveals on hover */}
              <div className="kyah-card-reveal-content">
                <p className="kyah-card-desc">{card.description}</p>
              </div>

              {/* Bottom glow orb */}
              <div className="kyah-card-glow" aria-hidden="true" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KeepYouAheadSection;
