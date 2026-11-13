import { Menu } from 'lucide-react'
import { GlobalSearch } from '@/app/layout/topbar/GlobalSearch'
import { Notifications } from '@/app/layout/topbar/Notifications'
import { UserProfile } from '@/app/layout/topbar/UserProfile'
import { IconButton } from '@/shared/components/IconButton'

interface TopbarProps {
  /** Título de la sección actual. */
  title: string
  onOpenNavigation: () => void
}

/**
 * Barra superior. Contiene únicamente los elementos previstos: título de la
 * sección, búsqueda global, notificaciones y perfil de usuario.
 */
export function Topbar({ title, onOpenNavigation }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-shell items-center gap-3 px-4 sm:px-6 lg:px-8">
        <IconButton
          icon={Menu}
          label="Abrir menú de navegación"
          onClick={onOpenNavigation}
          className="lg:hidden"
        />
        <h1 className="min-w-0 flex-1 truncate text-lg font-semibold tracking-tight text-fg">
          {title}
        </h1>
        <div className="flex items-center gap-2">
          <GlobalSearch />
          <Notifications />
          <UserProfile />
        </div>
      </div>
    </header>
  )
}
