import { HiMail, HiLocationMarker, HiClock, HiCheck, HiDuplicate } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import useCopyToClipboard from '../../../hooks/useCopyToClipboard'

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    handle: '@abrilohd',
    url: 'https://github.com/abrilohd',
    icon: <FaGithub size={15} />,
  },
  {
    name: 'LinkedIn',
    handle: 'Abrham Gebremedhin',
    url: 'https://www.linkedin.com/in/abrham-gebremedhin-962130360/',
    icon: <FaLinkedin size={15} />,
  },
  {
    name: 'Twitter / X',
    handle: '@abrsh067',
    url: 'https://x.com/abrsh067',
    icon: <FaTwitter size={15} />,
  },
]

export default function ContactInfo() {
  const { copied, copy } = useCopyToClipboard(2500)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    copy('abrsh067@gmail.com')
  }

  return (
    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-slate-50/90 dark:bg-[#092347]/90 border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-white/10 relative overflow-hidden h-full">
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full blur-3xl bg-[var(--brand-gold)]/10 dark:bg-[var(--brand-gold)]/5 pointer-events-none" />

      {/* Top Header & Pitch */}
      <div className="relative z-10">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0D3164] dark:text-white tracking-tight mb-2.5">
          Get In Touch
        </h3>
        <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 sm:mb-8">
          Have a product to build, an application to scale, or an engineering role to fill? Let&apos;s discuss how I can bring full stack, mobile, or AI product engineering leadership to your team.
        </p>

        {/* 3 Compact Contact Detail Rows */}
        <div className="flex flex-col gap-3">
          {/* 1. Email with Click-to-Copy & Mailto */}
          <div className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] shadow-sm transition hover:border-[#F5C518]/50">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-py-500/15 text-py-600 dark:text-py-400 flex items-center justify-center shrink-0">
                <HiMail size={18} />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                  Email
                </p>
                <a
                  href="mailto:abrsh067@gmail.com"
                  className="font-body text-xs sm:text-sm font-semibold text-[#0D3164] dark:text-white hover:text-py-600 dark:hover:text-[#F5C518] transition-colors truncate block"
                >
                  abrsh067@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              type="button"
              title="Copy email to clipboard"
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 hover:border-py-500 dark:hover:border-py-400 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-py-600 dark:hover:text-[#F5C518] text-[11px] font-mono font-medium transition flex items-center gap-1.5 shrink-0 active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <HiCheck size={14} className="text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <HiDuplicate size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* 2. Location */}
          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] shadow-sm transition hover:border-[#F5C518]/50">
            <div className="w-9 h-9 rounded-xl bg-py-500/15 text-py-600 dark:text-py-400 flex items-center justify-center shrink-0">
              <HiLocationMarker size={18} />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                Location
              </p>
              <p className="font-body text-xs sm:text-sm font-semibold text-[#0D3164] dark:text-white truncate">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          {/* 3. Availability */}
          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] shadow-sm transition hover:border-[#F5C518]/50">
            <div className="w-9 h-9 rounded-xl bg-py-500/15 text-py-600 dark:text-py-400 flex items-center justify-center shrink-0">
              <HiClock size={18} />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                Availability
              </p>
              <div className="flex items-center gap-2">
                <p className="font-body text-xs sm:text-sm font-semibold text-[#0D3164] dark:text-white truncate">
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Single-Row Compact Social Links */}
      <div className="mt-6 sm:mt-8 pt-5 border-t border-slate-200/80 dark:border-white/10 relative z-10">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-3">
          FIND ME ON
        </span>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-2.5">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl border border-slate-300/80 dark:border-white/15 bg-white dark:bg-white/5 hover:border-[#F5C518] hover:text-[#F5C518] text-[#0D3164] dark:text-white text-xs font-semibold transition flex items-center justify-center gap-2 group shadow-sm active:scale-95"
            >
              <span className="group-hover:scale-110 transition-transform">
                {social.icon}
              </span>
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
