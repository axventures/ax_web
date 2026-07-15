import React from 'react';
import { Camera, Coffee, Compass, Monitor, Users, Layers, MessageSquare, Map } from 'lucide-react';

export const SummitVenue: React.FC = () => {
  const features = [
    { title: 'Large Main Stage', desc: 'Hear direct founder keynotes, ecosystem presentations and partner panels on the main stage.', icon: <Monitor size={24} /> },
    { title: 'Networking Lounge', desc: 'Interact with registered founders, operators and advisors in a comfortable lounge setup.', icon: <Users size={24} /> },
    { title: 'Founder Showcase Area', desc: 'Spotlighting innovative startups, allowing selected teams to display their products.', icon: <Layers size={24} /> },
    { title: 'Partner Exhibition', desc: 'Discover software tools, resources, and services tailored directly for early-stage companies.', icon: <Compass size={24} /> },
    { title: 'Interactive Sessions', desc: 'Work through legal, sales, and marketing briefs in group roundtable workshops.', icon: <MessageSquare size={24} /> },
    { title: 'Coffee Conversations', desc: 'No generic talks. Engage in direct 1-on-1 dialogues over high-quality local coffee.', icon: <Coffee size={24} /> },
    { title: 'Photo Experience', desc: 'Get professional headshots and high-quality photography captures at the event.', icon: <Camera size={24} /> },
    { title: 'Business Connection Zones', desc: 'Dedicated breakout zones to align partnerships, check credentials and sign agreements.', icon: <Map size={24} /> },
  ];

  return (
    <section className="venue-section" style={{ 
      padding: '96px 24px', 
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff'
    }}>
      <div className="summit-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 2.8rem)', 
          fontWeight: 900, 
          textTransform: 'uppercase', 
          color: 'var(--v2v-black)',
          textAlign: 'center',
          marginBottom: '16px'
        }}>Experience The Venue</h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555', 
          maxWidth: '600px', 
          margin: '0 auto 56px',
          textAlign: 'center',
          lineHeight: 1.5
        }}>This is a space designed for conversations—not just presentations.</p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px' 
        }}>
          {features.map((feat, i) => (
            <div key={i} style={{ 
              padding: '24px', 
              backgroundColor: '#ffffff', 
              border: '1.5px solid rgba(0, 0, 0, 0.06)', 
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ color: 'var(--v2v-purple)' }}>
                {feat.icon}
              </div>
              <h4 style={{ 
                fontSize: '1.1rem', 
                fontWeight: 800, 
                color: 'var(--v2v-black)',
                textTransform: 'uppercase',
                margin: 0
              }}>{feat.title}</h4>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#666', 
                margin: 0,
                lineHeight: 1.5
              }}>{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
