import React from 'react';
import { motion } from 'framer-motion';
import { ContourLinesTopRight, DashedCurveLeft, ScatteredDots, SweepingDashedLine } from './DecorativeLines';

export const OurApproachSection: React.FC = () => {
  const cards = [
    {
      id: "01",
      title: "Advising Isn't Enough",
      text: "We don't just sit on the sidelines offering generic advice. We embed ourselves in your journey, bringing deep industry expertise and actionable strategies to overcome your most critical hurdles.",
      image: "/approach1.jpg"
    },
    {
      id: "02",
      title: "Operational Partners",
      text: "Think of us as an extension of your core team. We roll up our sleeves and work directly alongside you to optimize workflows, scale operations, and build a resilient organizational foundation.",
      image: "/approach2.jpg"
    },
    {
      id: "03",
      title: "Driven by Execution",
      text: "Ideas are abundant, but relentless execution is rare. We install robust systems and demand accountability, ensuring every strategic decision translates into measurable, long-term enterprise value.",
      image: "/approach3.jpg"
    }
  ];

  return (
    <section style={{ padding: '120px 24px', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Elements */}
      <ContourLinesTopRight opacity={0.25} />
      <DashedCurveLeft opacity={0.3} />
      <ScatteredDots opacity={0.2} />
      <SweepingDashedLine />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span style={{ 
            color: 'var(--brand-blue)', 
            fontWeight: 800, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase', 
            fontSize: '0.85rem' 
          }}>
            Our Approach
          </span>
          <h2 style={{ 
            color: 'var(--text-main)', 
            fontSize: '3rem', 
            fontWeight: 800, 
            marginTop: '16px', 
            letterSpacing: '-0.03em' 
          }}>
            Building Beyond Advice
          </h2>
        </motion.div>

        <div className="approach-light-grid">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="approach-light-card"
            >
              <div className="approach-card-image-wrapper">
                <img src={card.image} alt={card.title} className="approach-card-image" />
              </div>
              <div className="approach-card-content-light">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
