import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Card = forwardRef(function Card(
  {
    children,
    className = '',
    hoverLift = true,
    accentBorder = false,
    as: Component = 'div',
    ...props
  },
  ref
) {
  return (
    <Component
      ref={ref}
      className={cn(
        'relative rounded-card transition-all duration-200 overflow-hidden',
        'bg-[var(--bg-card)] border border-[var(--border-card)]',
        'shadow-[var(--shadow-card)]',
        hoverLift && 'hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--border-hover)]',
        accentBorder && 'border-t-2 border-t-py-500',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
})

export default Card
