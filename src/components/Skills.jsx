import { motion } from 'framer-motion'
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

const iconColorMap = {
  brain:   'text-py-500',      // AI & ML - Python yellow
  server:  'text-navy-300',    // Backend - navy
  cloud:   'text-ai-400',      // Cloud - AI blue
  monitor: 'text-navy-200',    // Frontend - lighter navy
  chart:   'text-success',     // Data - success teal
}

const proficiency = {
  'Python':             92,
  'OpenAI API':         85,
  'LangChain':          78,
  'Hugging Face':       70,
  'RAG Systems':        75,
  'Prompt Engineering': 88,
  'FastAPI':            90,
  'Django':             88,
  'Node.js':            75,
  'REST API':           92,
  'PostgreSQL':         82,
  'Redis':              70,
  'Azure':              75,
  'Docker':             80,
  'GitHub Actions':     78,
  'CI/CD Pipelines':    75,
  'Linux':              72,
  'React':              80,
  'TypeScript':         70,
  'Tailwind CSS':       90,
  'Vite':               85,
  'Framer Motion':      78,
  'Pandas':             80,
  'NumPy':              75,
  'SQL':                85,
  'Data Visualization': 82,
  'Jupyter':            78,
  'Matplotlib':         75,
}

function SkillBar({ skill, index }) {
  const level = proficiency[skill] || 70

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="flex flex-col gap-1.5"
    >
      <div className="flex items-center justify-between">
        <span className="font-body text-sm font-medium text-navy-900 dark:text-navy-100">
          {skill}
        </span>
        <span className="font-mono text-xs text-navy-400 dark:text-navy-200">
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden bg-navy-700 dark:bg-navy-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-py-500"
        />
      </div>
    </motion.div>
  )
}

function SkillCard({ group, index }) {
  const iconColor = iconColorMap[group.icon] || 'text-py-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card"
    >
      {/* Card header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl bg-navy-500/10 dark:bg-navy-600/20 ${iconColor} transition-colors duration-200`}>
            {iconMap[group.icon] ?? <HiLightningBolt size={18} />}
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-navy-900 dark:text-white">
              {group.category}
            </h3>
          </div>
        </div>
        <span className="tag-accent">
          {group.items.length}
        </span>
      </div>

      {/* Skill bars */}
      <div className="flex flex-col gap-3">
        {group.items.map((skill, i) => (
          <SkillBar key={skill} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-navy-950 dark:bg-navy-950 relative overflow-hidden">
      {/* Circuit overlay */}
      <div className="absolute inset-0 circuit-bg opacity-5 pointer-events-none" />
      
      <div className="container-width relative z-10">
        <SectionHeader
          label="// SKILLS"
          title="What I Work With"
          description="Technologies and tools I use to build intelligent, scalable systems — from AI pipelines to cloud infrastructure."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
