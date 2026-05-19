import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}) {
  const { dark } = useTheme()

  const heading  = dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'
  const muted    = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-3 mb-14 ${
        isCenter ? 'items-center text-center' : 'items-start'
      }`}
    >
      {/* Label */}
      <div className="flex items-center gap-3">
        {!isCenter && (
          <div className="w-6 h-px bg-gradient-to-r from-accent to-accent2" />
        )}
        <span className="text-accent text-xs font-mono font-semibold tracking-[0.2em] uppercase">
          {label}
        </span>
        {!isCenter && (
          <div className="w-6 h-px bg-gradient-to-r from-accent2 to-transparent" />
        )}
      </div>

      {/* Title */}
      <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${heading}`}>
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className={`text-sm leading-relaxed max-w-lg ${muted}`}>
          {description}
        </p>
      )}

      {/* Center decorative line */}
      {isCenter && (
        <div className="flex items-center gap-2 mt-1">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent" />
          <div className="w-2 h-2 rounded-full bg-accent/40" />
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent" />
        </div>
      )}
    </motion.div>
  )
}
