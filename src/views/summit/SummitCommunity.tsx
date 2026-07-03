import React from 'react';

const communityItems = [
  { num: '01', group: 'STARTUP TEAMS', benefit: 'Early-stage builders collaborating on scaling, operations, and product-market fit.' },
  { num: '02', group: 'EXPERIENCED FOUNDERS', benefit: 'Second-time entrepreneurs sharing battle-tested strategies and execution systems.' },
  { num: '03', group: 'BUSINESS LEADERS', benefit: 'High-growth operators providing corporate insights and strategic commercial opportunities.' },
  { num: '04', group: 'TECHNOLOGY LEADERS', benefit: 'CTOs, engineers, and product builders designing future software and infrastructure.' },
  { num: '05', group: 'COMMUNITY BUILDERS', benefit: 'Ecosystem enablers opening doors to networks, accelerators, and growth advisors.' },
  { num: '06', group: 'STRATEGIC PARTNERS', benefit: 'Service providers offering legal, financial, and marketing growth infrastructure.' },
];

export const SummitCommunity: React.FC = () => {
  return (
    <section className="summit-section" style={{ 
      background: 'linear-gradient(135deg, #ffffff 0%, #fbfaff 100%)', 
      color: '#0f0f14',
      padding: '120px 24px',
      position: 'relative',
      borderTop: '1px solid rgba(0, 0, 0, 0.05)'
    }}>
      <div className="summit-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '80px',
          width: '100%' 
        }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 900, 
            letterSpacing: '-0.03em',
            margin: 0,
            lineHeight: 1.1,
            color: 'var(--v2v-black)'
          }}>
            Who You'll<br />Meet
          </h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'right' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.05em', color: 'var(--v2v-purple)' }}>AX ECOSYSTEM</span>
              <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 600 }}>Active Cohorts</span>
            </div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--v2v-purple)', opacity: 0.8 }}></div>
          </div>
        </div>

        {/* 2-Column TOC Grid for Who You'll Meet */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: '48px 64px', 
          width: '100%', 
          marginBottom: '80px' 
        }}>
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {communityItems.slice(0, 3).map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  paddingTop: '20px', 
                  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(6px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <span style={{ 
                  fontSize: '3.5rem', 
                  fontWeight: 300, 
                  color: 'var(--v2v-purple)', 
                  marginRight: '24px',
                  lineHeight: 1,
                  fontFamily: 'sans-serif',
                  width: '60px'
                }}>
                  {item.num}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.05em', 
                    color: 'var(--v2v-black)',
                    textTransform: 'uppercase',
                    margin: 0
                  }}>
                    {item.group}
                  </h3>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: '#555', 
                    margin: 0,
                    lineHeight: 1.4 
                  }}>
                    {item.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {communityItems.slice(3, 6).map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  paddingTop: '20px', 
                  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(6px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <span style={{ 
                  fontSize: '3.5rem', 
                  fontWeight: 300, 
                  color: 'var(--v2v-purple)', 
                  marginRight: '24px',
                  lineHeight: 1,
                  fontFamily: 'sans-serif',
                  width: '60px'
                }}>
                  {item.num}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.05em', 
                    color: 'var(--v2v-black)',
                    textTransform: 'uppercase',
                    margin: 0
                  }}>
                    {item.group}
                  </h3>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: '#555', 
                    margin: 0,
                    lineHeight: 1.4 
                  }}>
                    {item.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Accent Line */}
        <div style={{ 
          borderTop: '2px solid rgba(0,0,0,0.1)', 
          paddingTop: '24px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          width: '100%' 
        }}>
          <span style={{ 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            letterSpacing: '0.1em', 
            color: '#888',
            textTransform: 'uppercase'
          }}>
            Ecosystem Directory
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '1.2rem', color: '#ff5722' }}>◆</span>
            <span style={{ fontSize: '1.2rem', color: 'var(--v2v-purple)' }}>◆</span>
            <span style={{ fontSize: '1.2rem', color: '#888' }}>◆</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 900, marginLeft: '8px', color: 'var(--v2v-purple)', cursor: 'pointer' }}>→</span>
          </div>
        </div>

      </div>
    </section>
  );
};
