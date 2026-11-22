# 🚀 Vercel Deployment Guide

Step-by-step production deployment guide for Abrham Gebremedhin's Portfolio (`sw-engineer` / `main` branch).

---

## Prerequisites

- GitHub account with push access
- Vercel account
- [Resend](https://resend.com) account & API Key for serverless contact delivery

---

## 🎯 Quick Deploy to Vercel

### 1. Import Repository
1. Navigate to [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and import `portfolio_websites` (or `portfolio`).
3. Select your deployment branch: `main` (or `sw-engineer`).

### 2. Configure Build & Output Settings
Vercel automatically detects the configuration from `vercel.json` and `package.json`:
- **Framework Preset**: Vite (or Other)
- **Build Command**: `npm run build` (or `vite build`)
- **Output Directory**: `build`
- **Install Command**: `npm install`

### 3. Add Environment Variables
Under **Environment Variables**, add:
```
Name:  RESEND_API_KEY
Value: re_your_resend_api_key_here
```

### 4. Deploy!
Click **Deploy**. Within 1–2 minutes, your portfolio will be live worldwide with SSL, Edge caching, and serverless contact delivery.

---

## 📋 Vercel Architecture (`vercel.json`)

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    },
    {
      "src": "api/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/contact",
      "dest": "/api/contact.js"
    },
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Why this configuration is rock-solid:
1. **Serverless Function Isolation**: Requests to `/api/contact` route directly to the `@vercel/node` lambda in `api/contact.js`.
2. **No SPA Rewrite Collision**: `/api/*` routes are handled before the SPA fallback, preventing API POST requests from being rewritten to `index.html`.
3. **Filesystem Handler**: The `{ "handle": "filesystem" }` directive guarantees all static Vite bundles (`build/assets/*`), images, and public downloads (`/resume.pdf`) are served directly.
4. **Clean SPA Routing**: Non-file paths fall through to `/index.html`.

---

## ✅ Post-Deployment Verification Checklist

Once deployed to Vercel, verify:
- [ ] Site loads cleanly in default **Light Mode** on both mobile and desktop.
- [ ] Toggle theme to **Dark Mode** via top Navbar — check that contrast, text colors, and backgrounds adapt seamlessly across all 5 sections.
- [ ] Test mobile bottom dock navigation (< md) — clicking icons smoothly scrolls to `#home`, `#about`, `#projects`, `#certifications`, `#contact`.
- [ ] Click "Download CV" in the About section — verifies `/resume.pdf` downloads cleanly without 404 or index.html corruption.
- [ ] In Projects carousel, cycle through all 6 projects — verify images load with `object-contain`, "Live Demo" appears only when available, and external links open in new tabs.
- [ ] In Certifications carousel, verify official badge/certificate images render for all 8 items, click "Verify" and "View Full Badge Wallet".
- [ ] Submit a test message through the Contact form — verify loading spinner, success banner, and receipt in `abrsh067@gmail.com` inbox.
