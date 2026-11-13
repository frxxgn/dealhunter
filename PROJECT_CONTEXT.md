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

Decisiones confirmadas por el propietario al iniciar la Fase 2:

- Tema visual exclusivamente oscuro.
- Toda la interfaz en español, sin mezclar inglés. Se mantienen los nombres
  propios: «DealHunter», «Dashboard» y los de los seis módulos.
- Logotipo provisional: el nombre «DealHunter» en texto. No se inventa un
  símbolo ni un logotipo definitivo.
- El verde esmeralda se usa de forma estratégica: elementos importantes,
  estados y acciones principales.
- Ningún botón decorativo que aparente una acción inexistente.

### 3.2 Estructura visual (Fase 2)

Barra lateral de navegación; dashboard principal; barra superior; búsqueda
global; notificaciones; perfil de usuario; panel de actividad; widgets de
métricas; vistas adaptables a escritorio y móvil.

Concreción aprobada para la Fase 2:

- **Barra lateral:** el nombre DealHunter, Dashboard y los seis módulos en
  este orden: Lead Hunter, Business Intelligence, Demo Factory, Proposal
  Engine, Sales Command y Revenue Analytics. Ninguna sección más.
- **Barra superior:** únicamente el título de la sección actual, la búsqueda
  global, las notificaciones y el perfil de usuario.
- **Dashboard:** resumen de actividad, widgets de métricas, panel de
  actividad y accesos a los seis módulos.
- **Módulos:** una página inicial por módulo, coherente con su finalidad.

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

| Campo                    | Valor                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| Fase actual              | Fase 2 · Diseño visual y estructura principal                                                 |
| Estado de la fase        | EN PROGRESO. Implementada y verificada técnicamente el 2026-11-13; falta la validación del propietario |
| Última tarea completada  | Interfaz principal construida, verificada, documentada y subida a `main`                      |
| Próxima tarea autorizada | **Ninguna.** Pendiente de que el propietario valide la Fase 2. La Fase 3 requiere autorización expresa |

Fases anteriores: Fase 1 COMPLETADA (2026-11-13).

## 5. Arquitectura actual (resumen)

Aplicación de una sola página (SPA) con React, Vite y TypeScript, organizada
como **monolito modular**:

- `src/app/`: enrutador, estructura principal (barra lateral, barra superior
  y menú móvil), navegación, dashboard y páginas de error.
- `src/modules/`: una carpeta por módulo oficial, con su página inicial. Cada
  módulo se carga bajo demanda.
- `src/shared/`: sistema de componentes, hooks y utilidades comunes.
- `src/config/`: registro de módulos, secciones navegables y métricas.
- `src/services/`: reservado para las integraciones; vacío.

Todavía no existe backend. Detalle completo y motivos: `ARCHITECTURE.md`.

## 6. Tecnologías elegidas

Instaladas y verificadas:

| Tecnología                 | Versión | Uso                                  | Desde  |
| -------------------------- | ------- | ------------------------------------ | ------ |
| React / React DOM          | 19.3.1  | Interfaz                             | Fase 1 |
| Vite                       | 8.3.8   | Servidor de desarrollo y compilación | Fase 1 |
| @vitejs/plugin-react       | 6.3.0   | Integración de React en Vite         | Fase 1 |
| TypeScript                 | 7.0.2   | Tipado estático (modo estricto)      | Fase 1 |
| Tailwind CSS               | 4.3.5   | Estilos y tokens de diseño           | Fase 1 |
| @tailwindcss/vite          | 4.3.5   | Integración de Tailwind en Vite      | Fase 1 |
| oxlint                     | 1.93.0  | Análisis estático (linter)           | Fase 1 |
| react-router               | 8.5.1   | Navegación entre secciones           | Fase 2 |
| lucide-react               | 1.72.0  | Iconografía                          | Fase 2 |
| @fontsource-variable/geist | 5.3.0   | Tipografía Geist, alojada con la app | Fase 2 |

Las tres de la Fase 2 son gratuitas, de código abierto y fueron aprobadas por
el propietario antes de instalarlas.

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
- D-009 · React Router como enrutador.
- D-010 · lucide-react para la iconografía.
- D-011 · Tipografía Geist alojada con la aplicación.
- D-012 · Tema exclusivamente oscuro y logotipo textual provisional.
- D-013 · Los controles sin funcionalidad abren un panel que explica su
  estado real.
- D-014 · Menú móvil y paneles flotantes propios, sin librería de primitivas.
- D-015 · Escala global de la interfaz en pantallas grandes.
- D-016 · La rama principal es `main`; nunca se fuerza un push.

Decisiones de diseño de la Fase 2 que el propietario puede revisar al validar:

- Los widgets de métricas del dashboard muestran seis de las métricas
  oficiales del Módulo F: oportunidades descubiertas, negocios analizados,
  demostraciones creadas, presupuestos preparados, clientes convertidos e
  ingresos.
- Los contenedores de la página inicial de cada módulo se han nombrado a
  partir de las funciones oficiales de la sección 2, sin añadir ninguna.
- Cada página de módulo indica «En preparación» y la fase en la que se
  desarrollará.

## 8. Funcionalidades implementadas

