import { useState, useEffect, useRef, useCallback } from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'
import { projects } from '../../../data/projects'

/* ─── Status badge colours ─────────────────────────────────────────────── */
const STATUS_STYLES = {
  Production:  { bg: '#E8F5E9', color: '#2E7D32', border: '#A5D6A7', darkBg: 'rgba(46,125,50,0.18)', darkColor: '#81C784', darkBorder: 'rgba(129,199,132,0.4)' },
  'Open Source': { bg: '#E3F2FD', color: '#1565C0', border: '#90CAF9', darkBg: 'rgba(21,101,192,0.18)', darkColor: '#90CAF9', darkBorder: 'rgba(144,202,249,0.4)' },
  Hackathon:   { bg: '#FFF8E1', color: '#E65100', border: '#FFCC80', darkBg: 'rgba(230,81,0,0.18)',  darkColor: '#FFB74D', darkBorder: 'rgba(255,183,77,0.4)' },
  Research:    { bg: '#F3E5F5', color: '#6A1B9A', border: '#CE93D8', darkBg: 'rgba(106,27,154,0.18)', darkColor: '#CE93D8', darkBorder: 'rgba(206,147,216,0.4)' },
}

/* ─── Per-project mockup theme colours ────────────────────────────────── */
const MOCKUP_THEMES = {
  'expense-tracker': { accent: '#00BCD4', accent2: '#26C6DA', bar1: '#00ACC1', bar2: '#4DB6AC', bar3: '#80CBC4', label: 'Dashboard', type: 'finance' },
  'blog-platform':   { accent: '#7C3AED', accent2: '#8B5CF6', bar1: '#7C3AED', bar2: '#6D28D9', bar3: '#A78BFA', label: 'CMS',       type: 'blog'    },
  'python-runner':   { accent: '#059669', accent2: '#10B981', bar1: '#059669', bar2: '#047857', bar3: '#6EE7B7', label: 'Terminal',  type: 'terminal'},
  'azure-manager':   { accent: '#0078D4', accent2: '#106EBE', bar1: '#0078D4', bar2: '#005A9E', bar3: '#71B6F9', label: 'Cloud',     type: 'cloud'   },
  'ai-chatbot':      { accent: '#F59E0B', accent2: '#FBBF24', bar1: '#D97706', bar2: '#B45309', bar3: '#FCD34D', label: 'AI Chat',   type: 'chat'    },
  'api-gateway':     { accent: '#EF4444', accent2: '#F87171', bar1: '#DC2626', bar2: '#B91C1C', bar3: '#FCA5A5', label: 'Gateway',   type: 'api'     },
}

