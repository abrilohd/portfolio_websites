import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      setProgress(total > 0 ? (current / total) * 100 : 0)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[9997] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full transition-none bg-gradient-to-r from-py-500 to-py-400"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 8px rgba(250,194,59,0.5)',
        }}
      />
    </div>
  )
}

