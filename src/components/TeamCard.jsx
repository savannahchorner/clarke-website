import { motion } from 'framer-motion'

function Initials({ name }) {
  const parts = name.replace(/,.*$/, '').trim().split(' ')
  const initials = parts.length >= 2
    ? parts[0][0] + parts[parts.length - 1][0]
    : parts[0][0]
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-warmCharcoal to-charcoal">
      <span className="font-serif text-4xl font-300 text-mutedGold">{initials}</span>
    </div>
  )
}

export default function TeamCard({ member, index = 0 }) {
  const { name, title, subtitle, bio, image, focus, linkedin } = member

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-base overflow-hidden group"
    >
      {/* Photo */}
      <div className="relative h-64 overflow-hidden bg-charcoal">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Initials name={name} />
        )}
        <div className="absolute inset-0 bg-mutedGold/0 group-hover:bg-mutedGold/8 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-warmCharcoal/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-600 text-ivory mb-1 leading-tight">{name}</h3>
        <p className="font-sans text-xs text-mutedGold tracking-widest uppercase mb-1">{title}</p>
        {subtitle && (
          <p className="font-sans text-xs text-silverGray/55 tracking-wide italic mb-4">{subtitle}</p>
        )}
        {!subtitle && <div className="mb-4" />}

        {bio && (
          <p className="font-sans text-sm text-silverGray/75 leading-relaxed mb-5">{bio}</p>
        )}

        {focus && focus.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {focus.map(area => (
              <span
                key={area}
                className="font-sans text-xs text-silverGray/50 border border-[rgba(181,154,99,0.12)] px-2 py-0.5 rounded"
              >
                {area}
              </span>
            ))}
          </div>
        )}

        {linkedin && linkedin !== '#' && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs text-silverGray/50 hover:text-mutedGold transition-colors duration-200 tracking-widest uppercase"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        )}
      </div>
    </motion.div>
  )
}
