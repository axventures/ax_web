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
        <div className="footer-top">
          
          <div className="footer-left">
            <h2 className="footer-headline">
              STRONG FOUNDER.<br />
              STRONG TEAM.<br />
              STRONG SYSTEM.<br />
              <span className="blue-text">STRONG COMPANY.</span>
            </h2>
            <div className="footer-divider"></div>
            <p className="footer-subtext">
              Building the next generation of founders.
            </p>
            
            <div className="footer-brand">
              <span className="footer-logo">AX</span>
              <span className="footer-copyright">
                © {new Date().getFullYear()} AX Ventures. All rights reserved.
              </span>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-column">
              <h4 className="footer-col-title">Connect</h4>
              <ul className="footer-links">
                <li>
                  <a href="https://x.com/advisorxgrowth" target="_blank" rel="noopener noreferrer" className="social-link">
                    <XIcon /> X (Twitter)
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/axventuresindia" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Instagram size={20} className="footer-social-icon" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/ax-venture-studio" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Linkedin size={20} className="footer-social-icon" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-col-title">Contact</h4>
              <ul className="footer-links">
                <li><a href="mailto:hello@axventures.com">hello@axventures.com</a></li>
                {/* Add placeholders based on the mockup structure */}
                <li>Dubai, UAE</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};
