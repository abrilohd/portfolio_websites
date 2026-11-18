import { motion } from 'framer-motion'
import CircuitOverlay from '../../common/CircuitOverlay'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

const fadeUp = {
  initial:     { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.6 },
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden section-dark">
      {/* Circuit pattern overlay */}
      <CircuitOverlay opacity={0.08} />

      <div className="container-width relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="section-label font-mono text-xs tracking-widest uppercase mb-2 block">
            {'// CONTACT'}
          </span>
          <h2 className="font-display section-heading text-display mt-2 leading-tight">
            Let's Work Together
          </h2>
          <p className="font-body section-sub text-body-lg mt-3 max-w-xl mx-auto">
            I'm available for freelance projects, full-time positions, and open-source collaboration.
            I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ContactInfo fadeUp={fadeUp} />
          <ContactForm fadeUp={fadeUp} />
        </div>
      </div>
    </section>
  )
}
