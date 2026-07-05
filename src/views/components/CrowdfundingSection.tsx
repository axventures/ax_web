import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CrowdfundingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Sticky section is 150vh total. It stays pinned for 50vh of scrolling.
  // 50vh / 150vh = 0.33. We must finish animations by scrollYProgress = 0.33.
  // We'll animate everything in parallel from 0 to 0.3.
  
  // Question moves from center (50vw) to left edge with gap (5vw)
  const questionX = useTransform(scrollYProgress, [0, 0.3], ['50vw', '5vw']);
  // Inner offset moves from -50% to 0% to keep it centered initially, then anchor left
  const questionXOffset = useTransform(scrollYProgress, [0, 0.3], ['-50%', '0%']);
  
  // Question moves up
  const questionY = useTransform(scrollYProgress, [0, 0.3], ['0vh', '-20vh']);
  // Question scales down slightly
  const questionScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  
  // Answer fades in very quickly right at the start of the scroll
  const answerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const answerY = useTransform(scrollYProgress, [0, 0.3], ['10vh', '0vh']);

  // Background smoothly transitions to pure white
  const containerBg = useTransform(scrollYProgress, [0, 0.3], ['#FAF9F6', '#ffffff']);

  return (
    <section id="crowdfunding" ref={sectionRef} className="crowdfunding-section" style={{ position: 'relative', height: '150vh' }}>
      
      {/* ---------------- Sticky Container ---------------- */}
      <motion.div
        className="crowdfunding-sticky"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          backgroundColor: containerBg,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* ---------------- 1. Question Layer ---------------- */}
        <motion.div
          className="crowdfunding-question"
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            marginTop: '-60px',
            x: questionX,
            y: questionY,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <motion.div
            className="crowdfunding-question-inner"
            style={{
              x: questionXOffset,
              scale: questionScale,
              transformOrigin: 'left center',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                fontWeight: 800,
                color: '#111827',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Why <span style={{ color: '#1801AD' }}>AX</span> Exists?
            </h1>
          </motion.div>
        </motion.div>

        {/* ---------------- 2. Answer Layer ---------------- */}
        <motion.div
          className="crowdfunding-answer"
          style={{
            position: 'absolute',
            top: '40%',
            left: 0,
            right: 0,
            margin: '0 auto',
            width: '90vw',
            maxWidth: 1100,
            opacity: answerOpacity,
            y: answerY,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
          }}
        >
          {/* Text Column */}
          <div
            className="crowdfunding-answer-text"
            style={{
              flex: '1 1 min(100%, 450px)',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                lineHeight: 1.35,
                color: '#000000',
                fontWeight: 400,
                marginBottom: 32,
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
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: '#000000',
                fontWeight: 500,
              }}
            >
              AX Ventures exists to change that. We work alongside founders to
              help them build stronger businesses through structured execution,
              strategic partnerships, operational systems, and founder
              development.
            </p>
          </div>

          {/* Image Column */}
          <div
            className="crowdfunding-answer-image"
            style={{
              flex: '1 1 min(100%, 300px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img 
              src="/bgremovequestionmark.png" 
              alt="Question Mark" 
              style={{
                width: '100%',
                maxWidth: '380px',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default CrowdfundingSection;