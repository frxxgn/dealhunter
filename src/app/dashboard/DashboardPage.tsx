import { ActivityPanel } from '@/app/dashboard/ActivityPanel'
import { ActivitySummary } from '@/app/dashboard/ActivitySummary'
import { MetricWidgets } from '@/app/dashboard/MetricWidgets'
import { ModuleAccessGrid } from '@/app/dashboard/ModuleAccessGrid'

/**
 * Pantalla principal. En pantallas anchas el panel de actividad ocupa una
 * columna lateral fija; en el resto se apila bajo el contenido principal.
 */
export function DashboardPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start 2xl:grid-cols-[minmax(0,1fr)_25rem] 2xl:gap-8">
      <div className="stagger flex min-w-0 flex-col gap-6 2xl:gap-8">
        <ActivitySummary />
        <MetricWidgets />
        <ModuleAccessGrid />
      </div>
      <ActivityPanel className="xl:sticky xl:top-24 xl:min-h-[calc(100svh-8rem-1px)]" />
    </div>
  )
}
