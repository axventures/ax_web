import React from 'react';
import { SweepingDashedLine, TopoLinesTopLeft } from './DecorativeLines';

const mentors = [
  {
    id: 1,
    name: 'HARIS I M',
    role: 'Founder, CEO & MD at myResto Today Pvt Ltd',
    image: '/mentors/Haris I M Founder, CEO & MD at myResto Today Pvt Ltd.png',
    linkedin: 'https://www.linkedin.com/in/harisimetpa/',
    height: '480px'
  },
  {
    id: 2,
    name: 'ADHISH VINAYAK',
    role: 'Founder & CEO - Hustlify Sales School',
    image: '/mentors/Adhish Vinayak Founder & CEO - Hustlify Sales School.png',
    linkedin: 'https://www.linkedin.com/in/adhish-vinayak-340646330/',
    height: '380px'
  },
  {
    id: 3,
    name: 'ABDULLAH MOHAMMED T',
    role: 'Founder, Webynix Technologies & Co-founder, Growcaptain',
    image: '/mentors/Abdullah Mohammed T Founder, Webynix Technologies , Growcaptain.png',
    linkedin: 'https://www.linkedin.com/in/abdullah-mohammed-thoppil/',
    height: '460px'
  },
  {
    id: 4,
    name: 'FAHEEM RAZI',
    role: 'Founder & Head of agency - The Oglas',
    image: '/mentors/Faheem Razi Founder  of agency - The Oglas.png',
    linkedin: 'https://www.linkedin.com/in/faheemrazi/',
    height: '420px'
  }
];


export const MentorsSection: React.FC = () => {
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

        {/* Founders Grid / Carousel */}
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
            @media (min-width: 769px) {
              .mobile-duplicate {
                display: none !important;
              }
            }
            @media (max-width: 1024px) {
              .mentors-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 768px) {
              .mentors-grid-container {
                overflow: hidden;
                width: 100vw;
                position: relative;
                left: 50%;
                right: 50%;
                margin-left: -50vw;
                margin-right: -50vw;
              }
              .mentors-grid {
                display: flex;
                width: max-content;
                animation: scroll-mentors 25s linear infinite;
                gap: 16px;
                padding: 0;
              }
              .mentors-grid:active {
                animation-play-state: paused;
              }
              @keyframes scroll-mentors {
                0% { transform: translateX(0); }
                100% { transform: translateX(-1184px); } /* 4 cards * (280px + 16px) */
              }
              .mentors-grid::-webkit-scrollbar {
                display: none;
              }
              
              .mentor-card-wrapper {
                flex: 0 0 280px;
                width: 280px;
                transform: none !important;
                opacity: 1 !important;
                filter: none !important;
              }
            }
          `}
        </style>
        
        <div className="mentors-grid-container">
          <div className="mentors-grid">
            {[...mentors, ...mentors, ...mentors, ...mentors].map((member, index) => (
              <div 
                key={`${member.id}-${index}`} 
                className={`mentor-card-wrapper ${index >= mentors.length ? 'mobile-duplicate' : ''}`}
              >
              {/* Card Container */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  backgroundImage: "url('/mentorsbg.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  marginBottom: '16px'
                }}
              >

                <img 
                  src={member.image} 
                  alt={member.name}
                  loading="lazy"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      zIndex: 2,
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(4px)',
                      WebkitBackdropFilter: 'blur(4px)',
                      padding: '8px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.2s',
                      color: 'white'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
              </div>

              {/* Text info padding box */}
              <div style={{ textAlign: 'left', padding: '0 8px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 800, 
                  color: 'var(--text-main, #0A0A0A)', 
                  letterSpacing: '0.01em',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-sans)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {member.name}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: 'var(--text-muted, #4B5563)',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                  margin: 0,
                  lineHeight: 1.5,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
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
