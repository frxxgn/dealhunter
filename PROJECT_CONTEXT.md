# PROJECT_CONTEXT.md — Contexto y estado de DealHunter

> Memoria permanente del proyecto. Es la fuente de verdad sobre **qué es**
> DealHunter (alcance aprobado por el propietario) y **en qué punto está** el
> desarrollo. Se actualiza al terminar cada tarea.
>
> Última actualización: 2026-11-13.

## 1. Qué es DealHunter

| Campo       | Valor                                                                          |
| ----------- | ------------------------------------------------------------------------------ |
| Nombre      | DealHunter                                                                     |
| Tipo        | Plataforma de inteligencia comercial y gestión de oportunidades empresariales  |
| Propietario | WebNovalius                                                                    |

**Objetivo principal.** Localizar negocios con oportunidades de mejora digital,
analizar su presencia online, identificar necesidades comerciales, generar
demostraciones web personalizadas y facilitar la preparación y gestión de
propuestas comerciales.

**Naturaleza.** Nace como herramienta interna de WebNovalius, con posibilidad
de evolucionar a producto SaaS. No es una herramienta desechable: la
arquitectura debe permitir crecer sin reconstruir el sistema.

**Objetivos comerciales.** Conseguir oportunidades para WebNovalius en:

- Desarrollo de páginas web.
- Rediseño de páginas web existentes.
- Posicionamiento SEO.
- Automatizaciones empresariales.
- Asistentes virtuales con IA.
- Sistemas de gestión empresarial.
- Paneles administrativos.
- Bases de datos.
- Integraciones.
- Aplicaciones web personalizadas.

## 2. Los seis módulos oficiales

La plataforma tiene **exactamente seis** módulos funcionales. No se añaden más.

### Módulo A · Lead Hunter (Fase 4)

Sistema de búsqueda y descubrimiento de negocios.

- Buscar negocios por localidad, provincia, país y sector.
- Descubrir empresas mediante fuentes legítimas.
- Obtener nombre comercial, dirección, página web, teléfono, correo
  empresarial público y redes sociales cuando estén disponibles.
- Detectar negocios que no tengan página web.
- Detectar páginas web antiguas, deficientes o con oportunidades de mejora.
- Identificar posibles necesidades comerciales.
- Eliminar registros duplicados.
- Aplicar filtros avanzados.
- Guardar búsquedas.

### Módulo B · Business Intelligence (Fase 5)

Sistema de análisis e inteligencia comercial.

- Analizar diseño y calidad de páginas web.
- Evaluar experiencia móvil.
- Analizar velocidad y rendimiento.
- Revisar aspectos básicos del SEO técnico.
- Evaluar accesibilidad.
- Analizar presencia digital.
- Detectar posibles necesidades de automatización.
- Comparar negocios con competidores cuando existan datos suficientes.
- Generar una ficha de inteligencia comercial.
- Calcular una puntuación de oportunidad entre 0 y 100.
- Explicar los factores que justifican cada puntuación.

**Condición:** las estimaciones nunca se presentan como datos verificados.

### Módulo C · Demo Factory (Fase 8)

Sistema de generación de demostraciones web personalizadas.

- Analizar la identidad visual del negocio.
- Recopilar información pública disponible.
- Preparar propuestas de diseño.
- Seleccionar plantillas.
- Generar páginas web personalizadas.
- Mostrar vistas previas.
- Permitir edición posterior.
- Publicar demostraciones privadas mediante enlaces.

**Condición:** las demostraciones se identifican claramente como propuestas no
oficiales. Nunca se hacen pasar por la web oficial del negocio.

### Módulo D · Proposal Engine (Fase 7)

Sistema de preparación de presupuestos y propuestas comerciales.

- Preparar presupuestos personalizados.
- Recomendar servicios adecuados.
- Desglosar funcionalidades.
- Calcular precios.
- Proponer rangos orientativos según mercado y complejidad.
- Generar documentos profesionales.
- Preparar mensajes comerciales personalizados.
- Gestionar propuestas enviadas.

**Condición:** los precios estimados se identifican como orientativos, no como
tarifas verificadas del mercado.

### Módulo E · Sales Command (Fase 6)

CRM y gestión comercial.

- Gestionar empresas.
- Gestionar contactos.
- Gestionar oportunidades.
- Controlar estados de venta.
- Añadir notas.
- Crear tareas.
- Gestionar seguimientos.
- Consultar historial de interacciones.
- Registrar próximas acciones.
- Identificar clientes ganados y perdidos.

### Módulo F · Revenue Analytics (Fase 9)

Sistema de análisis de rendimiento comercial y financiero. Métricas previstas:

