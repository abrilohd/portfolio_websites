import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink } from 'react-icons/hi'
import CertificateCard from './CertificateCard'
import { certificates } from '../../../data/certificates'

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = activeIndex
  const setActive = setActiveIndex
  const [playing, setPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState('right')

  const { ref, inView } = useInView({ threshold: 0.25 })

  const intervalRef = useRef(null)
  const rafRef = useRef(null)
  const startRef = useRef(null)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)
  const isDragging = useRef(false)

  const DURATION = 5000

  /* ─── Continuous Progress Animation ─────────────────────────────────────── */
  const startProgress = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setProgress(0)
    startRef.current = performance.now()
    const tick = (now) => {
      const elapsed = now - startRef.current
      const pct = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(pct)
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [DURATION])

  const stopProgress = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }, [])

  /* ─── Navigation Handlers ──────────────────────────────────────────────── */
  const goTo = useCallback((idx) => {
    setActiveIndex((prev) => {
      setDirection(idx > prev ? 'right' : 'left')
      return idx % certificates.length
    })
  }, [])

  const goNext = useCallback(() => {
    setDirection('right')
    setActiveIndex((prev) => (prev + 1) % certificates.length)
  }, [])

  const goPrev = useCallback(() => {
    setDirection('left')
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }, [])

  /* ─── Auto-Advance Loop ─────────────────────────────────────────────────── */
  useEffect(() => {
    if (!inView) {
      clearInterval(intervalRef.current)
      stopProgress()
      setProgress(0)
      return
    }

    if (!playing || isHovered) {
      clearInterval(intervalRef.current)
      stopProgress()
      return
    }

    startProgress()
    intervalRef.current = setInterval(() => {
      goNext()
    }, DURATION)

    return () => {
      clearInterval(intervalRef.current)
      stopProgress()
    }
  }, [inView, playing, isHovered, activeIndex, startProgress, stopProgress, goNext, DURATION])

  /* ─── Keyboard Navigation ──────────────────────────────────────────────── */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  /* ─── Touch & Drag Swiping ─────────────────────────────────────────────── */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
    isDragging.current = true
    setIsHovered(true)
  }

  const handleTouchMove = (e) => {
    if (!isDragging.current) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  const handleTouchEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    setIsHovered(false)
    const threshold = 40
    if (touchDeltaX.current < -threshold) {
      goNext()
    } else if (touchDeltaX.current > threshold) {
      goPrev()
    }
    touchStartX.current = 0
    touchDeltaX.current = 0
  }

  const nextIdx = (active + 1) % certificates.length
  const nextCert = certificates[nextIdx]

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-page)] scroll-mt-16 min-h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-4rem)] lg:max-h-[calc(100dvh-4rem)] pt-3 sm:pt-4 pb-3 sm:pb-4 flex flex-col justify-between transition-colors duration-300"
    >
      {/* ─── 1. Header on One Single Line (No Eyebrow Label) ───────────────── */}
      <div className="w-full text-center px-4 flex-shrink-0 z-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight leading-tight text-[#0D3164] dark:text-white">
            Credentials &amp; Learning
          </h2>
          <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 max-w-xl mx-auto">
            Professional certifications validating my technical foundation.
          </p>
        </div>
      </div>

      {/* ─── 2. Showcase Area: Apple Showcase Card + Right-Edge Peek ──────── */}
      <div className="relative w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 my-auto flex-1 min-h-0 flex items-center">
        <div className="relative w-full h-full max-h-[460px] sm:max-h-[490px] lg:max-h-[510px] my-auto">
          {/* High-contrast peek of next certification card on the right edge */}
          <div
            onClick={goNext}
            aria-label={`Next certification preview: ${nextCert.title}`}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[10%] xl:w-[12%] h-[92%] rounded-l-[28px] bg-slate-100 dark:bg-[#111A2E] border-y border-l border-slate-200/90 dark:border-white/10 hidden lg:flex flex-col justify-center items-center opacity-80 hover:opacity-100 cursor-pointer transition-all duration-300 shadow-lg overflow-hidden p-3 z-0"
          >
            {nextCert.image && (
              <img
                src={nextCert.image}
                alt=""
                className="absolute inset-0 w-full h-full object-contain p-2 opacity-15 pointer-events-none filter blur-[0.5px]"
              />
            )}
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 select-none">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase rotate-90 whitespace-nowrap text-[var(--brand-gold)] dark:text-[#F5C518]">
                NEXT
              </span>
              <span className="text-xs font-mono font-semibold text-slate-700 dark:text-white/80 rotate-90 whitespace-nowrap max-w-[120px] truncate mt-4">
                {nextCert.category}
              </span>
            </div>
          </div>

          {/* Single commanding active showcase card */}
          <div
            className="relative z-10 w-full lg:w-[86%] xl:w-[87%] lg:ml-4 xl:ml-6 h-full rounded-[28px] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: direction === 'right' ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'right' ? -30 : 30 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full"
              >
                <CertificateCard data={certificates[active]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ─── 3. Apple-Style Centered Bottom Controls & Wallet Link ─────────── */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex-shrink-0 z-20">
        <div className="flex items-center justify-center gap-3">
          {/* Indicator Pill: Active progress bar + inactive dots in slide order */}
          <div className="px-5 py-2.5 sm:py-3 rounded-full bg-slate-200/85 dark:bg-white/10 backdrop-blur-md flex items-center gap-2.5 shadow-sm border border-slate-300/40 dark:border-white/10">
            {certificates.map((cert, i) => {
              const isSlideActive = i === active
              return isSlideActive ? (
                <div
                  key={cert.title}
                  className="w-8 sm:w-10 h-1.5 rounded-full bg-slate-400/40 dark:bg-white/20 overflow-hidden flex-shrink-0 transition-all duration-300"
                >
                  <div
                    className="h-full rounded-full bg-[#0D3164] dark:bg-[#F5C518] transition-none"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              ) : (
                <button
                  key={cert.title}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${cert.title}`}
                  className="w-2 h-2 rounded-full bg-slate-400/60 dark:bg-white/30 hover:bg-slate-600 dark:hover:bg-white/60 transition cursor-pointer select-none"
                />
              )
            })}
          </div>

          {/* Circular Play/Pause Button */}
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-200/85 dark:bg-white/10 hover:bg-slate-300/85 dark:hover:bg-white/20 flex items-center justify-center transition shadow-sm border border-slate-300/40 dark:border-white/10 text-[#0D3164] dark:text-white text-sm select-none cursor-pointer active:scale-95"
          >
            {playing ? '⏸' : '▶'}
          </button>
        </div>

        {/* View Full Badge Wallet Footer Link */}
        <div className="text-center mt-2 sm:mt-2.5">
          <a
            href="https://skillsoft.digitalbadges-eu.skillsoft.com/profile/eu-abrsh067647217/wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-[#0D3164] dark:text-[#F5C518] hover:underline transition-all duration-200"
          >
            <span>View Full Badge Wallet</span>
            <HiExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
