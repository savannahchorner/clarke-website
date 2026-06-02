import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0 }
  }
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
  noWrapTitle = false,
  noWrapSubtitle = false,
  compact = false,
  titleSize = null,
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={centered ? 'text-center' : ''}
    >
      {label && (
        <motion.p variants={item} className="section-label mb-5">{label}</motion.p>
      )}
      <motion.h2
        variants={item}
        className={`font-serif font-400 leading-[1.08] mb-5 ${
          light ? 'text-richBlack' : 'text-ivory'
        } ${titleSize || (compact
          ? 'text-2xl md:text-3xl lg:text-4xl'
          : noWrapTitle
            ? 'text-4xl md:text-5xl lg:text-5xl xl:text-6xl lg:whitespace-nowrap'
            : 'text-4xl md:text-5xl lg:text-6xl'
        )}`}
      >
        {title}
      </motion.h2>
      {centered ? (
        <motion.div variants={item} className="flex justify-center mb-6">
          <div className="gold-divider" />
        </motion.div>
      ) : (
        <motion.div variants={item} className="mb-6">
          <div className="gold-divider" />
        </motion.div>
      )}
      {subtitle && (
        <motion.p
          variants={item}
          className={`font-sans text-base md:text-lg leading-[1.85] ${
            noWrapSubtitle ? 'lg:whitespace-nowrap' : 'max-w-2xl'
          } ${light ? 'text-charcoal/70' : 'text-silverGray'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
