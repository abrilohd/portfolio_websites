import { motion } from 'framer-motion'
import profileCutout from '../../../assets/images/profile-cutout.png'

export default function HeroAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="flex justify-center items-center relative w-full order-2 lg:order-none my-8 lg:my-0 select-none overflow-visible"
    >
      {/* Fluid responsive wrapper: larger, bolder scale on desktop and mobile */}
      <div
        className="relative w-full flex justify-center items-center overflow-visible"
        style={{
          maxWidth: 'clamp(320px, 44vw, 520px)',
          margin: '0 auto',
        }}
      >
        <svg
          viewBox="0 -60 500 680"
          className="w-full h-auto overflow-visible"
          role="img"
          aria-label="Abrham G/medhin - Software Engineer | Full Stack, Mobile &amp; AI Product Engineer"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Dark mode circular backdrop gradient */}
            <linearGradient id="hero-circle-dark" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#143A6E" />
              <stop offset="100%" stopColor="#081E3F" />
            </linearGradient>

            {/* Light mode circular backdrop gradient */}
            <linearGradient id="hero-circle-light" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CAD5E2" />
            </linearGradient>

            {/* Ambient soft glow */}
            <radialGradient id="hero-ambient-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1967B2" stopOpacity="0.32" />
              <stop offset="60%" stopColor="#1967B2" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#1967B2" stopOpacity="0" />
            </radialGradient>

            <filter id="hero-glow-blur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="24" />
            </filter>

            {/* Pop-Out Clip Path:
                - Upper region (y=-150 to y=380): wide open rectangle allowing full head, curls & shoulders to extend cleanly above circle with zero clipping
                - Lower region (below y=380): exact circle arc clipping bottom of torso cleanly along circle boundary
            */}
            <clipPath id="hero-popout-clip">
              <rect x="-100" y="-150" width="700" height="530" />
              <circle cx="250" cy="380" r="230" />
            </clipPath>
          </defs>

          {/* 1. Subtle Ambient Back-Glow */}
          <circle
            cx="250"
            cy="380"
            r="245"
            fill="url(#hero-ambient-glow)"
            filter="url(#hero-glow-blur)"
          />

          {/* 2. Dark/Subtle Circular Backdrop */}
          <circle
            cx="250"
            cy="380"
            r="230"
            className="hero-avatar-backdrop transition-colors duration-300"
            stroke="var(--brand-blue)"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />

          {/* 3. Transparent Cutout Portrait with Pop-Out Head and Clipped Torso */}
          <image
            href={profileCutout}
            xlinkHref={profileCutout}
            x="10"
            y="9"
            width="480"
            height="601"
            clipPath="url(#hero-popout-clip)"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div>
    </motion.div>
  )
}
