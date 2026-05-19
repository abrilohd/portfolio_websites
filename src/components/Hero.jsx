import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import NeuralCanvas  from './NeuralCanvas'
import SystemStatus  from './SystemStatus'
import HeroMetrics   from './HeroMetrics'
import profileImg    from '../assets/images/profile.jpg'

const roles = [
  'AI Systems Engineer',
  'Intelligent App Builder',
  'Backend AI Architect',
  'Python × AI Engineer',
]

const techBadges = [
  'Python',
  'FastAPI',
  'LangChain',
  'OpenAI API',
  'React',
  'Azure',
  'Docker',
  'PostgreSQL',
]

const stagger = { animate: { transition: { staggerChildren: 0.08 } } }
const fadeUp  = {
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

export default function Hero() {
  const { dark } = useTheme()
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

  const heading   = dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'
  const muted     = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const badgeBg   = dark
    ? 'bg-[#16162A] border-[#1E1E3A] text-[#94A3B8]'
    : 'bg-white border-[#E2E2F0] text-[#64748B]'
  const btnBorder = dark
    ? 'border-[#1E1E3A] text-[#E2E8F0] hover:border-accent/60 hover:bg-accent/5'
    : 'border-[#E2E2F0] text-[#0F0F1A] hover:border-accent/60 hover:bg-accent/5'

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Neural network canvas background */}
      <NeuralCanvas />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[120px] animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, #6366F1, transparent 68%)',
            opacity: dark ? 0.09 : 0.06,
          }}
        />
        <div
          className="absolute -bottom-40 -right-20 w-[550px] h-[550px] rounded-full blur-[100px] animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, #8B5CF6, transparent 68%)',
            opacity: dark ? 0.07 : 0.04,
            animationDelay: '2s',
          }}
        />
        {/* Subtle horizontal line across mid-hero */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px opacity-[0.04]"
          style={{
            background:
              'linear-gradient(90deg, transparent, #6366F1 30%, #8B5CF6 70%, transparent)',
          }}
        />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      <div className="container-width relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-6"
          >
            {/* System status */}
            <motion.div variants={fadeUp}>
              <SystemStatus />
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <h1
                className={`text-[2.6rem] sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight ${heading}`}
              >
                Hi, I'm{' '}
                <span className="gradient-text">Abrham G/medhin</span>
              </h1>

              {/* Typing role */}
              <div className="h-10 flex items-center">
                <span className="text-xl sm:text-2xl font-bold text-accent">
                  {displayed}
                </span>
                <span
                  className="ml-0.5 text-accent text-xl"
                  style={{ animation: 'cursorBlink 1s step-end infinite' }}
                >
                  |
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className={`text-[15px] leading-[1.8] max-w-[480px] ${muted}`}
            >
              I build intelligent backend systems and AI-powered applications
              using Python, FastAPI, and modern LLM tooling. Focused on
              shipping real AI products — not just demos.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group relative flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-sm transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5 overflow-hidden"
              >
                {/* Shimmer effect */}
                <span
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
                View My Work
                <HiArrowDown
                  size={15}
                  className="group-hover:translate-y-0.5 transition-transform duration-200"
                />
              </button>

              <a
                href="/cv.pdf"
                download
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${btnBorder}`}
              >
                Download CV
                <HiDownload size={15} />
              </a>

              <button
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-accent font-semibold text-sm transition-all duration-200 hover:bg-accent/8 hover:-translate-y-0.5"
              >
                Let's Talk →
              </button>
            </motion.div>

            {/* Metrics strip */}
            <motion.div variants={fadeUp}>
              <HeroMetrics />
            </motion.div>

            {/* Tech badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 items-center">
              <span className={`text-[11px] font-mono uppercase tracking-widest mr-2 ${muted} opacity-60`}>
                stack
              </span>
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.0 + i * 0.05 }}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all duration-200 cursor-default hover:border-accent/50 hover:text-accent ${badgeBg}`}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — Profile ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1,    x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Outer rotating conic ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[360px] h-[360px] rounded-full opacity-25"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 50%, #6366F1 75%, #8B5CF6 85%, transparent)',
              }}
            />

            {/* Secondary counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[315px] h-[315px] rounded-full opacity-15"
              style={{
                background:
                  'conic-gradient(from 180deg, transparent 60%, #8B5CF6 80%, #6366F1 90%, transparent)',
              }}
            />

            {/* Static glow ring */}
            <div className="absolute w-[290px] h-[290px] rounded-full border border-accent/10 animate-glow-pulse" />

            {/* Profile image — floating */}
            <div className="relative w-[285px] h-[285px] animate-float">
              <div className="w-full h-full rounded-full overflow-hidden glow-ring">
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
                className="absolute -top-4 -right-6 glass rounded-xl px-3.5 py-2 shadow-glow border border-accent/25 whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-bold text-accent">AI Engineer</span>
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.5, type: 'spring', stiffness: 200 }}
                className={`absolute -bottom-4 -left-6 glass rounded-xl px-3.5 py-2 border whitespace-nowrap ${
                  dark ? 'border-[#1E1E3A]' : 'border-[#E2E2F0]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-accent opacity-80">{'>'}_</span>
                  <span className={`text-xs font-bold ${dark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                    Python × Cloud
                  </span>
                </div>
              </motion.div>

              {/* Floating badge — left middle */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 200 }}
                className={`absolute top-1/2 -translate-y-1/2 -left-14 glass rounded-xl px-3 py-2 border whitespace-nowrap ${
                  dark ? 'border-[#1E1E3A]' : 'border-[#E2E2F0]'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  <span className={`text-[11px] font-bold ${dark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                    LLMs
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Corner grid accent */}
            <div
              className="absolute bottom-4 right-4 w-24 h-24 opacity-10"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #6366F1 1px, transparent 1px)',
                backgroundSize: '10px 10px',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${dark ? 'text-[#2D3748]' : 'text-[#CBD5E0]'}`}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
