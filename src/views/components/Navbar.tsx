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
  { label: 'Home', href: '/', anchorId: 'top' },
  { label: 'About', href: '/about', anchorId: 'about' },
  { label: 'Events', href: '/founder-summit', anchorId: 'events' },
  { label: 'Readiness', href: '/#readiness', anchorId: 'readiness' },
  { label: 'Founders', href: '/founders', anchorId: 'frp-founders' },
  { label: 'Contact', href: '/#contact', anchorId: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledSlightly, setIsScrolledSlightly] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // For standard static navbar fade out
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // For frosting effect on static navbar before it fades
      if (window.scrollY > 10) {
        setIsScrolledSlightly(true);
      } else {
        setIsScrolledSlightly(false);
      }

      // Hide dock when user hits bottom of page
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottomThreshold = document.body.offsetHeight - 100;
      
      if (scrollPosition >= bottomThreshold) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
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

  const renderNavLink = (link: { label: string; href: string; isRoute?: boolean }, className: string) => {
    if (link.isRoute) {
      return (
        <Link key={link.label} to={link.href} className={className}>
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

  const handleMobileNavClick = (e: React.MouseEvent, anchorId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (anchorId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* 1. Standard Static Navbar */}
      <header 
        className={`navbar-static ${!isAboutPage && isScrolled ? 'hidden' : ''} ${isScrolledSlightly ? 'frosted' : ''}`}
        aria-label="Main Navigation"
      >
        <nav className="navbar-container">
          {/* Logo Area */}
          <div className="navbar-logo">
            <Link 
            to="/" 
            className="navbar-logo-link"
            >
              {/* Only show image logo on desktop */}
              <img 
              src="/logo_black.png" 
              alt="AX Group Logo" 
              className="navbar-logo-img-static"
              />
            <span className="navbar-logo-text-desktop">
                The AX Formula®
            </span>
            <span className="navbar-logo-text-mobile">
                The AX Formula®
            </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="nav-links-desktop">
            {DESKTOP_NAV_LINKS.map((link) => renderNavLink(link, 'nav-link-item'))}
            <button onClick={onApplyClick} className="nav-cta-btn">
              Apply Now
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
            {MOBILE_NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={`#${link.anchorId}`}
                onClick={(e) => handleMobileNavClick(e, link.anchorId || '')}
                className="mobile-nav-link"
              >
                {link.label}
              </a>
            ))}

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
