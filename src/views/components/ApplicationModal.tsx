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
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'hsl(var(--text-muted))',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          /* Success State */
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '20px 10px',
              gap: '16px',
            }}
            className="animate-slide-up"
          >
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'hsl(var(--success))',
              }}
            >
              <CheckCircle size={48} strokeWidth={2} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
                Application Submitted!
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'hsl(var(--text-muted))', lineHeight: 1.5 }}>
                Thank you for applying to AX Ventures. Our investment team will review your pitch and reach out within 5 business days.
              </p>
            </div>
            <button
              onClick={onClose}
              className="btn btn-secondary"
              style={{ marginTop: '12px', width: '100%', borderRadius: '30px' }}
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form State */
          <>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' }}>
                Apply to AX Ventures
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'hsl(var(--text-muted))' }}>
                Tell us about your startup and your vision.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  placeholder="Steve Jobs"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={isSubmitting}
                />
                {errors.fullName && <div className="form-error-msg">{errors.fullName}</div>}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
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
              <div className="form-group">
                <label htmlFor="companyName">Company / Project Name</label>
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
              <div className="form-group">
                <label htmlFor="stage">Startup Stage</label>
                <select
                  id="stage"
                  className="form-input"
                  value={stage}
                  onChange={(e) => setStage(e.target.value as any)}
                  disabled={isSubmitting}
                  style={{ appearance: 'none', background: 'hsl(var(--bg-secondary)) url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2364748b\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><polyline points=\'6 9 12 15 18 9\'></polyline></svg>") no-repeat right 16px center', backgroundSize: '16px' }}
                >
                  <option value="idea">Idea Stage</option>
                  <option value="mvp">MVP Stage (Prototype Built)</option>
                  <option value="revenue">Generating Revenue</option>
                </select>
              </div>

              {/* Pitch */}
              <div className="form-group">
                <label htmlFor="pitch">Elevator Pitch</label>
                <textarea
                  id="pitch"
                  className={`form-input ${errors.pitch ? 'error' : ''}`}
                  placeholder="Describe what you are building, the problem it solves, and why your team is exceptional..."
                  rows={4}
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  disabled={isSubmitting}
                  style={{ resize: 'vertical', minHeight: '90px' }}
                />
                {errors.pitch && <div className="form-error-msg">{errors.pitch}</div>}
              </div>

              {/* Actions */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '12px',
                  marginTop: '10px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(15, 23, 42, 0.06)',
                }}
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                  disabled={isSubmitting}
                  style={{ borderRadius: '30px' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ minWidth: '130px', borderRadius: '30px' }}
                >
                  {isSubmitting ? (
                    <div className="spinner"></div>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
export default ApplicationModal;
