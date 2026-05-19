import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const systems = [
  { label: 'AI Systems',  status: 'operational', color: 'bg-green-400' },
  { label: 'Backend API', status: 'active',       color: 'bg-green-400' },
  { label: 'Cloud Infra', status: 'deployed',     color: 'bg-blue-400'  },
  { label: 'Open to Work', status: 'available',   color: 'bg-violet-400' },
]

export default function SystemStatus() {
  const { dark } = useTheme()

  const bg      = dark
    ? 'bg-[#0F0F1A]/80 border-[#1E1E3A]'
    : 'bg-white/80 border-[#E2E2F0]'
  const text    = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const subtext = dark ? 'text-[#4A5568]' : 'text-[#CBD5E0]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.1 }}
      className={`inline-flex flex-wrap gap-x-5 gap-y-2 items-center
        px-4 py-2.5 rounded-xl border backdrop-blur-md
        text-xs font-mono ${bg}`}
    >
      <span className={`font-semibold tracking-widest uppercase text-[10px] ${subtext} mr-1`}>
        sys.status
      </span>
      {systems.map((s, i) => (
        <motion.span
          key={s.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 + i * 0.12 }}
          className={`flex items-center gap-1.5 ${text}`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${s.color} animate-pulse`}
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          {s.label}
          <span className={`${subtext} text-[10px]`}>
            [{s.status}]
          </span>
        </motion.span>
      ))}
    </motion.div>
  )
}
