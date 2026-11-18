import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Button = forwardRef(function Button(
  {
    variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
    size = 'md',        // 'sm' | 'md' | 'lg'
    className = '',
    children,
    as: Component = 'button',
    ...props
  },
  ref
) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-display transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none'

  const variants = {
    primary:
      'bg-py-500 hover:bg-py-400 active:bg-py-600 text-brand-navy font-bold rounded-btn shadow-[0_2px_12px_rgba(250,194,59,0.25)] hover:shadow-[0_4px_20px_rgba(250,194,59,0.4)] focus-visible:ring-py-500 focus-visible:ring-offset-navy-900',
    secondary:
      'bg-ai-500 hover:bg-ai-400 active:bg-ai-600 text-white font-semibold rounded-btn shadow-[0_2px_10px_rgba(25,103,178,0.25)] focus-visible:ring-ai-500',
    outline:
      'bg-transparent border-2 border-py-500 text-py-500 hover:bg-py-500 hover:text-brand-navy font-bold rounded-btn focus-visible:ring-py-500',
    outlineNavy:
      'bg-transparent border border-navy-600/40 hover:border-py-500/60 text-navy-100 hover:text-py-500 font-medium rounded-btn',
    ghost:
      'bg-transparent text-navy-600 dark:text-navy-200 hover:text-py-500 dark:hover:text-py-500 font-medium',
  }

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 rounded-btn',
    md: 'text-sm px-5 py-2.5 rounded-btn',
    lg: 'text-base px-7 py-3.5 rounded-btn',
  }

  return (
    <Component
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  )
})

export default Button