- Oportunidades descubiertas.
- Negocios analizados.
- Demostraciones creadas.
- Presupuestos preparados.
- Clientes convertidos.
- Ingresos.
- Costes.
- Rentabilidad.
- Conversiones por sector.
- Rendimiento de búsquedas.

## 3. Especificación transversal aprobada

Requisitos del propietario que afectan a toda la plataforma. La respuesta
técnica a cada uno está en `ARCHITECTURE.md`.

### 3.1 Identidad visual

SaaS de alta gama; diseño tecnológico sofisticado; modo oscuro predeterminado;
negro profundo y grafito; verde esmeralda como color de acento; transparencias
sutiles; microanimaciones elegantes; tipografía moderna; tarjetas limpias;
gráficos interactivos; excelente jerarquía visual; diseño responsive.

### 3.2 Estructura visual prevista (se construye en la Fase 2)

Barra lateral de navegación; dashboard principal; barra superior; búsqueda
global; notificaciones; perfil de usuario; panel de actividad; widgets de
métricas; vistas adaptables a escritorio y móvil.

### 3.3 Administración global (se construye en la Fase 11)

El sistema de administración controlará: configuración general; usuarios y
permisos; módulos activos; integraciones; fuentes de datos; parámetros de
puntuación; plantillas; servicios y tarifas; límites de uso; automatizaciones;
registros de actividad; configuración comercial.

### 3.4 Control de costes

Mantener DealHunter lo más económico posible: evitar llamadas innecesarias a
modelos de IA; código convencional para operaciones sencillas; reglas
transparentes para las puntuaciones; evitar procesos duplicados; evitar tareas
externas costosas resolubles internamente; límites de consumo; registro de
errores y de consumo de recursos; no depender constantemente de Claude u otros
modelos; integraciones intercambiables. La IA solo se usa cuando aporta valor
real. No se contratan, activan ni registran servicios externos sin
autorización.

### 3.5 Seguridad y cumplimiento

Criterios desde el principio para: autenticación segura; gestión de permisos;
protección de credenciales; variables de entorno; validación de entradas;
control de acceso; protección de información empresarial; gestión de errores;
prevención de accesos no autorizados; protección de datos; cumplimiento del
RGPD y normativa aplicable.

Las búsquedas y recopilaciones de información respetarán las condiciones de
uso de las fuentes, la legislación y las limitaciones de acceso. No se
implementa scraping prohibido ni comunicaciones comerciales automáticas sin
verificar antes la base legal y contar con autorización.

## 4. Estado actual

| Campo                    | Valor                                                                    |
| ------------------------ | ------------------------------------------------------------------------ |
| Fase actual              | Fase 1 · Arquitectura y preparación                                      |
| Estado de la fase        | COMPLETADA. Criterios verificados el 2026-11-13 (detalle en `ROADMAP.md`) |
| Última tarea completada  | Verificación de la Fase 1 y actualización de la documentación            |
| Próxima tarea autorizada | **Ninguna.** La Fase 2 requiere autorización expresa del propietario     |

## 5. Arquitectura actual (resumen)

Aplicación de una sola página (SPA) con React, Vite y TypeScript, organizada
como **monolito modular**: una carpeta por cada módulo oficial en
`src/modules/`, código común en `src/shared/`, integraciones desacopladas en
`src/services/` y configuración en `src/config/`. Todavía no existe backend.

Detalle completo, estructura de carpetas y motivos: `ARCHITECTURE.md`.

## 6. Tecnologías elegidas

Instaladas y verificadas en la Fase 1:

| Tecnología           | Versión | Uso                                  |
| -------------------- | ------- | ------------------------------------ |
| React / React DOM    | 19.3.1  | Interfaz                             |
| Vite                 | 8.3.8   | Servidor de desarrollo y compilación |
| @vitejs/plugin-react | 6.3.0   | Integración de React en Vite         |
| TypeScript           | 7.0.2   | Tipado estático (modo estricto)      |
| Tailwind CSS         | 4.3.5   | Estilos y tokens de diseño           |
| @tailwindcss/vite    | 4.3.5   | Integración de Tailwind en Vite      |
| oxlint               | 1.93.0  | Análisis estático (linter)           |

Entorno verificado: Node.js 22.23.4 y npm 10.9.9.

Candidatas, **no instaladas ni contratadas**: Supabase (autenticación, base de
datos, almacenamiento; Fase 3) y Vercel (despliegue del frontend; Fase 12).

## 7. Decisiones tomadas

Registro completo con motivos en `ARCHITECTURE.md`, sección 21. Resumen:

