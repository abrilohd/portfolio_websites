import {
  HiLightningBolt,
  HiServer,
  HiCloud,
  HiDesktopComputer,
  HiChartBar,
} from 'react-icons/hi'
import SkillPill from './SkillPill'

const iconMap = {
  brain:   <HiLightningBolt size={22} />,
  server:  <HiServer size={22} />,
  cloud:   <HiCloud size={22} />,
  monitor: <HiDesktopComputer size={22} />,
  chart:   <HiChartBar size={22} />,
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

export default function SkillCategory({ data, dimmed = false, isActive = false }) {
  return (
    <div className={`skill-card-inner ${dimmed ? 'skill-card-dimmed' : ''}`}>
      {/* Card header */}
      <div className="skill-card-header">
        <span className="skill-card-icon">
          {iconMap[data.icon] ?? <HiLightningBolt size={22} />}
        </span>
        <h3 className="skill-card-title">{data.category}</h3>
        <span className="skill-card-count">{data.items.length}</span>
      </div>

      {/* Skill list */}
      <div className="skill-list">
        {data.items.map((skill) => (
          <SkillPill
            key={skill}
            name={skill}
            level={proficiency[skill] || 70}
          />
        ))}
      </div>
    </div>
  )
}
