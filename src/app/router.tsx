import { createBrowserRouter } from 'react-router'
import { DashboardPage } from '@/app/dashboard/DashboardPage'
import { NotFoundPage } from '@/app/errors/NotFoundPage'
import { RouteError } from '@/app/errors/RouteError'
import { AppShell } from '@/app/layout/AppShell'
import {
  BUSINESS_INTELLIGENCE,
  DEMO_FACTORY,
  LEAD_HUNTER,
  PROPOSAL_ENGINE,
  REVENUE_ANALYTICS,
  SALES_COMMAND,
} from '@/config/modules'
import { DASHBOARD } from '@/config/navigation'

/**
 * Rutas de la aplicación: el dashboard y los seis módulos oficiales.
 *
 * Cada módulo se importa solo a través de su `index.ts` y se carga bajo
 * demanda, de modo que la aplicación no pesa más al crecer.
 */
export const router = createBrowserRouter([
  {
    path: DASHBOARD.path,
    Component: AppShell,
    ErrorBoundary: RouteError,
    // Mientras se descarga la sección inicial solo se ve el fondo de la app.
    HydrateFallback: () => null,
    children: [
      {
        // Barrera de errores interior: si una sección falla, la barra lateral
        // y la barra superior siguen disponibles.
        ErrorBoundary: RouteError,
        children: [
          { index: true, Component: DashboardPage },
          {
            path: LEAD_HUNTER.path,
            lazy: {
              Component: async () =>
                (await import('@/modules/lead-hunter')).LeadHunterPage,
            },
          },
          {
            path: BUSINESS_INTELLIGENCE.path,
            lazy: {
              Component: async () =>
                (await import('@/modules/business-intelligence'))
                  .BusinessIntelligencePage,
            },
          },
          {
            path: DEMO_FACTORY.path,
            lazy: {
              Component: async () =>
                (await import('@/modules/demo-factory')).DemoFactoryPage,
            },
          },
          {
            path: PROPOSAL_ENGINE.path,
            lazy: {
              Component: async () =>
                (await import('@/modules/proposal-engine')).ProposalEnginePage,
            },
          },
          {
            path: SALES_COMMAND.path,
            lazy: {
              Component: async () =>
                (await import('@/modules/sales-command')).SalesCommandPage,
            },
          },
          {
            path: REVENUE_ANALYTICS.path,
            lazy: {
              Component: async () =>
                (await import('@/modules/revenue-analytics'))
                  .RevenueAnalyticsPage,
            },
          },
          { path: '*', Component: NotFoundPage },
        ],
      },
    ],
  },
])
