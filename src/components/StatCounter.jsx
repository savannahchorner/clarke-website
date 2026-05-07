import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function useCountUp(target, duration = 2000, started) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let raf
    const start = performance.now()
    const step = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, started])

  return count
}

function StatItem({ value, suffix = '', label, duration = 2200 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCountUp(value, duration, inView)

  return (
    <div ref={ref} className="text-center px-6 py-2">
      <div className="font-serif text-5xl md:text-6xl font-300 text-ivory leading-none mb-2">
        <span className="text-gradient-gold">{count}</span>
        <span className="text-mutedGold text-3xl md:text-4xl">{suffix}</span>
      </div>
      <p className="font-sans text-xs tracking-[0.2em] uppercase text-silverGray/70 mt-3">{label}</p>
    </div>
  )
}

export default function StatCounter({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(181,154,99,0.15)]">
      {stats.map((s, i) => (
        <StatItem key={i} {...s} duration={1800 + i * 200} />
      ))}
    </div>
  )
}
