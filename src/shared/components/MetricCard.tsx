import { cn } from '@/shared/lib/cn'

interface MetricCardProps {
  label: string
  /** Valor real ya formateado. Si falta, la tarjeta muestra su estado vacío. */
  value?: string
  className?: string
}

/**
 * Widget de una métrica. Debe ir dentro de una lista de definiciones (`<dl>`).
 * Sin `value` no muestra ninguna cifra: nunca se inventan datos.
 */
export function MetricCard({ label, value, className }: MetricCardProps) {
  const hasValue = value !== undefined

  return (
    <div
      className={cn(
        'flex min-w-0 flex-col rounded-2xl border border-line bg-graphite-900/70 p-5 shadow-panel',
        className,
      )}
    >
      <dt className="text-[13px] leading-snug text-fg-muted">{label}</dt>
      <dd className="mt-auto pt-4">
        {hasValue ? (
          <span className="text-3xl font-semibold tracking-tight text-fg tabular-nums">
            {value}
          </span>
        ) : (
          <>
            <span
              aria-hidden="true"
              className="block text-3xl font-semibold tracking-tight text-graphite-500"
            >
              —
            </span>
            <span className="mt-3 flex items-center gap-2 text-xs text-fg-subtle">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full border border-fg-subtle"
              />
              Sin datos
            </span>
          </>
        )}
      </dd>
    </div>
  )
}
