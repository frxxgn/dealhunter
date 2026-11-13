import { Panel } from '@/shared/components/Panel'
import { cn } from '@/shared/lib/cn'

/** Anchos de las líneas de la ilustración: no representan ningún dato. */
const GHOST_ROWS = ['w-3/4', 'w-1/2', 'w-2/3', 'w-2/5']

/**
 * Panel de actividad. Sin actividad registrada muestra su estado vacío, con
 * una ilustración atenuada de la línea de tiempo que ocupará este espacio.
 */
export function ActivityPanel({ className }: { className?: string }) {
  return (
    <Panel as="aside" title="Actividad reciente" className={className}>
      <div className="flex flex-1 flex-col justify-center rounded-xl border border-dashed border-line-strong bg-white/[0.015] px-5 py-8">
        <div
          aria-hidden="true"
          className="relative mx-auto w-full max-w-56 [mask-image:linear-gradient(to_bottom,black_25%,transparent)]"
        >
          <div className="absolute top-2 bottom-0 left-[6px] w-px bg-line-strong" />
          <ul className="flex flex-col gap-5">
            {GHOST_ROWS.map((width) => (
              <li key={width} className="flex items-center gap-4">
                <span className="relative size-[13px] shrink-0 rounded-full border border-line-strong bg-graphite-800" />
                <span
                  className={cn('h-2 rounded-full bg-white/[0.06]', width)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-fg">Sin actividad reciente</p>
          <p className="mx-auto mt-1.5 max-w-xs text-sm text-pretty text-fg-muted">
            Las acciones realizadas en los módulos aparecerán aquí en orden
            cronológico.
          </p>
        </div>
      </div>
    </Panel>
  )
}
