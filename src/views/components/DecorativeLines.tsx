import React from 'react';

/**
 * Decorative SVG line drawings that scatter across the website background.
 * Inspired by Peak XV's organic contour/topographic lines.
 * Uses the AX brand accent color (#1801AD) at very low opacity.
 */

/* ── Individual Drawing Components ── */

/** Flowing contour/topographic lines — upper right corner */
export const ContourLinesTopRight: React.FC<{ opacity?: number }> = ({ opacity = 0.15 }) => (
  <svg
    style={{
      position: 'absolute',
      top: '-40px',
      right: '-60px',
      width: '420px',
      height: '320px',
      pointerEvents: 'none',
      zIndex: 0,
      mixBlendMode: 'multiply',
    }}
    viewBox="0 0 420 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M380 20C320 40 280 80 260 140C240 200 200 240 120 260" stroke="#1801AD" strokeWidth="1.5" opacity={opacity} fill="none" />
    <path d="M400 50C340 70 300 110 280 170C260 230 220 270 140 290" stroke="#1801AD" strokeWidth="1" opacity={opacity * 0.7} fill="none" />
    <path d="M420 80C360 100 320 140 300 200C280 260 240 300 160 310" stroke="#1801AD" strokeWidth="1" opacity={opacity * 0.5} fill="none" />
    <path d="M360 10C300 30 260 70 240 130C220 190 180 230 100 250" stroke="#1801AD" strokeWidth="0.8" opacity={opacity * 0.4} fill="none" />
  </svg>
);

/** Dashed curve — like the red dashed curve in Peak XV, but in brand blue */
export const DashedCurveLeft: React.FC<{ opacity?: number }> = ({ opacity = 0.25 }) => (
  <svg
    style={{
      position: 'absolute',
      bottom: '-20px',
      left: '-40px',
      width: '350px',
      height: '250px',
      pointerEvents: 'none',
      zIndex: 0,
      mixBlendMode: 'multiply',
    }}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 230C60 180 120 120 180 100C240 80 300 60 340 20"
      stroke="#1801AD"
      strokeWidth="1.5"
      strokeDasharray="8 6"
      opacity={opacity}
      fill="none"
    />
  </svg>
);

/** Flowing wave lines — bottom right */
export const WaveLinesBottomRight: React.FC<{ opacity?: number }> = ({ opacity = 0.15 }) => (
  <svg
    style={{
      position: 'absolute',
      bottom: '-30px',
      right: '-50px',
      width: '400px',
      height: '280px',
      pointerEvents: 'none',
      zIndex: 0,
      mixBlendMode: 'multiply',
    }}
    viewBox="0 0 400 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 280C80 220 140 180 200 200C260 220 320 180 380 120" stroke="#1801AD" strokeWidth="1.5" opacity={opacity} fill="none" />
    <path d="M40 280C100 230 160 190 220 210C280 230 340 190 400 140" stroke="#1801AD" strokeWidth="1" opacity={opacity * 0.7} fill="none" />
    <path d="M60 280C120 240 180 200 240 220C300 240 360 200 400 160" stroke="#1801AD" strokeWidth="0.8" opacity={opacity * 0.5} fill="none" />
  </svg>
);

/** Scattered dots and circles — subtle accent */
export const ScatteredDots: React.FC<{ opacity?: number }> = ({ opacity = 0.2 }) => (
  <svg
    style={{
      position: 'absolute',
      top: '20%',
      left: '5%',
      width: '100px',
      height: '200px',
      pointerEvents: 'none',
      zIndex: 0,
      mixBlendMode: 'multiply',
    }}
    viewBox="0 0 100 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="30" r="3" fill="#1801AD" opacity={opacity} />
    <circle cx="60" cy="60" r="2" fill="#1801AD" opacity={opacity * 0.6} />
    <circle cx="40" cy="110" r="4" fill="#1801AD" opacity={opacity * 0.4} />
    <circle cx="80" cy="150" r="2.5" fill="#1801AD" opacity={opacity * 0.5} />
    <circle cx="30" cy="180" r="3" fill="#1801AD" opacity={opacity * 0.7} />
  </svg>
);

/** Dashed curve upper-left, flowing down-right */
export const DashedArcTopLeft: React.FC<{ opacity?: number }> = ({ opacity = 0.25 }) => (
  <svg
    style={{
      position: 'absolute',
      top: '-60px',
      left: '-30px',
      width: '300px',
      height: '220px',
      pointerEvents: 'none',
      zIndex: 0,
      mixBlendMode: 'multiply',
    }}
    viewBox="0 0 300 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10C60 60 120 100 200 120C240 130 270 160 290 210"
      stroke="#1801AD"
      strokeWidth="1.2"
      strokeDasharray="6 5"
      opacity={opacity}
      fill="none"
    />
  </svg>
);

/** Small diamond markers — decorative accent */
export const DiamondMarker: React.FC<{ style?: React.CSSProperties; opacity?: number }> = ({ style, opacity = 0.3 }) => (
  <svg
    style={{
      position: 'absolute',
      width: '14px',
      height: '14px',
      pointerEvents: 'none',
      zIndex: 0,
      mixBlendMode: 'multiply',
      ...style,
    }}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="7" y="0" width="9.9" height="9.9" transform="rotate(45 7 0)" fill="#1801AD" opacity={opacity} />
  </svg>
);

// A sweeping dashed line (orange/coral color) going across the section
export const SweepingDashedLine: React.FC = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0, opacity: 0.6 }}>
    <svg viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <path d="M0 600 C 400 600, 600 200, 1000 400 S 1440 100, 1440 100" stroke="#FF5722" strokeWidth="1" strokeDasharray="8 8"/>
    </svg>
  </div>
);

// Another variation of a sweeping dashed line for variety
export const SweepingDashedLineAlt: React.FC = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0, opacity: 0.6 }}>
    <svg viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <path d="M0 200 C 300 100, 800 700, 1440 400" stroke="#FF5722" strokeWidth="1" strokeDasharray="6 6"/>
    </svg>
  </div>
);

export default {
  ContourLinesTopRight,
  DashedCurveLeft,
  WaveLinesBottomRight,
  ScatteredDots,
  DashedArcTopLeft,
  DiamondMarker,
  SweepingDashedLine,
  SweepingDashedLineAlt,
};
