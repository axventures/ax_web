import React, { useState } from 'react';
import { Menu, X, Triangle } from 'lucide-react';

interface NavbarProps {
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About AX Ventures', href: '#about' },
    { label: 'Founder Readiness', href: '#readiness' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Founder Community', href: '#community' },
    { label: 'Founder Summit', href: '#summit' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '1.25rem',
            fontWeight: 800,
            color: 'hsl(var(--text-main))',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
              padding: '6px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Triangle size={16} color="#fff" fill="#fff" style={{ transform: 'rotate(90deg)' }} />
          </div>
          <span>AX Ventures</span>
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-menu-links"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.88rem',
                fontWeight: 500,
                color: 'hsl(var(--text-muted))',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(var(--primary))')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(var(--text-muted))')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div style={{ display: 'none' }} className="desktop-menu-cta">
          <button
            onClick={onApplyClick}
            className="btn btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.88rem' }}
          >
            Apply to AX
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'hsl(var(--text-main))',
            display: 'block',
          }}
          className="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className="animate-slide-up"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid hsl(var(--border-color))',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
            zIndex: 999,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'hsl(var(--text-muted))',
                padding: '4px 0',
              }}
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

      {/* Embedded CSS for responsive toggle handling */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-menu-links {
            display: flex !important;
          }
          .desktop-menu-cta {
            display: block !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};
export default Navbar;
