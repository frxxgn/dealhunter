import { Bell } from 'lucide-react'
import { TopbarPanel } from '@/app/layout/topbar/TopbarPanel'
import { IconButton } from '@/shared/components/IconButton'
import { Popover } from '@/shared/components/Popover'

/**
 * Notificaciones (solo interfaz).
 *
 * Todavía no existe un sistema de notificaciones. El botón no muestra ningún
 * contador y su panel explica el estado real.
 */
export function Notifications() {
  return (
    <Popover
      label="Notificaciones"
      renderTrigger={(triggerProps) => (
        <IconButton icon={Bell} label="Notificaciones" {...triggerProps} />
      )}
    >
      <TopbarPanel
        title="Notificaciones"
        icon={Bell}
        emptyTitle="Sin notificaciones"
        emptyDescription="El sistema de notificaciones se activará en una fase posterior del desarrollo."
      />
    </Popover>
  )
}
