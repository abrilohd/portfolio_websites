import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const statusBadges = {
  'Production':   { bg: 'rgba(74,222,128,0.12)', border: 'rgba(74,222,128,0.3)', color: '#4ADE80' },
  'Open Source':  { bg: 'rgba(122,171,234,0.12)', border: 'rgba(122,171,234,0.3)', color: '#7AABEA' },
  'Hackathon':    { bg: 'rgba(245,197,24,0.12)', border: 'rgba(245,197,24,0.3)', color: '#F5C518' },
  'Research':     { bg: 'rgba(74,127,212,0.12)', border: 'rgba(74,127,212,0.3)', color: '#4A7FD4' },
}

// ProjectCard component for carousel
function ProjectCard({ data, dimmed = false }) {
  const statusStyle = statusBadges[data.status] || statusBadges['Open Source']

  return (
    <div className={`project-card-inner ${dimmed ? 'project-card-dimmed' : ''}`}>
      {/* Card header */}
      <div className="project-card-header">
        <div className="flex items-center justify-between w-full">
          <h3 className="project-card-title">{data.title}</h3>
          {data.status && (
            <span 
              className="project-card-status"
              style={{
                background: statusStyle.bg,
                border: `1px solid ${statusStyle.border}`,
                color: statusStyle.color
              }}
            >
              {data.status}
            </span>
          )}
        </div>
        {data.metric && (
          <div className="project-card-metric">
            <span className="project-metric-icon">{data.metricIcon || '↑'}</span>
            <span className="project-metric-text">{data.metric}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="project-description">{data.description}</p>

      {/* Achievements */}
      {data.achievements && data.achievements.length > 0 && (
        <div className="project-achievements">
          {data.achievements.slice(0, 3).map((achievement, i) => (
            <div key={i} className="project-achievement-item">
              <div className="project-achievement-dot" />
              <span className="project-achievement-text">{achievement}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tech stack tags */}
      <div className="project-tags">
        {data.tags.slice(0, 6).map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="project-actions">
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action-link"
        >
          <FaGithub size={14} />
          <span>Source</span>
        </a>
        {data.live && data.live !== '#' && (
          <a
            href={data.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-link project-action-live"
          >
            <HiExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState('right')
  const [progress, setProgress] = useState(0)

  const projectList = projects

  // Auto-advance
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setDirection('right')
      setActive((prev) => (prev + 1) % projectList.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered, projectList.length])

  // Progress bar animation
  useEffect(() => {
    setProgress(0)
    const t = setTimeout(() => setProgress(100), 50)
    return () => clearTimeout(t)
  }, [active])

  const goNext = () => {
    setDirection('right')
    setActive((prev) => (prev + 1) % projectList.length)
  }

  const goPrev = () => {
    setDirection('left')
    setActive((prev) => (prev - 1 + projectList.length) % projectList.length)
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
  const prevIdx = (active - 1 + projectList.length) % projectList.length
  const nextIdx = (active + 1) % projectList.length

  return (
    <section id="projects" className="relative overflow-hidden section-light" style={{ padding: '80px 0' }}>
      {/* Circuit overlay */}
      <div className="absolute inset-0 circuit-bg opacity-[0.02] pointer-events-none" />

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
            {'// PROJECTS'}
          </p>
          <h2 
            className="font-display section-title-text"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '6px'
            }}
          >
            What I've Built
          </h2>
          <p 
            className="font-body section-desc-text"
            style={{
              fontSize: '1rem',
              maxWidth: '600px'
            }}
          >
            Real systems shipped to production — AI applications and backend infrastructure.
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
            aria-label="Previous project"
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
              <ProjectCard data={projectList[prevIdx]} dimmed />
            </div>

            {/* Active card */}
            <div
              className={`carousel-card carousel-card-active slide-in-${direction}`}
              key={active}
            >
              <ProjectCard data={projectList[active]} />
            </div>

            {/* Next peek card */}
            <div
              className="carousel-card carousel-card-peek carousel-card-peek-right"
              onClick={goNext}
            >
              <ProjectCard data={projectList[nextIdx]} dimmed />
            </div>
          </div>

          {/* Right arrow */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goNext}
            aria-label="Next project"
          >
            ›
          </button>
        </div>

        {/* Dot pagination */}
        <div className="carousel-dots">
          {projectList.map((proj, i) => (
            <button
              key={proj.id}
              className={`carousel-dot ${i === active ? 'carousel-dot-active' : ''}`}
              onClick={() => {
                setDirection(i > active ? 'right' : 'left')
                setActive(i)
              }}
              aria-label={`Go to ${proj.title}`}
            />
          ))}
        </div>

        {/* Project name indicator */}
        <div className="carousel-category-name">{projectList[active].title}</div>
      </div>
    </section>
  )
}
