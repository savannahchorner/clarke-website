import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { portfolioCompanies } from '../data/portfolioCompanies'

const DOUBLED = [...portfolioCompanies, ...portfolioCompanies]
const SPEED   = 0.016  // px per ms — imperceptibly slow, ambient drift (~16px/s)
const N       = portfolioCompanies.length

// ── Arrow button ──────────────────────────────────────────────────────────────
function Arrow({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === -1 ? 'Previous' : 'Next'}
      className="
        flex-shrink-0 flex items-center justify-center
        w-10 h-10 rounded
        border border-[rgba(181,154,99,0.35)] text-mutedGold
        hover:border-mutedGold hover:bg-mutedGold/8
        hover:shadow-[0_0_18px_rgba(181,154,99,0.22)]
        transition-all duration-250
      "
    >
      {dir === -1 ? (
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

// ── Main component ────────────────────────────────────────────────────────────
export default function PortfolioCarousel() {
  const wrapperRef   = useRef(null)   // outer overflow:hidden div (wheel target)
  const trackRef     = useRef(null)   // inner flex row (transform target)
  const offsetRef    = useRef(0)      // current px offset into first set
  const halfRef      = useRef(0)      // scrollWidth / 2 (length of one full set)
  const pausedRef    = useRef(false)
  const rafRef       = useRef(null)
  const lastTimeRef  = useRef(null)
  const animRef      = useRef({ active: false, from: 0, delta: 0, start: 0 })
  const [activeIdx, setActiveIdx]   = useState(0)

  // ── Measure half-width after layout ────────────────────────────────────────
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) halfRef.current = trackRef.current.scrollWidth / 2
    }
    const t = setTimeout(measure, 60)
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    return () => { clearTimeout(t); ro.disconnect() }
  }, [])

  // ── rAF scroll loop ─────────────────────────────────────────────────────────
  useEffect(() => {
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const tick = (now) => {
      const half = halfRef.current
      if (half > 0) {
        const anim = animRef.current
        if (anim.active) {
          // Arrow easing animation — smooth ease-out cubic over 700ms
          const elapsed  = now - anim.start
          const progress = Math.min(elapsed / 700, 1)
          const eased    = easeOutCubic(progress)
          offsetRef.current = ((anim.from + anim.delta * eased) % half + half) % half
          if (progress >= 1) anim.active = false
          applyTransform()
          setActiveIdx(Math.floor((offsetRef.current / half) * N) % N)
        } else if (!pausedRef.current) {
          // Linear auto-scroll — perfectly steady, no acceleration
          const delta = lastTimeRef.current !== null ? now - lastTimeRef.current : 0
          offsetRef.current = (offsetRef.current + SPEED * delta) % half
          applyTransform()
          setActiveIdx(Math.floor((offsetRef.current / half) * N) % N)
        }
      }
      lastTimeRef.current = now
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  // ── Wheel / trackpad manual scroll ─────────────────────────────────────────
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const onWheel = (e) => {
      e.preventDefault()
      const half = halfRef.current
      if (!half) return
      const delta = (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) * 0.35
      offsetRef.current = ((offsetRef.current + delta) % half + half) % half
      applyTransform()
      setActiveIdx(Math.floor((offsetRef.current / half) * N) % N)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const applyTransform = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`
    }
  }

  const step = (dir) => {
    const half = halfRef.current
    if (!half) return
    const itemW = half / N
    animRef.current = {
      active: true,
      from:   offsetRef.current,
      delta:  dir * itemW,
      start:  performance.now(),
    }
  }

  return (
    <section className="relative bg-richBlack overflow-hidden py-28">

      {/* ── Radial gold glow behind carousel ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -35%)',
          width: '1000px', height: '520px',
          background: 'radial-gradient(ellipse at center, rgba(181,154,99,0.13) 0%, rgba(181,154,99,0.04) 45%, transparent 70%)',
          filter: 'blur(2px)',
        }}
      />

      {/* ── Heading ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-5">Selected Portfolio Companies</p>
          <h2
            className="font-serif font-300 text-ivory leading-[1.08] mb-6 text-4xl md:text-5xl lg:text-6xl"
          >
            Companies We've Helped Scale
          </h2>
          <div className="flex justify-center mb-6">
            <div className="gold-divider" />
          </div>
          <p className="font-sans text-base md:text-lg text-silverGray leading-[1.85] max-w-2xl mx-auto">
            Partnering with operators and category builders across consumer, healthcare,
            technology, and growth markets.
          </p>
        </motion.div>

        {/* ── Carousel row: arrow · tray · arrow ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center gap-4 mb-8"
        >
          <Arrow dir={-1} onClick={() => step(-1)} />

          {/* Tray */}
          <div
            ref={wrapperRef}
            className="relative flex-1 overflow-hidden rounded-2xl"
            style={{
              background: 'rgba(8,6,4,0.72)',
              border: '1px solid rgba(181,154,99,0.22)',
              boxShadow: '0 0 48px rgba(181,154,99,0.08), 0 0 100px rgba(181,154,99,0.04), inset 0 0 60px rgba(0,0,0,0.55)',
            }}
            onMouseEnter={() => { pausedRef.current = true }}
            onMouseLeave={() => { pausedRef.current = false }}
          >
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(8,6,4,0.9), transparent)' }} />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, rgba(8,6,4,0.9), transparent)' }} />

            {/* Scrolling track */}
            <div
              ref={trackRef}
              className="flex items-center py-8"
              style={{ width: 'max-content', willChange: 'transform' }}
            >
              {DOUBLED.map((company, i) => (
                <div key={`${company.slug}-${i}`} className="flex items-center flex-shrink-0">
                  <div className="flex items-center justify-center px-10">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-16 w-auto object-contain select-none opacity-60"
                      style={{ transform: `scale(${company.logoScale ?? 1})` }}
                      draggable="false"
                    />
                  </div>
                  {/* Vertical gold divider */}
                  <div className="w-px h-10 bg-mutedGold/18 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <Arrow dir={1} onClick={() => step(1)} />
        </motion.div>

        {/* ── Pagination dots ── */}
        <div className="flex justify-center gap-2 mb-12">
          {portfolioCompanies.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const half = halfRef.current
                if (!half) return
                offsetRef.current = (i / N) * half
                applyTransform()
                setActiveIdx(i)
              }}
              aria-label={`Go to ${portfolioCompanies[i].name}`}
              className={`
                rounded-full transition-all duration-300
                ${i === activeIdx
                  ? 'w-5 h-2 bg-mutedGold'
                  : 'w-2 h-2 bg-silverGray/20 hover:bg-silverGray/40'
                }
              `}
            />
          ))}
        </div>

      </div>

      {/* ── Bottom gold accent ── */}
      <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-mutedGold/20 to-transparent" />
    </section>
  )
}
