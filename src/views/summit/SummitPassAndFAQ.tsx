import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="summit-section" style={{ backgroundColor: 'var(--summit-blue)', color: 'white' }}>
      <div className="summit-container">
        
        {/* Founder Pass Pricing Block */}
        <div className="summit-pass-card">
          <h2 className="summit-pass-title">FOUNDER PASS</h2>
          <div className="summit-pass-price">₹1,499</div>
          
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
          
          <button className="summit-btn-primary" style={{ width: '100%' }}>Reserve My Founder Pass</button>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: '120px' }}>
          <h2 className="summit-section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          
          <div className="summit-faq-list">
            {faqItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`summit-faq-item ${openIdx === idx ? 'open' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="summit-faq-header">
                  <h4 className="summit-faq-q">{item.q}</h4>
                  {openIdx === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {openIdx === idx && (
                  <div className="summit-faq-a">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
