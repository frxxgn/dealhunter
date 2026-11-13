import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib/cn'

interface IconButtonProps extends Omit<ComponentProps<'button'>, 'children'> {
  icon: LucideIcon
  /** Nombre accesible del botón: describe lo que hace. */
  label: string
}

/** Botón cuadrado que solo muestra un icono. */
export function IconButton({
  icon: Icon,
  label,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        'inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white/[0.03] text-fg-muted transition-colors duration-200 hover:border-line-strong hover:bg-white/[0.06] hover:text-fg aria-expanded:border-line-strong aria-expanded:bg-white/[0.08] aria-expanded:text-fg',
        className,
      )}
      {...props}
    >
      <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
    </button>
  )
}
