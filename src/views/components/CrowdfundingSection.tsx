import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Network } from 'lucide-react';

export const CrowdfundingSection: React.FC = () => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnswerVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (answerRef.current) {
      observer.observe(answerRef.current);
    }

    return () => {
      if (answerRef.current) {
        observer.unobserve(answerRef.current);
      }
    };
  }, []);

  return (
    <section className="why-ax-section" id="crowdfunding">
      {/* 1. Large Centered Question Block */}
      <div className="why-ax-question-block">
        <h2 className="why-ax-question-title">
          Why <span className="blue-highlight">AX</span> Exist?
        </h2>
        
        {/* Animated Bouncing Scroll Indicator */}
        <div className="why-ax-scroll-prompt">
          <div className="bouncing-arrow-wrapper">
            <ChevronDown size={28} className="bouncing-arrow" />
          </div>
        </div>
      </div>

      {/* 2. Scroll-Revealed Answer Block */}
      <div 
        ref={answerRef} 
        className={`why-ax-answer-block ${isAnswerVisible ? 'revealed' : ''}`}
      >
        <div className="why-ax-answer-container">
          <div className="why-ax-answer-content">
            <p className="answer-lead-text">
              Most startups don't fail because founders lack ideas. 
              They fail because they lack the systems, structure, leadership, execution discipline, and support required to build sustainable companies.
            </p>
            <p className="answer-body-text">
              AX Ventures exists to change that. We work alongside founders to help them build stronger businesses through structured execution, strategic partnerships, operational systems, and founder development.
            </p>
            <div className="answer-divider" />
          </div>
          
          <div className="why-ax-answer-visual">
            {/* Subtle AX Logo Shadow in background */}
            <div className="why-ax-logo-shadow-bg">
              <img
                src="/ax_logo.jpg"
                alt=""
                className="why-ax-logo-shadow-image"
              />
            </div>
            
            {/* Simple clean interactive icon */}
            <div className="why-ax-icon-wrapper">
              <Network size={64} className="why-ax-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrowdfundingSection;
