interface SectionHeadingProps {
  id: string
  title: string
  description?: string
}

/** Título de un bloque de contenido dentro de una página. */
export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
      <h2 id={id} className="text-[15px] font-medium text-fg">
        {title}
      </h2>
      {description && <p className="text-sm text-fg-subtle">{description}</p>}
    </div>
  )
}
