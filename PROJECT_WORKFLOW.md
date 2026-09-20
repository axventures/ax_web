# AX Ventures — Project Workflow & Architecture Documentation

> **Last updated:** September 2026  
> **Domain:** [axventures.in](https://axventures.in)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [High-Level Architecture](#2-high-level-architecture)
3. [Tech Stack](#3-tech-stack)
4. [Repository Structure](#4-repository-structure)
5. [Frontend — Deep Dive](#5-frontend--deep-dive)
6. [Backend — Deep Dive](#6-backend--deep-dive)
7. [Data Flow & Request Lifecycle](#7-data-flow--request-lifecycle)
8. [Pages & Routes](#8-pages--routes)
9. [FRP Application Form Workflow](#9-frp-application-form-workflow)
10. [Email Notification System](#10-email-notification-system)
11. [Design System](#11-design-system)
12. [Build & Deployment](#12-build--deployment)
13. [Environment Variables](#13-environment-variables)
14. [Security Layer](#14-security-layer)
15. [Local Development Setup](#15-local-development-setup)

---

## 1. Project Overview

**AX Ventures** is a venture capital / startup accelerator platform. The website serves as the primary public-facing interface for:

- Showcasing the AX brand, mission, and team
- Hosting the **Founder Readiness Program (FRP)** — a multi-step application form for startup founders to apply for mentorship & investment
- Promoting the **Founder Summit** — a physical event page with speakers, passes, FAQ, and venue details
- Providing contact & about pages for general enquiries
- Triggering automated welcome emails upon FRP form submission

---

## 2. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                          USER BROWSER                           │
│                    https://axventures.in                        │
└────────────────────────────┬────────────────────────────────────┘
                             │  (HTTPS)
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                        VERCEL CDN                               │
│               Frontend SPA (React + Vite build)                 │
│        Static assets served globally via Vercel Edge            │
└─────────────┬───────────────────────────────────────────────────┘
              │  POST /api/send-welcome-email
              │  (HTTPS REST call via Axios)
              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   RENDER.COM (Backend)                          │
│              Node.js + Express API Server                       │
│           https://axventures-api.onrender.com                   │
└─────────────┬───────────────────────────────────────────────────┘
              │  Resend API call
              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   RESEND (Email Service)                        │
│              Transactional email delivery                       │
│         Welcome email → Applicant's inbox                       │
└─────────────────────────────────────────────────────────────────┘
```

**In Summary:**
- **Frontend** → Deployed on **Vercel** (static SPA)
- **Backend** → Deployed on **Render** (always-on Node.js API)
- **Email** → Sent via **Resend** (transactional email API)

---

## 3. Tech Stack

### Frontend

| Category | Technology | Version | Purpose |
|---|---|---|---|
| Core Framework | **React** | v19 | UI component library |
| Language | **TypeScript** | v5.6 | Type safety across the entire frontend |
| Build Tool | **Vite** | v6 | Dev server, HMR, and production bundler |
| Routing | **React Router DOM** | v7 | Client-side SPA navigation |
| Animation | **Framer Motion** | v12 | Page transitions, scroll animations, micro-interactions |
| Forms | **React Hook Form** | v7 | Performant, uncontrolled form state management |
| Validation | **Zod** | v4 | Schema-first form validation |
| Form Resolver | **@hookform/resolvers** | v5 | Bridge between Zod schema and React Hook Form |
| HTTP Client | **Axios** | v1 | API calls to the backend |
| Icons | **Lucide React** | v0.400 | Consistent icon set |
| CSS Utilities | **TailwindCSS** | v4 | Used specifically in the FRP apply section |
| Class Merging | **clsx + tailwind-merge** | — | Conditional class name handling |
| Analytics | **@vercel/analytics** | v2 | Page view analytics via Vercel |
| Performance | **@vercel/speed-insights** | v2 | Core Web Vitals monitoring via Vercel |
| Styling | **Vanilla CSS** | — | Main site-wide CSS via custom properties |

### Backend

| Category | Technology | Version | Purpose |
|---|---|---|---|
| Runtime | **Node.js** | LTS | JavaScript server runtime |
| Framework | **Express** | v5 | HTTP server and API routing |
| Email API | **Resend** | v6 | Transactional email delivery |
| Email (fallback) | **Nodemailer** | v9 | SMTP email fallback (configured but Resend is primary) |
| Security | **Helmet** | v8 | Sets secure HTTP response headers |
| Rate Limiting | **express-rate-limit** | v8 | Prevents API abuse / DDoS |
| CORS | **cors** | v2 | Cross-origin request control |
| Sanitization | **express-mongo-sanitize** | v2 | NoSQL injection prevention |
| Config | **dotenv** | v17 | Environment variable management |

### Infrastructure & Services

| Service | Provider | Purpose |
|---|---|---|
| Frontend Hosting | **Vercel** | Static site hosting with global CDN and preview deployments |
| Backend Hosting | **Render** | Always-on Node.js API server |
| Email Delivery | **Resend** | Transactional email API |
| Domain | **axventures.in** | Production domain |
| Version Control | **Git** | Source code management |

---

## 4. Repository Structure

```
ax_web/
├── frontend/                     ← React + Vite SPA
│   ├── src/
│   │   ├── App.tsx               ← Root router (all page routes defined here)
│   │   ├── main.tsx              ← React DOM entry point
│   │   ├── models/
│   │   │   └── Application.ts    ← TypeScript model/interface for applications
│   │   └── views/
│   │       ├── AXLandingView.tsx ← Homepage (composes all landing sections)
│   │       ├── AboutPage.tsx     ← About AX Ventures page
│   │       ├── ContactPage.tsx   ← Contact page with form
│   │       ├── FoundersPage.tsx  ← Founders listing page
│   │       ├── NotFoundView.tsx  ← 404 page
│   │       ├── landing.css       ← Global CSS for the main landing page
│   │       ├── components/       ← Shared, reusable UI components
│   │       │   ├── Navbar.tsx
│   │       │   ├── HeroSection.tsx
│   │       │   ├── AboutSection.tsx
│   │       │   ├── WhatWeDoSection.tsx
│   │       │   ├── FounderJourneySection.tsx
│   │       │   ├── FounderReadinessSection.tsx
│   │       │   ├── FoundersFRPSection.tsx
│   │       │   ├── CrowdfundingSection.tsx
│   │       │   ├── KeepYouAheadSection.tsx
│   │       │   ├── KeepYouAheadSectionDesktop.tsx
│   │       │   ├── MentorsSection.tsx
│   │       │   ├── TeamSection.tsx
│   │       │   ├── TestimonialsSection.tsx
│   │       │   ├── BrandTickerSection.tsx
│   │       │   ├── OurApproachSection.tsx
│   │       │   ├── InteractiveTileGrid.tsx
│   │       │   ├── RoadmapVisualizer.tsx
│   │       │   ├── StatsCard.tsx
│   │       │   ├── SectionDivider.tsx
│   │       │   ├── DecorativeLines.tsx   ← Signature topographic / sweep lines
│   │       │   ├── EventsHoldModal.tsx
│   │       │   └── FooterSection.tsx
│   │       ├── apply/            ← FRP multi-step application form
│   │       │   ├── FRPApplicationPage.tsx  ← Root controller for the form
│   │       │   ├── schema.ts               ← Zod validation schema (all 5 steps)
│   │       │   ├── frp-tailwind.css        ← Tailwind styles specific to the form
│   │       │   ├── components/
│   │       │   │   └── ProgressBar.tsx
│   │       │   └── steps/
│   │       │       ├── Step1PersonalInfo.tsx
│   │       │       ├── Step2CompanyInfo.tsx
│   │       │       ├── Step3BusinessDetails.tsx
│   │       │       ├── Step4BusinessOps.tsx
│   │       │       └── Step5FRPApplication.tsx
│   │       ├── summit/           ← Founder Summit event page
│   │       │   ├── FounderSummitView.tsx
│   │       │   ├── SummitHero.tsx
│   │       │   ├── SummitAudience.tsx
│   │       │   ├── SummitExperience.tsx
│   │       │   ├── SummitCommunity.tsx
│   │       │   ├── SummitVenue.tsx
│   │       │   ├── SummitVenueAndPartners.tsx
│   │       │   ├── SummitPartners.tsx
│   │       │   ├── SummitPassAndFAQ.tsx
│   │       │   ├── SummitFooter.tsx
│   │       │   └── summit.css
│   │       └── portal/           ← (Reserved — empty, future admin portal)
│   ├── public/                   ← Static assets (images, fonts, favicons)
│   ├── index.html                ← HTML entry point (Vite SPA shell)
│   ├── vite.config.ts            ← Vite build & dev server config
│   ├── tsconfig.json             ← TypeScript config
│   ├── .env.development          ← Dev env vars (local API URL)
│   └── .env.production           ← Prod env vars (Render API URL)
│
├── backend/                      ← Node.js + Express REST API
│   ├── server.js                 ← Express app setup, middleware, error handling
│   ├── routes/
│   │   └── api.js                ← API route definitions
│   ├── controllers/
│   │   └── emailController.js    ← Request handler for email routes
│   ├── services/
│   │   └── mailService.js        ← Resend email logic + HTML email template
│   ├── middleware/               ← (empty — middleware inline in server.js)
│   └── .env                      ← Secrets (Resend API key, email credentials)
│
├── vercel.json                   ← Vercel deployment config (SPA rewrites)
├── package.json                  ← Root-level scripts
├── DESIGN.md                     ← Design system reference document
└── PROJECT_REPORT.md             ← Project report
```

---

## 5. Frontend — Deep Dive

### Entry Point

```
index.html  →  main.tsx  →  App.tsx  →  (Routes)
```

`main.tsx` boots the React app into the `#root` div. `App.tsx` wraps everything in a `BrowserRouter` and uses a `ScrollToTop` component (triggers `window.scrollTo(0,0)` on every route change) before declaring all routes.

### State Management

There is **no global state management library** (no Redux, no Zustand). State is managed locally at the page/component level using React's built-in `useState` and `useEffect` hooks. Form state is entirely delegated to **React Hook Form**.

### Build Optimisation — Vite Code Splitting

The production bundle is manually split into named chunks inside `vite.config.ts`:

| Chunk | Libraries | Reason |
|---|---|---|
| `vendor-react` | `react`, `react-dom`, `react-router-dom` | Core React — cached separately |
| `vendor-motion` | `framer-motion` | Animation library — large, rarely changes |
| `vendor-lucide` | `lucide-react` | Icon library — tree-shakeable but isolated |
| `vendor-helpers` | All other `node_modules` | Remaining third-party code |

### Dev Server Proxy

In development, Vite proxies all `/api/*` requests to `http://localhost:3000` so the frontend talks to the local backend without any CORS issues.

### CSS Architecture

The site uses **two styling approaches in parallel**:

1. **Vanilla CSS with CSS Custom Properties** — Used for the main landing page, Summit page, and all shared components. Defined in `landing.css` and `summit.css`. All brand colors and spacing tokens declared in `:root`.

2. **TailwindCSS v4** — Used exclusively inside the `/apply` (FRP application) section via `frp-tailwind.css` and a dedicated `tailwind.config.js`. This was a pragmatic choice to speed up dense form UI development.

### Animations

**Framer Motion** powers all animations:
- Page-level scroll-triggered entry animations (`whileInView`)
- Multi-step form step transitions (`AnimatePresence`)
- Hero section elements fading/sliding in on load
- Interactive tile grids and hover states

---

## 6. Backend — Deep Dive

### Architecture Pattern

The backend follows a clean **layered MVC-like architecture**:

```
server.js (Express App Setup + Middleware)
    └── routes/api.js (Route Definitions)
            └── controllers/emailController.js (Request Handlers)
                        └── services/mailService.js (Business Logic)
```

### Middleware Stack (in execution order)

1. **`dotenv`** — Loads environment variables from `.env`
2. **`helmet`** — Sets security HTTP headers (XSS, clickjacking, MIME sniffing)
3. **Request Logger** — Custom middleware logging every request: timestamp, method, URL, origin
4. **`cors`** — Restricts allowed origins to production domains + Vercel previews + localhost
5. **Body Parsers** — `express.json` + `express.urlencoded` (limited to 10kb)
6. **API Rate Limiter** — `/api/*` routes: max **100 req / 15 min**
7. **General Rate Limiter** — All routes: max **500 req / 15 min**

### CORS Allowed Origins

| Origin | Environment |
|---|---|
| `https://axventures.in` | Production |
| `https://www.axventures.in` | Production (www) |
| `*.vercel.app` | All Vercel preview deployments |
| `http://localhost:5173` | Local dev (Vite default port) |
| `http://localhost:5174` | Local dev (Vite alternate port) |
| `http://localhost:3000` | Local dev (backend self) |

---

## 7. Data Flow & Request Lifecycle

### Normal Page Visit

```
1. User visits axventures.in
2. Vercel CDN serves index.html + JS/CSS chunks
3. React boots, hydrates the router
4. The matching route renders its View component
5. All rendering is client-side (no SSR)
```

### FRP Form Submission

```
1. User fills out the 5-step form at /apply
2. On final Submit:
   a. React Hook Form validates all fields against Zod schema
   b. If invalid → errors shown inline, submission blocked
   c. If valid → Axios sends:
        POST VITE_API_URL + /api/send-welcome-email
        Body: { email, fullName, companyName }

3. Backend receives request:
   a. Rate limiter checks request count
   b. CORS middleware validates the origin header
   c. emailController.js extracts { email, fullName, companyName } from body
   d. Validates required fields
   e. Calls mailService.sendWelcomeEmail(email, fullName, companyName)

4. mailService.js:
   a. Constructs a styled HTML email (inline CSS, AX Ventures branding)
   b. Calls Resend API: resend.emails.send({ from, to, subject, html })
   c. Returns true/false to controller

5. Controller responds:
   - 200 { success: true }          if email sent successfully
   - 500 { error: 'Failed...' }     if Resend call fails
   - 400 { error: 'Required...' }   if validation fails

6. Frontend receives response:
   - Success → isSuccess = true → full-page success screen shown
   - Failure → error message displayed to user
   - Draft cleared from localStorage on success
```

---

## 8. Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `AXLandingView` | Main homepage composed of all landing sections |
| `/about` | `AboutPage` | About AX Ventures — mission, team, story |
| `/contact` | `ContactPage` | Contact form and company information |
| `/founders` | `FoundersPage` | Founders listing / profile page |
| `/founder-summit` | `FounderSummitView` | Founder Summit event page |
| `/apply` | `FRPApplicationPage` | Founder Readiness Program application |
| `*` | `NotFoundView` | Custom 404 page |

### Vercel SPA Rewrite Rule

All unknown paths are rewritten to `/index.html` so React Router handles client-side navigation without 404s from the CDN:

```json
{ "source": "/(.*)", "destination": "/index.html" }
```

---

## 9. FRP Application Form Workflow

The FRP application is a **5-step multi-step form** with draft persistence:

```
Step 1: Personal Info
  Fields: Full Name, Email, WhatsApp Number, Social Media URL

Step 2: Company Info
  Fields: Company Name, Year of Incorporation, Legal Entity type,
          GST Registration, Website, City & State,
          Company Description, Product/Service description

Step 3: Business Details
  Fields: IP (Intellectual Property) – Yes/No
          Customer Focus – B2B / B2C / B2G / B2B2C / D2C
          Business Segment (with "Others" free-text fallback)
          Revenue Stage – 8 options (Pre-Revenue → Above 100Cr)
          Funding Status – 5 options (Bootstrapped → Series A+)
          Looking for Investment – Yes/No
          Looking for Mentorship – Yes/No

Step 4: Business Operations
  Fields: Current Tools in use (free text)

Step 5: FRP Application
  Fields: Why Join FRP (min 20 chars)
          How did you hear about us (11 options)
          Declaration checkbox (mandatory)
```

### Form Technical Features

| Feature | Implementation |
|---|---|
| Schema validation | **Zod** schema (`schema.ts`) with conditional cross-field validation |
| Form state | **React Hook Form** with `FormProvider` for step context sharing |
| Draft saving | Auto-saved to **localStorage** on every field change |
| Draft restoring | On page load, draft is restored from `localStorage` |
| Step navigation | Previous/Next buttons; fields validated before advancing |
| Progress tracking | `ProgressBar` component shows current step out of 5 |
| Animations | **Framer Motion** `AnimatePresence` for slide transitions between steps |
| Success state | Full-page success screen with `CheckCircle` icon |
| Post-submission | Navigates to homepage after success + clears localStorage draft |

---

## 10. Email Notification System

Upon successful FRP form submission, the backend sends a **branded welcome email** to the applicant.

### Email Details

| Field | Value |
|---|---|
| From | `AX Ventures <axventuresindia@gmail.com>` |
| To | Applicant's email address |
| Subject | `Welcome to AX Ventures - {companyName}` |
| Provider | **Resend** |
| Template | Inline HTML (table-based, email-client compatible) |

### Email Template Contents

- AX Ventures branded header with Electric Blue (`#1801AD`) accent
- "Application Received" badge
- Personalised greeting: `Hello {fullName},`
- Mention of `{companyName}` in the body
- Application details summary table (Applicant / Company / Status: Under Review)
- 48-hour review timeline notice
- Confidential & Proprietary footer

---

## 11. Design System

All visual design follows the documented system in [`DESIGN.md`](./DESIGN.md).

### Brand Colors (CSS Custom Properties)

```css
:root {
  --brand-blue: #1801AD;          /* Primary CTA, highlights, glows */
  --brand-pure-black: #0a0a0a;    /* Dark surfaces, modals */
  --brand-pure-white: #ffffff;    /* Primary background */
  --brand-dark-surface: #111111;  /* Dark mode inputs */
  --brand-warm-cream: #FAF9F6;    /* Soft section backgrounds */
  --text-main: hsl(224 25% 12%);  /* Primary headings & body text */
  --text-muted: hsl(215 16% 47%); /* Secondary text, placeholders */
}
```

### Typography

- **Font Family:** `Outfit` — loaded via Google Fonts
- **Headings:** Bold (700–900 weight), tight letter-spacing (`-0.02em` to `-0.04em`)
- **Body:** Regular/Medium (400–500 weight), line-height `1.5–1.6`

### Mandatory Design Elements (per .agents/AGENTS.md)

Every section **must** include:

1. **Topographic contour lines** — SVG background texture giving a premium, map-like depth
2. **`DecorativeLines.tsx`** — Animated sweeping dashed lines used as section accents
3. **Strict brand color palette** — All colors via `var(--brand-blue)`, `var(--text-main)`, etc.

### UI Patterns

| Pattern | Usage |
|---|---|
| Glassmorphism | Form modals (`rgba(255,255,255,0.7)` + `backdrop-filter: blur(12px)`) |
| Micro-animations | Hover with `translateY(-2px)` + box-shadow transitions |
| Roadmap Visualizer | SVG path with glowing animated nodes for journey timelines |
| Brand Ticker | Auto-scrolling horizontal brand/partner logo strip |
| Interactive Tile Grid | Hoverable info grid (`InteractiveTileGrid.tsx`) |
| Scroll-triggered reveals | Framer Motion `whileInView` for section entry animations |

---

## 12. Build & Deployment

### Frontend — Vercel

Vercel auto-deploys on every push to the connected Git branch.

```bash
# Build command (as configured in vercel.json)
npm run build
# → runs: tsc -b && vite build
# → outputs to: dist/
```

Output is split into named vendor chunks for optimal cache performance (see Section 5).

### Backend — Render

The backend is deployed as a **Web Service** on Render.com:

```bash
# Start command
node server.js
```

Render keeps the process alive. Backend URL: `https://axventures-api.onrender.com`.

---

## 13. Environment Variables

### Frontend — `.env.production`

| Variable | Value | Purpose |
|---|---|---|
| `VITE_API_URL` | `https://axventures-api.onrender.com` | Base URL for all API calls |

### Frontend — `.env.development`

| Variable | Value | Purpose |
|---|---|---|
| `VITE_API_URL` | `http://localhost:3000` | Local backend URL |

### Backend — `.env`

| Variable | Purpose |
|---|---|
| `PORT` | Express server port (default: 3000) |
| `RESEND_API_KEY` | Resend API authentication key |
| `EMAIL` | Gmail account (Nodemailer SMTP fallback) |
| `PASSWORD` | Gmail app password (Nodemailer SMTP fallback) |
| `SMTP_FROM` | SMTP from display address |

---

## 14. Security Layer

| Concern | Solution |
|---|---|
| Secure HTTP headers | `helmet` middleware (XSS, clickjacking, MIME-type sniffing) |
| CORS abuse | Strict origin whitelist + `*.vercel.app` wildcard only |
| API abuse / DDoS | `express-rate-limit` — 100 req/15 min on `/api/*`, 500 req/15 min globally |
| Payload attacks | Body parser limited to `10kb` max |
| NoSQL injection | `express-mongo-sanitize` (defensive) |
| Proxy trust | `app.set('trust proxy', 1)` — reads real IPs behind Render's proxy |
| Secrets management | All secrets in `.env` files (never committed to Git) |

---

## 15. Local Development Setup

### Prerequisites

- Node.js LTS
- npm

### Steps

```bash
# 1. Clone the repository
git clone <repo-url>
cd ax_web

# 2. Install and start the frontend
cd frontend
npm install
npm run dev
# → http://localhost:5173

# 3. In a separate terminal, install and start the backend
cd ../backend
npm install
node server.js
# → http://localhost:3000

# Vite automatically proxies /api/* requests to localhost:3000
```

### Development URLs

| Service | URL |
|---|---|
| Frontend | `http://localhost:5173` |
| Backend API | `http://localhost:3000` |
| API Health Check | `http://localhost:3000/api/health` |

---

*This document was generated by code inspection of the ax_web repository and should be kept in sync with any architectural changes.*
