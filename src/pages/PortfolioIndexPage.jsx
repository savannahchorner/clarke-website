import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { portfolioCompanies } from '../data/portfolioCompanies'

export default function PortfolioIndexPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-richBlack/60 via-richBlack/80 to-richBlack" />
        <div className="absolute inset-0 hero-grid-overlay opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-5">Portfolio</p>
            <h1
              className="font-serif font-300 text-ivory leading-[1.05]"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Companies We've<br />
              <span className="text-gradient-gold italic">Helped Scale.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-richBlack">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-sans text-sm text-silverGray/55 max-w-xl leading-relaxed mb-16">
            Partnering with operators and category builders across consumer, healthcare,
            technology, and growth markets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioCompanies.map((company, i) => (
              <motion.div
                key={company.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/portfolio/${company.slug}`}
                  className="group flex flex-col items-center justify-center gap-5 h-52 px-10
                    bg-warmCharcoal border border-[rgba(181,154,99,0.14)]
                    hover:border-mutedGold hover:-translate-y-1
                    hover:shadow-[0_8px_32px_rgba(181,154,99,0.12)]
                    transition-all duration-300 relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-mutedGold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-14 w-auto max-w-[180px] object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                  />
                  <div className="text-center">
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-silverGray/40 group-hover:text-silverGray/70 transition-colors duration-300">
                      {company.category}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-[rgba(181,154,99,0.1)]">
            <Link to="/" className="btn-secondary text-xs py-2.5 px-6">← Back to Homepage</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
