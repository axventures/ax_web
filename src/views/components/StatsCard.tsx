import React from 'react';

export const StatsCard: React.FC = () => {
  const stats = [
    { number: '100+', label: 'Founders Backed' },
    { number: '$100M+', label: 'Follow-on Funding' },
    { number: '15+', label: 'Partner Mentors' },
    { number: '95%', label: 'Founder Success' },
  ];

  return (
    <div className="stats-card-container">
      <div className="stats-card">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <div className="stat-number-wrapper">
              <span className="stat-number">{stat.number}</span>
            </div>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StatsCard;
