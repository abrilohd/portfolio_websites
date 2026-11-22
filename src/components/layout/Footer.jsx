import { navLinks } from '../../data/navigation'

export default function Footer() {
  const year = new Date().getFullYear()

  const handleScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[var(--bg-footer)] border-t border-[var(--border-subtle)] transition-colors pb-24 md:pb-0">
      <div className="container-width py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, '#home')}
              className="text-xl font-display font-extrabold tracking-tight text-navy-900 dark:text-white hover:opacity-80 transition-opacity"
            >
              <span>Abrham</span>
              <span className="text-py-500">.</span>
            </a>
            <p className="font-mono text-xs text-navy-500 dark:text-navy-300">
              Software Engineer.  Addis Ababa, Ethiopia
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="font-mono text-xs text-navy-600 dark:text-navy-200 hover:text-py-500 dark:hover:text-py-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to Top / CTA */}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="inline-flex items-center font-display font-bold text-xs px-4 py-2 rounded-btn bg-py-500 hover:bg-py-400 active:bg-py-600 text-brand-navy shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-navy-500 dark:text-navy-400">
          <p>© {year} Abrham Gebremedhin. Built for production.</p>
          <p>Next-Gen Full Stack &amp; AI Engineering</p>
        </div>
      </div>
    </footer>
  )
}
