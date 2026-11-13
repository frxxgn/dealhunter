import { useId } from 'react'
import { NavItem } from '@/app/navigation/NavItem'
import { MODULES } from '@/config/modules'
import { DASHBOARD } from '@/config/navigation'
import { cn } from '@/shared/lib/cn'

interface NavListProps {
  onNavigate?: () => void
  className?: string
}

/**
 * Navegación principal: el dashboard y los seis módulos oficiales, en su
 * orden. La comparten la barra lateral y el menú móvil.
 */
export function NavList({ onNavigate, className }: NavListProps) {
  // La lista se muestra dos veces (barra lateral y menú móvil): cada una
  // necesita un identificador propio para su etiqueta.
  const modulesLabelId = useId()

  return (
    <nav aria-label="Navegación principal" className={cn('px-3', className)}>
      <ul>
        <li>
          <NavItem section={DASHBOARD} onNavigate={onNavigate} />
        </li>
      </ul>
      <p
        id={modulesLabelId}
        className="px-3 pt-7 pb-2.5 text-[11px] font-medium tracking-[0.16em] text-fg-subtle uppercase"
      >
        Módulos
      </p>
      <ul aria-labelledby={modulesLabelId} className="flex flex-col gap-0.5">
        {MODULES.map((module) => (
          <li key={module.id}>
            <NavItem section={module} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
