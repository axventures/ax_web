import React from 'react';
import { motion } from 'framer-motion';
import { ContourLinesTopRight, SweepingDashedLineAlt } from './DecorativeLines';

export const OurApproachSection: React.FC = () => {
  const pillars = [
    { id: '01', title: 'Execution' },
    { id: '02', title: 'Accountability' },
    { id: '03', title: 'Systems' },
    { id: '04', title: 'Long-term value creation' },
  ];

  return (
    <section className="approach-section-dark">
      {/* Decorative lines matching design rule */}
      <ContourLinesTopRight opacity={0.15} />
      <SweepingDashedLineAlt />

      <div className="approach-container">
        {/* Left Side: Sticky Text Area */}
        <div className="approach-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="approach-eyebrow">OUR APPROACH</span>
            <h2 className="approach-heading">
              We don't<br />
              simply<br />
              advise<br />
              founders.<br />
              We <span className="blue-text">operate</span><br />
              with them.
            </h2>
            <p className="approach-desc">
              We become operational partners in helping them build stronger companies — focused on execution, accountability, systems, and long-term value creation.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Stacked Cards */}
        <div className="approach-right">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`approach-stacked-card ${index === 0 ? 'active' : ''}`}
            >
              <span className={`approach-card-number ${index === 0 ? 'active-num' : 'inactive-num'}`}>
                {pillar.id}
              </span>
              <h3 className="approach-card-title">{pillar.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
