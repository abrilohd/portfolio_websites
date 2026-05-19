import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

const socials = [
  { icon: <FaGithub size={18} />,   href: 'https://github.com/abrilohd',                               label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/abrham-gebremedhin-962130360/', label: 'LinkedIn' },
  { icon: <FaTwitter size={18} />,  href: 'https://x.com/abrsh067',                                    label: 'Twitter' },
]

const scrollTo = (href) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  const { dark } = useTheme()
  const year    = new Date().getFullYear()

  const divider = dark ? 'border-[#1E1E3A]' : 'border-[#E2E2F0]'
  const muted   = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const hover   = dark ? 'hover:text-[#E2E8F0]' : 'hover:text-[#0F0F1A]'

  return (
    <footer className={`border-t ${divider} mt-10`}>
      <div className="container-width py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <button
            onClick={() => scrollTo('#home')}
            className="text-xl font-bold gradient-text tracking-tight flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            Abrham.
          </button>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm transition-colors duration-200 ${muted} ${hover}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`p-2 rounded-lg transition-all duration-200 hover:text-accent hover:bg-accent/10 ${muted}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={`border-t ${divider}`}>
        <div className="container-width py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className={`text-xs ${muted}`}>
            © {year} Abrham G/medhin — AI Systems Engineer
          </p>
          <p className={`text-xs ${muted}`}>
            Designed & engineered with{' '}
            <span className="text-accent font-medium">intention</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
