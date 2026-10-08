import React from 'react';

interface Partner {
  name: string;
  font: string;
  weight: string;
  letterSpacing: string;
  url?: string;
}

const PARTNERS: Partner[] = [
  { name: 'Hustlify', font: "'Outfit', sans-serif", weight: '800', letterSpacing: '-0.03em', url: 'https://hustlify.in' },
  { name: 'GrowCaptain', font: "'Georgia', serif", weight: 'bold', letterSpacing: '0.1em', url: 'https://instagram.com/growcaptain.in' },
  { name: 'TheTravelShopee', font: "'Outfit', sans-serif", weight: '600', letterSpacing: '0.05em', url: 'https://www.thetravelshopee.com/' },
  { name: 'CALICUT ANGELS', font: "'Questrial', sans-serif", weight: '600', letterSpacing: '-0.01em', url: 'https://calicutangels.com' },
  { name: 'MyResto', font: "'Outfit', sans-serif", weight: 'bold', letterSpacing: '0.05em', url: 'https://myresto.co.in' },
  { name: 'BYCE', font: "'Zen Dots', cursive, sans-serif", weight: '400', letterSpacing: '0.04em' },
  { name: 'GoRentIt.', font: "'Montserrat', sans-serif", weight: '800', letterSpacing: '-0.03em', url: 'https://instagram.com/gorentit.official' },
  { name: 'BAAB ADVISORY', font: "'Lexend Giga', sans-serif", weight: '500', letterSpacing: '0.106em', url: 'https://baabadvisory.com' },
  { name: 'tequorra', font: "'inter', sans-serif", weight: '400', letterSpacing: '-0.02em', url: 'https://tequorra.in' },
  { name: 'the growth company', font: "'Montserrat', sans-serif", weight: '700', letterSpacing: '-0.01em', url: 'https://thegrowthco.in' },
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
            {TICKER_ITEMS.map((partner, index) => {
              const itemStyle: React.CSSProperties = {
                fontFamily: partner.font,
                fontWeight: partner.weight as any,
                letterSpacing: partner.letterSpacing,
                textDecoration: 'none',
                cursor: partner.url ? 'pointer' : 'default',
              };

              if (partner.url) {
                return (
                  <a
                    key={index}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-marquee-item"
                    style={itemStyle}
                  >
                    {partner.name}
                  </a>
                );
              }

              return (
                <span
                  key={index}
                  className="brand-marquee-item"
                  style={itemStyle}
                >
                  {partner.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTickerSection;
