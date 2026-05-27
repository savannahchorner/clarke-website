import { motion } from 'framer-motion'

const proofCards = [
  {
    title: 'Pattern Recognition',
    body: 'Decades of operating across industries give us the pattern recognition to identify companies with durable advantages, before the market prices them in.',
  },
  {
    title: 'Operating Discipline',
    body: 'We bring financial rigor, team-building experience, and go-to-market clarity to every portfolio company. Not advice. Accountability.',
  },
  {
    title: 'Repeatable Scale',
    body: 'Lightning does strike twice. Our portfolio companies have collectively raised billions, created tens of thousands of jobs, and built lasting market positions.',
  },
]

export default function LightningSection() {
  return (
    <section
      className="relative overflow-hidden"
    >
      {/* Entry gradient — seamless continuation from lightbulb section */}
      <div className="absolute top-0 left-0 right-0 h-40 z-10 bg-gradient-to-b from-richBlack to-transparent pointer-events-none" />

      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/lightning-mountain.mp4" type="video/mp4" />
      </video>

      {/* Layered cinematic overlays */}
      <div className="absolute inset-0 bg-richBlack/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-richBlack/50 via-warmCharcoal/20 to-richBlack/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-richBlack/40 via-transparent to-richBlack/40" />

      {/* Ambient gold glow — centered */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-mutedGold/4 blur-3xl pointer-events-none" />

      {/* ── Headline block ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-8 tracking-[0.3em]">The Clarke Difference</p>
          <h2
            className="font-serif font-300 text-ivory leading-[1.08] mb-10"
            style={{ fontSize: 'clamp(36px, 5.5vw, 78px)' }}
          >
            The difference between<br />
            <span className="lg:whitespace-nowrap">expertise and luck.</span><br />
            <span className="text-gradient-gold italic">Lightning striking repeatedly.</span>
          </h2>
          <div className="flex justify-center">
            <div className="gold-divider" />
          </div>
        </motion.div>
      </div>

      {/* ── Story + proof panel ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-warmCharcoal/60 border border-[rgba(181,154,99,0.12)] backdrop-blur-sm p-10 md:p-14"
        >
          {/* Editorial paragraph */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="section-label mb-6">Portfolio Story</p>
            <p
              className="font-sans text-silverGray/80 leading-[1.85]"
              style={{ fontSize: 'clamp(14px, 1.1vw, 17px)' }}
            >
              Behind every enduring company is more than a single moment of luck. It is pattern
              recognition, operating discipline, and the ability to help teams execute when the
              opportunity is real. Across our portfolio, Clarke Capital Partners brings experience,
              capital, and conviction to companies ready to scale.
            </p>
          </div>

          {/* Gold divider */}
          <div className="w-full h-px bg-gradient-to-r from-mutedGold/40 via-mutedGold/15 to-transparent mb-12" />

          {/* Proof cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofCards.map(({ title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative border-l border-mutedGold/30 pl-6 hover:border-mutedGold transition-colors duration-300"
              >
                <h4 className="font-serif text-lg font-400 text-ivory mb-3 group-hover:text-gradient-gold transition-colors duration-300">
                  {title}
                </h4>
                <p className="font-sans text-sm text-silverGray/65 leading-relaxed">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Portfolio metrics */}
          <div className="mt-12">

            {/* Stats bar — full-bleed, no card boxes, divider-only style */}
            <div className="-mx-10 md:-mx-14 border-t border-[rgba(181,154,99,0.1)]">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {[
                  { number: '40,000', suffix: '+', label: 'Jobs Created'   },
                  { number: '2B',     suffix: '+', label: 'Capital Raised' },
                  { number: '1B',     suffix: '+', label: 'Debt'           },
                  { number: '5',      suffix: '',  label: 'Continents'     },
                  { number: '6B',     suffix: '+', label: 'Annual Revenue' },
                ].map(({ number, suffix, label }, i, arr) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`text-center px-6 py-8${i < arr.length - 1 ? ' border-r border-[rgba(181,154,99,0.15)]' : ''}`}
                  >
                    <div className="font-serif font-300 leading-none mb-2">
                      <span className="text-gradient-gold" style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}>
                        {number}
                      </span>
                      {suffix && (
                        <span className="text-mutedGold" style={{ fontSize: 'clamp(18px, 2.2vw, 34px)' }}>
                          {suffix}
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-xs tracking-[0.2em] uppercase text-silverGray/70 mt-3">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Company Stories — full-width featured card */}
            <a href="#portfolio-companies" className="block mt-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="border border-mutedGold/25 bg-mutedGold/5 hover:bg-mutedGold/10 hover:border-mutedGold/45 px-8 py-6 group transition-all duration-300 flex items-center justify-between"
              >
                <div>
                  <p className="section-label text-mutedGold mb-1">Company Stories</p>
                  <p className="font-serif text-xl font-300 text-ivory">Companies We've Helped Scale</p>
                </div>
                <svg
                  className="w-6 h-6 text-mutedGold/50 group-hover:text-mutedGold group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-6"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            </a>

          </div>
        </motion.div>
      </div>

      {/* Exit gradient — blends into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-richBlack to-transparent pointer-events-none" />
    </section>
  )
}
