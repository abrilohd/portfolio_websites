import { useState, useEffect } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { useTheme } from '../../../context/ThemeContext'

/* ─── Status Badge Styles for Right Column ────────────────────────────────── */
const STATUS_STYLES = {
  Production: {
    bg: 'rgba(34, 197, 94, 0.12)',
    color: '#16a34a',
    border: 'rgba(34, 197, 94, 0.3)',
    dot: '#22c55e',
  },
  'In Development': {
    bg: 'rgba(245, 158, 11, 0.12)',
    color: '#d97706',
    border: 'rgba(245, 158, 11, 0.3)',
    dot: '#f59e0b',
  },
  'Active Project': {
    bg: 'rgba(217, 119, 6, 0.12)',
    color: '#d97706',
    border: 'rgba(217, 119, 6, 0.3)',
    dot: '#d97706',
  },
  'Open Source': {
    bg: 'rgba(59, 130, 246, 0.12)',
    color: '#2563eb',
    border: 'rgba(59, 130, 246, 0.3)',
    dot: '#3b82f6',
  },
  Hackathon: {
    bg: 'rgba(245, 158, 11, 0.12)',
    color: '#d97706',
    border: 'rgba(245, 158, 11, 0.3)',
    dot: '#f59e0b',
  },
  Research: {
    bg: 'rgba(168, 85, 247, 0.12)',
    color: '#9333ea',
    border: 'rgba(168, 85, 247, 0.3)',
    dot: '#a855f7',
  },
}

