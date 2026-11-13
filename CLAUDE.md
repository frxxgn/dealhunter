# CLAUDE.md — Instrucciones permanentes para Claude Code

Este repositorio es la memoria del proyecto. No dependas de conversaciones
anteriores: el estado real está en los documentos de la raíz.

## Al empezar cada sesión

1. Lee `PROJECT_CONTEXT.md`, sección 4: fase actual y próxima tarea autorizada.
2. Lee en `ROADMAP.md` solo la fase actual.
3. Consulta `ARCHITECTURE.md` solo en los apartados que afecten a la tarea.
4. Trabaja únicamente en la próxima tarea autorizada. Si no hay ninguna, o no
   está clara, pregunta al propietario antes de hacer nada.

## Identidad

- **Proyecto:** DealHunter.
- **Tipo:** plataforma de inteligencia comercial y gestión de oportunidades
  empresariales.
- **Propietario:** WebNovalius.
- **Naturaleza:** herramienta interna con posible evolución a SaaS.

## Objetivo

Localizar negocios con oportunidades de mejora digital, analizar su presencia
online, identificar necesidades comerciales, generar demostraciones web
personalizadas y facilitar la preparación y gestión de propuestas comerciales.

Seis módulos oficiales y ninguno más: Lead Hunter, Business Intelligence, Demo
Factory, Proposal Engine, Sales Command y Revenue Analytics. Su alcance exacto
está en `PROJECT_CONTEXT.md`, sección 2.

## Tecnologías

React 19, Vite 8, TypeScript 7 (estricto), Tailwind CSS 4, React Router 8,
lucide-react (iconos), Geist (tipografía alojada con la aplicación) y oxlint,
con npm y Node.js 22.12 o superior. Candidatas no instaladas: Supabase
(Fase 3) y Vercel (Fase 12). Versiones y motivos: `ARCHITECTURE.md`,
secciones 2 y 21.

## Comandos verificados

| Comando             | Qué hace                                              |
| ------------------- | ----------------------------------------------------- |
| `npm install`       | Instala las dependencias                              |
| `npm run dev`       | Servidor de desarrollo en `http://localhost:5173`     |
| `npm run typecheck` | Comprueba los tipos                                   |
| `npm run lint`      | Ejecuta el linter                                     |
| `npm run build`     | Comprueba los tipos y compila a `dist/`               |
| `npm run preview`   | Sirve la compilación en `http://localhost:4173`       |

Antes de dar por terminado un cambio de código deben pasar `npm run lint` y
`npm run build`.

## Estructura del proyecto

```
src/
├── main.tsx     Arranque de React
├── app/         Enrutador, layout, navegación, dashboard y errores
├── modules/     Los seis módulos oficiales, una carpeta cada uno
├── shared/      Componentes, hooks y utilidades comunes
├── services/    Acceso a servicios externos, tras interfaces propias
├── config/      Registro de módulos, navegación y métricas
└── styles/      Tailwind y tokens de diseño
```

Detalle y estructura interna de cada módulo: `ARCHITECTURE.md`, secciones 3 y 4.
Tokens y componentes disponibles: `ARCHITECTURE.md`, sección 8.

## Reglas permanentes de desarrollo

1. **Fronteras de módulos.** Un módulo solo importa de otro a través de su
   `index.ts`. `shared`, `services` y `config` nunca importan de `modules`.
2. **Lógica fuera de los componentes.** La lógica de negocio va en `domain/`,
   como funciones puras con pruebas. Sin componentes gigantes ni código
   duplicado.
3. **Integraciones desacopladas.** Todo proveedor externo queda detrás de una
   interfaz propia. Las llamadas con clave se hacen desde el servidor.
4. **Tokens y componentes.** Tema exclusivamente oscuro. Los componentes usan
   los tokens del tema, no colores escritos a mano. Antes de crear un
   componente, comprueba si ya existe en `src/shared/components/`.
5. **TypeScript estricto.** Sin `any` ni supresiones de errores sin motivo
   documentado.
6. **Coste.** Código convencional y reglas transparentes antes que IA. Caché
   antes que repetir una llamada externa.
7. **Seguridad.** Ningún secreto en el repositorio ni en variables `VITE_`.
   Cada variable nueva se añade a `.env.example` sin su valor.
