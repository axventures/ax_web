import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const XIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const RetreatFooter: React.FC = () => {
  return (
    <footer className="retreat-footer-wrapper">
      <div className="retreat-container">
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <img src="/ax_logo.jpg" alt="AX Ventures" style={{ width: '28px', height: '28px', borderRadius: '6px' }} />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                AX VENTURES
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#94A3B8' }}>
              Founders Retreat • Immersive Founder Experience
            </p>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>About</Link>
            <Link to="/founders" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>Founders</Link>
            <Link to="/contact" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>Contact</Link>
            <Link to="/apply" style={{ color: 'var(--brand-accent-coral)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none' }}>Apply</Link>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a href="https://instagram.com/axventures.in" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', padding: '8px' }} aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://x.com/axventures_in" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', padding: '8px' }} aria-label="X (Twitter)">
              <XIcon />
            </a>
            <a href="https://linkedin.com/company/ax-venture-studio" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', padding: '8px' }} aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '24px',
          fontSize: '0.82rem',
          color: '#64748B',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>© {new Date().getFullYear()} AX Ventures. All rights reserved.</div>
          <div>Experience → Challenge → Reflection → Insight → Transformation</div>
        </div>

      </div>
    </footer>
  );
};
