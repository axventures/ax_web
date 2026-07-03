import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';

export const SummitFooter: React.FC = () => {
  return (
    <footer className="summit-section summit-geo-bg" style={{ paddingBottom: '40px' }}>
      <div className="summit-container">
        
        {/* Final CTA */}
        <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px' }}>
          <h2 className="summit-hero-headline" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '32px' }}>
            Every founder remembers the room where everything started.
          </h2>
          
          <div className="summit-bullet-group" style={{ alignItems: 'center', margin: '0 auto 32px' }}>
            <span className="summit-bullet">The next conversation.</span>
            <span className="summit-bullet">The next partnership.</span>
            <span className="summit-bullet">The next opportunity.</span>
          </div>
          
          <p className="summit-bold-statement" style={{ marginBottom: '16px' }}>It could begin here.</p>
          <p className="summit-body-text" style={{ marginBottom: '40px' }}>
            Join a room filled with people who are building, learning and growing together.
          </p>
          
          <div className="summit-hero-actions" style={{ marginBottom: '16px' }}>
            <button className="summit-btn-primary">Reserve Your Seat - ₹1,499</button>
          </div>
          <p style={{ fontWeight: 700, color: 'var(--summit-accent)' }}>Only 100 seats available.</p>
        </div>

        {/* Footer Meta / Contact */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '60px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>CONTACT</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>Questions about registration? Our team is here to help.</p>
            
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="#" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><MessageCircle size={20} /> WhatsApp</a>
              <a href="#" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Mail size={20} /> Email</a>
              <a href="#" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Phone size={20} /> Phone</a>
              <a href="https://instagram.com/axventuresindia" target="_blank" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Instagram size={20} /> Instagram</a>
              <a href="https://linkedin.com/company/ax-venture-studio" target="_blank" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Linkedin size={20} /> LinkedIn</a>
            </div>
          </div>
          
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} AX Ventures. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
