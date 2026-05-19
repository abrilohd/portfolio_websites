import { motion } from 'framer-motion'
import { HiBadgeCheck, HiExternalLink, HiAcademicCap } from 'react-icons/hi'
import { certificates } from '../data/certificates'
import { useTheme } from '../context/ThemeContext'
import SectionHeader from './SectionHeader'

const categoryColor = {
  'AI & Machine Learning': 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  'Cloud Infrastructure':  'text-blue-400 bg-blue-500/10 border-blue-500/20',
  'Backend Engineering':   'text-green-400 bg-green-500/10 border-green-500/20',
  'Data Engineering':      'text-amber-400 bg-amber-500/10 border-amber-500/20',
}

export default function Certifications() {
  const { dark }  = useTheme()

  const heading   = dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'
  const muted     = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const divider   = dark ? 'border-[#1E1E3A]' : 'border-[#E2E2F0]'
  const yearBg    = dark
    ? 'bg-[#0F0F1A] border-[#1E1E3A] text-[#94A3B8]'
    : 'bg-[#F4F4FF] border-[#E2E2F0] text-[#64748B]'
  const relevanceBg = dark
    ? 'bg-[#16162A] border-[#1E1E3A] text-[#64748B]'
    : 'bg-[#F8F8FF] border-[#E2E2F0] text-[#94A3B8]'

  return (
    <section id="certifications" className="section-padding">
      <div className="container-width">
        <SectionHeader
          label="Certifications"
          title="Credentials & Learning"
          description="Professional certifications validating my technical foundation and commitment to continuous engineering growth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass gradient-border rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/25 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/18 transition-colors duration-200">
                  <HiAcademicCap size={18} />
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${yearBg}`}>
                  {cert.year}
                </span>
              </div>

              {/* Category badge */}
              {cert.category && (
                <span
                  className={`w-fit px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                    categoryColor[cert.category] ??
                    'text-accent bg-accent/10 border-accent/20'
                  }`}
                >
                  {cert.category}
                </span>
              )}

              {/* Title + issuer */}
              <div className="flex-1">
                <h3
                  className={`font-bold text-sm mb-2 leading-snug group-hover:text-accent transition-colors duration-200 ${heading}`}
                >
                  {cert.title}
                </h3>
                <div className="flex items-center gap-1.5">
                  <HiBadgeCheck size={14} className="text-accent flex-shrink-0" />
                  <span className="text-xs font-bold text-accent">{cert.issuer}</span>
                  <span className={`text-xs ${muted}`}>· Verified</span>
                </div>
              </div>

              {/* Relevance tag */}
              {cert.relevance && (
                <div className={`px-3 py-2 rounded-xl border text-[10px] font-medium ${relevanceBg}`}>
                  {cert.relevance}
                </div>
              )}

              {/* Credential link */}
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className={`text-xs ${muted}`}>
            Issued through{' '}
            <span className="text-accent font-semibold">Skillsoft</span>
            {' '}— globally recognized professional learning platform.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
