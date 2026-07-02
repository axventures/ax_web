# AX Ventures – Website Design System

## 1. Brand Identity & Positioning
- **Theme**: Premium SaaS / Modern Venture Capital
- **Vibe**: Audacious, Professional, Sleek, Trustworthy, Dynamic.
- **Core Aesthetic**: High contrast, crisp typography, clean spacing, and modern interactions (glassmorphism, seamless scroll transitions, micro-animations).

## 2. Color Palette
The website relies on a highly curated color palette to maintain a premium feel. We use a combination of light mode defaults with stark dark mode modals/components for contrast.

### Primary Colors
- **Brand Electric Blue**: `#1801AD` (Used for primary buttons, active states, glowing nodes, and key highlights)
- **Pure White**: `#FFFFFF` (Used for primary backgrounds and high-contrast text on dark surfaces)
- **Pure Black**: `#0A0A0A` (Used for dark mode surfaces, modals, and deep contrast)
- **Dark Surface**: `#111111` (Used for dark mode inputs and secondary dark layers)
- **Warm Cream / Off-White**: `#FAF9F6` (Used for section backgrounds to prevent eye strain and create softness)

### Typography Colors
- **Text Main (Dark Slate)**: `hsl(224, 25%, 12%)` / `#1E293B` (Primary headings and body text on light backgrounds)
- **Text Muted (Cool Grey)**: `hsl(215, 16%, 47%)` / `#64748B` (Secondary text, subtitles, and placeholders)

### Status Colors
- **Success (Emerald)**: `#10B981` (Used for success messages, "100% Confidential" badges)
- **Danger (Coral Red)**: `hsl(347, 77%, 50%)` (Used for error states in forms)

## 3. Typography
- **Primary Font**: `Outfit` (Used globally via Google Fonts)
- **Headings**: 
  - Bold weight (700-900).
  - Tightly tracked (e.g., `letter-spacing: -0.02em` or `-0.03em`) for a magazine-like display feel.
- **Body**: 
  - Clean, readable weights (400-500).
  - Line height `1.5` to `1.6` for optimal readability.

## 4. UI Components & Elements

### Application Form / Modal
- **Style**: Premium Light Theme with Glassmorphism.
- **Background**: `rgba(255, 255, 255, 0.7)` with `backdrop-filter: blur(12px)`.
- **Shadows**: Soft, highly-diffused drop shadows `0 40px 80px -20px rgba(0, 0, 0, 0.1)`.
- **UX Microcopy**: Includes trust signals like "Takes 2 mins", "100% Confidential", and "Direct to Partners" to encourage submission and reduce drop-off.
- **Inputs**: Solid backgrounds `hsl(240, 10%, 98%)`, subtle borders, with a glowing Electric Blue focus ring `box-shadow: 0 0 0 3px rgba(24, 1, 173, 0.1)`.

### Buttons
- **Primary Action**: Solid `var(--brand-blue)` or Pure Black backgrounds. White text.
- **Hover States**: Smooth transform (`translateY(-2px)`) and dynamic box-shadows to make them feel tactile and responsive.
- **Border Radius**: Highly rounded (`30px` or `var(--radius-lg)`) for primary actions.

### Scroll Transitions
- Sections (like the Crowdfunding "Why AX Exists?" block) utilize natural document flow instead of z-index overlapping. 
- Stickiness is used for temporary title fade-outs, seamlessly transitioning into the next standard section (e.g., Brand Collaborators) without white gaps.

### Roadmap Visualizer
- **Nodes**: SVG circles placed dynamically on a path. They remain white with a blue stroke until activated, at which point they expand, fill with Electric Blue, and emit a soft glow.
- **Cards**: Minimalist white cards with subtle borders. They remain invisible and translated downwards until triggered, sliding up and fading in seamlessly via a cubic-bezier transition.

## 5. CSS Architecture
We rely on a robust CSS Variable system in the `:root` to ensure global consistency without hardcoding hex values across components:
```css
:root {
  --brand-blue: #1801AD;
  --brand-pure-black: #0a0a0a;
  --brand-pure-white: #ffffff;
  --brand-dark-surface: #111111;
  --brand-warm-cream: #FAF9F6;
  --text-main: hsl(224 25% 12%);
  --text-muted: hsl(215 16% 47%);
}
```
