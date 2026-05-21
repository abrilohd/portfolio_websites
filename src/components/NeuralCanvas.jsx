import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const NODE_COUNT   = 56
const MAX_DIST     = 155
const SPEED        = 0.28

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

export default function NeuralCanvas() {
  const canvasRef = useRef(null)
  const { dark }  = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx    = canvas.getContext('2d')
    let animId
    let W = canvas.width  = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight

    const onResize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      nodes.forEach((n) => {
        n.x = randomBetween(0, W)
        n.y = randomBetween(0, H)
      })
    }

    window.addEventListener('resize', onResize)

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x:   randomBetween(0, W),
      y:   randomBetween(0, H),
      vx:  randomBetween(-SPEED, SPEED),
      vy:  randomBetween(-SPEED, SPEED),
      r:   randomBetween(1.2, 2.4),
      pulse: randomBetween(0, Math.PI * 2),
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Python yellow nodes with AI blue accents
      const nodeColor = 'rgba(245,197,24,'  // py-500
      const lineColor = 'rgba(74,127,212,'  // navy-300

      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        n.pulse += 0.018

        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1

        const pulseR = n.r + Math.sin(n.pulse) * 0.6

        // Core node
        ctx.beginPath()
        ctx.arc(n.x, n.y, pulseR, 0, Math.PI * 2)
        ctx.fillStyle = nodeColor + '0.6)'
        ctx.fill()

        // Glow ring
        ctx.beginPath()
        ctx.arc(n.x, n.y, pulseR + 2.5, 0, Math.PI * 2)
        ctx.fillStyle = nodeColor + '0.08)'
        ctx.fill()
      })

      // Connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.15
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = lineColor + alpha + ')'
            ctx.lineWidth   = 0.7
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [dark])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: dark ? 0.45 : 0.30 }}
    />
  )
}
