import { motion } from 'framer-motion'

export default function SectionHeader({
  label,
  title,
  description,
  align = 'left',
}) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-2 mb-10 ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {/* Eyebrow Label */}
      <div className="flex items-center gap-2.5">
        <span className="font-mono text-xs font-semibold tracking-wider text-py-500 uppercase">
          {label.startsWith('//') ? label : `// ${label}`}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy-900 dark:text-white">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="font-body text-sm sm:text-base text-navy-600 dark:text-navy-100 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}

