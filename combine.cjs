const fs = require('fs');

const desktopCode = fs.readFileSync('src/views/components/KeepYouAheadSectionDesktop.tsx', 'utf-8');
const mobileCode = fs.readFileSync('src/views/components/KeepYouAheadSection.tsx', 'utf-8');

// Extract the desktop cards array and component body
const desktopCardsMatch = desktopCode.match(/const cards = (\[[\s\S]*?\]);/);
const desktopBodyMatch = desktopCode.match(/export const KeepYouAheadSection: React\.FC = \(\) => \{\n([\s\S]*?)\n\};\n\nexport default KeepYouAheadSection;/);

// Extract the mobile cards array and component body
const mobileCardsMatch = mobileCode.match(/const axFormulaCards = (\[[\s\S]*?\]);/);
const mobileBodyMatch = mobileCode.match(/export const KeepYouAheadSection: React\.FC = \(\) => \{\n([\s\S]*?)\n\};\n\nexport default KeepYouAheadSection;/);

const finalCode = `import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { DashedArcTopLeft, WaveLinesBottomRight, SweepingDashedLineAlt } from './DecorativeLines';

const desktopCards = ${desktopCardsMatch[1]};

const DesktopKeepYouAheadSection: React.FC = () => {
${desktopBodyMatch[1]}
};

const axFormulaCards = ${mobileCardsMatch[1]};

const MobileKeepYouAheadSection: React.FC = () => {
${mobileBodyMatch[1]}
};

export const KeepYouAheadSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return isMobile ? <MobileKeepYouAheadSection /> : <DesktopKeepYouAheadSection />;
};

export default KeepYouAheadSection;
`;

// However, in desktopBodyMatch, it references 'cards.map', we need to change it to 'desktopCards.map'
const replacedFinalCode = finalCode.replace(/cards\.map/g, 'desktopCards.map');

fs.writeFileSync('src/views/components/KeepYouAheadSection.tsx', replacedFinalCode);
console.log('Successfully combined desktop and mobile views.');
