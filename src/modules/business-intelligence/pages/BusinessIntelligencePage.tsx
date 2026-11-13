import {
  Accessibility,
  FileText,
  Globe,
  ListChecks,
  Palette,
  Scale,
  ScanSearch,
  Smartphone,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BUSINESS_INTELLIGENCE } from '@/config/modules'
import { EmptyState } from '@/shared/components/EmptyState'
import { IconTile } from '@/shared/components/IconTile'
import { ModuleIntro } from '@/shared/components/ModuleIntro'
import { Notice } from '@/shared/components/Notice'
import { Panel } from '@/shared/components/Panel'
import { ScoreGaugePlaceholder } from '../components/ScoreGaugePlaceholder'

/** Áreas de análisis previstas para el módulo (PROJECT_CONTEXT.md, sección 2). */
const ANALYSIS_AREAS: ReadonlyArray<{ label: string; icon: LucideIcon }> = [
  { label: 'Diseño y calidad', icon: Palette },
  { label: 'Experiencia móvil', icon: Smartphone },
  { label: 'Velocidad y rendimiento', icon: Zap },
  { label: 'SEO técnico', icon: ScanSearch },
  { label: 'Accesibilidad', icon: Accessibility },
  { label: 'Presencia digital', icon: Globe },
]

/**
 * Página inicial de Business Intelligence (Módulo B).
 * Solo estructura visual: los análisis se desarrollan en la Fase 5.
 */
export function BusinessIntelligencePage() {
  return (
    <div className="stagger flex flex-col gap-6 2xl:gap-8">
      <ModuleIntro
        module={BUSINESS_INTELLIGENCE}
        title="Análisis e inteligencia comercial"
        description="Evalúa la presencia digital de cada negocio y calcula una puntuación de oportunidad de 0 a 100, con los factores que la justifican."
      />
      <div className="grid gap-6 xl:grid-cols-3 2xl:gap-8">
        <Panel title="Puntuación de oportunidad">
          <ScoreGaugePlaceholder />
        </Panel>
        <Panel
          title="Factores de la puntuación"
          description="Por qué un negocio obtiene su puntuación."
          className="xl:col-span-2"
        >
          <EmptyState
            icon={ListChecks}
            title="Sin factores que mostrar"
            description="Cada puntuación irá acompañada de los factores que la explican."
          />
        </Panel>
      </div>
      <Panel
        title="Áreas de análisis"
        description="Aspectos que se revisarán en la página web de cada negocio."
      >
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 2xl:grid-cols-6">
          {ANALYSIS_AREAS.map((area) => (
            <li
              key={area.label}
              className="flex flex-col rounded-xl border border-line bg-white/[0.02] p-4"
            >
              <IconTile icon={area.icon} className="size-9" />
              <p className="mt-4 text-sm font-medium text-fg">{area.label}</p>
              <p className="mt-1 text-xs text-fg-subtle">Sin analizar</p>
            </li>
          ))}
        </ul>
      </Panel>
      <div className="grid gap-6 lg:grid-cols-2 2xl:gap-8">
        <Panel title="Ficha de inteligencia comercial">
          <EmptyState
            icon={FileText}
            title="Sin fichas"
            description="La ficha de cada negocio analizado aparecerá aquí."
          />
        </Panel>
        <Panel title="Comparación con competidores">
          <EmptyState
            icon={Scale}
            title="Sin comparaciones"
            description="Se mostrará cuando existan datos suficientes de los competidores."
          />
        </Panel>
      </div>
      <Notice>
        Las estimaciones se mostrarán siempre diferenciadas de los datos
        verificados.
      </Notice>
    </div>
  )
}
