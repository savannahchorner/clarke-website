import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import SectionHeading from '../components/SectionHeading'
import StatCounter from '../components/StatCounter'
import CTASection from '../components/CTASection'
import MissionVideoSection from '../components/MissionVideoSection'
import LightningSection from '../components/LightningSection'
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
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-mutedGold" />
            <span className="section-label">Growth Capital · Operating Experience</span>
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
            className="font-sans text-lg md:text-xl text-silverGray/85 leading-relaxed max-w-xl mb-10"
          >
            We partner with exceptional founders building category-defining
            companies — and bring real operating experience to every stage of growth.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
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
  { value: 47,  suffix: '+',  label: 'Companies Funded'  },
  { value: 28,  suffix: 'B+', label: 'Portfolio Value'   },
  { value: 25,  suffix: '+',  label: 'Years Experience'  },
  { value: 18,  suffix: '+',  label: 'Successful Exits'  },
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
      body: 'We have built companies from the ground up. Our partners have been in the founder seat — and bring that empathy, pattern recognition, and accountability to every relationship.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Growth Capital',
      body: 'We deploy growth-stage capital with conviction. From Series A through pre-IPO, we size positions to lead or co-lead — and participate through the full arc of a company\'s growth.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Strategic Network',
      body: 'Decades of relationships across enterprise buyers, talent networks, and co-investors. Our network is a direct resource for the companies we back — not a talking point.',
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
            title="Built for founders who are ready to grow with purpose."
            centered
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
function useCountUp(target, duration, started) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!started) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, started])
  return value
}

function ImpactStat({ prefix = '', value, suffix = '', label, sublabel, delay = 0, formatNum = false, duration = 2400 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useCountUp(value, duration, inView)
  const display = formatNum ? count.toLocaleString() : count

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-center text-center px-6 py-12"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-12 bg-mutedGold/40 group-hover:w-full group-hover:bg-mutedGold/70 transition-all duration-700 ease-out" />
      <div className="font-serif font-300 leading-none mb-6 flex items-start justify-center gap-1"
        style={{ fontSize: 'clamp(60px, 6.5vw, 92px)' }}>
        {prefix && <span className="text-mutedGold font-serif" style={{ fontSize: '0.48em', marginTop: '0.18em' }}>{prefix}</span>}
        <span className="text-ivory tabular-nums">{display}</span>
        {suffix && <span className="text-mutedGold font-serif" style={{ fontSize: '0.48em', marginTop: '0.18em' }}>{suffix}</span>}
      </div>
      <p className="font-sans text-xs tracking-[0.2em] uppercase text-silverGray/80 mb-2 font-500">{label}</p>
      {sublabel && <p className="font-sans text-xs text-silverGray/40 leading-relaxed max-w-[160px]">{sublabel}</p>}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-mutedGold/30 group-hover:w-3/4 transition-all duration-700 ease-out" />
    </motion.div>
  )
}

const impactStats = [
  { prefix: '$', value: 3,     suffix: 'B+', label: 'Raised & Allocated', sublabel: 'Deployed since 2005',              delay: 0,   duration: 2000 },
  { prefix: '$', value: 5,     suffix: 'B+', label: 'Annual Revenue',      sublabel: 'Across portfolio companies',       delay: 0.1, duration: 2200 },
  {              value: 50000, suffix: '+',  label: 'Jobs Created',         sublabel: 'Global workforce impact',          delay: 0.2, duration: 2600, formatNum: true },
  {              value: 5,                   label: 'Continents',           sublabel: 'Worldwide operations',             delay: 0.3, duration: 1800 },
]

function PortfolioImpact() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-warmCharcoal" />
      <div className="absolute inset-0 bg-gradient-to-b from-richBlack/50 via-transparent to-richBlack/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-64 rounded-full bg-mutedGold/5 blur-3xl pointer-events-none" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-mutedGold/30 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-center pt-20 pb-10"
        >
          <p className="section-label mb-5">Our Portfolio Companies</p>
          <h2 className="font-serif font-300 text-ivory leading-tight" style={{ fontSize: 'clamp(34px, 3.5vw, 52px)' }}>
            Impact at Scale
          </h2>
          <div className="flex justify-center mt-5 mb-2"><div className="gold-divider" /></div>
          <p className="font-sans text-sm text-silverGray/50 mt-5 max-w-md mx-auto leading-relaxed">
            Two decades of disciplined investing. Measurable, compounding results.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[rgba(181,154,99,0.12)] pb-4">
          {impactStats.map((s, i) => <ImpactStat key={i} {...s} />)}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-mutedGold/30 to-transparent" />
    </section>
  )
}

