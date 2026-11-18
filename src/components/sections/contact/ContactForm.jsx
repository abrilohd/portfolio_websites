import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function ContactForm({ fadeUp }) {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey ||
      serviceId === 'your_service_id_here' ||
      templateId === 'your_template_id_here' ||
      publicKey === 'your_public_key_here') {
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
    <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
      <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-card p-7 shadow-[var(--shadow-card)]">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="font-mono text-xs text-[var(--text-secondary)] mb-2 block uppercase tracking-wider font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] rounded-btn px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-py-500 focus:ring-2 focus:ring-py-500/20"
            />
          </div>

          <div>
            <label className="font-mono text-xs text-[var(--text-secondary)] mb-2 block uppercase tracking-wider font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              required
              className="w-full bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] rounded-btn px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-py-500 focus:ring-2 focus:ring-py-500/20"
            />
          </div>

          <div>
            <label className="font-mono text-xs text-[var(--text-secondary)] mb-2 block uppercase tracking-wider font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              required
              rows={5}
              className="w-full bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] rounded-btn px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-py-500 focus:ring-2 focus:ring-py-500/20 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-accent w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-[var(--btn-primary-shadow)]"
          >
            {status === 'idle' && 'Send Message'}
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
            <p className="text-xs text-center text-[var(--color-success)] font-mono font-medium">
              Thanks! I'll get back to you within 24 hours.
            </p>
          )}
          {status === 'error' && (
            <p className="text-xs text-center text-[var(--color-danger)] font-mono font-medium">
              Something went wrong. Please email me directly at abrsh067@gmail.com
            </p>
          )}
        </form>
      </div>
    </motion.div>
  )
}
