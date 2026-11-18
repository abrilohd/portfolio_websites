import { motion } from 'framer-motion'
import AboutArchPortrait from './AboutArchPortrait'
import AboutBio from './AboutBio'
import TechStackMarquee from './TechStackMarquee'

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--bg-page)] scroll-mt-16 min-h-[calc(100dvh-4rem)] flex flex-col justify-between pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10"
    >
      {/* ── Top Header: Anchored cleanly near the top of the viewport ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="w-full max-w-6xl xl:max-w-7xl mx-auto px-5 sm:px-8 text-center relative z-10"
      >
        <h2
          className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] tracking-tight text-[var(--text-primary)]"
          style={{ lineHeight: '1.15' }}
        >
          About Me
        </h2>
        <p
          className="font-body text-xs sm:text-sm lg:text-base xl:text-lg mt-1.5 max-w-2xl mx-auto text-[var(--text-secondary)]"
          style={{ lineHeight: '1.45' }}
        >
          AI Engineer building production systems that scale.
        </p>
      </motion.div>

      {/* ── Middle Main Split: Scales up portrait + notes on large monitors ── */}
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto px-5 sm:px-8 my-auto py-6 sm:py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 sm:gap-10 lg:gap-14 xl:gap-20">
          {/* Left Column — Arch Portrait (scales smoothly on lg/xl screens) */}
          <div className="md:col-span-5 flex justify-center items-center mt-3 sm:mt-1 md:mt-0">
            <div className="w-full flex justify-center lg:scale-110 xl:scale-[1.18] origin-center transition-transform duration-300">
              <AboutArchPortrait />
            </div>
          </div>

          {/* Right Column — What I Do, How I Work, Download CV */}
          <div className="md:col-span-7 flex flex-col justify-center lg:text-[1.06rem] xl:text-[1.125rem] [&_h3]:lg:text-xl [&_h3]:xl:text-2xl [&_p]:lg:text-base [&_p]:xl:text-[1.08rem] [&_p]:leading-relaxed">
            <AboutBio />
          </div>
        </div>
      </div>

      {/* ── Bottom Single-Row Tech Stack Marquee: Anchored cleanly at bottom edge ── */}
      <div className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10 lg:scale-105 xl:scale-110 origin-bottom transition-transform duration-300">
        <TechStackMarquee />
      </div>
    </section>
  )
}