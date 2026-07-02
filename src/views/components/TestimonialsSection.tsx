import React, { useRef, useState } from 'react';
import { WaveLinesBottomRight, ScatteredDots } from './DecorativeLines';

interface Testimonial {
  id: string;
  quote: string;
  body: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'We don\'t simply advise founders.',
    body: 'We went from scattered execution to building real systems that actually scale. The structure and support made all the difference.',
    role: 'Co-Founder',
    company: 'TechBridge Africa',
  },
  {
    id: 'testimonial-2',
    quote: 'We become operational partners in helping them build stronger companies.',
    body: 'The frameworks and guidance helped us align our team and focus on what truly moves the needle. Incredibly transformative.',
    role: 'CEO',
    company: 'NovaPay Solutions',
  },
  {
    id: 'testimonial-3',
    quote: 'We focus on execution, accountability, systems, and long-term value creation.',
    body: 'We turned vague ideas into actionable plans and designs in record time. Our execution velocity tripled within months.',
    role: 'Founder',
    company: 'GreenRoot Labs',
  }
];

export const TestimonialsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative line drawings */}
      <WaveLinesBottomRight />
      <ScatteredDots />
      <div className="testimonials-container">

        {/* Header Row */}
        <div className="testimonials-header">
          <div className="testimonials-header-left">
            <h2 className="testimonials-title" id="testimonials-heading">
              Why <em>build</em> with AX?
            </h2>
          </div>
          <div className="testimonials-header-right">
            <p className="testimonials-subtitle">
              From early-stage founders refining their vision to experienced operators scaling with confidence,
              AX Ventures helps real people build real companies.
              <br />Here's how they describe the difference.
            </p>
          </div>
        </div>

        {/* Cards Track */}
        <div className="testimonials-track" ref={trackRef}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              id={t.id}
              className={`testimonial-card${hoveredIndex === i ? ' testimonial-card--active' : ''}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              role="article"
              aria-label={`Testimonial from ${t.role} at ${t.company}`}
            >
              {/* Gradient overlay shown on hover */}
              <div className="testimonial-card-gradient" aria-hidden="true" />

              {/* Content */}
              <div className="testimonial-card-content">
                <blockquote className="testimonial-quote">
                  {t.quote}
                </blockquote>
              </div>

              {/* Footer — role & company only, no avatar/name */}
              <div className="testimonial-footer">
                <div className="testimonial-meta">
                  <span className="testimonial-role">{t.role}</span>
                  <span className="testimonial-company">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
