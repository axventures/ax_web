import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

export const SummitAudience: React.FC = () => {
  const attendees = [
    'First-Time Founders', 'Startup Teams', 'Student Entrepreneurs', 
    'Product Builders', 'Business Owners', 'Freelancers', 
    'Creative Entrepreneurs', 'Technology Builders', 'Startup Operators'
  ];

  return (
    <section 
      className="summit-section summit-bg-white"
      style={{
        backgroundImage: 'url(/businessman_struggling.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundColor: 'rgba(255, 255, 255, 0.97)' // Very light overlay for max readability
      }}
    >
      <div className="summit-container">
        
        <div className="summit-split-layout">
          
          {/* Who Should Attend */}
          <motion.div 
            className="summit-split-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="summit-section-title dark-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)' }}>Who Should Attend?</h2>
            <p className="summit-body-text dark-text" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
              This summit is built for people who are actively building. Whether you're working on your first idea or growing an early-stage company, you'll find yourself surrounded by people solving similar challenges.
            </p>
            
            <h3 className="summit-subtitle dark-text" style={{ marginTop: '40px', marginBottom: '24px', fontSize: '1.4rem' }}>Perfect For:</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {attendees.map((item, idx) => (
                <div key={idx} style={{ 
                  padding: '10px 20px', 
                  border: '1.5px solid rgba(24, 1, 173, 0.2)', 
                  borderRadius: '30px', 
                  color: 'var(--v2v-black)', 
                  fontWeight: 700, 
                  fontSize: '0.95rem',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                }}>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Why This Summit Is Different */}
          <motion.div 
            className="summit-split-col summit-card-highlight"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: '48px', borderRadius: '24px', boxShadow: '0 24px 60px rgba(24,1,173,0.15)' }}
          >
            <h2 className="summit-section-title" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '40px' }}>Why This Summit<br/>Is Different</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '24px', borderRadius: '16px' }}>
                <div style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'line-through', marginBottom: '8px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <X size={16} /> Most events give you speeches.
                </div>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={24} color="#4ADE80" /> We create conversations.
                </div>
              </div>
              
              <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '24px', borderRadius: '16px' }}>
                <div style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'line-through', marginBottom: '8px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <X size={16} /> Most events give you visitors.
                </div>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={24} color="#4ADE80" /> We bring together builders.
                </div>
              </div>
              
              <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '24px', borderRadius: '16px' }}>
                <div style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'line-through', marginBottom: '8px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <X size={16} /> Most events end with applause.
                </div>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={24} color="#4ADE80" /> This one begins with relationships.
                </div>
              </div>
            </div>
            
            <p className="summit-body-text" style={{ marginTop: '32px', color: 'rgba(255,255,255,0.9)' }}>
              Every session, every interaction and every experience is intentionally designed to help founders connect with the people who can influence their journey.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
              {['No unnecessary hype.', 'No generic networking.', 'No passive audience.'].map((tag, i) => (
                <div key={i} style={{ 
                  padding: '8px 16px', 
                  backgroundColor: 'rgba(255,50,50,0.15)', 
                  color: '#FFA3A3', 
                  borderRadius: '8px', 
                  fontWeight: 700, 
                  fontSize: '0.9rem',
                  border: '1px solid rgba(255,50,50,0.3)'
                }}>
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
