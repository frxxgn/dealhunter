import { cn } from '@/shared/lib/cn'

/**
 * Identidad textual provisional de DealHunter.
 * Es solo el nombre compuesto tipográficamente: no incluye símbolo ni logotipo.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'text-[19px] leading-none font-semibold tracking-[-0.035em] text-fg',
        className,
      )}
    >
      Deal<span className="text-accent">Hunter</span>
    </span>
  )
}
