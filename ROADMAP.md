# ROADMAP.md — Las doce fases oficiales de DealHunter

> El orden es estricto. No se empieza una fase sin haber terminado, verificado
> y documentado la anterior, y sin autorización del propietario.
>
> Última actualización: 2026-11-13.

**Estados posibles:** PENDIENTE · EN PROGRESO · COMPLETADA.
Una fase solo pasa a COMPLETADA cuando todos sus criterios se han comprobado.

| Fase | Nombre                                 | Estado      |
| ---- | -------------------------------------- | ----------- |
| 1    | Arquitectura y preparación             | COMPLETADA  |
| 2    | Diseño visual y estructura principal   | EN PROGRESO |
| 3    | Base de datos y autenticación          | PENDIENTE   |
| 4    | Lead Hunter                            | PENDIENTE   |
| 5    | Business Intelligence                  | PENDIENTE   |
| 6    | Sales Command                          | PENDIENTE   |
| 7    | Proposal Engine                        | PENDIENTE   |
| 8    | Demo Factory                           | PENDIENTE   |
| 9    | Revenue Analytics                      | PENDIENTE   |
| 10   | Automatizaciones                       | PENDIENTE   |
| 11   | Administración global                  | PENDIENTE   |
| 12   | Seguridad, pruebas y despliegue        | PENDIENTE   |

## PROPUESTA DE REORGANIZACIÓN · PENDIENTE DE APROBACIÓN

> Documentada el 2026-11-13 a petición del propietario. **Todavía no es el
> roadmap oficial:** las fases de este documento no cambian hasta que el
> propietario la apruebe.

**Motivo.** El propietario ha decidido priorizar la funcionalidad real sobre
la estética (`PROJECT_CONTEXT.md`, apartado 3.6).

| N.º | Fase propuesta                                        | Cambio respecto al roadmap actual                                              |
| --- | ----------------------------------------------------- | ------------------------------------------------------------------------------ |
| 1   | Arquitectura y preparación                            | Ninguno. COMPLETADA                                                            |
| 2   | Estructura visual provisional                         | Se cierra tal como está. Su acabado pasa a la fase 13                          |
| 3   | Infraestructura mínima                                | Sustituye a «Base de datos y autenticación». Solo lo que Lead Hunter necesita  |
| 4   | Lead Hunter                                           | Mismo lugar. Alcance ampliado. En dos etapas (ver ajuste 1)                    |
| 5   | Business Intelligence                                 | Mismo lugar                                                                    |
| 6   | Sales Command                                         | Mismo lugar                                                                    |
| 7   | Proposal Engine                                       | Mismo lugar                                                                    |
| 8   | Demo Factory                                          | Mismo lugar                                                                    |
| 9   | Revenue Analytics                                     | Mismo lugar                                                                    |
| 10  | Automatizaciones                                      | Mismo lugar                                                                    |
| 11  | Administración global                                 | Mismo lugar. Asume los roles y permisos completos                              |
| 12  | Seguridad, pruebas y despliegue                       | Queda como auditoría y publicación finales (ver ajustes 2 y 3)                 |
| 13  | Identidad visual definitiva y optimización de experiencia | Nueva. Recoge todo el acabado visual aplazado                              |

El orden pedido por el propietario coincide con el del roadmap actual desde
la fase 3. Los cambios reales son tres: cerrar la fase 2 como provisional,
reducir la fase 3 a lo imprescindible y añadir la fase 13.

**Ajustes técnicos que la propuesta incorpora**

1. **Lead Hunter en dos etapas.** Detectar webs antiguas o con problemas de
   móvil, rendimiento o SEO exige el motor de análisis, que pertenece a
   Business Intelligence. Etapa 4A: búsqueda, datos, detección de negocios
   sin web conocida, guardado, filtros, duplicados e historial. Etapa 4B:
   esas cuatro señales, en cuanto exista el motor de la fase 5.
2. **Seguridad mínima desde la fase 3.** Acceso privado, secretos en el
   servidor y permisos en la base de datos no pueden esperar a la fase 12: en
   cuanto haya datos de contacto reales deben estar protegidos.
3. **Uso real antes de la fase 12.** Para que el propietario pueda usar Lead
   Hunter hay que decidir pronto dónde se ejecuta: en un ordenador o
   publicada de forma privada.
4. **Límites y registro de consumo con la primera integración**, no en la
   fase de administración.

---

El alcance funcional de cada módulo está en `PROJECT_CONTEXT.md`, sección 2.
Las tareas de las fases 2 a 12 se detallarán al comenzar cada una, sin salirse
de ese alcance.

---

## Fase 1 · Arquitectura y preparación

