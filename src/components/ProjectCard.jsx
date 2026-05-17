import { motion } from 'framer-motion'
import { HiCode, HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

export default function ProjectCard({ project, index, dark }) {
  const heading  = dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'
  const muted    = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const divider  = dark ? 'border-[#1E1E3A]' : 'border-[#E2E2F0]'
  const tagBg    = dark
    ? 'bg-[#0F0F1A] border-[#1E1E3A] text-[#94A3B8]'
    : 'bg-[#F0F0FF] border-[#E2E2F0] text-[#64748B]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-200">
          <HiCode size={20} />
        </div>
        {project.featured && (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
            Featured
          </span>
        )}
      </div>

      <div>
        <h3 className={`text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-200 ${heading}`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed ${muted}`}>
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-2.5 py-1 rounded-full text-xs font-medium border ${tagBg}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className={`flex gap-3 pt-3 border-t ${divider}`}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 hover:text-accent ${muted}`}
        >
          <FaGithub size={14} /> Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 hover:text-accent ${muted}`}
        >
          <HiExternalLink size={14} /> Live Demo
        </a>
      </div>
    </motion.div>
  )
}
