export default function SkillPill({ name, level }) {
  return (
    <div className="skill-row">
      <div className="skill-row-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ '--skill-width': `${level}%` }}
        />
      </div>
    </div>
  )
}
