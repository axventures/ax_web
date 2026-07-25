import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EventsHoldModal } from './EventsHoldModal';
import { ContourLinesTopRight, SweepingDashedLineAlt } from './DecorativeLines';

const ROTATING_WORDS = ['Founder', 'Team', 'System', 'Company'];

// Stagger animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export const HeroSection: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-section-landscape"
    >

      {/* Ambient radial light behind content */}
      <div className="hero-ambient-light" />

      {/* Topographic contour lines — brand design touch */}
      <div className="hero-decorative-lines">
        <ContourLinesTopRight opacity={0.08} />
        <SweepingDashedLineAlt />
      </div>

      {/* Staggered content entrance */}
      <motion.div
        className="hero-content-inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Stacked Headline - Large Centered Hook */}
        <motion.h1
          className="hero-headline-hook"
          variants={itemVariants}
        >
          <span className="hero-strong-title">Strong</span>
          <span
            key={currentWordIndex}
            className="rotating-word hero-rotating-title hero-rotating-title-gradient"
          >
            {ROTATING_WORDS[currentWordIndex]}.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="hero-subtitle"
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1.1rem, 2.8vw, 1.35rem)',
            color: 'hsl(var(--text-muted))',
            maxWidth: '720px',
            marginTop: '56px',
            fontWeight: 500,
            lineHeight: 1.6,
          }}
        >
          Building companies by building exceptional founders.
        </motion.p>

        {/* Single CTA */}
        <motion.div
          className="hero-cta-wrapper"
          variants={itemVariants}
          style={{
            marginTop: '44px',
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsEventsModalOpen(true);
            }}
            className="hero-summit-btn"
          >
            <span>Explore Vision to Ventures</span>
            <ArrowRight size={22} className="hero-summit-arrow" />
          </a>
        </motion.div>
      </motion.div>

      <EventsHoldModal 
        isOpen={isEventsModalOpen} 
        onClose={() => setIsEventsModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
