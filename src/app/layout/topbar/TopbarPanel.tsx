import type { LucideIcon } from 'lucide-react'
import { EmptyState } from '@/shared/components/EmptyState'

interface TopbarPanelProps {
  title: string
  icon: LucideIcon
  emptyTitle: string
  emptyDescription: string
}

/** Contenido de los paneles de la barra superior: título y estado vacío. */
export function TopbarPanel({
  title,
  icon,
  emptyTitle,
  emptyDescription,
}: TopbarPanelProps) {
  return (
    <>
      <p className="border-b border-line px-5 py-3.5 text-sm font-medium text-fg">
        {title}
      </p>
      <EmptyState
        framed={false}
        icon={icon}
        title={emptyTitle}
        description={emptyDescription}
        className="py-8"
      />
    </>
  )
}
