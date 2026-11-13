/**
 * Espacio reservado para la puntuación de oportunidad (0 a 100).
 * Dibuja solo la escala vacía: no muestra ninguna puntuación.
 */
export function ScoreGaugePlaceholder() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-line-strong bg-white/[0.015] px-5 py-8 text-center">
      <div className="relative size-36">
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          className="size-full -rotate-90"
        >
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            strokeWidth="6"
            strokeDasharray="2 6"
            className="stroke-graphite-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            aria-hidden="true"
            className="text-4xl font-semibold tracking-tight text-graphite-500"
          >
            —
          </span>
          <span className="mt-1 text-xs text-fg-subtle">de 0 a 100</span>
        </div>
      </div>
      <p className="mt-5 text-sm font-medium text-fg">Sin puntuación</p>
      <p className="mt-1.5 max-w-xs text-sm text-pretty text-fg-muted">
        La puntuación de oportunidad de cada negocio analizado aparecerá aquí.
      </p>
    </div>
  )
}
