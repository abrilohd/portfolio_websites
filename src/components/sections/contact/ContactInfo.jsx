import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker, HiClock, HiExternalLink } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const contactInfo = [
  { icon: <HiMail size={20} />,           label: 'Email',        value: 'abrsh067@gmail.com',    href: 'mailto:abrsh067@gmail.com' },
  { icon: <HiLocationMarker size={20} />, label: 'Location',     value: 'Addis Ababa, Ethiopia', href: null },
  { icon: <HiClock size={20} />,          label: 'Availability', value: 'Open to opportunities', href: null },
]

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    handle: '@abrilohd',
    url: 'https://github.com/abrilohd',
    icon: <FaGithub size={20} />,
    color: 'var(--brand-gold)',
  },
  {
    name: 'LinkedIn',
    handle: 'Abrham Gebremedhin',
    url: 'https://www.linkedin.com/in/abrham-gebremedhin-962130360/',
    icon: <FaLinkedin size={20} />,
    color: 'var(--brand-blue)',
  },
  {
    name: 'Twitter / X',
    handle: '@abrsh067',
    url: 'https://x.com/abrsh067',
    icon: <FaTwitter size={20} />,
    color: 'var(--brand-blue)',
  },
]

export default function ContactInfo({ fadeUp }) {
  return (
    <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-5">
      <div>
        <h3 className="font-display text-h2 font-bold mb-3 text-[var(--text-primary)]">
          Get In Touch
        </h3>
        <p className="font-body text-body-lg text-[var(--text-secondary)] leading-relaxed">
          Have a product to build, an application to scale, or an engineering role to fill?
          Let's discuss how I can bring full stack, mobile, or AI product engineering leadership to your team.
        </p>
      </div>

      {/* Contact info cards */}
      <div className="flex flex-col gap-3">
        {contactInfo.map((item) => (
          <div
            key={item.label}
            className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl px-5 py-4 flex items-center gap-4 hover:border-[var(--border-accent)] transition-all duration-200 shadow-[var(--shadow-sm)]"
          >
            <div className="p-2 rounded-lg bg-py-500/10 text-py-500 shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider mb-0.5 text-[var(--text-muted)]">
                {item.label}
              </p>
              {item.href ? (
                <a href={item.href} className="font-body text-sm font-medium text-[var(--text-primary)] hover:text-py-500 transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="font-body text-sm font-medium text-[var(--text-primary)]">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Availability card */}
      <div className="bg-[var(--bg-card)] border border-[var(--border-accent)] rounded-xl px-5 py-4 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-success)] animate-pulse shrink-0" />
          <p className="font-display text-base font-bold text-[var(--text-primary)]">
            Currently available for hire
          </p>
        </div>
        <p className="font-mono text-xs mt-1 ml-4 text-[var(--color-success)] font-medium">
          Open to full-time  roles, remote teams, and select client contracts.
        </p>
      </div>

      {/* Social links */}
      <div className="mt-2">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3">
          Find me on
        </p>
        <div className="flex flex-col gap-2">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl px-4 py-3 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-200 group"
            >
              <div className="p-2 rounded-lg bg-py-500/10 shrink-0" style={{ color: social.color }}>
                {social.icon}
              </div>
              <div className="flex-1">
                <p className="font-body text-sm font-semibold text-[var(--text-primary)]">
                  {social.name}
                </p>
                <p className="font-mono text-xs text-[var(--text-muted)]">
                  {social.handle}
                </p>
              </div>
              <HiExternalLink size={16} className="text-[var(--text-muted)] group-hover:text-py-500 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
