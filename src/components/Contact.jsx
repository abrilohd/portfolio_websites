import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiMail, HiLocationMarker, HiClock, HiExternalLink } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
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

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    handle: '@abrilohd',
    url: 'https://github.com/abrilohd',
    icon: <FaGithub size={20} />,
    color: '#A8C3EC',
  },
  {
    name: 'LinkedIn',
    handle: 'Abrham Gebremedhin',
    url: 'https://www.linkedin.com/in/abrham-gebremedhin-962130360/',
    icon: <FaLinkedin size={20} />,
    color: '#4A7FD4',
  },
  {
    name: 'Twitter / X',
    handle: '@abrsh067',
    url: 'https://x.com/abrsh067',
    icon: <FaTwitter size={20} />,
    color: '#A8C3EC',
  },
]

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')

    // Check if EmailJS is configured
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'your_service_id_here' ||
        templateId === 'your_template_id_here' ||
        publicKey === 'your_public_key_here') {
      // EmailJS not configured - simulate success for demo
      console.log('EmailJS not configured. Form data:', form)
      await new Promise((r) => setTimeout(r, 1500))
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Circuit pattern overlay */}
      <CircuitOverlay opacity={0.08} />

      <div className="container-width relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="section-label font-mono text-xs text-py-500 tracking-widest uppercase mb-2 block">
            {'// CONTACT'}
          </span>
          <h2 className="font-display text-display text-white mt-2 leading-tight">
            Let's Work Together
          </h2>
          <p className="font-body text-body text-navy-100 leading-relaxed mt-3 max-w-xl mx-auto">
            I'm available for freelance projects, full-time positions, and open-source collaboration.
            I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left column */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-5">
            <div>
              <h3 className="font-display text-h2 font-bold mb-3 text-white">
                Get In Touch
              </h3>
              <p className="font-body text-body-lg text-navy-100 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hi,
                feel free to reach out. I'm always open to discussing new opportunities.
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

            {/* Social links */}
            <div className="mt-2">
              <p className="font-mono text-xs uppercase tracking-wider text-navy-300 mb-3">
                Find me on
              </p>
              <div className="flex flex-col gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-navy-600/20 border border-navy-600/20 rounded-xl px-4 py-3 hover:border-py-500/30 hover:bg-navy-600/30 transition-all duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-py-500/10 flex-shrink-0" style={{ color: social.color }}>
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-sm font-semibold text-white">
                        {social.name}
                      </p>
                      <p className="font-mono text-xs text-navy-300">
                        {social.handle}
                      </p>
                    </div>
                    <HiExternalLink size={16} className="text-navy-300 group-hover:text-py-500 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-surface-dark/80 border border-navy-600/15 rounded-card p-7">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                  disabled={status === 'sending'}
                  className="btn-accent w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'idle' && 'Send Message →'}
                  {status === 'sending' && (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  )}
                  {status === 'success' && '✓ Message Sent!'}
                  {status === 'error' && '✗ Failed — Try Again'}
                </button>

                {status === 'success' && (
                  <p className="text-xs text-center text-success font-mono">
                    Thanks! I'll get back to you within 24 hours.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-xs text-center text-danger font-mono">
                    Something went wrong. Please email me directly at abrsh067@gmail.com
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
