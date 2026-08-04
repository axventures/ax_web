import React, { useState } from 'react';
import { Mail, Globe, SendHorizontal, Instagram, Linkedin, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FooterSection } from './components/FooterSection';
import { InteractiveTileGrid } from './components/InteractiveTileGrid';

const XIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to an API
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ fullName: '', contactNumber: '', email: '', message: '' });
    setFormData({ fullName: '', contactNumber: '', email: '', message: '' });
  };

  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="contact-page-wrapper hero-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        
        {/* Navigation Header */}
        <div style={{ position: 'relative', zIndex: 100 }}>
          <Navbar onApplyClick={() => navigate('/apply')} />
        </div>

        {/* Interactive tile grid — covers full background */}
        <div className="hero-grid-container" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <InteractiveTileGrid />
        </div>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '160px 24px 100px 24px', position: 'relative', zIndex: 10 }}>
          
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Back Link */}
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#64748b',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1801AD')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'flex-start' }}>
              
              {/* Left Column: Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '20px' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1801AD', margin: 0, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                  AX Ventures
                </h1>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a href="mailto:info@axventures.in" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1801AD'} onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}>
                    <Mail size={22} color="#1801AD" />
                    info@axventures.in
                  </a>
                  <a href="https://axventures.in" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1801AD'} onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}>
                    <Globe size={22} color="#1801AD" />
                    www.axventures.in
                  </a>
                </div>

                <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                  <a href="https://instagram.com/axventures.in" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <Instagram size={20} />
                  </a>
                  <a href="https://x.com/advisorxgrowth" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <XIcon />
                  </a>
                  <a href="https://linkedin.com/company/ax-venture-studio" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Right Column: Form Card */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 25px 50px -12px rgba(24, 1, 173, 0.15), 0 0 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(24, 1, 173, 0.05)',
                border: 'none'
              }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="fullName" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter Full Name"
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#1801AD'; e.target.style.backgroundColor = '#ffffff'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#cbd5e1'; e.target.style.backgroundColor = '#f8fafc'; }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="contactNumber" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>Contact</label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Contact Number"
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#1801AD'; e.target.style.backgroundColor = '#ffffff'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#cbd5e1'; e.target.style.backgroundColor = '#f8fafc'; }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email ID"
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#1801AD'; e.target.style.backgroundColor = '#ffffff'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#cbd5e1'; e.target.style.backgroundColor = '#f8fafc'; }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter Message"
                      required
                      rows={4}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                      onFocus={(e) => { e.target.style.borderColor = '#1801AD'; e.target.style.backgroundColor = '#ffffff'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#cbd5e1'; e.target.style.backgroundColor = '#f8fafc'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      marginTop: '8px',
                      padding: '16px',
                      backgroundColor: '#1801AD',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 12px rgba(24, 1, 173, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(24, 1, 173, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(24, 1, 173, 0.2)';
                    }}
                  >
                    Send Message <SendHorizontal size={18} />
                  </button>

                </form>
              </div>

            </div>
          </div>
        </main>
      </div>
      <FooterSection />
    </div>
  );
};

export default ContactPage;

// Reusable inline styles
const socialIconStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  backgroundColor: '#1801AD',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 8px rgba(24, 1, 173, 0.2)'
};

const inputStyle: React.CSSProperties = {
  padding: '14px 16px',
  borderRadius: '10px',
  border: '1px solid #cbd5e1',
  backgroundColor: '#f8fafc',
  fontSize: '1rem',
  color: '#0f172a',
  outline: 'none',
  transition: 'all 0.2s ease',
};
