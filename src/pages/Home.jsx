import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import SectionHeading from '../components/SectionHeading'
import StatCounter from '../components/StatCounter'
import CTASection from '../components/CTASection'
import MissionVideoSection from '../components/MissionVideoSection'
import LightningSection from '../components/LightningSection'
import PortfolioCarousel from '../components/PortfolioCarousel'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/team'

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 32 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay muted loop playsInline
        poster="/assets/sprout-hero.png"
      >
        <source src="/assets/sprout-video.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-richBlack/75 via-warmCharcoal/55 to-richBlack/92" />
      <div className="absolute inset-0 bg-gradient-to-r from-richBlack/50 via-transparent to-richBlack/30" />
      <div className="absolute inset-0 hero-grid-overlay" />

      {/* Ambient glows */}
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-mutedGold/6 blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-deepForest/15 blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col justify-center min-h-screen">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto text-center">
          <motion.div variants={item} className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-mutedGold" />
            <span className="section-label">Growth Capital · Operating Experience</span>
            <div className="w-8 h-px bg-mutedGold" />
          </motion.div>

          <motion.h1
            variants={item}
            className="font-serif font-300 text-ivory leading-[1.02] mb-8"
            style={{ fontSize: 'clamp(52px, 8vw, 104px)' }}
          >
            Operators Investing<br />
            <span className="text-gradient-gold italic">in Operators.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-sans text-lg md:text-xl text-silverGray/85 leading-relaxed max-w-xl mx-auto mb-10"
          >
            We partner with exceptional founders building category-defining
            companies and bring real operating experience to every stage of growth.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-primary">Learn About Us</Link>
            <Link to="/team"  className="btn-secondary">Meet the Team</Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-xs text-silverGray/30 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-mutedGold/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────
const statsFormatted = [
  { value: 47,  suffix: '+',  label: 'Companies Funded'     },
  { value: 6,   suffix: 'B+', label: 'Annual Revenue'       },
  { value: 20,  suffix: '',   label: 'Years Since Founding'  },
]

function StatsBar() {
  return (
    <section className="relative bg-charcoal border-y border-[rgba(181,154,99,0.15)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <StatCounter stats={statsFormatted} />
      </div>
    </section>
  )
}


// ── Operating Advantage ───────────────────────────────────────────────────────
function OperatingAdvantage() {
  const advantages = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Operator DNA',
      body: 'We have built companies from the ground up. Our partners have been in the founder seat and bring that empathy, pattern recognition, and accountability to every relationship.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Growth Capital',
      body: 'We deploy growth-stage capital with conviction. From Series A through pre-IPO, we size positions to lead or co-lead and participate through the full arc of a company\'s growth.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Strategic Network',
      body: 'Decades of relationships across enterprise buyers, talent networks, and co-investors. Our network is a direct resource for the companies we back, not a talking point.',
    },
  ]

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/assets/sprout-row.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-richBlack via-warmCharcoal/95 to-richBlack" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeading
            label="The Clarke Advantage"
            title="Built for Founders Who Are Ready to Grow with Purpose."
            centered
            titleSize="text-2xl md:text-3xl lg:text-[2.5rem] lg:whitespace-nowrap"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map(({ icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="card-base p-8 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded border border-mutedGold/25 text-mutedGold mb-6 group-hover:border-mutedGold group-hover:bg-mutedGold/8 transition-all duration-300">
                {icon}
              </div>
              <h3 className="font-serif text-xl font-400 text-ivory mb-3">{title}</h3>
              <p className="font-sans text-sm text-silverGray leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Impact at Scale ───────────────────────────────────────────────────────────
// ── Portfolio Carousel — see src/components/PortfolioCarousel.jsx ─────────────

// ── Team Preview ──────────────────────────────────────────────────────────────
function TeamPreview() {
  const preview = teamMembers.slice(0, 3)
  return (
    <section className="py-28 bg-warmCharcoal/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <SectionHeading
            label="The Partnership"
            title="Operators. Investors. Builders."
            subtitle="A team that has been in the founder seat and brings that experience to every partnership."
            noWrapSubtitle
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/team" className="btn-secondary whitespace-nowrap">
              Meet the Full Team
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((member, i) => (
            <TeamCard
              key={member.id}
              member={member}
              index={i}
              mono
              size="xlarge"
              photoScale={i === 0 ? 1.5 : 1.1}
              imagePosition="top"
              photoOrigin="center top"
              photoContrast={i === 0 ? 1.15 : 1.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Home Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <StatsBar />
      <MissionVideoSection />
      <LightningSection />
      <OperatingAdvantage />
      <div id="portfolio-companies">
        <PortfolioCarousel />
      </div>
      <TeamPreview />
      <CTASection
        label="Partner With Us"
        title={<>
          <span style={{ display: 'block', textAlign: 'center' }}>We help ambitious companies</span>
          <span className="lg:whitespace-nowrap" style={{ display: 'block', textAlign: 'center' }}>scale with discipline, clarity,</span>
          <span className="lg:whitespace-nowrap" style={{ display: 'block', textAlign: 'center' }}>and conviction.</span>
        </>}
        subtitle="Whether you're a founder raising your next round or an operator looking to deploy capital with purpose, we'd like to hear from you."
        primaryLabel="Connect With Us"
        primaryTo="/contact"
        secondaryLabel="Meet the Team"
        secondaryTo="/team"
      />
    </PageLayout>
  )
}
