import { ACTIVITY_METRICS, REVENUE_METRIC } from '@/config/metrics'
import { MetricCard } from '@/shared/components/MetricCard'
import { SectionHeading } from '@/shared/components/SectionHeading'

/** Métricas que resume el dashboard: las de actividad y los ingresos. */
const DASHBOARD_METRICS = [...ACTIVITY_METRICS, REVENUE_METRIC]

/** Widgets de métricas. Sin datos reales, cada uno muestra su estado vacío. */
export function MetricWidgets() {
  return (
    <section aria-labelledby="metricas" className="flex flex-col gap-4">
      <SectionHeading
        id="metricas"
        title="Métricas"
        description="Indicadores principales de la actividad comercial"
      />
      <dl className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 min-[112rem]:grid-cols-6">
        {DASHBOARD_METRICS.map((metric) => (
          <MetricCard key={metric.id} label={metric.label} />
        ))}
      </dl>
    </section>
  )
}
