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
  titleStyle,
}) {
  return (
    <section className="relative py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-warmCharcoal" />
      <div className="absolute inset-0 bg-gradient-to-br from-deepForest/20 via-transparent to-navy/20" />
      <div className="absolute inset-0 hero-grid-overlay opacity-40" />

      {/* Single centered ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] rounded-full bg-mutedGold/[0.05] blur-3xl pointer-events-none" />

      {/* Signature ampersand watermark — architectural brand motif */}
      <div
        className="absolute select-none pointer-events-none font-serif text-mutedGold leading-none overflow-hidden"
        style={{
          opacity: 0.032,
          fontSize: 'clamp(280px, 42vw, 580px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -52%)',
          userSelect: 'none',
          lineHeight: 1,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: 'italic',
          fontWeight: 300,
        }}
        aria-hidden="true"
      >
        {'&'}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-7 text-center">{label}</p>
          <h2 className="font-serif font-300 text-ivory leading-[1.08] mb-7 text-center"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', ...titleStyle }}>
            {title}
          </h2>
          <div className="flex justify-center mb-9">
            <div className="gold-divider" />
          </div>
          {subtitle && (
            <p className="font-sans text-base md:text-lg text-silverGray leading-[1.85] max-w-2xl mx-auto mb-12">
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
