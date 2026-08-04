import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import { FooterSection } from './components/FooterSection';

export const NotFoundView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fafafa' }}>
      <Navbar onApplyClick={() => navigate('/apply')} />

      <main style={{
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '120px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(24, 1, 173, 0.05) 2px, transparent 2px)',
          backgroundSize: '40px 40px',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(8rem, 20vw, 15rem)', 
            fontWeight: 900, 
            color: 'var(--v2v-black)', 
            lineHeight: 0.8,
            letterSpacing: '-0.05em',
            margin: 0,
            background: 'linear-gradient(135deg, var(--v2v-black) 0%, rgba(15,15,20,0.6) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            404
          </h1>
          
          <div style={{ 
            backgroundColor: 'var(--v2v-purple)', 
            color: 'white', 
            padding: '6px 16px', 
            borderRadius: '20px',
            fontWeight: 800,
            fontSize: '1rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginTop: '-20px',
            marginBottom: '40px',
            boxShadow: '0 8px 24px rgba(24,1,173,0.3)'
          }}>
            Page Not Found
          </div>
          
          <p style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', 
            color: '#555555', 
            lineHeight: 1.6,
            marginBottom: '48px',
            fontWeight: 500
          }}>
            We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps you just took a wrong turn in the ecosystem.
          </p>
          
          <Link 
            to="/"
            className="summit-btn-primary"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              padding: '18px 36px', 
              fontSize: '1.1rem',
              textDecoration: 'none'
            }}
          >
            <ArrowLeft size={20} />
            Return to Homepage
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};
