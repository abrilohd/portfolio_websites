import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { identity } from '../../../data/identity'

export default function AboutBio() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col space-y-5 w-full max-w-xl lg:max-w-2xl"
    >
      {/* What I Do */}
      <div>
        <h3 className="font-display text-base lg:text-[1.0625rem] font-bold mb-2 text-[var(--text-primary)]">
          What I Do
        </h3>
        <p className="font-body text-xs sm:text-sm lg:text-[14.5px] text-[var(--text-secondary)] leading-relaxed">
          {identity.manifesto}
        </p>
      </div>

      {/* How I Work */}
      <div>
        <h3 className="font-display text-base lg:text-[1.0625rem] font-bold mb-2 text-[var(--text-primary)]">
          How I Work
        </h3>
        <p className="font-body text-xs sm:text-sm lg:text-[14.5px] text-[var(--text-secondary)] leading-relaxed">
          {identity.philosophy}
        </p>
      </div>

      {/* Download CV Button:
          - Mobile: full-width centered (flex justify-center)
          - Desktop md+: left-aligned (md:justify-start) */}
      <div className="mt-5 pt-1 flex justify-center md:justify-start">
        <a
          href="/resume.pdf"
          download="Abrham_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer select-none"
          style={{
            backgroundColor: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-text)',
            boxShadow: 'var(--btn-primary-shadow)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--btn-primary-hover)'
            e.currentTarget.style.boxShadow = 'var(--shadow-glow-gold)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--btn-primary-bg)'
            e.currentTarget.style.boxShadow = 'var(--btn-primary-shadow)'
          }}
        >
          <HiDownload size={18} className="shrink-0" />
          <span>Download CV</span>
        </a>
      </div>
    </motion.div>
  )
}
