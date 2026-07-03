import React from 'react';

const attendees = [
  'Startup Teams',
  'Experienced Entrepreneurs',
  'Business Leaders',
  'Industry Experts',
  'Technology Partners',
  'Legal & Finance Professionals',
  'Marketing Experts',
  'Community Builders',
  'Innovation Partners',
];

const mockFounders = [
  { name: 'Arjun M', company: 'BuildFast', industry: 'SaaS', city: 'Bangalore', stage: 'Seed', intro: 'Excited to meet fellow builders.' },
  { name: 'Sarah K', company: 'FinEdge', industry: 'Fintech', city: 'Kochi', stage: 'Series A', intro: 'Looking for scale strategies.' },
  { name: 'Rahul V', company: 'HealthSync', industry: 'Healthtech', city: 'Chennai', stage: 'Pre-Seed', intro: 'Building the future of care.' },
  { name: 'Nita P', company: 'EcoLogistics', industry: 'Supply Chain', city: 'Mumbai', stage: 'Bootstrapped', intro: 'Here to find partners.' },
  { name: 'Aditya S', company: 'EduNext', industry: 'EdTech', city: 'Delhi', stage: 'Seed', intro: 'Connecting with innovators.' },
  { name: 'Kiran D', company: 'AI Core', industry: 'AI/ML', city: 'Hyderabad', stage: 'Series A', intro: 'Excited to meet fellow builders.' },
];

export const SummitCommunity: React.FC = () => {
  return (
    <section className="summit-section summit-bg-white">
      <div className="summit-container">
        
        <div className="summit-split-layout">
          
          {/* Who You'll Meet */}
          <div className="summit-split-col">
            <h2 className="summit-section-title dark-text">Who You'll Meet</h2>
            <p className="summit-body-text dark-text">
              Every attendee becomes part of the experience.
            </p>
            
            <h3 className="summit-subtitle dark-text">Growing Founder Community</h3>
            <ul className="summit-checklist dark-text">
              {attendees.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Founders Already Joining */}
          <div className="summit-split-col">
            <h2 className="summit-section-title dark-text">Founders Already Joining</h2>
            <p className="summit-body-text dark-text">
              Every registered founder appears automatically after completing registration. The Founder Wall grows every day until the event.
            </p>
            
            <div className="summit-founder-wall">
              {mockFounders.map((founder, idx) => (
                <div key={idx} className="summit-founder-card">
                  <div className="summit-founder-avatar"></div>
                  <h4 className="summit-founder-name">{founder.name}</h4>
                  <p className="summit-founder-company">{founder.company}</p>
                  
                  <div className="summit-founder-tags">
                    <span className="summit-founder-tag">{founder.industry}</span>
                    <span className="summit-founder-tag">{founder.stage}</span>
                  </div>
                  
                  <p className="summit-founder-intro">"{founder.intro}"</p>
                  <p className="summit-founder-city">📍 {founder.city}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
