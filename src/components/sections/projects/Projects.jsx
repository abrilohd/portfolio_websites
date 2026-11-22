import { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './ProjectCard'
import { projects } from '../../../data/projects'

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = activeIndex
  const setActive = setActiveIndex
  const [playing, setPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [hovered, setHovered] = useState(false)

  const { ref, inView } = useInView({ threshold: 0.25 })

  const intervalRef = useRef(null)
  const rafRef = useRef(null)
  const startRef = useRef(null)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)
  const isDragging = useRef(false)

  const DURATION = 5000

  /* ─── Continuous Progress Bar Animation ────────────────────────────────── */
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

  /* ─── Auto-Advance Timer ───────────────────────────────────────────────── */
  useEffect(() => {
    if (!inView) {
      clearInterval(intervalRef.current)
      stopProgress()
      setProgress(0)
      return
    }

    if (!playing || hovered) {
      clearInterval(intervalRef.current)
      stopProgress()
      return
    }

    startProgress()
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length)
    }, DURATION)

    return () => {
      clearInterval(intervalRef.current)
      stopProgress()
    }
  }, [inView, playing, hovered, activeIndex, startProgress, stopProgress, DURATION])

  /* ─── Navigation Handlers ──────────────────────────────────────────────── */
  const goTo = useCallback((idx) => {
    setActiveIndex(idx % projects.length)
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

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
    setHovered(true)
  }

  const handleTouchMove = (e) => {
    if (!isDragging.current) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  const handleTouchEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    setHovered(false)
    const threshold = 40
    if (touchDeltaX.current < -threshold) {
      goNext()
    } else if (touchDeltaX.current > threshold) {
      goPrev()
    }
    touchStartX.current = 0
    touchDeltaX.current = 0
  }

  const currentProject = projects[active]
  const nextProject = projects[(active + 1) % projects.length]

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-[var(--bg-page)] scroll-mt-16 pt-4 sm:pt-6 pb-6 min-h-[calc(100dvh-4rem)] flex flex-col justify-between overflow-hidden"
    >
      {/* ─── 1. Header Pulled Up Close to Navbar with Exact Subtitle ─────── */}
      <div className="w-full flex-shrink-0 z-20 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-[var(--text-primary)] leading-tight">
            What I&apos;ve Built
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 max-w-xl mx-auto">
            Reliable web applications, mobile platforms, and production AI products.
          </p>
        </div>
      </div>

      {/* ─── 2. Showcase Area: Commanding Card + Far-Right Next Peek ──────── */}
      <div className="relative w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 my-auto flex-1 flex items-center">
        <div className="relative w-full">
          {/* Partial peek of next card anchored cleanly on the far right edge */}
          <div
            onClick={goNext}
            aria-label={`Next project preview: ${nextProject.title}`}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[8%] h-[92%] rounded-l-3xl bg-white dark:bg-[#111A2E] border-y border-l border-slate-200/90 dark:border-white/10 hidden lg:block scale-[0.98] opacity-40 hover:opacity-75 cursor-pointer z-0 shadow-lg transition-all duration-300 overflow-hidden"
          >
            {nextProject.image ? (
              <img
                src={nextProject.image}
                alt={nextProject.title}
                className="w-full h-full object-cover object-left opacity-70"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0D1B2E] dark:to-[#07111F] opacity-70 p-2 flex flex-col justify-center items-center">
                <span className="text-[10px] font-mono text-[var(--text-secondary)] rotate-90 whitespace-nowrap tracking-widest uppercase">
                  Next
                </span>
              </div>
            )}
          </div>

          {/* Active showcase card filling 88%–90% of viewport with commanding height */}
          <div
            className="relative z-10 w-full lg:w-[88%] xl:w-[90%] lg:ml-6 xl:ml-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-[0_12px_40px_rgba(13,49,100,0.08)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.55)] bg-white dark:bg-[#111A2E] lg:h-[470px] xl:h-[500px] transition-all duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <ProjectCard data={currentProject} />
          </div>
        </div>
      </div>

      {/* ─── 3. Bottom Controls Bar Directly Beneath Active Card ─────────── */}
      <div className="w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 flex-shrink-0 z-20">
        <div className="w-full lg:w-[88%] xl:w-[90%] lg:ml-6 xl:ml-10 mt-5 sm:mt-6 flex items-center justify-between">
          {/* Bottom-Left: Two circular < and > buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full border border-slate-300/80 dark:border-white/15 bg-white/80 dark:bg-white/5 hover:border-[#0D3164] dark:hover:border-white text-[var(--text-primary)] hover:text-[#0D3164] dark:hover:text-white transition flex items-center justify-center text-lg font-bold select-none cursor-pointer active:scale-95 shadow-sm"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              aria-label="Next project"
              className="w-10 h-10 rounded-full border border-slate-300/80 dark:border-white/15 bg-white/80 dark:bg-white/5 hover:border-[#0D3164] dark:hover:border-white text-[var(--text-primary)] hover:text-[#0D3164] dark:hover:text-white transition flex items-center justify-center text-lg font-bold select-none cursor-pointer active:scale-95 shadow-sm"
            >
              ›
            </button>
          </div>

          {/* Bottom-Center: Apple-style translucent pill container */}
          <div className="px-4 py-2 rounded-full bg-slate-200/80 dark:bg-white/10 backdrop-blur-md flex items-center gap-3 shadow-md border border-slate-300/40 dark:border-white/10">
            {/* Animated progress bar fill */}
            <div className="w-12 sm:w-14 h-[3px] rounded-full bg-slate-400/30 dark:bg-white/20 overflow-hidden flex-shrink-0">
              <div
                className="h-full rounded-full bg-[#F5C518] transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Clickable slide indicator dots */}
            <div className="flex items-center gap-1.5">
              {projects.map((proj, i) => (
                <button
                  key={proj.id}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}: ${proj.title}`}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${i === active
                    ? 'w-5 h-2 bg-[#F5C518] shadow-[0_0_8px_rgba(245,197,24,0.6)]'
                    : 'w-2 h-2 bg-slate-400/60 dark:bg-white/30 hover:bg-slate-600 dark:hover:bg-white/60'
                    }`}
                />
              ))}
            </div>

            {/* Circular Play/Pause auto-advance toggle button */}
            <button
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
              className="w-7 h-7 rounded-full bg-white dark:bg-white/15 flex items-center justify-center shadow-sm text-slate-700 dark:text-white text-xs hover:scale-105 active:scale-95 transition-all select-none cursor-pointer flex-shrink-0"
            >
              {playing ? '⏸' : '▶'}
            </button>
          </div>

          {/* Spacer to balance left navigation arrows and keep center pill dead-centered */}
          <div className="w-[88px] hidden sm:block pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
