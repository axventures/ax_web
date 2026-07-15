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
  },
  {
    name: "Muhammed Hafis",
    company: "Kori",
    industry: "FOOD & BEVERAGE",
    desc: "Innovating in the food & beverage industry. Currently in the Idea Stage.",
    image: "frp/Kori -Muhammed Hafis.png",
  },
  {
    name: "Aravind Sekhar",
    company: "Servewise Solutions",
    industry: "SOFTWARE & SERVICES",
    desc: "Developing a premier service marketplace. Currently at the MVP Stage.",
    image: "frp/Servewise Solutions Pvt. Ltd. -Aravind Sekhar.png",
  },
  {
    name: "Anees",
    company: "Tomome",
    industry: "PREGNANCY & PARENTING",
    desc: "Supporting the journey of parenting. Currently operating at the Revenue Stage.",
    image: "frp/Tomome -Anees.png",
  },
  {
    name: "Mohammed Nasil",
    company: "Creoture",
    industry: "DESIGN & TECHNOLOGY",
    desc: "Empowering businesses with end-to-end design, technology, automation, and AI solutions. Currently at the Validation Stage.",
    image: "frp/Mohammed Nasil Creoture - Empowering businesses with end-to-end design, technology, automation, and Al solutions. Currently at the Validation Stage..png",
  },
  {
    name: "Sangeeth Karunakaran",
    company: "XMO",
    industry: "COMMUNICATION TECHNOLOGY",
    desc: "Building a next-generation messaging platform for secure, user-first digital communication. Currently at the MVP Stage.",
    image: "frp/Sangeeth Karunakaran XMO - Building a next-generation messaging platform for secure, user-first digital communication. Currently at the MVP Stage..png",
  }
];

