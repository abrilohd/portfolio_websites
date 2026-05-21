const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

const scrollTo = (href) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-navy-600/15">
      <div className="container-width py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="text-xl font-display font-extrabold tracking-tight flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <span className="text-white">Abrham</span>
            <span className="text-py-500">.</span>
          </button>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-mono text-xs text-navy-200 hover:text-py-500 transition-colors duration-150"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-accent text-sm px-4 py-2"
          >
            Hire Me →
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-600/15">
        <div className="container-width py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-navy-300">
            © {year} Abrham G/medhin
          </p>
          <p className="font-mono text-xs text-py-500">
            Built with Python + AI mindset
          </p>
        </div>
      </div>
    </footer>
  )
}
