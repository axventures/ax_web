import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
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
      {/* Upper Tech Badge */}
      <div
        className="animate-slide-up"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          background: 'rgba(24, 1, 173, 0.06)',
          border: '1px solid rgba(24, 1, 173, 0.15)',
          borderRadius: '30px',
          color: '#1801AD',
          fontSize: '0.82rem',
          fontWeight: 600,
          marginBottom: '32px',
        }}
      >
        <Sparkles size={14} />
        <span>Vision to Ventures — Cohort 2026</span>
      </div>

      {/* Main Stacked Headline - Large Centered Hook */}
      <h1
        className="animate-slide-up hero-headline-hook"
        style={{
          fontWeight: 950,
          letterSpacing: '-0.05em',
          color: '#0f172a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
        }}
      >
        <span className="hero-strong-title">Strong</span>
        <span
          key={currentWordIndex}
          className="rotating-word hero-rotating-title"
          style={{
            background: 'linear-gradient(135deg, #1801AD, #4f46e5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          {ROTATING_WORDS[currentWordIndex]}.
        </span>
      </h1>

      {/* Subheading */}
      <p
        className="animate-slide-up"
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
        className="animate-slide-up"
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
