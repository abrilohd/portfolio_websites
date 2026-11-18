import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const statusBadges = {
  'Production':   { bg: 'rgba(29,158,117,0.12)', border: 'rgba(29,158,117,0.3)', color: 'var(--color-success)' },
  'Open Source':  { bg: 'rgba(25,103,178,0.12)', border: 'rgba(25,103,178,0.3)', color: 'var(--brand-blue)' },
  'Hackathon':    { bg: 'rgba(250,194,59,0.12)', border: 'rgba(250,194,59,0.3)', color: 'var(--brand-gold)' },
  'Research':     { bg: 'rgba(124,178,232,0.12)', border: 'rgba(124,178,232,0.3)', color: '#7CB2E8' },
}

export default function ProjectCard({ data, dimmed = false }) {
  const statusStyle = statusBadges[data.status] || statusBadges['Open Source']

  return (
    <div className={`project-card-inner ${dimmed ? 'project-card-dimmed' : ''}`}>
      {/* Card header */}
      <div className="project-card-header">
        <div className="flex items-center justify-between w-full">
          <h3 className="project-card-title">{data.title}</h3>
          {data.status && (
            <span 
              className="project-card-status"
              style={{
                background: statusStyle.bg,
                border: `1px solid ${statusStyle.border}`,
                color: statusStyle.color
              }}
            >
              {data.status}
            </span>
          )}
        </div>
        {data.metric && (
          <div className="project-card-metric">
            <span className="project-metric-icon">{data.metricIcon || '↑'}</span>
            <span className="project-metric-text">{data.metric}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="project-description">{data.description}</p>

      {/* Achievements */}
      {data.achievements && data.achievements.length > 0 && (
        <div className="project-achievements">
          {data.achievements.slice(0, 3).map((achievement, i) => (
            <div key={i} className="project-achievement-item">
              <div className="project-achievement-dot" />
              <span className="project-achievement-text">{achievement}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tech stack tags */}
      <div className="project-tags">
        {data.tags.slice(0, 6).map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="project-actions">
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action-link"
        >
          <FaGithub size={14} />
          <span>Source</span>
        </a>
        {data.live && data.live !== '#' && (
          <a
            href={data.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-link project-action-live"
          >
            <HiExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  )
}
