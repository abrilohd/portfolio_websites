import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { askAbrham, SUGGESTED_QUESTIONS } from '../utils/askAbrham'
import {
  HiSparkles,
  HiPaperAirplane,
  HiX,
  HiRefresh,
} from 'react-icons/hi'

const MAX_HISTORY = 6

export default function AskAbrham() {
  const { dark } = useTheme()

  const [open,      setOpen]      = useState(false)
  const [input,     setInput]     = useState('')
  const [messages,  setMessages]  = useState([])
  const [streaming, setStreaming] = useState(false)
  const [error,     setError]     = useState(null)

  const bottomRef  = useRef(null)
  const inputRef   = useRef(null)

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streaming])

  const bg        = dark ? 'bg-navy-950'     : 'bg-white'
  const surface   = dark ? 'bg-navy-800'     : 'bg-[#F8F8FF]'
  const border    = dark ? 'border-navy-600/15' : 'border-[#E2E2F0]'
  const text      = dark ? 'text-white'      : 'text-[#0F0F1A]'
  const muted     = dark ? 'text-navy-200'   : 'text-[#64748B]'
  const inputBg   = dark ? 'bg-navy-700'     : 'bg-[#F4F4FF]'
  const msgUser   = 'bg-py-500 text-navy-900'
  const msgAI     = dark
    ? 'bg-navy-700 border border-navy-600/20 text-white'
    : 'bg-[#F0F0FF] border border-[#E2E2F0] text-[#0F0F1A]'

  const handleSend = async (question) => {
    const q = (question || input).trim()
    if (!q || streaming) return

    setInput('')
    setError(null)

    setMessages((prev) => [
      ...prev.slice(-(MAX_HISTORY - 1)),
      { role: 'user', content: q },
    ])

    setStreaming(true)
    let aiText = ''

    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: '', streaming: true },
    ])

    await askAbrham(
      q,
      (chunk) => {
        aiText += chunk
        setMessages((prev) => {
          const updated = [...prev]
          const last    = updated[updated.length - 1]
          if (last?.role === 'assistant') {
            updated[updated.length - 1] = {
              ...last,
              content: aiText,
              streaming: true,
            }
          }
          return updated
        })
      },
      () => {
        setStreaming(false)
        setMessages((prev) => {
          const updated = [...prev]
          const last    = updated[updated.length - 1]
          if (last?.role === 'assistant') {
            updated[updated.length - 1] = {
              ...last,
              streaming: false,
            }
          }
          return updated
        })
      },
      (errMsg) => {
        setStreaming(false)
        setError(errMsg)
        setMessages((prev) => prev.filter((m) => !m.streaming))
      }
    )
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleReset = () => {
    setMessages([])
    setError(null)
    setInput('')
  }

  const showSuggestions = messages.length === 0 && !streaming

  return (
    <>
      {/* ── FLOATING TRIGGER BUTTON ── */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1,   y: 0  }}
        transition={{ delay: 2.5, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className={`fixed z-40
          flex items-center gap-2.5
          px-5 py-3.5 rounded-full
          bg-py-500 hover:bg-py-400
          text-navy-900 font-display font-bold text-sm
          shadow-lg hover:shadow-xl
          transition-all duration-200
          border-2 border-py-400
          ${open ? 'hidden' : 'flex'}`}
        style={{ bottom: '32px', right: '32px' }}
        aria-label="Ask Abrham AI"
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiSparkles size={18} />
        </motion.div>
        <span>Ask Abrham</span>
        <span
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-success border-2"
          style={{ borderColor: dark ? '#07112A' : '#FFFFFF' }}
        />
      </motion.button>

      {/* ── WIDGET PANEL ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{ opacity: 0,  y: 20,  scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed bottom-8 right-8 z-50
              w-[380px] max-w-[calc(100vw-2rem)]
              rounded-2xl border shadow-glow-lg
              flex flex-col overflow-hidden
              ${bg} ${border}`}
            style={{ height: '520px' }}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between
                px-4 py-3.5 border-b flex-shrink-0
                ${border}`}
              style={{
                background: dark
                  ? 'linear-gradient(135deg, #0F2147, #163060)'
                  : 'linear-gradient(135deg, #F8F8FF, #F0F0FF)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-xl bg-py-500/15 border border-py-500/25 flex items-center justify-center">
                    <HiSparkles size={15} className="text-py-500" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-success border border-white" />
                </div>
                <div>
                  <p className={`text-sm font-bold ${text}`}>Ask Abrham</p>
                  <p className={`text-[10px] font-mono ${muted}`}>AI · Powered by Claude</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={handleReset}
                    className={`p-1.5 rounded-lg transition-colors ${muted} hover:text-py-500`}
                    aria-label="Reset conversation"
                    title="Reset conversation"
                  >
                    <HiRefresh size={14} />
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className={`p-1.5 rounded-lg transition-colors ${muted} hover:text-py-500`}
                  aria-label="Close"
                >
                  <HiX size={16} />
                </button>
              </div>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
              {/* Welcome state */}
              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-4"
                >
                  <div className={`text-center py-4`}>
                    <div className="w-12 h-12 rounded-2xl bg-py-500/10 border border-py-500/20 flex items-center justify-center mx-auto mb-3">
                      <HiSparkles size={22} className="text-py-500" />
                    </div>
                    <p className={`text-sm font-semibold ${text}`}>Ask me anything</p>
                    <p className={`text-xs mt-1 ${muted}`}>
                      I'll answer as Abrham — honestly and directly.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className={`text-[10px] font-mono uppercase tracking-widest ${muted} opacity-60 px-1`}>
                      suggested
                    </p>
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <motion.button
                        key={q}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        onClick={() => handleSend(q)}
                        className={`text-left text-xs px-3.5 py-2.5 rounded-xl
                          border transition-all duration-200
                          hover:border-py-500/40 hover:text-py-500
                          ${surface} ${border} ${muted}`}
                      >
                        {q}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Conversation messages */}
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed
                      ${
                        msg.role === 'user'
                          ? `${msgUser} rounded-tr-sm`
                          : `${msgAI} rounded-tl-sm`
                      }`}
                  >
                    {msg.content}
                    {msg.streaming && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="inline-block w-0.5 h-3 bg-py-500 ml-0.5 align-middle"
                      />
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Error state */}
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs bg-red-500/10 border border-red-500/20 text-red-400 rounded-tl-sm">
                    {error}
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input area */}
            <div className={`px-3 py-3 border-t flex-shrink-0 ${border}`}>
              <div
                className={`flex items-end gap-2 rounded-xl border px-3 py-2 transition-all duration-200 focus-within:border-py-500/50 ${inputBg} ${border}`}
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about Abrham..."
                  disabled={streaming}
                  rows={1}
                  className={`flex-1 bg-transparent resize-none text-xs leading-relaxed
                    focus:outline-none placeholder:opacity-50
                    disabled:opacity-50 max-h-24 py-0.5
                    ${text}`}
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || streaming}
                  className={`flex-shrink-0 p-1.5 rounded-lg transition-all duration-200
                    ${
                      input.trim() && !streaming
                        ? 'bg-py-500 text-navy-900 hover:bg-py-400'
                        : `${muted} opacity-40 cursor-not-allowed`
                    }`}
                  aria-label="Send message"
                >
                  {streaming ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-3.5 h-3.5 border border-current border-t-transparent rounded-full"
                    />
                  ) : (
                    <HiPaperAirplane size={14} className="rotate-90" />
                  )}
                </button>
              </div>
              <p className={`text-[9px] text-center mt-2 font-mono ${muted} opacity-40`}>
                Powered by Claude · Answers reflect Abrham's real experience
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
