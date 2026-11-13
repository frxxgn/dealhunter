import { LayoutTemplate, Link2 } from 'lucide-react'
import { DEMO_FACTORY } from '@/config/modules'
import { EmptyState } from '@/shared/components/EmptyState'
import { ModuleIntro } from '@/shared/components/ModuleIntro'
import { Notice } from '@/shared/components/Notice'
import { Panel } from '@/shared/components/Panel'
import { BrowserFramePlaceholder } from '../components/BrowserFramePlaceholder'

/**
 * Página inicial de Demo Factory (Módulo C).
 * Solo estructura visual: la generación se desarrolla en la Fase 8.
 */
export function DemoFactoryPage() {
  return (
    <div className="stagger flex flex-col gap-6 2xl:gap-8">
      <ModuleIntro
        module={DEMO_FACTORY}
        title="Demostraciones web personalizadas"
        description="Genera propuestas de página web a medida de cada negocio y compártelas mediante enlaces privados."
      />
      <div className="grid gap-6 xl:grid-cols-5 2xl:gap-8">
        <Panel
          title="Vista previa"
          description="Cómo verá el negocio su demostración."
          className="xl:col-span-3"
        >
          <BrowserFramePlaceholder />
        </Panel>
        <div className="flex flex-col gap-6 xl:col-span-2 2xl:gap-8">
          <Panel
            title="Demostraciones"
            description="Propuestas creadas y sus enlaces privados."
            className="flex-1"
          >
            <EmptyState
              icon={Link2}
              title="Sin demostraciones"
              description="Las demostraciones creadas aparecerán aquí con su enlace privado."
            />
          </Panel>
          <Panel
            title="Plantillas"
            description="Bases de diseño para generar demostraciones."
            className="flex-1"
          >
            <EmptyState
              icon={LayoutTemplate}
              title="Sin plantillas"
              description="Las plantillas disponibles aparecerán aquí."
            />
          </Panel>
        </div>
      </div>
      <Notice>
        Toda demostración se identificará de forma visible como propuesta no
        oficial, nunca como la página web oficial del negocio.
      </Notice>
    </div>
  )
}
