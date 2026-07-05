import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, animate, useInView } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';
import { ContourLinesTopRight, SweepingDashedLineAlt } from '../components/DecorativeLines';

const Counter = ({ from, to }: { from: number, to: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.round(value));
        }
      });
      return () => controls.stop();
    }
    return () => {};
  }, [from, to, isInView]);

  return <span ref={ref}>{count}</span>;
};

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-07-25T08:00:00") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="v2v-countdown-container">
      {/* Urgency Badge */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        padding: '10px 16px', 
        backgroundColor: 'rgba(239, 68, 68, 0.06)', 
        borderRadius: '30px', 
        border: '1px solid rgba(239, 68, 68, 0.15)',
        width: 'fit-content'
      }}>
        <span className="v2v-pulse-red" style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#ef4444',
          borderRadius: '50%',
          display: 'inline-block'
        }} />
        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ef4444', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Intake closes soon • Limited Seats Available
        </span>
      </div>

      {/* Countdown Card Grid */}
      <div className="v2v-countdown-grid">
        
        {/* Days */}
        <div className="v2v-countdown-card">
          <div className="v2v-countdown-num">
            {formatNum(timeLeft.days)}
          </div>
          <div className="v2v-countdown-label">
            Days
          </div>
          <div className="v2v-countdown-divider" />
        </div>

        {/* Flashing Colons */}
        <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--v2v-purple)', opacity: 0.5, animation: 'blink 1.5s infinite', margin: '0 2px' }}>:</span>

        {/* Hours */}
        <div className="v2v-countdown-card">
          <div className="v2v-countdown-num">
            {formatNum(timeLeft.hours)}
          </div>
          <div className="v2v-countdown-label">
            Hours
          </div>
          <div className="v2v-countdown-divider" />
        </div>

        {/* Flashing Colons */}
        <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--v2v-purple)', opacity: 0.5, animation: 'blink 1.5s infinite', margin: '0 2px' }}>:</span>

        {/* Minutes */}
        <div className="v2v-countdown-card">
          <div className="v2v-countdown-num">
            {formatNum(timeLeft.minutes)}
          </div>
          <div className="v2v-countdown-label">
            Mins
          </div>
          <div className="v2v-countdown-divider" />
        </div>

        {/* Flashing Colons */}
        <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--v2v-purple)', opacity: 0.5, animation: 'blink 1.5s infinite', margin: '0 2px' }}>:</span>

        {/* Seconds (Pulsing in Alert Red) */}
        <div className="v2v-countdown-card secs">
          <motion.div 
            className="v2v-countdown-num secs"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            {formatNum(timeLeft.seconds)}
          </motion.div>
          <div className="v2v-countdown-label secs">
            Secs
          </div>
          <div className="v2v-countdown-divider secs" />
        </div>

      </div>
    </div>
  );
};

export const SummitHero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="v2v-hero" style={{ position: 'relative' }}>
      {/* Design touches: topographic contour lines and sweeping dashed line */}
      <ContourLinesTopRight opacity={0.15} />
      <SweepingDashedLineAlt />

      <div className="v2v-hero-bg-wrapper">
        <motion.div 
          className="v2v-hero-bg"
          style={{ y }}
        />
        <div className="v2v-hero-overlay" />
      </div>

      <div className="v2v-container">
        {/* Massive Program Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ 
            marginBottom: '48px', 
            width: '100%', 
            textAlign: 'left',
            position: 'relative',
            zIndex: 10
          }}
        >
          <h1 className="v2v-main-title">
            Vision to Ventures
          </h1>
          <div style={{
            width: '120px',
            height: '6px',
            backgroundColor: 'var(--brand-blue)',
            borderRadius: '3px'
          }} />
        </motion.div>

        <div className="v2v-hero-grid">
          
          {/* Left Column */}
          <div className="v2v-hero-left">
            <motion.h1 
              className="v2v-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}
            >
              Building Companies Starts With Building Connections
            </motion.h1>
            
            <motion.h2
              className="v2v-subheadline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '1.4rem', color: 'var(--v2v-purple)', fontWeight: 800, margin: '16px 0 24px' }}
            >
              <span>One Room.</span>
              <span>100 Builders.</span>
              <span>Countless Opportunities.</span>
            </motion.h2>

            <motion.p 
              className="v2v-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontSize: '1.15rem', color: '#555', lineHeight: 1.6, maxWidth: '680px', marginBottom: '32px' }}
            >
              The Vision to Ventures program brings together ambitious founders, startup teams, experienced operators, business leaders, ecosystem partners and industry experts for one purpose: To help founders move forward through meaningful conversations, practical insights and real business relationships.
            </motion.p>

            {/* Countdown Timer */}
            <CountdownTimer />
          </div>

          {/* Right Column (Sticky Checkout Card) */}
          <div className="v2v-hero-right">
            <motion.div 
              className="v2v-sticky-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--v2v-purple)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  All-Access Pass
                </span>
                <span style={{ 
                  backgroundColor: 'rgba(239, 68, 68, 0.1)', 
                  color: '#ef4444', 
                  fontSize: '0.75rem', 
                  fontWeight: 800, 
                  padding: '4px 12px', 
                  borderRadius: '30px',
                  letterSpacing: '0.05em'
                }}>
                  <Counter from={0} to={37} /> / 100 REMAINING
                </span>
              </div>

              {/* Price Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--v2v-black)' }}>₹1,499</span>
                  <span style={{ fontSize: '1.3rem', color: '#888', textDecoration: 'line-through', fontWeight: 500 }}>₹2,000</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  LIMITED TIME OFFER PRICE (SAVE 25%)
                </span>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }}></div>

              {/* Location & Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MapPin size={20} style={{ color: 'var(--v2v-purple)' }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--v2v-black)' }}>Kozhikode, Kerala</span>
                    <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: 500 }}>Venue Location</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Calendar size={20} style={{ color: 'var(--v2v-purple)' }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--v2v-black)' }}>July 25, 2026</span>
                    <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: 500 }}>08:00 AM onwards</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Users size={20} style={{ color: 'var(--v2v-purple)' }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--v2v-black)' }}>100 Founders Only</span>
                    <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: 500 }}>Exclusive Cohort Size</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                <a 
                  href="#register" 
                  className="v2v-btn v2v-btn-primary" 
                  style={{ textDecoration: 'none', textAlign: 'center', padding: '16px 24px', fontSize: '1.05rem', borderRadius: '50px' }}
                >
                  Reserve Your Founder Pass
                </a>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="v2v-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="v2v-mouse">
          <div className="v2v-wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};
