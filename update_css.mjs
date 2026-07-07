import fs from 'fs';

const cssToAdd = `
.premium-stats-pill {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  padding: 12px 12px 12px 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  gap: 24px;
}

.premium-stats-items {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  padding-right: 24px;
}

.premium-stat-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.premium-stat-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.premium-stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  letter-spacing: 0.01em;
  margin-top: 4px;
}

.premium-stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.15);
}

.premium-stats-btn {
  background: linear-gradient(135deg, #1801AD 0%, #4f46e5 100%);
  color: #ffffff;
  border: none;
  border-radius: 100px;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(24, 1, 173, 0.3), inset 0 1px 1px rgba(255,255,255,0.2);
  transition: all 0.2s ease;
  flex-shrink: 0;
  white-space: nowrap;
}

.premium-stats-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(24, 1, 173, 0.4), inset 0 1px 1px rgba(255,255,255,0.3);
}

@media (max-width: 767px) {
  .premium-stats-pill {
    flex-direction: column;
    border-radius: 24px;
    padding: 32px 24px;
    gap: 32px;
  }
  .premium-stats-items {
    flex-direction: column;
    padding-right: 0;
    width: 100%;
    gap: 24px;
  }
  .premium-stat-item {
    align-items: center;
    text-align: center;
  }
  .premium-stat-divider {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }
  .premium-stats-btn {
    width: 100%;
    justify-content: center;
  }
}
`;

const fileContents = fs.readFileSync('src/views/landing.css', 'utf8');

// Replace the old .stats-card blocks with the new CSS
let newContents = fileContents.replace(/\.stats-card \{[\s\S]*?\}/, '');
newContents = newContents.replace(/@media \(min-width: 768px\) \{\n  \.stats-card \{[\s\S]*?\}\n\}/, '');
newContents = newContents.replace(/\.stats-card \{[\s\S]*?border: none !important;[\s\S]*?\}/, '');
newContents = newContents.replace(/\.stats-card-container \{[\s\S]*?\}/g, '.stats-card-container {\n  width: 100%;\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 0 24px;\n  margin-top: 60px;\n  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}');

newContents = newContents + cssToAdd;

fs.writeFileSync('src/views/landing.css', newContents);

console.log('CSS updated');
