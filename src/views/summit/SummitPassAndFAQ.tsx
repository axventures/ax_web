import React, { useState } from 'react';

const faqItems = [
  { q: "Who can attend?", a: "This summit is for active founders, startup teams, and early-stage entrepreneurs." },
  { q: "Is this only for startups?", a: "While heavily focused on scalable startups, traditional business owners and creative entrepreneurs are also welcome." },
  { q: "Can I attend without a company?", a: "Yes, if you are actively building an idea or plan to start a company soon." },
  { q: "What should I bring?", a: "A notebook, business cards (or a digital equivalent), and a willingness to meet people." },
  { q: "Is lunch included?", a: "Yes, lunch and refreshments are fully included with your Founder Pass." },
  { q: "Will I receive a certificate?", a: "Yes, all attendees will receive an official Event Certificate." },
  { q: "What should I wear?", a: "Smart casual or whatever you typically wear while building your business." },
  { q: "How do I receive my Founder Pass?", a: "Your digital pass will be emailed to you immediately upon successful registration." },
];

export const SummitPassAndFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [showTicket, setShowTicket] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && company) {
      setShowTicket(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Founder Pass Pricing Block & Invitation Form (Dark Section) */}
      <section id="register" className="summit-section" style={{ backgroundColor: 'var(--summit-blue)', color: 'white', padding: '120px 24px' }}>
        <div className="summit-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', maxWidth: '1100px', margin: '0 auto', alignItems: 'start' }}>
          
          {/* Pricing Pass Card */}
          <div className="summit-pass-card" style={{ height: '100%' }}>
            <h2 className="summit-pass-title">FOUNDER PASS</h2>
            <div className="summit-pass-price" style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900 }}>₹1,499</span>
              <span style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'line-through', fontWeight: 600 }}>₹2,000</span>
            </div>
            
            <h4 className="summit-pass-subtitle">Your Founder Pass Includes:</h4>
            <ul className="summit-pass-features">
              <li>Full-Day Summit Access</li>
              <li>Curated Founder Networking</li>
              <li>All Sessions</li>
              <li>Founder Welcome Kit</li>
              <li>Lunch & Refreshments</li>
              <li>Community Access</li>
              <li>Digital Resources</li>
              <li>Event Certificate</li>
              <li>Professional Event Photography</li>
              <li>Opportunities to Connect With Industry Leaders</li>
            </ul>
            
            <p className="summit-pass-note">
              Seats are intentionally limited to maintain the quality of conversations and networking. Once all Founder Passes are reserved, registrations will close.
            </p>
          </div>

          {/* Invitation Form & Printable Ticket */}
          <div style={{ backgroundColor: '#ffffff', color: '#0f0f14', padding: '40px', borderRadius: '12px', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
            {!showTicket ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px', color: '#0f0f14' }}>Request Pass</h3>
                <p style={{ color: '#55555d', fontSize: '0.95rem', margin: '0 0 12px 0' }}>Registration is exclusive to deep-tech founders, engineers, and executive builders.</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f0f14' }}>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Liam Vance" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ padding: '12px 16px', border: '1.5px solid rgba(0, 0, 0, 0.1)', borderRadius: '6px', fontSize: '1rem', outline: 'none' }}
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f0f14' }}>Work Email</label>
                  <input 
                    type="email" 
                    placeholder="e.g. liam@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: '12px 16px', border: '1.5px solid rgba(0, 0, 0, 0.1)', borderRadius: '6px', fontSize: '1rem', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f0f14' }}>Startup / Company Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. CoreLayer Systems" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    style={{ padding: '12px 16px', border: '1.5px solid rgba(0, 0, 0, 0.1)', borderRadius: '6px', fontSize: '1rem', outline: 'none' }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="summit-btn-primary" 
                  style={{ width: '100%', marginTop: '12px', padding: '16px 24px', cursor: 'pointer' }}
                >
                  Generate Access Pass
                </button>
              </form>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ border: '2.5px solid var(--v2v-purple)', borderRadius: '8px', backgroundColor: 'var(--v2v-black)', color: '#ffffff', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: 'var(--v2v-purple)', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.05em' }}>VISION TO VENTURES</span>
                    <span style={{ backgroundColor: '#10b981', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>VALIDATED</span>
                  </div>
                  <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', fontWeight: 600 }}>Attendee</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 700, marginTop: '2px' }}>{name}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', fontWeight: 600 }}>Startup</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 700, marginTop: '2px' }}>{company}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', fontWeight: 600 }}>Tier</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#10b981', marginTop: '2px' }}>All-Access Founder Pass</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderLeft: '1px dashed rgba(255,255,255,0.2)', paddingLeft: '20px' }}>
                      <div style={{ display: 'flex', gap: '2px', height: '60px', backgroundColor: '#ffffff', padding: '6px', borderRadius: '4px' }}>
                        <div style={{ width: '3px', height: '100%', backgroundColor: '#000' }}></div>
                        <div style={{ width: '1px', height: '100%', backgroundColor: '#000' }}></div>
                        <div style={{ width: '4px', height: '100%', backgroundColor: '#000' }}></div>
                        <div style={{ width: '2px', height: '100%', backgroundColor: '#000' }}></div>
                        <div style={{ width: '5px', height: '100%', backgroundColor: '#000' }}></div>
                        <div style={{ width: '1px', height: '100%', backgroundColor: '#000' }}></div>
                        <div style={{ width: '3px', height: '100%', backgroundColor: '#000' }}></div>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#888', marginTop: '8px', fontFamily: 'monospace', letterSpacing: '1px' }}>
                        #AX-{Math.floor(100000 + Math.random() * 900000)}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    onClick={handlePrint}
                    className="summit-btn-primary"
                    style={{ flex: 1, padding: '14px 20px', cursor: 'pointer' }}
                  >
                    Print Pass
                  </button>
                  <button 
                    onClick={() => {
                      setShowTicket(false);
                      setName('');
                      setEmail('');
                      setCompany('');
                    }}
                    style={{ 
                      flex: 1, 
                      padding: '14px 20px', 
                      backgroundColor: 'transparent', 
                      border: '2px solid #0f0f14', 
                      borderRadius: '60px', 
                      fontSize: '1rem', 
                      fontWeight: 800, 
                      cursor: 'pointer',
                      textTransform: 'uppercase'
                    }}
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section (White Full-Width Section) */}
      <section className="summit-faq-section">
        <div className="summit-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 900, 
            letterSpacing: '-0.03em', 
            textAlign: 'center', 
            color: '#0f0f14',
            marginBottom: '64px'
          }}>
            Frequently Asked Questions
          </h2>
          
          <div className="minimal-faq-list">
            {faqItems.map((item, idx) => {
              const numStr = (idx + 1).toString().padStart(2, '0');
              const isOpen = openIdx === idx;
              
              return (
                <div 
                  key={idx} 
                  className="minimal-faq-item"
                  onClick={() => toggleFAQ(idx)}
                >
                  <div className="minimal-faq-header">
                    <div className="minimal-faq-q-block">
                      <span className="minimal-faq-number">{numStr}</span>
                      <h4 className="minimal-faq-q">{item.q}</h4>
                    </div>
                    <div className="minimal-faq-icon">
                      {isOpen ? '−' : '+'}
                    </div>
                  </div>
                  
                  {isOpen && (
                    <>
                      <div className="minimal-faq-divider" />
                      <div className="minimal-faq-a">
                        <p style={{ margin: 0 }}>{item.a}</p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};
