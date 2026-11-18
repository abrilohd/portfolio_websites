import { cn } from '../../utils/cn'

export default function Badge({
  children,
  variant = 'default', // 'default' | 'gold' | 'blue' | 'success' | 'outline'
  size = 'md',        // 'sm' | 'md'
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center gap-1.5 font-mono font-medium rounded-tag transition-colors duration-150 select-none'

  const variants = {
    default:
      'bg-navy-500/10 dark:bg-navy-600/25 border border-navy-300/25 dark:border-navy-400/20 text-navy-800 dark:text-navy-100',
    gold:
      'bg-py-500/12 border border-py-500/30 text-amber-700 dark:text-py-400 font-semibold',
    blue:
      'bg-ai-500/12 border border-ai-500/30 text-ai-600 dark:text-ai-200 font-semibold',
    success:
      'bg-emerald-500/12 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-semibold',
    outline:
      'bg-transparent border border-navy-600/30 dark:border-navy-300/20 text-navy-600 dark:text-navy-200',
  }

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  }

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  )
}

