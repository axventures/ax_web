import React from 'react';
import { ContourLinesTopRight } from './DecorativeLines';

interface FoundersFRPProps {
  onApplyClick?: () => void;
}

const foundersData = [
  {
    name: "Basil Mishaal Mathew",
    company: "ArkytUP",
    industry: "EXTENDED REALITY",
    desc: "Building the future of extended reality. Currently scaling at the Revenue Stage.",
    image: "frp/ArkytUP-Basil Mishaal Mathew.png",
    type: "dark",
    textFirst: true
  },
  {
    name: "Muhammed Hafis",
    company: "Kori",
    industry: "FOOD & BEVERAGE",
    desc: "Innovating in the food & beverage industry. Currently in the Idea Stage.",
    image: "frp/Kori -Muhammed Hafis.png",
    type: "dark",
    textFirst: false
  },
  {
    name: "Aravind Sekhar",
    company: "Servewise Solutions",
    industry: "SOFTWARE & SERVICES",
    desc: "Developing a premier service marketplace. Currently at the MVP Stage.",
    image: "frp/Servewise Solutions Pvt. Ltd. -Aravind Sekhar.png",
    type: "light",
    textFirst: true
  },
  {
    name: "Anees",
    company: "Tomome",
    industry: "PREGNANCY & PARENTING",
    desc: "Supporting the journey of parenting. Currently operating at the Revenue Stage.",
    image: "frp/Tomome -Anees.png",
    type: "light",
    textFirst: false
  },
  {
    name: "Mohammed Nasil",
    company: "Creoture",
    industry: "DESIGN & TECHNOLOGY",
    desc: "Empowering businesses with end-to-end design, technology, automation, and AI solutions. Currently at the Validation Stage.",
    image: "frp/Mohammed Nasil Creoture - Empowering businesses with end-to-end design, technology, automation, and Al solutions. Currently at the Validation Stage..png",
    type: "dark",
    textFirst: true
  },
  {
    name: "Sangeeth Karunakaran",
    company: "XMO",
    industry: "COMMUNICATION TECHNOLOGY",
    desc: "Building a next-generation messaging platform for secure, user-first digital communication. Currently at the MVP Stage.",
    image: "frp/Sangeeth Karunakaran XMO - Building a next-generation messaging platform for secure, user-first digital communication. Currently at the MVP Stage..png",
    type: "light",
    textFirst: false
  }
];

