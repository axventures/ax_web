import React, { useState } from 'react';
import { Target, Compass, Heart, BookOpen, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TeamSection } from './components/TeamSection';

const tabs = ['Our Story', 'Vision & Mission', 'Our Philosophy'] as const;
type TabName = typeof tabs[number];

export const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>('Our Story');

  const navigate = useNavigate();
  const handleApplyClick = () => navigate('/apply');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <Navbar onApplyClick={handleApplyClick} />

      {/* Hero Header */}
      <section
        style={{
          paddingTop: '180px',
          paddingBottom: '60px',
          paddingLeft: '24px',
          paddingRight: '24px',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8f7ff 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
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
              marginBottom: '48px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1801AD')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Page Title — Peak XV inspired large serif-like heading */}
          <h1
            style={{
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '8px',
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
              fontSize: '1.15rem',
              color: '#64748b',
              fontWeight: 400,
              maxWidth: '600px',
              lineHeight: 1.6,
              marginTop: '16px',
            }}
          >
            Building companies by building exceptional founders.
          </p>
        </div>
      </section>

      {/* Tab Navigation — inspired by Peak XV tabs */}
      <section
        style={{
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 100,
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
                padding: '18px 16px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? '3px solid #1801AD' : '3px solid transparent',
                color: activeTab === tab ? '#1801AD' : '#64748b',
                fontSize: '0.95rem',
                fontWeight: activeTab === tab ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
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
          padding: '80px 24px 120px 24px',
        }}
      >
        {activeTab === 'Our Story' && <OurStoryTab />}
        {activeTab === 'Vision & Mission' && <VisionMissionTab />}
        {activeTab === 'Our Philosophy' && <PhilosophyTab />}
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
        <p>© {new Date().getFullYear()} AX Ventures. All rights reserved.</p>
      </footer>
    </div>
  );
};

/* ── Our Story Tab ── */
const OurStoryTab: React.FC = () => (
  <div style={{ animation: 'fadeInUp 0.5s ease' }}>
    {/* Lead statement */}
    <p
      style={{
        fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
        fontWeight: 500,
        color: '#1e293b',
        lineHeight: 1.35,
        marginBottom: '48px',
        maxWidth: '800px',
      }}
    >
      AX Ventures was founded with one belief:{' '}
      <span style={{ color: '#1801AD', fontWeight: 700 }}>
        Great companies are built by great founders.
      </span>
    </p>

    {/* Body text */}
    <p
      style={{
        fontSize: '1.15rem',
        color: '#475569',
        lineHeight: 1.7,
        marginBottom: '40px',
        maxWidth: '750px',
      }}
    >
      Many talented founders struggle not because their ideas are weak, but because they lack the
      right systems, leadership support, execution frameworks, and ecosystem.
    </p>

    {/* Callout */}
    <div
      style={{
        borderLeft: '4px solid #1801AD',
        paddingLeft: '28px',
        paddingTop: '8px',
        paddingBottom: '8px',
        maxWidth: '700px',
      }}
    >
      <p
        style={{
          fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
          fontWeight: 600,
          color: '#0f172a',
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        AX Ventures exists to solve that problem.
      </p>
    </div>
  </div>
);

/* ── Vision & Mission Tab ── */
const VisionMissionTab: React.FC = () => (
  <div style={{ animation: 'fadeInUp 0.5s ease' }}>
    <div style={{ display: 'grid', gap: '64px' }}>
      {/* Vision */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
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
            <Target size={22} color="#1801AD" />
          </div>
          <h3
            style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Vision
          </h3>
        </div>
        <p
          style={{
            fontSize: '1.15rem',
            color: '#475569',
            lineHeight: 1.7,
            maxWidth: '750px',
          }}
        >
          To become the operating system behind the next generation of founders — by building
          strong founders, strong teams, and strong systems that create enduring companies and
          opportunities for society.
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, #e2e8f0 0%, transparent 100%)' }} />

      {/* Mission */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
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
            <Compass size={22} color="#1801AD" />
          </div>
          <h3
            style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Mission
          </h3>
        </div>
        <p
          style={{
            fontSize: '1.15rem',
            color: '#475569',
            lineHeight: 1.7,
            maxWidth: '750px',
          }}
        >
          To develop exceptional founders, build high-performing teams, and implement scalable
          business systems that help startups solve real-world problems and achieve sustainable
          growth.
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, #e2e8f0 0%, transparent 100%)' }} />

      {/* Purpose */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
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
            <Heart size={22} color="#1801AD" />
          </div>
          <h3
            style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Purpose
          </h3>
        </div>
        <p
          style={{
            fontSize: '1.15rem',
            color: '#475569',
            lineHeight: 1.7,
            maxWidth: '750px',
            marginBottom: '16px',
          }}
        >
          We exist because too many capable founders build alone.
        </p>
        <p
          style={{
            fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)',
            fontWeight: 600,
            color: '#1801AD',
            lineHeight: 1.4,
          }}
        >
          Our goal is to ensure they never have to.
        </p>
      </div>
    </div>
  </div>
);

/* ── Philosophy Tab ── */
const PhilosophyTab: React.FC = () => (
  <div style={{ animation: 'fadeInUp 0.5s ease' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
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
        <BookOpen size={22} color="#1801AD" />
      </div>
      <h3
        style={{
          fontSize: '1.6rem',
          fontWeight: 700,
          color: '#0f172a',
          letterSpacing: '-0.02em',
          margin: 0,
        }}
      >
        Our Philosophy
      </h3>
    </div>

    <p
      style={{
        fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
        fontWeight: 500,
        color: '#1e293b',
        lineHeight: 1.35,
        marginBottom: '48px',
        maxWidth: '800px',
      }}
    >
      We believe startups succeed because of{' '}
      <span style={{ color: '#1801AD', fontWeight: 700 }}>founders</span> — not just ideas.
    </p>

    <div
      style={{
        borderLeft: '4px solid #1801AD',
        paddingLeft: '28px',
        paddingTop: '8px',
        paddingBottom: '8px',
        maxWidth: '700px',
      }}
    >
      <p
        style={{
          fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
          fontWeight: 600,
          color: '#0f172a',
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        Before building companies, we focus on building founders.
      </p>
    </div>
  </div>
);

export default AboutPage;
