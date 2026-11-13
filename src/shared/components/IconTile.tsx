import type { LucideIcon } from 'lucide-react'
import { cn } from '@/shared/lib/cn'

interface IconTileProps {
  icon: LucideIcon
  /** `accent` destaca el icono en verde esmeralda; `neutral` lo deja en gris. */
  tone?: 'accent' | 'neutral'
  className?: string
}

/** Icono dentro de una superficie cuadrada redondeada. */
export function IconTile({
  icon: Icon,
  tone = 'neutral',
  className,
}: IconTileProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border',
        tone === 'accent'
          ? 'border-accent/20 bg-accent/10 text-accent'
          : 'border-line bg-white/[0.03] text-fg-subtle',
        className,
      )}
    >
      <Icon className="size-[18px]" strokeWidth={1.75} />
    </span>
  )
}