**Estado:** COMPLETADA. Criterios verificados el 2026-11-13. El propietario
dio la fase por buena y autorizó la Fase 2.

**Objetivo.** Definición técnica, estructura inicial y documentación.

**Alcance.** Arquitectura, proyecto base y documentación permanente. No
incluye la interfaz definitiva, ningún módulo, backend ni servicios externos.

**Tareas**

- [x] Comprobar el estado inicial del repositorio.
- [x] Definir la arquitectura técnica y registrar las decisiones.
- [x] Inicializar el proyecto con React, Vite y TypeScript.
- [x] Configurar Tailwind CSS tras comprobar la compatibilidad de versiones.
- [x] Crear la estructura de carpetas preparada para los seis módulos.
- [x] Redactar los seis documentos obligatorios.
- [x] Verificar los criterios de finalización.
- [x] Actualizar el estado del proyecto con el resultado real.

**Criterios de finalización**

- [x] La estructura inicial es correcta y coincide con `ARCHITECTURE.md`.
      Comprobado: todos los archivos versionados figuran en su sección 3 y
      hay exactamente seis carpetas de módulos.
- [x] Existen los seis documentos obligatorios.
- [x] No hay contradicciones entre los documentos. Comprobado: versiones,
      estado de la fase, decisiones y referencias entre secciones. Se
      corrigió una discrepancia sobre qué librerías requieren aprobación.
- [x] Las dependencias elegidas son compatibles entre sí. Comprobado: sin
      conflictos entre dependencias y sin vulnerabilidades conocidas en
      `npm audit`.
- [x] El proyecto se instala desde cero y se ejecuta. Comprobado en un clon
      limpio: `npm install`, `npm run typecheck`, `npm run lint`,
      `npm run build`, `npm run dev` y `npm run preview`, con la página
      abierta en un navegador en ancho de escritorio y de móvil, sin errores.
- [x] No se han introducido servicios externos ni costes. Comprobado: la
      aplicación no hace ninguna petición a otros dominios y todas las
      dependencias tienen licencia de código abierto.
- [x] No se ha implementado ninguna funcionalidad fuera del alcance.
      Comprobado: el único código es el arranque y una pantalla provisional
      sin elementos interactivos.

---

## Fase 2 · Diseño visual y estructura principal

**Estado:** EN PROGRESO. Implementada y verificada técnicamente el
2026-11-13. Solo falta el último criterio: la validación del propietario.

**Objetivo.** Construcción de la interfaz general de DealHunter.

**Alcance.** Identidad visual y estructura de navegación de
`PROJECT_CONTEXT.md`, apartados 3.1 y 3.2. No incluye la funcionalidad de
ningún módulo ni datos reales.

**Tareas**

- [x] Cerrar los tokens de diseño: paleta, tipografía y movimiento.
- [x] Construir el sistema de componentes reutilizables.
- [x] Construir la barra lateral de navegación y la barra superior.
- [x] Construir el dashboard principal: resumen de actividad, widgets de
      métricas, accesos a los seis módulos y panel de actividad.
- [x] Preparar la búsqueda global, las notificaciones y el perfil de usuario
      a nivel de interfaz, sin funcionalidad.
- [x] Crear la página inicial de cada uno de los seis módulos.
- [x] Adaptar todas las vistas a móvil, tablet, portátil, escritorio y
      pantallas grandes.
- [x] Verificar y documentar el resultado.

**Criterios de finalización**

- [x] La interfaz refleja la dirección artística aprobada. Revisado sobre
      capturas reales de todas las secciones: tema oscuro, negro profundo,
      grafito y acento verde esmeralda.
- [x] La navegación da acceso a los seis módulos y a nada más. Comprobado:
      la barra lateral y el menú móvil contienen el dashboard y los seis
      módulos, en su orden, y la sección activa queda marcada.
- [x] Funciona correctamente en escritorio y móvil. Comprobado en cinco
      anchos (390, 768, 1280, 1920 y 2560 px) para las siete secciones: sin
      desbordamiento horizontal ni texto cortado.
- [x] No aparece ningún dato ficticio. Comprobado: todas las métricas,
      gráficos y listas muestran su estado vacío.
- [x] Ningún elemento de la interfaz tiene una función inventada.
      Comprobado: solo existen cinco botones, todos con comportamiento real
      (abrir y cerrar el menú móvil y los tres paneles de la barra superior),
      y ningún campo ni formulario.
- [ ] El propietario valida el resultado.

**Verificación técnica realizada (2026-11-13)**

Sobre la compilación de producción, en un navegador real:

