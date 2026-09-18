import { useEffect, type RefObject } from 'react'
import Lenis from 'lenis'

const DESKTOP_QUERY = '(min-width: 821px)'

export function useHorizontalLenis(
  wrapperRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const wrapper = wrapperRef.current
    const content = contentRef.current
    if (!wrapper || !content) return

    const media = window.matchMedia(DESKTOP_QUERY)
    if (!media.matches) return

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

    return () => {
      lenis.destroy()
    }
  }, [wrapperRef, contentRef])
}
