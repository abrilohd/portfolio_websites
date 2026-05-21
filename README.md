# 🚀 AI Engineer Portfolio

A premium, fully responsive portfolio website showcasing AI engineering expertise, built with React, Tailwind CSS, and modern web technologies.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### 🎨 Design & UX
- **Premium Design**: Professional, clean aesthetic with Python Yellow (#F5C518) brand identity
- **Dual Theme Support**: Seamless dark/light mode toggle with persistent preferences
- **Fully Responsive**: Optimized for all devices (320px → 1440px+)
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Custom Cursor**: Interactive cursor effects for enhanced UX
- **Circuit Overlays**: Subtle tech-themed background patterns

### 🧩 Components
- **Hero Section**: Eye-catching introduction with animated metrics and tech stack
- **About Section**: Professional bio with quick stats and work style cards
- **Skills Carousel**: Interactive 3-card carousel showcasing technical expertise
- **Projects Showcase**: Carousel layout highlighting AI projects with live demos
- **Certifications**: Professional credentials with category badges
- **Contact Form**: EmailJS-powered form with social links
- **Ask Abrham AI**: Draggable AI chat widget powered by Claude API

### 🛠️ Technical Features
- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth animations and page transitions
- **EmailJS Integration**: Working contact form without backend
- **Claude AI Integration**: Real-time AI chat assistant
- **Theme Context**: Global dark/light mode management
- **Responsive Breakpoints**: 6 breakpoints for perfect adaptation
- **Performance Optimized**: ~117KB JS, ~9.5KB CSS (gzipped)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/abrhamgg/portfolio.git
cd portfolio/portfolio_websites

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm start
```

The app will open at `http://localhost:3000`

---

## 📁 Project Structure

```
portfolio_websites/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with mobile menu
│   │   ├── Hero.jsx              # Hero section
│   │   ├── About.jsx             # About section
│   │   ├── Skills.jsx            # Skills carousel
│   │   ├── Projects.jsx          # Projects carousel
│   │   ├── Certifications.jsx    # Certifications carousel
│   │   ├── Contact.jsx           # Contact form + social links
│   │   ├── AskAbrham.jsx         # AI chat widget
│   │   ├── Footer.jsx            # Footer
│   │   └── ...                   # Utility components
│   ├── context/
│   │   └── ThemeContext.jsx      # Dark/light theme management
│   ├── data/
│   │   ├── identity.js           # Personal information
│   │   ├── skills.js             # Skills data
│   │   ├── projects.js           # Projects data
│   │   └── certificates.js       # Certifications data
│   ├── utils/
│   │   ├── askAbrham.js          # AI chat logic
│   │   └── cn.js                 # Utility functions
│   ├── styles/
│   │   └── global.css            # Global styles + responsive CSS
│   ├── App.jsx                   # Main app component
│   └── index.js                  # Entry point
├── .env                          # Environment variables
├── tailwind.config.js            # Tailwind configuration
├── package.json
└── README.md
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Anthropic API Key for Ask Abrham AI Widget
REACT_APP_ANTHROPIC_API_KEY=your_anthropic_api_key

# EmailJS Configuration for Contact Form
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Getting API Keys

**Anthropic API (for AI Chat)**:
1. Visit [https://console.anthropic.com](https://console.anthropic.com)
2. Create an account and generate an API key
3. Add to `.env` as `REACT_APP_ANTHROPIC_API_KEY`

**EmailJS (for Contact Form)**:
1. Visit [https://emailjs.com](https://emailjs.com)
2. Create account → Add email service → Create template
3. Get Service ID, Template ID, and Public Key
4. Add to `.env` file

---

## 🎨 Customization

### Personal Information

Edit `src/data/identity.js`:
```javascript
export const identity = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  location: 'Your Location',
  // ... more fields
}
```

### Skills

Edit `src/data/skills.js`:
```javascript
export const skills = [
  {
    category: 'AI & Machine Learning',
    icon: 'brain',
    items: ['Python', 'TensorFlow', 'PyTorch', ...]
  },
  // ... more categories
]
```

### Projects

Edit `src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    tags: ['Python', 'FastAPI', ...],
    github: 'https://github.com/...',
    live: 'https://...',
    // ... more fields
  },
  // ... more projects
]
```

### Theme Colors

Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  py: {
    500: '#F5C518', // Python Yellow - brand color
    // ... other shades
  },
  // ... other colors
}
```

