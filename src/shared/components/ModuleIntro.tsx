import type { ModuleDefinition } from '@/config/modules'
import { Badge } from '@/shared/components/Badge'
import { PageIntro } from '@/shared/components/PageIntro'

interface ModuleIntroProps {
  module: ModuleDefinition
  title: string
  description: string
}

/**
 * Cabecera común de la página inicial de un módulo. Indica de forma visible
 * que el módulo aún no está desarrollado y en qué fase lo estará.
 */
export function ModuleIntro({ module, title, description }: ModuleIntroProps) {
  return (
    <PageIntro
      eyebrow={`Módulo ${module.letter}`}
      title={title}
      description={description}
      status={
        <Badge dot="neutral">En preparación · Fase {module.phase}</Badge>
      }
    />
  )
}
