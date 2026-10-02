import React from 'react';

const PARTNERS = [
  { name: 'Hustlify', font: "'Outfit', sans-serif", weight: '800', letterSpacing: '-0.03em' },
  { name: 'GrowCaptain', font: "'Georgia', serif", weight: 'bold', letterSpacing: '0.1em' },
  { name: 'TheTravelShopee', font: "'Outfit', sans-serif", weight: '600', letterSpacing: '0.05em' },
  { name: 'CALICUT ANGELS', font: "'Questrial', sans-serif", weight: '600', letterSpacing: '-0.01em' },
  { name: 'MyResto', font: "'Outfit', sans-serif", weight: 'bold', letterSpacing: '0.05em' },
  { name: 'BYCE', font: "'Zen Dots', cursive, sans-serif", weight: '400', letterSpacing: '0.04em' },
  { name: 'GoRentIt.', font: "'Montserrat', sans-serif", weight: '800', letterSpacing: '-0.03em' },
  { name: 'BAAB ADVISORY', font: "'Lexend Giga', sans-serif", weight: '500', letterSpacing: '0.106em' },
  { name: 'tequorra', font: "'inter', sans-serif", weight: '400', letterSpacing: '-0.02em' },
  { name: 'the growth company', font: "'Montserrat', sans-serif", weight: '700', letterSpacing: '-0.01em' },

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
