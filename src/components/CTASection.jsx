import { motion } from 'framer-motion'
import Button from './Button'

export default function CTASection({
  label = 'Ready to Scale',
  title,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-warmCharcoal" />
      <div className="absolute inset-0 bg-gradient-to-br from-deepForest/20 via-transparent to-navy/20" />
      <div className="absolute inset-0 hero-grid-overlay opacity-50" />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-mutedGold/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-6">{label}</p>
          <h2 className="font-serif font-300 text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.1] mb-6">
            {title}
          </h2>
          <div className="flex justify-center mb-8">
            <div className="gold-divider" />
          </div>
          {subtitle && (
            <p className="font-sans text-base md:text-lg text-silverGray leading-relaxed max-w-2xl mx-auto mb-10">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryLabel && (
              <Button to={primaryTo} variant="primary">{primaryLabel}</Button>
            )}
            {secondaryLabel && (
              <Button to={secondaryTo} variant="secondary">{secondaryLabel}</Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
