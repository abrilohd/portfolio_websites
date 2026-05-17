import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { useTheme } from '../context/ThemeContext'
import ProjectCard from './ProjectCard'

const fadeUp = {
  initial:     { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6 },
}

export default function Projects() {
  const { dark } = useTheme()
  const [showAll, setShowAll] = useState(false)

  const featured    = projects.filter((p) => p.featured)
  const nonFeatured = projects.filter((p) => !p.featured)
  const visible     = showAll ? projects : featured

  const heading = dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'
  const muted   = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const toggleBtn = dark
    ? 'border-[#1E1E3A] text-[#94A3B8] hover:border-accent/50 hover:text-[#E2E8F0] hover:bg-white/5'
    : 'border-[#E2E2F0] text-[#64748B] hover:border-accent/50 hover:text-[#0F0F1A] hover:bg-black/5'

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Projects
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-2 ${heading}`}>
            What I've Built
          </h2>
          <p className={`mt-3 max-w-md mx-auto text-sm leading-relaxed ${muted}`}>
            A selection of projects that showcase my Python backend and full-stack development skills.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {visible.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} dark={dark} />
            ))}
          </AnimatePresence>
        </div>

        {nonFeatured.length > 0 && (
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-6 py-3 rounded-xl border font-semibold text-sm transition-all duration-200 ${toggleBtn}`}
            >
              {showAll ? 'Show Less' : `Show All Projects (${projects.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
