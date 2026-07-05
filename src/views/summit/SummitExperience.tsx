import React from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export const SummitExperience: React.FC = () => {
  const zones = [
    { time: '08:00 AM', phase: 'Phase 01', title: 'Arrival & The Starting Trouble', desc: 'Step into the initial chaos of building. A designated zone where you experience the raw, unfiltered reality of starting up alongside experts who have navigated it.' },
    { time: '08:30 AM', phase: 'Phase 02', title: 'Execution & Operations', desc: 'No lectures here. Engage in hands-on problem solving with operational experts. Understand systems by tearing them down and rebuilding them together.' },
    { time: '11:30 AM', phase: 'Phase 03', title: 'The Funding Reality', desc: 'Experience the pressure of pitching, not on a stage, but in intensive, direct interaction zones with those who write the checks.' },
    { time: '01:00 PM', phase: 'Phase 04', title: 'Strategic Connections', desc: 'A designated time to build relationships in structured connection zones, focusing on future collaborations and partnerships.' },
    { time: '02:30 PM', phase: 'Phase 05', title: 'Scaling Challenges', desc: 'A miniature journey through the growing pains of a startup. Communicate and strategize with leaders who have scaled teams from 10 to 100.' },
    { time: '04:30 PM', phase: 'Phase 06', title: 'Next Opportunities', desc: 'Final connections, strategic handshakes, and next-step alignment to close the experiential journey.' },
  ];

  const experiences = [
    { title: 'Interactive Zones, No Stages', desc: 'Forget traditional stages and passive listening. Move through immersive zones designed to simulate real business challenges.' },
    { title: 'Communicate with Experts', desc: 'Instead of speakers talking at you, our experts are inside the zones with you—ready to communicate, problem-solve, and guide you through the experience.' },
    { title: 'A Miniature Founder Journey', desc: 'Every step of the event is carefully crafted to mirror the actual timeline of building a startup, condensing years of experience into a single day.' },
    { title: 'Discover True Capabilities', desc: 'By experiencing the challenges firsthand rather than just hearing about them, you will uncover blind spots and unlock new approaches to your business.' },
  ];

  return (
    <section className="summit-section" style={{ backgroundColor: '#ffffff', color: '#0f0f14', padding: '120px 24px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="summit-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--v2v-black)' }}>An Experience, Not A Conference</h2>
          <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', margin: '16px auto 0', lineHeight: 1.6 }}>
            We've removed the traditional speakers, teaching sessions, and passive timelines. This is a miniature journey through the struggles and triumphs of founding a company, brought to life through interactive experience zones.
          </p>
        </div>

        {/* Path Flow / Aesthetic Timeline */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          maxWidth: '800px', 
          margin: '0 auto 100px',
          position: 'relative'
        }}>
          {zones.map((zone, idx) => (
            <div key={idx} style={{ display: 'flex', position: 'relative', paddingBottom: idx < zones.length - 1 ? '40px' : '0' }}>
              
              {/* Timeline Line */}
              {idx < zones.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '139px', // 140px width - 1px for center
                  top: '36px',
                  bottom: '0',
                  width: '2px',
                  backgroundColor: 'rgba(24, 1, 173, 0.15)',
                  zIndex: 1
                }} />
              )}
              
              {/* Timeline Left: Time & Phase */}
              <div style={{
                width: '140px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                paddingRight: '32px',
                position: 'relative',
                zIndex: 2,
                paddingTop: '20px'
              }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--v2v-black)' }}>{zone.time}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--v2v-purple)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '6px' }}>{zone.phase}</div>
                
                {/* Connector Dot */}
                <div style={{
                  position: 'absolute',
                  right: '-7px',
                  top: '24px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--v2v-purple)',
                  boxShadow: '0 0 0 6px rgba(24, 1, 173, 0.1)'
                }} />
              </div>

              {/* Timeline Right: Content Card */}
              <div style={{ 
                flexGrow: 1,
                backgroundColor: '#fcfaff', 
                padding: '32px', 
                borderRadius: '16px', 
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.03)',
                position: 'relative',
                zIndex: 2
              }}>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--v2v-black)', margin: '0 0 12px 0' }}>{zone.title}</h4>
                <p style={{ fontSize: '1.05rem', color: '#555', margin: 0, lineHeight: 1.6 }}>{zone.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 100px', fontWeight: 700, fontSize: '1.25rem', color: 'var(--v2v-black)', lineHeight: 1.6 }}>
          By navigating these experiential zones, you don't just learn about building a company—you actively experience it alongside the experts.
        </p>

        {/* Grid Experience */}
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--v2v-black)', textAlign: 'center', marginBottom: '56px' }}>The Zone Experience</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '24px' 
        }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{ 
              padding: '32px', 
              backgroundColor: '#ffffff', 
              border: '1.5px solid rgba(0, 0, 0, 0.08)', 
              borderRadius: '12px',
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={24} style={{ color: 'var(--v2v-purple)', flexShrink: 0 }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--v2v-black)', margin: 0 }}>{exp.title}</h4>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#555', margin: 0, lineHeight: 1.5 }}>{exp.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