- D-001 · SPA con React + Vite (sin Next.js).
- D-002 · TypeScript en modo estricto.
- D-003 · Tailwind CSS 4 con tokens de diseño definidos en CSS.
- D-004 · oxlint como linter, en lugar de ESLint.
- D-005 · Monolito modular: una carpeta por módulo oficial, sin microservicios.
- D-006 · npm como gestor de paquetes.
- D-007 · Alias de importación `@/` hacia `src/`.
- D-008 · Documentación e interfaz en español; identificadores de código en
  inglés.

## 8. Funcionalidades implementadas

**Ninguna.** No hay ningún módulo, pantalla definitiva, backend, base de
datos, autenticación ni integración. Solo existe la base técnica y una
pantalla provisional que comprueba que React, TypeScript y Tailwind funcionan.

## 9. Funcionalidades pendientes

Todas las de la sección 2 y los apartados 3.2 y 3.3, repartidas en las Fases 2
a 12 de `ROADMAP.md`.

## 10. Decisiones pendientes de aprobación del propietario

Ninguna bloquea la Fase 1. Cada una indica cuándo hace falta.

| N.º | Decisión                                                                                                           | Recomendación                                                         | Necesaria para |
| --- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | -------------- |
| 1   | Rama principal del repositorio: estaba vacío y no existe `main`                                                    | Crear `main` a partir del trabajo de la Fase 1                        | Fase 2         |
| 2   | Idioma de la interfaz y si hará falta multiidioma                                                                  | Solo español al inicio                                                | Fase 2         |
| 3   | ¿Habrá modo claro además del oscuro predeterminado?                                                                | Solo modo oscuro al inicio                                            | Fase 2         |
| 4   | Logotipo y recursos de marca de DealHunter, si existen                                                             | Si no existen, usar el nombre en texto                                | Fase 2         |
| 5   | Tipografía de la interfaz (forma parte de la identidad visual)                                                     | Se propondrán opciones en la Fase 2, alojadas con la propia aplicación | Fase 2         |
| 6   | Confirmar Supabase como backend, su plan y región                                                                  | Supabase, plan gratuito, región de la UE; la cuenta la crea el propietario | Fase 3    |
| 7   | Dónde se ejecuta la lógica de servidor                                                                             | Funciones de Supabase (alternativa: funciones de Vercel)              | Fase 3         |
| 8   | Modelo de datos multiorganización desde el inicio, para la futura evolución a SaaS                                 | Sí: evita migrar todos los datos más adelante                         | Fase 3         |
| 9   | Roles de usuario y permisos de cada uno                                                                            | A definir con el propietario; no se inventan roles                    | Fase 3         |
| 10  | Fuentes de datos de negocios y su coste                                                                            | Evaluar fuentes legítimas y su coste antes de elegir                  | Fase 4         |
| 11  | Catálogo de automatizaciones                                                                                       | Lo define y aprueba el propietario                                    | Fase 10        |
| 12  | Alojamiento del frontend: comprobar si el plan gratuito de Vercel admite uso comercial                             | Verificar condiciones antes de desplegar                              | Fase 12        |

## 11. MEJORAS PENDIENTES DE APROBACIÓN

Ideas no solicitadas. **No se implementan sin aprobación expresa.**

- **Integración continua.** Ejecutar el linter, la comprobación de tipos y la
  compilación de forma automática en cada subida de código (por ejemplo, con
  GitHub Actions). No se ha configurado porque activa un servicio que puede
  consumir minutos de ejecución.
- **Linter con información de tipos.** Añadir `oxlint-tsgolint` para detectar
  más errores. Es una dependencia de desarrollo gratuita.

No hay ninguna mejora funcional propuesta.

## 12. Problemas conocidos

- **`typescript-eslint` no admite TypeScript 7** (exige una versión inferior a
  6.1). No afecta al proyecto: se usa oxlint, igual que la plantilla oficial
  de Vite.
- **El repositorio no tiene rama `main`.** Estaba vacío y el trabajo se ha
  hecho en la rama `claude/busy-davinci-yfa32d`. Ver decisión pendiente n.º 1.
- **No hay pruebas automatizadas.** Es intencionado: en la Fase 1 no existe
  lógica de negocio que probar. Ver `ARCHITECTURE.md`, sección 19.

## 13. Información necesaria para continuar

Para empezar la Fase 2 hace falta:

1. Autorización expresa del propietario para iniciar la Fase 2.
2. Respuesta a las decisiones pendientes n.º 1 a 5 de la sección 10.

Comandos de trabajo verificados: `README.md`. Reglas de trabajo: `CLAUDE.md`.
