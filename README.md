# Abrham Gebremedhin - Software Engineer Portfolio

A personal portfolio website built with React 18, Vite, Tailwind CSS, and Framer Motion. The site presents full-stack web development, mobile applications, and artificial intelligence projects. It includes a serverless contact form powered by Resend and is configured for deployment on Vercel.

---

## Overview

This portfolio serves as a central place to showcase completed work, technical background, and certifications. It is designed to be fast, accessible, and responsive across all device sizes.

### Key Highlights
- Clean visual layout with light and dark theme support (defaults to light mode).
- Mobile navigation dock optimized for touch devices.
- Interactive project showcase with direct links to source code and live demos.
- Verified certifications section with links to official credentials.
- Contact form connected to a secure serverless backend.

---

## Sections

### 1. Home
The landing area introduces my core technical roles using a smooth typewriter animation, key career metrics, and quick call-to-action buttons.

### 2. About
A summary of my engineering background, work philosophy, and technical focus areas. It includes a single-row continuous tech stack marquee and a direct link to download my resume (`resume.pdf`).

### 3. Projects
An interactive carousel presenting six featured projects. Each entry includes project details, core technologies used, measurable achievements, and links to GitHub repositories and live deployments.

### 4. Certifications
A card carousel presenting eight professional credentials from Microsoft, Udemy, Coursera, and Skillsoft. Each card displays official badge or certificate artwork, issuance dates, and external verification links.

### 5. Contact
A split card layout providing direct contact details, one-click email copying with clipboard fallback, social profile links, and an inquiry form that delivers messages via an email API.

---

## Tech Stack

- **Frontend Library:** React 18
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Backend / API:** Vercel Serverless Functions (Node.js runtime)
- **Email Service:** Resend API
- **Deployment:** Vercel

---

## Project Structure

```text
portfolio_websites/
├── api/
│   └── contact.js                # Serverless contact handler using Resend
├── public/
│   ├── favicon.ico               # Browser favicon
│   ├── favicon.svg               # Vector favicon
│   ├── manifest.json             # Web application manifest
│   ├── resume.pdf                # Downloadable resume
│   └── robots.txt                # Search engine directives
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── certificates/     # Certificate images and badge icons
│   │       ├── project1.jpg - project6.jpg # Project preview screenshots
│   │       ├── profile.jpg       # Profile picture
│   │       └── profile-cutout.png# Profile cut-out portrait
│   ├── components/
│   │   ├── common/               # Shared components (CircuitOverlay, Badge)
│   │   ├── layout/               # Navbar, Footer, PageLoader, ScrollToTop
│   │   └── sections/
│   │       ├── hero/             # Hero banner and metric counters
│   │       ├── about/            # Biography, portrait, and tech marquee
│   │       ├── projects/         # Projects carousel and project cards
│   │       ├── certifications/   # Certifications carousel and cards
│   │       └── contact/          # Contact details and email form
│   ├── context/
│   │   └── ThemeContext.jsx      # Theme state management (light / dark)
│   ├── data/
│   │   ├── certificates.js       # Certification data
│   │   ├── identity.js           # Personal bio, titles, and metrics
│   │   ├── navigation.js         # Navigation links and section IDs
│   │   └── projects.js           # Project portfolio data
│   ├── hooks/
│   │   ├── useActiveSection.js   # Scroll-spy navigation hook
│   │   └── useCopyToClipboard.js # Clipboard utility hook
│   ├── styles/
│   │   ├── global.css            # Base styles, utility classes, and typography
│   │   └── tokens.css            # Color variables and design tokens
│   ├── App.jsx                   # Main application component
│   └── index.jsx                 # Application entry point
├── .env.example                  # Environment variable template
├── .gitignore                    # Git ignored files and directories
├── DEPLOYMENT.md                 # Detailed deployment instructions
├── FINAL_STATUS.md               # Audit and verification summary
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind configuration
├── vercel.json                   # Vercel deployment routes and build rules
└── vite.config.mjs               # Vite bundler configuration and dev middleware
```

---

## Getting Started

### Prerequisites
- Node.js 18 or newer
- npm (comes with Node.js)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abrilohd/portfolio.git
   cd portfolio/portfolio_websites
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your local environment file:
   ```bash
   cp .env.example .env
   ```

4. Add your Resend API key to `.env`:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```
   *(Note: You can obtain a free API key at [resend.com](https://resend.com). The site will render without this key, but the contact form submission requires it.)*

### Available Scripts

- **`npm run dev`** (or **`npm start`**): Starts the local development server at `http://localhost:3000`. Includes live reload and local middleware for the contact endpoint.
- **`npm run build`**: Compiles and optimizes assets into the `build/` folder for production.
- **`npm run preview`**: Locally serves the production build from the `build/` folder to verify production output.

---

## Deployment to Vercel

This repository is configured for deployment on Vercel through `vercel.json`.

1. Push your repository to GitHub.
2. In Vercel, click **Add New Project** and select this repository.
3. Keep default settings:
   - **Framework Preset:** Vite (or Other)
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
4. Add the following environment variable in Vercel settings:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your Resend API key
5. Click **Deploy**.

The routing in `vercel.json` ensures that:
- Calls to `/api/contact` run the serverless function in `api/contact.js`.
- Static files (`/assets/*`, `/resume.pdf`, `/favicon.*`) are served directly from the filesystem.
- Single-page application routes resolve to `index.html`.

---

## Author

**Abrham Gebremedhin**
- Email: [abrsh067@gmail.com](mailto:abrsh067@gmail.com)
- GitHub: [github.com/abrilohd](https://github.com/abrilohd)
- LinkedIn: [linkedin.com/in/abrham-gebremedhin-962130360](https://www.linkedin.com/in/abrham-gebremedhin-962130360/)
- X / Twitter: [x.com/abrsh067](https://x.com/abrsh067)
- Location: Addis Ababa, Ethiopia

---

## License

This project is licensed under the MIT License.
