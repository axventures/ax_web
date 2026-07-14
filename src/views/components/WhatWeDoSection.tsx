import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  TrendingUp, 
  CheckCircle, 
  Lightbulb, 
  Users, 
  BookOpen, 
  Settings, 
  Briefcase, 
  HeartHandshake, 
  Eye, 
  Handshake 
} from 'lucide-react';

const items = [
  "Founder Readiness",
  "Founder Development",
  "Startup Validation",
  "Business Strategy",
  "Team Building",
  "Mentorship",
  "Execution Systems",
  "Investor Readiness",
  "Founder Community",
  "Vision to Ventures",
  "Strategic Partnerships"
];

const itemIcons = [Rocket, TrendingUp, CheckCircle, Lightbulb, Users, BookOpen, Settings, Briefcase, HeartHandshake, Eye, Handshake];
const itemColors = [
  "linear-gradient(135deg, #3F2FD8, #2A16C7)", // Primary to Accent
  "linear-gradient(135deg, #5B4BE3, #3F2FD8)", // Mid Purple to Primary
  "linear-gradient(135deg, #1E1A49, #17153A)", // Dark Section
  "linear-gradient(135deg, #7A71EC, #5B4BE3)", // Light Purple to Mid
  "linear-gradient(135deg, #2A16C7, #1E1A49)", // Accent to Dark
  "linear-gradient(135deg, #3F2FD8, #17153A)", // Primary to Darkest
  "linear-gradient(135deg, #5B4BE3, #2A16C7)", // Mid to Accent
  "linear-gradient(135deg, #1E1A49, #3F2FD8)", // Dark to Primary
  "linear-gradient(135deg, #7A71EC, #2A16C7)", // Light to Accent
  "linear-gradient(135deg, #17153A, #5B4BE3)", // Darkest to Mid
  "linear-gradient(135deg, #2A16C7, #7A71EC)"  // Accent to Light
];

const Pill: React.FC<{ item: string; index: number }> = ({ item, index }) => {
  const [isShaking, setIsShaking] = useState(false);
  const lastX = useRef<number | null>(null);
  const lastDirection = useRef<number>(0);
  const reversalCount = useRef<number>(0);
  const lastReversalTime = useRef<number>(0);
  const shakeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isShaking) return;
    
    const x = e.clientX;
    if (lastX.current !== null) {
      const dx = x - lastX.current;
      if (Math.abs(dx) > 3) {
        const dir = Math.sign(dx);
        if (lastDirection.current !== 0 && dir !== lastDirection.current) {
          const now = Date.now();
          if (now - lastReversalTime.current < 250) {
            reversalCount.current += 1;
          } else {
            reversalCount.current = 1;
          }
          lastReversalTime.current = now;
          
          if (reversalCount.current >= 3) {
            setIsShaking(true);
            reversalCount.current = 0;
            if (shakeTimeout.current) clearTimeout(shakeTimeout.current);
            shakeTimeout.current = setTimeout(() => setIsShaking(false), 500);
          }
        }
        lastDirection.current = dir;
      }
    }
    lastX.current = x;
  };

  const handleMouseLeave = () => {
    lastX.current = null;
    lastDirection.current = 0;
    reversalCount.current = 0;
  };

  return (
    <motion.div 
      className={`wwd-pill ${isShaking ? 'shake-fast' : ''}`}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="wwd-pill-text">{item}</span>
    </motion.div>
  );
};

