import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const rotatingWords = ['Founder', 'Team', 'System', 'Company'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-section-landscape"
      style={{
        padding: '160px 24px 80px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '1400px', // Landscape: take more horizontal space
        margin: '0 auto',
      }}
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
        <span>AX Ventures Accelerator — Cohort 2026</span>
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
          {rotatingWords[currentWordIndex]}.
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

      {/* Single CTA (Vision to Venture) */}
      <div
        className="animate-slide-up"
        style={{
          marginTop: '44px',
        }}
      >
        <a 
          href="#summit" 
          className="btn btn-primary explore-summit-btn" 
          style={{ 
            padding: '16px 36px', 
            fontSize: '1.05rem',
            borderRadius: '40px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          <span>Explore Vision to Venture</span>
          <ArrowRight size={18} className="explore-arrow" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
