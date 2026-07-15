import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StatsCardProps {
  onApplyClick?: () => void;
}

export const StatsCard: React.FC<StatsCardProps> = ({ onApplyClick }) => {
  const stats = [
    { number: '11+', label: 'Founders Backed' },
    { number: '15+', label: 'Partner Mentors' },
    { number: '95%', label: 'Founder Success' },
  ];

  return (
    <div 
      className="stats-card-container" 
      style={{ 
        position: 'relative', 
        zIndex: 10,
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '60px'
      }}
    >
      <div className="glass-stat-bar">
        <div className="glass-stats-items">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="glass-stat-item">
                <span className="glass-stat-number">{stat.number}</span>
                <span className="glass-stat-label">{stat.label}</span>
              </div>
              {idx < stats.length - 1 && (
                <div className="glass-stat-divider" />
              )}
            </React.Fragment>
          ))}
        </div>

        <button 
          onClick={onApplyClick}
          className="glass-stats-btn"
        >
          Apply Now
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default StatsCard;
