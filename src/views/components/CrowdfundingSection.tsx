import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DesktopCrowdfundingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const questionX = useTransform(scrollYProgress, [0, 0.3], ['50vw', '5vw']);
  const questionXOffset = useTransform(scrollYProgress, [0, 0.3], ['-50%', '0%']);
  const questionY = useTransform(scrollYProgress, [0, 0.3], ['0vh', '-20vh']);
  const questionScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const answerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const answerY = useTransform(scrollYProgress, [0, 0.3], ['10vh', '0vh']);
  const containerBg = useTransform(scrollYProgress, [0, 0.3], ['#FAF9F6', '#ffffff']);

  return (
    <section id="crowdfunding-desktop" ref={sectionRef} className="crowdfunding-section" style={{ position: 'relative', height: '150vh' }}>
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
        {/* 1. Question Layer */}
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

        {/* 2. Answer Layer */}
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

const MobileCrowdfundingSection: React.FC = () => {
  return (
    <section 
      id="crowdfunding-mobile" 
      style={{
        padding: '120px 24px',
        backgroundColor: '#030303',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(24,1,173,0.3) 0%, rgba(24,1,173,0) 70%)',
          zIndex: 1,
          pointerEvents: 'none',
          filter: 'blur(40px)'
        }}
      />
      <div 
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          width: '100%',
          background: 'rgba(20, 20, 25, 0.6)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          borderRadius: '40px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '60px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: 'clamp(48px, 6vw, 64px)',
              height: 'clamp(48px, 6vw, 64px)',
              borderRadius: '16px',
              backgroundColor: '#F7F7FA',
              border: '1px solid rgba(0,0,0,0.06)',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <text x="50" y="55" textAnchor="middle" dominantBaseline="middle" fontSize="60" fontWeight="900" letterSpacing="-2">
                  <tspan fontFamily="Georgia, serif" fill="#000">A</tspan>
                  <tspan fill="#000" fontSize="50">/</tspan>
                  <tspan fill="#1801AD" fontStyle="italic" fontFamily="Arial, sans-serif">X</tspan>
                </text>
              </svg>
            </div>
            <h1 style={{ color: '#ffffff', fontWeight: 800, fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', letterSpacing: '-0.03em', margin: 0, lineHeight: 1.1 }}>
              Why AX<br/>Exists?
            </h1>
          </div>
          
          <div style={{ display: 'flex', gap: '6px', marginTop: '24px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.4)' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.4)' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.4)' }} />
          </div>
        </div>

        <h2 
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            margin: 0
          }}
        >
          Most startups don't fail because founders lack ideas.{' '}
          <span style={{ color: '#5b4df2' }}>
            They fail because they lack the systems.
          </span>
        </h2>

        <div style={{ display: 'flex' }}>
          <div style={{ width: '2px', backgroundColor: '#1801AD', marginRight: '24px', flexShrink: 0, borderRadius: '2px' }} />
          <p 
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '600px'
            }}
          >
            AX Ventures exists to change that. We work alongside founders to help them build stronger businesses through structured execution, strategic partnerships, operational systems, and founder development.
          </p>
        </div>

        <img 
          src="/bgremovequestionmark.png" 
          alt="Question Mark" 
          style={{
            position: 'absolute',
            right: '-10%',
            bottom: '-10%',
            width: '400px',
            opacity: 0.05,
            pointerEvents: 'none',
            zIndex: -1
          }}
        />
      </div>
    </section>
  );
};

export const CrowdfundingSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return isMobile ? <MobileCrowdfundingSection /> : <DesktopCrowdfundingSection />;
};

export default CrowdfundingSection;