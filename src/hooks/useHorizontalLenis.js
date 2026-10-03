import { useEffect } from 'react'
import Lenis from 'lenis'

const DESKTOP_QUERY = '(min-width: 821px)'

export function useHorizontalLenis(wrapperRef, contentRef) {
  useEffect(() => {
    const wrapper = wrapperRef.current
    const content = contentRef.current
    if (!wrapper || !content) return undefined

    const media = window.matchMedia(DESKTOP_QUERY)
    if (!media.matches) return undefined

    const lenis = new Lenis({
      wrapper,
      content,
      orientation: 'horizontal',
      gestureOrientation: 'both',
      smoothWheel: true,
      lerp: 0.08,
      autoRaf: true,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
    })

    return () => lenis.destroy()
  }, [wrapperRef, contentRef])
}
