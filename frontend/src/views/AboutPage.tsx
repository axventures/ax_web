import React, { useState } from 'react';
import { 
  Target, 
  Compass, 
  Heart, 
  BookOpen, 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Scale, 
  Megaphone, 
  Building2, 
  CircleDollarSign, 
  Search,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TeamSection } from './components/TeamSection';
import { 
  ContourLinesTopRight, 
  TopoLinesTopLeft, 
  DashedCurveLeft, 
  WaveLinesBottomRight 
} from './components/DecorativeLines';

const tabs = ['Our Story', 'Vision & Mission', 'Our Philosophy'] as const;
type TabName = typeof tabs[number];

export const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>('Our Story');

  const navigate = useNavigate();
  const handleApplyClick = () => navigate('/apply');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafafa', position: 'relative', overflow: 'hidden' }}>
      <Navbar onApplyClick={handleApplyClick} />

      {/* Hero Header */}
      <section
        style={{
          paddingTop: '180px',
          paddingBottom: '70px',
          paddingLeft: '24px',
          paddingRight: '24px',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8f7ff 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Topographic and Dashed Lines */}
        <TopoLinesTopLeft opacity={0.2} />
        <ContourLinesTopRight opacity={0.16} />

        {/* Dotted grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(24, 1, 173, 0.04) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
            opacity: 0.7,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Back Link */}
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#64748b',
              fontSize: '0.9rem',
              fontWeight: 500,
              textDecoration: 'none',
              marginBottom: '36px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1801AD')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Section badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              backgroundColor: 'rgba(24, 1, 173, 0.06)',
              borderRadius: '100px',
              color: 'var(--brand-blue, #1801AD)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={14} color="#1801AD" />
            AX Group of Corporations
          </div>

          {/* Page Title */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '16px',
            }}
          >
            About{' '}
            <span
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #1801AD, #6d5ce8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AX.
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: '#475569',
              fontWeight: 400,
              maxWidth: '680px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Building an interconnected ecosystem of founders, ventures, talent, technology, and assets.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section
        style={{
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 4px 20px -8px rgba(0,0,0,0.03)',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            gap: '0',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: '20px 16px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? '3px solid #1801AD' : '3px solid transparent',
                color: activeTab === tab ? '#1801AD' : '#64748b',
                fontSize: '0.98rem',
                fontWeight: activeTab === tab ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                letterSpacing: '-0.01em',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Tab Content */}
      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '70px 24px 110px 24px',
          position: 'relative',
        }}
      >
        <DashedCurveLeft opacity={0.12} />
        <WaveLinesBottomRight opacity={0.1} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {activeTab === 'Our Story' && <OurStoryTab />}
          {activeTab === 'Vision & Mission' && <VisionMissionTab />}
          {activeTab === 'Our Philosophy' && <PhilosophyTab />}
        </div>
      </section>

      {/* Team / Mentors Section */}
      <TeamSection />

      {/* Footer */}
      <footer
        style={{
          padding: '60px 24px',
          borderTop: '1px solid rgba(24, 1, 173, 0.08)',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#94a3b8',
          backgroundColor: '#ffffff',
        }}
      >
        <p>© {new Date().getFullYear()} AX Group of Corporations. All rights reserved.</p>
      </footer>
    </div>
  );
};

