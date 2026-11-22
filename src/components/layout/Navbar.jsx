import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineHome,
  HiHome,
  HiOutlineUser,
  HiUser,
  HiOutlineCodeBracket,
  HiCodeBracket,
  HiOutlineAcademicCap,
  HiAcademicCap,
  HiOutlineEnvelope,
  HiEnvelope,
} from 'react-icons/hi2'
import { HiSun, HiMoon } from 'react-icons/hi2'
import { useTheme } from '../../context/ThemeContext'
import { navLinks, sectionIds } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'

const DOCK_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    href: '#home',
    icon: <HiOutlineHome size={20} />,
    activeIcon: <HiHome size={20} />,
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
    icon: <HiOutlineUser size={20} />,
    activeIcon: <HiUser size={20} />,
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
    icon: <HiOutlineCodeBracket size={20} />,
    activeIcon: <HiCodeBracket size={20} />,
  },
  {
    id: 'certifications',
    label: 'Certifications',
    href: '#certifications',
    icon: <HiOutlineAcademicCap size={20} />,
    activeIcon: <HiAcademicCap size={20} />,
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    icon: <HiOutlineEnvelope size={20} />,
    activeIcon: <HiEnvelope size={20} />,
  },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(sectionIds, 'home')
  const [currentSection, setCurrentSection] = useState(activeSection)

  useEffect(() => {
    setCurrentSection(activeSection)
  }, [activeSection])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href, id) => {
    e.preventDefault()
    if (id) setCurrentSection(id)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const effectiveActive = currentSection || activeSection

  return (
    <>
      {/* ─── 1. Top Navbar (Desktop & Mobile Header Bar) ───────────────────────── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--bg-nav)] backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-width flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home', 'home')}
            className="text-xl font-display font-extrabold tracking-tight text-navy-900 dark:text-white hover:opacity-85 transition-opacity select-none"
          >
            <span>AG</span>
            <span className="text-py-500">.</span>
          </a>

          {/* Desktop Navigation (Centered text links on >= md) */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = effectiveActive === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative px-3.5 py-1.5 rounded-btn text-sm font-body font-medium transition-colors duration-150 ${
                    isActive
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
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Hire Me CTA (Visible on all viewports, clean and responsive) */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'contact')}
              className="inline-flex items-center justify-center font-display font-bold text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-btn bg-py-500 hover:bg-py-400 active:bg-py-600 text-brand-navy shadow-sm transition-all duration-150 hover:-translate-y-0.5 active:scale-95"
            >
              Hire Me
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggle}
              className="p-1.5 sm:p-2 rounded-btn border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-py-500 hover:border-py-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-py-500 cursor-pointer"
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
          </div>
        </div>
      </motion.header>

      {/* ─── 2. Mobile Floating Bottom Pill Taskbar / Dock (< md) ─────────────── */}
      <div className="md:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none pb-[env(safe-area-inset-bottom)]">
        <nav
          aria-label="Mobile Bottom Navigation"
          className="pointer-events-auto inline-flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full backdrop-blur-xl transition-all duration-300 shadow-[0_8px_30px_rgba(13,49,100,0.12)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.55)] bg-white/90 dark:bg-[#0B1220]/90 border border-[#0D3164]/10 dark:border-white/10 ring-1 ring-black/[0.03] dark:ring-white/[0.05]"
        >
          {DOCK_ITEMS.map((item) => {
            const isActive = effectiveActive === item.id

            return (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                aria-label={item.label}
                title={item.label}
                className={`w-12 h-11 sm:w-13 sm:h-12 rounded-2xl relative flex flex-col items-center justify-center transition-colors cursor-pointer select-none ${
                  isActive
                    ? 'text-[#0D3164] dark:text-white'
                    : 'text-slate-400 hover:text-[#0D3164] dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {/* Active Tab Squircle Pill Highlight */}
                {isActive && (
                  <motion.div
                    layoutId="mobileDockActiveBg"
                    className="absolute inset-0 bg-[#0D3164]/[0.08] dark:bg-white/[0.12] rounded-2xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Navigation Icon */}
                <span className="relative z-10 transition-transform active:scale-90">
                  {isActive ? item.activeIcon : item.icon}
                </span>

                {/* Signature Bottom Accent Gold Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="mobileDockActiveBar"
                    className="w-4 h-[3px] rounded-full bg-[#F5C518] absolute bottom-1.5 z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </nav>
      </div>
    </>
  )
}
