import React from 'react';
import { Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      style={{
        padding: '140px 24px',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient light */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '500px',
          background: 'radial-gradient(circle, rgba(24,1,173,0.03) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        
        {/* Section Label */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            backgroundColor: 'rgba(24, 1, 173, 0.05)',
            borderRadius: '100px',
            color: '#1801AD',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '32px'
          }}
        >
          <Sparkles size={16} color="#1801AD" />
          About AX
        </div>

        {/* Title */}
        <h2 
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: '48px'
          }}
        >
          Our Story
        </h2>

        {/* Main Statement */}
        <div style={{ textAlign: 'left', maxWidth: '780px', margin: '0 auto' }}>
          <p 
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
              fontWeight: 500,
              color: '#1e293b',
              lineHeight: 1.4,
              marginBottom: '40px'
            }}
          >
            AX Ventures was founded with one belief:{' '}
            <span style={{ color: '#1801AD', fontWeight: 700 }}>
              Great companies are built by great founders.
            </span>
          </p>

          <p 
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              fontWeight: 400,
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '32px'
            }}
          >
            Many talented founders struggle not because their ideas are weak, but because they lack the right systems, leadership support, execution frameworks, and ecosystem.
          </p>

          <div 
            style={{
              display: 'inline-block',
              padding: '24px 32px',
              backgroundColor: '#f8fafc',
              borderLeft: '4px solid #1801AD',
              borderRadius: '0 16px 16px 0',
              marginTop: '16px'
            }}
          >
            <p 
              style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.4rem)',
                fontWeight: 600,
                color: '#0f172a',
                lineHeight: 1.5,
                margin: 0
              }}
            >
              AX Ventures exists to solve that problem.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
