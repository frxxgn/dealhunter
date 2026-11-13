import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import { NavList } from '@/app/navigation/NavList'
import { IconButton } from '@/shared/components/IconButton'
import { Wordmark } from '@/shared/components/Wordmark'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

/**
 * Menú de navegación para pantallas estrechas.
 *
 * Usa un `<dialog>` modal nativo: el navegador se encarga de retener el foco,
 * de cerrarlo con Escape y de bloquear el contenido que queda detrás.
 */
export function MobileNav({ open, onClose }: MobileNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // Un clic sobre el propio <dialog> solo ocurre en el fondo oscurecido.
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label="Menú de navegación"
      onClose={onClose}
      onClick={handleBackdropClick}
      className="fixed inset-y-0 right-auto left-0 m-0 h-dvh max-h-none w-[min(19rem,86vw)] max-w-none border-r border-line bg-ink-900 p-0 text-fg shadow-pop backdrop:bg-black/60 backdrop:backdrop-blur-sm open:animate-drawer open:backdrop:animate-fade"
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 shrink-0 items-center justify-between pr-4 pl-6">
          <Wordmark />
          <IconButton
            icon={X}
            label="Cerrar menú de navegación"
            onClick={onClose}
          />
        </div>
        <NavList onNavigate={onClose} className="flex-1 overflow-y-auto py-4" />
      </div>
    </dialog>
  )
}
