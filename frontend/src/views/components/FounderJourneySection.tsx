import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RoadmapVisualizer } from './RoadmapVisualizer';
import { 
  FileText, 
  UserSearch, 
  GraduationCap, 
  Zap, 
  Briefcase, 
  TrendingUp, 
  Globe,
  ChevronDown
} from 'lucide-react';

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

const mobileIcons = [FileText, UserSearch, GraduationCap, Zap, Briefcase, TrendingUp, Globe];

interface FounderJourneySectionProps {
  onApplyClick: () => void;
}

export const FounderJourneySection: React.FC<FounderJourneySectionProps> = ({ onApplyClick }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="founder-journey" style={{ position: 'relative', padding: '160px 24px', overflow: 'hidden' }}>
      <style>
        {`
          .roadmap-desktop {
            display: block;
          }
          .roadmap-mobile {
            display: none;
          }
          .journey-bg-image {
            background-image: url(/journey_bg.Png);
            background-attachment: fixed;
          }
          @media (max-width: 768px) {
            .roadmap-desktop {
              display: none !important;
            }
            .roadmap-mobile {
              display: block;
            }
            .journey-overlay {
              background: linear-gradient(to bottom, rgba(15,23,42,0.2) 0%, rgba(15,23,42,0.7) 40%, rgba(15,23,42,0.95) 100%) !important;
            }
            .journey-bg-image {
              background-image: url(/founderRoadmap.png) !important;
              background-attachment: fixed !important;
              background-position: top center !important;
            }
          }
          
          @keyframes blue-shine-pulse {
            0% { 
              background-position: 200% center; 
              box-shadow: 0 0 0 0 rgba(63, 47, 216, 0.5), 0 10px 25px -5px rgba(24, 1, 173, 0.4); 
            }
            50% { 
              box-shadow: 0 0 0 15px rgba(63, 47, 216, 0), 0 10px 25px -5px rgba(24, 1, 173, 0.6); 
            }
            100% { 
              background-position: -200% center; 
              box-shadow: 0 0 0 0 rgba(63, 47, 216, 0), 0 10px 25px -5px rgba(24, 1, 173, 0.4); 
            }
          }
          
          .journey-cta-btn {
            padding: 18px 48px;
            font-size: 1.15rem;
            font-weight: 700;
            color: #ffffff;
            border: none;
            border-radius: 100px;
            cursor: pointer;
            background: linear-gradient(90deg, #1801AD 0%, #3F2FD8 25%, #7A71EC 50%, #3F2FD8 75%, #1801AD 100%);
            background-size: 200% auto;
            animation: blue-shine-pulse 3s infinite;
            transition: transform 0.2s ease;
          }
          .journey-cta-btn:hover {
            transform: scale(1.05);
          }
        `}
      </style>
      
      {/* Background Image Container */}
      <div 
        className="v2v-journey-parallax-bg journey-bg-image"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />
      
      {/* Premium Dark Gradient Overlay */}
      <div 
        className="journey-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, rgba(10,15,25,0.6) 40%, rgba(5,5,5,0.95) 100%)',
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
              color: '#94a3b8',
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

        {/* Desktop View: SVG Roadmap */}
        <div className="roadmap-desktop">
          <RoadmapVisualizer roadmap={{ steps }} />
        </div>

        {/* Mobile View: Sticky Cards */}
        <div className="roadmap-mobile" style={{ position: 'relative', paddingBottom: '80px', maxWidth: '500px', margin: '0 auto' }}>
          {/* Connecting timeline line */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            left: '9px',
            top: '12px',
            bottom: '40px',
            width: '2px',
            backgroundColor: 'rgba(99,102,241,0.35)',
          }} />

          {steps.map((step, index) => {
            const Icon = mobileIcons[index % mobileIcons.length];
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={step.phase}
                style={{
                  position: 'sticky',
                  top: `${80 + index * 4}px`,
                  marginBottom: '32px',
                  zIndex: index + 1
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div style={{ position: 'relative', paddingLeft: '32px' }}>
                    
                    {/* Timeline dot */}
                    <div aria-hidden="true" style={{
                      position: 'absolute',
                      left: '9px',
                      top: '28px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      border: '3px solid #4f46e5',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 0 0 4px rgba(79,70,229,0.15)',
                      transform: 'translateX(-50%)'
                    }} />

                    {/* Card Content */}
                    <div 
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      style={{
                      borderRadius: '28px',
                      padding: '24px',
                      background: 'linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      boxShadow: '0 20px 40px -12px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,0,0,0.03)',
                      cursor: 'pointer'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '18px',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 16px -4px rgba(0,0,0,0.25)',
                            marginBottom: '16px',
                          }}>
                            <Icon size={28} color="#18181b" />
                          </div>

                          <div style={{
                            color: '#4f46e5',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            letterSpacing: '0.12em',
                            marginBottom: '8px',
                          }}>
                            {step.phase}
                          </div>

                          <div style={{
                            fontFamily: 'var(--font-sans, "Outfit", sans-serif)',
                            fontWeight: 800,
                            fontSize: '1.75rem',
                            color: '#18181b',
                            marginBottom: isExpanded ? '12px' : '0',
                            lineHeight: 1.15,
                            transition: 'margin 0.3s ease'
                          }}>
                            {step.title}
                          </div>
                        </div>

                        {/* Dropdown switch icon */}
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(0,0,0,0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '8px',
                          flexShrink: 0
                        }}>
                          <ChevronDown 
                            size={18} 
                            color="#18181b" 
                            style={{ 
                              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.3s ease'
                            }} 
                          />
                        </div>
                      </div>

                      <div style={{
                        maxHeight: isExpanded ? '200px' : '0',
                        opacity: isExpanded ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                      }}>
                        <div style={{
                          color: '#52525b',
                          fontSize: '1.05rem',
                          lineHeight: 1.6,
                        }}>
                          {step.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}

          {/* End marker dot */}
          <div style={{ position: 'relative', paddingLeft: '32px', marginTop: '16px' }}>
            <div aria-hidden="true" style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              border: '3px solid #ffffff',
              backgroundColor: '#4f46e5',
              boxShadow: '0 0 0 4px rgba(79,70,229,0.2)',
              marginLeft: '-23px' /* Aligns with the line at left: 9px */
            }} />
          </div>
        </div>
          
        {/* Final CTA Button at the end of the line */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', position: 'relative', zIndex: 2 }}>
          <button 
            className="journey-cta-btn"
            onClick={onApplyClick}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default FounderJourneySection;
