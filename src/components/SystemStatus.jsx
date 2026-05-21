import { motion } from 'framer-motion'

const systems = [
  { label: 'AI Systems',    status: 'operational', color: 'bg-success' },
  { label: 'Backend API',   status: 'active',      color: 'bg-success' },
  { label: 'Cloud Infra',   status: 'deployed',    color: 'bg-ai-400'  },
  { label: 'Open to Work',  status: 'available',   color: 'bg-py-500'  },
]

export default function SystemStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.1 }}
      className="inline-flex flex-wrap gap-x-5 gap-y-2 items-center
        px-4 py-2.5 rounded-xl border border-navy-600/20 backdrop-blur-md
        bg-navy-700/40 text-xs font-mono"
    >
      <span className="font-mono font-semibold tracking-widest uppercase text-[10px] text-navy-400 mr-1">
        sys.status
      </span>
      {systems.map((s, i) => (
        <motion.span
          key={s.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 + i * 0.12 }}
          className="flex items-center gap-1.5 text-navy-200"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${s.color} animate-pulse`}
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          {s.label}
          <span className="text-navy-400 text-[10px]">
            [{s.status}]
          </span>
        </motion.span>
      ))}
    </motion.div>
  )
}
