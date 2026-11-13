import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { IconTile } from '@/shared/components/IconTile'
import { cn } from '@/shared/lib/cn'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  /** Acción real opcional (por ejemplo, un enlace). */
  action?: ReactNode
  /** Dibuja un marco discontinuo: un espacio reservado para datos futuros. */
  framed?: boolean
  className?: string
}

/** Estado vacío: explica qué aparecerá en un espacio que aún no tiene datos. */
export function EmptyState({
  icon,
  title,
  description,
  action,
  framed = true,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-1 flex-col items-center justify-center px-5 py-10 text-center',
        framed &&
          'rounded-xl border border-dashed border-line-strong bg-white/[0.015]',
        className,
      )}
    >
      <IconTile icon={icon} />
      <p className="mt-4 text-sm font-medium text-fg">{title}</p>
      <p className="mt-1.5 max-w-sm text-sm text-pretty text-fg-muted">
        {description}
      </p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}
