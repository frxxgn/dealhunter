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

**Fase 2 de 12 (Diseño visual y estructura principal): implementada y
verificada; pendiente de la validación del propietario.**

La aplicación tiene su interfaz principal: barra lateral, barra superior,
dashboard y la página inicial de los seis módulos, adaptada de móvil a
pantallas grandes. **Todavía no hay ninguna funcionalidad de negocio**: no
hay datos, backend ni integraciones, y todas las secciones muestran estados
vacíos.

Estado detallado: [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md). Plan completo:
[ROADMAP.md](ROADMAP.md).

## Tecnologías

- React 19
- Vite 8
- TypeScript 7
- Tailwind CSS 4
- React Router 8
- lucide-react (iconos)
- Geist (tipografía alojada con la aplicación)
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

No hace falta ninguna configuración: la aplicación todavía no usa variables
de entorno ni servicios externos.

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
│   ├── app/            Enrutador, layout, navegación y dashboard
│   ├── modules/        Los seis módulos oficiales
│   ├── shared/         Componentes, hooks y utilidades comunes
│   ├── services/       Acceso a servicios externos
│   ├── config/         Registro de módulos, navegación y métricas
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
