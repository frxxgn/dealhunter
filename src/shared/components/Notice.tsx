import { Info } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

/** Nota informativa breve sobre una regla o condición del producto. */
export function Notice({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex items-start gap-3 rounded-xl border border-accent/15 bg-accent/[0.04] px-4 py-3 text-sm text-pretty text-fg-muted',
        className,
      )}
    >
      <Info
        aria-hidden="true"
        className="mt-0.5 size-4 shrink-0 text-accent"
        strokeWidth={1.75}
      />
      <span>{children}</span>
    </p>
  )
}
