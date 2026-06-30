import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Readiness', href: '#readiness' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        {/* Logo — image mark with 'ventures' below */}
        <a
          href="#home"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            gap: '0px',
          }}
        >
          <img
            src="/ax_logo.jpg"
            alt="AX Ventures"
            className="navbar-logo-img"
          />
          <span
            className="navbar-logo-text"
            style={{
              fontSize: '0.65rem',
              fontWeight: 300,
              fontFamily: "'Montserrat', sans-serif",
              color: '#0f172a',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              marginTop: '-2px',
              paddingLeft: '3px',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            ventures
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="desktop-menu-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link-item"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="desktop-menu-cta">
          <button
            onClick={onApplyClick}
            className="btn btn-primary nav-cta-btn"
          >
            Apply to AX
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-dropdown animate-slide-up">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onApplyClick();
            }}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '8px' }}
          >
            Apply to AX
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
