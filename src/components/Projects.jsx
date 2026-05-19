import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { projects } from '../data/projects'
import SectionHeader from './SectionHeader'
import {
  HiCode,
  HiExternalLink,
  HiLightningBolt,
  HiChip,
  HiCloud,
  HiCube,
} from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const typeIcon = {
  'AI Application':     <HiChip size={13} />,
  'AI-Enhanced Platform': <HiLightningBolt size={13} />,
  'Infrastructure Tool':  <HiCube size={13} />,
  'Cloud Infrastructure': <HiCloud size={13} />,
}

function ProjectCard({ project, index, dark }) {
  const [hovered, setHovered] = useState(false)

  const heading = dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'
  const muted   = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const dimmed  = dark ? 'text-[#4A5568]' : 'text-[#CBD5E0]'
  const divider = dark ? 'border-[#1E1E3A]' : 'border-[#E2E2F0]'
  const tagBg   = dark
    ? 'bg-[#0F0F1A] border-[#1E1E3A] text-[#94A3B8]'
    : 'bg-[#F4F4FF] border-[#E2E2F0] text-[#64748B]'
  const impactBg = dark
    ? 'bg-green-500/8 border-green-500/15 text-green-400'
    : 'bg-green-50 border-green-200 text-green-700'

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass gradient-border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 group relative overflow-hidden"
      style={{
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Hover glow overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.06), transparent 70%)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Top row */}
      <div className="flex items-start justify-between gap-3 relative z-10">
        <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/18 transition-colors duration-200">
          <HiCode size={18} />
        </div>
        <div className="flex items-center gap-2">
          {project.type && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-accent/10 text-accent border border-accent/20">
              {typeIcon[project.type]}
              {project.type}
            </span>
          )}
          {project.featured && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col gap-3">
        <div>
          <h3
            className={`text-base font-bold mb-1 transition-colors duration-200 group-hover:text-accent ${heading}`}
          >
            {project.title}
          </h3>
          <p className={`text-[11px] font-semibold mb-2 ${muted}`}>
            {project.subtitle}
          </p>
          <p className={`text-xs leading-relaxed ${muted}`}>
            {project.description}
          </p>
        </div>

        {/* Impact line */}
        {project.impact && (
          <div className={`flex items-start gap-2 px-3 py-2 rounded-xl border text-[11px] ${impactBg}`}>
            <HiLightningBolt size={12} className="mt-0.5 flex-shrink-0" />
            <span className="leading-snug">{project.impact}</span>
          </div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <p className={`text-[10px] font-mono leading-relaxed ${dimmed}`}>
            {`// ${project.architecture}`}
          </p>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${tagBg}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className={`flex items-center gap-4 pt-3 border-t relative z-10 ${divider}`}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 hover:text-accent ${muted}`}
        >
          <FaGithub size={13} />
          Source
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 hover:text-accent ${muted}`}
        >
          <HiExternalLink size={13} />
          Live Demo
        </a>
        <span className={`ml-auto text-[10px] font-mono ${dimmed}`}>
          {project.id}
        </span>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { dark }    = useTheme()
  const [showAll, setShowAll] = useState(false)

  const featured    = projects.filter((p) => p.featured)
  const nonFeatured = projects.filter((p) => !p.featured)
  const visible     = showAll ? projects : featured

  const toggleBtn = dark
    ? 'border-[#1E1E3A] text-[#94A3B8] hover:border-accent/50 hover:text-[#E2E8F0]'
    : 'border-[#E2E2F0] text-[#64748B] hover:border-accent/50 hover:text-[#0F0F1A]'

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <SectionHeader
          label="Projects"
          title="What I've Built"
          description="Real systems shipped to production — AI-powered applications, backend infrastructure, and cloud tools."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {visible.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                dark={dark}
              />
            ))}
          </AnimatePresence>
        </div>

        {nonFeatured.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-6 py-3 rounded-xl border font-semibold text-sm transition-all duration-200 hover:bg-accent/5 ${toggleBtn}`}
            >
              {showAll
                ? 'Show Featured Only'
                : `View All Projects (${projects.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
