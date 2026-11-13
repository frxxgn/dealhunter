import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

interface BadgeProps {
  children: ReactNode
  /** Muestra un punto de estado delante del texto. */
  dot?: 'accent' | 'neutral'
  className?: string
}

/** Etiqueta pequeña para estados e indicaciones breves. */
export function Badge({ children, dot, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-line bg-graphite-800/80 px-2.5 py-1 text-xs font-medium whitespace-nowrap text-fg-muted',
        className,
      )}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            'size-1.5 rounded-full',
            dot === 'accent'
              ? 'bg-accent shadow-[0_0_8px_var(--color-accent)]'
              : 'border border-fg-subtle',
          )}
        />
      )}
      {children}
    </span>
  )
}
