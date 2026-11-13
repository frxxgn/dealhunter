/**
 * Métricas oficiales de DealHunter (Módulo F, Revenue Analytics).
 *
 * Solo se definen sus nombres. Los valores se calcularán con datos reales en
 * la Fase 9: hasta entonces la interfaz muestra estados vacíos.
 */
export interface MetricDefinition {
  id: string
  label: string
}

/** Métricas de actividad comercial. */
export const ACTIVITY_METRICS: readonly MetricDefinition[] = [
  { id: 'opportunities-discovered', label: 'Oportunidades descubiertas' },
  { id: 'businesses-analyzed', label: 'Negocios analizados' },
  { id: 'demos-created', label: 'Demostraciones creadas' },
  { id: 'proposals-prepared', label: 'Presupuestos preparados' },
  { id: 'customers-converted', label: 'Clientes convertidos' },
]

export const REVENUE_METRIC: MetricDefinition = {
  id: 'revenue',
  label: 'Ingresos',
}

/** Métricas financieras. */
export const FINANCIAL_METRICS: readonly MetricDefinition[] = [
  REVENUE_METRIC,
  { id: 'costs', label: 'Costes' },
  { id: 'profitability', label: 'Rentabilidad' },
]
