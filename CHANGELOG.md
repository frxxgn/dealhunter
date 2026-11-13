# CHANGELOG.md — Registro de cambios de DealHunter

Registra las modificaciones importantes del proyecto, de la más reciente a la
más antigua. Las fechas usan el formato AAAA-MM-DD.

## [0.2.0] - 2026-11-13 · Fase 2: Diseño visual y estructura principal

### Añadido

- **Estructura principal** (`src/app/layout/`): `AppShell`, `Sidebar`,
  `Topbar` y `MobileNav`, más los tres controles de la barra superior
  (`GlobalSearch`, `Notifications`, `UserProfile`) y su panel común
  (`TopbarPanel`).
- **Navegación** (`src/app/navigation/`): `NavList`, `NavItem` y
  `useCurrentSection`. Incluye el dashboard y los seis módulos, en su orden,
  y marca la sección activa.
- **Enrutador** (`src/app/router.tsx`): una dirección por sección y carga de
  cada módulo bajo demanda.
- **Dashboard** (`src/app/dashboard/`): `DashboardPage`, `ActivitySummary`,
  `MetricWidgets`, `ModuleAccessGrid` y `ActivityPanel`.
- **Página inicial de los seis módulos** (`src/modules/<módulo>/pages/`), con
  su API pública (`index.ts`). Business Intelligence y Demo Factory añaden un
  componente propio cada uno (`ScoreGaugePlaceholder` y
  `BrowserFramePlaceholder`).
- **Sistema de componentes** (`src/shared/components/`): `Panel`,
  `EmptyState`, `MetricCard`, `ChartPlaceholder`, `PageIntro`, `ModuleIntro`,
  `SectionHeading`, `Popover`, `IconButton`, `IconTile`, `Badge`, `Notice` y
  `Wordmark`.
- **Configuración** (`src/config/`): registro de los seis módulos
  (`modules.ts`), secciones navegables (`navigation.ts`) y nombres de las
  métricas oficiales (`metrics.ts`).
- **Errores** (`src/app/errors/`): página de dirección inexistente y barrera
  de errores de las secciones.
- Utilidades `cn` (`src/shared/lib/`) y `useDocumentTitle`
  (`src/shared/hooks/`).
- Dependencias aprobadas por el propietario: `react-router` 8.5.1,
  `lucide-react` 1.72.0 y `@fontsource-variable/geist` 5.3.0.

### Cambiado

- `src/styles/index.css`: tokens de diseño definitivos (paleta, bordes,
  texto, sombras, movimiento y tipografía) en lugar de los provisionales.
- `src/app/App.tsx`: la pantalla provisional de la Fase 1 se sustituye por el
  enrutador.
- `src/main.tsx`: carga la tipografía Geist.
- `package.json` y `package-lock.json`: nuevas dependencias y versión 0.2.0.
- Archivos `README.md` de `src/config/`, `src/shared/`, `src/modules/` y de
  cada módulo, para reflejar su contenido actual.
- Documentación: `PROJECT_CONTEXT.md`, `ROADMAP.md`, `ARCHITECTURE.md`,
  `CLAUDE.md` y `README.md`.

### Decidido

- Decisiones D-009 a D-016, registradas en `ARCHITECTURE.md`, sección 21.

### Repositorio

- La rama principal es `main`. Su historial inicial, creado en GitHub, se
  unió al trabajo de la Fase 1 con un commit de fusión, sin forzar ni
  reescribir nada.

### Verificado

- Comprobación de tipos, linter y compilación de producción.
- 312 comprobaciones en un navegador real sobre la compilación de producción;
  el detalle está en `ROADMAP.md`, Fase 2.

### No incluido

- Ninguna funcionalidad de los módulos, datos reales, backend, base de datos,
  autenticación, integraciones ni servicios externos. La búsqueda global, las
  notificaciones y el perfil de usuario son solo interfaz.

## [0.1.0] - 2026-11-13 · Fase 1: Arquitectura y preparación

### Añadido

- Proyecto base con React 19.3.1, Vite 8.3.8 y TypeScript 7.0.2 en modo
  estricto.
- Tailwind CSS 4.3.5 mediante su plugin oficial para Vite, con un conjunto
  mínimo y provisional de tokens de diseño (negro profundo, grafito y acento
  verde esmeralda).
- oxlint 1.93.0 como linter, con reglas de React y TypeScript.
- Alias de importación `@/` hacia `src/`.
- Estructura de carpetas preparada para los seis módulos oficiales
  (`src/modules/`), el código común (`src/shared/`), los servicios externos
  (`src/services/`) y la configuración (`src/config/`). Solo contienen un
  `README.md` descriptivo; no tienen código.
- Pantalla provisional que comprueba el funcionamiento de la base técnica.
- Convención de variables de entorno en `.env.example`, sin ninguna variable.
- Documentación permanente: `CLAUDE.md`, `PROJECT_CONTEXT.md`, `ROADMAP.md`,
  `ARCHITECTURE.md`, `CHANGELOG.md` y `README.md`.

### Decidido

- Decisiones técnicas D-001 a D-008, registradas en `ARCHITECTURE.md`,
  sección 21.

### Verificado

- Instalación desde cero en un clon limpio, comprobación de tipos, linter,
  compilación, servidor de desarrollo y vista previa de la compilación.
- La aplicación no hace peticiones a dominios externos y no se ha contratado
  ni activado ningún servicio.
- Fase 1 marcada como COMPLETADA en `ROADMAP.md`, con la comprobación de cada
  criterio.

### No incluido

- Ningún módulo, interfaz definitiva, backend, base de datos, autenticación,
  integración ni servicio externo.
