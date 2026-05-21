# Abrham G/medhin — AI Systems Engineer Portfolio

> **$100K AI Engineer Portfolio** — Python × AI Design System

A distinctive, production-ready portfolio showcasing AI engineering expertise through a custom Python × AI color palette, quantified project metrics, and professional presentation.

---

## 🎨 Design System

### **Color Palette**
- **Primary Accent:** Python Yellow (#F5C518)
- **Structure:** Navy ramp (#07112A → #4A7FD4)
- **Secondary:** AI Blue (#2B6CC4)
- **Semantic:** Success teal (#1D9E75)

### **Typography**
- **Display:** Syne — Headings, nav logo (authority)
- **Body:** DM Sans — Text, UI elements (readability)
- **Mono:** JetBrains Mono — Code, tags, labels (technical)

### **Patterns**
- Circuit overlay in Hero and Contact sections
- Metric lines on all project cards
- Color-coded category indicators
- Status badges for project types

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

---

## 📁 Project Structure

```
portfolio_websites/
├── public/
│   ├── index.html          # HTML template with fonts
│   ├── favicon.ico
│   └── cv.pdf              # Your CV (add this)
├── src/
│   ├── components/         # All React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── CircuitOverlay.jsx
│   ├── data/              # Content data
│   │   ├── projects.js    # Project data with metrics
│   │   ├── certificates.js # Certification data
│   │   ├── skills.js      # Skills organized in pillars
│   │   └── identity.js    # Personal info
│   ├── context/
│   │   └── ThemeContext.jsx # Dark/light mode
│   ├── styles/
│   │   └── global.css     # Design tokens + utilities
│   ├── App.jsx
│   └── index.js
├── tailwind.config.js     # Complete color system
├── package.json
└── vercel.json           # Deployment config
```

---

## 🎯 Key Features

### **1. Distinctive Brand Identity**
- Python × AI color palette (not generic purple)
- Circuit pattern motif
- Professional typography hierarchy

### **2. Quantified Project Metrics**
Every project includes:
- ✅ Status badge (Production/Open Source/Hackathon/Research)
- ✅ Metric line (↓ 70% time, ↑ 90% accuracy, etc.)
- ✅ 2-3 specific achievements
- ✅ Stack tags (max 5)

### **3. Professional Presentation**
- 5 clear skill pillars with color-coding
- Category-colored certifications
- Always-dark Hero and Contact sections
- Smooth animations and transitions

### **4. Dark/Light Mode**
- Intentional design in both modes
- Python yellow accent works in both
- Navy structure adapts properly

### **5. Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

---

## 📊 Content Overview

### **Projects (6 total)**
1. **Expense Intelligence System** — ↑ 90% ML accuracy (Production)
2. **Intelligent Content Platform** — ↓ 70% tagging time (Production)
3. **Cloud Execution Engine** — ⚡ Sub-200ms latency (Open Source)
4. **Azure Resource Orchestrator** — ↓ 60% provisioning time (Hackathon)
5. **RAG-Powered Knowledge Assistant** — ↑ 93% accuracy (Research)
6. **FastAPI Microservices Gateway** — ↑ 3× throughput (Production)

### **Skills (5 pillars)**
1. **AI & Machine Learning** — Python, OpenAI, LangChain, RAG
2. **Backend Engineering** — FastAPI, Django, PostgreSQL, Redis
3. **Cloud & Infrastructure** — Azure, Docker, CI/CD, Linux
4. **Frontend & Interfaces** — React, TypeScript, Tailwind, Vite
5. **Data & Analytics** — Pandas, NumPy, SQL, Visualization

### **Certifications (5)**
1. Python for Data Science & AI (AI/ML)
2. Azure Cloud Fundamentals (Cloud)
3. Graph Neural Networks
4. SQL for Data Engineering (Data)
5. Advanced Python Programming (Backend)

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** React Icons
- **Build Tool:** Create React App
- **Deployment:** Vercel (recommended)

---

## 📝 Customization Guide

### **Update Personal Info**
Edit `src/data/identity.js`:
```javascript
export const identity = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  // ... rest of your info
}
```

### **Add/Edit Projects**
Edit `src/data/projects.js`:
```javascript
{
  title: 'Project Name',
  metric: '↓ 40% processing time',  // REQUIRED
  status: 'Production',              // REQUIRED
  achievements: [                    // REQUIRED
    'Achievement 1',
    'Achievement 2'
  ],
  // ... rest of project data
}
```

### **Update Skills**
Edit `src/data/skills.js`:
```javascript
{
  category: 'Category Name',
  icon: 'brain', // brain, server, cloud, monitor, chart
  items: ['Skill 1', 'Skill 2', ...]
}
```

### **Change Colors**
Edit `tailwind.config.js` colors section. See `COLOR_PALETTE.md` for reference.

---

## 📚 Documentation

- **[DESIGN_SYSTEM_TRANSFORMATION.md](./DESIGN_SYSTEM_TRANSFORMATION.md)** — Complete transformation guide
- **[COLOR_PALETTE.md](./COLOR_PALETTE.md)** — Comprehensive color reference
- **[BEFORE_AFTER.md](./BEFORE_AFTER.md)** — Visual comparison
- **[IMPLEMENTATION_COMPLETE.md](./IMPLEMENTATION_COMPLETE.md)** — Implementation checklist
- **[DEPLOY.md](./DEPLOY.md)** — Deployment guide

---

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
npm install -g vercel
vercel --prod
```

### **Netlify**
```bash
npm run build
# Drag and drop 'build' folder to Netlify
```

### **GitHub Pages**
```bash
npm run deploy
```

See [DEPLOY.md](./DEPLOY.md) for detailed instructions.

---

## ✅ Pre-Deployment Checklist

- [ ] Update GitHub links in `src/data/projects.js`
- [ ] Update credential links in `src/data/certificates.js`
- [ ] Add CV file to `public/cv.pdf`
- [ ] Test contact form
- [ ] Test dark/light mode toggle
- [ ] Test on mobile devices
- [ ] Verify all external links work

---

## 🎯 What Makes This $100K Ready

1. **Distinctive Design** — Python × AI palette, not generic purple
2. **Quantified Impact** — Every project has metrics
3. **Technical Authority** — 5 clear skill pillars, proper architecture notes
4. **International Appeal** — Clean, professional, remote-ready
5. **Seniority Signals** — Systems thinking, outcomes over features

---

## 📞 Contact

**Abrham G/medhin**  
AI Systems Engineer  
Addis Ababa, Ethiopia

- **Email:** abrsh067@gmail.com
- **GitHub:** [github.com/abrilohd](https://github.com/abrilohd)
- **LinkedIn:** [linkedin.com/in/abrham-gebremedhin](https://www.linkedin.com/in/abrham-gebremedhin-962130360/)
- **Twitter:** [@abrsh067](https://x.com/abrsh067)

---

## 📄 License

This portfolio is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **Design System:** Inspired by Python × AI hero image
- **Fonts:** Syne, DM Sans, JetBrains Mono (Google Fonts)
- **Icons:** React Icons
- **Animations:** Framer Motion

---

**Zero purple. 100% Python × AI. Ready for $100K roles.** ✅

Built with intention. Designed for impact. Engineered for success.
