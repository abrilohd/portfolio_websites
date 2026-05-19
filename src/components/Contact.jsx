import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker, HiClock, HiPaperAirplane } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const fadeUp = {
  initial:     { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6 },
}

const contactInfo = [
  { icon: <HiMail size={18} />,           label: 'Email',        value: 'abrsh067@gmail.com',    href: 'mailto:abrsh067@gmail.com' },
  { icon: <HiLocationMarker size={18} />, label: 'Location',     value: 'Addis Ababa, Ethiopia', href: null },
  { icon: <HiClock size={18} />,          label: 'Availability', value: 'Open to opportunities', href: null },
]

export default function Contact() {
  const { dark } = useTheme()
  const [form,    setForm]    = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent,    setSent]    = useState(false)

  const heading    = dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'
  const muted      = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const inputClass = `w-full border rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 ${
    dark
      ? 'bg-[#0F0F1A] border-[#1E1E3A] text-[#E2E8F0] placeholder:text-[#94A3B8]/60'
      : 'bg-white border-[#E2E2F0] text-[#0F0F1A] placeholder:text-[#94A3B8]'
  }`
  const labelClass = `text-xs font-semibold uppercase tracking-wider mb-2 block ${muted}`

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
    <section id="contact" className="section-padding">
      <div className="container-width">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-2 ${heading}`}>
            Let's Work Together
          </h2>
          <p className={`mt-3 max-w-md mx-auto text-sm leading-relaxed ${muted}`}>
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-5">
            <div>
              <h3 className={`text-xl font-bold mb-3 ${heading}`}>Get In Touch</h3>
              <p className={`text-sm leading-relaxed ${muted}`}>
                I'm currently available for freelance projects, full-time positions,
                and open-source collaboration. Feel free to reach out — I typically
                respond within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-xl px-5 py-4 flex items-center gap-4 hover:border-accent/30 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-wider mb-0.5 ${muted}`}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className={`text-sm font-medium hover:text-accent transition-colors ${heading}`}>
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${heading}`}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-xl px-5 py-4 border-green-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <p className={`text-sm font-semibold ${heading}`}>
                  Currently available for hire
                </p>
              </div>
              <p className={`text-xs mt-1 ml-4 ${muted}`}>
                Open to full-time, freelance, and remote roles.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="glass rounded-2xl p-7">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className={labelClass}>Your Name</label>
                  <input
                    type="text" name="name" value={form.name}
                    onChange={handleChange} placeholder="Full Name"
                    required className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handleChange} placeholder="email@example.com"
                    required className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required rows={5} className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending || sent}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5"
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
                      Send Message <HiPaperAirplane size={15} className="rotate-90" />
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
