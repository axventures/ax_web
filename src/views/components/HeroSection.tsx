import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onApplyClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onApplyClick }) => {
  return (
    <section
      id="home"
      style={{
        padding: '80px 24px 40px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
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
          background: 'rgba(99, 102, 241, 0.08)',
          border: '1px solid rgba(99, 102, 241, 0.15)',
          borderRadius: '30px',
          color: 'hsl(var(--primary))',
          fontSize: '0.82rem',
          fontWeight: 600,
          marginBottom: '28px',
        }}
      >
        <Sparkles size={14} />
        <span>AX Ventures Accelerator — Cohort 2026</span>
      </div>

      {/* Main Stacked Headline */}
      <h1
        className="animate-slide-up"
        style={{
          fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)',
          fontWeight: 850,
          maxWidth: '960px',
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          color: 'hsl(var(--text-main))',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 16px' }}>
          <span>Strong Founder.</span>
          <span style={{ color: 'hsl(var(--text-muted))' }}>Strong Team.</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 16px' }}>
          <span style={{ color: 'hsl(var(--text-muted))' }}>Strong System.</span>
          <span
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Strong Company.
          </span>
        </div>
      </h1>

      {/* Subheading */}
      <p
        className="animate-slide-up"
        style={{
          fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
          color: 'hsl(var(--text-muted))',
          maxWidth: '600px',
          marginTop: '24px',
          fontWeight: 500,
          lineHeight: 1.5,
        }}
      >
        Building companies by building exceptional founders.
      </p>

      {/* CTAs */}
      <div
        className="animate-slide-up"
        style={{
          display: 'flex',
          gap: '16px',
          marginTop: '36px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <button onClick={onApplyClick} className="btn btn-primary" style={{ padding: '14px 28px' }}>
          <span>Apply to AX</span>
          <ArrowRight size={16} />
        </button>
        <a href="#summit" className="btn btn-secondary" style={{ padding: '14px 28px' }}>
          Explore Founder Summit
        </a>
      </div>
    </section>
  );
};
export default HeroSection;
