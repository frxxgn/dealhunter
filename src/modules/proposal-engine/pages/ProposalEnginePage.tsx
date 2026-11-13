import { MessageSquareText, Package, Receipt, Send } from 'lucide-react'
import { PROPOSAL_ENGINE } from '@/config/modules'
import { EmptyState } from '@/shared/components/EmptyState'
import { ModuleIntro } from '@/shared/components/ModuleIntro'
import { Notice } from '@/shared/components/Notice'
import { Panel } from '@/shared/components/Panel'

/**
 * Página inicial de Proposal Engine (Módulo D).
 * Solo estructura visual: los presupuestos se desarrollan en la Fase 7.
 */
export function ProposalEnginePage() {
  return (
    <div className="stagger flex flex-col gap-6 2xl:gap-8">
      <ModuleIntro
        module={PROPOSAL_ENGINE}
        title="Presupuestos y propuestas comerciales"
        description="Prepara presupuestos personalizados, con servicios recomendados y precios orientativos, y gestiona las propuestas enviadas."
      />
      <div className="grid gap-6 xl:grid-cols-3 2xl:gap-8">
        <Panel
          title="Presupuestos"
          description="Con su desglose de funcionalidades y precios."
          className="xl:col-span-2"
          bodyClassName="min-h-72"
        >
          <EmptyState
            icon={Receipt}
            title="Sin presupuestos"
            description="Los presupuestos preparados aparecerán aquí."
          />
        </Panel>
        <Panel
          title="Servicios recomendados"
          description="Los más adecuados para cada negocio."
        >
          <EmptyState
            icon={Package}
            title="Sin recomendaciones"
            description="Los servicios recomendados aparecerán aquí."
          />
        </Panel>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 2xl:gap-8">
        <Panel
          title="Propuestas enviadas"
          description="Seguimiento de lo que ya se ha presentado."
        >
          <EmptyState
            icon={Send}
            title="Sin propuestas enviadas"
            description="Las propuestas enviadas y su estado aparecerán aquí."
          />
        </Panel>
        <Panel
          title="Mensajes comerciales"
          description="Textos personalizados para acompañar cada propuesta."
        >
          <EmptyState
            icon={MessageSquareText}
            title="Sin mensajes"
            description="Los mensajes comerciales preparados aparecerán aquí."
          />
        </Panel>
      </div>
      <Notice>
        Los precios estimados se identificarán siempre como orientativos, no
        como tarifas verificadas del mercado.
      </Notice>
    </div>
  )
}
