import React from 'react';
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
            @media (max-width: 1024px) {
              .team-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 640px) {
              .team-grid {
                grid-template-columns: 1fr;
              }
            }
          `}
        </style>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="team-card"
              style={{ 
                display: 'flex',
                flexDirection: 'column'
              }}
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
                  borderRadius: '12px'
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
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--text-muted)',
                  fontWeight: 400
                }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
