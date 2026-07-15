import fs from 'fs';

const fileContents = fs.readFileSync('src/views/landing.css', 'utf8');

let newContents = fileContents.replace(
  /\.glass-stat-bar \{[\s\S]*?\}/,
  `.glass-stat-bar {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  padding: 24px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  gap: 24px;
}`
);

// Update text colors to be readable on light background
newContents = newContents.replace(
  /(\.glass-stat-number \{[\s\S]*?color:\s*)#ffffff(;\s*line-height:\s*1;\s*\})/,
  '$1#0f172a$2'
);
newContents = newContents.replace(
  /(\.glass-stat-label \{[\s\S]*?color:\s*)rgba\(255,\s*255,\s*255,\s*0\.6\)(;[\s\S]*?\})/,
  '$1rgba(15, 23, 42, 0.7)$2'
);
newContents = newContents.replace(
  /(\.glass-stat-divider \{[\s\S]*?background:\s*)rgba\(255,\s*255,\s*255,\s*0\.15\)(;[\s\S]*?\})/,
  '$1rgba(15, 23, 42, 0.15)$2'
);

fs.writeFileSync('src/views/landing.css', newContents);

console.log('CSS updated with light glassmorphism specs');
