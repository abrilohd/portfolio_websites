import { motion } from 'framer-motion'
import profileCutout from '../../../assets/images/profile-cutout.png'

export default function AboutArchPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 14 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      /* pt-8 on mobile gives the generous clearance between the subtitle and the top of the head.
         overflow-visible lets the head pop cleanly above the arch top-curve. */
      className="relative flex justify-center items-end w-full max-w-[340px] mx-auto select-none bg-transparent pt-8 md:pt-5 overflow-visible"
    >
      {/* ── Arch Backdrop ──
          ~3:4 proportion (w:h), rounded-t-full arch top + rounded-b-2xl smooth bottom corners.
          No box-shadow, no border, no rectangular card — ONLY the arch fill. */}
      <div
        className="w-[260px] sm:w-[300px] lg:w-[340px] h-[320px] sm:h-[360px] lg:h-[410px] rounded-t-full rounded-b-2xl bg-[#0D3164]/[0.06] dark:bg-white/[0.06] relative pointer-events-none shrink-0"
      />

      {/* ── Transparent Cutout Portrait ──
          Sized so the head breaks ~20–25% above the arch top-curve.
          bottom-0 anchors the subject's feet flush with the arch base. */}
      <img
        src={profileCutout}
        alt="Abrham G/medhin — AI Engineer"
        className="absolute bottom-0 w-auto h-[380px] sm:h-[420px] lg:h-[470px] max-w-none object-contain pointer-events-none"
        loading="lazy"
      />
    </motion.div>
  )
}
