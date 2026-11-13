import { TriangleAlert } from 'lucide-react'
import { EmptyState } from '@/shared/components/EmptyState'
import { actionClass } from '@/shared/components/actionStyles'

/**
 * Barrera de errores de las secciones. Si una sección falla al cargarse o al
 * mostrarse, el resto de la aplicación sigue disponible.
 *
 * No muestra detalles técnicos del error (ARCHITECTURE.md, sección 9).
 */
export function RouteError() {
  return (
    <EmptyState
      icon={TriangleAlert}
      title="No se ha podido mostrar esta sección"
      description="Ha ocurrido un error inesperado. Vuelve a cargar la página para intentarlo de nuevo."
      action={
        <button
          type="button"
          className={actionClass}
          onClick={() => window.location.reload()}
        >
          Volver a cargar
        </button>
      }
      className="min-h-[60svh]"
    />
  )
}
