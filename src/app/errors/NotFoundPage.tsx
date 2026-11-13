import { Compass } from 'lucide-react'
import { Link } from 'react-router'
import { DASHBOARD } from '@/config/navigation'
import { EmptyState } from '@/shared/components/EmptyState'
import { actionClass } from '@/shared/components/actionStyles'

/** Se muestra cuando la dirección no corresponde a ninguna sección. */
export function NotFoundPage() {
  return (
    <EmptyState
      icon={Compass}
      title="Esta página no existe"
      description="La dirección no corresponde a ninguna sección de DealHunter."
      action={
        <Link to={DASHBOARD.path} className={actionClass}>
          Ir al Dashboard
        </Link>
      }
      className="min-h-[60svh]"
    />
  )
}
