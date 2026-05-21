import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const metrics = [
  { value: 10,  suffix: '+', label: 'AI Projects' },
  { value: 5,   suffix: '+', label: 'Certifications' },
  { value: 3,   suffix: '+', label: 'Years Experience' },
]

export default function HeroMetrics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="flex flex-wrap items-center gap-0"
      style={{
        background: 'rgba(30,77,155,0.08)',
        border: '1px solid rgba(74,127,212,0.2)',
        borderRadius: '12px',
        padding: '16px 8px',
        width: 'fit-content'
      }}
    >
      {metrics.map((m, i) => (
        <div key={m.label} className="flex items-center">
          <div className="flex flex-col items-start px-4 first:pl-3">
            <span 
              className="font-display leading-none"
              style={{
                fontSize: '1.875rem',
                fontWeight: 800,
                color: '#F5C518',
                letterSpacing: '-0.01em'
              }}
            >
              {inView ? (
                <CountUp end={m.value} duration={2.2} suffix={m.suffix} />
              ) : (
                `0${m.suffix}`
              )}
            </span>
            <span 
              className="font-mono uppercase"
              style={{
                fontSize: '10px',
                color: '#7AABEA',
                marginTop: '5px',
                letterSpacing: '0.06em',
                fontWeight: 600
              }}
            >
              {m.label}
            </span>
          </div>
          {i < metrics.length - 1 && (
            <div 
              style={{
                width: '1px',
                height: '32px',
                background: 'rgba(74,127,212,0.25)',
                margin: '0 8px'
              }}
            />
          )}
        </div>
      ))}
    </motion.div>
  )
}
