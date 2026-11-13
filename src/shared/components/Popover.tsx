import { useEffect, useId, useRef, useState } from 'react'
import type { FocusEvent, ReactNode, RefObject } from 'react'
import { cn } from '@/shared/lib/cn'

/** Propiedades que el botón disparador debe recibir tal cual. */
export interface PopoverTriggerProps {
  ref: RefObject<HTMLButtonElement | null>
  onClick: () => void
  'aria-expanded': boolean
  'aria-controls': string
  'aria-haspopup': 'dialog'
}

interface PopoverProps {
  /** Nombre accesible del panel. */
  label: string
  renderTrigger: (props: PopoverTriggerProps) => ReactNode
  children: ReactNode
  panelClassName?: string
}

/**
 * Panel flotante anclado a un botón. Se cierra con Escape, al pulsar fuera o
 * cuando el foco sale del panel.
 *
 * En móvil ocupa el ancho disponible bajo la barra superior; a partir de `sm`
 * se alinea con el borde derecho de su botón.
 */
export function Popover({
  label,
  renderTrigger,
  children,
  panelClassName,
}: PopoverProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return

    panelRef.current?.focus()

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !containerRef.current?.contains(event.target)
      ) {
        setOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    const next = event.relatedTarget
    if (next instanceof Node && !event.currentTarget.contains(next)) {
      setOpen(false)
    }
  }

  return (
    <div ref={containerRef} onBlur={handleBlur} className="sm:relative">
      {renderTrigger({
        ref: triggerRef,
        onClick: () => setOpen((current) => !current),
        'aria-expanded': open,
        'aria-controls': panelId,
        'aria-haspopup': 'dialog',
      })}
      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-label={label}
          tabIndex={-1}
          className={cn(
            'absolute inset-x-4 top-full z-50 mt-2 origin-top animate-pop rounded-2xl border border-line-strong bg-graphite-800 shadow-pop outline-none sm:inset-x-auto sm:right-0 sm:w-88 sm:origin-top-right',
            panelClassName,
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}