**Ninguna funcionalidad de negocio.** Existe la interfaz principal, solo como
estructura visual y con estados vacíos:

- Barra lateral con el nombre DealHunter, el Dashboard y los seis módulos, en
  su orden, con indicación de la sección activa.
- Barra superior con el título de la sección, la búsqueda global, las
  notificaciones y el perfil de usuario.
- Menú de navegación para móvil y tablet.
- Dashboard con resumen de actividad, seis widgets de métricas, accesos a los
  seis módulos y panel de actividad.
- Página inicial de cada uno de los seis módulos.
- Navegación con una dirección propia por sección, página para direcciones
  inexistentes y barrera de errores.
- Diseño adaptado a móvil, tablet, portátil, escritorio y pantallas grandes.

Lo que **no** hace todavía:

- La búsqueda global, las notificaciones y el perfil de usuario no tienen
  funcionalidad: cada control abre un panel que lo explica.
- No hay ningún dato: todas las métricas, gráficos y listas están vacíos.
- No hay backend, base de datos, autenticación ni servicios externos.

Componentes y archivos creados: `CHANGELOG.md`, versión 0.2.0.

## 9. Funcionalidades pendientes

- Toda la funcionalidad de los seis módulos (sección 2): Fases 4 a 9.
- Backend, base de datos, usuarios y permisos: Fase 3.
- Búsqueda global, notificaciones y perfil de usuario reales: cuando existan
  los datos y las cuentas de los que dependen.
- Automatizaciones: Fase 10.
- Administración global (apartado 3.3): Fase 11.
- Auditoría de seguridad, pruebas y despliegue: Fase 12.

## 10. Decisiones pendientes de aprobación del propietario

| N.º | Decisión                                                                               | Recomendación                                                              | Necesaria para        |
| --- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------- |
| 1   | Validar el resultado visual de la Fase 2                                               | Revisar la aplicación o sus capturas                                       | Cerrar la Fase 2      |
| 2   | Confirmar Supabase como backend, su plan y región                                      | Supabase, plan gratuito, región de la UE; la cuenta la crea el propietario | Fase 3                |
| 3   | Dónde se ejecuta la lógica de servidor                                                 | Funciones de Supabase (alternativa: funciones de Vercel)                   | Fase 3                |
| 4   | Modelo de datos multiorganización desde el inicio, para la futura evolución a SaaS     | Sí: evita migrar todos los datos más adelante                              | Fase 3                |
| 5   | Roles de usuario y permisos de cada uno                                                | A definir con el propietario; no se inventan roles                         | Fase 3                |
| 6   | Fuentes de datos de negocios y su coste                                                | Evaluar fuentes legítimas y su coste antes de elegir                       | Fase 4                |
| 7   | Catálogo de automatizaciones                                                           | Lo define y aprueba el propietario                                         | Fase 10               |
| 8   | Alojamiento del frontend: comprobar si el plan gratuito de Vercel admite uso comercial | Verificar condiciones antes de desplegar                                   | Fase 12               |

Resueltas por el propietario en la Fase 2: rama principal (`main`), idioma
(solo español), tema (solo oscuro), logotipo (texto provisional) y tipografía
(Geist).

## 11. MEJORAS PENDIENTES DE APROBACIÓN

Ideas no solicitadas. **No se implementan sin aprobación expresa.**

- **Integración continua.** Ejecutar el linter, la comprobación de tipos y la
  compilación de forma automática en cada subida de código (por ejemplo, con
  GitHub Actions). No se ha configurado porque activa un servicio que puede
  consumir minutos de ejecución.
- **Linter con información de tipos.** Añadir `oxlint-tsgolint` para detectar
  más errores. Es una dependencia de desarrollo gratuita.
- **Pruebas de interfaz en el repositorio.** La Fase 2 se verificó con un
  guion de navegador de un solo uso. Guardarlo como pruebas permanentes
  permitiría repetir esa verificación en cada fase. Requiere añadir
  Playwright, una dependencia de desarrollo gratuita.

No hay ninguna mejora funcional propuesta.

## 12. Problemas conocidos

- **`typescript-eslint` no admite TypeScript 7** (exige una versión inferior a
  6.1). No afecta al proyecto: se usa oxlint, igual que la plantilla oficial
  de Vite.
- **No hay pruebas automatizadas en el repositorio.** Todavía no existe lógica
  de negocio que probar. Ver `ARCHITECTURE.md`, sección 19.
- **El alojamiento deberá devolver `index.html` para cualquier ruta.** En
  local funciona sin configuración; al desplegar (Fase 12) habrá que
  configurarlo en el proveedor.

## 13. Información necesaria para continuar

1. Que el propietario valide la Fase 2 (decisión pendiente n.º 1).
2. Autorización expresa del propietario para iniciar la Fase 3.
3. Para la Fase 3: respuesta a las decisiones n.º 2 a 5 y, si se confirma
   Supabase, que el propietario cree la cuenta y el proyecto. Claude no
   registra ni contrata servicios.

Repositorio: la rama principal es `main`. El propietario autorizó el
2026-11-13 subir el trabajo directamente a `main`, siempre sin forzar.

Comandos de trabajo verificados: `README.md`. Reglas de trabajo: `CLAUDE.md`.
