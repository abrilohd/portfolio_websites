import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiCollection, HiLightningBolt, HiAcademicCap } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { identity } from '../data/identity'

const fadeUp = {
  initial:     { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6 },
}

const stats = [
  { icon: <HiCode size={22} />,          end: 10, suffix: '+', label: 'Projects Built' },
  { icon: <HiLightningBolt size={22} />, end: 2,  suffix: '+', label: 'Years Learning' },
  { icon: <HiCollection size={22} />,    end: 15, suffix: '+', label: 'Technologies' },
  { icon: <HiAcademicCap size={22} />,   end: 4,  suffix: '',  label: 'Certifications' },
]

const socials = [
  { icon: <FaGithub size={18} />,   href: 'https://github.com/abrilohd',                               label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/abrham-gebremedhin-962130360/', label: 'LinkedIn' },
  { icon: <FaTwitter size={18} />,  href: 'https://x.com/abrsh067',                                    label: 'Twitter' },
]

const timeline = [
  { year: '2022', event: 'Started engineering — Python, web fundamentals, backend basics' },
  { year: '2023', event: 'Built production Django + PostgreSQL systems. REST API architecture.' },
  { year: '2024', event: 'Azure cloud, Docker, React full-stack. First AI feature integrations.' },
  { year: '2025', event: 'Transitioning fully into AI engineering. LLMs, RAG, agent systems.' },
  { year: '2026', event: 'Building AI-native applications. Targeting international AI roles.' },
]

function StatCard({ stat, index, dark }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass gradient-border rounded-2xl p-5 flex items-center gap-4 hover:border-accent/30 transition-all duration-300 group"
    >
      <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-200 flex-shrink-0">
        {stat.icon}
      </div>
      <div>
        <div className="text-2xl font-extrabold gradient-text">
          {inView
            ? <CountUp end={stat.end} duration={2} suffix={stat.suffix} />
            : `0${stat.suffix}`
          }
        </div>
        <div className={`text-xs font-medium mt-0.5 ${dark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
          {stat.label}
        </div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const { dark } = useTheme()

  const heading  = dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'
  const muted    = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const infoBg   = dark ? 'bg-[#16162A]/80 border-[#1E1E3A]' : 'bg-white border-[#E2E2F0]'

  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-2 ${heading}`}>Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className={`text-xl font-bold mb-4 ${heading}`}>
              AI Systems Engineer based in{' '}
              <span className="gradient-text">Addis Ababa, Ethiopia</span>
            </h3>

            <p className={`leading-relaxed mb-4 text-sm ${muted}`}>
              {identity.manifesto}
            </p>

            <p className={`leading-relaxed mb-8 text-sm ${muted}`}>
              {identity.philosophy}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: 'Role',     value: identity.title },
                { label: 'Location', value: identity.location },
                { label: 'Email',    value: identity.email },
                { label: 'Status',   value: identity.availabilityText },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl px-4 py-3 border ${infoBg}`}
                >
                  <p className={`text-xs uppercase tracking-wider mb-1 ${muted}`}>
                    {item.label}
                  </p>
                  <p className={`text-sm font-semibold ${heading}`}>{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mb-10">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`p-3 rounded-xl border transition-all duration-200 hover:text-accent hover:border-accent/40 hover:bg-accent/5 ${
                    dark
                      ? 'border-[#1E1E3A] text-[#94A3B8]'
                      : 'border-[#E2E2F0] text-[#64748B]'
                  }`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div>
              <h4 className={`text-sm font-bold uppercase tracking-widest mb-5 ${heading}`}>
                Journey
              </h4>
              <div className="relative flex flex-col gap-4 pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent2 to-transparent opacity-30" />
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative pl-5"
                  >
                    <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                    <span className="text-accent text-xs font-bold">{item.year}</span>
                    <p className={`text-sm mt-0.5 leading-snug ${muted}`}>
                      {item.event}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} dark={dark} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="col-span-2 glass rounded-2xl p-5 hover:border-accent/25 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-1 min-h-[40px] rounded-full bg-gradient-to-b from-accent to-accent2 flex-shrink-0" />
                <p className={`text-sm leading-relaxed ${muted}`}>
                  <span className={`font-semibold ${heading}`}>Currently focused</span>
                  {' '}
                  on AI application development, intelligent backend systems,
                  and building production-ready LLM integrations with FastAPI,
                  LangChain, and modern AI tooling.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
