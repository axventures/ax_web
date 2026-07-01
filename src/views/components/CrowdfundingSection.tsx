import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CrowdfundingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // The question fades out during the first 30% of the section's scroll
  const questionOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const questionY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);
  const questionScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Background smoothly transitions to pure white while the question fades
  const containerBg = useTransform(scrollYProgress, [0.1, 0.3], ['#FAF9F6', '#ffffff']);

  return (
    <section id="crowdfunding" ref={sectionRef} style={{ position: 'relative' }}>
      
      {/* ---------------- 1. Sticky Question Layer ---------------- */}
      <motion.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: containerBg,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 24,
            opacity: questionOpacity,
            y: questionY,
            scale: questionScale,
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              fontWeight: 800,
              textAlign: 'center',
              color: '#111827',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Why <span style={{ color: '#1801AD' }}>AX</span> Exists?
          </h1>

          <div
            style={{
              marginTop: 60,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              opacity: 0.4,
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#1801AD',
                marginBottom: 16,
                fontWeight: 600,
              }}
            >
              Scroll To Reveal
            </span>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                width: 2,
                height: 40,
                background: '#1801AD',
                borderRadius: 10,
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ---------------- 2. Scroll Spacer ---------------- */}
      {/* Creates the scrolling distance needed to fade out the question before the answer appears */}
      <div style={{ height: '80vh' }} />

      {/* ---------------- 3. Normal Flow Answer Layer ---------------- */}
      {/* This layer sits below the sticky block in the DOM and naturally scrolls up to cover it */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: '#ffffff',
          padding: '120px 24px 160px 24px', // Extra bottom padding for breathing room before the Brand ticker
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: 900,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              lineHeight: 1.35,
              color: '#111827',
              fontWeight: 300,
              marginBottom: 40,
              letterSpacing: '-0.01em',
            }}
          >
            Most startups don't fail because founders lack ideas.
            <br />
            <span
              style={{
                color: '#1801AD',
                fontWeight: 700,
              }}
            >
              They fail because they lack the systems.
            </span>
          </p>

          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: 1.8,
              color: '#64748B',
              maxWidth: 700,
              margin: '0 auto',
              fontWeight: 400,
            }}
          >
            AX Ventures exists to change that. We work alongside founders to
            help them build stronger businesses through structured execution,
            strategic partnerships, operational systems, and founder
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrowdfundingSection;