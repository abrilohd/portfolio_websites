import { motion } from 'framer-motion'

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}) {
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
          <div className="w-6 h-px bg-gradient-to-r from-py-500 to-py-400" />
        )}
        <span className="section-label">
          {label}
        </span>
        {!isCenter && (
          <div className="w-6 h-px bg-gradient-to-r from-py-400 to-transparent" />
        )}
      </div>

      {/* Title */}
      <h2 className="section-heading text-h1">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="section-sub text-sm max-w-lg">
          {description}
        </p>
      )}

      {/* Center decorative line */}
      {isCenter && (
        <div className="flex items-center gap-2 mt-1">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-py-500" />
          <div className="w-2 h-2 rounded-full bg-py-500/40" />
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-py-500" />
        </div>
      )}
    </motion.div>
  )
}