/* ─── High-Contrast Mockup Visual Themes (Fallback if Image Fails) ───────── */
const MOCKUP_THEMES = {
  expenset: {
    accent: '#00BCD4',
    accent2: '#26C6DA',
    bar1: '#00ACC1',
    bar2: '#4DB6AC',
    bar3: '#80CBC4',
    label: 'Finance Analytics',
    stats: [
      { label: 'Latency', val: '14ms' },
      { label: 'Accuracy', val: '90%' },
      { label: 'Requests', val: '18.2k/s' },
    ],
    bars: [
      { label: 'FastAPI', pct: 85, val: '14ms' },
      { label: 'Postgres', pct: 68, val: '22ms' },
      { label: 'ML Models', pct: 54, val: '38ms' },
      { label: 'Chart.js', pct: 40, val: '8ms' },
    ],
    flow: { in: 'Transactions', engine: 'ML Pipeline', out: 'Insights API' },
  },
  'voice-ai-study-coach': {
    accent: '#F59E0B',
    accent2: '#FBBF24',
    bar1: '#D97706',
    bar2: '#B45309',
    bar3: '#FCD34D',
    label: 'Voice AI Architecture',
    stats: [
      { label: 'Users Cap.', val: '100K' },
      { label: 'Voice Latency', val: '120ms' },
      { label: 'LLM Router', val: 'Multi' },
    ],
    bars: [
      { label: 'FastAPI', pct: 92, val: '12ms' },
      { label: 'Voice I/O', pct: 75, val: '120ms' },
      { label: 'RAG Pipeline', pct: 65, val: '85ms' },
      { label: 'PostgreSQL', pct: 50, val: '15ms' },
    ],
    flow: { in: 'Voice Stream', engine: 'LLM Router', out: 'Audio Tutor' },
  },
  dropnote: {
    accent: '#059669',
    accent2: '#10B981',
    bar1: '#059669',
    bar2: '#047857',
    bar3: '#6EE7B7',
    label: 'Django Knowledge Base',
    stats: [
      { label: 'Search Time', val: '8ms' },
      { label: 'Postgres DB', val: 'Connected' },
      { label: 'Vercel Env', val: 'Live' },
    ],
    bars: [
      { label: 'Django 5', pct: 88, val: '18ms' },
      { label: 'PostgreSQL', pct: 72, val: '8ms' },
      { label: 'Admin Tools', pct: 55, val: '4ms' },
      { label: 'Templates', pct: 40, val: '2ms' },
    ],
    flow: { in: 'Tech Notes', engine: 'Full-Text DB', out: 'Search API' },
  },
  'blog-platform': {
    accent: '#7C3AED',
    accent2: '#8B5CF6',
    bar1: '#7C3AED',
    bar2: '#6D28D9',
    bar3: '#A78BFA',
    label: 'CMS Intelligence',
    stats: [
      { label: 'Articles', val: '1.2K' },
      { label: 'Tagging', val: '70% Faster' },
      { label: 'TF-IDF', val: '98.2%' },
    ],
    bars: [
      { label: 'Django', pct: 88, val: '32ms' },
      { label: 'NLP Engine', pct: 72, val: '45ms' },
      { label: 'SQLite', pct: 50, val: '12ms' },
      { label: 'Tailwind', pct: 35, val: '4ms' },
    ],
    flow: { in: 'Markdown Docs', engine: 'NLP Parser', out: 'Search Index' },
  },
  'dejen-security': {
    accent: '#D97706',
    accent2: '#F59E0B',
    bar1: '#D97706',
    bar2: '#B45309',
    bar3: '#FCD34D',
    label: 'Mobile Threat Shield',
    stats: [
      { label: 'Detection', val: 'Real-time' },
      { label: 'Engine', val: 'On-Device' },
      { label: 'Target', val: 'SMS Phishing' },
    ],
    bars: [
      { label: 'Android Core', pct: 90, val: 'Native' },
      { label: 'Heuristics', pct: 82, val: 'Real-time' },
      { label: 'Bank Shield', pct: 68, val: 'Active' },
      { label: 'Delivery', pct: 55, val: 'Sprint PM' },
    ],
    flow: { in: 'Incoming SMS', engine: 'Scam Heuristic', out: 'Block Shield' },
  },
  'flutter-finance-app': {
    accent: '#0284C7',
    accent2: '#38BDF8',
    bar1: '#0284C7',
    bar2: '#0369A1',
    bar3: '#7DD3FC',
    label: 'Flutter Mobile App',
    stats: [
      { label: 'Platform', val: 'iOS & Android' },
      { label: 'Budgeting', val: 'Real-time' },
      { label: 'UI Frame', val: '60 FPS' },
    ],
    bars: [
      { label: 'Flutter UI', pct: 94, val: '60 FPS' },
      { label: 'Dart Logic', pct: 80, val: 'State' },
      { label: 'Local Store', pct: 60, val: 'Encrypted' },
      { label: 'Analytics', pct: 45, val: 'Charts' },
    ],
    flow: { in: 'User Expenses', engine: 'Budget Logic', out: 'Visual Report' },
  },
}

