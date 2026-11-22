import { useState, useEffect } from 'react'
import { HiExternalLink } from 'react-icons/hi'

const CATEGORY_STYLES = {
  'Cloud & AI': {
    bg: 'rgba(25, 103, 178, 0.12)',
    border: 'rgba(25, 103, 178, 0.35)',
    color: '#1967B2',
    darkColor: '#7CB2E8',
    glow: 'rgba(25, 103, 178, 0.25)',
  },
  'AI Engineering': {
    bg: 'rgba(250, 194, 59, 0.12)',
    border: 'rgba(250, 194, 59, 0.35)',
    color: '#D97706',
    darkColor: '#F5C518',
    glow: 'rgba(250, 194, 59, 0.25)',
  },
  'NLP & Deep Learning': {
    bg: 'rgba(217, 70, 239, 0.12)',
    border: 'rgba(217, 70, 239, 0.35)',
    color: '#C026D3',
    darkColor: '#E879F9',
    glow: 'rgba(217, 70, 239, 0.25)',
  },
  'AI/ML': {
    bg: 'rgba(250, 194, 59, 0.12)',
    border: 'rgba(250, 194, 59, 0.35)',
    color: '#D97706',
    darkColor: '#F5C518',
    glow: 'rgba(250, 194, 59, 0.25)',
  },
  Cloud: {
    bg: 'rgba(25, 103, 178, 0.12)',
    border: 'rgba(25, 103, 178, 0.35)',
    color: '#1967B2',
    darkColor: '#7CB2E8',
    glow: 'rgba(25, 103, 178, 0.25)',
  },
  GNNs: {
    bg: 'rgba(139, 92, 246, 0.12)',
    border: 'rgba(139, 92, 246, 0.35)',
    color: '#7C3AED',
    darkColor: '#A78BFA',
    glow: 'rgba(139, 92, 246, 0.25)',
  },
  Data: {
    bg: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.35)',
    color: '#059669',
    darkColor: '#34D399',
    glow: 'rgba(16, 185, 129, 0.25)',
  },
  Backend: {
    bg: 'rgba(6, 182, 212, 0.12)',
    border: 'rgba(6, 182, 212, 0.35)',
    color: '#0891B2',
    darkColor: '#38BDF8',
    glow: 'rgba(6, 182, 212, 0.25)',
  },
}

export default function CertificateCard({ data }) {
  const [imgError, setImgError] = useState(false)
  const cat = CATEGORY_STYLES[data.category] || CATEGORY_STYLES['AI/ML']

  useEffect(() => {
    setImgError(false)
  }, [data.title, data.image])

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-[#111A2E] border border-slate-200/90 dark:border-white/10 rounded-[28px] shadow-[0_12px_40px_rgba(13,49,100,0.08)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.55)] relative overflow-hidden transition-all duration-300">
      {/* Subtle Ambient Background Mesh & Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-all duration-700"
        style={{ backgroundColor: cat.glow }}
      />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl bg-[#0D3164]/5 dark:bg-[#1967B2]/10 pointer-events-none" />

      {/* ── 1. Apple Top-Bar: Title, Subtitle, Metadata & Dual Pill CTAs ── */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-4 sm:p-5 lg:px-7 lg:pt-6 lg:pb-3 z-10 relative">
        {/* Top-Left Header Content */}
        <div className="max-w-2xl min-w-0">
          {/* Metadata Eyebrow */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[var(--brand-gold)] dark:text-[#F5C518] mb-1">
            <span>{data.issuer}</span>
            <span> </span>
            <span>Issued {data.date}</span>
            <span> </span>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
              style={{
                backgroundColor: cat.bg,
                borderColor: cat.border,
                borderWidth: '1px',
              }}
            >
              {data.category}
            </span>
          </div>

          {/* Certification Title */}
          <h3 className="text-lg sm:text-xl lg:text-[1.5rem] xl:text-[1.7rem] font-extrabold tracking-tight text-[#0D3164] dark:text-white leading-tight">
            {data.title}
          </h3>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 leading-relaxed max-w-xl line-clamp-2">
            {data.relevance}
          </p>
        </div>

        {/* Top-Right Dual Pill CTAs */}
        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto pt-0.5">
          {/* Outline Pill: Verify */}
          <a
            href={data.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#0D3164]/25 dark:border-white/25 text-[#0D3164] dark:text-white text-xs sm:text-sm font-semibold hover:border-[#0D3164] dark:hover:border-white hover:bg-[#0D3164]/5 dark:hover:bg-white/5 transition-all duration-200 active:scale-95 shadow-sm inline-flex items-center gap-1.5"
          >
            <span>Verify</span>
          </a>

          {/* Solid Primary Pill: View Credential */}
          <a
            href={data.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#0D3164] dark:bg-[#F5C518] text-white dark:text-[#0D3164] text-xs sm:text-sm font-bold hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm inline-flex items-center gap-1.5"
          >
            <HiExternalLink size={14} />
            <span>View Credential</span>
          </a>
        </div>
      </div>

      {/* ── 2. Center Visual Stage: Real Certificate / Official Badge Showcase ── */}
      <div className="flex-1 min-h-0 w-full flex items-center justify-center px-4 sm:px-8 pb-3 pt-0 z-10 relative">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
            {
              data.image && !imgError ? (
                <div className="relative max-h-full max-w-full flex items-center justify-center p-2 sm:p-3 rounded-2xl bg-slate-50/90 dark:bg-[#0A101D]/75 border border-slate-200/90 dark:border-white/10 shadow-[0_8px_30px_rgba(13,49,100,0.08)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden group">
                  {/* Subtle Ambient Radial Highlight Behind Image */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-30 blur-2xl"
                    style={{ backgroundColor: cat.glow }}
                  />

                  <img
                    src={data.image}
                    alt={`${data.title} Certificate`}
                    onError={() => setImgError(true)}
                    className="relative z-10 max-h-[220px] sm:max-h-[250px] lg:max-h-[270px] w-auto max-w-full object-contain rounded-xl shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>
              ) : (
                /* Fallback badge display */
                    <div className="w-full max-w-[380px] p-5 rounded-2xl bg-gradient-to-b from-slate-50 to-white dark:from-[#131F35] dark:to-[#0C1525] border border-slate-200/90 dark:border-white/10 shadow-lg flex flex-col items-center text-center">
                      {data.badge ? (
                        <img
                          src={data.badge}
                          alt={`${data.title} Badge`}
                          className="w-16 h-16 sm:w-20 sm:h-20 mb-3 object-contain"
                        />
                      ) : (
                        <span className="text-3xl mb-2">{cat.icon}</span>
                      )}
                      <h4 className="font-display text-sm sm:text-base font-bold text-[#0D3164] dark:text-white">
                        {data.title}
                      </h4>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">
                          {data.issuer}  {data.date}
                        </p>
                    </div>
          )}


                </div>
      </div>
      </div>
      )
}
