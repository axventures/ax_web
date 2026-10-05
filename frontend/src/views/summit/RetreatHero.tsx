import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Flame, Zap, ShieldCheck } from 'lucide-react';
import { ContourLinesTopRight, DashedCurveLeft, SweepingDashedLine } from '../components/DecorativeLines';

export const RetreatHero: React.FC = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/apply');
  };

  const scrollToChallenges = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('challenges');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="retreat-hero retreat-geo-grid">
      <ContourLinesTopRight opacity={0.3} />
      <DashedCurveLeft opacity={0.35} />
      <SweepingDashedLine />

      <div className="retreat-container">
        <div className="retreat-hero-content">
          
          {/* Progression Breadcrumb */}
          <div className="retreat-progression-pill">
            <span>Experience</span>
            <span>→</span>
            <span>Challenge</span>
            <span>→</span>
            <span>Reflection</span>
            <span>→</span>
            <span>Insight</span>
            <span>→</span>
            <span style={{ color: 'var(--brand-accent-coral)', fontWeight: 700 }}>Transformation</span>
          </div>

          <div className="retreat-tag">
            <ShieldCheck size={16} />
            AX Ventures Founders Experience
          </div>

          <h1 className="retreat-hero-h1">
            FOUNDERS <span className="blue-highlight">RETREAT</span>
          </h1>

          <div className="retreat-hero-sub">
            Immersive Founder Simulation & High-Pressure Capability Lab
          </div>

          {/* Core Principle Callout */}
          <div className="retreat-core-principle-box">
            <div className="retreat-principle-label">Core Operating Principle</div>
            <p className="retreat-principle-text">
              <strong>Experience before explanation.</strong> Instead of lectures or theory, founders encounter practical situations, make high-stakes decisions, navigate extreme constraints, and experience the real consequences of their choices.
            </p>
          </div>

          {/* Quick Metrics / Format Bar */}
          <div className="retreat-stats-bar">
            <div className="retreat-stat-card">
              <div className="retreat-stat-icon">
                <Users size={22} />
              </div>
              <div>
                <h4 className="retreat-stat-title">12 Founders Only</h4>
                <p className="retreat-stat-sub">3 Groups × 4 Founders</p>
              </div>
            </div>

            <div className="retreat-stat-card">
              <div className="retreat-stat-icon">
                <Flame size={22} />
              </div>
              <div>
                <h4 className="retreat-stat-title">6 Core Challenges</h4>
                <p className="retreat-stat-sub">Action-driven simulations</p>
              </div>
            </div>

            <div className="retreat-stat-card">
              <div className="retreat-stat-icon">
                <Zap size={22} />
              </div>
              <div>
                <h4 className="retreat-stat-title">Zero Lectures</h4>
                <p className="retreat-stat-sub">100% Practical Reality</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="retreat-cta-group">
            <button onClick={handleApply} className="retreat-btn-primary">
              Apply for the Retreat
              <ArrowRight size={18} />
            </button>
            <a href="#challenges" onClick={scrollToChallenges} className="retreat-btn-secondary">
              Explore the 6 Challenges
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
