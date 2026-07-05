import React from 'react';
import { SweepingDashedLine } from './DecorativeLines';

const mentors = [
  {
    id: 1,
    name: 'MOHAMED HAFEEF',
    role: 'Founder & MD',
    image: '/Mohamed Hafeef   Founder & MD at AX Group of Corporation Pvt Ltd.png',
    height: '460px'
  },
  {
    id: 2,
    name: 'BILAL',
    role: 'CEO of AX Ventures',
    image: '/ceo of ex ventures Bilal.png',
    height: '380px'
  },
  {
    id: 3,
    name: 'MUHAMMED HILMI K T',
    role: 'Head of Operations',
    image: '/ Head of Operations  Muhammed Hilmi K T.png',
    height: '420px'
  },
  {
    id: 4,
    name: 'SADAR SHANAVAS',
    role: 'Finance',
    image: '/finance-Sadar Shanavas .png',
    height: '440px'
  },
  {
    id: 5,
    name: 'MUHAMMED ADHIL KP',
    role: 'Tech Lead',
    image: '/Muhammed Adhil kp tec lead .png',
    height: '480px'
  }
];

// Duplicate the array to create a seamless infinite loop
const infiniteMentors = [...mentors, ...mentors, ...mentors];

export const MentorsSection: React.FC = () => {
  return (
    <section id="mentors" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--brand-warm-cream, #FAF9F6)', padding: '120px 0' }}>
      {/* Decorative dashed line cutting through the section */}
      <SweepingDashedLine />
      
      <div style={{ maxWidth: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 24px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-main)', marginBottom: '24px', fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            The people behind the <br/>
            <em style={{ color: 'var(--brand-blue)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>readiness.</em>
          </h2>
        </div>

        {/* Team Carousel / Grid */}
        <div 
          className="team-scroll-container"
          style={{ 
            display: 'flex', 
            overflow: 'hidden',
            paddingBottom: '40px',
            width: '100%'
          }}
        >
          <div className="team-scroll-track" style={{ display: 'flex', gap: '24px', paddingLeft: '24px', alignItems: 'center' }}>
            {infiniteMentors.map((member, index) => (
              <div 
                key={`${member.id}-${index}`} 
                className="team-card"
                style={{ 
                  width: '320px', 
                  flex: '0 0 auto',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Image Container with hover zoom */}
                <div 
                  className="team-image-wrapper"
                  style={{
                    width: '100%',
                    height: member.height,
                    overflow: 'hidden',
                    marginBottom: '20px',
                    backgroundColor: '#e0e0e0',
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
                    className="team-member-img"
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
                    fontWeight: 400,
                    fontFamily: 'var(--font-sans)'
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
