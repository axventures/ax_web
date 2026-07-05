import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContourLinesTopRight, SweepingDashedLine } from './DecorativeLines';

const accordionData = [
  {
    id: 1,
    title: "Who is this for?",
    subtitle: "5 founder types",
    content: [
      { title: "First-time founders", desc: "Navigating the startup ecosystem for the first time." },
      { title: "Early-stage startups", desc: "Pre-seed and seed stage companies looking to scale." },
      { title: "Technical founders", desc: "Engineers transitioning into CEO and leadership roles." },
      { title: "Student founders", desc: "Building from campus to company." },
      { title: "Startup teams", desc: "Co-founders seeking alignment and execution frameworks." }
    ],
    type: 'list'
  },
  {
    id: 2,
    title: "What You Can Expect",
    subtitle: "8 key expectations",
    content: [
      { title: "Founder clarity", desc: "Absolute certainty in your mission and vision." },
      { title: "Business validation", desc: "Rigorous testing of your core assumptions." },
      { title: "Leadership development", desc: "Transitioning from builder to leader." },
      { title: "Market understanding", desc: "Deep insights into your ICP and TAM." },
      { title: "Team alignment", desc: "Frameworks for building culture and momentum." },
      { title: "Execution systems", desc: "Operating rhythms that guarantee progress." },
      { title: "Growth planning", desc: "Scalable acquisition and retention models." },
      { title: "Investor readiness", desc: "Pitching and positioning for your next round." }
    ],
    type: 'list'
  },
  {
    id: 3,
    title: "Outcomes",
    subtitle: "6 results",
    content: [
      { title: "Clear business direction", desc: "A definitive roadmap for the next 12-18 months." },
      { title: "Structured execution", desc: "KPIs and OKRs embedded in your daily workflow." },
      { title: "Operational discipline", desc: "Systems that work even when you are asleep." },
      { title: "Leadership confidence", desc: "The ability to hire, fire, and manage with conviction." },
      { title: "Scalable systems", desc: "Tech and operational stacks built for growth." },
      { title: "Investment readiness", desc: "A compelling narrative backed by solid metrics." }
    ],
    type: 'list'
  },
  {
    id: 4,
    title: "Current Founder Cohort",
    subtitle: "Active founders",
    content: [
      { company: "ArkytUP", founder: "Basil Mishaal Mathew", industry: "Extended Reality", stage: "Revenue Stage" },
      { company: "Tomome", founder: "Anees", industry: "Pregnancy & Parenting", stage: "Revenue Stage" },
      { company: "Kori", founder: "Muhammed Hafis", industry: "Food & Beverage", stage: "Idea Stage" },
      { company: "Servewise Solutions Pvt. Ltd.", founder: "Aravind Sekhar", industry: "Software Development / Service Marketplace", stage: "MVP Stage" }
    ],
    type: 'table'
  }
];

interface FounderReadinessProps {
  onApplyClick?: () => void;
}

export const FounderReadinessSection: React.FC<FounderReadinessProps> = ({ onApplyClick }) => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="readiness" className="readiness-section">
      {/* Decorative brand elements */}
      <ContourLinesTopRight opacity={0.1} />
      <SweepingDashedLine />

      <div className="readiness-container">
        <h2 className="readiness-heading">Founder Readiness</h2>
        
        <div className="readiness-accordion-list">
          {accordionData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`readiness-accordion-item ${isOpen ? 'is-open' : ''}`}
              >
                <div 
                  className="readiness-accordion-header" 
                  onClick={() => toggleAccordion(item.id)}
                >
                  <h3 className="readiness-item-title">
                    <span className="readiness-item-num">{item.id}.</span> {item.title}
                  </h3>
                  <div className="readiness-item-meta">
                    {item.subtitle} <span className="readiness-meta-icon">✳</span>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="readiness-accordion-content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {item.type === 'list' ? (
                        <div className="readiness-content-grid">
                          {(item.content as {title: string, desc: string}[]).map((c, idx) => (
                            <div key={idx} className="readiness-content-cell">
                              <h4 className="readiness-cell-title">{c.title}</h4>
                              <p className="readiness-cell-desc">{c.desc}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="readiness-cohort-table">
                          <div className="cohort-header">
                            <div>Company</div>
                            <div>Founder</div>
                            <div>Industry</div>
                            <div>Current Stage</div>
                          </div>
                          {(item.content as {company: string, founder: string, industry: string, stage: string}[]).map((c, idx) => (
                            <div key={idx} className="cohort-row">
                              <div className="cohort-company">{c.company}</div>
                              <div>{c.founder}</div>
                              <div>{c.industry}</div>
                              <div>{c.stage}</div>
                            </div>
                          ))}
                          <div className="cohort-updated">(Updated regularly)</div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="readiness-footer-action">
          <button className="readiness-apply-btn" onClick={onApplyClick}>
            APPLY FOR FOUNDER READINESS 
            <span className="readiness-btn-arrow">→</span>
            <div className="readiness-btn-circle">↓</div>
          </button>
        </div>
      </div>
    </section>
  );
};
