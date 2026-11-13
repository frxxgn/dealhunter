import { LayoutDashboard } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { MODULES } from '@/config/modules'

/** Una sección navegable de la aplicación. */
export interface SectionDefinition {
  id: string
  name: string
  path: string
  icon: LucideIcon
}

export const DASHBOARD: SectionDefinition = {
  id: 'dashboard',
  name: 'Dashboard',
  path: '/',
  icon: LayoutDashboard,
}

/** Todas las secciones: el dashboard y los seis módulos oficiales. */
export const SECTIONS: readonly SectionDefinition[] = [DASHBOARD, ...MODULES]
