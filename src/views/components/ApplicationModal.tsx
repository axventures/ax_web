import React, { useState } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  isSubmitting: boolean;
  isSuccess: boolean;
  errors: Record<string, string>;
  onClose: () => void;
  onSubmit: (
    fullName: string,
    email: string,
    companyName: string,
    pitch: string,
    stage: 'idea' | 'mvp' | 'revenue'
  ) => Promise<boolean>;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  isSubmitting,
  isSuccess,
  errors,
  onClose,
  onSubmit,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [pitch, setPitch] = useState('');
  const [stage, setStage] = useState<'idea' | 'mvp' | 'revenue'>('idea');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(fullName, email, companyName, pitch, stage);
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        zIndex: 99999999,
        overflowY: 'auto',
        padding: '40px 20px',
        alignItems: 'flex-start',
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px',
          background: 'var(--brand-pure-white)', // Matches the website
          border: '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(24, 1, 173, 0.05)',
          color: 'var(--text-main)', // Dark slate text
          margin: 'auto',
          borderRadius: '24px',
          padding: '32px',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'var(--bg-secondary)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.05)';
            e.currentTarget.style.color = 'var(--text-main)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--bg-secondary)';
            e.currentTarget.style.color = 'var(--text-muted)';
          }}
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          /* Success State */
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '40px 10px 20px',
              gap: '20px',
            }}
            className="animate-slide-up"
          >
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '20px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981', // emerald
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}
            >
              <CheckCircle size={56} strokeWidth={1.5} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
                Application Submitted!
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto' }}>
                Thank you for applying to AX Ventures. Our investment team reads every pitch and will reach out within 48 hours.
              </p>
            </div>
            <button
              onClick={onClose}
              style={{ 
                marginTop: '20px', 
                width: '100%', 
                borderRadius: '30px',
                background: 'var(--text-main)',
                color: 'var(--brand-pure-white)',
                border: 'none',
                padding: '14px 24px',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form State */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ paddingRight: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(24, 1, 173, 0.08)', color: 'var(--brand-blue)', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  Takes 2 mins
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(16, 185, 129, 0.08)', color: '#10b981', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  100% Confidential
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.03em', color: 'var(--text-main)' }}>
                Pitch AX Ventures
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                No warm intro needed. We back audacious founders who are obsessed with solving hard problems.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Full Name */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="fullName" style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  placeholder="e.g. Steve Jobs"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={isSubmitting}
                />
                {errors.fullName && <div className="form-error-msg">{errors.fullName}</div>}
              </div>

              {/* Email Address */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="email" style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Email Address</label>
                <input
                  id="email"
                  type="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="steve@apple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                {errors.email && <div className="form-error-msg">{errors.email}</div>}
              </div>

              {/* Company Name */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="companyName" style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Company / Project Name</label>
                <input
                  id="companyName"
                  type="text"
                  className={`form-input ${errors.companyName ? 'error' : ''}`}
                  placeholder="Apple Computer"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  disabled={isSubmitting}
                />
                {errors.companyName && <div className="form-error-msg">{errors.companyName}</div>}
              </div>

              {/* Startup Stage */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="stage" style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Startup Stage</label>
                <div style={{ position: 'relative' }}>
                  <select
                    id="stage"
                    className="form-input"
                    value={stage}
                    onChange={(e) => setStage(e.target.value as any)}
                    disabled={isSubmitting}
                    style={{ 
                      appearance: 'none', 
                      cursor: 'pointer',
                      paddingRight: '40px'
                    }}
                  >
                    <option value="idea">Idea Stage</option>
                    <option value="mvp">MVP Stage (Prototype Built)</option>
                    <option value="revenue">Generating Revenue</option>
                  </select>
                  <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
              </div>

              {/* Pitch */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="pitch" style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Elevator Pitch</span>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.75rem' }}>Keep it concise</span>
                </label>
                <textarea
                  id="pitch"
                  className={`form-input ${errors.pitch ? 'error' : ''}`}
                  placeholder="Describe what you are building, the problem it solves, and why your team is exceptional..."
                  rows={4}
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  disabled={isSubmitting}
                  style={{ resize: 'vertical', minHeight: '100px' }}
                />
                {errors.pitch && <div className="form-error-msg">{errors.pitch}</div>}
              </div>

              {/* Actions */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '16px',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  Direct to Partners
                </p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    style={{ 
                      borderRadius: '30px',
                      background: 'transparent',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      padding: '12px 24px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ 
                      minWidth: '140px', 
                      borderRadius: '30px',
                      background: 'var(--brand-blue)',
                      color: 'var(--brand-pure-white)',
                      border: 'none',
                      padding: '12px 24px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 12px rgba(24, 1, 173, 0.25)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(24, 1, 173, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(24, 1, 173, 0.25)';
                    }}
                  >
                    {isSubmitting ? (
                      <div className="spinner" style={{ borderTopColor: '#fff' }}></div>
                    ) : (
                      <>
                        <span>Submit Pitch</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default ApplicationModal;
