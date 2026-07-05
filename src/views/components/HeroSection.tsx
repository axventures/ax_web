import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ROTATING_WORDS = ['Founder', 'Team', 'System', 'Company'];

export const HeroSection: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-section-landscape"
    >


      {/* Main Stacked Headline - Large Centered Hook */}
      <h1 className="animate-slide-up hero-headline-hook">
        <span className="hero-strong-title">Strong</span>
        <span
          key={currentWordIndex}
          className="rotating-word hero-rotating-title hero-rotating-title-gradient"
        >
          {ROTATING_WORDS[currentWordIndex]}.
        </span>
      </h1>

      {/* Subheading */}
      <p
        className="animate-slide-up hero-subtitle"
        style={{
          fontSize: 'clamp(1.1rem, 2.8vw, 1.35rem)',
          color: 'hsl(var(--text-muted))',
          maxWidth: '720px', // wider for landscape feel
          marginTop: '32px',
          fontWeight: 500,
          lineHeight: 1.6,
        }}
      >
        Building companies by building exceptional founders.
      </p>

      {/* Single CTA */}
      <div
        className="animate-slide-up hero-cta-wrapper"
        style={{
          marginTop: '44px',
        }}
      >
        <Link
          to="/founder-summit"
          className="hero-summit-btn"
        >
          <span>Explore Vision to Ventures</span>
          <ArrowRight size={22} className="hero-summit-arrow" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