/* ─── SVG Dashboard Mockup ─────────────────────────────────────────────── */
function DashboardMockup({ project }) {
  const theme = MOCKUP_THEMES[project.id] || MOCKUP_THEMES['expense-tracker']
  const isDark = document.documentElement.classList.contains('dark')
  const bgFill = isDark ? '#0D1B2E' : '#F8FAFB'
  const paneBg = isDark ? '#0A1628' : '#F0F4F8'
  const textCol = isDark ? '#94A3B8' : '#64748B'
  const lineCol = isDark ? '#1E293B' : '#E2E8F0'

  return (
    <svg
      viewBox="0 0 520 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id={`area-${project.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id={`area2-${project.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.accent2} stopOpacity="0.35" />
          <stop offset="100%" stopColor={theme.accent2} stopOpacity="0.02" />
        </linearGradient>
        <clipPath id={`clip-chart-${project.id}`}>
          <rect x="10" y="85" width="250" height="130" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="520" height="360" fill={bgFill} />

      {/* Left sidebar */}
      <rect x="0" y="0" width="40" height="360" fill={paneBg} />
      {/* Sidebar icons */}
      {[70, 110, 150, 190, 240].map((y, i) => (
        <rect key={i} x="12" y={y} width="16" height="3" rx="1.5"
          fill={i === 0 ? theme.accent : textCol} opacity={i === 0 ? 1 : 0.4} />
      ))}

      {/* Top bar */}
      <rect x="40" y="0" width="480" height="38" fill={paneBg} />
      {/* AG. logo */}
      <text x="52" y="24" fontSize="11" fontWeight="800" fill={theme.accent} fontFamily="monospace">AG.</text>
      <text x="78" y="24" fontSize="10" fill={textCol} fontFamily="sans-serif">{theme.label}</text>
      {/* Top-right status badge */}
      <rect x="420" y="10" width="72" height="18" rx="4"
        fill={STATUS_STYLES[project.status]?.bg || '#E8F5E9'}
        stroke={STATUS_STYLES[project.status]?.border || '#A5D6A7'}
        strokeWidth="1" />
      <text x="456" y="23" fontSize="8" fontWeight="700" textAnchor="middle"
        fill={STATUS_STYLES[project.status]?.color || '#2E7D32'} fontFamily="sans-serif">
        {project.status?.toUpperCase()}
      </text>

      {/* ── Stats row ───────────────────────────────────────────── */}
      {[
        { x: 50,  label: 'Net Rev.',  val: '$35.8K' },
        { x: 180, label: 'Total',     val: '135.0M' },
        { x: 310, label: 'Sessions',  val: '579'    },
      ].map(({ x, label, val }, i) => (
        <g key={i}>
          <rect x={x} y="45" width="115" height="34" rx="6" fill={paneBg} />
          <text x={x + 8} y="58" fontSize="7" fill={textCol} fontFamily="sans-serif">{label}</text>
          <text x={x + 8} y="72" fontSize="10" fontWeight="700" fill={theme.accent} fontFamily="monospace">{val}</text>
        </g>
      ))}

      {/* ── Area chart (left) ────────────────────────────────────── */}
      <rect x="45" y="82" width="265" height="140" rx="6" fill={paneBg} />
      <text x="55" y="96" fontSize="7" fill={textCol} fontFamily="sans-serif">Dashboard</text>

      {/* Grid lines */}
      {[0, 1, 2, 3].map(i => (
        <line key={i} x1="55" y1={105 + i * 28} x2="300" y2={105 + i * 28}
          stroke={lineCol} strokeWidth="0.5" />
      ))}

      {/* Months */}
      {['Jan','Mar','May','Jul','Sep'].map((m, i) => (
        <text key={m} x={60 + i * 56} y="216" fontSize="6" fill={textCol} fontFamily="sans-serif">{m}</text>
      ))}

      {/* Area fill 1 */}
      <path
        d="M55,195 C75,175 95,145 115,130 C135,115 155,120 175,105 C195,90 215,100 235,95 C255,90 275,80 300,75 L300,215 L55,215 Z"
        fill={`url(#area-${project.id})`}
        clipPath={`url(#clip-chart-${project.id})`}
      />
      {/* Line 1 */}
      <path
        d="M55,195 C75,175 95,145 115,130 C135,115 155,120 175,105 C195,90 215,100 235,95 C255,90 275,80 300,75"
        fill="none" stroke={theme.accent} strokeWidth="1.8"
        clipPath={`url(#clip-chart-${project.id})`}
      />
      {/* Area fill 2 */}
      <path
        d="M55,210 C75,195 95,185 115,175 C135,165 155,160 175,155 C195,150 215,145 235,140 C255,135 275,128 300,120 L300,215 L55,215 Z"
        fill={`url(#area2-${project.id})`}
        clipPath={`url(#clip-chart-${project.id})`}
      />
      {/* Line 2 */}
      <path
        d="M55,210 C75,195 95,185 115,175 C135,165 155,160 175,155 C195,150 215,145 235,140 C255,135 275,128 300,120"
        fill="none" stroke={theme.accent2} strokeWidth="1.5" strokeDasharray="4 2"
        clipPath={`url(#clip-chart-${project.id})`}
      />

      {/* Tooltip bubble */}
      <rect x="145" y="98" width="58" height="22" rx="4"
        fill={theme.accent} opacity="0.9" />
      <text x="174" y="109" fontSize="6.5" fontWeight="700" textAnchor="middle" fill="white" fontFamily="monospace">+$46K</text>
      <text x="174" y="117" fontSize="5.5" textAnchor="middle" fill="white" fontFamily="sans-serif" opacity="0.85">▲100%+</text>

      {/* ── Bar chart (bottom-left) ──────────────────────────────── */}
      <rect x="45" y="228" width="195" height="120" rx="6" fill={paneBg} />
      <text x="55" y="242" fontSize="7" fill={textCol} fontFamily="sans-serif">Total cases</text>
      <text x="150" y="242" fontSize="7" fill={textCol} fontFamily="sans-serif">Avg. response</text>

      {[
        { label: 'Python', pct: 68, val: '10.2m', c: theme.bar1 },
        { label: 'Comet',  pct: 60, val: '30.0m', c: theme.bar2 },
        { label: 'Oracle', pct: 40, val: '20.0m', c: theme.bar3 },
        { label: 'React',  pct: 28, val: '15.0m', c: theme.accent },
        { label: 'Vector', pct: 20, val: 'Misc',  c: theme.accent2 },
        { label: 'Lext',   pct: 16, val: '7%',    c: textCol   },
      ].map(({ label, pct, val, c }, i) => (
        <g key={label}>
          <text x="55" y={256 + i * 15} fontSize="6" fill={textCol} fontFamily="sans-serif">{label}</text>
          <rect x="85" y={250 + i * 15} width={`${pct * 0.65}`} height="6" rx="3" fill={c} opacity="0.85" />
          <text x="130" y={256 + i * 15} fontSize="6" fill={textCol} fontFamily="sans-serif">{pct}%</text>
          <text x="160" y={256 + i * 15} fontSize="6" fill={textCol} fontFamily="sans-serif">{val}</text>
        </g>
      ))}

      {/* ── AI Architecture (top-right) ──────────────────────────── */}
      <rect x="316" y="45" width="195" height="155" rx="6" fill={paneBg} />
      <text x="326" y="59" fontSize="7" fill={textCol} fontFamily="sans-serif">AI architecture</text>

      {/* Flow boxes */}
      {[
        { x: 335, y: 65,  w: 55, h: 18, label: 'Data Layer' },
        { x: 335, y: 100, w: 55, h: 18, label: 'Processor' },
        { x: 335, y: 135, w: 55, h: 18, label: 'Output' },
      ].map(({ x, y, w, h, label }) => (
        <g key={label}>
          <rect x={x} y={y} width={w} height={h} rx="4"
            fill={theme.accent} opacity="0.15"
            stroke={theme.accent} strokeWidth="1" />
          <text x={x + w / 2} y={y + 12} fontSize="6" fontWeight="600"
            textAnchor="middle" fill={theme.accent} fontFamily="sans-serif">{label}</text>
        </g>
      ))}
      {/* Connector arrows */}
      {[[353, 83, 353, 100], [353, 118, 353, 135]].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={theme.accent} strokeWidth="1" markerEnd="url(#arr)" opacity="0.6" />
      ))}

      {/* Central AI hub */}
      <circle cx="435" cy="110" r="22" fill={theme.accent} opacity="0.12"
        stroke={theme.accent} strokeWidth="1.5" />
      <text x="435" y="107" fontSize="9" fontWeight="800" textAnchor="middle"
        fill={theme.accent} fontFamily="monospace">AI</text>
      <text x="435" y="118" fontSize="5.5" textAnchor="middle"
        fill={theme.accent} fontFamily="sans-serif">Engine</text>

      {/* Spokes to hub */}
      {[
        [390, 74], [390, 109], [390, 144],
      ].map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2={413} y2={110}
          stroke={theme.accent} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5" />
      ))}

      {/* Right-side output nodes */}
      {[
        { y: 72,  label: 'Client\nCompat.' },
        { y: 107, label: 'Chrome\nExtension' },
        { y: 142, label: 'Defined\nHandsets' },
      ].map(({ y, label }, i) => (
        <g key={i}>
          <rect x="455" y={y - 8} width="52" height="22" rx="4"
            fill={paneBg} stroke={lineCol} strokeWidth="1" />
          <text x="481" y={y + 2} fontSize="5.5" textAnchor="middle"
            fill={textCol} fontFamily="sans-serif">{label.split('\n')[0]}</text>
          <text x="481" y={y + 10} fontSize="5.5" textAnchor="middle"
            fill={textCol} fontFamily="sans-serif">{label.split('\n')[1]}</text>
          <line x1="456" y1={y + 2} x2="457" y2={y + 2}
            stroke={theme.accent} strokeWidth="0.8" opacity="0.5" />
        </g>
      ))}

      {/* ── Bottom-right mini chart ───────────────────────────────── */}
      <rect x="316" y="208" width="195" height="140" rx="6" fill={paneBg} />
      <text x="326" y="222" fontSize="7" fill={textCol} fontFamily="sans-serif">AI architecture</text>

      {/* Mini bar */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={330 + i * 20} y={275 - [20,35,28,45,38,52,43,30][i]}
          width="12" height={[20,35,28,45,38,52,43,30][i]}
          rx="3" fill={theme.accent} opacity={0.4 + i * 0.07} />
      ))}

      {/* Mini area */}
      <path
        d="M330,320 C350,305 370,295 390,280 C410,265 430,270 450,255 C460,250 475,255 490,245 L490,340 L330,340 Z"
        fill={`url(#area2-${project.id})`}
      />
      <path
        d="M330,320 C350,305 370,295 390,280 C410,265 430,270 450,255 C460,250 475,255 490,245"
        fill="none" stroke={theme.accent2} strokeWidth="1.5"
      />

      {/* Month labels */}
      {['Jan','Mar','May','Jul','Sep'].map((m, i) => (
        <text key={m} x={330 + i * 40} y={350} fontSize="6" fill={textCol} fontFamily="sans-serif">{m}</text>
      ))}
    </svg>
  )
}

