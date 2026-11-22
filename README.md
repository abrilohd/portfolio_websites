<<<<<<< HEAD
# 🚀 Software Engineer & AI Product Portfolio

A modern, high-performance portfolio website showcasing full-stack software engineering, mobile development, and production AI products — built with React 18, Vite, Tailwind CSS, Framer Motion, and deployed seamlessly on Vercel with serverless email delivery.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.x-blue)
![Vite](https://img.shields.io/badge/Vite-8.x-646cff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)
=======
# Abrham G/medhin | AI Engineer Portfolio

Hi, I’m Abrham - an AI Engineer building practical systems that mix machine learning, backend engineering, and cloud deployment.

This portfolio is my digital home: a place to showcase the projects I build, the systems I design, and the kind of engineering problems I enjoy solving. It’s built for people who care about real-world AI systems, not just flashy demos.

![Portfolio Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.x-61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind-3.x-38BDF8)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000)
>>>>>>> a2742d578b1c2d83cc37c71736edca3fa57c2513

---

## About this project

<<<<<<< HEAD
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
=======
This project is a personal portfolio website designed to reflect my work as:

- an AI engineer
- a backend-focused developer
- a builder of production-ready systems
- someone interested in LLM apps, cloud infrastructure, and practical automation

I wanted a space that felt modern, professional, and personal - something that communicates technical ability without losing the human side.
>>>>>>> a2742d578b1c2d83cc37c71736edca3fa57c2513

---

## What’s inside

- A polished portfolio landing page
- About section describing my engineering mindset
- Skills and technology focus areas
- Featured projects with results and impact
- Certifications and learning history
- Contact section with social links
- AI assistant widget for quick portfolio interactions
- Light/dark theme support
- Responsive layout for desktop, tablet, and mobile

---

## Tech stack

### Frontend
- React
- Tailwind CSS
- Framer Motion
- React Icons

### AI / Product work
- Python
- FastAPI
- Django
- RAG systems
- LLM integrations
- Prompt engineering

### Deployment / infrastructure
- Vercel
- Docker
- Azure
- GitHub Actions
- CI/CD workflows

---

## Featured focus areas

I work across the space between AI and software engineering. My main focus areas include:

- LLM application development
- RAG and vector search
- FastAPI backend systems
- Cloud deployment and automation
- Data-driven product thinking
- Production-grade AI engineering

---

## Projects showcased

This portfolio highlights projects such as:

- Expense Intelligence System
- Intelligent Content Platform
- Cloud Execution Engine
- Azure Resource Orchestrator
- RAG-powered knowledge assistant
- FastAPI microservices gateway

Each project is presented with a short explanation, tech stack, and measurable outcomes.

---

## Local development

### Prerequisites
<<<<<<< HEAD
- Node.js 18+ and npm
=======

- Node.js 18+
- npm
- Git
>>>>>>> a2742d578b1c2d83cc37c71736edca3fa57c2513

### Install and run

```bash
<<<<<<< HEAD
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
=======
git clone https://github.com/abrilohd/portfolio_websites.git
cd portfolio_websites
npm install
npm start
```

The app should run locally at:

```bash
http://localhost:3000
>>>>>>> a2742d578b1c2d83cc37c71736edca3fa57c2513
```

---

<<<<<<< HEAD
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
=======
## Environment variables

If you want the AI chat and contact form to work fully, create a `.env` file in the root directory:

```env
REACT_APP_ANTHROPIC_API_KEY=your_anthropic_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

If you’re only testing the UI, the app can still run without these values.

---

## Production build

```bash
npm run build
```

This creates a production-ready build folder for deployment.

---

## Deployment

This project is set up to deploy easily on Vercel.

```bash
npm install -g vercel
vercel --prod
```

Or deploy through the Vercel dashboard by importing the repository and setting the project to use the React app build settings.

---

## Project structure

```bash
portfolio_websites/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── utils/
│   ├── App.jsx
│   └── index.js
├── package.json
├── README.md
├── .env
├── tailwind.config.js
└── vercel.json
```

---

## Why I built this

I built this site to document my growth as an engineer and to make my work easier to understand for recruiters, collaborators, and clients.

It is not just a portfolio for aesthetics. It is a practical representation of how I think:

- build real things
- keep systems reliable
- make technical work understandable
- focus on impact, not just hype

---

## Connect with me

- GitHub: [@abrilohd](https://github.com/abrilohd)
- LinkedIn: [Abrham Gebremedhin](https://www.linkedin.com/in/abrham-gebremedhin-962130360/)
- X/Twitter: [@abrsh067](https://x.com/abrsh067)
- Email: [abrsh067@gmail.com](mailto:abrsh067@gmail.com)
>>>>>>> a2742d578b1c2d83cc37c71736edca3fa57c2513
- Location: Addis Ababa, Ethiopia

---

<<<<<<< HEAD
## 📄 License

This project is licensed under the MIT License.
=======
## License

This project is licensed under the MIT License.

---

## Final note

This portfolio is a reflection of my work, my interests, and my direction as an engineer.

I’m building toward more meaningful AI systems, stronger backend foundations, and opportunities to contribute to teams solving real problems.

If you’re building something interesting, I’d love to connect.

---

Made with care by Abrham Gebremedhin.
>>>>>>> a2742d578b1c2d83cc37c71736edca3fa57c2513
