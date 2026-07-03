import React from 'react';
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
  "Founder Summit",
  "Strategic Partnerships"
];

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
          <span className="wwd-eyebrow">WHAT WE DO</span>
          <h2 className="wwd-title">Core Capabilities</h2>
        </motion.div>
        
        <div className="wwd-grid">
           {/* Faded lines background */}
           <div className="wwd-grid-lines">
             {items.map((_, i) => (
               <div key={`line-${i}`} className="wwd-grid-line-cell" />
             ))}
             <div className="wwd-grid-line-cell" /> {/* 12th cell */}
           </div>

           {/* Content cards */}
           {items.map((item, i) => (
             <motion.div 
               key={i} 
               className="wwd-card"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: i * 0.05, duration: 0.5 }}
             >
               <h3 className="wwd-card-text">{item}</h3>
             </motion.div>
           ))}
           {/* 12th empty card */}
           <div className="wwd-card empty-card" />
        </div>
      </div>
    </section>
  );
};
