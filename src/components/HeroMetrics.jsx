import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../context/ThemeContext'

const metrics = [
  { value: 10,  suffix: '+', label: 'Systems shipped' },
  { value: 3,   suffix: '+', label: 'AI integrations' },
  { value: 5,   suffix: '',  label: 'Cloud deployments' },
  { value: 100, suffix: '%', label: 'Remote ready' },
]

export default function HeroMetrics() {
  const { ref, inView } = useInView({ triggerOnce: true })
  const { dark }        = useTheme()

  const divider = dark ? 'bg-[#1E1E3A]'  : 'bg-[#E2E2F0]'
  const label   = dark ? 'text-[#4A5568]' : 'text-[#94A3B8]'

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
            <span className={`text-lg font-extrabold leading-none gradient-text`}>
              {inView
                ? <CountUp end={m.value} duration={2} suffix={m.suffix} />
                : `0${m.suffix}`
              }
            </span>
            <span className={`text-[11px] mt-0.5 font-medium ${label}`}>
              {m.label}
            </span>
          </div>
          {i < metrics.length - 1 && (
            <div className={`w-px h-7 ${divider} mx-1`} />
          )}
        </div>
      ))}
    </motion.div>
  )
}
