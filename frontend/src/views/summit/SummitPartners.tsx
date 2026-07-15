import React from 'react';

export const SummitPartners: React.FC = () => {
  const categories = [
    { title: 'Brand Stories & Services', desc: 'Accelerating startup growth with essential infrastructure, cloud credits, and operational assistance.' },
    { title: 'Ecosystem Facilitators', desc: 'Enabling network connectivity, corporate pilot gates, and capital access pathways.' }
  ];

  return (
    <section className="partners-section" style={{ 
      padding: '96px 24px', 
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fbfaff'
    }}>
      <div className="summit-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 2.8rem)', 
          fontWeight: 900, 
          textTransform: 'uppercase', 
          color: 'var(--v2v-black)',
          textAlign: 'center',
          marginBottom: '16px'
        }}>Our Partners</h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555', 
          maxWidth: '600px', 
          margin: '0 auto 56px',
          textAlign: 'center',
          lineHeight: 1.5
        }}>This event is supported by organizations that believe in entrepreneurship, innovation, and founder-led growth.</p>

        {/* Logo grid placeholder */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '24px',
          marginBottom: '56px' 
        }}>
          {['Stripe', 'Google Cloud', 'AWS', 'HubSpot'].map((partner, i) => (
            <div key={i} style={{ 
              height: '100px', 
              backgroundColor: '#ffffff', 
              border: '1.5px solid rgba(0,0,0,0.06)', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              fontWeight: 800,
              color: '#bbb',
              letterSpacing: '0.05em'
            }}>
              {partner}
            </div>
          ))}
        </div>

        {/* Partner Profiles / Services description */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px' 
        }}>
          {categories.map((cat, i) => (
            <div key={i} style={{ 
              padding: '32px', 
              backgroundColor: '#ffffff', 
              border: '1.5px solid rgba(0,0,0,0.06)', 
              borderRadius: '8px'
            }}>
              <h4 style={{ 
                fontSize: '1.15rem', 
                fontWeight: 800, 
                color: 'var(--v2v-black)',
                textTransform: 'uppercase',
                margin: '0 0 12px 0' 
              }}>{cat.title}</h4>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#666', 
                margin: 0,
                lineHeight: 1.5
              }}>{cat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