| Comprobación                                                        | Resultado |
| ------------------------------------------------------------------- | --------- |
| `npm run typecheck`, `npm run lint` y `npm run build`               | Sin errores |
| Las 7 secciones en 5 anchos: título, sección activa, pestaña        | 105 de 105 |
| Sin desbordamiento horizontal ni texto cortado                      | 70 de 70 |
| Sin errores ni avisos de consola                                    | 38 de 38 |
| Tipografía Geist cargada desde la propia aplicación                 | 35 de 35 |
| Navegación: barra lateral, accesos, botón «atrás», dirección inexistente | 18 de 18 |
| Teclado: salto al contenido y foco visible                          | 3 de 3 |
| Paneles de la barra superior, en escritorio y móvil                 | 30 de 30 |
| Menú móvil: abrir, navegar y cerrar de cuatro formas                | 8 de 8 |
| Alcance: solo los controles previstos; nada guardado en el navegador | 3 de 3 |
| Sin peticiones a dominios externos                                  | 2 de 2 |
| **Total**                                                           | **312 de 312** |

**No incluido en esta fase**

Base de datos, autenticación, usuarios, permisos, integraciones, búsqueda
real, análisis, IA, generación de demostraciones, presupuestos, CRM,
analítica, automatizaciones y administración global.

---

## Fase 3 · Base de datos y autenticación

**Estado:** PENDIENTE

**Objetivo.** Configuración del backend, base de datos, usuarios y permisos.

**Alcance.** Backend, esquema de datos base, inicio de sesión y permisos. No
incluye la lógica de los módulos.

**Requisito previo.** El propietario confirma el proveedor de backend y crea
la cuenta. Claude no registra ni contrata servicios.

**Tareas**

- Confirmar el proveedor de backend y dónde se ejecuta la lógica de servidor.
- Diseñar el esquema de datos base y versionarlo como migraciones.
- Configurar la autenticación y el acceso por invitación.
- Definir con el propietario los roles y aplicar los permisos.
- Preparar la configuración de entornos y la validación de datos.
- Preparar el registro de actividad, errores y consumo.

**Criterios de finalización**

- Un usuario autorizado puede iniciar y cerrar sesión.
- Un usuario sin permiso no puede leer ni modificar datos, comprobado contra
  la base de datos y no solo en la interfaz.
- Ningún secreto está en el repositorio ni en el código del navegador.
- El esquema está versionado y documentado.

---

## Fase 4 · Lead Hunter

**Estado:** PENDIENTE

**Objetivo.** Desarrollo del sistema de búsqueda y descubrimiento de negocios.

**Alcance.** Módulo A completo.

**Requisito previo.** El propietario aprueba las fuentes de datos y su coste,
y se verifica la base legal del tratamiento de los datos.

**Tareas**

- Evaluar fuentes legítimas de datos y presentar opciones y costes.
- Búsqueda por localidad, provincia, país y sector.
- Obtención de los datos de contacto públicos disponibles.
- Detección de negocios sin página web o con webs mejorables.
- Identificación de posibles necesidades comerciales.
- Eliminación de duplicados, filtros avanzados y búsquedas guardadas.

**Criterios de finalización**

- Todas las funciones del Módulo A funcionan con datos reales.
- Se respetan las condiciones de uso de cada fuente.
- Cada dato guarda su origen y su fecha.
- No se generan registros duplicados.
- El consumo de cada fuente queda registrado y limitado.

---

## Fase 5 · Business Intelligence

**Estado:** PENDIENTE

**Objetivo.** Desarrollo de los análisis y puntuaciones comerciales.

**Alcance.** Módulo B completo.

**Tareas**

- Análisis de diseño y calidad, experiencia móvil, velocidad y rendimiento,
  SEO técnico básico y accesibilidad.
- Análisis de presencia digital y de posibles necesidades de automatización.
- Comparación con competidores cuando existan datos suficientes.
- Ficha de inteligencia comercial.
- Puntuación de oportunidad de 0 a 100 con reglas transparentes.
- Explicación de los factores de cada puntuación.

**Criterios de finalización**

- Todas las funciones del Módulo B funcionan con datos reales.
- La puntuación es reproducible y sus reglas tienen pruebas automáticas.
- Cada puntuación muestra los factores que la justifican.
- Las estimaciones se distinguen siempre de los datos verificados.
- Un análisis ya hecho no se repite sin necesidad.

---

## Fase 6 · Sales Command

**Estado:** PENDIENTE

**Objetivo.** Desarrollo del CRM.

**Alcance.** Módulo E completo.

**Tareas**

- Gestión de empresas, contactos y oportunidades.
- Estados de venta.
- Notas, tareas y seguimientos.
- Historial de interacciones y próximas acciones.
- Identificación de clientes ganados y perdidos.

