import { HiExternalLink } from 'react-icons/hi'

const categoryColors = {
  'AI/ML': { bg: 'rgba(250,194,59,0.12)', border: 'rgba(250,194,59,0.3)', color: 'var(--brand-gold)' },
  'Cloud': { bg: 'rgba(25,103,178,0.12)', border: 'rgba(25,103,178,0.3)', color: 'var(--brand-blue)' },
  'Backend': { bg: 'rgba(124,178,232,0.12)', border: 'rgba(124,178,232,0.3)', color: '#7CB2E8' },
  'Data': { bg: 'rgba(29,158,117,0.12)', border: 'rgba(29,158,117,0.3)', color: 'var(--color-success)' },
}

export default function CertificateCard({ data, dimmed = false }) {
  const categoryStyle = categoryColors[data.category] || categoryColors['AI/ML']

  return (
    <div className={`cert-card-inner ${dimmed ? 'cert-card-dimmed' : ''}`}>
      {/* Card header */}
      <div className="cert-card-header">
        <div className="cert-badge-icon">🎓</div>
        <div className="cert-header-content">
          <h3 className="cert-card-title">{data.title}</h3>
          <span 
            className="cert-category-pill"
            style={{
              background: categoryStyle.bg,
              border: `1px solid ${categoryStyle.border}`,
              color: categoryStyle.color
            }}
          >
            {data.category}
          </span>
        </div>
      </div>

      {/* Issuer and date */}
      <div className="cert-meta-row">
        <div className="cert-issuer">
          <span className="cert-check">✓</span>
          <span className="cert-issuer-name">{data.issuer}</span>
        </div>
        <div className="cert-date-badge">{data.year}</div>
      </div>

      {/* Relevance description */}
      <p className="cert-relevance">{data.relevance}</p>

      {/* Date detail */}
      <div className="cert-date-detail">
        <span className="cert-date-label">Issued:</span>
        <span className="cert-date-value">{data.date}</span>
      </div>

      {/* Action */}
      <div className="cert-actions">
        <a
          href={data.credential}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-action-link"
        >
          <HiExternalLink size={14} />
          <span>View Credential</span>
        </a>
      </div>
    </div>
  )
}
