import { motion } from 'framer-motion'
import { HiBadgeCheck, HiExternalLink, HiAcademicCap } from 'react-icons/hi'
import { certificates } from '../data/certificates'
import SectionHeader from './SectionHeader'

const categoryBorderColor = {
  'AI/ML':    'border-t-py-500',      // Python yellow for AI/ML
  'Cloud':    'border-t-ai-400',      // AI blue for Cloud
  'Backend':  'border-t-navy-300',    // Navy for Backend
  'Data':     'border-t-success',     // Teal for Data
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-navy-950 dark:bg-navy-950">
      <div className="container-width">
        <SectionHeader
          label="// CERTIFICATIONS"
          title="Credentials & Learning"
          description="Professional certifications validating my technical foundation and commitment to continuous engineering growth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => {
            const borderColor = categoryBorderColor[cert.category] || 'border-t-py-500'
            
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`bg-surface-dark border border-navy-600/15 border-t-3 ${borderColor} rounded-card rounded-t-none p-6 flex flex-col gap-4 hover:border-py-500/30 hover:-translate-y-1 transition-all duration-300 group`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-xl bg-py-500/10 text-py-500 group-hover:bg-py-500/18 transition-colors duration-200">
                    <HiAcademicCap size={18} />
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-tag bg-navy-700 border border-navy-600 text-py-400">
                    {cert.year}
                  </span>
                </div>

                {/* Category badge */}
                {cert.category && (
                  <span className="w-fit font-mono text-xs px-2.5 py-1 rounded-tag bg-navy-700 border border-navy-600 text-navy-200">
                    {cert.category}
                  </span>
                )}

                {/* Title + issuer */}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-base mb-2 leading-snug text-white group-hover:text-py-500 transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <HiBadgeCheck size={14} className="text-py-500 flex-shrink-0" />
                    <span className="font-mono text-xs font-bold text-py-500">{cert.issuer}</span>
                  </div>
                  {cert.date && (
                    <p className="font-mono text-xs text-navy-300 mt-1">
                      {cert.date}
                    </p>
                  )}
                </div>

                {/* Credential link */}
                <div className="pt-3 border-t border-navy-600/15">
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs font-semibold text-navy-300 hover:text-py-500 transition-colors duration-150"
                  >
                    <HiExternalLink size={13} />
                    View Credential
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
