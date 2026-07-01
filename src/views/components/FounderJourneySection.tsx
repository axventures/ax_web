import React from 'react';
import { motion } from 'framer-motion';

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

const cardVariantsLeft = {
  hidden: { opacity: 0, x: -30, y: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
  }
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 30, y: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
  }
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
  }
};

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

        {/* Roadmap Timeline Container */}
        <div style={{ position: 'relative', padding: '40px 0' }}>
          
          {/* Center Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 5%, rgba(255,255,255,0.15) 95%, transparent)',
            transform: 'translateX(-50%)'
          }} className="hide-on-mobile" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    position: 'relative'
                  }}
                  className="roadmap-row"
                >
                  
                  {/* Left Spacer or Card */}
                  <div style={{ width: '45%', display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start' }} className="roadmap-col">
                    {isLeft && (
                      <motion.div 
                        variants={cardVariantsLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="roadmap-card"
                      >
                        <span className="roadmap-phase">{step.phase}</span>
                        <h3 className="roadmap-title">{step.title}</h3>
                        <p className="roadmap-desc">{step.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Dot */}
                  <div style={{
                    width: '10%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 2
                  }} className="hide-on-mobile">
                    <motion.div 
                      variants={dotVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        border: '2px solid #0f172a',
                        boxShadow: '0 0 10px rgba(255,255,255,0.3)' 
                      }} 
                    />
                  </div>

                  {/* Right Spacer or Card */}
                  <div style={{ width: '45%', display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start' }} className="roadmap-col">
                    {!isLeft && (
                      <motion.div 
                        variants={cardVariantsRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="roadmap-card"
                      >
                        <span className="roadmap-phase">{step.phase}</span>
                        <h3 className="roadmap-title">{step.title}</h3>
                        <p className="roadmap-desc">{step.description}</p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
          
          {/* Final CTA Button at the end of the line */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', position: 'relative', zIndex: 2 }}>
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
      </div>
      
      {/* Inline styles for the premium minimal roadmap */}
      <style>{`
        .roadmap-card {
          background: rgba(15, 23, 42, 0.5); /* Deep slate/charcoal glass */
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 48px;
          width: 100%;
          max-width: 480px;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
        
        .roadmap-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .roadmap-phase {
          display: block;
          color: rgba(255, 255, 255, 0.5); /* Subtle white */
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        
        .roadmap-title {
          color: #ffffff;
          font-size: 1.85rem;
          font-weight: 800;
          margin-bottom: 12px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        
        .roadmap-desc {
          color: #cbd5e1;
          font-size: 1.1rem;
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none !important;
          }
          .roadmap-row {
            flex-direction: column !important;
            gap: 20px;
          }
          .roadmap-col {
            width: 100% !important;
            justify-content: center !important;
          }
          .roadmap-card {
            max-width: 100%;
            padding: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default FounderJourneySection;