---

## 📱 Responsive Breakpoints

```javascript
'xs': '375px',   // Extra small phones
'sm': '640px',   // Small phones (landscape)
'md': '768px',   // Tablets
'lg': '1024px',  // Small laptops
'xl': '1280px',  // Desktops
'2xl': '1440px', // Large desktops
```

### Responsive Features
- **Mobile (<768px)**: Hamburger menu, single column layouts, 1-card carousels
- **Tablet (768px-1024px)**: Adaptive layouts, 3-card carousels
- **Desktop (>1024px)**: Full layouts, all features enabled

---

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

Output: `build/` directory with optimized static files

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=build
```

### Deploy to GitHub Pages

```bash
# Add to package.json
"homepage": "https://yourusername.github.io/portfolio"

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

---

## 🧪 Testing

### Run Development Server
```bash
npm start
```

### Build Test
```bash
npm run build
```

### Responsive Testing
Test at these widths:
- 320px (iPhone SE)
- 375px (iPhone 12/13)
- 768px (iPad)
- 1024px (iPad Pro)
- 1280px (Laptop)
- 1440px (Desktop)

---

## 📊 Performance

**Bundle Sizes** (gzipped):
- JavaScript: ~117 KB
- CSS: ~9.5 KB
- Total: ~127 KB

**Lighthouse Scores**:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🛠️ Tech Stack

### Core
- **React 18** - UI library
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

### APIs & Services
- **EmailJS** - Contact form
- **Anthropic Claude** - AI chat widget

### Build Tools
- **Create React App** - Build tooling
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 📝 Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from CRA (one-way operation)
```

---

## 🎯 Features Checklist

### Design
- ✅ Premium professional aesthetic
- ✅ Python Yellow (#F5C518) brand identity
- ✅ Dark/light theme toggle
- ✅ Smooth animations
- ✅ Custom cursor
- ✅ Circuit pattern overlays

### Responsive
- ✅ Mobile-first approach
- ✅ 6 responsive breakpoints
- ✅ Hamburger menu on mobile
- ✅ Touch-friendly interactions
- ✅ Adaptive carousels
- ✅ Optimized typography

### Functionality
- ✅ Working contact form (EmailJS)
- ✅ AI chat widget (Claude API)
- ✅ Interactive carousels
- ✅ Keyboard navigation
- ✅ Auto-advance carousels
- ✅ Social media links
- ✅ Smooth scroll navigation

### Performance
- ✅ Optimized bundle size
- ✅ Lazy loading
- ✅ GPU-accelerated animations
- ✅ Efficient CSS
- ✅ Fast load times

### Accessibility
- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ ARIA labels
- ✅ Focus states
- ✅ Screen reader friendly
- ✅ Reduced motion support

---

## 📚 Documentation

- **[Quick Start Guide](./QUICK_START.md)** - Get started in 5 minutes
- **[Implementation Summary](./IMPLEMENTATION_SUMMARY.md)** - Complete feature list
- **[Responsive Guide](./RESPONSIVE_BREAKPOINTS_GUIDE.md)** - Responsive design details
- **[Responsive Design Complete](./RESPONSIVE_DESIGN_COMPLETE.md)** - Full responsive documentation

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Abrham Gebremedhin**
- Email: abrsh067@gmail.com
- GitHub: [@abrilohd](https://github.com/abrilohd)
- LinkedIn: [Abrham Gebremedhin](https://www.linkedin.com/in/abrham-gebremedhin-962130360/)
- Twitter: [@abrsh067](https://x.com/abrsh067)
- Location: Addis Ababa, Ethiopia

---

## 🙏 Acknowledgments

- Design inspiration from modern AI/tech portfolios
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- AI chat powered by [Anthropic Claude](https://www.anthropic.com/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Email me at abrsh067@gmail.com
- Connect on LinkedIn

---

**⭐ If you like this project, please give it a star on GitHub!**

---

Made with ❤️ by Abrham Gebremedhin