/* ── Our Story Tab ── */
const OurStoryTab: React.FC = () => {
  const cycleSteps = [
    { num: '01', title: 'Ideas', desc: 'Identify meaningful problems, untapped market opportunities, and promising ideas through research, communities, and local ecosystems.' },
    { num: '02', title: 'Founders', desc: 'Help individuals develop entrepreneurial clarity, understand customers, validate problems, and cultivate resilient execution capabilities.' },
    { num: '03', title: 'Ventures', desc: 'Transform validated opportunities into robust businesses through structured venture development, technology, sales, and disciplined execution.' },
    { num: '04', title: 'Talent', desc: 'Connect ventures with specialized people, operational leadership, and domain capabilities required to scale with confidence.' },
    { num: '05', title: 'Assets', desc: 'Develop long-term value through viable ventures, proprietary software products, intellectual property, and carefully evaluated physical assets.' },
    { num: '06', title: 'Networks', desc: 'Connect founders, businesses, professionals, colleges, investors, and institutions into a shared, mutually reinforcing ecosystem.' },
    { num: '07', title: 'New Opportunities', desc: 'Leverage relationships, knowledge, and capabilities developed through this process to identify new problems and launch additional ventures.' },
  ];

  const wings = [
    { icon: <Layers size={20} color="#1801AD" />, name: 'AX Ventures', role: 'Venture Building', desc: 'Develop founders, validate ideas, create ventures, assemble teams, and support promising businesses through structured execution.' },
    { icon: <Cpu size={20} color="#1801AD" />, name: 'AX Technology', role: 'Software & Digital Products', desc: 'Develop SaaS platforms, automation, and digital infrastructure that solve practical problems for founders and businesses.' },
    { icon: <Megaphone size={20} color="#1801AD" />, name: 'AX Marketing', role: 'Marketing & Demand Growth', desc: 'Provide marketing strategy, branding, customer acquisition, content, and sales enablement to help businesses reach markets.' },
    { icon: <Scale size={20} color="#1801AD" />, name: 'AX Legal', role: 'Corporate & Legal Services', desc: 'Connect businesses with appropriate legal expertise and professional governance through qualified professionals.' },
    { icon: <CircleDollarSign size={20} color="#1801AD" />, name: 'AX Capital', role: 'Capital & Investment', desc: 'Develop capital capabilities, strategic investment partnerships, and structured funding connections.' },
    { icon: <Search size={20} color="#1801AD" />, name: 'AX Research & Media', role: 'Market Intelligence & Stories', desc: 'Research industries, customer problems, and publish founder stories and ecosystem insights.' },
    { icon: <Building2 size={20} color="#1801AD" />, name: 'AX Realty', role: 'Real Estate & Physical Assets', desc: 'Explore property development, business hubs, and physical founder spaces where demand and feasibility support investment.' },
  ];

  return (
    <div style={{ animation: 'fadeInUp 0.4s ease' }}>
      {/* Lead statement */}
      <p
        style={{
          fontSize: 'clamp(1.5rem, 3.2vw, 2.1rem)',
          fontWeight: 600,
          color: '#0f172a',
          lineHeight: 1.35,
          marginBottom: '28px',
          maxWidth: '840px',
          letterSpacing: '-0.02em',
        }}
      >
        AX was founded with one fundamental belief:{' '}
        <span style={{ color: '#1801AD', fontWeight: 800 }}>
          Great companies are built by great founders.
        </span>
      </p>

      {/* Body text */}
      <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
        <p
          style={{
            fontSize: '1.15rem',
            color: '#475569',
            lineHeight: 1.75,
            marginBottom: '20px',
          }}
        >
          Most startups do not fail because founders lack ideas. They fail because founders lack the structured systems, operational guidance, multidisciplinary support, and collaborative ecosystem required to turn ambition into durable businesses.
        </p>
        <p
          style={{
            fontSize: '1.15rem',
            color: '#475569',
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          Rather than operating as a conventional accelerator or consultancy, AX has grown into the <strong>AX Group of Corporations</strong>, an interconnected business ecosystem designed to develop founders, build scalable ventures, and create long-term economic value.
        </p>
      </div>

      {/* Callout */}
      <div
        style={{
          borderLeft: '4px solid #1801AD',
          backgroundColor: '#ffffff',
          padding: '24px 32px',
          borderRadius: '0 16px 16px 0',
          boxShadow: '0 10px 30px -10px rgba(24, 1, 173, 0.06)',
          border: '1px solid rgba(24, 1, 173, 0.08)',
          borderLeftWidth: '4px',
          borderLeftColor: '#1801AD',
          maxWidth: '820px',
          marginBottom: '64px',
        }}
      >
        <p
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#0f172a',
            lineHeight: 1.45,
            marginBottom: '8px',
          }}
        >
          AX exists to change how companies are built.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            color: '#475569',
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          We work alongside founders to strengthen leadership, sharpen decision-making, assemble capable teams, and deploy disciplined operating systems that scale with confidence.
        </p>
      </div>

      {/* Value Creation Cycle */}
      <div style={{ marginBottom: '64px' }}>
        <div style={{ marginBottom: '28px' }}>
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1801AD',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            The Underlying Flywheel
          </span>
          <h3
            style={{
              fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              margin: 0,
              marginBottom: '10px',
            }}
          >
            The AX Value-Creation Cycle
          </h3>
          <p style={{ color: '#64748b', fontSize: '1.05rem', margin: 0, fontStyle: 'italic' }}>
            From ideas to founders. From founders to ventures. From ventures to talent. From talent to assets. From assets to networks.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {cycleSteps.map((step) => (
            <div
              key={step.num}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1801AD';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(24, 1, 173, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(24, 1, 173, 0.06)',
                  color: '#1801AD',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  marginBottom: '14px',
                }}
              >
                {step.num}
              </div>
              <h4
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '8px',
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AX Ecosystem Wings */}
      <div>
        <div style={{ marginBottom: '28px' }}>
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1801AD',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Connected Capabilities
          </span>
          <h3
            style={{
              fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              margin: 0,
              marginBottom: '10px',
            }}
          >
            The AX Ecosystem Wings
          </h3>
          <p style={{ color: '#64748b', fontSize: '1.05rem', margin: 0 }}>
            One group. Connected capabilities. Shared opportunities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {wings.map((wing) => (
            <div
              key={wing.name}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(24, 1, 173, 0.08)',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1801AD';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(24, 1, 173, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(24, 1, 173, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(24, 1, 173, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {wing.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    {wing.name}
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: '#1801AD', fontWeight: 600 }}>
                    {wing.role}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                {wing.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Vision & Mission Tab ── */
const VisionMissionTab: React.FC = () => {
  const missionPillars = [
    'Transform promising ideas into validated business opportunities.',
    'Help founders develop the clarity, capabilities, and teams required to execute.',
    'Build ventures through technology, expertise, collaboration, and disciplined execution.',
    'Connect businesses with talent, professional services, customers, and appropriate capital.',
    'Develop integrated AX business wings that support the wider ecosystem.',
    'Build research-driven district ecosystems connecting colleges, businesses, founders, investors, and institutions.',
    'Create long-term value through viable ventures, technology products, and carefully evaluated physical assets.',
  ];

  return (
    <div style={{ animation: 'fadeInUp 0.4s ease' }}>
      <div style={{ display: 'grid', gap: '64px' }}>
        
        {/* Vision */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(24,1,173,0.08), rgba(109,92,232,0.12))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Target size={24} color="#1801AD" />
            </div>
            <div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#1801AD',
                  display: 'block',
                }}
              >
                Strategic Direction
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.7rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  letterSpacing: '-0.03em',
                  margin: 0,
                }}
              >
                Our Vision
              </h3>
            </div>
          </div>

          <p
            style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.45rem)',
              fontWeight: 500,
              color: '#0f172a',
              lineHeight: 1.5,
              maxWidth: '850px',
              marginBottom: '28px',
            }}
          >
            To build AX Group into an interconnected business ecosystem that transforms ideas into ventures, develops talent, connects businesses with opportunities and capital, and creates long-term value through technology, entrepreneurship, strategic networks, and physical assets.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px',
              maxWidth: '850px',
            }}
          >
            <div
              style={{
                padding: '24px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(24, 1, 173, 0.08)',
                borderRadius: '16px',
                boxShadow: '0 4px 20px -8px rgba(0,0,0,0.04)',
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1801AD', marginBottom: '8px' }}>
                The Connected Future
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                We envision a future in which AX connects founders, professionals, businesses, investors, institutions, and infrastructure through a coordinated ecosystem that creates opportunities for people to build, collaborate, grow, and contribute to economic development.
              </p>
            </div>

            <div
              style={{
                padding: '24px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(24, 1, 173, 0.08)',
                borderRadius: '16px',
                boxShadow: '0 4px 20px -8px rgba(0,0,0,0.04)',
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1801AD', marginBottom: '8px' }}>
                District Development Model
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                Our long-term ambition is to develop a repeatable district-level model that connects entrepreneurship with business execution, technology, capital, and real-world assets, starting in Kerala and expanding through proven systems.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, #e2e8f0 0%, transparent 100%)' }} />

        {/* Mission */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(24,1,173,0.08), rgba(109,92,232,0.12))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Compass size={24} color="#1801AD" />
            </div>
            <div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#1801AD',
                  display: 'block',
                }}
              >
                Our Mandate
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.7rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  letterSpacing: '-0.03em',
                  margin: 0,
                }}
              >
                Our Mission
              </h3>
            </div>
          </div>

          <div
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              backgroundColor: 'rgba(24, 1, 173, 0.06)',
              borderRadius: '8px',
              color: '#1801AD',
              fontSize: '0.9rem',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Discover Opportunities. Build Ventures. Develop Ecosystems.
          </div>

          <p
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
              color: '#1e293b',
              fontWeight: 500,
              lineHeight: 1.5,
              maxWidth: '850px',
              marginBottom: '32px',
            }}
          >
            Our mission is to identify meaningful problems, empower founders, connect talent with opportunities, build and scale ventures, and develop specialized business capabilities that support sustainable growth.
          </p>

          <div
            style={{
              display: 'grid',
              gap: '12px',
              maxWidth: '850px',
              marginBottom: '32px',
            }}
          >
            {missionPillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #f1f5f9',
                  borderRadius: '12px',
                  padding: '16px 20px',
                }}
              >
                <CheckCircle2 size={18} color="#1801AD" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.55 }}>
                  {pillar}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '16px 24px',
              backgroundColor: '#f8fafc',
              borderLeft: '3px solid #1801AD',
              borderRadius: '0 12px 12px 0',
              maxWidth: '850px',
            }}
          >
            <p style={{ fontSize: '0.95rem', color: '#475569', fontStyle: 'italic', margin: 0 }}>
              <strong>Our Operating Approach:</strong> Build progressively, establish sustainable revenue, develop capable leaders, and expand only when the underlying opportunity and operating model justify it.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, #e2e8f0 0%, transparent 100%)' }} />

        {/* Purpose */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(24,1,173,0.08), rgba(109,92,232,0.12))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Heart size={24} color="#1801AD" />
            </div>
            <div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#1801AD',
                  display: 'block',
                }}
              >
                Reason For Being
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.7rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  letterSpacing: '-0.03em',
                  margin: 0,
                }}
              >
                Our Purpose
              </h3>
            </div>
          </div>

          <p
            style={{
              fontSize: '1.2rem',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '850px',
              marginBottom: '16px',
            }}
          >
            We exist because too many capable founders build alone.
          </p>
          <p
            style={{
              fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: '#1801AD',
              lineHeight: 1.4,
              maxWidth: '850px',
              marginBottom: '20px',
            }}
          >
            Our purpose is to ensure ambitious builders never have to operate in isolation.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '850px',
              margin: 0,
            }}
          >
            Opportunities multiply when the right people connect. AX exists to bridge the gap between fragmented potential and tangible economic reality, establishing an interconnected ecosystem where raw ambition is matched with capital, infrastructure, and execution mastery.
          </p>
        </div>

      </div>
    </div>
  );
};

