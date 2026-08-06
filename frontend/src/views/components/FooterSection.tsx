import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const XIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className="footer-social-icon"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const FooterSection: React.FC = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        
        <div className="footer-top" style={{ alignItems: 'flex-start' }}>
          
          <div className="footer-left" style={{ flex: '1.5', maxWidth: '420px' }}>
            <h2 className="footer-headline" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '24px', letterSpacing: '0.01em', lineHeight: '1.15' }}>
              STRONG FOUNDER.<br />
              STRONG TEAM.<br />
              STRONG SYSTEM.<br />
              <span className="blue-text">STRONG COMPANY.</span>
            </h2>
            <div className="footer-divider" style={{ width: '40px', height: '2px', marginBottom: '20px' }}></div>
            <p className="footer-subtext" style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', margin: 0 }}>
              Building the next generation of founders.
            </p>
          </div>

          <div className="footer-right" style={{ flex: '2', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
            
            <div className="footer-column">
              <h4 className="footer-col-title" style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.8rem', marginBottom: '24px' }}>PAGES</h4>
              <ul className="footer-links" style={{ gap: '20px' }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#events">Events</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-col-title" style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.8rem', marginBottom: '24px' }}>PAGES</h4>
              <ul className="footer-links" style={{ gap: '20px' }}>
                <li><a href="/#readiness">Readiness</a></li>
                <li><a href="/founders">Founders</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-col-title" style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.8rem', marginBottom: '24px' }}>CONTACT</h4>
              <ul className="footer-links">
                <li><a href="mailto:axventuresindia@gmail.com" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>axventuresindia@gmail.com</a></li>
              </ul>
              
              <div className="footer-socials-horizontal" style={{ display: 'flex', gap: '12px', marginTop: '24px', alignItems: 'center' }}>
                <a href="https://instagram.com/axventures.in" target="_blank" rel="noopener noreferrer" className="social-icon-box" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://x.com/axventures_in" target="_blank" rel="noopener noreferrer" className="social-icon-box" aria-label="X (Twitter)">
                  <XIcon />
                </a>
                <a href="https://linkedin.com/company/ax-venture-studio" target="_blank" rel="noopener noreferrer" className="social-icon-box" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
          </div>
        </div>

        <div className="footer-bottom-divider" style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', marginTop: '80px', marginBottom: '32px' }}></div>
        
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="footer-copyright" style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.4)' }}>
            © {new Date().getFullYear()} AX Ventures
          </span>
          <span className="footer-copyright" style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.4)' }}>
            axventures.in
          </span>
        </div>

      </div>
    </footer>
  );
};
