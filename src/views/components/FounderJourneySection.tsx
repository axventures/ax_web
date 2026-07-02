import React from 'react';
import { motion } from 'framer-motion';
import { RoadmapVisualizer } from './RoadmapVisualizer';

interface JourneyStep {
  phase: string;
  title: string;
  description: string;
}

const steps: JourneyStep[] = [
  {
    phase: 'PHASE 01',
    title: 'Apply',
    description: 'Submit your startup. We look for ambitious founders ready to build the future.',
  },
  {
    phase: 'PHASE 02',
    title: 'Founder Assessment',
    description: 'A deep dive into your capabilities, team dynamics, and market opportunity.',
  },
  {
    phase: 'PHASE 03',
    title: 'Founder Readiness',
    description: 'Equipping you with the mindset, resources, and alignment before execution.',
  },
  {
    phase: 'PHASE 04',
    title: 'Execution',
    description: 'Hands-on building, product-market fit validation, and initial traction.',
  },
  {
    phase: 'PHASE 05',
    title: 'Investment Readiness',
    description: 'Structuring your business, financials, and pitch deck for institutional funding.',
  },
  {
    phase: 'PHASE 06',
    title: 'Growth',
    description: 'Scaling your product, acquiring customers, and optimizing operations.',
  },
  {
    phase: 'PHASE 07',
    title: 'AX Ecosystem',
    description: "Lifetime access to AX's network of founders, mentors, and resources.",
  },
];

interface FounderJourneySectionProps {
  onApplyClick: () => void;
}


export const FounderJourneySection: React.FC<FounderJourneySectionProps> = ({ onApplyClick }) => {
  return (
    <section id="founder-journey" style={{ position: 'relative', padding: '160px 24px', overflow: 'hidden' }}>
      
      {/* Background Image Container */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/journey_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Parallax effect
          zIndex: 0
        }}
      />
      
      {/* Premium Dark Gradient Overlay (Hides laggy filters and provides rich contrast) */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #050505 0%, rgba(10,15,25,0.85) 50%, #050505 100%)',
          zIndex: 1
        }}
      />
      
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ 
              color: '#94a3b8', // Sophisticated silver
              fontWeight: 600, 
              letterSpacing: '0.15em', 
              fontSize: '0.85rem', 
              textTransform: 'uppercase' 
            }}
          >
            Our Methodology
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
              color: '#ffffff', 
              fontWeight: 800, 
              marginTop: '20px', 
              letterSpacing: '-0.03em',
              lineHeight: 1.1
            }}
          >
            The Founder Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            style={{ 
              color: '#94a3b8', 
              fontSize: '1.25rem', 
              maxWidth: '640px', 
              margin: '24px auto 0',
              lineHeight: 1.6
            }}
          >
            A step-by-step blueprint to take you from a raw concept to a venture-backed powerhouse.
          </motion.p>
        </div>

        {/* Animated Framer Motion SVG Roadmap */}
        <RoadmapVisualizer roadmap={{ steps }} />
          
        {/* Final CTA Button at the end of the line */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', position: 'relative', zIndex: 2 }}>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onApplyClick}
            style={{
              padding: '18px 48px',
              fontSize: '1.15rem',
              fontWeight: 600,
              color: '#000000',
              backgroundColor: '#ffffff',
              border: 'none',
              borderRadius: '100px',
              cursor: 'pointer',
              boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.2), 0 8px 10px -6px rgba(255, 255, 255, 0.1)',
              transition: 'box-shadow 0.2s ease, background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f1f5f9';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 20px 30px -10px rgba(255, 255, 255, 0.3), 0 10px 15px -5px rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 25px -5px rgba(255, 255, 255, 0.2), 0 8px 10px -6px rgba(255, 255, 255, 0.1)';
            }}
          >
            Start Your Journey
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FounderJourneySection;
