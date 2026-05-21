import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import CircuitOverlay from './CircuitOverlay'
import HeroMetrics    from './HeroMetrics'
import profileImg     from '../assets/images/profile.jpg'

const roles = [
  'AI Engineer',
  'LLM Application Developer',
  'Machine Learning Engineer',
  'AI Solutions Architect',
]

// Premium Tech Stack - Top 8 Most Important
const topSkills = [
  'Python',
  'PyTorch', 
  'LangChain',
  'OpenAI API',
  'FastAPI',
  'Docker',
  'Azure',
  'PostgreSQL'
]

const stagger = { animate: { transition: { staggerChildren: 0.08 } } }
const fadeUp  = {
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 50)
      return () => clearTimeout(t)
    }

    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0D1B3E' }}
    >
      {/* Circuit pattern overlay */}
      <CircuitOverlay opacity={0.04} />

      <div className="container-width relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-20 items-center">
          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-5"
          >
            {/* Eyebrow label */}
            <motion.div variants={fadeUp}>
              <p 
                className="font-mono"
                style={{
                  fontSize: '11px',
                  color: '#F5C518',
                  letterSpacing: '0.1em',
                  lineHeight: '1.5',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}
              >
                AI Engineer · Addis Ababa, Ethiopia
              </p>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeUp} className="flex flex-col" style={{ gap: '6px' }}>
              <h1 
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                Abrham <span style={{ color: '#F5C518' }}>G/Medhin</span>
              </h1>

              {/* Subtitle - Rotating Roles */}
              <div 
                style={{
                  minHeight: '2.2rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <h2 
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                    fontWeight: 600,
                    color: '#7AABEA',
                    lineHeight: '1.4',
                    minWidth: '300px'
                  }}
                >
                  {displayed}
                  <span
                    className="ml-0.5"
                    style={{ 
                      color: '#F5C518',
                      fontSize: '1.25rem',
                      animation: 'cursorBlink 1s step-end infinite' 
                    }}
                  >
                    |
                  </span>
                </h2>
              </div>
            </motion.div>

            {/* Bio - Concise & Direct */}
            <motion.p
              variants={fadeUp}
              className="font-body"
              style={{
                fontSize: '1.0625rem',
                color: '#A8C3EC',
                lineHeight: '1.65',
                maxWidth: '520px'
              }}
            >
              I build production AI systems with Python, LLMs, and FastAPI. 
              From model training to cloud deployment, I ship solutions that scale.
            </motion.p>

            {/* Status Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2"
              style={{
                background: 'rgba(74,222,128,0.08)',
                border: '1px solid rgba(74,222,128,0.25)',
                borderRadius: '24px',
                padding: '8px 16px',
                width: 'fit-content'
              }}
            >
              <span 
                className="rounded-full animate-pulse"
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#4ADE80'
                }}
              />
              <span 
                className="font-mono font-semibold"
                style={{
                  fontSize: '12px',
                  color: '#4ADE80',
                  letterSpacing: '0.02em'
                }}
              >
                Available for Opportunities
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-1">
              <button
                onClick={() =>
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group flex items-center gap-2 font-display transition-all duration-300"
                style={{
                  background: '#F5C518',
                  color: '#07112A',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 16px rgba(245,197,24,0.3)',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFD03A'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(245,197,24,0.45)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F5C518'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(245,197,24,0.3)'
                }}
              >
                View Projects
                <HiArrowDown
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform duration-200"
                />
              </button>

              <button
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex items-center gap-2 font-display transition-all duration-300"
                style={{
                  background: 'transparent',
                  border: '2px solid #4A7FD4',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '15px',
                  padding: '12px 26px',
                  borderRadius: '10px',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#F5C518'
                  e.currentTarget.style.color = '#F5C518'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(245,197,24,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#4A7FD4'
                  e.currentTarget.style.color = '#FFFFFF'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Metrics strip */}
            <motion.div variants={fadeUp} style={{ marginTop: '8px' }}>
              <HeroMetrics />
            </motion.div>

            {/* Premium Tech Stack - Top 8 */}
            <motion.div 
              variants={fadeUp} 
              className="flex flex-col gap-2"
              style={{ marginTop: '4px' }}
            >
              <span 
                className="font-mono"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  color: '#7AABEA',
                  opacity: 0.7,
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}
              >
                Core Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.0 + i * 0.06 }}
                    className="font-mono cursor-default transition-all duration-200"
                    style={{
                      fontSize: '13px',
                      padding: '6px 14px',
                      borderRadius: '7px',
                      background: 'rgba(30,77,155,0.15)',
                      border: '1px solid rgba(74,127,212,0.3)',
                      color: '#A8C3EC',
                      fontWeight: 500
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#F5C518'
                      e.currentTarget.style.color = '#F5C518'
                      e.currentTarget.style.background = 'rgba(245,197,24,0.08)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(74,127,212,0.3)'
                      e.currentTarget.style.color = '#A8C3EC'
                      e.currentTarget.style.background = 'rgba(30,77,155,0.15)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — Profile ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Profile image container */}
            <div className="relative" style={{ width: '380px', height: '380px' }}>
              {/* Soft glow behind image */}
              <div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)',
                  transform: 'scale(1.15)'
                }}
              />
              
              {/* Animated rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '3px solid transparent',
                  borderTopColor: '#F5C518',
                  borderRightColor: '#F5C518',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />

              {/* Profile image */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                  border: '4px solid #F5C518',
                  boxShadow: '0 0 0 10px rgba(245,197,24,0.1), 0 12px 40px rgba(245,197,24,0.25), 0 0 80px rgba(245,197,24,0.08)',
                }}
              >
                <img
                  src={profileImg}
                  alt="Abrham G/Medhin — AI Engineer"
                  className="w-full h-full object-cover object-center"
                  style={{ transform: 'scale(1.05)' }}
                  loading="eager"
                />
              </div>

              {/* Floating tech badges - Repositioned */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.4, type: 'spring', stiffness: 200 }}
                className="absolute"
                style={{
                  top: '10%',
                  left: '-8%',
                  background: 'linear-gradient(135deg, #0F1E3D 0%, #1A2F5A 100%)',
                  borderRadius: '10px',
                  padding: '8px 14px',
                  border: '1.5px solid rgba(122,171,234,0.4)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.4)'
                }}
              >
                <span 
                  className="font-mono font-bold"
                  style={{
                    fontSize: '12px',
                    color: '#7AABEA',
                    letterSpacing: '0.03em'
                  }}
                >
                  Python
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.4, type: 'spring', stiffness: 200 }}
                className="absolute"
                style={{
                  top: '25%',
                  right: '-10%',
                  background: 'linear-gradient(135deg, #0F1E3D 0%, #1A2F5A 100%)',
                  borderRadius: '10px',
                  padding: '8px 14px',
                  border: '1.5px solid rgba(245,197,24,0.5)',
                  boxShadow: '0 6px 20px rgba(245,197,24,0.2)'
                }}
              >
                <span 
                  className="font-mono font-bold"
                  style={{
                    fontSize: '12px',
                    color: '#F5C518',
                    letterSpacing: '0.03em'
                  }}
                >
                  LLMs
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.4, type: 'spring', stiffness: 200 }}
                className="absolute"
                style={{
                  bottom: '25%',
                  left: '-10%',
                  background: 'linear-gradient(135deg, #0F1E3D 0%, #1A2F5A 100%)',
                  borderRadius: '10px',
                  padding: '8px 14px',
                  border: '1.5px solid rgba(122,171,234,0.4)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.4)'
                }}
              >
                <span 
                  className="font-mono font-bold"
                  style={{
                    fontSize: '12px',
                    color: '#7AABEA',
                    letterSpacing: '0.03em'
                  }}
                >
                  Hugging Face
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.4, type: 'spring', stiffness: 200 }}
                className="absolute"
                style={{
                  bottom: '10%',
                  right: '-8%',
                  background: 'linear-gradient(135deg, #0F1E3D 0%, #1A2F5A 100%)',
                  borderRadius: '10px',
                  padding: '8px 14px',
                  border: '1.5px solid rgba(122,171,234,0.4)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.4)'
                }}
              >
                <span 
                  className="font-mono font-bold"
                  style={{
                    fontSize: '12px',
                    color: '#7AABEA',
                    letterSpacing: '0.03em'
                  }}
                >
                  Azure
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ bottom: '28px', gap: '6px' }}
      >
        <span 
          className="font-mono uppercase"
          style={{
            fontSize: '9px',
            letterSpacing: '0.15em',
            color: '#4A7FD4',
            opacity: 0.6,
            fontWeight: 600
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '2px',
            height: '36px',
            background: 'linear-gradient(180deg, rgba(245,197,24,0.7) 0%, transparent 100%)',
            borderRadius: '2px'
          }}
        />
      </motion.div>
    </section>
  )
}
