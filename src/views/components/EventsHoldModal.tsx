import React, { useEffect } from 'react';
import { X, CalendarClock } from 'lucide-react';

interface EventsHoldModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EventsHoldModal: React.FC<EventsHoldModalProps> = ({
  isOpen,
  onClose,
}) => {
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

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        zIndex: 99999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div
        className="modal-content animate-scale-up"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          background: 'var(--brand-pure-white)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(24, 1, 173, 0.05)',
          color: 'hsl(var(--text-main))',
          borderRadius: '24px',
          padding: '48px 32px 40px',
          maxWidth: '480px',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal window"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'hsl(var(--bg-secondary))',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            cursor: 'pointer',
            color: 'hsl(var(--text-muted))',
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
            e.currentTarget.style.color = 'hsl(var(--text-main))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'hsl(var(--bg-secondary))';
            e.currentTarget.style.color = 'hsl(var(--text-muted))';
          }}
        >
          <X size={18} />
        </button>

        <div
          style={{
            background: 'rgba(24, 1, 173, 0.08)',
            padding: '24px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--brand-blue)',
            marginBottom: '24px',
          }}
        >
          <CalendarClock size={56} strokeWidth={1.5} />
        </div>
        
        <h3 id="modal-title" style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em', color: 'hsl(var(--text-main))' }}>
          Events Currently on Hold
        </h3>
        
        <p style={{ fontSize: '1.05rem', color: 'hsl(var(--text-muted))', lineHeight: 1.6, marginBottom: '32px' }}>
          We are currently focusing on our active founder cohorts and internal operations. We will be announcing new events and summits soon. Stay tuned!
        </p>

        <button
          onClick={onClose}
          style={{
            width: '100%',
            borderRadius: '30px',
            background: 'var(--brand-blue)',
            color: 'var(--brand-pure-white)',
            border: 'none',
            padding: '14px 24px',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(24, 1, 173, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
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
          Got it
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  );
};

export default EventsHoldModal;
