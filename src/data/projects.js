export const projects = [
  {
    id: 'expense-tracker',
    title: 'Expense Intelligence System',
    subtitle: 'AI-powered financial tracking with predictive analytics',
    description:
      'Full-stack expense tracking application with machine learning-driven category prediction, anomaly detection, and interactive financial dashboards for smarter expense management.',
    tags: ['Python', 'FastApi', 'PostgreSQL', 'Chart.js', 'Machine Learning'],
    github: 'https://github.com/abrilohd',
    live: 'https://expense-tracker-landing-three.vercel.app',
    featured: true,
    status: 'Production',
    metric: '90% categorization accuracy',
    metricIcon: '↑',
    achievements: [
      'Automated expense categorization using ML models',
      'Real-time anomaly detection for spending behavior',
      'Interactive analytics dashboard with visual insights',
    ],
  },

  {
    id: 'blog-platform',
    title: 'Intelligent Content Platform',
    subtitle: 'Django CMS with AI-assisted publishing workflows',
    description:
      'Modern blog and content management platform with semantic search, NLP-powered tagging, role-based administration, and scalable publishing tools.',
    tags: ['Django', 'Python', 'SQLite', 'NLP', 'Tailwind CSS'],
    github: 'https://github.com/abrilohd',
    live: 'https://blog-1dlm.onrender.com/',
    featured: true,
    status: 'Production',
    metric: '70% faster content tagging',
    metricIcon: '↓',
    achievements: [
      'NLP-based automatic article tagging system',
      'Semantic search using TF-IDF vectorization',
      'Role-based admin dashboard with clean UI',
    ],
  },

  {
    id: 'python-runner',
    title: 'Cloud Execution Engine',
    subtitle: 'Sandboxed Python execution with live streaming',
    description:
      'Browser-based Python execution platform with Docker isolation, real-time terminal streaming, syntax highlighting, and secure execution sessions.',
    tags: ['Python', 'React', 'WebSockets', 'Docker', 'FastAPI'],
    github: 'https://github.com/abrilohd',
    live: '#',
    featured: true,
    status: 'Open Source',
    metric: 'Sub-200ms execution speed',
    metricIcon: '⚡',
    achievements: [
      'Secure Docker-based isolated execution environment',
      'Real-time WebSocket output streaming',
      'Execution history and session management system',
    ],
  },

  {
    id: 'azure-manager',
    title: 'Azure Resource Orchestrator',
    subtitle: 'Cloud automation and infrastructure monitoring',
    description:
      'Cloud management platform for automating Azure resource deployment, monitoring infrastructure health, and tracking operational costs through a centralized dashboard.',
    tags: ['Azure', 'Python', 'REST API', 'React', 'Cloud'],
    github: 'https://github.com/abrilohd',
    live: '#',
    featured: false,
    status: 'Hackathon',
    metric: '60% faster provisioning',
    metricIcon: '↓',
    achievements: [
      'Automated Azure resource provisioning workflows',
      'Live infrastructure monitoring and budget alerts',
      'REST API integration with centralized dashboard',
    ],
  },

  {
    id: 'ai-chatbot',
    title: 'RAG-Powered Knowledge Assistant',
    subtitle: 'AI document Q&A with semantic retrieval',
    description:
      'Retrieval-augmented AI assistant capable of answering questions from uploaded documents using vector embeddings, semantic search, and contextual AI responses.',
    tags: ['LangChain', 'OpenAI', 'FastAPI', 'Pinecone', 'React'],
    github: 'https://github.com/abrilohd',
    live: '#',
    featured: false,
    status: 'Research',
    metric: '93% answer accuracy',
    metricIcon: '↑',
    achievements: [
      'Semantic document search with vector embeddings',
      'Context-aware AI responses powered by GPT models',
      'Document preprocessing and chunking pipeline',
    ],
  },

  {
    id: 'api-gateway',
    title: 'FastAPI Microservices Gateway',
    subtitle: 'High-performance API orchestration system',
    description:
      'Scalable API gateway built with FastAPI for authentication, routing, caching, and request aggregation across distributed microservices architectures.',
    tags: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'JWT'],
    github: 'https://github.com/abrilohd',
    live: '#',
    featured: false,
    status: 'Production',
    metric: '3× faster throughput',
    metricIcon: '↑',
    achievements: [
      'JWT authentication with secure refresh tokens',
      'Redis-powered caching and rate limiting',
      'Microservice request aggregation for lower latency',
    ],
  },
]