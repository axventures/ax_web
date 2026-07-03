import React from 'react';

const partners = ['TechNexus', 'Kerala Startup Mission', 'AWS Startups', 'Google Cloud', 'HubSpot', 'Stripe'];
const venueFeatures = [
  'Large Main Stage',
  'Networking Lounge',
  'Founder Showcase Area',
  'Partner Exhibition',
  'Interactive Sessions',
  'Coffee Conversations',
  'Photo Experience',
  'Business Connection Zones'
];

export const SummitVenueAndPartners: React.FC = () => {
  return (
    <section className="summit-section" style={{ backgroundColor: 'var(--summit-white)' }}>
      <div className="summit-container">
        
        {/* Partners Section */}
        <div style={{ marginBottom: '100px', textAlign: 'center' }}>
          <h2 className="summit-section-title dark-text">Our Partners</h2>
          <p className="summit-body-text dark-text" style={{ maxWidth: '800px', margin: '0 auto 48px' }}>
            This event is supported by organizations that believe in entrepreneurship, innovation and founder-led growth.
          </p>
          
          <div className="summit-partner-grid">
            {partners.map((partner, idx) => (
              <div key={idx} className="summit-partner-logo">
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Venue Section */}
        <div className="summit-split-layout">
          
          <div className="summit-split-col" style={{ justifyContent: 'center' }}>
            <h2 className="summit-section-title dark-text">Experience The Venue</h2>
            <p className="summit-body-text dark-text">
              This is a space designed for conversations—not just presentations.
            </p>
          </div>
          
          <div className="summit-split-col">
            <ul className="summit-venue-list">
              {venueFeatures.map((feature, idx) => (
                <li key={idx} className="summit-venue-item">{feature}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
