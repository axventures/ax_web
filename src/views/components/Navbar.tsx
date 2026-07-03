import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onApplyClick: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Vision to Ventures', href: '/founder-summit', isRoute: true },
  { label: 'Readiness', href: '/#readiness', isRoute: false },
  { label: 'Contact', href: '/#contact', isRoute: false },
];

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledSlightly, setIsScrolledSlightly] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          if (scrollY > 20) {
            setIsScrolledSlightly(true);
          } else {
            setIsScrolledSlightly(false);
          }

          // Show floating dock and hide top header after scrolling past most of the hero section
          if (scrollY > windowHeight * 0.8) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          // Hide floating dock if within 120px of the bottom (footer)
          if (windowHeight + scrollY >= documentHeight - 120) {
            setIsAtBottom(true);
          } else {
            setIsAtBottom(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const renderNavLink = (link: { label: string; href: string; isRoute: boolean }, className: string) => {
    if (link.isRoute) {
      return (
        <Link
          key={link.label}
          to={link.href}
          className={className}
          style={link.href === location.pathname ? { color: '#1801AD' } : undefined}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a
        key={link.label}
        href={link.href}
        className={className}
        onClick={(e) => handleAnchorClick(e, link.href)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <>
      {/* 1. Static Top Header (The first model - scrolls away naturally) */}
      <header 
        className={`navbar-static ${!isAboutPage && isScrolled ? 'hidden' : ''} ${isScrolledSlightly ? 'frosted' : ''}`}
        aria-label="Main Navigation"
      >
        <nav className="navbar-container">
          <Link
            to="/"
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
              className="navbar-logo-img-static"
            />
            <span
              className="navbar-logo-text-static"
              style={{
                fontSize: '0.65rem',
                fontWeight: 300,
                fontFamily: "'Montserrat', sans-serif",
                color: '#0f172a',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                marginTop: '-2px',
                paddingLeft: '3px',
              }}
            >
              ventures
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="desktop-menu-links">
            {NAV_LINKS.map((link) => renderNavLink(link, 'nav-link-item'))}
          </div>

          {/* Desktop CTA Button */}
          <div className="desktop-menu-cta">
            <button
              onClick={onApplyClick}
              className="btn btn-primary nav-cta-btn"
            >
              Apply
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-dropdown animate-slide-up" role="navigation" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  {link.label}
                </a>
              )
            )}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onApplyClick();
              }}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '8px' }}
            >
              Apply
            </button>
          </div>
        )}
      </header>

      {/* 2. Floating Bottom Glass Pill Navbar (The second model - slides up from downside) */}
      {!isAboutPage && (
        <header 
          className={`navbar-floating-dock ${isScrolled && !isAtBottom ? 'visible' : ''}`}
          aria-label="Floating Navigation"
        >
          <nav className="navbar-container-dock">
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <img
                src="/ax_logo.jpg"
                alt="AX Ventures"
                className="navbar-logo-img-dock"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="desktop-menu-links-dock">
              {NAV_LINKS.map((link) => renderNavLink(link, 'nav-link-item-dock'))}
            </div>

            {/* Desktop CTA Button */}
            <div className="desktop-menu-cta-dock">
              <button
                onClick={onApplyClick}
                className="btn btn-primary nav-cta-btn-dock"
              >
                Apply
              </button>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;
