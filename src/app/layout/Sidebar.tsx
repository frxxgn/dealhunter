import { Link } from 'react-router'
import { NavList } from '@/app/navigation/NavList'
import { DASHBOARD } from '@/config/navigation'
import { Wordmark } from '@/shared/components/Wordmark'

/** Barra lateral fija. Solo se muestra a partir del ancho `lg`. */
export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-66 flex-col border-r border-line bg-ink-900/80 backdrop-blur-xl lg:flex">
      <div className="flex h-16 shrink-0 items-center px-6">
        <Link
          to={DASHBOARD.path}
          aria-label="DealHunter: ir al Dashboard"
          className="rounded-md"
        >
          <Wordmark />
        </Link>
      </div>
      <NavList className="flex-1 overflow-y-auto py-4" />
    </aside>
  )
}
