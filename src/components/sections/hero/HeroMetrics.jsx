import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const metrics = [
  { value: 10, suffix: '+', label: 'Projects' },
  { value: 5, suffix: '+', label: 'Certifications' },
  { value: 3, suffix: '+', label: 'Happy Clients' },
]

export default function HeroMetrics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-3 sm:inline-flex items-center w-full sm:w-fit max-w-full transition-colors duration-300 border border-[#0D3164]/15 dark:border-white/15"
      style={{
        background: 'var(--tag-bg)',
        borderRadius: '12px',
        padding: '12px 4px',
      }}
    >
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: 0.6 + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-between sm:justify-start"
        >
          <div className="flex flex-col items-center sm:items-start px-2 sm:px-4 first:pl-2 sm:first:pl-3 w-full">
            <span
              className="font-display leading-none tabular-nums"
              style={{
                fontSize: 'clamp(1.3rem, 3.5vw, 1.875rem)',
                fontWeight: 800,
                color: 'var(--brand-gold)',
                letterSpacing: '-0.01em',
              }}
            >
              {inView ? (
                <CountUp
                  start={0}
                  end={m.value}
                  duration={2.0}
                  delay={0.15 + i * 0.1}
                  useEasing={true}
                  suffix={m.suffix}
                />
              ) : (
                `0${m.suffix}`
              )}
            </span>
            <span
              className="font-mono uppercase whitespace-nowrap"
              style={{
                fontSize: 'clamp(8.5px, 2vw, 10px)',
                color: 'var(--text-secondary)',
                marginTop: '5px',
                letterSpacing: '0.05em',
                fontWeight: 600,
              }}
            >
              {m.label}
            </span>
          </div>

          {i < metrics.length - 1 && (
            <div
              aria-hidden="true"
              className="bg-[#0D3164]/15 dark:bg-white/15"
              style={{
                width: '1px',
                height: '28px',
                flexShrink: 0,
                margin: '0 2px',
              }}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}