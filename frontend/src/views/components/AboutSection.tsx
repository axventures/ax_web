import React from 'react';
import { Sparkles, ArrowRight, Target, Compass, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  ContourLinesTopRight, 
  TopoLinesTopLeft, 
  DashedCurveLeft 
} from './DecorativeLines';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      style={{
        padding: '130px 24px',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Design System Decorative Lines */}
      <TopoLinesTopLeft opacity={0.18} />
      <ContourLinesTopRight opacity={0.14} />
      <DashedCurveLeft opacity={0.12} />

      {/* Background ambient light */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '500px',
          background: 'radial-gradient(circle, rgba(24,1,173,0.03) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        
        {/* Section Label */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            backgroundColor: 'rgba(24, 1, 173, 0.05)',
            borderRadius: '100px',
            color: 'var(--brand-blue, #1801AD)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '28px'
          }}
        >
          <Sparkles size={16} color="#1801AD" />
          About AX Group
        </div>

        {/* Title */}
        <h2 
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: '32px'
          }}
        >
          Building Companies by Building Exceptional Founders
        </h2>

        {/* Main Statement */}
        <div style={{ textAlign: 'left', maxWidth: '820px', margin: '0 auto' }}>
          <p 
            style={{
              fontSize: 'clamp(1.3rem, 2.6vw, 1.7rem)',
              fontWeight: 500,
              color: '#1e293b',
              lineHeight: 1.45,
              marginBottom: '32px'
            }}
          >
            AX was founded with one belief:{' '}
            <span style={{ color: 'var(--brand-blue, #1801AD)', fontWeight: 800 }}>
              Great companies are built by great founders.
            </span>
          </p>

          <p 
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              fontWeight: 400,
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: '20px'
            }}
          >
            Most startups don’t fail because founders lack ideas. They fail because founders lack the structured operating systems, multidisciplinary leadership, and coordinated ecosystem required to navigate growth.
          </p>
          <p 
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              fontWeight: 400,
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: '36px'
            }}
          >
            AX Group of Corporations exists to bridge that gap, connecting venture building, software technology, marketing, corporate governance, capital networks, and physical innovation hubs under one coordinated umbrella.
          </p>

          {/* Cycle Quote Box */}
          <div 
            style={{
              padding: '28px 32px',
              backgroundColor: '#f8fafc',
              borderLeft: '4px solid var(--brand-blue, #1801AD)',
              borderRadius: '0 16px 16px 0',
              border: '1px solid rgba(24, 1, 173, 0.08)',
              borderLeftWidth: '4px',
              borderLeftColor: '#1801AD',
              marginBottom: '40px'
            }}
          >
            <p 
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--brand-blue, #1801AD)',
                marginBottom: '8px'
              }}
            >
              The Value-Creation Flywheel
            </p>
            <p 
              style={{
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                fontWeight: 700,
                color: '#0f172a',
                lineHeight: 1.5,
                margin: 0,
                marginBottom: '10px'
              }}
            >
              From ideas to founders. From founders to ventures. From ventures to talent. From talent to assets. From assets to networks.
            </p>
            <p
              style={{
                fontSize: '0.98rem',
                fontWeight: 400,
                color: '#475569',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              We work alongside founders to strengthen leadership clarity, build operational excellence, and create businesses that scale with durable economic value.
            </p>
          </div>

          {/* Quick Pillars Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '40px'
            }}
          >
            <div style={{ padding: '20px', borderRadius: '12px', border: '1px solid #f1f5f9', backgroundColor: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1801AD', fontWeight: 700, marginBottom: '6px' }}>
                <Target size={18} /> Our Vision
              </div>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                Interconnected business ecosystem creating long-term value from ideas to assets.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '12px', border: '1px solid #f1f5f9', backgroundColor: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1801AD', fontWeight: 700, marginBottom: '6px' }}>
                <Compass size={18} /> Our Mission
              </div>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                Discover opportunities, empower founders, and build research-driven district ecosystems.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '12px', border: '1px solid #f1f5f9', backgroundColor: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1801AD', fontWeight: 700, marginBottom: '6px' }}>
                <BookOpen size={18} /> Our Philosophy
              </div>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                Before building companies, we build founders through disciplined execution and 8 principles.
              </p>
            </div>
          </div>

          {/* Explore Button */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                backgroundColor: 'var(--brand-blue, #1801AD)',
                color: '#ffffff',
                borderRadius: '100px',
                fontSize: '0.95rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 8px 24px -6px rgba(24, 1, 173, 0.4)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px -4px rgba(24, 1, 173, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px -6px rgba(24, 1, 173, 0.4)';
              }}
            >
              Explore Full AX Story, Vision & Philosophy <ArrowRight size={16} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