/* ─── Full-Bleed High-Contrast Architecture & Analytics Preview ──────────── */
function DashboardMockup({ project, isDark }) {
  const theme = MOCKUP_THEMES[project.id] || MOCKUP_THEMES.expenset

  const bgFill = isDark ? '#0A1322' : '#F8FAFC'
  const paneBg = isDark ? '#111F36' : '#FFFFFF'
  const subPaneBg = isDark ? '#0D182B' : '#F1F5F9'
  const textCol = isDark ? '#94A3B8' : '#475569'
  const textMuted = isDark ? '#64748B' : '#94A3B8'
  const titleCol = isDark ? '#F8FAFC' : '#0F172A'
  const lineCol = isDark ? '#1E2D4A' : '#E2E8F0'
  const borderCol = isDark ? 'rgba(255,255,255,0.08)' : '#E2E8F0'

  return (
    <svg
      viewBox="0 0 520 340"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block select-none"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`area-${project.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.accent} stopOpacity={isDark ? '0.5' : '0.35'} />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0.02" />
        </linearGradient>

        <linearGradient id={`area2-${project.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.accent2} stopOpacity={isDark ? '0.35' : '0.2'} />
          <stop offset="100%" stopColor={theme.accent2} stopOpacity="0.02" />
        </linearGradient>

        <clipPath id={`clip-${project.id}`}>
          <rect x="46" y="64" width="254" height="140" rx="6" />
        </clipPath>

        <marker
          id={`arr-${project.id}`}
          viewBox="0 0 8 8"
          refX="6"
          refY="4"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 8 4 L 0 8 z" fill={theme.accent} />
        </marker>
      </defs>

      <rect width="520" height="340" fill={bgFill} />

      <rect x="0" y="0" width="36" height="340" fill={subPaneBg} />
      <line x1="36" y1="0" x2="36" y2="340" stroke={lineCol} strokeWidth="1" />

      {[24, 60, 96, 132, 168].map((y, i) => (
        <circle
          key={i}
          cx="18"
          cy={y}
          r={i === 0 ? '5' : '3.5'}
          fill={i === 0 ? theme.accent : textMuted}
          opacity={i === 0 ? '1' : '0.4'}
        />
      ))}
      <circle cx="18" cy="24" r="2" fill="#FFFFFF" />

      {theme.stats.map(({ label, val }, i) => {
        const xPos = 46 + i * 158
        return (
          <g key={i}>
            <rect
              x={xPos}
              y="10"
              width="148"
              height="44"
              rx="6"
              fill={paneBg}
              stroke={borderCol}
              strokeWidth="1"
            />
            <text
              x={xPos + 12}
              y="26"
              fontSize="8"
              fontWeight="600"
              fill={textMuted}
              fontFamily="sans-serif"
              letterSpacing="0.05em"
            >
              {label.toUpperCase()}
            </text>
            <text
              x={xPos + 12}
              y="44"
              fontSize="13"
              fontWeight="700"
              fill={theme.accent}
              fontFamily="monospace"
            >
              {val}
            </text>
          </g>
        )
      })}

      <rect
        x="46"
        y="64"
        width="254"
        height="140"
        rx="6"
        fill={paneBg}
        stroke={borderCol}
        strokeWidth="1"
      />
      <text
        x="58"
        y="80"
        fontSize="8"
        fontWeight="700"
        fill={titleCol}
        fontFamily="sans-serif"
      >
        Throughput & Ingestion Flow
      </text>
      <text
        x="240"
        y="80"
        fontSize="7"
        fontWeight="600"
        fill={theme.accent}
        fontFamily="monospace"
      >
        LIVE STREAM
      </text>

      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="58"
          y1={96 + i * 24}
          x2="288"
          y2={96 + i * 24}
          stroke={lineCol}
          strokeWidth="0.8"
          strokeDasharray="3 3"
        />
      ))}

      {['Jan', 'Mar', 'May', 'Jul', 'Sep'].map((m, i) => (
        <text
          key={m}
          x={62 + i * 52}
          y="194"
          fontSize="6.5"
          fill={textMuted}
          fontFamily="sans-serif"
        >
          {m}
        </text>
      ))}

      <path
        d="M58,168 C80,150 102,126 124,115 C146,104 168,110 190,95 C212,82 234,92 256,86 C270,82 280,74 288,70 L288,184 L58,184 Z"
        fill={`url(#area-${project.id})`}
        clipPath={`url(#clip-${project.id})`}
      />
      <path
        d="M58,168 C80,150 102,126 124,115 C146,104 168,110 190,95 C212,82 234,92 256,86 C270,82 280,74 288,70"
        fill="none"
        stroke={theme.accent}
        strokeWidth="2"
        clipPath={`url(#clip-${project.id})`}
      />

      <path
        d="M58,178 C80,165 102,156 124,148 C146,140 168,136 190,132 C212,128 234,124 256,118 C270,114 280,108 288,102 L288,184 L58,184 Z"
        fill={`url(#area2-${project.id})`}
        clipPath={`url(#clip-${project.id})`}
      />
      <path
        d="M58,178 C80,165 102,156 124,148 C146,140 168,136 190,132 C212,128 234,124 256,118 C270,114 280,108 288,102"
        fill="none"
        stroke={theme.accent2}
        strokeWidth="1.5"
        strokeDasharray="4 2"
        clipPath={`url(#clip-${project.id})`}
      />

      <g>
        <rect
          x="160"
          y="88"
          width="54"
          height="22"
          rx="4"
          fill={theme.accent}
          filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.25))"
        />
        <text
          x="187"
          y="99"
          fontSize="6.5"
          fontWeight="700"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="monospace"
        >
          {theme.stats[1].val}
        </text>
        <text
          x="187"
          y="107"
          fontSize="5.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          ▲ Optimal
        </text>
      </g>

      <rect
        x="46"
        y="214"
        width="254"
        height="116"
        rx="6"
        fill={paneBg}
        stroke={borderCol}
        strokeWidth="1"
      />
      <text
        x="58"
        y="228"
        fontSize="8"
        fontWeight="700"
        fill={titleCol}
        fontFamily="sans-serif"
      >
        Service & Node Telemetry
      </text>

      {theme.bars.map(({ label, pct, val }, i) => (
        <g key={label}>
          <text
            x="58"
            y={245 + i * 19}
            fontSize="7"
            fontWeight="500"
            fill={textCol}
            fontFamily="sans-serif"
          >
            {label}
          </text>
          <rect
            x="114"
            y={238 + i * 19}
            width="100"
            height="7"
            rx="3.5"
            fill={subPaneBg}
          />
          <rect
            x="114"
            y={238 + i * 19}
            width={`${pct}`}
            height="7"
            rx="3.5"
            fill={theme.accent}
            opacity={0.85 + i * 0.04}
          />
          <text
            x="222"
            y={245 + i * 19}
            fontSize="6.5"
            fontWeight="600"
            fill={textMuted}
            fontFamily="monospace"
          >
            {pct}%
          </text>
          <text
            x="262"
            y={245 + i * 19}
            fontSize="6.5"
            fontWeight="600"
            fill={theme.accent}
            fontFamily="monospace"
          >
            {val}
          </text>
        </g>
      ))}

      <rect
        x="310"
        y="64"
        width="200"
        height="140"
        rx="6"
        fill={paneBg}
        stroke={borderCol}
        strokeWidth="1"
      />
      <text
        x="322"
        y="80"
        fontSize="8"
        fontWeight="700"
        fill={titleCol}
        fontFamily="sans-serif"
      >
        System Architecture Flow
      </text>

      <rect
        x="320"
        y="92"
        width="54"
        height="24"
        rx="4"
        fill={subPaneBg}
        stroke={borderCol}
        strokeWidth="1"
      />
      <text
        x="347"
        y="107"
        fontSize="6.5"
        fontWeight="600"
        textAnchor="middle"
        fill={textCol}
        fontFamily="sans-serif"
      >
        {theme.flow.in}
      </text>

      <line
        x1="374"
        y1="104"
        x2="390"
        y2="104"
        stroke={theme.accent}
        strokeWidth="1.2"
        markerEnd={`url(#arr-${project.id})`}
      />

      <rect
        x="392"
        y="90"
        width="54"
        height="28"
        rx="4"
        fill={theme.accent}
        fillOpacity={isDark ? '0.18' : '0.12'}
        stroke={theme.accent}
        strokeWidth="1.5"
      />
      <text
        x="419"
        y="104"
        fontSize="6.5"
        fontWeight="700"
        textAnchor="middle"
        fill={theme.accent}
        fontFamily="sans-serif"
      >
        {theme.flow.engine}
      </text>
      <text
        x="419"
        y="113"
        fontSize="5"
        textAnchor="middle"
        fill={theme.accent}
        fontFamily="monospace"
      >
        CORE ENGINE
      </text>

      <line
        x1="446"
        y1="104"
        x2="462"
        y2="104"
        stroke={theme.accent}
        strokeWidth="1.2"
        markerEnd={`url(#arr-${project.id})`}
      />

      <rect
        x="464"
        y="92"
        width="40"
        height="24"
        rx="4"
        fill={subPaneBg}
        stroke={borderCol}
        strokeWidth="1"
      />
      <text
        x="484"
        y="107"
        fontSize="6"
        fontWeight="600"
        textAnchor="middle"
        fill={textCol}
        fontFamily="sans-serif"
      >
        {theme.flow.out}
      </text>

      {[
        { y: 130, label: 'Web Interface, 200 OK', dot: '#22C55E' },
        { y: 152, label: 'Worker Node, Synchronized', dot: theme.accent },
        { y: 174, label: 'Telemetry Event Broker', dot: '#F59E0B' },
      ].map(({ y, label, dot }, i) => (
        <g key={i}>
          <rect
            x="320"
            y={y}
            width="180"
            height="18"
            rx="4"
            fill={subPaneBg}
            stroke={borderCol}
            strokeWidth="0.8"
          />
          <circle cx="330" cy={y + 9} r="2.5" fill={dot} />
          <text
            x="338"
            y={y + 12}
            fontSize="6"
            fontWeight="500"
            fill={textCol}
            fontFamily="sans-serif"
          >
            {label}
          </text>
        </g>
      ))}

      <rect
        x="310"
        y="214"
        width="200"
        height="116"
        rx="6"
        fill={paneBg}
        stroke={borderCol}
        strokeWidth="1"
      />
      <text
        x="322"
        y="228"
        fontSize="8"
        fontWeight="700"
        fill={titleCol}
        fontFamily="sans-serif"
      >
        Real-time Telemetry Load
      </text>

      {[22, 38, 28, 48, 42, 54, 46, 32].map((height, i) => (
        <rect
          key={i}
          x={324 + i * 22}
          y={284 - height}
          width="14"
          height={height}
          rx="3"
          fill={theme.accent}
          opacity={0.35 + i * 0.08}
        />
      ))}

      <path
        d="M324,286 C344,275 364,280 384,265 C404,250 424,258 444,242 C458,236 470,240 482,232"
        fill="none"
        stroke={theme.accent2}
        strokeWidth="1.5"
      />

      <line x1="322" y1="288" x2="496" y2="288" stroke={lineCol} strokeWidth="1" />

      <text
        x="322"
        y="306"
        fontSize="6.5"
        fontWeight="500"
        fill={textMuted}
        fontFamily="sans-serif"
      >
        Region: US-East-1, Sub-20ms SLA
      </text>
      <text
        x="456"
        y="306"
        fontSize="6.5"
        fontWeight="700"
        fill="#22C55E"
        fontFamily="monospace"
      >
        VERIFIED
      </text>
    </svg>
  )
}

