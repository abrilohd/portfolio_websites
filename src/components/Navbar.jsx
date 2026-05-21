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
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b'
          : 'bg-transparent'
      }`}
      style={scrolled ? {
        backdropFilter: 'blur(12px)',
        background: dark ? 'rgba(7,17,42,0.92)' : 'rgba(240,244,255,0.92)',
        borderColor: dark ? 'rgba(74,127,212,0.15)' : 'rgba(74,127,212,0.20)'
      } : {}}
    >
      <div className="container-width flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleClick('#home')}
          className="text-xl font-display font-extrabold tracking-tight hover:opacity-80 transition-opacity"
          style={{ color: dark ? '#FFFFFF' : '#07112A' }}
        >
          <span style={{ color: dark ? '#FFFFFF' : '#07112A' }}>Abrham</span>
          <span className="text-py-500">.</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-150 ${
                active === link.href
                  ? 'text-py-500'
                  : 'text-[#A8C3EC] hover:text-py-500'
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute left-0 right-0 h-[2px] bg-py-500"
                  style={{ bottom: '-4px' }}
                  transition={{ type: 'spring', duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right side: CTA + Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* CTA Button - hidden on mobile */}
          <button
            onClick={() => handleClick('#contact')}
            className="hidden sm:flex items-center gap-2 font-display font-bold text-sm transition-all duration-150"
            style={{
              background: '#F5C518',
              color: '#07112A',
              fontWeight: 700,
              borderRadius: '8px',
              padding: '10px 20px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#FFD03A'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#F5C518'}
          >
            Hire Me →
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            className="p-2 rounded-btn border border-navy-600 transition-all duration-150"
            style={{ color: '#7AABEA' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#F5C518'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#7AABEA'}
            aria-label="Toggle theme"
          >
            <motion.div
              key={dark ? 'sun' : 'moon'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {dark ? <HiSun size={16} /> : <HiMoon size={16} />}
            </motion.div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: '#A8C3EC' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#F5C518'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#A8C3EC'}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden backdrop-blur-md border-t"
            style={{
              background: dark ? 'rgba(7,17,42,0.95)' : 'rgba(240,244,255,0.95)',
              borderColor: dark ? 'rgba(74,127,212,0.15)' : 'rgba(74,127,212,0.20)'
            }}
          >
            <nav className="container-width py-3 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-body font-medium transition-all duration-150 ${
                    active === link.href
                      ? 'text-py-500 bg-py-500/10'
                      : 'hover:text-py-500'
                  }`}
                  style={active !== link.href ? { 
                    color: dark ? '#A8C3EC' : '#163060',
                    backgroundColor: 'transparent'
                  } : {}}
                  onMouseEnter={(e) => {
                    if (active !== link.href) {
                      e.currentTarget.style.backgroundColor = dark ? 'rgba(74,127,212,0.1)' : 'rgba(74,127,212,0.08)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (active !== link.href) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  {link.label}
                </button>
              ))}
              {/* Mobile CTA */}
              <button
                onClick={() => handleClick('#contact')}
                className="mt-2 font-display font-bold text-sm text-center transition-all duration-150"
                style={{
                  background: '#F5C518',
                  color: '#07112A',
                  fontWeight: 700,
                  borderRadius: '8px',
                  padding: '12px 20px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#FFD03A'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#F5C518'}
              >
                Hire Me →
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
