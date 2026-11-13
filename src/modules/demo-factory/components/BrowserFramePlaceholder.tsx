import { AppWindow } from 'lucide-react'
import { EmptyState } from '@/shared/components/EmptyState'

/**
 * Espacio reservado para la vista previa de una demostración.
 * El marco de navegador es decorativo: no carga ninguna página.
 */
export function BrowserFramePlaceholder() {
  return (
    <div className="flex min-h-80 flex-1 flex-col overflow-hidden rounded-xl border border-line bg-ink-950/60">
      <div
        aria-hidden="true"
        className="flex h-10 shrink-0 items-center gap-4 border-b border-line bg-white/[0.02] px-4"
      >
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-graphite-500" />
          <span className="size-2.5 rounded-full bg-graphite-500" />
          <span className="size-2.5 rounded-full bg-graphite-500" />
        </div>
        <span className="h-5 max-w-sm flex-1 rounded-md bg-white/[0.04]" />
      </div>
      <EmptyState
        framed={false}
        icon={AppWindow}
        title="Sin vista previa"
        description="La demostración seleccionada se mostrará aquí antes de publicarla."
      />
    </div>
  )
}
