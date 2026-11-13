import { Badge } from '@/shared/components/Badge'
import { cn } from '@/shared/lib/cn'

interface ChartPlaceholderProps {
  /** Texto del estado vacío, por ejemplo «Sin datos de actividad». */
  label: string
  className?: string
}

/**
 * Espacio reservado para un gráfico futuro. Dibuja solo el marco y las líneas
 * de referencia: no representa ninguna serie de datos.
 */
export function ChartPlaceholder({ label, className }: ChartPlaceholderProps) {
  return (
    <div
      className={cn(
        'relative min-h-40 flex-1 overflow-hidden rounded-xl border border-line bg-ink-950/60',
        className,
      )}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 bottom-9 chart-grid" />
      <div
        aria-hidden="true"
        className="absolute inset-x-5 bottom-9 border-t border-line-strong"
      />
      <div className="absolute inset-0 flex items-center justify-center pb-9">
        <Badge dot="neutral">{label}</Badge>
      </div>
    </div>
  )
}
