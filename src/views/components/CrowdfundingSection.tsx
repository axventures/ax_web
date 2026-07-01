import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CrowdfundingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  /* ---------------- Animation Timelines ---------------- */

  // 1. Question: Fades out completely and shrinks slightly
  const questionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const questionY = useTransform(scrollYProgress, [0.15, 0.25], [0, -40]);
  const questionScale = useTransform(scrollYProgress, [0.15, 0.25], [1, 0.95]);
  // CRITICAL: Physically remove from DOM once faded to prevent ANY reappearance or ghosting
  const questionDisplay = useTransform(scrollYProgress, (v) => (v > 0.26 ? 'none' : 'flex'));

  // 2. Background: Smoothly transition from warm off-white to pure white
  const containerBg = useTransform(scrollYProgress, [0.25, 0.35], ['#FAF9F6', '#ffffff']);

  // 3. Answer: Fades in and stays visible (No fade out at the end, so it transitions smoothly to next section)
  const answerOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const answerY = useTransform(scrollYProgress, [0.4, 0.55], [40, 0]);
  // Only display the answer when it's time to animate in
  const answerDisplay = useTransform(scrollYProgress, (v) => (v < 0.39 ? 'none' : 'flex'));

  return (
    <section id="crowdfunding" style={{ background: '#FAF9F6', marginBottom: '-50vh', position: 'relative', zIndex: 1 }}>
      <div
        ref={sectionRef}
        style={{
          position: 'relative',
          height: '350vh', // Clean, smooth scrolling distance
        }}
      >
        <motion.div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: containerBg, // Dynamically transitions to pure white
          }}
        >
          {/* ---------------- 1. Question Layer ---------------- */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: questionDisplay as any,
              flexDirection: 'column',
              justifyContent: 'center',
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

          {/* ---------------- 2. Answer Layer ---------------- */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: answerDisplay as any,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: answerOpacity,
              y: answerY,
              padding: 24,
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CrowdfundingSection;