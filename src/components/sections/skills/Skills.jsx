import SkillCategory from './SkillCategory'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../../../data/skills'



export default function Skills() {
  const [active, setActive] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState('right')
  const [progress, setProgress] = useState(0)

  const skillCategories = skills

  // Auto-advance
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setDirection('right')
      setActive((prev) => (prev + 1) % skillCategories.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered, skillCategories.length])

  // Progress bar animation
  useEffect(() => {
    setProgress(0)
    const t = setTimeout(() => setProgress(100), 50)
    return () => clearTimeout(t)
  }, [active])

  const goNext = () => {
    setDirection('right')
    setActive((prev) => (prev + 1) % skillCategories.length)
  }

  const goPrev = () => {
    setDirection('left')
    setActive((prev) => (prev - 1 + skillCategories.length) % skillCategories.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Compute prev, active, next indices
  const prevIdx = (active - 1 + skillCategories.length) % skillCategories.length
  const nextIdx = (active + 1) % skillCategories.length

  return (
    <section id="skills" className="relative overflow-hidden section-dark" style={{ padding: '80px 0' }}>
      {/* Circuit overlay */}
      <div className="absolute inset-0 circuit-bg opacity-[0.04] pointer-events-none" />

      <div className="container-width relative z-10">
        {/* Section header - CONSISTENT STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <p 
            className="font-mono section-label-text"
            style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '8px'
            }}
          >
            {'// SKILLS'}
          </p>
          <h2 
            className="font-display section-title-text"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '6px'
            }}
          >
            What I Work With
          </h2>
          <p 
            className="font-body section-desc-text"
            style={{
              fontSize: '1rem',
              maxWidth: '600px'
            }}
          >
            Technologies and tools I use to build intelligent, scalable systems.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="carousel-viewport"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Progress bar */}
          <div
            className={`carousel-progress ${!isHovered ? 'running' : ''}`}
            style={{ width: isHovered ? `${progress}%` : undefined }}
          />

          {/* Left arrow */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goPrev}
            aria-label="Previous skill"
          >
            ‹
          </button>

          {/* Cards track */}
          <div className="carousel-track">
            {/* Prev peek card */}
            <div
              className="carousel-card carousel-card-peek carousel-card-peek-left"
              onClick={goPrev}
            >
              <SkillCategory data={skillCategories[prevIdx]} dimmed />
            </div>

            {/* Active card */}
            <div
              className={`carousel-card carousel-card-active slide-in-${direction}`}
              key={active}
            >
              <SkillCategory data={skillCategories[active]} isActive />
            </div>

            {/* Next peek card */}
            <div
              className="carousel-card carousel-card-peek carousel-card-peek-right"
              onClick={goNext}
            >
              <SkillCategory data={skillCategories[nextIdx]} dimmed />
            </div>
          </div>

          {/* Right arrow */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goNext}
            aria-label="Next skill"
          >
            ›
          </button>
        </div>

        {/* Dot pagination */}
        <div className="carousel-dots">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.category}
              className={`carousel-dot ${i === active ? 'carousel-dot-active' : ''}`}
              onClick={() => {
                setDirection(i > active ? 'right' : 'left')
                setActive(i)
              }}
              aria-label={`Go to ${cat.category}`}
            />
          ))}
        </div>

        {/* Category name indicators */}
        <div className="carousel-category-name">{skillCategories[active].category}</div>
      </div>
    </section>
  )
}
