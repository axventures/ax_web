import React from 'react';
import { motion } from 'framer-motion';

export const SummitHero: React.FC = () => {
  return (
    <section className="summit-hero summit-geo-bg">
      <div className="summit-container">
        
        <div className="summit-hero-content">
          <motion.h1 
            className="summit-hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ color: 'var(--summit-blue)' }}
          >
            Building Companies Starts With <br/>
            <span className="summit-highlight" style={{ color: 'var(--summit-accent)', textShadow: 'none' }}>Building Connections.</span>
          </motion.h1>
          
          <motion.div 
            className="summit-hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="summit-stat-item">
              <span className="summit-stat-num">One</span>
              <span className="summit-stat-label">Room.</span>
            </div>
            <div className="summit-stat-item">
              <span className="summit-stat-num">200</span>
              <span className="summit-stat-label">Builders.</span>
            </div>
            <div className="summit-stat-item">
              <span className="summit-stat-num">Countless</span>
              <span className="summit-stat-label">Opportunities.</span>
            </div>
          </motion.div>
          
          <motion.p 
            className="summit-hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ color: 'var(--summit-grey)' }}
          >
            Vision Ventures Founder Summit 2026 is an invite-only gathering of 200 exceptional founders, operators, and ecosystem enablers. No speeches. Just builders building.
          </motion.p>
          
          <motion.div 
            className="summit-hero-meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="summit-badge">📍 Kozhikode, Kerala</div>
            <div className="summit-badge">🎟 Founder Pass – ₹1,499</div>
            <div className="summit-badge">👥 Limited to 200 Founders</div>
          </motion.div>
          
          <motion.div 
            className="summit-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="summit-btn-primary">Reserve Your Founder Pass</button>
            <button className="summit-btn-secondary">Become a Brand Partner</button>
          </motion.div>
          
          <motion.div 
            className="summit-hero-counter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="summit-progress-bar">
              <div className="summit-progress-fill" style={{ width: '68.5%' }}></div>
            </div>
            <p>137 / 200 Founder Passes Remaining</p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
