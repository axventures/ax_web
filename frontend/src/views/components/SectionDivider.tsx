import React from 'react';
import { motion } from 'framer-motion';

export const SectionDivider: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0.5 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }} // Springy ease
        style={{
          width: '80%',
          maxWidth: '1000px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(24,1,173,0.3) 50%, transparent 100%)',
        }}
      />
    </div>
  );
};
