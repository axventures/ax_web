import React from 'react';
import { Users2, Shield, Crosshair, Sparkles } from 'lucide-react';
import { ContourLinesTopRight, DashedCurveLeft } from '../components/DecorativeLines';

export const RetreatCohortStructure: React.FC = () => {
  return (
    <section className="retreat-section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <ContourLinesTopRight opacity={0.2} />
      <DashedCurveLeft opacity={0.25} />

      <div className="retreat-container">
        
        {/* Section Header */}
        <div className="retreat-section-header">
          <div className="retreat-tag">
            <Users2 size={16} />
            Cohort Architecture
          </div>
          <h2 className="retreat-title">
            Strict Limit: 12 Founders Only
          </h2>
          <p className="retreat-subtitle">
            Engineered for high density and maximum accountability. Every participant is in the arena at every single minute.
          </p>
        </div>

        {/* Cohort Structure Container */}
        <div className="cohort-structure-box">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 12px 0' }}>
              3 Squads × 4 Founders
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
              Large conferences allow founders to hide in the back of the room. At the AX Founders Retreat, each squad operates as an autonomous startup unit with zero room for spectator mode.
            </p>
          </div>

          {/* 3 Squads Visualizer */}
          <div className="cohort-squads-visual">
            {[1, 2, 3].map((squadNum) => (
              <div key={squadNum} className="squad-card">
                <div className="squad-title">
                  SQUAD 0{squadNum}
                </div>
                
                <div className="squad-avatars">
                  {['F1', 'F2', 'F3', 'F4'].map((founderId, idx) => (
                    <div key={idx} className="founder-avatar-slot" title={`Founder 0${idx + 1}`}>
                      {founderId}
                    </div>
                  ))}
                </div>

                <div className="squad-capacity">
                  4 High-Agency Founders
                </div>
              </div>
            ))}
          </div>

          {/* 3 Core Operating Rules */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginTop: '40px',
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            paddingTop: '32px'
          }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Shield size={20} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h5 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Zero Coaching During Action</h5>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>AX observes naturally rather than pointing out answers.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Crosshair size={20} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h5 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Unexpected Twists</h5>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>Mid-challenge disruptions test agility under real crisis.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Sparkles size={20} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h5 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Equal Ground</h5>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>All founders operate under identical resource and time limits.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
