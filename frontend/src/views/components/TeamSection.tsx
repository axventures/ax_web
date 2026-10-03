import React from 'react';
import { User } from 'lucide-react';
import { SweepingDashedLine } from './DecorativeLines';

const teamMembers = [
  {
    id: 1,
    name: 'BILAL',
    role: 'Founder & CEO',
    image: '/founders/bilal-ceo.jpg'
  },
  {
    id: 2,
    name: 'SADAR SHANAVAS',
    role: 'Co-Founder & COO',
    image: '/founders/sadar-coo.jpg'
  },
  {
    id: 3,
    name: 'HILMI K T',
    role: 'Co-Founder & CTO',
    image: '/founders/hilmi-cto.jpg'
  },
  {
    id: 4,
    name: 'ARATHI CHANDRASEKHARAN',
    role: 'Human Resource Manager',
    image: '/team/arathi_cc.jpg'
  },
  {
    id: 5,
    name: 'NADA MUHAMMED',
    role: 'Operations Associate',
    image: '/team/nada_muhammed.jpg'
  },
  {
    id: 6,
    name: 'MUHAMMED RAJEEH A M K',
    role: 'Operations Associate',
    image: '/team/muhammed_rajeeh.jpg'
  },
  {
    id: 7,
    name: 'SIBIN P',
    role: 'Full-Stack Developer',
    image: '/team/sibin_p.png'
  },
  {
    id: 8,
    name: 'SANGEETH KARUNAKARAN',
    role: 'Full-Stack Developer',
    image: '/team/sangeeth_karun.jpg'
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
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                {member.image ? (
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
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                      color: 'var(--brand-blue)',
                      transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)'
                    }}
                  >
                    <User size={64} strokeWidth={1.5} style={{ opacity: 0.4 }} />
                    <span style={{ marginTop: '12px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      AX Team
                    </span>
                  </div>
                )}
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
