# CHANGELOG.md — Registro de cambios de DealHunter

Registra las modificaciones importantes del proyecto, de la más reciente a la
más antigua. Las fechas usan el formato AAAA-MM-DD.

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

### No incluido

- Ningún módulo, interfaz definitiva, backend, base de datos, autenticación,
  integración ni servicio externo.
