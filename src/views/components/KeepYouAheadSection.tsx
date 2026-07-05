import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { DashedArcTopLeft, WaveLinesBottomRight, SweepingDashedLineAlt } from './DecorativeLines';

const desktopCards = [
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

const DesktopKeepYouAheadSection: React.FC = () => {
  return (
    <section className="kyah-section" id="how-we-help" aria-labelledby="kyah-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative line drawings */}
      <DashedArcTopLeft />
      <WaveLinesBottomRight />
      <SweepingDashedLineAlt />

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
          {desktopCards.map((card) => (
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

const axFormulaCards = [
  {
    id: 'card-strong-founder',
    title: 'Strong Founder',
    description: 'We build strong foundations from day one, using proven frameworks to help founders scale with confidence.',
    bg: 'rgba(24,1,173,0.15)'
  },
  {
    id: 'card-founder-detail',
    title: 'Clarity. Leadership. Resilience.',
    description: 'Developing founders with clarity, leadership, resilience, and decision-making ability to navigate the toughest challenges.',
    bg: 'rgba(24,1,173,0.11)'
  },
  {
    id: 'card-strong-team',
    title: 'Strong Team',
    description: 'Building high-performing teams with the right talent, culture, accountability, and shared vision.',
    bg: 'rgba(24,1,173,0.07)'
  },
  {
    id: 'card-team-detail',
    title: 'Aligned. Accountable. Scalable.',
    description: 'Helping founders build aligned teams, strong cultures, and scalable organizational structures.',
    bg: 'rgba(24,1,173,0.04)'
  }
];

const MobileKeepYouAheadSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // first open by default

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="kyah-section" id="how-we-help" aria-labelledby="kyah-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative line drawings */}
      <DashedArcTopLeft />
      <WaveLinesBottomRight />
      <SweepingDashedLineAlt />

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

        {/* Stacked Cards */}
        <div style={{ maxWidth: '600px', margin: '40px auto 0', display: 'flex', flexDirection: 'column' }}>
          {axFormulaCards.map((card, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={card.id}
                onClick={() => toggleCard(index)}
                style={{
                  backgroundColor: card.bg,
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '24px',
                  marginTop: index === 0 ? '0' : '-12px',
                  position: 'relative',
                  zIndex: axFormulaCards.length - index,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 -4px 12px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    {card.title}
                  </h3>
                  <ChevronRight 
                    size={20} 
                    color="#1801AD" 
                    style={{ 
                      transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease' 
                    }} 
                  />
                </div>
                
                <div 
                  style={{ 
                    maxHeight: isExpanded ? '200px' : '0', 
                    opacity: isExpanded ? 1 : 0, 
                    overflow: 'hidden', 
                    transition: 'all 0.3s ease',
                    marginTop: isExpanded ? '12px' : '0'
                  }}
                >
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155', lineHeight: 1.5 }}>
                    {card.description}
                  </p>
                </div>
                
                {/* Peek preview text for mobile if closed */}
                {!isExpanded && (
                  <p 
                    style={{ 
                      margin: '8px 0 0', 
                      fontSize: '0.9rem', 
                      color: '#475569', 
                      opacity: 0.5,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {card.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export const KeepYouAheadSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return isMobile ? <MobileKeepYouAheadSection /> : <DesktopKeepYouAheadSection />;
};

export default KeepYouAheadSection;
