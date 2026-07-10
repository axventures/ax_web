import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onApplyClick: () => void;
}

const DESKTOP_NAV_LINKS = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Events', href: '/founder-summit', isRoute: true },
  { label: 'Readiness', href: '/#readiness', isRoute: false },
  { label: 'Founders', href: '/#frp-founders', isRoute: false },
  { label: 'Contact', href: '/#contact', isRoute: false },
];

const MOBILE_NAV_LINKS = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Events', href: '/founder-summit', isRoute: true },
  { label: 'Readiness', href: '/#readiness', isRoute: false },
  { label: 'Founders', href: '/founders', isRoute: true },
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

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
            onClick={handleLogoClick}
            className="navbar-logo-link"
          >
            <img
              src="/ax_logo.jpg"
              alt="AX Ventures"
              className="navbar-logo-img-static"
            />
            <span className="navbar-logo-text-desktop">
              ventures
            </span>
            <span className="navbar-logo-text-mobile">
              AX VENTURES
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="desktop-menu-links">
            {DESKTOP_NAV_LINKS.map((link) => renderNavLink(link, 'nav-link-item'))}
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
            {MOBILE_NAV_LINKS.map((link) =>
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
              onClick={handleLogoClick}
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
              {DESKTOP_NAV_LINKS.filter(link => link.label !== 'Founders').map((link) => renderNavLink(link, 'nav-link-item-dock'))}
            </div>

            <div className="desktop-menu-cta-dock">
              <button onClick={onApplyClick} className="nav-cta-btn nav-cta-btn-dock">
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
