import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { MODULES } from '@/config/modules'
import { IconTile } from '@/shared/components/IconTile'
import { SectionHeading } from '@/shared/components/SectionHeading'

/**
 * Accesos a los seis módulos oficiales, en su orden.
 * En móvil son filas compactas; a partir de `sm`, tarjetas.
 */
export function ModuleAccessGrid() {
  return (
    <section aria-labelledby="modulos" className="flex flex-col gap-4">
      <SectionHeading
        id="modulos"
        title="Módulos"
        description="Las seis áreas de la plataforma"
      />
      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 2xl:grid-cols-3">
        {MODULES.map((module, index) => (
          <li key={module.id}>
            <Link
              to={module.path}
              className="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-line bg-graphite-900/70 p-4 shadow-panel transition-[border-color,background-color,translate] duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-graphite-800/80 sm:flex-col sm:items-stretch sm:gap-0 sm:p-5"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 size-44 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex items-start justify-between">
                <IconTile
                  icon={module.icon}
                  className="transition-colors duration-300 group-hover:border-accent/25 group-hover:bg-accent/10 group-hover:text-accent"
                />
                <span
                  aria-hidden="true"
                  className="hidden text-xs font-medium tracking-wider text-fg-subtle tabular-nums sm:block"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="relative min-w-0 flex-1 sm:mt-5 sm:flex-none">
                <h3 className="text-[15px] font-medium text-fg sm:text-base">
                  {module.name}
                </h3>
                <p className="mt-0.5 text-sm text-pretty text-fg-muted sm:mt-1">
                  {module.summary}
                </p>
              </div>
              <div className="relative inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-fg-subtle transition-colors duration-300 group-hover:text-accent sm:mt-auto sm:pt-5">
                <span className="hidden sm:inline">Abrir módulo</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
