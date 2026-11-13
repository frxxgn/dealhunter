import type { ReactNode } from 'react'

interface PageIntroProps {
  /** Texto breve sobre el título, por ejemplo «Módulo A». */
  eyebrow: string
  title: string
  description: string
  /** Indicación de estado, alineada a la derecha en pantallas anchas. */
  status?: ReactNode
}

/** Cabecera de una página: sitúa a quien la usa y explica su finalidad. */
export function PageIntro({
  eyebrow,
  title,
  description,
  status,
}: PageIntroProps) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
      <div className="min-w-0">
        <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance text-fg sm:text-[28px] sm:leading-9">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-pretty text-fg-muted">
          {description}
        </p>
      </div>
      {status && <div className="shrink-0">{status}</div>}
    </header>
  )
}
