import { motion } from 'framer-motion'

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={centered ? 'text-center' : ''}
    >
      {label && (
        <p className="section-label mb-4">{label}</p>
      )}
      <h2
        className={`font-serif font-400 leading-[1.1] mb-5 ${
          light ? 'text-richBlack' : 'text-ivory'
        } text-4xl md:text-5xl lg:text-6xl`}
      >
        {title}
      </h2>
      {centered && (
        <div className="flex justify-center mb-5">
          <div className="gold-divider" />
        </div>
      )}
      {!centered && <div className="gold-divider mb-5" />}
      {subtitle && (
        <p
          className={`font-sans text-base md:text-lg leading-relaxed max-w-2xl ${
            light ? 'text-charcoal/70' : 'text-silverGray'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
