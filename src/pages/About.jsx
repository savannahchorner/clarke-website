import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import Button from '../components/Button'

function PageHero() {
  return (
    <section className="relative min-h-[55vh] flex items-end pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/assets/founder-editorial.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-richBlack/60 via-richBlack/70 to-richBlack" />
      <div className="absolute inset-0 hero-grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-5">About Clarke Capital</p>
          <h1
            className="font-serif font-300 text-ivory leading-[1.05]"
            style={{ fontSize: 'clamp(42px, 6vw, 84px)' }}
          >
            An investment firm built<br />
            <span className="text-gradient-gold italic">by operators.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

function Philosophy() {
  return (
    <section className="py-28 bg-richBlack">
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
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="font-sans text-silverGray leading-relaxed text-base md:text-lg">
              Clarke Capital Partners is a growth-stage venture firm focused on partnering with
              exceptional founders across software, consumer, and healthcare. We lead or co-lead
              rounds from Series A through pre-IPO, and we stay engaged through the full arc of
              a company's growth.
            </p>
            <p className="font-sans text-silverGray/75 leading-relaxed">
              What differentiates us is not our check size — it's our operating experience.
              Our partners have built companies, hired leadership teams, navigated downturns, and
              taken companies public. We bring that hard-won perspective to every board seat.
            </p>
            <div className="border-l-2 border-mutedGold pl-6">
              <p className="font-serif text-xl italic text-ivory/85 leading-relaxed">
                "The best investment we make is the time we spend with founders before and after the term sheet."
              </p>
              <p className="font-sans text-xs text-silverGray/50 mt-3 tracking-widest uppercase">James Clarke, Founder</p>
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
      number: '01',
      title: 'Pattern Recognition',
      body: 'Over two decades of investing and operating across hundreds of companies, we\'ve developed acute pattern recognition for what separates companies that scale from companies that stall.',
    },
    {
      number: '02',
      title: 'Hands-On Partnership',
      body: 'We don\'t just provide capital — we provide bandwidth. From talent strategy to enterprise sales introductions to board governance, we show up as operators and advisors, not just capital allocators.',
    },
    {
      number: '03',
      title: 'Network as Infrastructure',
      body: 'Our relationships across senior enterprise buyers, top-tier executive talent, and co-investors are real infrastructure for our portfolio companies — not a brochure line.',
    },
    {
      number: '04',
      title: 'Long-Term Orientation',
      body: 'We invest for the full lifecycle of a company, not the next financing event. Our interests are aligned with founders who want to build something durable and category-defining.',
    },
  ]

  return (
    <section className="py-28 bg-warmCharcoal/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deepForest/10 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeading
            label="How We Partner"
            title="The operating-first model."
            subtitle="Capital is a commodity. Operating partnership is not."
            centered
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map(({ number, title, body }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-base p-8 group"
            >
              <p className="font-serif text-6xl font-300 text-mutedGold/20 leading-none mb-5 group-hover:text-mutedGold/35 transition-colors duration-300">
                {number}
              </p>
              <h3 className="font-serif text-xl font-400 text-ivory mb-3">{title}</h3>
              <p className="font-sans text-sm text-silverGray leading-relaxed">{body}</p>
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
    <section className="py-28 bg-richBlack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionHeading
            label="Investment Focus"
            title="Where we invest."
            subtitle="We concentrate where our operating experience creates the most value for founders."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {verticals.map(({ name, description, range }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base p-7 flex flex-col"
            >
              <h3 className="font-serif text-lg font-400 text-ivory mb-3 leading-tight">{name}</h3>
              <p className="font-sans text-sm text-silverGray leading-relaxed flex-1 mb-5">{description}</p>
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
    <section className="py-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden min-h-[400px]"
        >
          <img
            src="/assets/clarke-award.png"
            alt="Clarke Capital — Building exceptional companies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-richBlack/60" />
        </motion.div>

        {/* Text */}
        <div className="bg-warmCharcoal flex items-center px-12 py-20">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-lg"
          >
            <p className="section-label mb-6">Track Record</p>
            <h2 className="font-serif text-4xl md:text-5xl font-300 text-ivory leading-[1.1] mb-6">
              Proven at every<br />stage of growth.
            </h2>
            <div className="gold-divider mb-6" />
            <p className="font-sans text-silverGray leading-relaxed mb-8">
              Across 47 investments and over two and a half billion dollars in portfolio value,
              Clarke Capital has backed some of the most compelling growth stories in venture.
              We measure our success by the outcomes of the founders we serve.
            </p>
            <Button to="/contact" variant="primary">Connect With Us</Button>
          </motion.div>
        </div>
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
        title="Growth capital backed by real operating experience."
        subtitle="We're actively looking for founders building category-defining companies across software, consumer, and healthcare."
        primaryLabel="Connect With Us"
        primaryTo="/contact"
        secondaryLabel="Meet the Team"
        secondaryTo="/team"
      />
    </PageLayout>
  )
}
