# 🚀 Software Engineer & AI Product Portfolio

A modern, high-performance portfolio website showcasing full-stack software engineering, mobile development, and production AI products — built with React 18, Vite, Tailwind CSS, Framer Motion, and deployed seamlessly on Vercel with serverless email delivery.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.x-blue)
![Vite](https://img.shields.io/badge/Vite-8.x-646cff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### 🎨 Design & UX
- **Apple & FinTech Aesthetics**: Clean, intentional visual hierarchy with Python Gold (`#F5C518`) and Navy (`#0D3164`) brand identity.
- **Dual Theme Support**: Flawless Light & Dark mode support defaulting to **Light Mode** across all devices, with instant toggle and zero contrast issues.
- **Micro-Interactions & Fluid Animations**: Framer Motion powered slide transitions, staggered hero typography, ambient radial glows, and interactive cards.
- **Mobile Floating Dock**: macOS/iOS-style floating bottom dock on mobile (`< md`) with active squircle tabs, animated indicators, and safe-area inset padding.
- **Responsive Layouts**: Designed mobile-first and tested from 320px to 4K displays.

### 🧩 Core Sections
1. **Hero**: High-impact introduction featuring rotating typewriter roles, live availability pulse, production metrics (Years Experience, Production Deploys, Scaled Users), and stylized avatar badge.
2. **About**: Architectural arch portrait, technical manifesto ("What I Do", "How I Work"), direct "Download CV" button pointing to `public/resume.pdf`, and an infinite single-row Tech Stack Marquee.
3. **Projects Showcase**: Interactive carousel highlighting 6 projects with real screenshot mockups, tech stack tags, impact achievements, source code links, and conditional live demo buttons.
4. **Certifications**: Apple showcase card carousel displaying 8 official credentials (Microsoft Azure AZ-204, Udemy AI, Coursera BERT/TensorFlow, Skillsoft certifications) with official badge/certificate images, "Verify" and "View Credential" actions, slide progress pill, and "View Full Badge Wallet" link.
5. **Contact**: Unified 2-column split card featuring a Vercel serverless contact form (powered by Resend API), click-to-copy email utility with graceful clipboard fallback, and social links (GitHub, LinkedIn, Twitter/X).

### 🛠️ Technical Highlights
- **Vite 8 Build Tooling**: Sub-second Hot Module Replacement (HMR) and optimized Rollup production bundling.
- **Vercel Serverless Function (`/api/contact`)**: Secure serverless backend endpoint that validates input and dispatches emails via Resend API without exposing secret keys to the browser.
- **Local Dev Resend Middleware**: Built-in Vite dev server plugin allowing real email testing during local development.
- **Zero Broken Links & Assets**: Fully verified asset imports, project screenshots, SVG badges, and document paths.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/abrilohd/portfolio.git
cd portfolio/portfolio_websites

# Install dependencies
npm install

# Create local environment file
cp .env.example .env
```

Add your Resend API key to `.env`:
```env
RESEND_API_KEY=re_your_api_key_here
```

### Development Server

```bash
npm start
# or
npm run dev
```

The application will start at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Generates optimized production assets in `build/`. Preview the build locally with:
```bash
npm run preview
```

---

## 📁 Project Structure

```
portfolio_websites/
├── api/
│   └── contact.js                # Vercel serverless function (Resend email delivery)
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── resume.pdf                # Downloadable CV
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── certificates/     # 11 official badge and certificate assets
│   │       ├── project1.jpg - project6.jpg # Verified project screenshots
│   │       ├── profile.jpg
│   │       └── profile-cutout.png
│   ├── components/
│   │   ├── common/               # CircuitOverlay, Badge, CustomCursor
│   │   ├── layout/               # Navbar, Footer, PageLoader, ScrollToTop
│   │   └── sections/
│   │       ├── hero/             # Hero, HeroAvatar, HeroMetrics
│   │       ├── about/            # About, AboutBio, AboutArchPortrait, TechStackMarquee
│   │       ├── projects/         # Projects carousel, ProjectCard
│   │       ├── certifications/   # Certifications carousel, CertificateCard
│   │       └── contact/          # Contact, ContactForm, ContactInfo
│   ├── context/
│   │   └── ThemeContext.jsx      # Theme provider (defaults strictly to Light Mode)
│   ├── data/
│   │   ├── certificates.js       # 8 verified credentials with badge & image assets
│   │   ├── identity.js           # Bio, roles, metrics, philosophy
│   │   ├── navigation.js         # 5 navigation section anchors
│   │   └── projects.js           # 6 production projects with live demos & tags
│   ├── hooks/
│   │   ├── useActiveSection.js   # Scroll-spy navigation hook
│   │   └── useCopyToClipboard.js # Click-to-copy hook with textarea fallback
│   ├── styles/
│   │   ├── global.css            # Base styles, utility classes, and typography
│   │   └── tokens.css            # Color tokens and theme variables
│   ├── App.jsx                   # Root application component
│   └── index.jsx                 # Client entry point
├── .env.example                  # Environment variable template
├── vercel.json                   # Vercel routing & serverless build config
├── vite.config.mjs               # Vite config & dev Resend middleware
├── tailwind.config.js            # Tailwind styling tokens
└── package.json
```

---

## ⚙️ Configuration & Environment Variables

### Setting Up Resend for Contact Form

1. Create a free account at [resend.com](https://resend.com).
2. Generate an API Key under **API Keys**.
3. For local development, add to `.env`:
   ```env
   RESEND_API_KEY=re_your_key_here
   ```
4. For Vercel production:
   - Go to your Project Settings on Vercel → **Environment Variables**.
   - Add `RESEND_API_KEY` with your Resend key.
   - Deployed form submissions will automatically route via `api/contact.js` to `abrsh067@gmail.com`.

---

## 🚀 Vercel Deployment

The repository includes a production-tuned `vercel.json` configured for:
- Static client build output (`build/`) via Vite.
- Serverless API function (`api/**/*.js`) via `@vercel/node`.
- Direct routing for `/api/contact` preventing SPA index fallbacks.
- Native filesystem asset handling (`{ "handle": "filesystem" }`).

Deploying to Vercel:
1. Push your changes to GitHub.
2. In Vercel, import the repository and select branch `main` (or `sw-engineer`).
3. Set the Environment Variable: `RESEND_API_KEY`.
4. Deploy!

---

## 👤 Author

**Abrham Gebremedhin**
- Email: [abrsh067@gmail.com](mailto:abrsh067@gmail.com)
- GitHub: [@abrilohd](https://github.com/abrilohd)
- LinkedIn: [Abrham Gebremedhin](https://www.linkedin.com/in/abrham-gebremedhin-962130360/)
- Twitter / X: [@abrsh067](https://x.com/abrsh067)
- Location: Addis Ababa, Ethiopia

---

## 📄 License

This project is licensed under the MIT License.