export const FoundersFRPSection: React.FC<FoundersFRPProps> = ({ onApplyClick }) => {
  // Split founders into two rows (3 per row)
  const row1 = foundersData.slice(0, 3);
  const row2 = foundersData.slice(3, 6);

  // Duplicate arrays to create a seamless infinite loop
  const infiniteRow1 = [...row1, ...row1, ...row1, ...row1];
  const infiniteRow2 = [...row2, ...row2, ...row2, ...row2];

  const FounderBlock = ({ founder, idx }: { founder: any, idx: number }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
      <div 
        className={`checker-founder-group ${isExpanded ? 'is-expanded' : ''}`} 
        key={idx}
        onClick={() => {
          if (window.innerWidth <= 768) {
            setIsExpanded(!isExpanded);
          }
        }}
      >
        <div className={`checker-block checker-text ${founder.type === 'dark' ? 'bg-dark' : 'bg-cream'}`}>
          <span className="checker-industry">{founder.industry}</span>
          <h3 className="checker-name">{founder.name}</h3>
          <p className="checker-desc">
            <strong className="checker-company">{founder.company}</strong>
            <span className="checker-desc-text"> — {founder.desc}</span>
          </p>
        </div>
        <div className="checker-block checker-img-block">
          <img src={`/${founder.image}`} alt={founder.name} className="checker-image" />
        </div>
      </div>
    );
  };

  return (
    <section id="frp-founders" className="frp-checker-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--brand-warm-cream, #FAF9F6)', padding: '120px 0' }}>
      <ContourLinesTopRight opacity={0.05} />
      
      <style>
        {`
          .marquee-container {
            display: flex;
            flex-direction: column;
            gap: 20px; /* Space between rows */
            width: 100vw;
            overflow: hidden;
            margin-top: 40px;
            position: relative;
          }
          .edge-blur {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 15vw;
            z-index: 2;
            pointer-events: none;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }
          .edge-blur-left {
            left: 0;
            background: linear-gradient(to right, rgba(235, 245, 255, 1) 20%, rgba(235, 245, 255, 0) 100%);
            -webkit-mask-image: linear-gradient(to right, black, transparent);
            mask-image: linear-gradient(to right, black, transparent);
          }
          .edge-blur-right {
            right: 0;
            background: linear-gradient(to left, rgba(235, 245, 255, 1) 20%, rgba(235, 245, 255, 0) 100%);
            -webkit-mask-image: linear-gradient(to left, black, transparent);
            mask-image: linear-gradient(to left, black, transparent);
          }
          .marquee-track {
            display: flex;
            width: max-content;
            gap: 12px; /* Separation between founder cards */
          }
          .marquee-left {
            animation: scrollLeft 90s linear infinite;
          }
          .marquee-right {
            animation: scrollRight 90s linear infinite;
          }
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .checker-founder-group {
            /* One founder card (image + text) with no gap inside, but a double line border on the right */
            border-right: 4px double rgba(0, 0, 0, 0.15);
            padding-right: 12px;
            display: flex;
            flex-direction: row;
            width: 50vw;
            height: 374px;
            flex: 0 0 50vw;
          }
          .checker-block {
            width: 25vw;
            height: 374px;
            flex: 0 0 25vw;
          }
          .checker-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .checker-text {
            /* Add any specific flex layouts for text here if needed */
          }
          @media (max-width: 768px) {
            /* Single row on mobile */
            .marquee-right {
              display: none !important;
            }
            .marquee-container {
              padding: 0 16px;
            }
            .marquee-track {
              gap: 16px;
            }
            
            /* Unified Blue Card Container */
            .checker-founder-group {
              width: 85vw !important;
              flex: 0 0 85vw !important;
              height: auto !important;
              flex-direction: column !important;
              border-right: none;
              border-bottom: none;
              padding: 0;
              margin: 0;
              background-color: var(--brand-blue, #1801AD) !important;
              border-radius: 24px;
              overflow: hidden;
              box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            }
            
            /* Image on top */
            .checker-img-block {
              order: 1;
              width: 100% !important;
              flex: 0 0 auto !important;
              height: 340px !important;
              background: transparent;
            }
            .checker-image {
              border-radius: 0 !important;
              object-fit: cover;
              object-position: top center;
            }
            
            /* Text Block on bottom inside the blue card */
            .checker-text {
              order: 2;
              width: 100% !important;
              flex: 0 0 auto !important;
              height: auto !important;
              min-height: auto !important;
              padding: 24px 24px 32px 24px !important;
              cursor: pointer;
              background: transparent !important;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
            }
            
            /* Text styling inside the blue card (white text) */
            .checker-industry {
              display: none !important;
            }
            
            /* Company Name (Large, like the reference image title) */
            .checker-desc {
              order: 1;
              margin-bottom: 4px;
              color: #ffffff !important;
            }
            .checker-desc strong {
              font-size: 24px;
              font-weight: 800;
              letter-spacing: 0.02em;
            }
            
            /* Founder Name (Smaller, below company) */
            .checker-name {
              order: 2;
              margin-bottom: 0;
              font-size: 16px;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.8) !important;
            }
            
            /* Expanding details text (middle aligned as requested) */
            .checker-desc-text {
              display: block;
              margin-top: 16px;
              font-weight: normal;
              color: rgba(255, 255, 255, 0.9);
              font-size: 15px;
              line-height: 1.5;
              text-align: center;
              align-self: center; /* Center horizontally in the flex column */
              width: 100%;
            }
            
            /* Hide extra details by default on mobile */
            .checker-founder-group:not(.is-expanded) .checker-desc-text {
              display: none;
            }
          }
        `}
      </style>

      <div className="frp-checker-header">
        <h2 className="frp-heading">Founders like you, <br/> building through <em style={{ color: 'var(--brand-blue)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>FRP.</em></h2>
      </div>

      <div className="marquee-container">
        {/* Blurry Edges */}
        <div className="edge-blur edge-blur-left"></div>
        <div className="edge-blur edge-blur-right"></div>

        {/* Row 1: Scrolls Left */}
        <div className="marquee-track marquee-left">
          {infiniteRow1.map((founder, idx) => (
            <FounderBlock key={`r1-${idx}`} founder={founder} idx={idx} />
          ))}
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="marquee-track marquee-right">
          {infiniteRow2.map((founder, idx) => (
            <FounderBlock key={`r2-${idx}`} founder={founder} idx={idx} />
          ))}
        </div>
      </div>

      <div className="frp-footer" style={{ marginTop: '60px', paddingBottom: '80px' }}>
        <h3 className="frp-footer-text">You could be next.</h3>
        <button className="readiness-apply-btn" onClick={onApplyClick}>
          APPLY NOW
          <span className="readiness-btn-arrow">→</span>
          <div className="readiness-btn-circle">↓</div>
        </button>
      </div>
    </section>
  );
};
