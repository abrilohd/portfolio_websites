import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import CircuitOverlay from './CircuitOverlay'

const fadeUp = {
  initial:     { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6 },
}

const contactInfo = [
  { icon: <HiMail size={20} />,           label: 'Email',        value: 'abrsh067@gmail.com',    href: 'mailto:abrsh067@gmail.com' },
  { icon: <HiLocationMarker size={20} />, label: 'Location',     value: 'Addis Ababa, Ethiopia', href: null },
  { icon: <HiClock size={20} />,          label: 'Availability', value: 'Open to opportunities', href: null },
]

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent,    setSent]    = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1200))
    console.log('Form submitted:', form)
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Circuit pattern overlay */}
      <CircuitOverlay opacity={0.08} />

      <div className="container-width relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="section-label">
            {/* CONTACT */}
          </span>
          <h2 className="font-display text-display text-white mt-2 leading-tight">
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left column */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-5">
            <div>
              <h3 className="font-display text-h2 font-bold mb-3 text-white">
                Get In Touch
              </h3>
              <p className="font-body text-body-lg text-navy-100 leading-relaxed">
                I'm currently available for freelance projects, full-time positions,
                and open-source collaboration. Feel free to reach out — I typically
                respond within 24 hours.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="bg-navy-600/20 border border-navy-600/20 rounded-xl px-5 py-4 flex items-center gap-4 hover:border-py-500/30 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-py-500/10 text-py-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider mb-0.5 text-navy-300">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="font-body text-sm font-medium text-navy-100 hover:text-py-500 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm font-medium text-navy-100">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div className="bg-navy-600/30 border border-py-500/20 rounded-xl px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse flex-shrink-0" />
                <p className="font-display text-base font-bold text-white">
                  Currently available for hire
                </p>
              </div>
              <p className="font-mono text-xs mt-1 ml-4 text-success">
                Open to full-time, freelance, and remote roles.
              </p>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-surface-dark/80 border border-navy-600/15 rounded-card p-7">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="font-mono text-xs text-navy-300 mb-2 block uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-navy-700/80 border border-navy-600/25 text-white placeholder:text-navy-200 rounded-btn px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-py-500 focus:ring-1 focus:ring-py-500/15"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-navy-300 mb-2 block uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                    className="w-full bg-navy-700/80 border border-navy-600/25 text-white placeholder:text-navy-200 rounded-btn px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-py-500 focus:ring-1 focus:ring-py-500/15"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-navy-300 mb-2 block uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="w-full bg-navy-700/80 border border-navy-600/25 text-white placeholder:text-navy-200 rounded-btn px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-py-500 focus:ring-1 focus:ring-py-500/15 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending || sent}
                  className="btn-accent w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sent ? '✓ Message Sent!' : sending ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message →
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
