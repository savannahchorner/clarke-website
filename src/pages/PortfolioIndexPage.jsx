import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { portfolioCompanies } from '../data/portfolioCompanies'

function LogoGrid() {
  return (
    <section className="pt-44 pb-28 bg-richBlack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <SectionHeading
            label="Portfolio"
            title="Our Portfolio Companies."
            subtitle="Partnering with operators and category builders across consumer, healthcare, technology, and growth markets."
            centered
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {portfolioCompanies.map((company, i) => (
            <motion.div
              key={company.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <Link
                to={`/portfolio/${company.slug}`}
                className="group flex flex-col items-center justify-center gap-5 h-52 px-8 relative overflow-hidden
                  bg-warmCharcoal/60 border border-[rgba(181,154,99,0.14)]
                  transition-all duration-400
                  hover:border-[rgba(181,154,99,0.4)]
                  hover:-translate-y-1
                  hover:shadow-[0_0_0_1px_rgba(181,154,99,0.18),0_12px_40px_rgba(0,0,0,0.45)]"
              >
                {/* Top gold rule that grows in on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-mutedGold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Ambient glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(181,154,99,0.055) 0%, transparent 80%)' }} />

                {/* Logo */}
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-auto max-w-[200px] object-contain select-none
                    opacity-55 group-hover:opacity-100
                    transition-all duration-400"
                  style={{
                    height: '64px',
                    transform: `scale(${company.logoScale ?? 1})`,
                  }}
                  draggable="false"
                />

                {/* Category label */}
                <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-silverGray/35 group-hover:text-mutedGold/60 transition-colors duration-400 text-center leading-relaxed">
                  {company.category}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PortfolioIndexPage() {
  return (
    <PageLayout>
      <LogoGrid />
      <CTASection
        label="Work With Us"
        title="Ready to build something exceptional together?"
        subtitle="Whether you're a founder seeking a capital partner or an operator looking to scale, we want to hear from you."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="Meet the Team"
        secondaryTo="/team"
        titleStyle={{ fontSize: 'clamp(29px, 4.2vw, 58px)', whiteSpace: 'nowrap' }}
      />
    </PageLayout>
  )
}
