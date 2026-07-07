import fs from 'fs';

const cssToAdd = `
.glass-stat-bar {
  background: rgba(15, 15, 25, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 24px 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  gap: 24px;
}

.glass-stats-items {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
}

.glass-stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.glass-stat-number {
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
}

.glass-stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 8px;
  font-weight: 500;
}

.glass-stat-divider {
  width: 1px;
  height: 48px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 16px;
}

.glass-stats-btn {
  background: linear-gradient(135deg, #1801AD, #3b82f6);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.glass-stats-btn:hover {
  transform: scale(1.03);
  background: linear-gradient(135deg, #2a11e8, #60a5fa);
  box-shadow: 0 8px 24px rgba(24, 1, 173, 0.4);
}

@media (max-width: 767px) {
  .glass-stat-bar {
    flex-direction: column;
    padding: 32px 24px;
    gap: 32px;
  }
  .glass-stats-items {
    flex-direction: column;
    width: 100%;
    gap: 24px;
  }
  .glass-stat-divider {
    width: 100%;
    height: 1px;
    margin: 0;
  }
  .glass-stats-btn {
    width: 100%;
    justify-content: center;
  }
}
`;

const fileContents = fs.readFileSync('src/views/landing.css', 'utf8');

// Replace the old premium stats classes
let newContents = fileContents.replace(/\.premium-stats-pill \{[\s\S]*?\}\n/g, '');
newContents = newContents.replace(/\.premium-stats-items \{[\s\S]*?\}\n/g, '');
newContents = newContents.replace(/\.premium-stat-item \{[\s\S]*?\}\n/g, '');
newContents = newContents.replace(/\.premium-stat-number \{[\s\S]*?\}\n/g, '');
newContents = newContents.replace(/\.premium-stat-label \{[\s\S]*?\}\n/g, '');
newContents = newContents.replace(/\.premium-stat-divider \{[\s\S]*?\}\n/g, '');
newContents = newContents.replace(/\.premium-stats-btn \{[\s\S]*?\}\n/g, '');
newContents = newContents.replace(/\.premium-stats-btn:hover \{[\s\S]*?\}\n/g, '');
newContents = newContents.replace(/@media \(max-width: 767px\) \{\n  \.premium-stats-pill \{[\s\S]*?\}\n\}/g, '');

newContents = newContents + cssToAdd;

fs.writeFileSync('src/views/landing.css', newContents);

console.log('CSS updated with new glassmorphic specs');