export const WhatWeDoSection: React.FC = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const visibleMobileItems = showAllMobile ? items : items.slice(0, 4);

  return (
    <section className="wwd-section" id="what-we-do" style={{ backgroundColor: 'var(--brand-warm-cream, #FAF9F6)' }}>
      <style>
        {`
          .wwd-desktop-wrapper {
            display: block;
          }
          .wwd-mobile-wrapper {
            display: none;
          }
          @media (max-width: 768px) {
            .wwd-section {
              background: linear-gradient(180deg, #3F2FD8 0%, #6D63E5 45%, #F4F2FC 100%) !important;
              position: relative;
              z-index: 1;
            }
            .wwd-section::before {
              content: "";
              position: absolute;
              inset: 0;
              background-image: 
                radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                radial-gradient(circle at 50% 30%, rgba(255,255,255,0.18) 0%, transparent 70%),
                radial-gradient(circle at center, transparent 40%, rgba(0,0,40,0.15) 130%);
              background-size: 28px 28px, 100% 100%, 100% 100%;
              background-position: center, center, center;
              background-repeat: repeat, no-repeat, no-repeat;
              opacity: 1 !important;
              z-index: -2 !important;
              pointer-events: none;
            }
            .wwd-section::after {
              content: "";
              position: absolute;
              inset: 0;
              background-image: url(/ax_logo.jpg);
              background-size: auto 85%;
              background-position: center 50%;
              background-repeat: no-repeat;
              filter: invert(1);
              mix-blend-mode: screen;
              opacity: 0.14;
              z-index: -1;
              pointer-events: none;
            }
            .wwd-desktop-wrapper {
              display: none !important;
            }
            .wwd-mobile-wrapper {
              display: block;
              padding-top: 0px; /* Reduced since section has padding */
              padding-bottom: 20px;
              position: relative;
              z-index: 1;
            }
            .wwd-mobile-curved-box {
              background-color: #ffffff;
              border-radius: 0px;
              padding: 32px 16px 48px 16px;
              margin: 0 16px;
              box-shadow: 0 15px 40px rgba(0,0,0,0.08);
            }
            .wwd-mobile-view {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
              width: 100%;
            }
            .wwd-mobile-card {
              border-radius: 20px;
              padding: 24px 16px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              color: white;
              box-shadow: 0 10px 20px rgba(0,0,0,0.1);
              aspect-ratio: 1;
            }
            .wwd-mobile-icon-wrapper {
              background: rgba(255, 255, 255, 0.2);
              border-radius: 50%;
              width: 48px;
              height: 48px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 12px;
              flex-shrink: 0;
            }
            .wwd-mobile-card-text {
              font-family: var(--font-sans, 'Outfit', sans-serif);
              font-size: 15px;
              font-weight: 600;
              line-height: 1.3;
            }
            .wwd-view-all-btn {
              display: block;
              margin: 32px auto -72px auto; /* Pulls it down to overlap the bottom edge */
              background: var(--brand-blue, #1801AD);
              color: white;
              border: none;
              border-radius: 30px;
              padding: 18px 48px;
              font-family: var(--font-sans, 'Outfit', sans-serif);
              font-size: 15px;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 1px;
              box-shadow: 0 8px 20px rgba(24, 1, 173, 0.4);
              cursor: pointer;
              position: relative;
              z-index: 10;
              transition: transform 0.2s ease, box-shadow 0.2s ease;
            }
            .wwd-view-all-btn:active {
              transform: scale(0.95);
            }
          }
        `}
      </style>

      {/* Desktop Wrapper (Untouched Original) */}
      <div className="wwd-container wwd-desktop-wrapper">
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 2 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="wwd-title"><span style={{ color: 'var(--brand-blue)' }}>Core</span> Capabilities</h2>
        </motion.div>
        
        <div className="wwd-pills-container">
           {items.map((item, i) => (
             <Pill key={`desktop-${i}`} item={item} index={i} />
           ))}
        </div>
      </div>

      {/* Mobile Wrapper (Curved Box & 4 Cards & View All) */}
      <div className="wwd-mobile-wrapper">
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '24px', position: 'relative', zIndex: 2 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="wwd-title" style={{ 
            fontSize: '34px', 
            fontFamily: 'var(--font-sans, "Outfit", sans-serif)', 
            fontWeight: 900,
            letterSpacing: '0px',
            textShadow: '0px 8px 20px rgba(0, 0, 0, 0.25)'
          }}>
            <span style={{ color: 'var(--brand-blue, #1801AD)' }}>Core</span> 
            <span style={{ color: '#ffffff' }}> Capabilities</span>
          </h2>
        </motion.div>

        <div className="wwd-mobile-curved-box">
          <div className="wwd-mobile-view">
            {visibleMobileItems.map((item, i) => {
              const Icon = itemIcons[i % itemIcons.length];
              const bgGradient = itemColors[i % itemColors.length];
              return (
                <motion.div
                  key={`mobile-${i}`}
                  className="wwd-mobile-card"
                  style={{ background: bgGradient }}
                  initial={{ opacity: 0, scale: 0.7, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ 
                    delay: (i % 2) * 0.1 + Math.floor(i / 2) * 0.1, 
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.4
                  }}
                >
                  <div className="wwd-mobile-icon-wrapper">
                    <Icon size={24} color="#ffffff" strokeWidth={2.5} />
                  </div>
                  <span className="wwd-mobile-card-text">{item}</span>
                </motion.div>
              )
            })}
          </div>

          <button 
            className="wwd-view-all-btn"
            onClick={() => setShowAllMobile(!showAllMobile)}
          >
            {showAllMobile ? 'VIEW LESS' : 'VIEW ALL'}
          </button>
        </div>
      </div>
    </section>
  );
};
