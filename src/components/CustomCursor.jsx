import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot   = useRef(null)
  const ring  = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let rafId

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot.current) {
        dot.current.style.transform =
          `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring.current) {
        ring.current.style.transform =
          `translate(${ringX - 20}px, ${ringY - 20}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (ring.current) ring.current.style.opacity = '1'
      if (dot.current)  dot.current.style.opacity  = '1'
    }

    const onLeave = () => {
      if (ring.current) ring.current.style.opacity = '0'
      if (dot.current)  dot.current.style.opacity  = '0'
    }

    const onDown = () => {
      if (ring.current) {
        ring.current.style.transform += ' scale(0.75)'
        ring.current.style.borderColor = '#FFD03A'
      }
    }

    const onUp = () => {
      if (ring.current) ring.current.style.borderColor = '#F5C518'
    }

    document.addEventListener('mousemove',  onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mousedown',  onDown)
    document.addEventListener('mouseup',    onUp)

    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mousedown',  onDown)
      document.removeEventListener('mouseup',    onUp)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#F5C518',
          opacity: 0,
          transition: 'opacity 0.3s',
          willChange: 'transform',
        }}
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1.5px solid #F5C518',
          opacity: 0,
          transition: 'opacity 0.3s, border-color 0.2s',
          willChange: 'transform',
        }}
      />
    </>
  )
}
