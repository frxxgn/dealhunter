import { UserRound } from 'lucide-react'
import { TopbarPanel } from '@/app/layout/topbar/TopbarPanel'
import { IconButton } from '@/shared/components/IconButton'
import { Popover } from '@/shared/components/Popover'

/**
 * Perfil de usuario (solo interfaz).
 *
 * Todavía no existen cuentas de usuario: se configuran en la Fase 3. No se
 * muestra ningún nombre ni dato de usuario inventado.
 */
export function UserProfile() {
  return (
    <Popover
      label="Perfil de usuario"
      renderTrigger={(triggerProps) => (
        <IconButton
          icon={UserRound}
          label="Perfil de usuario"
          className="rounded-full bg-graphite-700"
          {...triggerProps}
        />
      )}
    >
      <TopbarPanel
        title="Perfil de usuario"
        icon={UserRound}
        emptyTitle="Sin sesión de usuario"
        emptyDescription="Las cuentas de usuario y el inicio de sesión se configurarán en la Fase 3."
      />
    </Popover>
  )
}
