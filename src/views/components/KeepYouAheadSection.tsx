import React from 'react';

const cards = [
  {
    id: 'card-structured-execution',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Strong Founder',
    description: 'We build strong foundations from day one, using proven frameworks to help founders scale with confidence.',
    cta: 'See How It Works →',
    gradientId: 'orange',
  },
  {
    id: 'card-strategic-partnerships',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Developing founders with clarity, leadership, resilience, and decision-making ability.',
    description: 'Empowering founders with the clarity, leadership, resilience, and confidence to make better decisions.',
    cta: 'Explore Network →',
    gradientId: 'blue',
  },
  {
    id: 'card-founder-development',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: 'Strong Team',
    description: 'Building high-performing teams with the right talent, culture, accountability, and shared vision.',
    cta: 'Start Growing →',
    gradientId: 'green',
  },
  {
    id: 'card-strategic-partnerships',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: 'Helping founders build aligned teams, strong cultures, and scalable organizational structures.',
    description: 'Building teams that are aligned, accountable, and equipped to execute with excellence.',
    cta: 'Start Growing →',
    gradientId: 'green',
  },
  {
    id: 'card-founder-development',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: 'Strong System',
    description: 'Building scalable systems that create consistency, efficiency, and predictable growth.  ',
    cta: 'Start Growing →',
    gradientId: 'green',
  },
  {
    id: 'card-founder-development',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: 'Implementing execution systems, operational workflows, sales processes, and business infrastructure.',
    description: 'Building structured systems across operations, sales, and infrastructure to enable smooth, scalable execution.',
    cta: 'Start Growing →',
    gradientId: 'green',
  },
  {
    id: 'card-founder-development',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: 'Strong Company',
    description: 'Building strong companies with clear vision, scalable systems, and execution excellence.',
    cta: 'Start Growing →',
    gradientId: 'green',
  },
  {
    id: 'card-founder-development',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: 'When founders, teams, and systems become stronger, companies become sustainable',
    description: 'Stronger founders, stronger teams, and stronger systems create companies that last.',
    cta: 'Start Growing →',
    gradientId: 'green',
  },
  
];

export const KeepYouAheadSection: React.FC = () => {
  return (
    <section className="kyah-section" id="how-we-help" aria-labelledby="kyah-heading">
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

        {/* Cards grid */}
        <div className="kyah-cards">
          {cards.map((card) => (
            <div key={card.id} className={`kyah-card kyah-card--${card.gradientId}`} id={card.id}>
              {/* Icon badge */}
              

              {/* Content */}
              <h3 className="kyah-card-title">{card.title}</h3>
              <p className="kyah-card-desc">{card.description}</p>
              

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
