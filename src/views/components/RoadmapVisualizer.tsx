import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FileText, UserCheck, ShieldCheck, Rocket, Briefcase, TrendingUp, Network } from "lucide-react";

interface RoadmapStep {
  title: string;
  description: string;
}

interface RoadmapVisualizerProps {
  roadmap: {
    steps: RoadmapStep[];
  };
}

const getIconForTitle = (title: string) => {
  const iconProps = { size: 28, color: "#000000", strokeWidth: 2 };
  if (title.includes('Apply')) return <FileText {...iconProps} fill="rgba(0,0,0,0.05)" />;
  if (title.includes('Assessment')) return <UserCheck {...iconProps} fill="rgba(0,0,0,0.05)" />;
  if (title.includes('Readiness') && !title.includes('Investment')) return <ShieldCheck {...iconProps} fill="rgba(0,0,0,0.05)" />;
  if (title.includes('Execution')) return <Rocket {...iconProps} fill="rgba(0,0,0,0.05)" />;
  if (title.includes('Investment')) return <Briefcase {...iconProps} fill="rgba(0,0,0,0.05)" />;
  if (title.includes('Growth')) return <TrendingUp {...iconProps} />;
  if (title.includes('Ecosystem')) return <Network {...iconProps} />;
  return <FileText {...iconProps} />;
};

export const RoadmapVisualizer: React.FC<RoadmapVisualizerProps> = ({ roadmap }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  const steps = roadmap?.steps || [];
  if (steps.length === 0) return null;

  const stepHeight = 320; // Increased spacing for larger cards
  const topPadding = 120;
  const bottomPadding = 120;
  const totalHeight = steps.length * stepHeight + topPadding + bottomPadding;
  const centerX = 500;
  const waveWidth = 80;

  let pathD = `M ${centerX}, 0 L ${centerX}, ${topPadding}`;
  for (let i = 0; i < steps.length; i++) {
    const startY = topPadding + i * stepHeight;
    const endY = topPadding + (i + 1) * stepHeight;
    const isRightCurve = i % 2 === 0;
    
    const cpx1 = isRightCurve ? centerX + waveWidth : centerX - waveWidth;
    const cpy1 = startY + stepHeight * 0.3;
    const cpx2 = isRightCurve ? centerX + waveWidth : centerX - waveWidth;
    const cpy2 = startY + stepHeight * 0.7;
    
    pathD += ` C ${cpx1},${cpy1} ${cpx2},${cpy2} ${centerX},${endY}`;
  }

  return (
    <div className="rv-container" style={{ padding: '80px 20px' }}>
      <div ref={containerRef} style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto', height: totalHeight }}>
        
        <svg 
          width="100%" 
          height="100%" 
          viewBox={`0 0 1000 ${totalHeight}`} 
          preserveAspectRatio="xMidYMin slice"
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
        >
          <path d={pathD} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="4" />
          <motion.path 
            d={pathD} 
            fill="none" 
            stroke="var(--brand-blue)" 
            strokeWidth="5" 
            style={{ pathLength }} 
            className="rv-animated-line"
          />
        </svg>

        {steps.map((step, i) => {
          const isRight = i % 2 === 0;
          const nodeY = topPadding + (i * stepHeight) + (stepHeight / 2);
          const nodeX = isRight ? centerX + waveWidth * 0.75 : centerX - waveWidth * 0.75;
          
          return (
            <div key={i} style={{ position: 'absolute', top: nodeY, left: '50%', transform: 'translate(-50%, -50%)', width: '100%', pointerEvents: 'none', zIndex: 10 }}>
              
              <motion.div
                className="rv-scroll-node"
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${nodeX - 500}px)`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.5, type: 'spring' }}
              />

              <motion.div
                className="rv-glass-card"
                style={{
                  position: 'absolute',
                  left: isRight ? `calc(50% + 100px)` : 'auto', // Increased spacing from line
                  right: !isRight ? `calc(50% + 100px)` : 'auto',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'auto',
                }}
                initial={{ opacity: 0, x: isRight ? 40 : -40, y: '-50%' }}
                whileInView={{ opacity: 1, x: 0, y: '-50%' }}
                viewport={{ once: false, margin: '-20%' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              >
                <div className="rv-card-icon-container">
                  {getIconForTitle(step.title)}
                </div>
                
                <div className="rv-card-content">
                  <div className="rv-phase-label">PHASE 0{i + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapVisualizer;
