import { motion } from 'framer-motion'
import { HiBadgeCheck, HiExternalLink, HiAcademicCap } from 'react-icons/hi'
import { certificates } from '../data/certificates'
import { useTheme } from '../context/ThemeContext'

const fadeUp = {
  initial:     { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6 },
}

export default function Certifications() {
  const { dark } = useTheme()

  const heading = dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'
  const muted   = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const divider = dark ? 'border-[#1E1E3A]' : 'border-[#E2E2F0]'
  const yearBg  = dark
    ? 'bg-[#0F0F1A] border-[#1E1E3A] text-[#94A3B8]'
    : 'bg-[#F0F0FF] border-[#E2E2F0] text-[#64748B]'

  return (
    <section id="certifications" className="section-padding">
      <div className="container-width">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Certifications
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-2 ${heading}`}>
            Credentials & Learning
          </h2>
          <p className={`mt-3 max-w-md mx-auto text-sm leading-relaxed ${muted}`}>
            Professional certifications that validate my technical skills and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-200">
                  <HiAcademicCap size={20} />
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${yearBg}`}>
                  {cert.year}
                </span>
              </div>

              <div className="flex-1">
                <h3 className={`font-bold text-base mb-2 leading-snug group-hover:text-accent transition-colors duration-200 ${heading}`}>
                  {cert.title}
                </h3>
                <div className="flex items-center gap-1.5">
                  <HiBadgeCheck size={15} className="text-accent flex-shrink-0" />
                  <span className="text-xs font-semibold text-accent">{cert.issuer}</span>
                  <span className={`text-xs ${muted}`}>· Verified</span>
                </div>
              </div>

              <div className={`pt-3 border-t ${divider}`}>
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 hover:text-accent ${muted}`}
                >
                  <HiExternalLink size={13} />
                  View Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-12">
          <p className={`text-sm ${muted}`}>
            All certifications issued through{' '}
            <span className="text-accent font-semibold">Skillsoft</span>
            {' '}— a globally recognized professional learning platform.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
