import React from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export const SummitExperience: React.FC = () => {
  const steps = [
    { time: '08:00 AM', title: 'Arrival & Welcome', desc: 'Check-in, grab your welcome kit, and start early conversations over coffee.' },
    { time: '08:30 AM', title: 'Split Zone Sessions', desc: 'Attendees split up into specialized operational zones (Marketing, Legal, and Sales) to work through focused execution briefs.' },
    { time: '11:30 AM', title: 'Main Stage Gathering', desc: 'Everyone gathers on the Main Stage for keynotes, builder panel talks, and tactical strategies.' },
    { time: '01:00 PM', title: 'Networking Lunch', desc: 'Enjoy lunch and dive into coffee conversations to build relationships in structured connection zones.' },
    { time: '02:30 PM', title: 'Founder Showcase', desc: 'Selected founders pitch their visions and startups to the room, creating visibility and opening doors.' },
    { time: '04:30 PM', title: 'Next Opportunities', desc: 'Final connections, strategic handshakes, and next-step alignment to close the day.' },
  ];

  const experiences = [
    { title: 'Build Relationships', desc: 'Meet founders building across different industries. Exchange ideas. Solve problems together. Discover future collaborations.' },
    { title: 'Learn From Real Builders', desc: 'Hear practical lessons from entrepreneurs, operators and business leaders who understand what it actually takes to build.' },
    { title: 'Expand Your Network', desc: 'Every meaningful company is built through people. Meet future collaborators, service providers, experienced founders, and ecosystem partners.' },
    { title: 'Showcase Your Vision', desc: 'Selected founders will have opportunities to introduce themselves and their businesses to the community, creating visibility and opening doors for future conversations.' },
    { title: 'Discover New Opportunities', desc: 'Every founder arrives with questions. Many leave with introductions, partnerships, conversations and possibilities they didn\'t expect.' },
  ];

  return (
    <section className="summit-section" style={{ backgroundColor: '#ffffff', color: '#0f0f14', padding: '120px 24px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="summit-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Timeline Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--v2v-black)' }}>The Founder Experience</h2>
          <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '640px', margin: '16px auto 0', lineHeight: 1.6 }}>
            This is not a conference. This is a founder experience. Your day (starting July 25, 8:00 AM) is designed to create momentum.
          </p>
        </div>

        {/* Path Flow / Timeline */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px', 
          maxWidth: '800px', 
          margin: '0 auto 80px' 
        }}>
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '140px 1fr', 
                gap: '24px', 
                backgroundColor: '#fcfaff', 
                padding: '24px', 
                borderRadius: '8px', 
                border: '1.5px solid rgba(0, 0, 0, 0.05)' 
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--v2v-purple)' }}>{step.time}</div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--v2v-black)', margin: '0 0 8px 0' }}>{step.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555', margin: 0, lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--v2v-purple)' }}>
                  <ArrowDown size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 100px', fontWeight: 700, fontSize: '1.25rem', color: 'var(--v2v-black)', lineHeight: 1.6 }}>
          By the time you leave, you'll know more people, discover new opportunities and gain perspectives that would normally take months to build.
        </p>

        {/* Grid Experience */}
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--v2v-black)', textAlign: 'center', marginBottom: '56px' }}>What You Will Experience</h2>
        
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
              borderRadius: '8px',
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px',
              gridColumn: i === experiences.length - 1 ? '1 / -1' : 'auto'
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
