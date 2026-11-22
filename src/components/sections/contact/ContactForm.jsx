import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [feedbackMsg, setFeedbackMsg] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return

    setStatus('sending')
    setFeedbackMsg('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setFeedbackMsg("✓ Message delivered directly to Abrham! I'll get back to you soon.")
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => {
          setStatus('idle')
          setFeedbackMsg('')
        }, 6000)
      } else {
        setStatus('error')
        setFeedbackMsg(data.error || 'Failed to send message. Please try again or email directly at abrsh067@gmail.com')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (err) {
      console.error('Contact submission error:', err)
      setStatus('error')
      setFeedbackMsg('Network error. Please try again or email directly at abrsh067@gmail.com')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white/70 dark:bg-[#0D3164]/70 backdrop-blur-md relative h-full">
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full blur-3xl bg-[#1967B2]/10 dark:bg-[#1967B2]/20 pointer-events-none" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 relative z-10 my-auto">
        {/* Name input */}
        <div>
          <label className="font-mono text-xs text-slate-600 dark:text-slate-300 mb-1.5 block uppercase tracking-wider font-semibold">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Andnet Kebede"
            required
            className="w-full bg-slate-50 dark:bg-[#081830] border border-slate-300/90 dark:border-white/15 text-[#0D3164] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
          />
        </div>

        {/* Email input */}
        <div>
          <label className="font-mono text-xs text-slate-600 dark:text-slate-300 mb-1.5 block uppercase tracking-wider font-semibold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="andnet@example.com"
            required
            className="w-full bg-slate-50 dark:bg-[#081830] border border-slate-300/90 dark:border-white/15 text-[#0D3164] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20"
          />
        </div>

        {/* Message input */}
        <div>
          <label className="font-mono text-xs text-slate-600 dark:text-slate-300 mb-1.5 block uppercase tracking-wider font-semibold">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your product, project, or open role..."
            required
            rows={4}
            className="w-full bg-slate-50 dark:bg-[#081830] border border-slate-300/90 dark:border-white/15 text-[#0D3164] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20 resize-none"
          />
        </div>

        {/* Full-Width Gold Button */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-[#F5C518] hover:bg-yellow-400 active:bg-yellow-500 text-[#0D3164] font-bold rounded-xl py-3.5 transition-all duration-200 shadow-md flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer active:scale-[0.99] mt-1"
        >
          {status === 'idle' && <span>Send Message</span>}
          {status === 'sending' && (
            <>
              <svg className="animate-spin h-4 w-4 text-[#0D3164]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Sending...</span>
            </>
          )}
          {status === 'success' && <span>✓ Message Sent!</span>}
          {status === 'error' && <span>✗ Failed — Try Again</span>}
        </button>

        {/* Feedback Toast Banner */}
        {feedbackMsg && (
          <div
            className={`p-3 rounded-xl text-xs font-mono text-center transition-all duration-200 border ${status === 'success'
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25'
                : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/25'
              }`}
          >
            {feedbackMsg}
          </div>
        )}
      </form>
    </div>
  )
}
