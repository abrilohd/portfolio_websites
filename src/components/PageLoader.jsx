import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const LINES = [
  'initializing systems...',
  'loading AI context...',
  'preparing portfolio...',
]

export default function PageLoader() {
  const { dark }    = useTheme()
  const [visible,   setVisible]  = useState(true)
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((i) => (i + 1) % LINES.length)
    }, 550)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      setVisible(false)
    }, 1900)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  const bg   = dark ? 'bg-[#0F0F1A]' : 'bg-[#F4F4FF]'
  const sub  = dark ? 'text-[#2D3748]' : 'text-[#CBD5E0]'
  const line = dark ? 'bg-[#1E1E3A]' : 'bg-[#E2E2F0]'

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-8 ${bg}`}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl font-extrabold gradient-text tracking-tight"
            >
              Abrham.
            </motion.p>
            <p className={`text-[10px] font-mono uppercase tracking-[0.25em] ${sub}`}>
              AI Systems Engineer
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className={`w-48 h-px rounded-full overflow-hidden ${line}`}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.7, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-accent to-accent2"
            />
          </div>

          {/* Status line */}
          <AnimatePresence mode="wait">
            <motion.p
              key={lineIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className={`text-[10px] font-mono ${sub}`}
            >
              {`> ${LINES[lineIndex]}`}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