/* ─── Main Projects Component ──────────────────────────────────────────── */
export default function Projects() {
  const [active, setActive]   = useState(0)
  const [playing, setPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [hovered, setHovered] = useState(false)

  const intervalRef = useRef(null)
  const rafRef      = useRef(null)
  const startRef    = useRef(null)

  const DURATION = 5000

  /* ── progress animation ── */
  const startProgress = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setProgress(0)
    startRef.current = performance.now()
    const tick = (now) => {
      const elapsed = now - startRef.current
      const pct = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(pct)
      if (pct < 100) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  const stopProgress = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }, [])

  /* ── auto-advance ── */
  useEffect(() => {
    if (!playing || hovered) {
      clearInterval(intervalRef.current)
      stopProgress()
      return
    }
    startProgress()
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % projects.length)
    }, DURATION)
    return () => {
      clearInterval(intervalRef.current)
      stopProgress()
    }
  }, [playing, hovered, active, startProgress, stopProgress])

  const goTo = useCallback((idx) => {
    setActive(idx)
  }, [])

  const goNext = useCallback(() => {
    setActive(prev => (prev + 1) % projects.length)
  }, [])

  const goPrev = useCallback(() => {
    setActive(prev => (prev - 1 + projects.length) % projects.length)
  }, [])

  /* keyboard nav */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft')  goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  const proj = projects[active]
  const statusStyle = STATUS_STYLES[proj.status] || STATUS_STYLES['Open Source']

  /* ─── render ─── */
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[var(--bg-page)] scroll-mt-16 pt-4 sm:pt-6 md:pt-8 pb-8 md:pb-12"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            What I&apos;ve Built
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 max-w-xl mx-auto px-4">
            Real systems shipped to production — AI applications and backend infrastructure.
          </p>
        </div>

        {/* ── Card + Peek wrapper ── */}
        <div className="relative">
          {/* Peek ghost — right side, desktop only */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[6%] h-[88%] rounded-l-3xl
            bg-[var(--bg-card)] border border-[var(--border-subtle)]
            hidden lg:block scale-[0.97] opacity-40 pointer-events-none z-0 shadow-sm" />

          {/* Main showcase card */}
          <div
            className="relative z-10 lg:w-[93%] mx-auto w-full rounded-2xl sm:rounded-3xl overflow-hidden
              border border-slate-200 dark:border-white/10
              shadow-[0_4px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_40px_rgba(0,0,0,0.3)]
              bg-white dark:bg-[#111A2E]
              grid grid-cols-1 lg:grid-cols-[1.15fr,1fr]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* ─── Left: Dashboard Mockup ─────────────────────── */}
            <div className="relative bg-[#F8FAFB] dark:bg-[#0D1B2E] overflow-hidden
              min-h-[220px] sm:min-h-[280px] lg:min-h-[400px]">

              {/* Browser chrome strip */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/60 dark:bg-black/20
                border-b border-slate-100 dark:border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-[10px] font-bold text-[var(--text-secondary)] tracking-widest">AG.</span>
                <span className="ml-1 text-[10px] text-[var(--text-secondary)] opacity-60">{proj.title}</span>
              </div>

              {/* SVG mockup */}
              <div className="w-full h-full p-2 sm:p-3">
                <DashboardMockup project={proj} key={proj.id} />
              </div>
            </div>

            {/* ─── Right: Project Info ─────────────────────────── */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-4">

              <div className="flex flex-col gap-3">
                {/* FEATURED label + status badge */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-[var(--text-secondary)] uppercase">
                    Featured
                  </span>
                  {proj.status && (
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-md border"
                      style={{
                        background: statusStyle.bg,
                        color:      statusStyle.color,
                        borderColor: statusStyle.border,
                      }}
                    >
                      {proj.status}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-extrabold leading-tight text-[#0D3164] dark:text-white">
                  {proj.title}
                </h3>

                {/* Metric */}
                {proj.metric && (
                  <p className="text-sm font-semibold font-mono text-[#F5C518]">
                    {proj.metricIcon} {proj.metric}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm lg:text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {proj.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--tag-bg)]
                        border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3 flex-wrap mt-2">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-[var(--border-hover)]
                    hover:border-[#0D3164] dark:hover:border-white
                    px-5 py-2.5 rounded-full font-semibold text-sm
                    text-[var(--text-primary)] transition-colors duration-200"
                >
                  <FaGithub size={14} />
                  Source
                </a>
                <a
                  href={proj.live && proj.live !== '#' ? proj.live : proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[var(--brand-gold)] hover:bg-yellow-500
                    text-[#0D3164] font-bold px-6 py-2.5 rounded-full text-sm transition-colors duration-200"
                >
                  <HiExternalLink size={14} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Nav Controls ── */}
        <div className="flex items-center justify-between mt-5 lg:w-[93%] mx-auto w-full px-1">

          {/* Prev / Next arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/15
                bg-[var(--bg-card)] flex items-center justify-center
                text-[var(--text-primary)] text-xl font-bold
                hover:bg-[#0D3164]/8 dark:hover:bg-white/8
                active:scale-95 transition-all duration-150"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              aria-label="Next project"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/15
                bg-[var(--bg-card)] flex items-center justify-center
                text-[var(--text-primary)] text-xl font-bold
                hover:bg-[#0D3164]/8 dark:hover:bg-white/8
                active:scale-95 transition-all duration-150"
            >
              ›
            </button>
          </div>

          {/* Apple-style pill: progress bar + dots + pause */}
          <div className="flex items-center gap-2.5 bg-[#1a1a2e]/75 dark:bg-black/50
            backdrop-blur-sm rounded-full px-4 py-2 shadow-inner">
            {/* Progress bar */}
            <div className="w-14 h-[3px] rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#F5C518] transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Dots */}
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-5 h-2 bg-[#F5C518]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/55'
                }`}
              />
            ))}
            {/* Play/Pause */}
            <button
              onClick={() => setPlaying(p => !p)}
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
              className="text-white/60 hover:text-white text-xs ml-0.5 transition-colors"
            >
              {playing ? '⏸' : '▶'}
            </button>
          </div>

          {/* Spacer (balances the arrows on the left) */}
          <div className="w-[88px]" />
        </div>

      </div>
    </section>
  )
}
