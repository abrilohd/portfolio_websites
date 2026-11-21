import { useState, useEffect, useRef, useCallback } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../../../data/projects'

export default function Projects() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [cardWidth, setCardWidth] = useState(0)
  const [gap, setGap] = useState(24)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const cardRef = useRef(null)
  const stageRef = useRef(null)
  const intervalRef = useRef(null)
  const rafRef = useRef(null)
  const startRef = useRef(null)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)
  const isDragging = useRef(false)

  const DURATION = 5000

  // Display projects with a clone of the first project appended at the end
  // so the next card ALWAYS peeks on the right edge, even on the last slide
  const displayProjects = [
    ...projects,
    { ...projects[0], id: `${projects[0].id}-peek-clone`, _isClone: true },
  ]

  /* ─── Track Dimensions on Resize ───────────────────────────────────────── */
  const updateDimensions = useCallback(() => {
    const vw = window.innerWidth
    setGap(vw < 640 ? 16 : 24)

    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    updateDimensions()
    const ro = new ResizeObserver(() => {
      updateDimensions()
    })

    if (stageRef.current) ro.observe(stageRef.current)
    if (cardRef.current) ro.observe(cardRef.current)
    window.addEventListener('resize', updateDimensions)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', updateDimensions)
    }
  }, [updateDimensions])

  /* ─── Seamless Infinite Wrap-Around Looping ────────────────────────────── */
  useEffect(() => {
    if (active === projects.length) {
      // Slid smoothly into the cloned first card; reset to 0 invisibly
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setActive(0)
      }, 500)
      return () => clearTimeout(timer)
    } else if (!isTransitioning) {
      // Re-enable smooth transition once reset is done
      const timer = setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [active, isTransitioning])

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
    if (!playing || hovered) {
      clearInterval(intervalRef.current)
      stopProgress()
      return
    }

    startProgress()
    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        if (prev >= projects.length) return 1
        return prev + 1
      })
    }, DURATION)

    return () => {
      clearInterval(intervalRef.current)
      stopProgress()
    }
  }, [playing, hovered, active, startProgress, stopProgress, DURATION])

  /* ─── Navigation Handlers ──────────────────────────────────────────────── */
  const goTo = useCallback((idx) => {
    setIsTransitioning(true)
    setActive(idx % projects.length)
  }, [])

  const goNext = useCallback(() => {
    setIsTransitioning(true)
    setActive((prev) => {
      if (prev >= projects.length) return 1
      return prev + 1
    })
  }, [])

  const goPrev = useCallback(() => {
    setIsTransitioning(true)
    setActive((prev) => {
      if (prev <= 0) {
        return projects.length - 1
      }
      return prev - 1
    })
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

  return (
    <section
      id="projects"
      className="relative bg-[var(--bg-page)] scroll-mt-16 h-[100dvh] max-h-[100dvh] min-h-[550px] flex flex-col justify-between overflow-hidden pt-16 sm:pt-16 pb-2 sm:pb-3"
    >
      {/* ─── 1. Centered Header Anchored Tight Under the Navbar ───────────── */}
      <div className="w-full flex-shrink-0 z-20 text-center px-4 pt-1 sm:pt-1.5 pb-1 sm:pb-1.5">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-[2.4rem] tracking-tight text-[var(--text-primary)] leading-tight">
            What I&apos;ve Built
          </h2>
          <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5 sm:mt-1 leading-normal max-w-lg mx-auto">
            Real systems shipped to production — AI applications &amp; backend infrastructure.
          </p>
        </div>
      </div>

      {/* ─── 2. Carousel Stage (Centered Large Card + Small Next/Prev Peek) ─ */}
      <div
        ref={stageRef}
        className="relative w-full flex-1 flex items-center my-auto min-h-0 py-1 overflow-hidden select-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex items-center gap-4 sm:gap-6 lg:gap-7 will-change-transform ${
            isTransitioning
              ? 'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
              : 'transition-none'
          }`}
          style={{
            paddingLeft: cardWidth
              ? `calc((100vw - ${cardWidth}px) / 2)`
              : 'calc((100vw - min(84vw, 1040px)) / 2)',
            transform: cardWidth
              ? `translateX(-${active * (cardWidth + gap)}px)`
              : `translateX(calc(-${active} * (min(84vw, 1040px) + ${gap}px)))`,
          }}
        >
          {displayProjects.map((project, index) => {
            const isActualActive = index === active % projects.length
            const targetIndex = index % projects.length

            return (
              <div
                key={`${project.id}-${index}`}
                ref={index === 0 ? cardRef : null}
                className={`w-[88vw] sm:w-[84vw] lg:w-[80vw] max-w-[1040px] xl:max-w-[1100px] flex-shrink-0 h-[380px] xs:h-[400px] sm:h-[420px] lg:h-[clamp(330px,46vh,410px)] xl:h-[clamp(360px,50vh,440px)] max-h-[calc(100dvh-190px)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActualActive
                    ? 'scale-100 opacity-100 z-10'
                    : 'scale-[0.88] sm:scale-[0.90] opacity-40 hover:opacity-65 cursor-pointer z-0'
                }`}
              >
                <ProjectCard
                  data={project}
                  active={isActualActive}
                  onCardClick={() => {
                    if (!isActualActive) {
                      goTo(targetIndex)
                    }
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* ─── 3. Centered Bottom Controls Bar ([ < ] [ Pill ] [ > ]) ──────── */}
      <div className="w-full flex-shrink-0 z-30 flex items-center justify-center px-4 mb-2 sm:mb-3 mt-1 sm:mt-1.5">
        <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 flex-wrap">
          {/* Prev circle button (<) */}
          <button
            onClick={goPrev}
            aria-label="Previous project"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200/90 dark:border-white/15 bg-white/95 dark:bg-[#111A2E]/95 backdrop-blur-md flex items-center justify-center text-[var(--text-primary)] text-lg sm:text-xl font-bold shadow-sm hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            ‹
          </button>

          {/* Center Apple-style Glass Pill */}
          <div className="flex items-center gap-2.5 sm:gap-3 bg-[#141d2e]/90 dark:bg-black/85 backdrop-blur-xl rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-lg border border-white/10 z-30">
            {/* Auto-advance progress bar line */}
            <div className="w-8 sm:w-12 h-1 rounded-full bg-white/20 overflow-hidden flex-shrink-0">
              <div
                className="h-full rounded-full bg-[var(--brand-gold)] transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Pagination dots */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              {projects.map((proj, i) => {
                const isDotActive = i === active % projects.length
                return (
                  <button
                    key={proj.id}
                    onClick={() => goTo(i)}
                    aria-label={`Go to project ${i + 1}: ${proj.title}`}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      isDotActive
                        ? 'w-4 sm:w-5 h-1.5 sm:h-2 bg-[var(--brand-gold)] shadow-[0_0_8px_rgba(250,194,59,0.6)]'
                        : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                )
              })}
            </div>

            {/* Resume / Play / Pause Toggle Button */}
            <button
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
              className="text-white/80 hover:text-white text-xs pl-0.5 transition-colors select-none cursor-pointer flex-shrink-0"
            >
              {playing ? '⏸' : '▶'}
            </button>
          </div>

          {/* Next circle button (>) */}
          <button
            onClick={goNext}
            aria-label="Next project"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200/90 dark:border-white/15 bg-white/95 dark:bg-[#111A2E]/95 backdrop-blur-md flex items-center justify-center text-[var(--text-primary)] text-lg sm:text-xl font-bold shadow-sm hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
