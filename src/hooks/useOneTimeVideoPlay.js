import { useRef, useEffect } from 'react'

export function useOneTimeVideoPlay(threshold = 0.4) {
  const sectionRef = useRef(null)
  const videoRef   = useRef(null)
  const hasPlayed  = useRef(false)

  useEffect(() => {
    const video   = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true
          video.play().catch(() => {})
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [threshold])

  return { sectionRef, videoRef }
}
