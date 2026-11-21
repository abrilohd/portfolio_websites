import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const LINES = [
  'initializing architecture...',
  'loading production modules...',
  'launching portfolio...',
]

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((i) => (i + 1) % LINES.length)
    }, 250)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      setVisible(false)
    }, 850)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-6 bg-brand-navy dark:bg-brand-navy"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-2xl font-display font-extrabold tracking-tight text-white">
              Abrham<span className="text-py-500">.</span>
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-navy-200">
              Software Engineer
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-40 h-[2px] rounded-full overflow-hidden bg-navy-700">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-py-500 to-py-400"
            />
          </div>

          {/* Status line */}
          <AnimatePresence mode="wait">
            <motion.p
              key={lineIndex}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              transition={{ duration: 0.15 }}
              className="font-mono text-[10px] text-navy-300"
            >
              {`> ${LINES[lineIndex]}`}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

