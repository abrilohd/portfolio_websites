import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import {
  HiLightningBolt,
  HiServer,
  HiCloud,
  HiDesktopComputer,
  HiChartBar,
} from 'react-icons/hi'

const iconMap = {
  brain:   <HiLightningBolt size={22} />,
  server:  <HiServer size={22} />,
  cloud:   <HiCloud size={22} />,
  monitor: <HiDesktopComputer size={22} />,
  chart:   <HiChartBar size={22} />,
}

const proficiency = {
  'Python':             92,
  'OpenAI API':         85,
  'LangChain':          78,
  'Hugging Face':       70,
  'RAG Systems':        75,
  'Prompt Engineering': 88,
  'FastAPI':            90,
  'Django':             88,
  'Node.js':            75,
  'REST API':           92,
  'PostgreSQL':         82,
  'Redis':              70,
  'Azure':              75,
  'Docker':             80,
  'GitHub Actions':     78,
  'CI/CD Pipelines':    75,
  'Linux':              72,
  'React':              80,
  'TypeScript':         70,
  'Tailwind CSS':       90,
  'Vite':               85,
  'Framer Motion':      78,
  'Pandas':             80,
  'NumPy':              75,
  'SQL':                85,
  'Data Visualization': 82,
  'Jupyter':            78,
  'Matplotlib':         75,
}

// SkillCard component for carousel
function SkillCard({ data, dimmed = false, isActive = false }) {
  return (
    <div className={`skill-card-inner ${dimmed ? 'skill-card-dimmed' : ''}`}>
      {/* Card header */}
      <div className="skill-card-header">
        <span className="skill-card-icon">
          {iconMap[data.icon] ?? <HiLightningBolt size={22} />}
        </span>
        <h3 className="skill-card-title">{data.category}</h3>
        <span className="skill-card-count">{data.items.length}</span>
      </div>

      {/* Skill bars */}
      <div className="skill-list">
        {data.items.map((skill) => {
          const level = proficiency[skill] || 70
          return (
            <div key={skill} className="skill-row">
              <div className="skill-row-meta">
                <span className="skill-name">{skill}</span>
                <span className="skill-pct">{level}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ '--skill-width': `${level}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

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
    <section id="skills" className="relative overflow-hidden" style={{ background: '#07112A', padding: '80px 0' }}>
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
            className="font-mono"
            style={{
              fontSize: '11px',
              color: '#F5C518',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '8px'
            }}
          >
            {'// SKILLS'}
          </p>
          <h2 
            className="font-display"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '6px'
            }}
          >
            What I Work With
          </h2>
          <p 
            className="font-body"
            style={{
              fontSize: '1rem',
              color: '#7AABEA',
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
              <SkillCard data={skillCategories[prevIdx]} dimmed />
            </div>

            {/* Active card */}
            <div
              className={`carousel-card carousel-card-active slide-in-${direction}`}
              key={active}
            >
              <SkillCard data={skillCategories[active]} isActive />
            </div>

            {/* Next peek card */}
            <div
              className="carousel-card carousel-card-peek carousel-card-peek-right"
              onClick={goNext}
            >
              <SkillCard data={skillCategories[nextIdx]} dimmed />
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
