import { useState } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

/* ─── Status Badge Colors ─────────────────────────────────────────────────── */
const STATUS_STYLES = {
  Production: {
    bg: 'rgba(34, 197, 94, 0.12)',
    color: '#16a34a',
    border: 'rgba(34, 197, 94, 0.3)',
    dot: '#22c55e',
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

/* ─── Apple / Big-Tech High-Fidelity Blueprint Canvas ─────────────────────── */
function ProjectMockupCanvas({ project }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-2.5 sm:p-4 lg:p-5 text-left select-none overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-[#0A1526] dark:via-[#0D1C33] dark:to-[#07111F]">
      {/* Ambient background glow & radial dot mesh */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-[var(--brand-gold)]/10 dark:bg-[var(--brand-gold)]/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#1967B2]/15 dark:bg-[#1967B2]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Bar: Cluster Status & Title */}
      <div className="relative z-10 flex items-center justify-between pb-1.5 sm:pb-2.5 border-b border-slate-200/80 dark:border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            System Online
          </span>
        </div>
        <span className="text-[9px] font-mono text-[var(--text-secondary)] opacity-70">
          US-EAST-1 · v2.4
        </span>
      </div>

      {/* Center KPI & Graphic Dashboard Visual */}
      <div className="relative z-10 my-auto py-1 flex flex-col gap-2 sm:gap-2.5">
        {/* KPI Mini-Cards Row */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          <div className="p-1.5 sm:p-2 rounded-lg bg-white/80 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 shadow-sm">
            <p className="text-[8px] sm:text-[9px] font-mono text-[var(--text-secondary)] uppercase">Latency</p>
            <p className="text-[11px] sm:text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">14ms</p>
          </div>
          <div className="p-1.5 sm:p-2 rounded-lg bg-white/80 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 shadow-sm">
            <p className="text-[8px] sm:text-[9px] font-mono text-[var(--text-secondary)] uppercase">Accuracy</p>
            <p className="text-[11px] sm:text-xs font-bold font-mono text-[var(--brand-gold)]">99.4%</p>
          </div>
          <div className="p-1.5 sm:p-2 rounded-lg bg-white/80 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 shadow-sm">
            <p className="text-[8px] sm:text-[9px] font-mono text-[var(--text-secondary)] uppercase">Requests</p>
            <p className="text-[11px] sm:text-xs font-bold font-mono text-[#1967B2] dark:text-[#7CB2E8]">18.2k/s</p>
          </div>
        </div>

        {/* Central Pipeline Graphic */}
        <div className="p-2 sm:p-2.5 rounded-lg bg-white/90 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10 shadow-sm flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-semibold text-[var(--text-primary)] truncate max-w-[180px]">
              {project.title}
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full font-medium">
              Active Flow
            </span>
          </div>

          {/* Node Connection Flow */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[var(--text-secondary)]">
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
              <span className="w-1 h-1 rounded-full bg-blue-500" />
              <span>Input</span>
            </div>
            <span className="text-slate-400 dark:text-slate-600 text-[10px]">──▶</span>
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
              <span className="w-1 h-1 rounded-full bg-[var(--brand-gold)]" />
              <span>AI Engine</span>
            </div>
            <span className="text-slate-400 dark:text-slate-600 text-[10px]">──▶</span>
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
              <span>Output</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Line */}
      <div className="relative z-10 pt-1.5 flex items-center justify-between text-[9px] font-mono text-[var(--text-secondary)] border-t border-slate-200/70 dark:border-white/10">
        <span className="opacity-70 truncate">Architecture: Microservices + Event-Driven</span>
        <span className="text-[var(--brand-gold)] font-medium flex-shrink-0 ml-2">Verified Live</span>
      </div>
    </div>
  )
}

/* ─── Main Big-Tech ProjectCard Component ─────────────────────────────────── */
export default function ProjectCard({ data, active = true, onCardClick }) {
  const [imgError, setImgError] = useState(false)
  const status = STATUS_STYLES[data.status] || STATUS_STYLES['Open Source']

  return (
    <div
      onClick={onCardClick}
      className="w-full h-full rounded-2xl sm:rounded-[24px] overflow-hidden border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1726] shadow-[0_12px_40px_rgba(13,49,100,0.08)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.55)] transition-all duration-300 flex flex-col lg:flex-row"
    >
      {/* ─── LEFT / TOP PANEL: Showcase Browser Frame (140px on mobile, 48% on desktop) ─── */}
      <div className="w-full h-[140px] sm:h-[160px] lg:h-full lg:w-[48%] xl:w-[50%] flex flex-col flex-shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-white/10 overflow-hidden bg-slate-50 dark:bg-[#0A1526]">
        {/* macOS / Chrome Window Top Bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 dark:bg-[#0C1B33]/90 backdrop-blur border-b border-slate-200/70 dark:border-white/10 z-10 flex-shrink-0">
          {/* Traffic light window buttons */}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F57] inline-block shadow-sm" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#28C840] inline-block shadow-sm" />
          </div>

          {/* Chrome-style Address Pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.05] dark:border-white/10 text-[10px] sm:text-[11px] font-mono text-[var(--text-secondary)] max-w-[180px] sm:max-w-[220px] truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block flex-shrink-0" />
            <span className="truncate">https://{data.id}.app</span>
          </div>

          {/* Right Brand Indicator */}
          <span className="text-[9px] font-mono font-bold tracking-wider text-[var(--text-secondary)] opacity-60 uppercase">
            AG.
          </span>
        </div>

        {/* Window Body: Real Screenshot or High-Fidelity Blueprint Canvas */}
        <div className="relative flex-1 w-full h-full min-h-0 overflow-hidden group">
          {data.image && !imgError ? (
            <img
              src={data.image}
              alt={data.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <ProjectMockupCanvas project={data} />
          )}
        </div>
      </div>

      {/* ─── RIGHT / BOTTOM PANEL: Content & Typography (Never Overlaps) ─── */}
      <div className="w-full flex-1 min-h-0 lg:w-[52%] xl:w-[50%] flex flex-col justify-between p-3.5 sm:p-5 lg:p-6 xl:p-7 overflow-hidden bg-white dark:bg-[#0E1726]">
        {/* Top Content Block */}
        <div className="flex flex-col min-h-0">
          {/* Header row: FEATURED PROJECT label + status badge */}
          <div className="flex items-center justify-between gap-2 mb-1 sm:mb-1.5">
            <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
              FEATURED PROJECT
            </span>
            {data.status && (
              <span
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border shadow-sm"
                style={{
                  background: status.bg,
                  color: status.color,
                  borderColor: status.border,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: status.dot }}
                />
                {data.status}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="font-display text-base sm:text-xl lg:text-[1.55rem] xl:text-[1.75rem] font-bold text-[var(--text-primary)] tracking-tight leading-tight line-clamp-1 sm:line-clamp-2">
            {data.title}
          </h3>

          {/* Description */}
          <p className="text-[11px] sm:text-xs lg:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed mt-1 sm:mt-1.5 font-normal line-clamp-2 sm:line-clamp-2 lg:line-clamp-3">
            {data.description}
          </p>

          {/* Key Architectural Highlights (Max 2) */}
          {data.achievements && data.achievements.length > 0 && (
            <div className="mt-1.5 sm:mt-2.5 space-y-1">
              {data.achievements.slice(0, 2).map((achievement, i) => (
                <div
                  key={i}
                  className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700 dark:text-slate-200"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-[var(--brand-gold)]/15 text-[var(--brand-gold)] flex items-center justify-center text-[9px] font-bold mt-0.5 flex-shrink-0 select-none">
                    ✓
                  </span>
                  <span className="leading-snug line-clamp-1">{achievement}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3">
            {data.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium transition-colors hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions Row: Right-aligned Apple-style buttons */}
        <div className="mt-auto pt-2.5 sm:pt-3 flex items-center justify-end gap-2 sm:gap-2.5 border-t border-slate-100 dark:border-white/10 flex-shrink-0">
          {/* Source Link */}
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/[0.03] hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-semibold text-[11px] sm:text-xs text-[var(--text-primary)] transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
          >
            <FaGithub size={13} />
            <span>Source</span>
          </a>

          {/* Live Demo Link */}
          {data.live && data.live !== '#' ? (
            <a
              href={data.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[var(--brand-gold)] hover:bg-[#FFCF5C] active:bg-[#E8B12E] text-[#0D3164] font-bold px-3.5 py-1 sm:px-5 sm:py-1.5 rounded-full text-[11px] sm:text-xs transition-all duration-200 shadow-[0_2px_10px_rgba(250,194,59,0.3)] hover:shadow-[0_4px_14px_rgba(250,194,59,0.4)] active:scale-95 cursor-pointer"
            >
              <HiExternalLink size={13} />
              <span>Live Demo</span>
            </a>
          ) : (
            <span
              title="Internal / Cloud Service"
              className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-white/10 text-[var(--text-secondary)] font-semibold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs cursor-not-allowed opacity-60"
            >
              <HiExternalLink size={12} />
              <span>Internal</span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
