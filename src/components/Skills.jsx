import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { skills } from '../data/skills'
import SectionHeader from './SectionHeader'
import {
  HiLightningBolt,
  HiServer,
  HiCloud,
  HiDesktopComputer,
  HiChartBar,
} from 'react-icons/hi'

const iconMap = {
  brain:   <HiLightningBolt size={18} />,
  server:  <HiServer size={18} />,
  cloud:   <HiCloud size={18} />,
  monitor: <HiDesktopComputer size={18} />,
  chart:   <HiChartBar size={18} />,
}

const proficiency = {
  'Python AI/ML':       92,
  'OpenAI API':         85,
  'LangChain':          62,
  'NLP Pipelines':      75,
  'RAG Systems':        60,
  'Prompt Engineering': 88,
  'FastAPI':            90,
  'Django':             88,
  'Flask':              85,
  'REST APIs':          92,
  'PostgreSQL':         82,
  'Redis':              70,
  'Azure':              75,
  'Docker':             80,
  'GitHub Actions':     78,
  'Vercel':             90,
  'CI/CD Pipelines':    75,
  'Linux':              72,
  'React':              80,
  'TypeScript':         55,
  'Tailwind CSS':       90,
  'Framer Motion':      78,
  'JavaScript':         82,
  'Vite':               85,
  'Pandas':             80,
  'NumPy':              75,
  'Data Visualization': 82,
  'SQL':                85,
  'ETL Pipelines':      70,
  'Chart.js':           78,
}

function SkillBar({ skill, index, dark }) {
  const level = proficiency[skill] || 70
  const muted = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const track = dark ? 'bg-[#1E1E3A]'   : 'bg-[#E2E2F0]'
  const text  = dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="flex flex-col gap-1.5"
    >
      <div className="flex items-center justify-between">
        <span className={`text-xs font-semibold ${text}`}>{skill}</span>
        <span className={`text-[10px] font-mono ${muted}`}>{level}%</span>
      </div>
      <div className={`h-1 rounded-full overflow-hidden ${track}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
        />
      </div>
    </motion.div>
  )
}

function SkillCard({ group, index, dark }) {
  const border  = dark ? 'border-[#1E1E3A]' : 'border-[#E2E2F0]'
  const heading = dark ? 'text-[#E2E8F0]'   : 'text-[#0F0F1A]'
  const muted   = dark ? 'text-[#64748B]'   : 'text-[#94A3B8]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass gradient-border rounded-2xl p-6 flex flex-col gap-5 hover:border-accent/25 transition-all duration-300 group"
    >
      {/* Card header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/18 transition-colors duration-200">
            {iconMap[group.icon] ?? <HiLightningBolt size={18} />}
          </div>
          <div>
            <h3 className={`font-bold text-sm ${heading}`}>{group.category}</h3>
            <p className={`text-[11px] mt-0.5 ${muted}`}>{group.description}</p>
          </div>
        </div>
        <span className={`text-[10px] font-mono px-2 py-1 rounded-lg border ${border} ${muted}`}>
          {group.items.length} skills
        </span>
      </div>

      {/* Skill bars */}
      <div className="flex flex-col gap-3">
        {group.items.map((skill, i) => (
          <SkillBar key={skill} skill={skill} index={i} dark={dark} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { dark } = useTheme()

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <SectionHeader
          label="Skills"
          title="What I Work With"
          description="Technologies and tools I use to build intelligent, scalable systems — from AI pipelines to cloud infrastructure."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  )
}
