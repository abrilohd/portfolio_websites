import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiSun, HiMoon } from 'react-icons/hi2'
import { useTheme } from '../../context/ThemeContext'
import { navLinks, sectionIds } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds, 'home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[var(--bg-nav)] backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="container-width flex items-center justify-between h-16">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl font-display font-extrabold tracking-tight text-navy-900 dark:text-white hover:opacity-85 transition-opacity"
        >
          <span>AG</span>
          <span className="text-py-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 rounded-btn text-sm font-body font-medium transition-colors duration-150 ${isActive
                  ? 'text-py-500 dark:text-py-500 font-semibold'
                  : 'text-navy-700 dark:text-navy-100 hover:text-py-500 dark:hover:text-py-500'
                  }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-py-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Hire Me CTA (Desktop) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center justify-center font-display font-bold text-xs px-4 py-2 rounded-btn bg-py-500 hover:bg-py-400 active:bg-py-600 text-brand-navy shadow-sm transition-all duration-150 hover:-translate-y-0.5"
          >
            Hire Me
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggle}
            className="p-2 rounded-btn border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-py-500 hover:border-py-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-py-500"
            aria-label="Toggle dark/light theme"
          >
            <motion.div
              key={dark ? 'sun' : 'moon'}
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {dark ? <HiSun size={17} /> : <HiMoon size={17} />}
            </motion.div>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="md:hidden p-2 rounded-btn text-navy-800 dark:text-navy-100 hover:text-py-500 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[var(--bg-nav)] backdrop-blur-md border-b border-[var(--border-subtle)]"
          >
            <nav className="container-width py-4 flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-btn text-sm font-body font-medium transition-colors ${isActive
                      ? 'text-py-500 bg-py-500/10 font-semibold'
                      : 'text-navy-800 dark:text-navy-100 hover:text-py-500 hover:bg-navy-500/5'
                      }`}
                  >
                    {link.label}
                  </a>
                )
              })}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full inline-flex items-center justify-center font-display font-bold text-xs py-3 rounded-btn bg-py-500 hover:bg-py-400 active:bg-py-600 text-brand-navy shadow-sm transition-colors text-center"
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

