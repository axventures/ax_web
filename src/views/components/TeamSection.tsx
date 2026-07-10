import React, { useState, useEffect, useRef } from 'react';
import { SweepingDashedLine } from './DecorativeLines';

const teamMembers = [
  {
    id: 1,
    name: 'MOHAMED HAFEEF',
    role: 'Founder & MD',
    image: '/founders/Mohamed Hafeef   Founder & MD at AX Group of Corporation Pvt Ltd.png'
  },
  {
    id: 2,
    name: 'BILAL',
    role: 'Founder & CEO',
    image: '/founders/ceo of ex ventures Bilal.png'
  },
  {
    id: 3,
    name: 'SADAR SHANAVAS',
    role: 'Co-Founder & COO',
    image: '/founders/finance-Sadar Shanavas .png'
  },
  {
    id: 4,
    name: 'HILMI K T',
    role: 'Head of Operations',
    image: '/founders/hilmi.png'
  }
];

export const TeamSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeSnapId, setActiveSnapId] = useState<number | null>(teamMembers[0]?.id || null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close expanded card when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpandedId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Intersection Observer for mobile carousel active card detection
  useEffect(() => {
    // Only run on mobile viewport
    if (window.innerWidth > 640) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            if (id) setActiveSnapId(id);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6, // Trigger when card is mostly in view (centered)
      }
    );

    const children = document.querySelectorAll('.team-card-wrapper');
    children.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (id: number) => {
    if (window.innerWidth > 640) return; // Only toggle expansion on mobile
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="team" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff', padding: '120px 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      {/* Decorative dashed line cutting through the section */}
      <SweepingDashedLine />
      
      <div style={{ maxWidth: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 24px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-main)', marginBottom: '24px' }}>
            The people behind the <br/>
            <em style={{ color: 'var(--brand-blue)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>execution.</em>
          </h2>
        </div>

        <style>
          {`
            .team-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 24px;
              padding: 0 24px;
              width: 100%;
              max-width: 1400px;
              margin: 0 auto;
            }
            .team-card-wrapper {
              display: flex;
              flex-direction: column;
            }
            .team-role-container {
              max-height: 200px;
              opacity: 1;
              overflow: hidden;
              transition: max-height 0.4s ease, opacity 0.4s ease;
            }

            @media (max-width: 1024px) {
              .team-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 640px) {
              .team-grid {
                display: flex;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                gap: 16px;
                padding: 0 5vw; /* Padding so cards peek nicely */
                scrollbar-width: none;
              }
              .team-grid::-webkit-scrollbar {
                display: none;
              }
              .team-card-wrapper {
                scroll-snap-align: center;
                flex: 0 0 80vw; /* Card width leaves room for peek */
                opacity: 0.4;
                transform: scale(0.92);
                transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease;
                cursor: pointer;
              }
              .team-card-wrapper.active-snap {
                opacity: 1;
                transform: scale(1);
              }
              /* Mobile Collapsed State */
              .team-role-container.collapsed {
                max-height: 0;
                opacity: 0;
              }
            }
          `}
        </style>

        {/* Team Grid */}
        <div className="team-grid" ref={containerRef}>
          {teamMembers.map((member) => {
            const isMobileActive = activeSnapId === member.id;
            const isExpanded = expandedId === member.id;

            return (
              <div 
                key={member.id} 
                data-id={member.id}
                className={`team-card-wrapper ${isMobileActive ? 'active-snap' : ''}`}
                onClick={() => handleCardClick(member.id)}
              >
                {/* Image Container with hover zoom */}
                <div 
                  className="team-image-wrapper"
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '12px',
                    boxShadow: isMobileActive ? '0 20px 40px rgba(0,0,0,0.1)' : 'none',
                    transition: 'box-shadow 0.4s ease'
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)'
                    }}
                    onMouseEnter={(e) => window.innerWidth > 640 && (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => window.innerWidth > 640 && (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Text info */}
                <div>
                  <h3 style={{ 
                    fontSize: '1rem', 
                    fontWeight: 800, 
                    color: 'var(--text-main)', 
                    letterSpacing: '0.05em',
                    marginBottom: '4px',
                    fontFamily: 'var(--font-sans)'
                  }}>
                    {member.name}
                  </h3>
                  
                  {/* Expandable Details Container */}
                  <div className={`team-role-container ${!isExpanded ? 'collapsed' : ''}`}>
                    <p style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--text-muted)',
                      fontWeight: 400,
                      margin: 0,
                      paddingTop: '2px'
                    }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