8. **Idioma.** Documentación e interfaz en español, sin mezclar inglés en los
   textos visibles. Se mantienen los nombres propios: «DealHunter»,
   «Dashboard» y los de los seis módulos. Identificadores de código en inglés.
9. **Dependencias.** Antes de instalar una, justifica su utilidad y pide
   aprobación al propietario. Debe ser gratuita y compatible con las versiones
   instaladas.
10. **Repositorio.** La rama principal es `main`. Commits en formato
    Conventional Commits con la descripción en español. Nunca se fuerza un
    push ni se reescribe el historial. No se crean pull requests sin petición
    expresa.
11. **Interfaz honesta.** Sin datos ficticios: donde no hay datos reales se
    muestra un estado vacío. Ningún control aparenta una función que no
    existe.

## Restricciones

- No usar Next.js sin presentar antes una justificación técnica al propietario.
- No crear microservicios sin una necesidad real.
- No contratar, activar ni registrar servicios externos. No generar costes.
- No añadir APIs, servicios ni dependencias de pago sin aprobación.
- No implementar scraping prohibido ni comunicaciones comerciales automáticas
  sin base legal verificada y autorización.
- No presentar estimaciones como datos verificados, ni precios orientativos
  como tarifas de mercado.
- Las demostraciones se identifican siempre como propuestas no oficiales.
- No avanzar de fase sin terminar, verificar y documentar la anterior, y sin
  autorización del propietario.

## REGLA ABSOLUTA: no inventar ni ampliar el proyecto

Esta regla tiene prioridad sobre cualquier mejora técnica o funcional.
DealHunter se construye tal y como lo ha definido su propietario: ni más ni
menos. Está prohibido:

1. Añadir módulos fuera de los seis oficiales.
2. Inventar funcionalidades.
3. Añadir herramientas no solicitadas.
4. Crear secciones adicionales.
5. Añadir botones o menús con funciones inventadas.
6. Ampliar el alcance por iniciativa propia.
7. Sustituir funcionalidades previstas por otras sin autorización.
8. Inventar datos de empresas, clientes, oportunidades o auditorías.
9. Simular búsquedas, análisis o integraciones que no estén implementados.
10. Añadir APIs, servicios externos o dependencias de pago sin aprobación.
11. Eliminar requisitos establecidos.
12. Cambiar la finalidad de DealHunter.
13. Construir funcionalidades de una fase posterior durante una anterior.

Hay libertad para decidir **cómo** se implementa un requisito aprobado, no
para decidir **qué** producto se construye.

- Una mejora interesante se anota en `PROJECT_CONTEXT.md`, sección 11
  («MEJORAS PENDIENTES DE APROBACIÓN»), y no se implementa.
- Si falta información que afecte al alcance, al coste, a la seguridad o al
  comportamiento del producto, detente y pregunta.

## Mantenimiento de la documentación

Al terminar cada tarea, antes de darla por cerrada:

| Documento            | Cuándo se actualiza                                                        |
| -------------------- | -------------------------------------------------------------------------- |
| `PROJECT_CONTEXT.md` | Siempre: estado, última tarea, próxima tarea autorizada, problemas, decisiones |
| `ROADMAP.md`         | Al completar una tarea o cambiar el estado de una fase                     |
| `CHANGELOG.md`       | En cada cambio relevante del proyecto                                      |
| `ARCHITECTURE.md`    | Al tomar o cambiar una decisión técnica, o al cambiar la estructura        |
| `README.md`          | Al cambiar requisitos, instalación, configuración o comandos               |
| `CLAUDE.md`          | Al cambiar una regla permanente, la estructura o los comandos              |

- Cada dato vive en un solo documento. Los demás lo enlazan en lugar de
  copiarlo, para evitar contradicciones.
- No se marca una fase como COMPLETADA sin haber comprobado todos sus criterios.
- No se documenta un comando o un proceso que no se haya ejecutado y verificado.
- No se afirma que algo funciona sin haberlo probado.
- Antes de modificar un archivo, comprueba que existe y léelo. No sobrescribas
  información sin verificarla.

## Uso eficiente de Claude

- Lee solo los archivos necesarios para la tarea. No recorras el repositorio
  entero.
- No repitas explicaciones que ya estén documentadas: enlázalas.
- Haz modificaciones puntuales en lugar de reescribir archivos completos.
- No lances agentes en paralelo ni pruebas que no aporten valor a la fase
  actual.
- La eficiencia nunca justifica perder calidad, seguridad o precisión.
