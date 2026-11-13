import {
  FileText,
  Gauge,
  Handshake,
  LayoutTemplate,
  Radar,
  TrendingUp,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Registro único de los seis módulos oficiales de DealHunter.
 *
 * Es la única fuente de la que salen la navegación, los títulos y los accesos
 * del dashboard. No se añaden módulos: el alcance está en PROJECT_CONTEXT.md,
 * sección 2.
 */
export interface ModuleDefinition {
  id: string
  /** Letra oficial del módulo (A-F). */
  letter: string
  name: string
  path: string
  /** Finalidad del módulo, en una frase. */
  summary: string
  /** Fase del ROADMAP en la que se desarrolla. */
  phase: number
  icon: LucideIcon
}

export const LEAD_HUNTER: ModuleDefinition = {
  id: 'lead-hunter',
  letter: 'A',
  name: 'Lead Hunter',
  path: '/lead-hunter',
  summary: 'Búsqueda y descubrimiento de negocios.',
  phase: 4,
  icon: Radar,
}

export const BUSINESS_INTELLIGENCE: ModuleDefinition = {
  id: 'business-intelligence',
  letter: 'B',
  name: 'Business Intelligence',
  path: '/business-intelligence',
  summary: 'Análisis e inteligencia comercial.',
  phase: 5,
  icon: Gauge,
}

export const DEMO_FACTORY: ModuleDefinition = {
  id: 'demo-factory',
  letter: 'C',
  name: 'Demo Factory',
  path: '/demo-factory',
  summary: 'Demostraciones web personalizadas.',
  phase: 8,
  icon: LayoutTemplate,
}

export const PROPOSAL_ENGINE: ModuleDefinition = {
  id: 'proposal-engine',
  letter: 'D',
  name: 'Proposal Engine',
  path: '/proposal-engine',
  summary: 'Presupuestos y propuestas comerciales.',
  phase: 7,
  icon: FileText,
}

export const SALES_COMMAND: ModuleDefinition = {
  id: 'sales-command',
  letter: 'E',
  name: 'Sales Command',
  path: '/sales-command',
  summary: 'CRM y gestión comercial.',
  phase: 6,
  icon: Handshake,
}

export const REVENUE_ANALYTICS: ModuleDefinition = {
  id: 'revenue-analytics',
  letter: 'F',
  name: 'Revenue Analytics',
  path: '/revenue-analytics',
  summary: 'Rendimiento comercial y financiero.',
  phase: 9,
  icon: TrendingUp,
}

/** Los seis módulos, en su orden oficial. */
export const MODULES: readonly ModuleDefinition[] = [
  LEAD_HUNTER,
  BUSINESS_INTELLIGENCE,
  DEMO_FACTORY,
  PROPOSAL_ENGINE,
  SALES_COMMAND,
  REVENUE_ANALYTICS,
]