/* ── Philosophy Tab ── */
const PhilosophyTab: React.FC = () => {
  const principles = [
    {
      title: 'Value Creation',
      desc: 'Build solutions that create measurable value for customers, founders, partners, and the wider ecosystem.',
    },
    {
      title: 'Founder Development',
      desc: 'Help founders develop the clarity, skills, relationships, and execution capabilities required to build businesses.',
    },
    {
      title: 'Collaboration',
      desc: 'Work with independent organizations and specialists when their capabilities improve outcomes. AX strengthens ecosystems through collaboration, not control.',
    },
    {
      title: 'Financial Discipline',
      desc: 'Establish sustainable revenue, manage costs, protect working capital, and allocate resources responsibly.',
    },
    {
      title: 'Technology-Driven',
      desc: 'Use digital products, SaaS platforms, and systems to solve practical problems and improve efficiency.',
    },
    {
      title: 'Accountability',
      desc: 'Establish clear responsibilities, professional standards, transparent agreements, and measurable outcomes.',
    },
    {
      title: 'Responsible Expansion',
      desc: 'Develop new wings, ventures, and physical assets only when demand, leadership, resources, and feasibility justify the commitment.',
    },
    {
      title: 'Long-Term Thinking',
      desc: 'Build capabilities and relationships that create durable value rather than pursuing short-term hype without a sustainable foundation.',
    },
  ];

  return (
    <div style={{ animation: 'fadeInUp 0.4s ease' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(24,1,173,0.08), rgba(109,92,232,0.12))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <BookOpen size={24} color="#1801AD" />
        </div>
        <div>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1801AD',
              display: 'block',
            }}
          >
            Core Foundations
          </span>
          <h3
            style={{
              fontSize: 'clamp(1.7rem, 3vw, 2.2rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            Our Philosophy
          </h3>
        </div>
      </div>

      <p
        style={{
          fontSize: 'clamp(1.5rem, 3.2vw, 2.1rem)',
          fontWeight: 600,
          color: '#0f172a',
          lineHeight: 1.35,
          marginBottom: '28px',
          maxWidth: '850px',
          letterSpacing: '-0.02em',
        }}
      >
        Before building companies, we focus on{' '}
        <span style={{ color: '#1801AD', fontWeight: 800 }}>building founders.</span>
      </p>

      <p
        style={{
          fontSize: '1.15rem',
          color: '#475569',
          lineHeight: 1.75,
          marginBottom: '40px',
          maxWidth: '820px',
        }}
      >
        We believe startups succeed because of founders, not merely ideas. True, enduring enterprise value is generated from the ground up: when personal clarity is coupled with disciplined execution, financial rigor, collective intelligence, and enduring partnerships.
      </p>

      {/* 8 Principles Header */}
      <div style={{ marginBottom: '24px' }}>
        <h4
          style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: '8px',
          }}
        >
          Our 8 Operating Principles
        </h4>
        <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
          The operational code that guides every investment, venture partnership, and ecosystem initiative.
        </p>
      </div>

      {/* Grid of 8 principles */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '56px',
        }}
      >
        {principles.map((item, idx) => (
          <div
            key={item.title}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(24, 1, 173, 0.08)',
              borderRadius: '16px',
              padding: '24px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#1801AD';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(24, 1, 173, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(24, 1, 173, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#1801AD',
                backgroundColor: 'rgba(24, 1, 173, 0.06)',
                padding: '4px 10px',
                borderRadius: '6px',
                marginBottom: '12px',
              }}
            >
              0{idx + 1}
            </div>
            <h5
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: '8px',
              }}
            >
              {item.title}
            </h5>
            <p
              style={{
                fontSize: '0.92rem',
                color: '#475569',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Build With AX Callout Box */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1801AD 0%, #0d0161 100%)',
          borderRadius: '20px',
          padding: '40px 36px',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px -15px rgba(24, 1, 173, 0.3)',
        }}
      >
        <span
          style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#a5b4fc',
          }}
        >
          Collaborate & Build
        </span>
        <h4
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          Build With AX
        </h4>
        <p
          style={{
            fontSize: '1.05rem',
            color: '#e0e7ff',
            lineHeight: 1.65,
            maxWidth: '700px',
            margin: 0,
          }}
        >
          Opportunities grow when the right people connect. AX welcomes founders, businesses, colleges, professionals, technology collaborators, investors, and strategic partners who want to contribute to practical solutions and sustainable ventures.
        </p>
        <div style={{ marginTop: '8px' }}>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: '#ffffff',
              color: '#1801AD',
              borderRadius: '100px',
              fontWeight: 700,
              fontSize: '0.92rem',
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Connect With Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
