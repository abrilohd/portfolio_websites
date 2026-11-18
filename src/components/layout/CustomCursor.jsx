import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [hasPointer, setHasPointer] = useState(false)

  useEffect(() => {
    // Only mount custom cursor on devices that support hover and fine pointers (desktops/laptops)
    if (!window.matchMedia('(pointer: fine)').matches) return
    setHasPointer(true)

    let mouseX = -100, mouseY = -100
    let ringX = -100, ringY = -100
    let isHovering = false
    let isDown = false
    let rafId

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      if (ring.current) {
        const scale = isDown ? 0.75 : isHovering ? 1.4 : 1.0
        ring.current.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0) scale(${scale})`
      }
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (ring.current) ring.current.style.opacity = '1'
      if (dot.current) dot.current.style.opacity = '1'
    }

    const onLeave = () => {
      if (ring.current) ring.current.style.opacity = '0'
      if (dot.current) dot.current.style.opacity = '0'
    }

    const onMouseDown = () => {
      isDown = true
    }

    const onMouseUp = () => {
      isDown = false
    }

    const onOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, [role="button"]')
      isHovering = !!target
      if (ring.current) {
        ring.current.style.borderColor = isHovering ? '#FAC23B' : 'rgba(250, 194, 59, 0.7)'
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseover', onOver, { passive: true })

    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!hasPointer) return null

  return (
    <>
      <div
        ref={dot}
        className="custom-cursor-dot fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-py-500 opacity-0 transition-opacity duration-300 will-change-transform"
        style={{ width: '8px', height: '8px' }}
      />
      <div
        ref={ring}
        className="custom-cursor-ring fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-py-500/70 opacity-0 transition-opacity duration-300 will-change-transform"
        style={{ width: '40px', height: '40px' }}
      />
    </>
  )
}

