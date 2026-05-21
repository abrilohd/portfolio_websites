import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import SectionHeader from './SectionHeader'
import {
  HiExternalLink,
} from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const statusBadges = {
  'Production':   { bg: 'bg-success/15 dark:bg-success/15', border: 'border-success/30', text: 'text-success' },
  'Open Source':  { bg: 'bg-navy-600/30 dark:bg-navy-600/30', border: 'border-navy-300/30', text: 'text-navy-300 dark:text-navy-300' },
  'Hackathon':    { bg: 'bg-py-500/10 dark:bg-py-500/10', border: 'border-py-500/30', text: 'text-py-500' },
  'Research':     { bg: 'bg-ai-400/10 dark:bg-ai-400/10', border: 'border-ai-400/30', text: 'text-ai-400' },
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const statusStyle = statusBadges[project.status] || statusBadges['Open Source']

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`${project.featured ? 'card-featured' : 'card'} relative overflow-hidden`}
      style={{
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.2s ease, border-color 0.2s ease',
      }}
    >
      {/* Top row - Status badges */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          {project.status && (
            <span className={`font-mono text-xs px-2.5 py-1 rounded-tag border ${statusStyle.bg} ${statusStyle.border} ${statusStyle.text}`}>
              {project.status}
            </span>
          )}
          {project.featured && (
            <span className="font-mono text-xs px-2.5 py-1 rounded-tag bg-py-500/10 border border-py-500/30 text-py-500">
              ★ Featured
            </span>
          )}
        </div>
        {project.stars && (
          <span className="font-mono text-xs text-navy-300 dark:text-navy-300">
            ⭐ {project.stars}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-bold mb-2 text-navy-900 dark:text-white group-hover:text-py-500 transition-colors duration-200">
        {project.title}
      </h3>

      {/* METRIC LINE - MANDATORY */}
      {project.metric && (
        <div className="metric flex items-center gap-1.5 mb-3">
          <span className="text-py-400">{project.metricIcon || '↑'}</span>
          <span>{project.metric}</span>
        </div>
      )}

      {/* Description */}
      <p className="font-body text-sm text-navy-700 dark:text-navy-100 leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Key achievements */}
      {project.achievements && project.achievements.length > 0 && (
        <div className="flex flex-col gap-2 mb-4">
          {project.achievements.slice(0, 3).map((achievement, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-py-500 mt-1.5 flex-shrink-0" />
              <span className="font-body text-sm text-navy-600 dark:text-navy-200">
                {achievement}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 5).map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-4 border-t border-navy-600/20 dark:border-navy-600/15">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs font-semibold text-navy-600 dark:text-navy-300 hover:text-py-500 transition-colors duration-150"
        >
          <FaGithub size={13} />
          Source
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs font-semibold text-py-500 hover:text-py-400 transition-colors duration-150"
          >
            <HiExternalLink size={13} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const featured    = projects.filter((p) => p.featured)
  const nonFeatured = projects.filter((p) => !p.featured)
  const visible     = showAll ? projects : featured

  return (
    <section id="projects" className="section-padding bg-surface-light dark:bg-navy-800">
      <div className="container-width">
        <SectionHeader
          label="// PROJECTS"
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
              className="btn-outline"
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
