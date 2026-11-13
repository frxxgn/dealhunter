import {
  Building2,
  ClipboardList,
  Contact,
  History,
  Target,
} from 'lucide-react'
import { SALES_COMMAND } from '@/config/modules'
import { EmptyState } from '@/shared/components/EmptyState'
import { ModuleIntro } from '@/shared/components/ModuleIntro'
import { Panel } from '@/shared/components/Panel'

/**
 * Página inicial de Sales Command (Módulo E).
 * Solo estructura visual: el CRM se desarrolla en la Fase 6.
 */
export function SalesCommandPage() {
  return (
    <div className="stagger flex flex-col gap-6 2xl:gap-8">
      <ModuleIntro
        module={SALES_COMMAND}
        title="CRM y gestión comercial"
        description="Gestiona empresas, contactos y oportunidades, y controla cada seguimiento hasta identificar los clientes ganados y perdidos."
      />
      <div className="grid gap-6 xl:grid-cols-3 2xl:gap-8">
        <Panel
          title="Oportunidades"
          description="Organizadas por su estado de venta."
          className="xl:col-span-2"
          bodyClassName="min-h-72"
        >
          <EmptyState
            icon={Target}
            title="Sin oportunidades"
            description="Las oportunidades comerciales aparecerán aquí con su estado de venta y su próxima acción."
          />
        </Panel>
        <Panel
          title="Tareas y seguimientos"
          description="Lo que queda pendiente de hacer."
        >
          <EmptyState
            icon={ClipboardList}
            title="Sin tareas"
            description="Las tareas y los seguimientos pendientes aparecerán aquí."
          />
        </Panel>
      </div>
      <div className="grid gap-6 md:grid-cols-3 2xl:gap-8">
        <Panel title="Empresas">
          <EmptyState
            icon={Building2}
            title="Sin empresas"
            description="Las empresas gestionadas aparecerán aquí."
          />
        </Panel>
        <Panel title="Contactos">
          <EmptyState
            icon={Contact}
            title="Sin contactos"
            description="Las personas de contacto de cada empresa aparecerán aquí."
          />
        </Panel>
        <Panel title="Historial de interacciones">
          <EmptyState
            icon={History}
            title="Sin interacciones"
            description="Las notas y las interacciones registradas aparecerán aquí."
          />
        </Panel>
      </div>
    </div>
  )
}
