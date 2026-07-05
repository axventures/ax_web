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
    image: "ArkytUP-Basil Mishaal Mathew.png",
    type: "dark",
    textFirst: true
  },
  {
    name: "Muhammed Hafis",
    company: "Kori",
    industry: "FOOD & BEVERAGE",
    desc: "Innovating in the food & beverage industry. Currently in the Idea Stage.",
    image: "Kori -Muhammed Hafis.png",
    type: "dark",
    textFirst: true
  },
  {
    name: "Aravind Sekhar",
    company: "Servewise Solutions",
    industry: "SOFTWARE & SERVICES",
    desc: "Developing a premier service marketplace. Currently at the MVP Stage.",
    image: "Servewise Solutions Pvt. Ltd. -Aravind Sekhar.png",
    type: "light",
    textFirst: false
  },
  {
    name: "Anees",
    company: "Tomome",
    industry: "PREGNANCY & PARENTING",
    desc: "Supporting the journey of parenting. Currently operating at the Revenue Stage.",
    image: "Tomome -Anees.png",
    type: "light",
    textFirst: false
  }
];

export const FoundersFRPSection: React.FC<FoundersFRPProps> = ({ onApplyClick }) => {
  return (
    <section id="frp-founders" className="frp-checker-section">
      <ContourLinesTopRight opacity={0.05} />
      
      <div className="frp-checker-header">
        <h2 className="frp-heading">Founders like you, <br/> building through FRP.</h2>
      </div>

      <div className="frp-checker-grid">
        {foundersData.map((founder, idx) => {
          const textBlock = (
            <div className={`checker-block checker-text ${founder.type === 'dark' ? 'bg-dark' : 'bg-cream'}`} key={`text-${idx}`}>
              <span className="checker-industry">{founder.industry}</span>
              <h3 className="checker-name">{founder.name}</h3>
              <p className="checker-desc"><strong>{founder.company}</strong> — {founder.desc}</p>
            </div>
          );
          const imageBlock = (
            <div className="checker-block checker-img-block" key={`img-${idx}`}>
              <img src={`/${founder.image}`} alt={founder.name} className="checker-image" />
            </div>
          );

          return (
            <div className="checker-founder-group" key={idx}>
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
        })}
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
