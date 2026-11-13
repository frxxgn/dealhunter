import { ACTIVITY_METRICS, FINANCIAL_METRICS } from '@/config/metrics'
import { REVENUE_ANALYTICS } from '@/config/modules'
import { ChartPlaceholder } from '@/shared/components/ChartPlaceholder'
import { MetricCard } from '@/shared/components/MetricCard'
import { ModuleIntro } from '@/shared/components/ModuleIntro'
import { Panel } from '@/shared/components/Panel'

const METRICS = [...ACTIVITY_METRICS, ...FINANCIAL_METRICS]

/**
 * Página inicial de Revenue Analytics (Módulo F).
 * Solo estructura visual: las métricas se calculan en la Fase 9.
 */
export function RevenueAnalyticsPage() {
  return (
    <div className="stagger flex flex-col gap-6 2xl:gap-8">
      <ModuleIntro
        module={REVENUE_ANALYTICS}
        title="Rendimiento comercial y financiero"
        description="Mide los resultados de la actividad comercial, desde las oportunidades descubiertas hasta los ingresos y la rentabilidad."
      />
      <dl className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {METRICS.map((metric) => (
          <MetricCard key={metric.id} label={metric.label} />
        ))}
      </dl>
      <Panel
        title="Ingresos, costes y rentabilidad"
        description="Evolución de los resultados financieros."
      >
        <ChartPlaceholder label="Sin datos financieros" className="h-64" />
      </Panel>
      <div className="grid gap-6 lg:grid-cols-2 2xl:gap-8">
        <Panel
          title="Conversiones por sector"
          description="Qué sectores convierten mejor."
        >
          <ChartPlaceholder label="Sin datos de conversión" className="h-56" />
        </Panel>
        <Panel
          title="Rendimiento de búsquedas"
          description="Qué búsquedas generan más oportunidades."
        >
          <ChartPlaceholder label="Sin datos de búsquedas" className="h-56" />
        </Panel>
      </div>
    </div>
  )
}
