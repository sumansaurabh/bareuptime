import { memo } from 'react'

// Memoized section wrapper to reduce re-renders
const OptimizedSection = memo(({ 
  children, 
  className, 
  id 
}: { 
  children: React.ReactNode, 
  className?: string,
  id?: string 
}) => {
  return (
    <section 
      id={id} 
      className={`${className} will-change-transform`}
    >
      {children}
    </section>
  )
})

OptimizedSection.displayName = 'OptimizedSection'

// Memoized card component
const OptimizedCard = memo(({ 
  children, 
  className,
  gradient 
}: { 
  children: React.ReactNode, 
  className?: string,
  gradient?: string
}) => {
  return (
    <div className="group relative">
      <div 
        className={`bg-black/50 backdrop-blur-sm border-white/10 h-full shadow-xl transition-all duration-200 hover:translate-y-[-2px] rounded-xl overflow-hidden will-change-transform ${className}`}
      >
        {gradient && <div className={`h-2 ${gradient} w-full`}></div>}
        {children}
      </div>
    </div>
  )
})

OptimizedCard.displayName = 'OptimizedCard'

export { OptimizedSection, OptimizedCard }
