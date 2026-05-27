import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'

function PageHero() {
  return (
    <section className="relative min-h-[55vh] flex items-end pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/assets/founder-editorial.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-richBlack/65 via-richBlack/72 to-richBlack" />
      <div className="absolute inset-0 hero-grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-6">About Clarke Capital</p>
          <h1
            className="font-serif font-300 text-ivory leading-[1.05]"
            style={{ fontSize: 'clamp(42px, 6vw, 84px)' }}
          >
            An Investment Firm Built<br />
            <span className="text-gradient-gold italic">by Operators.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

function Philosophy() {
  return (
    <section className="py-32 bg-richBlack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <SectionHeading
            label="Investment Philosophy"
            title="We invest in the company and the founder equally."
            subtitle="The best capital is patient, conviction-based, and backed by people who have navigated the same challenges."
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <p className="font-sans text-silverGray leading-[1.9] text-base md:text-lg text-center max-w-xl mx-auto">
              Clarke Capital Partners is a growth-stage venture firm focused on partnering with
              exceptional founders across software, consumer, and healthcare. We lead or co-lead
              rounds from Series B and beyond through to IPO and exit, and we stay engaged through
              the full arc of a company's growth.
            </p>
            <p className="font-sans text-silverGray/75 leading-[1.85] text-center max-w-xl mx-auto">
              What differentiates us is not our check size. It's our operating experience.
              Our partners have built companies, hired leadership teams, navigated downturns, and
              taken companies public. We bring that hard-won perspective to every board seat.
            </p>
            <div className="border-l border-mutedGold/70 pl-6">
              <p className="font-serif text-xl italic text-ivory/85 leading-[1.7]">
                "The best investment we make is the time we spend with founders before and after the term sheet."
              </p>
              <p className="font-sans text-xs text-silverGray/50 mt-4 tracking-widest uppercase">James Clarke, Founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function OperatingModel() {
  const pillars = [
    {
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="28" cy="28" r="18"/>
          <circle cx="28" cy="28" r="8"/>
          <line x1="28" y1="10" x2="28" y2="2"/>
          <line x1="28" y1="46" x2="28" y2="54"/>
          <line x1="10" y1="28" x2="2" y2="28"/>
          <line x1="46" y1="28" x2="54" y2="28"/>
        </svg>
      ),
      title: 'Pattern Recognition',
      body: 'Over two decades of investing and operating across hundreds of companies, we\'ve developed acute pattern recognition for what separates companies that scale from companies that stall.',
    },
    {
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="20" cy="28" r="14"/>
          <circle cx="36" cy="28" r="14"/>
        </svg>
      ),
      title: 'Hands-On Partnership',
      body: 'We don\'t just provide capital. We provide bandwidth. From talent strategy to enterprise sales introductions to board governance, we show up as operators and advisors, not just capital allocators.',
    },
    {
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="28" cy="28" r="3" fill="currentColor"/>
          <circle cx="10" cy="14" r="2.5"/>
          <circle cx="46" cy="14" r="2.5"/>
          <circle cx="10" cy="42" r="2.5"/>
          <circle cx="46" cy="42" r="2.5"/>
          <line x1="28" y1="28" x2="10" y2="14"/>
          <line x1="28" y1="28" x2="46" y2="14"/>
          <line x1="28" y1="28" x2="10" y2="42"/>
          <line x1="28" y1="28" x2="46" y2="42"/>
          <line x1="10" y1="14" x2="46" y2="14"/>
          <line x1="10" y1="42" x2="46" y2="42"/>
          <line x1="10" y1="14" x2="10" y2="42"/>
          <line x1="46" y1="14" x2="46" y2="42"/>
        </svg>
      ),
      title: 'Network as Infrastructure',
      body: 'Our relationships across senior enterprise buyers, top-tier executive talent, and co-investors are real infrastructure for our portfolio companies, not a brochure line.',
    },
    {
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="8" y1="48" x2="48" y2="48"/>
          <line x1="8" y1="48" x2="8" y2="8"/>
          <polyline points="8,40 18,30 28,33 38,20 48,10"/>
          <circle cx="48" cy="10" r="2.5" fill="currentColor"/>
        </svg>
      ),
      title: 'Long-Term Orientation',
      body: 'We invest for the full lifecycle of a company, not the next financing event. Our interests are aligned with founders who want to build something durable and category-defining.',
    },
  ]

  return (
    <section className="py-36 bg-warmCharcoal/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deepForest/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-mutedGold/[0.04] blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <SectionHeading
            label="How We Partner"
            title="The Operating-First Model"
            subtitle="Capital is a commodity. Operational partnership is not."
            centered
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map(({ icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="card-base p-9 group"
            >
              <div className="text-mutedGold/20 leading-none mb-6 group-hover:text-mutedGold/40 transition-colors duration-300 [&>svg]:w-20 [&>svg]:h-20">
                {icon}
              </div>
              <h3 className="font-serif text-2xl font-400 text-ivory mb-4">{title}</h3>
              <p className="font-sans text-sm text-silverGray leading-[1.85]">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FocusSection() {
  const verticals = [
    {
      name: 'Software & SaaS',
      description: 'Enterprise, vertical SaaS, developer tools, AI-native applications, and cloud infrastructure.',
      range: 'Series A – Pre-IPO',
    },
    {
      name: 'Consumer & DTC',
      description: 'Category-defining consumer brands, digital-first retail, and marketplace businesses with proven unit economics.',
      range: 'Series B – Growth',
    },
    {
      name: 'Healthcare & Life Sciences',
      description: 'Digital health platforms, health system enablement, medical technology, and value-based care solutions.',
      range: 'Series A – Series C',
    },
    {
      name: 'Growth Equity',
      description: 'Profitable or near-profitable businesses seeking institutional capital for expansion, acquisitions, or liquidity.',
      range: 'Growth – Pre-IPO',
    },
  ]

  return (
    <section className="py-32 bg-richBlack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <SectionHeading
            label="Investment Focus"
            title="Where We Invest"
            subtitle="We concentrate where our operating experience creates the most value for founders."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {verticals.map(({ name, description, range }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="card-base p-7 flex flex-col"
            >
              <h3 className="font-serif text-xl md:text-2xl font-400 text-ivory mb-4 leading-tight">{name}</h3>
              <p className="font-sans text-sm text-silverGray leading-[1.85] flex-1 mb-6">{description}</p>
              <div className="border-t border-[rgba(181,154,99,0.1)] pt-4">
                <span className="section-label text-[10px]">{range}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EditorialSection() {
  return (
    <section className="py-24 bg-warmCharcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="section-label mb-7">Track Record</p>
          <h2 className="font-serif text-4xl md:text-5xl font-300 text-ivory leading-[1.08] mb-7">
            Proven at Every Stage of Growth.
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-sans text-silverGray leading-[1.85]">
            Clarke has backed some of the most compelling growth stories in venture.
            We measure our success by the outcomes of the founders we serve.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <PageLayout>
      <PageHero />
      <Philosophy />
      <OperatingModel />
      <FocusSection />
      <EditorialSection />
      <CTASection
        label="Work With Us"
        title="Growth Capital Backed by Real Operating Experience."
        subtitle="We're actively looking for founders building category-defining companies in tech-enabled consumer and healthcare, as well as life science and healthcare."
        primaryLabel="Connect With Us"
        primaryTo="/contact"
        secondaryLabel="Meet the Team"
        secondaryTo="/team"
      />
    </PageLayout>
  )
}
