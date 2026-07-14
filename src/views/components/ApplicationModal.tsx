import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';
import { ContourLinesTopRight, SweepingDashedLineAlt } from './DecorativeLines';

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
  clearError: (field: string) => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  isSubmitting,
  isSuccess,
  errors,
  onClose,
  onSubmit,
  clearError,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [pitch, setPitch] = useState('');
  const [stage, setStage] = useState<'idea' | 'mvp' | 'revenue'>('idea');

  // Reset inputs when modal is opened
  useEffect(() => {
    if (isOpen) {
      setFullName('');
      setEmail('');
      setCompanyName('');
      setPitch('');
      setStage('idea');
    }
  }, [isOpen]);

  // Add keydown listener for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(fullName, email, companyName, pitch, stage);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        zIndex: 99999999,
        overflowY: 'auto',
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
          gap: isSuccess ? '0' : '24px',
          background: isSuccess ? 'linear-gradient(145deg, #090B14 0%, #10162A 100%)' : 'var(--brand-pure-white)', // Dark theme for success
          border: isSuccess ? '1px solid rgba(24, 1, 173, 0.3)' : '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: isSuccess 
            ? '0 24px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(24, 1, 173, 0.15)' 
            : '0 40px 80px -20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(24, 1, 173, 0.05)',
          color: isSuccess ? 'var(--brand-pure-white)' : 'hsl(var(--text-main))',
          margin: 'auto',
          borderRadius: '24px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal window"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: isSuccess ? 'rgba(255, 255, 255, 0.1)' : 'hsl(var(--bg-secondary))',
            border: isSuccess ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
            cursor: 'pointer',
            color: isSuccess ? 'rgba(255, 255, 255, 0.7)' : 'hsl(var(--text-muted))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            transition: 'all 0.2s ease',
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = isSuccess ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0,0,0,0.05)';
            e.currentTarget.style.color = isSuccess ? '#ffffff' : 'hsl(var(--text-main))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = isSuccess ? 'rgba(255, 255, 255, 0.1)' : 'hsl(var(--bg-secondary))';
            e.currentTarget.style.color = isSuccess ? 'rgba(255, 255, 255, 0.7)' : 'hsl(var(--text-muted))';
          }}
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          /* Success State - Premium Dark */
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '60px 40px 40px',
              position: 'relative',
              borderRadius: '24px',
            }}
            className="animate-slide-up"
          >
            {/* Decorative Lines Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.6 }}>
              <ContourLinesTopRight opacity={0.3} />
              <SweepingDashedLineAlt />
            </div>

            <div
              style={{
                background: 'rgba(24, 1, 173, 0.2)',
                padding: '24px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4facfe', 
                border: '1px solid rgba(79, 172, 254, 0.4)',
                boxShadow: '0 0 30px rgba(24, 1, 173, 0.5), inset 0 0 20px rgba(79, 172, 254, 0.2)',
                position: 'relative',
                zIndex: 1,
                marginBottom: '24px'
              }}
            >
              <CheckCircle size={64} strokeWidth={1.5} />
            </div>
            
            <div style={{ position: 'relative', zIndex: 1, marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: 800, 
                marginBottom: '16px', 
                letterSpacing: '-0.02em', 
                color: '#ffffff',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                Application Submitted!
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, maxWidth: '380px', margin: '0 auto' }}>
                Thank you for applying to AX Ventures. Our investment team reviews every pitch and will reach out within <strong style={{ color: '#ffffff', fontWeight: 600 }}>48 hours</strong>.
              </p>
            </div>
            
            <button
              onClick={onClose}
              style={{
                width: '100%',
                borderRadius: '30px',
                background: 'linear-gradient(90deg, #1801AD 0%, #4facfe 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '16px 24px',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 20px rgba(24, 1, 173, 0.4)',
                position: 'relative',
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(24, 1, 173, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(24, 1, 173, 0.4)';
              }}
            >
              Return to Website
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
              <h3 id="modal-title" style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.03em', color: 'hsl(var(--text-main))' }}>
                Pitch AX Ventures
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'hsl(var(--text-muted))' }}>
                No warm intro needed. We back audacious founders who are obsessed with solving hard problems.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Full Name */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="fullName" style={{ color: 'hsl(var(--text-main))', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  placeholder="e.g. Steve Jobs"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    clearError('fullName');
                  }}
                  disabled={isSubmitting}
                />
                {errors.fullName && <div className="form-error-msg">{errors.fullName}</div>}
              </div>

              {/* Email Address */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="email" style={{ color: 'hsl(var(--text-main))', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Email Address</label>
                <input
                  id="email"
                  type="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="steve@apple.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearError('email');
                  }}
                  disabled={isSubmitting}
                />
                {errors.email && <div className="form-error-msg">{errors.email}</div>}
              </div>

              {/* Company Name */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="companyName" style={{ color: 'hsl(var(--text-main))', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Company / Project Name</label>
                <input
                  id="companyName"
                  type="text"
                  className={`form-input ${errors.companyName ? 'error' : ''}`}
                  placeholder="Apple Computer"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    clearError('companyName');
                  }}
                  disabled={isSubmitting}
                />
                {errors.companyName && <div className="form-error-msg">{errors.companyName}</div>}
              </div>

              {/* Startup Stage */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="stage" style={{ color: 'hsl(var(--text-main))', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Startup Stage</label>
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
                  <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'hsl(var(--text-muted))' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
              </div>

              {/* Pitch */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="pitch" style={{ color: 'hsl(var(--text-main))', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Elevator Pitch</span>
                  <span style={{ color: 'hsl(var(--text-muted))', fontWeight: 400, fontSize: '0.75rem' }}>Keep it concise</span>
                </label>
                <textarea
                  id="pitch"
                  className={`form-input ${errors.pitch ? 'error' : ''}`}
                  placeholder="Describe what you are building, the problem it solves, and why your team is exceptional..."
                  rows={4}
                  value={pitch}
                  onChange={(e) => {
                    setPitch(e.target.value);
                    clearError('pitch');
                  }}
                  disabled={isSubmitting}
                  style={{ resize: 'vertical', minHeight: '100px' }}
                />
                {errors.pitch && <div className="form-error-msg">{errors.pitch}</div>}
              </div>

              {errors.submit && (
                <div className="form-error-msg" style={{ textAlign: 'center', marginTop: '10px' }}>
                  {errors.submit}
                </div>
              )}

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
                <p style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
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
                      color: 'hsl(var(--text-main))',
                      padding: '12px 24px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'hsl(var(--bg-secondary))'}
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
