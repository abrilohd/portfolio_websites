import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import CircuitOverlay from './CircuitOverlay'
import HeroMetrics    from './HeroMetrics'
import profileImg     from '../assets/images/profile.jpg'

const roles = [
  'AI Engineer',
  'Machine Learning Engineer',
  'LLM Application Developer',
]

// Organized by category for a real AI Engineer portfolio
const techStack = {
  languages: ['Python', 'SQL'],
  aiFrameworks: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI', 'Hugging Face'],
  dataViz: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
}

const stagger = { animate: { transition: { staggerChildren: 0.08 } } }
const fadeUp  = {
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}
const fadeIn  = {
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 72)
      return () => clearTimeout(t)
    }

    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2400)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32)
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
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
    >
      {/* Circuit pattern overlay */}
      <CircuitOverlay opacity={0.08} />

      <div className="container-width relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-6"
          >
            {/* Eyebrow label */}
            <motion.div variants={fadeUp}>
              <p 
                className="font-mono"
                style={{
                  fontSize: '13px',
                  color: '#F5C518',
                  letterSpacing: '0.05em',
                  lineHeight: '1.5'
                }}
              >
                AI Engineer · Addis Ababa, Ethiopia
              </p>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeUp} className="flex flex-col" style={{ gap: '8px' }}>
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
                Hi, I'm <span style={{ color: '#FFFFFF' }}>Abrham</span><span style={{ color: '#F5C518' }}>G/medhin</span>
              </h1>

              {/* Subtitle */}
              <h2 
                className="font-display"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  fontWeight: 600,
                  color: '#7AABEA',
                  lineHeight: '1.4'
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
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="font-body leading-relaxed"
              style={{
                fontSize: '1.0625rem',
                color: '#A8C3EC',
                lineHeight: '1.7',
                maxWidth: '540px'
              }}
            >
              I build AI solutions that solve real problems. From training ML models to deploying 
              LLM applications, I turn data into intelligent systems that businesses actually use.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group flex items-center gap-2 font-display transition-all duration-150"
                style={{
                  background: '#F5C518',
                  color: '#07112A',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '13px 26px',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#FFD03A'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#F5C518'}
              >
                See My Work
                <HiArrowDown
                  size={15}
                  className="group-hover:translate-y-0.5 transition-transform duration-200"
                />
              </button>

              <button
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex items-center gap-2 font-display transition-all duration-150"
                style={{
                  background: 'transparent',
                  border: '2px solid #4A7FD4',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '15px',
                  padding: '11px 24px',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#F5C518'
                  e.currentTarget.style.color = '#F5C518'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#4A7FD4'
                  e.currentTarget.style.color = '#FFFFFF'
                }}
              >
                Let's Talk
              </button>
            </motion.div>

            {/* Metrics strip */}
            <motion.div variants={fadeUp}>
              <HeroMetrics />
            </motion.div>

            {/* Tech Stack - Organized by Category */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              {/* Languages */}
              <div className="flex flex-col gap-1.5">
                <span 
                  className="font-mono"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.05em',
                    color: '#7AABEA',
                    opacity: 0.7
                  }}
                >
                  Languages
                </span>
                <div className="flex flex-wrap gap-2">
                  {techStack.languages.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.0 + i * 0.05 }}
                      className="font-mono cursor-default transition-all duration-150"
                      style={{
                        fontSize: '13px',
                        padding: '5px 12px',
                        borderRadius: '6px',
                        background: 'rgba(30,77,155,0.15)',
                        border: '1px solid rgba(74,127,212,0.25)',
                        color: '#A8C3EC',
                        fontWeight: 500
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#F5C518'
                        e.currentTarget.style.color = '#F5C518'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(74,127,212,0.25)'
                        e.currentTarget.style.color = '#A8C3EC'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* AI/ML Frameworks */}
              <div className="flex flex-col gap-1.5">
                <span 
                  className="font-mono"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.05em',
                    color: '#7AABEA',
                    opacity: 0.7
                  }}
                >
                  AI/ML Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {techStack.aiFrameworks.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 + i * 0.05 }}
                      className="font-mono cursor-default transition-all duration-150"
                      style={{
                        fontSize: '13px',
                        padding: '5px 12px',
                        borderRadius: '6px',
                        background: 'rgba(30,77,155,0.15)',
                        border: '1px solid rgba(74,127,212,0.25)',
                        color: '#A8C3EC',
                        fontWeight: 500
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#F5C518'
                        e.currentTarget.style.color = '#F5C518'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(74,127,212,0.25)'
                        e.currentTarget.style.color = '#A8C3EC'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Data & Visualization */}
              <div className="flex flex-col gap-1.5">
                <span 
                  className="font-mono"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.05em',
                    color: '#7AABEA',
                    opacity: 0.7
                  }}
                >
                  Data & Visualization
                </span>
                <div className="flex flex-wrap gap-2">
                  {techStack.dataViz.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.4 + i * 0.05 }}
                      className="font-mono cursor-default transition-all duration-150"
                      style={{
                        fontSize: '13px',
                        padding: '5px 12px',
                        borderRadius: '6px',
                        background: 'rgba(30,77,155,0.15)',
                        border: '1px solid rgba(74,127,212,0.25)',
                        color: '#A8C3EC',
                        fontWeight: 500
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#F5C518'
                        e.currentTarget.style.color = '#F5C518'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(74,127,212,0.25)'
                        e.currentTarget.style.color = '#A8C3EC'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — Profile ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1,    x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Profile image with glow ring */}
            <div className="relative animate-float" style={{ width: '320px', height: '320px' }}>
              <div
                className="w-full h-full rounded-full overflow-hidden"
                style={{
                  border: '3px solid #F5C518',
                  boxShadow: '0 0 0 8px rgba(245,197,24,0.12), 0 8px 32px rgba(245,197,24,0.15)',
                }}
              >
                <img
                  src={profileImg}
                  alt="Abrham G/medhin — AI Systems Engineer"
                  className="w-full h-full object-cover object-center scale-105"
                  loading="eager"
                />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute whitespace-nowrap"
                style={{
                  top: '-16px',
                  right: '-24px',
                  background: '#163060',
                  borderRadius: '12px',
                  padding: '8px 14px',
                  border: '1px solid rgba(245,197,24,0.4)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}
              >
                <div className="flex items-center gap-2">
                  <span 
                    className="rounded-full animate-pulse"
                    style={{
                      width: '6px',
                      height: '6px',
                      background: '#F5C518'
                    }}
                  />
                  <span 
                    className="font-mono font-bold"
                    style={{
                      fontSize: '11px',
                      color: '#F5C518',
                      letterSpacing: '0.02em'
                    }}
                  >
                    AI Engineer
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ bottom: '32px', gap: '8px' }}
      >
        <span 
          className="font-mono uppercase"
          style={{
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: '#4A7FD4',
            opacity: 0.5
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(180deg, rgba(245,197,24,0.6) 0%, transparent 100%)'
          }}
        />
      </motion.div>
    </section>
  )
}
