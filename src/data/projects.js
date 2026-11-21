export const projects = [
  {
    id: 'expense-tracker',
    title: 'Expense Intelligence System',
    description:
      'Full-stack expense tracking application featuring machine learning-driven category prediction, anomaly detection for spending spikes, and interactive visual financial dashboards designed for high-precision expense analytics.',
    image: null, // Add path like: '/images/expense-tracker.png' or require('../assets/images/...')
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Chart.js', 'Machine Learning'],
    github: 'https://github.com/abrilohd',
    live: 'https://expense-tracker-landing-three.vercel.app',
    featured: true,
    status: 'Production',
    achievements: [
      'Automated multi-category expense categorization using supervised ML models',
      'Real-time anomaly detection engine for atypical spending behavior',
      'Interactive responsive financial analytics dashboard with visual breakdowns',
    ],
  },

  {
    id: 'blog-platform',
    title: 'Intelligent Content Platform',
    description:
      'Modern blog and content management platform engineered with semantic search, NLP-powered auto-tagging, role-based administration, and scalable publishing tools built for performance.',
    image: null,
    tags: ['Django', 'Python', 'SQLite', 'NLP', 'Tailwind CSS'],
    github: 'https://github.com/abrilohd',
    live: 'https://blog-1dlm.onrender.com/',
    featured: true,
    status: 'Production',
    achievements: [
      'NLP-based automatic article classification and tagging system',
      'High-speed semantic search pipeline utilizing TF-IDF vectorization',
      'Granular role-based admin dashboard with clean editorial workflows',
    ],
  },

  {
    id: 'python-runner',
    title: 'Cloud Execution Engine',
    description:
      'Browser-based Python execution sandbox with secure Docker container isolation, real-time WebSocket terminal output streaming, syntax highlighting, and stateful execution sessions.',
    image: null,
    tags: ['Python', 'React', 'WebSockets', 'Docker', 'FastAPI'],
    github: 'https://github.com/abrilohd',
    live: '#',
    featured: true,
    status: 'Open Source',
    achievements: [
      'Sandboxed Docker-based isolated runtime with sub-second execution spin-up',
      'Bidirectional WebSocket channel for live terminal stdout/stderr streaming',
      'Session management with execution history and memory monitoring',
    ],
  },

  {
    id: 'azure-manager',
    title: 'Azure Resource Orchestrator',
    description:
      'Cloud management platform for orchestrating automated Azure resource deployments, monitoring live cloud infrastructure health, and tracking operational budgets through a centralized control pane.',
    image: null,
    tags: ['Azure', 'Python', 'REST API', 'React', 'Cloud'],
    github: 'https://github.com/abrilohd',
    live: '#',
    featured: false,
    status: 'Hackathon',
    achievements: [
      'Automated Azure resource provisioning workflows reducing manual deployment time',
      'Live cloud infrastructure health telemetry and threshold-based budget alerts',
      'Unified REST API gateway integrating multiple Azure resource groups',
    ],
  },

  {
    id: 'ai-chatbot',
    title: 'RAG-Powered Knowledge Assistant',
    description:
      'Retrieval-augmented AI assistant designed to extract insights and answer complex questions from uploaded documents using vector embeddings, hybrid semantic retrieval, and contextual LLM generation.',
    image: null,
    tags: ['LangChain', 'OpenAI', 'FastAPI', 'Pinecone', 'React'],
    github: 'https://github.com/abrilohd',
    live: '#',
    featured: false,
    status: 'Research',
    achievements: [
      'High-accuracy semantic document retrieval pipeline with Pinecone vector store',
      'Context-aware answer synthesis powered by advanced prompt grounding',
      'Automated document parsing, chunking, and metadata extraction pipeline',
    ],
  },

  {
    id: 'api-gateway',
    title: 'FastAPI Microservices Gateway',
    description:
      'Scalable reverse proxy and API gateway built with FastAPI for distributed microservices, providing centralized JWT authentication, Redis-backed rate limiting, and intelligent request routing.',
    image: null,
    tags: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'JWT'],
    github: 'https://github.com/abrilohd',
    live: '#',
    featured: false,
    status: 'Production',
    achievements: [
      'Stateless JWT authentication architecture with automated token rotation',
      'Redis-powered sliding window rate limiting and distributed cache layer',
      'Concurrent microservice request aggregation reducing end-to-end network latency',
    ],
  },
]
