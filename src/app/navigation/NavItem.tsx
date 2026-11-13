import { NavLink } from 'react-router'
import type { SectionDefinition } from '@/config/navigation'
import { cn } from '@/shared/lib/cn'

interface NavItemProps {
  section: SectionDefinition
  /** Se ejecuta al navegar; el menú móvil lo usa para cerrarse. */
  onNavigate?: () => void
}

/** Enlace de navegación que indica visualmente si su sección está activa. */
export function NavItem({ section, onNavigate }: NavItemProps) {
  const Icon = section.icon

  return (
    <NavLink
      to={section.path}
      end
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          'group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
          isActive
            ? 'bg-white/[0.06] text-fg'
            : 'text-fg-muted hover:bg-white/[0.035] hover:text-fg',
        )
      }
    >
      {({ isActive }) => (
        <>
          <span
            aria-hidden="true"
            className={cn(
              'absolute top-1/2 -left-3 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-accent shadow-[0_0_12px_var(--color-accent)] transition-opacity duration-300',
              isActive ? 'opacity-100' : 'opacity-0',
            )}
          />
          <Icon
            aria-hidden="true"
            strokeWidth={1.75}
            className={cn(
              'size-[18px] shrink-0 transition-colors duration-200',
              isActive
                ? 'text-accent'
                : 'text-fg-subtle group-hover:text-fg-muted',
            )}
          />
          <span className="truncate">{section.name}</span>
        </>
      )}
    </NavLink>
  )
}
