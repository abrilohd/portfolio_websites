import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import { useTheme } from '../context/ThemeContext'
import { HiCode, HiTemplate, HiCloud, HiDatabase } from 'react-icons/hi'
import { HiWrenchScrewdriver } from 'react-icons/hi2'

const categoryIcons = {
  Languages:  <HiCode size={20} />,
  Frameworks: <HiTemplate size={20} />,
  Cloud:      <HiCloud size={20} />,
  Databases:  <HiDatabase size={20} />,
  Tools:      <HiWrenchScrewdriver size={20} />,
}

export default function Skills() {
  const { dark } = useTheme()

  const heading  = dark ? 'text-[#E2E8F0]' : 'text-[#0F0F1A]'
  const muted    = dark ? 'text-[#94A3B8]' : 'text-[#64748B]'
  const badgeBg  = dark
    ? 'bg-[#0F0F1A] border-[#1E1E3A] text-[#94A3B8]'
    : 'bg-[#F0F0FF] border-[#E2E2F0] text-[#64748B]'

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Skills
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-2 ${heading}`}>
            What I Work With
          </h2>
          <p className={`mt-3 max-w-md mx-auto text-sm leading-relaxed ${muted}`}>
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-200">
                  {categoryIcons[group.category] ?? <HiCode size={20} />}
                </div>
                <h3 className={`font-bold ${heading}`}>{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 cursor-default hover:border-accent/40 hover:text-accent ${badgeBg}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
