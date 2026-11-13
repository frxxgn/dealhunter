# DealHunter

Plataforma de inteligencia comercial y gestión de oportunidades empresariales,
propiedad de **WebNovalius**.

## Objetivo

Localizar negocios con oportunidades de mejora digital, analizar su presencia
online, identificar necesidades comerciales, generar demostraciones web
personalizadas y facilitar la preparación y gestión de propuestas comerciales.

DealHunter nace como herramienta interna de WebNovalius, con posibilidad de
evolucionar a producto SaaS. Se organiza en seis módulos: Lead Hunter,
Business Intelligence, Demo Factory, Proposal Engine, Sales Command y Revenue
Analytics.

## Estado del desarrollo

**Fase 1 de 12 · Arquitectura y preparación.**

El repositorio contiene la base técnica y la documentación. **Todavía no hay
ninguna funcionalidad implementada**: ni módulos, ni interfaz definitiva, ni
backend, ni integraciones. La aplicación muestra una pantalla provisional que
solo confirma que la base técnica funciona.

Estado detallado: [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md). Plan completo:
[ROADMAP.md](ROADMAP.md).

## Tecnologías

- React 19
- Vite 8
- TypeScript 7
- Tailwind CSS 4
- oxlint

Candidatas para fases posteriores, todavía sin instalar ni contratar: Supabase
(autenticación, base de datos y almacenamiento) y Vercel (despliegue).

## Requisitos

- Node.js 22.12 o superior (verificado con 22.23.4).
- npm (verificado con 10.9.9).

## Instalación

Desde la raíz del repositorio:

```bash
npm install
```

## Configuración

En la Fase 1 no hace falta ninguna configuración: la aplicación no usa
variables de entorno ni servicios externos.

El archivo `.env.example` describe la convención que se seguirá cuando existan
variables. Los archivos `.env` reales nunca se suben al repositorio.

## Ejecución local

```bash
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

Otros comandos:

| Comando             | Qué hace                                               |
| ------------------- | ------------------------------------------------------ |
| `npm run typecheck` | Comprueba los tipos de TypeScript                      |
| `npm run lint`      | Ejecuta el linter                                      |
| `npm run build`     | Comprueba los tipos y compila la aplicación en `dist/` |
| `npm run preview`   | Sirve la compilación en `http://localhost:4173`        |

## Estructura general

```
dealhunter/
├── index.html          Punto de entrada HTML
├── vite.config.ts      Configuración de Vite
├── src/
│   ├── main.tsx        Arranque de React
│   ├── app/            Composición de la aplicación
│   ├── modules/        Los seis módulos oficiales
│   ├── shared/         Código común a varios módulos
│   ├── services/       Acceso a servicios externos
│   ├── config/         Configuración de la aplicación
│   └── styles/         Tailwind y tokens de diseño
└── *.md                Documentación del proyecto
```

## Documentación

| Documento                                | Contenido                                       |
| ---------------------------------------- | ----------------------------------------------- |
| [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) | Alcance aprobado y estado actual del proyecto   |
| [ROADMAP.md](ROADMAP.md)                 | Las doce fases, con sus tareas y criterios      |
| [ARCHITECTURE.md](ARCHITECTURE.md)       | Arquitectura y decisiones técnicas              |
| [CHANGELOG.md](CHANGELOG.md)             | Registro de cambios                             |
| [CLAUDE.md](CLAUDE.md)                   | Reglas de trabajo para Claude Code              |
