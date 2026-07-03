import React from 'react';

export const SummitFooter: React.FC = () => {
  return (
    <footer className="summit-section summit-geo-bg" style={{ padding: '120px 24px 80px', backgroundColor: '#ffffff' }}>
      <div className="summit-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Massive Hook */}
        <h2 style={{ 
          fontFamily: 'var(--font-sans)', 
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
          fontWeight: 900, 
          lineHeight: 1.15, 
          letterSpacing: '-0.04em', 
          color: '#0f0f14',
          maxWidth: '900px',
          margin: '0 auto 48px'
        }}>
          Every founder remembers the room where everything started.
        </h2>
        
        {/* Vertical Stacked Cards/Pills */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          alignItems: 'flex-start',
          margin: '0 auto 48px',
          maxWidth: '320px',
          width: '100%'
        }}>
          <div style={{
            backgroundColor: '#fff1ed',
            color: '#ff5722',
            padding: '12px 24px',
            borderRadius: '6px',
            fontWeight: 700,
            fontSize: '1.05rem',
            width: '100%',
            textAlign: 'left',
            border: '1px solid rgba(255, 87, 34, 0.15)'
          }}>
            The next conversation.
          </div>
          <div style={{
            backgroundColor: '#fff1ed',
            color: '#ff5722',
            padding: '12px 24px',
            borderRadius: '6px',
            fontWeight: 700,
            fontSize: '1.05rem',
            width: '100%',
            textAlign: 'left',
            border: '1px solid rgba(255, 87, 34, 0.15)'
          }}>
            The next partnership.
          </div>
          <div style={{
            backgroundColor: '#fff1ed',
            color: '#ff5722',
            padding: '12px 24px',
            borderRadius: '6px',
            fontWeight: 700,
            fontSize: '1.05rem',
            width: '100%',
            textAlign: 'left',
            border: '1px solid rgba(255, 87, 34, 0.15)'
          }}>
            The next opportunity.
          </div>
        </div>

        {/* Action Button & Seat Count */}
        <div style={{ marginBottom: '80px' }}>
          <a href="#register" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#0f0f14',
              border: '2px solid #0f0f14',
              color: '#ffffff',
              padding: '16px 36px',
              fontSize: '1.1rem',
              fontWeight: 800,
              borderRadius: '4px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#0f0f14';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0f0f14';
              e.currentTarget.style.color = '#ffffff';
            }}
            >
              Reserve Your Seat - ₹1,499
            </button>
          </a>
          <p style={{ 
            marginTop: '16px', 
            fontWeight: 800, 
            color: '#ff5722',
            fontSize: '1.05rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span>Only 100 seats available.</span>
            <span style={{ color: '#a0a0ab', textDecoration: 'line-through', fontWeight: 600 }}>₹2,000</span>
            <span style={{ fontSize: '0.8rem', backgroundColor: '#10b981', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>SAVE 25%</span>
          </p>
        </div>

        {/* Minimal Contact Footer */}
        <div style={{ 
          borderTop: '1px solid rgba(0, 0, 0, 0.08)', 
          width: '100%', 
          paddingTop: '48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 900, 
            color: '#0f0f14', 
            letterSpacing: '0.1em',
            margin: 0
          }}>
            CONTACT
          </h3>
          <div style={{ 
            display: 'flex', 
            gap: '32px', 
            fontSize: '0.95rem',
            fontWeight: 600,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a href="#" style={{ color: '#55555d', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5722'} onMouseLeave={(e) => e.currentTarget.style.color = '#55555d'}>WhatsApp</a>
            <a href="#" style={{ color: '#55555d', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5722'} onMouseLeave={(e) => e.currentTarget.style.color = '#55555d'}>Email</a>
            <a href="https://instagram.com/axventuresindia" target="_blank" rel="noopener noreferrer" style={{ color: '#55555d', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5722'} onMouseLeave={(e) => e.currentTarget.style.color = '#55555d'}>Instagram</a>
            <a href="https://linkedin.com/company/ax-venture-studio" target="_blank" rel="noopener noreferrer" style={{ color: '#55555d', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5722'} onMouseLeave={(e) => e.currentTarget.style.color = '#55555d'}>LinkedIn</a>
          </div>
          <div style={{ color: '#a0a0ab', fontSize: '0.85rem', fontWeight: 500 }}>
            © {new Date().getFullYear()} AX Ventures. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
