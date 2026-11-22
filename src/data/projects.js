import project1Img from '../assets/images/project1.jpg'
import project2Img from '../assets/images/project2.jpg'
import project3Img from '../assets/images/project3.jpg'
import project4Img from '../assets/images/project4.jpg'
import project5Img from '../assets/images/project5.jpg'
import project6Img from '../assets/images/project6.jpg'

export const projects = [
  {
    id: 'expenset',
    title: 'Expenset - Smart Expense Tracker',
    subtitle: 'AI-powered financial tracking with predictive insights',
    description:
      'A modern, full-stack expense tracking application with AI-powered insights, dual theme support, and responsive design — engineered with machine learning category prediction, anomaly detection, and interactive financial analytics.',
    image: project1Img,
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Chart.js', 'Machine Learning'],
    github: 'https://github.com/abrilohd',
    live: 'https://expense-tracker-landing-three.vercel.app',
    featured: true,
    status: 'Production',
    achievements: [
      'Automated multi-category expense categorization using supervised ML models',
      'Real-time anomaly detection engine for atypical spending behavior',
      'Dual theme support with responsive interactive financial analytics dashboards',
    ],
  },

  {
    id: 'voice-ai-study-coach',
    title: 'Voice AI Study Coach',
    subtitle: 'Startup-grade conversational AI tutor with no-lock-in LLM routing',
    description:
      'A startup-grade, production-ready AI study coach built with a no-lock-in LLM router, voice I/O, RAG-ready document ingestion, and a PostgreSQL-backed persistence layer. Designed to scale to 100k users without rewriting a single service boundary, with every module independently replaceable.',
    image: project2Img,
    tags: ['Python', 'FastAPI', 'Voice AI', 'RAG', 'PostgreSQL'],
    github: 'https://github.com/abrilohd/Voice-AI-Study-Coach',
    live: null,
    featured: true,
    status: 'In Development',
    achievements: [
      'Provider-agnostic LLM router eliminating vendor lock-in across inference backends',
      'Low-latency voice I/O pipeline paired with RAG-ready document ingestion',
      'Clean modular service boundaries backed by PostgreSQL persistence',
    ],
  },

  {
    id: 'dropnote',
    title: 'DropNote',
    subtitle: 'Full-stack Django knowledge capture & technical note platform',
    description:
      'DropNote is a full-stack Django application for capturing, organizing, searching, and revisiting technical knowledge. It includes categorized note management, search, pagination, responsive templates, dark mode, Django admin support, PostgreSQL integration, and a Vercel-ready production deployment.',
    image: project3Img,
    tags: ['Django', 'PostgreSQL', 'Python', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/abrilohd/DropNote-',
    live: 'https://dropnote-weld.vercel.app',
    featured: true,
    status: 'Production',
    achievements: [
      'Categorized technical knowledge organization with fast search and pagination',
      'Full dark mode support with responsive templates and Django admin integration',
      'PostgreSQL database backend configured for seamless Vercel production deployment',
    ],
  },

  {
    id: 'blog-platform',
    title: 'Intelligent Content Platform',
    subtitle: 'Django CMS with AI-assisted publishing workflows',
    description:
      'Modern blog and content management platform engineered with semantic search, NLP-powered auto-tagging, role-based administration, and scalable publishing tools built for performance.',
    image: project4Img,
    tags: ['Django', 'Python', 'SQLite', 'NLP', 'Tailwind CSS'],
    github: 'https://github.com/abrilohd',
    live: 'https://blog-1dlm.onrender.com/',
    featured: false,
    status: 'Production',
    achievements: [
      'NLP-based automatic article classification and tagging system',
      'High-speed semantic search pipeline utilizing TF-IDF vectorization',
      'Granular role-based admin dashboard with clean editorial workflows',
    ],
  },

  {
    id: 'dejen-security',
    title: 'Dejen Security',
    subtitle: 'Android SMS phishing & mobile fraud shield for Ethiopia (Project Manager)',
    description:
      'An Android security application built to protect users in Ethiopia from SMS phishing, fake Telebirr lotteries, and fraudulent bank notifications — led end-to-end as Project Manager from threat modeling and sprint planning to release delivery.',
    image: project5Img,
    tags: ['Android', 'Mobile Security', 'Anti-Phishing', 'Project Management'],
    github: 'https://github.com/Dejen-Security/dejen',
    live: null,
    featured: false,
    status: 'Active Project',
    role: 'Project Manager',
    achievements: [
      'Led cross-functional engineering delivery and product roadmap as Project Manager',
      'Real-time detection of fake Telebirr lottery lures and spoofed bank alerts',
      'On-device SMS threat filtering tailored specifically to Ethiopian mobile users',
    ],
  },

  {
    id: 'flutter-finance-app',
    title: 'Flutter Financial Control App',
    subtitle: 'Cross-platform personal money & expense management mobile app',
    description:
      'A cross-platform Flutter mobile application designed for personal financial control, daily expense tracking, budget limits, and clear spending visibility across iOS and Android devices.',
    image: project6Img,
    tags: ['Flutter', 'Dart', 'Mobile Finance', 'Cross-Platform'],
    github: 'https://github.com/abrilohd/Flutter-cross-platform',
    live: null,
    featured: false,
    status: 'In Development',
    achievements: [
      'Clean cross-platform Flutter UI for tracking income, expenses, and budgets',
      'Category-level spending breakdown to keep daily personal finances in control',
      'Modular Dart state management built for smooth mobile performance',
    ],
  },
]