import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import CircuitOverlay from '../../common/CircuitOverlay'
import HeroMetrics from './HeroMetrics'
import HeroAvatar from './HeroAvatar'
import { identity } from '../../../data/identity'

const roles = identity.roles

const stagger = { animate: { transition: { staggerChildren: 0.08 } } }
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

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
      className="relative min-h-0 lg:min-h-screen flex items-center overflow-hidden bg-[var(--bg-page)]"
    >
      {/* Circuit pattern overlay */}
      <CircuitOverlay opacity={0.04} />

      <div className="container-width relative z-10 pt-20 sm:pt-24 pb-8 sm:pb-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr,0.92fr] xl:grid-cols-[1.05fr,0.95fr] gap-6 sm:gap-8 lg:gap-10 xl:gap-16 items-center">
          {/* ── LEFT COLUMN (Order 1 on mobile & desktop) ── */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-start lg:justify-center order-1 lg:order-none pt-2 pb-2 lg:py-0"
          >
            {/* Name */}
            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
              <h1
                className="font-display font-extrabold tracking-[-0.02em] leading-[1.1] text-[var(--text-primary)]"
                style={{ fontSize: 'clamp(2.35rem, 6vw, 4.25rem)' }}
              >
                Abrham <span className="text-[var(--brand-gold)]">G/Medhin</span>
              </h1>

              {/* Subtitle - Rotating Roles */}
              <div className="min-h-[2.2rem] flex items-center">
                <h2
                  className="font-display font-semibold leading-[1.4] text-[var(--text-primary)]"
                  style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.45rem)' }}
                >
                  {displayed}
                  <span
                    className="ml-0.5 text-[1.25rem] text-[var(--brand-gold)]"
                    style={{ animation: 'cursorBlink 1s step-end infinite' }}
                  >
                    |
                  </span>
                </h2>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="font-body mt-3.5 sm:mt-5 text-[1rem] sm:text-[1.0625rem] xl:text-[1.125rem] leading-[1.65] max-w-[560px] text-[var(--text-secondary)]"
            >
              {identity.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-5 sm:mt-8"
            >
              <a
                href="https://t.me/Asebg16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-display font-bold whitespace-nowrap rounded-[10px] min-h-[48px] px-[18px] py-3 border-2 border-transparent cursor-pointer transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5"
                style={{
                  background: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                  fontSize: 'clamp(13px, 3.5vw, 15px)',
                  boxShadow: 'var(--btn-primary-shadow)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--btn-primary-hover)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow-gold)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--btn-primary-bg)'
                  e.currentTarget.style.boxShadow = 'var(--btn-primary-shadow)'
                }}
              >
                Book a Project
              </a>

              <button
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex items-center justify-center font-display font-semibold whitespace-nowrap rounded-[10px] min-h-[48px] px-[18px] py-3 bg-transparent border-2 border-[var(--border-hover)] text-[var(--text-primary)] cursor-pointer transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5 hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)] hover:shadow-[0_4px_16px_rgba(245,197,24,0.2)]"
                style={{ fontSize: 'clamp(13px, 3.5vw, 15px)' }}
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Metrics Strip */}
            <motion.div variants={fadeUp} className="mt-6 sm:mt-10">
              <HeroMetrics />
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN -Pop-Out Profile Portrait (strips unwanted mobile min-h-screen gap) ── */}
          <div className="order-2 lg:order-none w-full flex justify-center items-center mt-2 sm:mt-4 lg:mt-0 [&>*]:!min-h-0 [&>*]:!h-auto [&>*]:!py-0 lg:[&>*]:!min-h-[auto] xl:scale-105 origin-center transition-transform duration-300">
            <HeroAvatar />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-6 flex-col items-center gap-1.5"
      >
        <span
          className="font-mono uppercase text-[9px] tracking-[0.15em] font-semibold opacity-60 text-[var(--text-muted)]"
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[2px] h-9 rounded-[2px]"
          style={{
            background: 'linear-gradient(180deg, var(--brand-gold) 0%, transparent 100%)',
          }}
        />
      </motion.div>
    </section>
  )
}
