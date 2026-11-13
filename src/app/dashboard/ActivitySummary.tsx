import { ChartPlaceholder } from '@/shared/components/ChartPlaceholder'

/**
 * Resumen de actividad del dashboard.
 * Sin datos reales muestra su estado vacío y reserva el espacio del gráfico.
 *
 * El texto y el gráfico se colocan en paralelo según el ancho del propio
 * bloque (consulta de contenedor), no el de la ventana: así se adapta igual
 * de bien con el panel lateral de actividad que sin él.
 */
export function ActivitySummary() {
  return (
    <section
      aria-labelledby="resumen-actividad"
      className="@container relative overflow-hidden rounded-3xl border border-line bg-graphite-900/70 shadow-panel"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full bg-accent/[0.07] blur-3xl"
      />
      <div className="relative grid gap-8 p-6 sm:p-8 @2xl:grid-cols-2 @2xl:items-center @2xl:gap-10">
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">
            Resumen de actividad
          </p>
          <h2
            id="resumen-actividad"
            className="mt-4 text-[26px] leading-8 font-semibold tracking-tight text-balance text-fg sm:text-[28px] sm:leading-9 2xl:text-[32px] 2xl:leading-10"
          >
            Aún no hay actividad que mostrar
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-pretty text-fg-muted">
            Cuando los módulos empiecen a generar datos, este resumen reflejará
            la evolución de la actividad comercial.
          </p>
        </div>
        <ChartPlaceholder
          label="Sin datos de actividad"
          className="h-44 sm:h-52 2xl:h-60"
        />
      </div>
    </section>
  )
}
