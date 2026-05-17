import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import profileImg from '../assets/images/profile.jpg'

const roles = [
  'Python Developer',
  'Backend Engineer',
  'Cloud Enthusiast',
  'Full-Stack Builder',
]

const techBadges = ['Python','Django','Flask','FastAPI','Azure','React','Docker','PostgreSQL']

const stagger = { animate: { transition: { staggerChildren: 0.1 } } }
const fadeUp  = {
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Hero() {
  const { dark } = useTheme()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
      return () => clearTimeout(t)
    }

    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }
  }, [displayed, deleting, roleIndex])

  const badgeBg    = dark ? 'bg-[#16162A] border-[#1E1E3A]' : 'bg-white border-[#E2E2F0]'
  const badgeText  = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const mutedText  = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const btnOutline = dark
    ? 'border-[#1E1E3A] text-[#E2E8F0] hover:border-accent/50 hover:bg-accent/5'
    : 'border-[#E2E2F0] text-[#0F0F1A] hover:border-accent/50 hover:bg-accent/5'

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden dot-grid"
    >
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, #6366F1, transparent 70%)',
            opacity: dark ? 0.07 : 0.05,
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, #8B5CF6, transparent 70%)',
            opacity: dark ? 0.06 : 0.04,
            animationDelay: '1.5s',
          }}
        />
      </div>

      <div className="container-width relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-7 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] mb-5 tracking-tight ${
                dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'
              }`}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Abrham G/medhin</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="text-xl sm:text-2xl font-bold mb-6 h-9 flex items-center"
            >
              <span className="text-accent">{displayed}</span>
              <span
                className="ml-0.5 text-accent"
                style={{ animation: 'cursorBlink 1s step-end infinite' }}
              >
                |
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className={`text-base leading-relaxed mb-8 max-w-lg ${mutedText}`}>
              I build clean, scalable backend systems and modern web applications
              using Python. Currently expanding expertise in Azure cloud services
              and full-stack development — focused on writing code that ships.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() =>
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-sm transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5"
              >
                View My Work
                <HiArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform duration-200" />
              </button>

              <a
                href="/cv.pdf"
                download
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${btnOutline}`}
              >
                Download CV
                <HiDownload size={15} />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 items-center">
              <span className={`text-xs mr-1 ${mutedText}`}>Stack:</span>
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.06 }}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 cursor-default hover:border-accent/40 hover:text-accent ${badgeBg} ${badgeText}`}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1,    x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div
              className="absolute w-[340px] h-[340px] rounded-full animate-spin-slow opacity-30"
              style={{ background: 'conic-gradient(from 0deg, transparent 60%, #6366F1, #8B5CF6, transparent)' }}
            />

            <div className="absolute w-[310px] h-[310px] rounded-full border border-accent/10 animate-glow-pulse" />

            <div className="relative w-[280px] h-[280px] animate-float">
              <div className="w-full h-full rounded-full overflow-hidden glow-ring">
                <img
                  src={profileImg}
                  alt="Abrham G/medhin — Python Developer"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.4, type: 'spring' }}
                className={`absolute -top-3 -right-3 glass rounded-xl px-3 py-2 text-xs font-semibold text-accent border border-accent/20 shadow-glow whitespace-nowrap`}
              >
                ⚡ Python Dev
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4, type: 'spring' }}
                className={`absolute -bottom-3 -left-3 glass rounded-xl px-3 py-2 text-xs font-semibold border shadow-card whitespace-nowrap ${
                  dark ? 'text-[#94A3B8] border-[#1E1E3A]' : 'text-[#64748B] border-[#E2E2F0]'
                }`}
              >
                ☁️ Azure Cloud
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
