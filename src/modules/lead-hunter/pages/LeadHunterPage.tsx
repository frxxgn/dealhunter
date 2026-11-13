import { Bookmark, Building2, Search } from 'lucide-react'
import { LEAD_HUNTER } from '@/config/modules'
import { EmptyState } from '@/shared/components/EmptyState'
import { ModuleIntro } from '@/shared/components/ModuleIntro'
import { Panel } from '@/shared/components/Panel'

/**
 * Página inicial de Lead Hunter (Módulo A).
 * Solo estructura visual: la búsqueda se desarrolla en la Fase 4.
 */
export function LeadHunterPage() {
  return (
    <div className="stagger flex flex-col gap-6 2xl:gap-8">
      <ModuleIntro
        module={LEAD_HUNTER}
        title="Búsqueda y descubrimiento de negocios"
        description="Localiza negocios por localidad, provincia, país y sector, y detecta los que tienen oportunidades de mejora digital."
      />
      <div className="grid gap-6 xl:grid-cols-3 2xl:gap-8">
        <div className="flex flex-col gap-6 xl:col-span-2 2xl:gap-8">
          <Panel
            title="Búsqueda"
            description="Criterios para localizar negocios."
          >
            <EmptyState
              icon={Search}
              title="Búsqueda todavía no disponible"
              description="Aquí se definirán los criterios: localidad, provincia, país y sector."
            />
          </Panel>
          <Panel
            title="Resultados"
            description="Negocios encontrados y sus oportunidades."
            bodyClassName="min-h-72"
          >
            <EmptyState
              icon={Building2}
              title="Sin resultados"
              description="Los negocios descubiertos aparecerán aquí con sus datos de contacto públicos y las oportunidades detectadas."
            />
          </Panel>
        </div>
        <Panel
          title="Búsquedas guardadas"
          description="Para repetir una búsqueda sin volver a definirla."
        >
          <EmptyState
            icon={Bookmark}
            title="Sin búsquedas guardadas"
            description="Las búsquedas que guardes quedarán disponibles aquí."
          />
        </Panel>
      </div>
    </div>
  )
}