**Criterios de finalización**

- Todas las funciones del Módulo E funcionan con datos reales.
- Los negocios descubiertos en Lead Hunter pueden gestionarse en el CRM sin
  duplicar datos.
- Los permisos se respetan en todas las operaciones.

---

## Fase 7 · Proposal Engine

**Estado:** PENDIENTE

**Objetivo.** Desarrollo de presupuestos y propuestas.

**Alcance.** Módulo D completo.

**Tareas**

- Presupuestos personalizados con desglose de funcionalidades.
- Recomendación de servicios adecuados.
- Cálculo de precios y rangos orientativos según mercado y complejidad.
- Generación de documentos profesionales.
- Preparación de mensajes comerciales personalizados.
- Gestión de propuestas enviadas.

**Criterios de finalización**

- Todas las funciones del Módulo D funcionan con datos reales.
- El cálculo de precios tiene pruebas automáticas.
- Los precios estimados se identifican siempre como orientativos.
- Ningún mensaje se envía de forma automática.

---

## Fase 8 · Demo Factory

**Estado:** PENDIENTE

**Objetivo.** Desarrollo del generador de demostraciones web.

**Alcance.** Módulo C completo.

**Tareas**

- Análisis de la identidad visual del negocio y recopilación de información
  pública.
- Propuestas de diseño y selección de plantillas.
- Generación de páginas personalizadas con vista previa.
- Edición posterior.
- Publicación de demostraciones privadas mediante enlaces.

**Criterios de finalización**

- Todas las funciones del Módulo C funcionan con datos reales.
- Toda demostración muestra de forma visible que es una propuesta no oficial.
- Las demostraciones no son indexables y solo se accede a ellas por su enlace.

---

## Fase 9 · Revenue Analytics

**Estado:** PENDIENTE

**Objetivo.** Desarrollo de métricas y análisis comerciales.

**Alcance.** Módulo F completo.

**Tareas**

- Métricas de oportunidades descubiertas, negocios analizados, demostraciones
  creadas, presupuestos preparados y clientes convertidos.
- Ingresos, costes y rentabilidad.
- Conversiones por sector y rendimiento de búsquedas.
- Gráficos interactivos.

**Criterios de finalización**

- Todas las métricas del Módulo F se calculan con datos reales de los demás
  módulos.
- Los cálculos tienen pruebas automáticas.
- Ninguna métrica muestra datos inventados.

---

## Fase 10 · Automatizaciones

**Estado:** PENDIENTE

**Objetivo.** Implementación de automatizaciones aprobadas.

**Alcance.** Solo las automatizaciones que el propietario apruebe.

**Requisito previo.** El catálogo de automatizaciones todavía no está
definido. Debe definirlo y aprobarlo el propietario antes de empezar. Las que
impliquen comunicaciones comerciales exigen verificar antes su base legal.

**Tareas**

- Acordar con el propietario el catálogo de automatizaciones.
- Implementar cada automatización aprobada, con límites de uso y registro.

**Criterios de finalización**

- Solo existen las automatizaciones aprobadas.
- Cada una puede desactivarse y deja registro de su actividad.
- Ninguna envía comunicaciones sin base legal verificada y autorización.

---

## Fase 11 · Administración global

**Estado:** PENDIENTE

**Objetivo.** Construcción del sistema de administración de la plataforma.

**Alcance.** Las doce áreas de `PROJECT_CONTEXT.md`, apartado 3.3.

**Tareas**

- Pantallas de administración para: configuración general, usuarios y
  permisos, módulos activos, integraciones, fuentes de datos, parámetros de
  puntuación, plantillas, servicios y tarifas, límites de uso,
  automatizaciones, registros de actividad y configuración comercial.

**Criterios de finalización**

- Las doce áreas pueden administrarse sin tocar el código.
- Solo el rol de administración puede acceder.
- Los cambios de configuración quedan registrados.

---

## Fase 12 · Seguridad, pruebas y despliegue

**Estado:** PENDIENTE

**Objetivo.** Auditoría, optimización, pruebas y publicación.

**Alcance.** Toda la plataforma.

**Requisito previo.** El propietario confirma el proveedor de alojamiento y
sus condiciones de uso.

**Tareas**

- Auditoría de seguridad y de permisos.
- Revisión del cumplimiento del RGPD y de la normativa aplicable.
- Pruebas de los flujos principales de extremo a extremo.
- Optimización del rendimiento.
- Publicación en producción.

**Criterios de finalización**

- La auditoría no deja problemas graves abiertos.
- Las pruebas de los flujos principales pasan.
- La aplicación está publicada y es accesible solo para usuarios autorizados.
- La documentación refleja el estado final.
