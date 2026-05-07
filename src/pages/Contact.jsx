import { useState } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import SectionHeading from '../components/SectionHeading'

function PageHero() {
  return (
    <section className="relative min-h-[42vh] flex items-end pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-richBlack via-warmCharcoal to-navy/30" />
      <div className="absolute inset-0 hero-grid-overlay opacity-40" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-mutedGold/6 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-5">Connect</p>
          <h1
            className="font-serif font-300 text-ivory leading-[1.05]"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
          >
            Let's build something<br />
            <span className="text-gradient-gold italic">exceptional.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [form, setForm]     = useState({ name: '', email: '', company: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with actual API endpoint
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputCls = `w-full bg-charcoal/60 border border-[rgba(181,154,99,0.2)] text-ivory placeholder:text-silverGray/30
    font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-mutedGold transition-colors duration-200`

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-14 h-14 rounded-full border border-mutedGold/40 flex items-center justify-center mx-auto mb-8">
          <svg className="w-6 h-6 text-mutedGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl font-300 text-ivory mb-4">Message received.</h3>
        <p className="font-sans text-silverGray text-base">
          Thank you for reaching out. A member of our team will be in touch shortly.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="section-label text-[10px] mb-2 block">Full Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="James Clarke"
            className={inputCls}
          />
        </div>
        <div>
          <label className="section-label text-[10px] mb-2 block">Email Address *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="james@company.com"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="section-label text-[10px] mb-2 block">Company</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company Name"
            className={inputCls}
          />
        </div>
        <div>
          <label className="section-label text-[10px] mb-2 block">I Am A</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className={`${inputCls} appearance-none cursor-pointer`}
          >
            <option value="" disabled>Select one...</option>
            <option value="founder">Founder / CEO</option>
            <option value="operator">Operator / Executive</option>
            <option value="investor">Co-Investor / LP</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="section-label text-[10px] mb-2 block">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Tell us about your company, your vision, or how you'd like to connect..."
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`btn-primary w-full justify-center transition-opacity ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
      >
        {loading ? (
          <span className="flex items-center gap-3">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : 'Send Message'}
      </button>
    </form>
  )
}

function ContactInfo() {
  const types = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'Founders',
      body: 'Raising a growth round? We\'d love to understand your vision. Share your deck and a brief note through this form.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Operators',
      body: 'Senior operators interested in portfolio company roles or a relationship with the Clarke Capital network — we actively connect talent with opportunity.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Partners & LPs',
      body: 'Interested in co-investing alongside Clarke Capital or joining as a limited partner? Reach out to discuss our fund strategy and current portfolio.',
    },
  ]

  return (
    <div className="space-y-6">
      {types.map(({ icon, label, body }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-base p-6 flex gap-5"
        >
          <div className="flex-shrink-0 w-10 h-10 border border-mutedGold/25 flex items-center justify-center text-mutedGold">
            {icon}
          </div>
          <div>
            <h4 className="font-serif text-base font-400 text-ivory mb-1.5">{label}</h4>
            <p className="font-sans text-sm text-silverGray/70 leading-relaxed">{body}</p>
          </div>
        </motion.div>
      ))}

      {/* Direct contact */}
      <div className="pt-4 border-t border-[rgba(181,154,99,0.12)]">
        <p className="section-label text-[10px] mb-3">Direct Contact</p>
        <a
          href="mailto:info@clarkecp.com"
          className="font-sans text-base text-mutedGold hover:text-ivory transition-colors duration-200"
        >
          info@clarkecp.com
        </a>
        <p className="font-sans text-xs text-silverGray/40 mt-2">
          We review every inquiry and respond within 48 hours.
        </p>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <PageLayout>
      <PageHero />

      <section className="py-24 bg-richBlack">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <SectionHeading
                label="Get in Touch"
                title="We'd like to hear from you."
                subtitle="Fill out the form and a member of our team will follow up within 48 hours."
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </motion.div>

            {/* Right — info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <SectionHeading
                label="Who We Work With"
                title="Founders, operators, and partners."
              />
              <div className="mt-10">
                <ContactInfo />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
