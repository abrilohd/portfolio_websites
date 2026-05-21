import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { certificates } from '../data/certificates'
import { HiExternalLink } from 'react-icons/hi'

// Map category to color
const categoryColors = {
  'AI/ML': { bg: 'rgba(245,197,24,0.12)', border: 'rgba(245,197,24,0.3)', color: '#F5C518' },
  'Cloud': { bg: 'rgba(74,127,212,0.12)', border: 'rgba(74,127,212,0.3)', color: '#4A7FD4' },
  'Backend': { bg: 'rgba(122,171,234,0.12)', border: 'rgba(122,171,234,0.3)', color: '#7AABEA' },
  'Data': { bg: 'rgba(29,158,117,0.12)', border: 'rgba(29,158,117,0.3)', color: '#1D9E75' },
}

// CertCard component for carousel
function CertCard({ data, dimmed = false }) {
  const categoryStyle = categoryColors[data.category] || categoryColors['AI/ML']

  return (
    <div className={`cert-card-inner ${dimmed ? 'cert-card-dimmed' : ''}`}>
      {/* Card header */}
      <div className="cert-card-header">
        <div className="cert-badge-icon">🎓</div>
        <div className="cert-header-content">
          <h3 className="cert-card-title">{data.title}</h3>
          <span 
            className="cert-category-pill"
            style={{
              background: categoryStyle.bg,
              border: `1px solid ${categoryStyle.border}`,
              color: categoryStyle.color
            }}
          >
            {data.category}
          </span>
        </div>
      </div>

      {/* Issuer and date */}
      <div className="cert-meta-row">
        <div className="cert-issuer">
          <span className="cert-check">✓</span>
          <span className="cert-issuer-name">{data.issuer}</span>
        </div>
        <div className="cert-date-badge">{data.year}</div>
      </div>

      {/* Relevance description */}
      <p className="cert-relevance">{data.relevance}</p>

      {/* Date detail */}
      <div className="cert-date-detail">
        <span className="cert-date-label">Issued:</span>
        <span className="cert-date-value">{data.date}</span>
      </div>

      {/* Action */}
      <div className="cert-actions">
        <a
          href={data.credential}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-action-link"
        >
          <HiExternalLink size={14} />
          <span>View Credential</span>
        </a>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [active, setActive] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState('right')
  const [progress, setProgress] = useState(0)

  const certList = certificates

  // Auto-advance
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setDirection('right')
      setActive((prev) => (prev + 1) % certList.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered, certList.length])

  // Progress bar animation
  useEffect(() => {
    setProgress(0)
    const t = setTimeout(() => setProgress(100), 50)
    return () => clearTimeout(t)
  }, [active])

  const goNext = () => {
    setDirection('right')
    setActive((prev) => (prev + 1) % certList.length)
  }

  const goPrev = () => {
    setDirection('left')
    setActive((prev) => (prev - 1 + certList.length) % certList.length)
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
  const prevIdx = (active - 1 + certList.length) % certList.length
  const nextIdx = (active + 1) % certList.length

  return (
    <section id="certifications" className="relative overflow-hidden section-dark" style={{ padding: '80px 0' }}>
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
            {'// CERTIFICATIONS'}
          </p>
          <h2 
            className="font-display section-title-text"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '6px'
            }}
          >
            Credentials & Learning
          </h2>
          <p 
            className="font-body section-desc-text"
            style={{
              fontSize: '1rem',
              maxWidth: '600px'
            }}
          >
            Professional certifications validating my technical foundation.
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
            aria-label="Previous certification"
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
              <CertCard data={certList[prevIdx]} dimmed />
            </div>

            {/* Active card */}
            <div
              className={`carousel-card carousel-card-active slide-in-${direction}`}
              key={active}
            >
              <CertCard data={certList[active]} />
            </div>

            {/* Next peek card */}
            <div
              className="carousel-card carousel-card-peek carousel-card-peek-right"
              onClick={goNext}
            >
              <CertCard data={certList[nextIdx]} dimmed />
            </div>
          </div>

          {/* Right arrow */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goNext}
            aria-label="Next certification"
          >
            ›
          </button>
        </div>

        {/* Dot pagination */}
        <div className="carousel-dots">
          {certList.map((cert, i) => (
            <button
              key={cert.title}
              className={`carousel-dot ${i === active ? 'carousel-dot-active' : ''}`}
              onClick={() => {
                setDirection(i > active ? 'right' : 'left')
                setActive(i)
              }}
              aria-label={`Go to ${cert.title}`}
            />
          ))}
        </div>

        {/* Certification name indicator */}
        <div className="carousel-category-name">{certList[active].title}</div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ 
            textAlign: 'center', 
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(74, 127, 212, 0.15)'
          }}
        >
          <a
            href="https://skillsoft.digitalbadges-eu.skillsoft.com/profile/eu-abrsh067647217/wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm font-semibold transition-all duration-200 footer-link"
            style={{
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#F5C518'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = ''
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <span>View Full Badge Wallet</span>
            <HiExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
