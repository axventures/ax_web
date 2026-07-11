import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

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
      if (Math.abs(dx) > 3) { // Threshold to ignore micro-jitters
        const dir = Math.sign(dx);
        if (lastDirection.current !== 0 && dir !== lastDirection.current) {
          // Direction reversed
          const now = Date.now();
          if (now - lastReversalTime.current < 250) {
            reversalCount.current += 1;
          } else {
            reversalCount.current = 1;
          }
          lastReversalTime.current = now;
          
          if (reversalCount.current >= 3) { // 3 quick reversals = user is shaking
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
  return (
    <section className="wwd-section" id="what-we-do">
      <div className="wwd-container">
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
             <Pill key={i} item={item} index={i} />
           ))}
        </div>
      </div>
    </section>
  );
};
