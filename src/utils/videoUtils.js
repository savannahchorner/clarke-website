/**
 * Force a background video element to play silently.
 * Retries on canplay so it works whether or not the video is already loaded.
 */
export function forcePlayVideo(video) {
  if (!video) return
  video.muted = true
  video.playsInline = true
  video.controls = false
  video.loop = true

  const attempt = () => {
    const p = video.play()
    if (p !== undefined) p.catch(() => {})
  }

  attempt()

  // If the video wasn't ready yet, retry as soon as it is
  const onCanPlay = () => {
    video.removeEventListener('canplay', onCanPlay)
    attempt()
  }
  video.addEventListener('canplay', onCanPlay)
}
