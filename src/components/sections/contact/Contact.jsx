import { motion } from 'framer-motion'
import CircuitOverlay from '../../common/CircuitOverlay'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--bg-page)] scroll-mt-16 pt-20 sm:pt-24 lg:pt-28 pb-24 md:pb-16 transition-colors duration-300"
    >
      {/* Background Circuit Overlay */}
      <CircuitOverlay opacity={0.06} />

      <div className="container-width relative z-10 px-4 sm:px-6 lg:px-8">
        {/* ─── 1. Compact Single-Line Header Close to Navbar ────────────────── */}
        <motion.div {...fadeUp} className="text-center mb-10 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight leading-tight text-[#0D3164] dark:text-white">
            Let&apos;s Work Together
          </h2>
          <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] mt-2 max-w-2xl mx-auto leading-relaxed">
            Available for full-time engineering roles, high-impact contract projects, and strategic technical consulting. Delivering reliable web platforms, mobile apps, and production AI solutions.
          </p>
        </motion.div>

        {/* ─── 2. Unified 2-Column Split Card ───────────────────────────────── */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl xl:max-w-6xl mx-auto rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/15 shadow-[0_16px_48px_rgba(13,49,100,0.08)] dark:shadow-2xl grid grid-cols-1 lg:grid-cols-[1fr,1.15fr] bg-white dark:bg-[#0B1528] relative"
        >
          {/* Left Column: Get In Touch & Social Links */}
          <ContactInfo />

          {/* Right Column: ContactForm */}
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
