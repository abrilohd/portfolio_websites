import { motion } from 'framer-motion'
import { identity } from '../data/identity'
import { HiLocationMarker, HiMail, HiCheckCircle, HiClock, HiLightningBolt } from 'react-icons/hi'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden section-light" style={{ padding: '80px 0' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 circuit-bg opacity-[0.02] pointer-events-none" />
      
      <div className="container-width relative z-10">
        {/* Section header - CONSISTENT STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p 
            className="font-mono section-label-text"
            style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '8px'
            }}
          >
            {'// ABOUT'}
          </p>
          <h2 
            className="font-display section-title-text"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '6px'
            }}
          >
            Who I Am
          </h2>
          <p 
            className="font-body section-desc-text"
            style={{
              fontSize: '1rem',
              maxWidth: '560px'
            }}
          >
            AI Engineer building production systems that scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-10 lg:gap-14">
          {/* Left column - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-7"
          >
            {/* What I Do */}
            <div>
              <h3 
                className="font-display about-subsection-title"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  marginBottom: '10px'
                }}
              >
                What I Do
              </h3>
              <p 
                className="font-body about-body-text"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.7'
                }}
              >
                {identity.manifesto}
              </p>
            </div>

            {/* How I Work */}
            <div>
              <h3 
                className="font-display about-subsection-title"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  marginBottom: '10px'
                }}
              >
                How I Work
              </h3>
              <p 
                className="font-body about-body-text"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.7'
                }}
              >
                {identity.philosophy}
              </p>
            </div>

            {/* Current Focus */}
            <div>
              <h3 
                className="font-display about-subsection-title"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  marginBottom: '10px'
                }}
              >
                Current Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {identity.focus.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="font-mono"
                    style={{
                      fontSize: '12px',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      background: 'rgba(245, 197, 24, 0.08)',
                      border: '1px solid rgba(245, 197, 24, 0.25)',
                      color: '#F5C518',
                      fontWeight: 500
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Work Style - NEW */}
            <div className="about-card">
              <h3 
                className="font-display about-subsection-title"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                Work Style
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <HiClock 
                    size={20}
                    className="about-icon"
                    style={{ 
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  />
                  <div>
                    <p 
                      className="font-body about-card-label"
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        marginBottom: '2px'
                      }}
                    >
                      Fast Response
                    </p>
                    <p 
                      className="font-mono about-card-value"
                      style={{
                        fontSize: '11px',
                        lineHeight: '1.5'
                      }}
                    >
                      Usually within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HiLightningBolt 
                    size={20}
                    className="about-icon"
                    style={{ 
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  />
                  <div>
                    <p 
                      className="font-body about-card-label"
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        marginBottom: '2px'
                      }}
                    >
                      Agile Mindset
                    </p>
                    <p 
                      className="font-mono about-card-value"
                      style={{
                        fontSize: '11px',
                        lineHeight: '1.5'
                      }}
                    >
                      Ship fast, iterate often
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Contact & Status */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Contact Card */}
            <div className="about-card">
              <div className="flex items-center gap-2 mb-4">
                <div 
                  style={{
                    width: '3px',
                    height: '18px',
                    background: '#F5C518',
                    borderRadius: '2px'
                  }}
                />
                <h3 
                  className="font-display about-card-title"
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600
                  }}
                >
                  Contact
                </h3>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <HiLocationMarker 
                    className="flex-shrink-0 mt-0.5 about-icon" 
                    size={17}
                  />
                  <div>
                    <p 
                      className="font-body about-card-label"
                      style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        marginBottom: '2px'
                      }}
                    >
                      {identity.location}
                    </p>
                    <p 
                      className="font-mono about-card-muted"
                      style={{
                        fontSize: '10px'
                      }}
                    >
                      {identity.locationNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <HiMail 
                    className="flex-shrink-0 about-icon" 
                    size={17}
                  />
                  <a
                    href={`mailto:${identity.email}`}
                    className="font-body about-card-label hover:opacity-80 transition-opacity"
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      textDecoration: 'none'
                    }}
                  >
                    {identity.email}
                  </a>
                </div>

                {identity.available && (
                  <div 
                    className="flex items-center gap-3 mt-2 pt-3 about-card-divider"
                  >
                    <HiCheckCircle 
                      className="flex-shrink-0" 
                      size={17}
                      style={{ color: '#4ADE80' }}
                    />
                    <p 
                      className="font-body"
                      style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        color: '#4ADE80'
                      }}
                    >
                      {identity.availabilityText}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats - NEW */}
            <div className="about-card">
              <div className="flex items-center gap-2 mb-4">
                <div 
                  style={{
                    width: '3px',
                    height: '18px',
                    background: '#4A7FD4',
                    borderRadius: '2px'
                  }}
                />
                <h3 
                  className="font-display about-card-title"
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600
                  }}
                >
                  Quick Stats
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p 
                    className="font-display"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#F5C518',
                      lineHeight: '1',
                      marginBottom: '4px'
                    }}
                  >
                    10+
                  </p>
                  <p 
                    className="font-mono about-card-muted"
                    style={{
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    AI Projects
                  </p>
                </div>

                <div>
                  <p 
                    className="font-display"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#F5C518',
                      lineHeight: '1',
                      marginBottom: '4px'
                    }}
                  >
                    2+
                  </p>
                  <p 
                    className="font-mono about-card-muted"
                    style={{
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Years Exp
                  </p>
                </div>

                <div>
                  <p 
                    className="font-display"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#F5C518',
                      lineHeight: '1',
                      marginBottom: '4px'
                    }}
                  >
                    5+
                  </p>
                  <p 
                    className="font-mono about-card-muted"
                    style={{
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Certifications
                  </p>
                </div>

                <div>
                  <p 
                    className="font-display"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#F5C518',
                      lineHeight: '1',
                      marginBottom: '4px'
                    }}
                  >
                    100%
                  </p>
                  <p 
                    className="font-mono about-card-muted"
                    style={{
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Remote
                  </p>
                </div>
              </div>
            </div>

            {/* Currently Building */}
            <div className="about-card">
              <div className="flex items-center gap-2 mb-3">
                <div 
                  style={{
                    width: '3px',
                    height: '18px',
                    background: '#1E4D9B',
                    borderRadius: '2px'
                  }}
                />
                <h3 
                  className="font-display about-card-title"
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600
                  }}
                >
                  Currently Building
                </h3>
              </div>
              <p 
                className="font-body about-body-text"
                style={{
                  fontSize: '13px',
                  lineHeight: '1.6'
                }}
              >
                {identity.currentlyBuilding}
              </p>
            </div>

            {/* Currently Learning */}
            <div className="about-card">
              <div className="flex items-center gap-2 mb-3">
                <div 
                  style={{
                    width: '3px',
                    height: '18px',
                    background: '#7AABEA',
                    borderRadius: '2px'
                  }}
                />
                <h3 
                  className="font-display about-card-title"
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600
                  }}
                >
                  Currently Learning
                </h3>
              </div>
              <ul className="flex flex-col gap-2">
                {identity.currentlyLearning.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-2 font-body about-body-text"
                    style={{
                      fontSize: '13px'
                    }}
                  >
                    <div 
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: '#F5C518',
                        flexShrink: 0
                      }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
