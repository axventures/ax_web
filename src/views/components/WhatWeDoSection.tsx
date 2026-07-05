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
  "Vision to Ventures",
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
          <h2 className="wwd-title">Core Capabilities</h2>
        </motion.div>
        
        <div className="wwd-pills-container">
           {items.map((item, i) => (
             <motion.div 
               key={i} 
               className="wwd-pill"
               initial={{ opacity: 0, scale: 0.95, y: 10 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: i * 0.04, duration: 0.4 }}
             >
               <span className="wwd-pill-text">{item}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
