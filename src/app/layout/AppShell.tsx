import { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { MobileNav } from '@/app/layout/MobileNav'
import { Sidebar } from '@/app/layout/Sidebar'
import { Topbar } from '@/app/layout/Topbar'
import { useCurrentSection } from '@/app/navigation/useCurrentSection'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'

/** Ancho a partir del cual la barra lateral es fija (breakpoint `lg`). */
const DESKTOP_QUERY = '(min-width: 64rem)'

/**
 * Estructura principal de la aplicación: barra lateral, barra superior y el
 * área donde se muestra la sección activa.
 */
export function AppShell() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const section = useCurrentSection()
  const { pathname } = useLocation()
  const title = section?.name ?? 'Página no encontrada'

  useDocumentTitle(`${title} · DealHunter`)

  // Si la ventana se ensancha con el menú móvil abierto, se cierra: en
  // escritorio la navegación ya está visible en la barra lateral.
  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const handleChange = () => {
      if (desktop.matches) setMobileNavOpen(false)
    }
    desktop.addEventListener('change', handleChange)
    return () => desktop.removeEventListener('change', handleChange)
  }, [])

  return (
    <div className="relative min-h-svh">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-graphite-700 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-fg"
      >
        Saltar al contenido
      </a>

      {/* Fondo decorativo: retícula tenue y resplandor esmeralda muy sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_60%_at_55%_0%,black,transparent)]" />
        <div className="absolute -top-56 left-1/2 h-[30rem] w-[60rem] -translate-x-1/4 rounded-full bg-accent/[0.06] blur-3xl" />
      </div>

      <Sidebar />
      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <div className="lg:pl-66">
        <Topbar
          title={title}
          onOpenNavigation={() => setMobileNavOpen(true)}
        />
        <main
          id="contenido"
          tabIndex={-1}
          className="mx-auto w-full max-w-shell px-4 py-6 outline-none sm:px-6 sm:py-8 lg:px-8"
        >
          {/* La clave reinicia la animación de entrada al cambiar de sección */}
          <div key={pathname} className="animate-enter">
            <Outlet />
          </div>
        </main>
      </div>

      <ScrollRestoration />
    </div>
  )
}
