import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import { portfolioCompanies } from '../data/portfolioCompanies'

function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-40">
        <p className="section-label mb-4">Portfolio</p>
        <h1 className="font-serif text-4xl font-300 text-ivory mb-6">Company not found.</h1>
        <Link to="/#our-mission" className="btn-secondary text-xs py-2.5 px-6">← Back to Homepage</Link>
      </div>
    </PageLayout>
  )
}

export default function PortfolioCompanyPage() {
  const { slug } = useParams()
  const company = portfolioCompanies.find(c => c.slug === slug)

  if (!company) return <NotFound />

  const { name, logo, category, description, clarkeRole, growthStory } = company

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-richBlack/60 via-richBlack/80 to-richBlack" />
        <div className="absolute inset-0 hero-grid-overlay opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-deepForest/8 via-transparent to-navy/8" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-xs text-silverGray/50 hover:text-mutedGold tracking-widest uppercase transition-colors duration-200 mb-8"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Portfolio
            </Link>

            <p className="section-label mb-5">{category}</p>

            <div className="flex flex-col sm:flex-row sm:items-end gap-8">
              <div>
                <h1
                  className="font-serif font-300 text-ivory leading-[1.05]"
                  style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
                >
                  {name}
                </h1>
              </div>
              <div className="sm:ml-auto pb-1">
                <img
                  src={logo}
                  alt={name}
                  className="h-12 w-auto max-w-[180px] object-contain opacity-80"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-richBlack">
        <div className="max-w-4xl mx-auto px-6">

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-16"
          >
            <p className="section-label mb-5">Overview</p>
            <div className="gold-divider mb-8" />
            <p className="font-sans text-silverGray leading-[1.85]" style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}>
              {description}
            </p>
          </motion.div>

          {/* Clarke Role */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16 border-l border-mutedGold/30 pl-8"
          >
            <p className="section-label mb-5">Clarke Capital Partners' Role</p>
            <p className="font-sans text-silverGray leading-[1.85]" style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}>
              {clarkeRole}
            </p>
          </motion.div>

          {/* Growth Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-20"
          >
            <p className="section-label mb-5">Growth Story</p>
            <div className="gold-divider mb-8" />
            <p className="font-sans text-silverGray leading-[1.85]" style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}>
              {growthStory}
            </p>
          </motion.div>

          {/* Back */}
          <div className="border-t border-[rgba(181,154,99,0.12)] pt-12 flex flex-col sm:flex-row gap-4">
            <Link to="/" className="btn-secondary text-xs py-2.5 px-6">← Back to Homepage</Link>
            <Link to="/contact" className="btn-primary text-xs py-2.5 px-6">Connect With Us</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
