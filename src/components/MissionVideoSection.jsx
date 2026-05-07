import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MissionVideoSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0
          video.play().catch(() => {})
        } else {
          video.pause()
          video.currentTime = 0
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="our-mission"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Entry gradient — blends from the section above */}
      <div className="absolute top-0 left-0 right-0 h-32 z-10 bg-gradient-to-b from-richBlack to-transparent pointer-events-none" />

      {/* Video background */}
      <video
        ref={videoRef}
        src="/videos/lightbulb-video.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-richBlack/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-richBlack/40 via-transparent to-richBlack/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-richBlack/30 via-transparent to-richBlack/30" />

      {/* Subtle gold ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[300px] rounded-full bg-mutedGold/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-8 tracking-[0.3em]">Our Mission</p>
          <h2
            className="font-serif font-300 text-ivory leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
          >
            Your Ideas.{' '}
            <span className="text-gradient-gold italic">Our Expertise.</span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="gold-divider" />
          </div>
          <p
            className="font-sans text-silverGray/75 leading-relaxed max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(14px, 1.1vw, 17px)' }}
          >
            We partner with founders who have the vision to build category-defining companies —
            and bring the operating experience to help them get there.
          </p>
        </motion.div>
      </div>

      {/* Exit gradient — blends into the section below */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-richBlack to-transparent pointer-events-none" />
    </section>
  )
}
