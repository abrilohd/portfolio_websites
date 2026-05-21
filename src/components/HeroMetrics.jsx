import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const metrics = [
  { value: 10,  suffix: '+', label: 'AI Projects' },
  { value: 3,   suffix: '+', label: 'Years Experience' },
  { value: 5,   suffix: '',  label: 'Certifications' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
]

export default function HeroMetrics() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="flex flex-wrap items-center gap-0"
    >
      {metrics.map((m, i) => (
        <div key={m.label} className="flex items-center">
          <div className="flex flex-col items-start px-4 first:pl-0">
            <span 
              className="font-display leading-none"
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#F5C518'
              }}
            >
              {inView
                ? <CountUp end={m.value} duration={2} suffix={m.suffix} />
                : `0${m.suffix}`
              }
            </span>
            <span 
              className="font-mono uppercase"
              style={{
                fontSize: '10px',
                color: '#7AABEA',
                marginTop: '2px',
                letterSpacing: '0.05em'
              }}
            >
              {m.label}
            </span>
          </div>
          {i < metrics.length - 1 && (
            <div className="w-px h-7 bg-navy-600 mx-1" />
          )}
        </div>
      ))}
    </motion.div>
  )
}
