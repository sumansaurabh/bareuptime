import { memo, useEffect, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/usePerformance'

// Animate on scroll component with intersection observer
const AnimateOnScroll = memo(({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => setShouldAnimate(true), delay)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting, delay])

  return (
    <div
      ref={targetRef}
      className={`transition-all duration-700 ease-out ${
        shouldAnimate
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
})

AnimateOnScroll.displayName = 'AnimateOnScroll'

export default AnimateOnScroll