// ── Selected Portfolio Companies (manual carousel) ────────────────────────────
const selectedCompanies = [
  { name: 'PetIQ',                   logo: '/assets/logos/pet-iq.jpg',                   logoSize: 'max-h-[106px] max-w-[220px]' },
  { name: 'Contour',                  logo: '/assets/logos/contour.png',                  logoSize: 'max-h-[120px] max-w-[250px]' },
  { name: 'BoardCo',                  logo: '/assets/logos/boardco.png',                  logoSize: 'max-h-[101px] max-w-[210px]' },
  { name: 'Biolexis',                 logo: '/assets/logos/biolexis-therapeutics.png',    logoSize: 'max-h-24    max-w-[200px]'   },
  { name: 'Clearlink',                logo: '/assets/logos/clearlink.png',                logoSize: 'max-h-[101px] max-w-[210px]' },
  { name: 'HireVue',                  logo: '/assets/logos/hirevue.png',                  logoSize: 'max-h-[106px] max-w-[220px]' },
  { name: 'Montigen Pharmaceuticals', logo: '/assets/logos/montigen-pharmaceuticals.png', logoSize: 'max-h-[125px] max-w-[260px]' },
]

function ArrowButton({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
      className={`
        flex items-center justify-center w-10 h-10
        border transition-all duration-200
        ${disabled
          ? 'border-[rgba(181,154,99,0.12)] text-silverGray/20 cursor-default'
          : 'border-[rgba(181,154,99,0.35)] text-mutedGold hover:border-mutedGold hover:bg-mutedGold/10 cursor-pointer'
        }
      `}
    >
      {direction === 'left' ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      )}
    </button>
  )
}

function SelectedPortfolio() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const syncScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    syncScrollState()
    el.addEventListener('scroll', syncScrollState, { passive: true })
    const ro = new ResizeObserver(syncScrollState)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', syncScrollState)
      ro.disconnect()
    }
  }, [])

  const scrollBy = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const gap = 24
    const amount = card ? card.offsetWidth + gap : 400
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className="relative bg-richBlack overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-mutedGold/25 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 rounded-full bg-mutedGold/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Heading + arrow controls row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
          className="mb-12"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="section-label mb-4">Selected Portfolio Companies</p>
              <h2 className="font-serif font-300 text-ivory leading-tight mb-5"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}>
                Selected Portfolio Companies
              </h2>
              <div className="gold-divider" />
            </div>
            <div className="flex gap-3 flex-shrink-0 pb-1">
              <ArrowButton direction="left"  onClick={() => scrollBy(-1)} disabled={!canScrollLeft} />
              <ArrowButton direction="right" onClick={() => scrollBy(1)}  disabled={!canScrollRight} />
            </div>
          </div>
          <p className="font-sans text-sm text-silverGray/55 max-w-xl leading-relaxed mt-6">
            Partnering with operators and category builders across consumer, healthcare,
            technology, and growth markets.
          </p>
        </motion.div>

        {/* Carousel — edge fades + scroll container */}
        <div className="relative">
          {/* Left fade */}
          <div className={`
            absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none
            bg-gradient-to-r from-richBlack to-transparent
            transition-opacity duration-300
            ${canScrollLeft ? 'opacity-100' : 'opacity-0'}
          `} />
          {/* Right fade */}
          <div className={`
            absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none
            bg-gradient-to-l from-richBlack to-transparent
            transition-opacity duration-300
            ${canScrollRight ? 'opacity-100' : 'opacity-0'}
          `} />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {selectedCompanies.map((company) => (
              <div
                key={company.name}
                data-card
                className="
                  flex-shrink-0
                  w-full
                  sm:w-[calc(50%-12px)]
                  lg:w-[calc(33.333%-16px)]
                "
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="
                  group relative flex flex-col items-center justify-center gap-4
                  h-52 px-8 py-8
                  bg-warmCharcoal border border-[rgba(181,154,99,0.14)]
                  transition-all duration-300 ease-out
                  hover:border-mutedGold hover:-translate-y-1
                  hover:shadow-[0_8px_32px_rgba(181,154,99,0.13)]
                ">
                  {/* Gold top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-mutedGold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <img
                    src={company.logo}
                    alt={company.name}
                    className={`
                      ${company.logoSize} w-auto object-contain
                      opacity-65 group-hover:opacity-100
                      grayscale group-hover:grayscale-0
                      transition-all duration-300
                    `}
                    loading="lazy"
                  />

                  <span className="
                    font-sans text-[9px] tracking-[0.18em] uppercase
                    text-silverGray/40 group-hover:text-silverGray/75
                    transition-colors duration-300 text-center leading-tight
                  ">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-mutedGold/25 to-transparent" />
    </section>
  )
}

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
            <TeamCard key={member.id} member={member} index={i} />
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
      <PortfolioImpact />
      <SelectedPortfolio />
      <TeamPreview />
      <CTASection
        label="Partner With Us"
        title="We help ambitious companies scale with discipline, clarity, and conviction."
        subtitle="Whether you're a founder raising your next round or an operator looking to deploy capital with purpose, we'd like to hear from you."
        primaryLabel="Connect With Us"
        primaryTo="/contact"
        secondaryLabel="Meet the Team"
        secondaryTo="/team"
      />
    </PageLayout>
  )
}
