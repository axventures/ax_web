import React from 'react';

const PARTNERS = [
  { name: 'Hustlify', font: "'Outfit', sans-serif", weight: '800', letterSpacing: '-0.03em' },
  { name: 'GrowCaptain', font: "'Georgia', serif", weight: 'bold', letterSpacing: '0.1em' },
  { name: 'Tea & Cup', font: "'Outfit', sans-serif", weight: '300', letterSpacing: '0.05em' },
  { name: 'SStartups', font: "'Outfit', sans-serif", weight: '500', letterSpacing: '-0.01em' },
  { name: 'The Oglas', font: "'Georgia', serif", weight: '900', letterSpacing: '-0.05em' },
  { name: 'myResto', font: "'Courier New', monospace", weight: 'bold', letterSpacing: '0.05em' },
  { name: 'BENCHMARK', font: "'Times New Roman', serif", weight: 'normal', letterSpacing: '0.15em' },
  { name: 'Accel', font: "'Outfit', sans-serif", weight: '700', letterSpacing: '-0.02em' },
];

// Duplicate list to make infinite marquee effect seamless
const TICKER_ITEMS = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export const BrandTickerSection: React.FC = () => {
  return (
    <section className="brand-ticker-section" style={{ position: 'relative', zIndex: 10 }}>
      <div className="brand-ticker-container">
        <p className="brand-ticker-title">Brand Collaborators</p>
        
        <div className="brand-marquee-wrapper">
          {/* Left/Right fading gradient mask */}
          <div className="brand-marquee-fade left" />
          <div className="brand-marquee-fade right" />
          
          <div className="brand-marquee-track">
            {TICKER_ITEMS.map((partner, index) => (
              <div
                key={index}
                className="brand-marquee-item"
                style={{
                  fontFamily: partner.font,
                  fontWeight: partner.weight as any,
                  letterSpacing: partner.letterSpacing,
                }}
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTickerSection;
