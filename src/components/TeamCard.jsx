import { motion } from 'framer-motion'

const photoHeights = {
  xlarge:  'h-[22rem]',
  large:   'h-72',
  default: 'h-64',
  small:   'h-56',
}

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

const linkedInIcon = (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function TeamCard({
  member,
  index = 0,
  mono = false,
  size = 'default',
  imagePosition = 'top',
  photoScale = 1,
  photoBrightness = 1,
  photoOrigin = 'center center',
  photoContrast = 1.08,
  photoFit = 'cover',
  photoAspect = null,
}) {
  const { name, title, subtitle, bio, image, focus, linkedin } = member
  const heightClass = photoAspect ? '' : (photoHeights[size] ?? photoHeights.default)
  const filterParts = []
  if (mono) filterParts.push(`grayscale(100%) contrast(${photoContrast})`)
  if (photoBrightness !== 1) filterParts.push(`brightness(${photoBrightness})`)
  const photoStyle = {
    objectFit: photoFit,
    objectPosition: imagePosition,
    filter: filterParts.length ? filterParts.join(' ') : undefined,
    transform: photoScale !== 1 ? `scale(${photoScale})` : undefined,
    transformOrigin: photoOrigin,
  }

  return (
    <motion.a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${name} on LinkedIn`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-base overflow-hidden group flex flex-col cursor-pointer transition-shadow duration-500 hover:shadow-[0_0_0_1px_rgba(181,154,99,0.32),0_12px_40px_rgba(0,0,0,0.38)]"
    >
      {/* Photo */}
      <div
        className={`relative ${heightClass} overflow-hidden bg-charcoal`}
        style={photoAspect ? { aspectRatio: photoAspect } : undefined}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            style={photoStyle}
          />
        ) : (
          <Initials name={name} />
        )}
        <div className="absolute inset-0 bg-mutedGold/0 group-hover:bg-mutedGold/10 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-warmCharcoal/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1">
        <h3 className="font-serif text-xl font-600 text-ivory mb-1 leading-tight">{name}</h3>
        <p className="font-sans text-xs text-mutedGold tracking-widest uppercase mb-1">{title}</p>
        {subtitle && (
          <p className="font-sans text-xs text-silverGray/55 tracking-wide italic mb-4">{subtitle}</p>
        )}
        {!subtitle && <div className="mb-4" />}

        {bio && (
          <p className="font-sans text-sm text-silverGray/75 leading-[1.8] mb-5">{bio}</p>
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

      </div>
    </motion.a>
  )
}