export const FoundersFRPSection: React.FC<FoundersFRPProps> = ({ onApplyClick }) => {
  return (
    <section id="frp-founders" className="frp-checker-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--brand-warm-cream, #FAF9F6)', padding: '120px 0' }}>
      <ContourLinesTopRight opacity={0.05} />
      
      <style>
        {`
          /* ── Marquee Container ── */
          .frp-marquee-wrapper {
            position: relative;
            width: 100%;
            overflow: hidden;
            margin-top: 60px;
          }
          .frp-marquee-blur-left,
          .frp-marquee-blur-right {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 12vw;
            z-index: 5;
            pointer-events: none;
          }
          .frp-marquee-blur-left {
            left: 0;
            background: linear-gradient(to right, var(--brand-warm-cream, #FAF9F6) 15%, transparent 100%);
          }
          .frp-marquee-blur-right {
            right: 0;
            background: linear-gradient(to left, var(--brand-warm-cream, #FAF9F6) 15%, transparent 100%);
          }
          .frp-marquee-track {
            display: flex;
            gap: 32px;
            width: max-content;
            animation: frpScroll 60s linear infinite;
          }
          .frp-marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes frpScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }

          /* ── Single Card ── */
          .frp-premium-card {
            position: relative;
            border-radius: 24px;
            overflow: hidden;
            background: linear-gradient(135deg, #0a0a2e 0%, #0d0d3a 30%, #1801AD 100%);
            aspect-ratio: 3/4;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            cursor: default;
            transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
            box-shadow: 0 12px 40px rgba(24, 1, 173, 0.15);
            /* Fix for WebKit border-radius clipping bug during child transform */
            -webkit-mask-image: -webkit-radial-gradient(white, black);
            isolation: isolate;
            transform: translateZ(0);
          }
          .frp-premium-card:hover {
            transform: translateZ(0) translateY(-8px) scale(1.02);
            box-shadow: 0 24px 60px rgba(24, 1, 173, 0.3);
          }

          /* ── Side Tag ("FRP") ── */
          .frp-side-tag {
            position: absolute;
            left: 16px;
            top: 24px;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            transform: rotate(180deg);
            font-family: var(--font-sans, 'Outfit', sans-serif);
            font-size: 72px;
            font-weight: 300;
            letter-spacing: 0.15em;
            color: rgba(255, 255, 255, 0.12);
            text-transform: uppercase;
            line-height: 1;
            z-index: 1;
            pointer-events: none;
            user-select: none;
          }

          /* ── Cutout Photo ── */
          .frp-card-photo {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 10%;
          }
          .frp-card-photo img {
            width: 85%;
            height: 85%;
            object-fit: contain;
            object-position: bottom center;
            filter: grayscale(20%) contrast(1.1);
            transform: scale(1);
            transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .frp-premium-card:hover .frp-card-photo img {
            transform: scale(1.15); /* More pronounced zoom in */
          }

          /* ── Bottom Gradient Overlay (ensures text readability) ── */
          .frp-card-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 55%;
            background: linear-gradient(to top, rgba(10, 10, 46, 0.95) 0%, rgba(10, 10, 46, 0.6) 50%, transparent 100%);
            z-index: 3;
            pointer-events: none;
          }

          /* ── Bottom Text Block ── */
          .frp-card-info {
            position: relative;
            z-index: 6; /* Above the hover overlay */
            padding: 0 28px 32px 28px;
          }
          .frp-card-name {
            font-family: var(--font-sans, 'Outfit', sans-serif);
            font-size: 22px;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 4px 0;
            letter-spacing: 0.01em;
            line-height: 1.25;
          }
          .frp-card-role {
            font-family: var(--font-sans, 'Outfit', sans-serif);
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.65);
            margin: 0 0 6px 0;
            line-height: 1.4;
          }
          /* ── Hover Detail Overlay ── */
          .frp-card-detail-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 46, 0.85); /* Dark shadow layer */
            z-index: 5;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 32px 32px 80px 32px; /* Extra bottom padding to avoid name/role overlap */
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.4s ease, visibility 0.4s ease;
            backdrop-filter: blur(4px);
          }
          .frp-premium-card:hover .frp-card-detail-overlay {
            opacity: 1;
            visibility: visible;
          }
          .frp-card-detail-overlay p {
            font-family: var(--font-sans, 'Outfit', sans-serif);
            font-size: 15px;
            font-weight: 400;
            color: #ffffff;
            margin: 0;
            line-height: 1.6;
            text-align: center;
            transform: translateY(20px);
            transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .frp-premium-card:hover .frp-card-detail-overlay p {
            transform: translateY(0);
          }

          /* ── Premium Card Sizing ── */
          .frp-premium-card {
            width: 320px;
            flex: 0 0 320px;
          }

          /* ── Responsive ── */
          @media (max-width: 768px) {
            .frp-premium-card {
              width: 260px;
              flex: 0 0 260px;
            }
            .frp-marquee-track {
              gap: 20px;
              animation-duration: 45s;
            }
            .frp-marquee-blur-left,
            .frp-marquee-blur-right {
              width: 8vw;
            }
            .frp-side-tag {
              font-size: 56px;
            }
            .frp-card-name {
              font-size: 18px;
            }
            .frp-card-role {
              font-size: 12px;
            }
            .frp-card-detail-overlay p {
              font-size: 13px;
            }
          }
        `}
      </style>

      <div className="frp-checker-header">
        <h2 className="frp-heading">Founders like <span style={{ color: 'var(--brand-blue)' }}>you</span>, <br/> building through <span style={{ color: 'var(--brand-blue)' }}>FRP.</span></h2>
      </div>

      <div className="frp-marquee-wrapper">
        <div className="frp-marquee-blur-left" />
        <div className="frp-marquee-blur-right" />
        <div className="frp-marquee-track">
          {[...foundersData, ...foundersData, ...foundersData].map((founder, idx) => (
            <div className="frp-premium-card" key={idx}>
              <span className="frp-side-tag">FRP</span>
              <div className="frp-card-photo">
                <img src={`/${founder.image}`} alt={founder.name} loading="lazy" />
              </div>
              <div className="frp-card-overlay" />
              <div className="frp-card-info">
                <h3 className="frp-card-name">{founder.name}</h3>
                <p className="frp-card-role">{founder.company} — {founder.industry}</p>
              </div>
              <div className="frp-card-detail-overlay">
                <p>{founder.desc}</p>
              </div>
            </div>
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

