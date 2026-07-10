import React from 'react';
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
  // Duplicate mentors for the infinite mobile marquee
  const infiniteMentors = [...mentors, ...mentors];

  return (
    <section id="mentors" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--brand-warm-cream, #FAF9F6)', padding: '120px 0' }}>
      {/* Dense topographic contour lines in the top left corner */}
      <TopoLinesTopLeft opacity={0.5} />
      
      {/* Decorative dashed line cutting through the section */}
      <SweepingDashedLine />
      
      <div style={{ maxWidth: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 24px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-main)', marginBottom: '24px', fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            The people behind the <br/>
            <em style={{ color: 'var(--brand-blue)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>readiness.</em>
          </h2>
        </div>

        {/* Founders Grid / Mobile Marquee */}
        <style>
          {`
            .mentors-track {
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
            /* Hide the duplicates on desktop/tablet */
            .mobile-duplicate {
              display: none !important;
            }
            
            @media (max-width: 1024px) {
              .mentors-track {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            
            @media (max-width: 768px) {
              .mentors-container {
                overflow: hidden;
                width: 100vw;
                position: relative;
                left: 50%;
                transform: translateX(-50%); /* bleed out to the edges of the screen */
              }
              .mentors-track {
                display: flex;
                width: max-content;
                animation: mentorMarquee 30s linear infinite;
                padding: 0;
                gap: 20px; /* spacing between cards in marquee */
              }
              
              /* Show the duplicates for the infinite loop */
              .mobile-duplicate {
                display: flex !important;
              }
              
              .mentor-card-wrapper {
                /* Perfect fit for mobile */
                width: 75vw;
                flex: 0 0 75vw;
                transition: none;
                transform: none;
                opacity: 1;
                filter: none;
              }
              
              @keyframes mentorMarquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); } /* scrolls exactly 1 full set of mentors */
              }
            }
          `}
        </style>
        
        <div className="mentors-container">
          <div className="mentors-track">
            {infiniteMentors.map((member, index) => (
              <div 
                key={`${member.id}-${index}`} 
                className={`mentor-card-wrapper ${index >= mentors.length ? 'mobile-duplicate' : ''}`}
              >
              {/* Card Container */}
              <div 
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  backgroundColor: '#E5E7EB',
                  borderRadius: '24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  marginBottom: '16px'
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
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              {/* Text info padding box */}
              <div style={{ textAlign: 'left' }}>
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
                <p style={{ 
                  fontSize: '14px', 
                  color: 'var(--text-muted, #4B5563)',
                  fontWeight: 400,
                  fontFamily: 'var(--font-sans)',
                  margin: 0,
                  lineHeight: 1.4
                }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
