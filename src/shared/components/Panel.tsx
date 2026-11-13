import { useId } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

interface PanelProps {
  title: string
  description?: string
  /** Contenido auxiliar alineado a la derecha del título. */
  aside?: ReactNode
  as?: 'section' | 'aside'
  className?: string
  bodyClassName?: string
  children: ReactNode
}

/** Superficie con título: el contenedor base de la interfaz. */
export function Panel({
  title,
  description,
  aside,
  as: Tag = 'section',
  className,
  bodyClassName,
  children,
}: PanelProps) {
  const headingId = useId()

  return (
    <Tag
      aria-labelledby={headingId}
      className={cn(
        'flex min-w-0 flex-col rounded-2xl border border-line bg-graphite-900/70 shadow-panel',
        className,
      )}
    >
      <header className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-6 sm:pt-6">
        <div className="min-w-0">
          <h2 id={headingId} className="text-[15px] font-medium text-fg">
            {title}
          </h2>
          {description && (
            <p className="mt-1 text-sm text-pretty text-fg-muted">
              {description}
            </p>
          )}
        </div>
        {aside}
      </header>
      <div className={cn('flex flex-1 flex-col p-5 sm:p-6', bodyClassName)}>
        {children}
      </div>
    </Tag>
  )
}
