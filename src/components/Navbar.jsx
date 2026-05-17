import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiSun, HiMoon } from 'react-icons/hi2'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active,   setActive]   = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navBg = scrolled
    ? dark
      ? 'bg-[#0F0F1A]/90 border-b border-[#1E1E3A] shadow-lg backdrop-blur-xl'
      : 'bg-white/90 border-b border-[#E2E2F0] shadow-md backdrop-blur-xl'
    : 'bg-transparent'

  const mobileBg = dark
    ? 'bg-[#0F0F1A]/95 border-t border-[#1E1E3A]'
    : 'bg-white/95 border-t border-[#E2E2F0]'

  const linkBase = dark
    ? 'text-[#94A3B8] hover:text-[#E2E8F0]'
    : 'text-[#64748B] hover:text-[#0F0F1A]'

  const activeStyle = 'text-accent bg-accent/10'

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="container-width flex items-center justify-between h-16">
        <button
          onClick={() => handleClick('#home')}
          className="text-xl font-extrabold gradient-text tracking-tight hover:opacity-80 transition-opacity"
        >
          Abrham.
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === link.href ? activeStyle : linkBase
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-accent/10"
                  transition={{ type: 'spring', duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className={`p-2 rounded-lg transition-all duration-200 ${
              dark
                ? 'text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-white/5'
                : 'text-[#64748B] hover:text-[#0F0F1A] hover:bg-black/5'
            }`}
            aria-label="Toggle theme"
          >
            <motion.div
              key={dark ? 'sun' : 'moon'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </motion.div>
          </button>

          <button
            className={`md:hidden p-2 transition-colors ${
              dark
                ? 'text-[#94A3B8] hover:text-[#E2E8F0]'
                : 'text-[#64748B] hover:text-[#0F0F1A]'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden ${mobileBg}`}
          >
            <nav className="container-width py-3 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === link.href
                      ? activeStyle
                      : linkBase
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
