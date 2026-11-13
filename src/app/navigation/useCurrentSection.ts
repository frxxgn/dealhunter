import { useLocation } from 'react-router'
import { SECTIONS } from '@/config/navigation'
import type { SectionDefinition } from '@/config/navigation'

/** Devuelve la sección que corresponde a la dirección actual, si existe. */
export function useCurrentSection(): SectionDefinition | undefined {
  const { pathname } = useLocation()
  const normalized =
    pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname

  return SECTIONS.find((section) => section.path === normalized)
}
