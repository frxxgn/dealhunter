import { Search } from 'lucide-react'
import { TopbarPanel } from '@/app/layout/topbar/TopbarPanel'
import { Popover } from '@/shared/components/Popover'

/**
 * Búsqueda global (solo interfaz).
 *
 * Todavía no existe un buscador real: no hay datos que consultar. El control
 * lo indica a la vista y su panel lo explica; no simula ninguna búsqueda.
 */
export function GlobalSearch() {
  return (
    <Popover
      label="Búsqueda global"
      renderTrigger={(triggerProps) => (
        <button
          type="button"
          aria-label="Búsqueda global (todavía no disponible)"
          className="inline-flex size-9 shrink-0 items-center justify-center gap-2.5 rounded-lg border border-line bg-white/[0.03] text-sm text-fg-subtle transition-colors duration-200 hover:border-line-strong hover:bg-white/[0.06] hover:text-fg-muted aria-expanded:border-line-strong aria-expanded:bg-white/[0.08] md:w-72 md:justify-start md:px-3 xl:w-80"
          {...triggerProps}
        >
          <Search
            aria-hidden="true"
            className="size-[18px] shrink-0 md:size-4"
            strokeWidth={1.75}
          />
          <span className="hidden flex-1 truncate text-left md:block">
            Búsqueda global
          </span>
          <span className="hidden rounded-md border border-line px-1.5 py-0.5 text-[11px] font-medium text-fg-subtle md:block">
            Próximamente
          </span>
        </button>
      )}
    >
      <TopbarPanel
        title="Búsqueda global"
        icon={Search}
        emptyTitle="Búsqueda todavía no disponible"
        emptyDescription="Podrás buscar en toda la plataforma cuando los módulos tengan datos que consultar."
      />
    </Popover>
  )
}
