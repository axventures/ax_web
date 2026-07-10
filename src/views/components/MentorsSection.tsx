import React, { useState, useEffect, useRef } from 'react';
import { SweepingDashedLine, TopoLinesTopLeft } from './DecorativeLines';

const mentors = [
  {
    id: 1,
    name: 'HARIS I M',
    role: 'Founder, CEO & MD at myResto Today Pvt Ltd',
    image: '/mentors/Haris I M Founder, CEO & MD at myResto Today Pvt Ltd.png',
    height: '480px'
  },
    {
    id: 2,
    name: 'ADHISH VINAYAK',
    role: 'Founder & CEO - Hustlify Sales School',
    image: '/mentors/Adhish Vinayak Founder & CEO - Hustlify Sales School.png',
    height: '380px'
  },
  {
    id: 3,
    name: 'ABDULLAH MOHAMMED T',
    role: 'Founder, Webynix Technologies & Co-founder, Growcaptain',
    image: '/mentors/Abdullah Mohammed T Founder, Webynix Technologies Co- founder, Growcaptain.png',
    height: '460px'
  },
  {
    id: 4,
    name: 'FAHEEM RAZI',
    role: 'Founder & Head of agency - The Oglas',
    image: '/mentors/Faheem Razi .png',
    height: '420px'
  }
];

export const MentorsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeSnapId, setActiveSnapId] = useState<number | null>(mentors[0]?.id || null);
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

    const children = document.querySelectorAll('.mentor-card-wrapper');
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
    <section id="mentors" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--brand-warm-cream, #FAF9F6)', padding: '120px 0' }}>
      <TopoLinesTopLeft opacity={0.5} />
      <SweepingDashedLine />
      
      <div style={{ maxWidth: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 24px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-main)', marginBottom: '24px', fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            The people behind the <br/>
            <em style={{ color: 'var(--brand-blue)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>readiness.</em>
          </h2>
        </div>

        <style>
          {`
            .mentors-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 24px;
              padding: 0 24px;
              width: 100%;
              max-width: 1400px;
              margin: 0 auto;
            }
            .mentor-card-wrapper {
              display: flex;
              flex-direction: column;
            }
            .mentor-role-container {
              max-height: 200px;
              opacity: 1;
              overflow: hidden;
              transition: max-height 0.4s ease, opacity 0.4s ease;
            }

            @media (max-width: 1024px) {
              .mentors-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 640px) {
              .mentors-grid {
                display: flex;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                gap: 16px;
                padding: 0 5vw; /* Padding so cards peek nicely */
                scrollbar-width: none;
              }
              .mentors-grid::-webkit-scrollbar {
                display: none;
              }
              .mentor-card-wrapper {
                scroll-snap-align: center;
                flex: 0 0 80vw; /* Card width leaves room for peek */
                opacity: 0.4;
                transform: scale(0.92);
                transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease;
                cursor: pointer;
              }
              .mentor-card-wrapper.active-snap {
                opacity: 1;
                transform: scale(1);
              }
              /* Mobile Collapsed State */
              .mentor-role-container.collapsed {
                max-height: 0;
                opacity: 0;
              }
            }
          `}
        </style>
        
        <div className="mentors-grid" ref={containerRef}>
          {mentors.map((member) => {
            const isMobileActive = activeSnapId === member.id;
            const isExpanded = expandedId === member.id;

            return (
              <div 
                key={member.id} 
                data-id={member.id}
                className={`mentor-card-wrapper ${isMobileActive ? 'active-snap' : ''}`}
                onClick={() => handleCardClick(member.id)}
              >
                {/* Card Container */}
                <div 
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    overflow: 'hidden',
                    backgroundColor: '#E5E7EB',
                    borderRadius: '24px',
                    boxShadow: isMobileActive ? '0 20px 40px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.08)',
                    marginBottom: '16px',
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
                      objectPosition: 'top center',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => window.innerWidth > 640 && (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => window.innerWidth > 640 && (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Text info padding box */}
                <div style={{ textAlign: 'left', padding: '0 8px' }}>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: 800, 
                    color: 'var(--text-main, #0A0A0A)', 
                    letterSpacing: '0.02em',
                    marginBottom: '4px',
                    fontFamily: 'var(--font-sans)'
                  }}>
                    {member.name}
                  </h3>
                  
                  {/* Expandable Details Container */}
                  <div className={`mentor-role-container ${!isExpanded ? 'collapsed' : ''}`}>
                    <p style={{ 
                      fontSize: '14px', 
                      color: 'var(--text-muted, #4B5563)',
                      fontWeight: 400,
                      fontFamily: 'var(--font-sans)',
                      margin: 0,
                      lineHeight: 1.4,
                      paddingTop: '4px'
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
