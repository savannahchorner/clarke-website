import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import CTASection from '../components/CTASection'
import { teamMembers, operatingPartners } from '../data/team'

function PageHero() {
  return (
    <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/assets/editorial-bg.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-richBlack/50 via-richBlack/80 to-richBlack" />
      <div className="absolute inset-0 hero-grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-5">The Partnership</p>
          <h1
            className="font-serif font-300 text-ivory leading-[1.05]"
            style={{ fontSize: 'clamp(50px, 7vw, 90px)' }}
          >
            Investing Beyond<br />
            <span className="text-gradient-gold italic">Capital.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

function TeamGrid() {
  const primaryRow = teamMembers.slice(0, 5)
  const secondaryRow = teamMembers.slice(5)

  return (
    <section className="py-24 bg-richBlack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionHeading
            label="Our Team"
            title="The Clarke Capital team."
            subtitle="A group of operators, investors, and builders who have built and scaled companies firsthand."
          />
        </div>

        {/* Row 1 — primary leadership: 5 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
          {primaryRow.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>

        {/* Row 2 — support team: 2 members, centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
            {secondaryRow.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function OperatingPartnersGrid() {
  return (
    <section className="py-24 bg-warmCharcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionHeading
            label="Extended Network"
            title="Operating Partners."
            subtitle="Seasoned executives who work directly alongside our portfolio companies to drive operational excellence and growth."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {operatingPartners.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  const credentials = [
    { label: '25+', sublabel: 'Years Combined Operating Experience' },
    { label: '4',   sublabel: 'Former Founders on the Team' },
    { label: '11',  sublabel: 'Former C-Suite Executives' },
    { label: '$2.8B', sublabel: 'Portfolio Value Across All Holdings' },
  ]

  return (
    <section className="py-28 bg-warmCharcoal/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deepForest/12 to-navy/8" />
      <div className="absolute inset-0 hero-grid-overlay opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-5">Operator Experience</p>
            <h2 className="font-serif text-4xl md:text-5xl font-300 text-ivory leading-[1.1] mb-6">
              Investment discipline <br />rooted in operating reality.
            </h2>
            <div className="gold-divider mb-8" />
            <p className="font-sans text-silverGray leading-relaxed mb-6">
              Every partner and principal at Clarke Capital has spent meaningful time as an operator —
              running P&Ls, building teams, closing enterprise contracts, and navigating the full
              lifecycle of a company. We invest with that context.
            </p>
            <p className="font-sans text-silverGray/70 leading-relaxed">
              When we sit across the table from a founder, we're not applying a framework — we're
              drawing on lived experience. That's the Clarke Capital difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {credentials.map(({ label, sublabel }, i) => (
              <motion.div
                key={sublabel}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-base p-8 text-center"
              >
                <p className="font-serif text-4xl font-300 text-gradient-gold mb-3">{label}</p>
                <p className="font-sans text-xs text-silverGray/60 leading-relaxed tracking-wide">{sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const values = [
    {
      title: 'Conviction Over Consensus',
      body: 'We invest when we believe deeply, not when the market agrees. The best companies are built by contrarians with a plan.',
    },
    {
      title: 'Transparency Always',
      body: 'We are direct with founders about where we see risk, where we\'re uncertain, and what we\'re going to do to help. No sugarcoating.',
    },
    {
      title: 'Long-Term Alignment',
      body: 'We structure every investment to align our returns with founder outcomes. Your success is the only metric that matters.',
    },
  ]

  return (
    <section className="py-24 bg-richBlack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeading
            label="How We Work"
            title="Our investment values."
            centered
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map(({ title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-base p-8 group"
            >
              <div className="w-8 h-px bg-mutedGold mb-6 group-hover:w-14 transition-all duration-300" />
              <h3 className="font-serif text-xl font-400 text-ivory mb-3">{title}</h3>
              <p className="font-sans text-sm text-silverGray leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Team() {
  return (
    <PageLayout>
      <PageHero />
      <TeamGrid />
      <OperatingPartnersGrid />
      <ExperienceSection />
      <ValuesSection />
      <CTASection
        label="Join the Conversation"
        title="Ready to build something exceptional together?"
        subtitle="Whether you're a founder, a potential LP, or an operator interested in the Clarke Capital network — we want to hear from you."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="Learn About Us"
        secondaryTo="/about"
      />
    </PageLayout>
  )
}