/* ─── Main ProjectCard Component ─────────────────────────────────────────── */
export default function ProjectCard({ data }) {
  const [imgError, setImgError] = useState(false)
  const { dark } = useTheme()
  const status = STATUS_STYLES[data.status] || STATUS_STYLES['In Development']

  useEffect(() => {
    setImgError(false)
  }, [data.id, data.image])

  return (
    <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#111A2E] shadow-[0_12px_40px_rgba(13,49,100,0.08)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.55)] grid grid-cols-1 lg:grid-cols-[1.1fr,1.35fr] lg:h-[470px] xl:h-[500px]">
      {/* ─── LEFT PANEL (~45% on desktop): Project Screenshot Preview ──── */}
      <div className="relative w-full h-[240px] sm:h-[300px] lg:h-full flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-[#0B1220] overflow-hidden">
        {/* macOS / Chrome Window Top Bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-200/70 dark:bg-[#0C1729]/95 backdrop-blur border-b border-slate-200/80 dark:border-white/10 flex-shrink-0 z-10">
          {/* Traffic light window controls */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] inline-block shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] inline-block shadow-sm" />
          </div>
        </div>

        {/* Visual Body: Real Project Screenshot inside flex-centered padded container */}
        <div className="flex-1 min-h-0 w-full flex items-center justify-center p-3 sm:p-4 overflow-hidden">
          {data.image && !imgError ? (
            <img
              src={data.image}
              alt={data.title}
              onError={() => setImgError(true)}
              className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <DashboardMockup project={data} isDark={dark} />
          )}
        </div>
      </div>

      {/* ─── RIGHT PANEL: Content & Typography (Never Overlaps) ──────────── */}
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-white dark:bg-[#111A2E] overflow-hidden">
        {/* Top Content Block */}
        <div className="flex flex-col min-h-0 overflow-hidden">
          {/* Header row: Category eyebrow (+ subtle role pill if present) + status badge */}
          <div className="flex items-center justify-between gap-2 mb-2 flex-shrink-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[var(--brand-gold)] dark:text-[#F5C518] uppercase">
                FEATURED PROJECT
              </span>
              {/* Subtle role pill next to category eyebrow (e.g. Project Manager) */}
              {data.role && (
                <span className="text-[10px] sm:text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-white/15 shadow-sm">
                  {data.role}
                </span>
              )}
            </div>

            {data.status && (
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border shadow-sm flex-shrink-0"
                style={{
                  background: status.bg,
                  color: status.color,
                  borderColor: status.border,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: status.dot }}
                />
                {data.status}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="font-display text-2xl sm:text-3xl lg:text-[1.85rem] xl:text-[2rem] font-extrabold tracking-tight text-[#0D3164] dark:text-white leading-tight line-clamp-1 sm:line-clamp-2">
            {data.title}
          </h3>

          {/* Gold Impact Metric Line Directly Beneath Title */}
          {data.metric && (
            <p className="text-sm lg:text-base font-bold font-mono text-[#D97706] dark:text-[#F5C518] mt-1.5 flex items-center gap-1.5 flex-shrink-0">
              <span>{data.metricIcon || '↑'}</span>
              <span>{data.metric}</span>
            </p>
          )}

          {/* Description */}
          <p className="text-sm lg:text-[14px] xl:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 mt-2 sm:mt-2.5 line-clamp-2 sm:line-clamp-3">
            {data.description}
          </p>

          {/* Key Achievements Bullet Highlights */}
          {data.achievements && data.achievements.length > 0 && (
            <div className="mt-2.5 sm:mt-3.5 space-y-1 sm:space-y-1.5">
              {data.achievements.slice(0, 3).map((achievement, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                >
                  <span className="w-4 h-4 rounded-full bg-[var(--brand-gold)]/15 text-[var(--brand-gold)] dark:text-[#F5C518] flex items-center justify-center text-[10px] font-bold mt-0.5 flex-shrink-0 select-none">
                    ✓
                  </span>
                  <span className="leading-snug line-clamp-1">{achievement}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions Row: Right-aligned Source + conditional Live Demo Buttons */}
        <div className="flex items-center justify-end gap-3 flex-wrap mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 dark:border-white/10 flex-shrink-0">
          {/* Source Code Link: rendered on every project */}
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-slate-300 dark:border-white/20 hover:border-[#0D3164] dark:hover:border-white px-5 py-2.5 rounded-full font-semibold text-sm text-[var(--text-primary)] transition-colors duration-200 active:scale-95 cursor-pointer shadow-sm"
          >
            <FaGithub size={15} />
            <span>Source</span>
          </a>

          {/* Live Demo Link: ONLY rendered when project.live is truthy */}
          {Boolean(data.live) && (
            <a
              href={data.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#F5C518] hover:bg-yellow-400 active:bg-yellow-500 text-[#0D3164] font-bold px-6 py-2.5 rounded-full text-sm transition-colors duration-200 shadow-sm active:scale-95 cursor-pointer"
            >
              <HiExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
