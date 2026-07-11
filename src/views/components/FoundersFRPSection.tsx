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

  const renderFounderBlock = (founder: any, idx: number) => {
    const textBlock = (
      <div className={`checker-block checker-text ${founder.type === 'dark' ? 'bg-dark' : 'bg-cream'}`} key={`text-${idx}`} style={{ width: '25vw', height: '374px', flex: '0 0 25vw' }}>
        <span className="checker-industry">{founder.industry}</span>
        <h3 className="checker-name">{founder.name}</h3>
        <p className="checker-desc"><strong>{founder.company}</strong> — {founder.desc}</p>
      </div>
    );
    const imageBlock = (
      <div className="checker-block checker-img-block" key={`img-${idx}`} style={{ width: '25vw', height: '374px', flex: '0 0 25vw' }}>
        <img src={`/${founder.image}`} alt={founder.name} className="checker-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );

    return (
      <div className="checker-founder-group" key={idx} style={{ display: 'flex', flexDirection: 'row', width: '50vw', height: '374px', flex: '0 0 50vw' }}>
        {founder.textFirst ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
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
            background: linear-gradient(to right, var(--brand-warm-cream, #FAF9F6) 20%, rgba(250, 249, 246, 0) 100%);
            -webkit-mask-image: linear-gradient(to right, black, transparent);
            mask-image: linear-gradient(to right, black, transparent);
          }
          .edge-blur-right {
            right: 0;
            background: linear-gradient(to left, var(--brand-warm-cream, #FAF9F6) 20%, rgba(250, 249, 246, 0) 100%);
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
          }
          @media (max-width: 768px) {
            .checker-founder-group {
              width: 100vw !important;
              flex: 0 0 100vw !important;
              flex-direction: column !important;
            }
            .frp-checker-section .checker-block {
              width: 100vw !important;
              flex: 0 0 100vw !important;
              min-height: 50vw;
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
          {infiniteRow1.map((founder, idx) => renderFounderBlock(founder, idx))}
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="marquee-track marquee-right">
          {infiniteRow2.map((founder, idx) => renderFounderBlock(founder, idx))}
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
