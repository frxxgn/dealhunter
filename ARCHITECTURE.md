# ARCHITECTURE.md — Arquitectura de DealHunter

> Fuente de verdad de las decisiones técnicas. Cada apartado distingue lo que
> **existe hoy** de lo que está **previsto** para una fase posterior.
>
> Última actualización: 2026-11-13 (análisis previo a Lead Hunter).

## 1. Principios

1. **Monolito modular.** Una sola aplicación y una sola base de datos,
   divididas en módulos con fronteras claras. Sin microservicios mientras no
   exista una necesidad real.
2. **Seis módulos, ni uno más.** La estructura del código refleja los seis
   módulos oficiales de `PROJECT_CONTEXT.md`.
3. **Integraciones intercambiables.** Ningún módulo depende directamente de un
   proveedor externo: depende de una interfaz propia de DealHunter.
4. **Coste mínimo por diseño.** Código convencional y reglas transparentes
   antes que IA; caché antes que repetir una llamada; límites antes que
   consumo libre.
5. **Seguridad en el servidor.** El navegador no guarda secretos y no es quien
   decide los permisos: los aplica la base de datos.
6. **Configuración como datos.** Lo que el propietario quiere administrar
   (puntuaciones, tarifas, límites, módulos activos) se guarda como datos, no
   escrito en el código.
7. **Decisiones reversibles.** Lo que todavía no puede decidirse con
   información suficiente se aplaza y se registra como propuesta.

## 2. Tecnologías

### Instaladas

| Tecnología           | Versión | Motivo                                                                    |
| -------------------- | ------- | ------------------------------------------------------------------------- |
| React / React DOM    | 19.3.1  | Preferencia del propietario; ecosistema maduro de componentes             |
| Vite                 | 8.3.8   | Preferencia del propietario; compilación rápida y configuración mínima    |
| @vitejs/plugin-react | 6.3.0   | Integración oficial de React en Vite                                      |
| TypeScript           | 7.0.2   | Tipado estricto; es la versión que usa la plantilla oficial de Vite       |
| Tailwind CSS         | 4.3.5   | Preferencia del propietario; tokens de diseño definidos en CSS            |
| @tailwindcss/vite    | 4.3.5   | Integración oficial de Tailwind 4 en Vite (admite Vite 8)                 |
| oxlint               | 1.93.0  | Linter de la plantilla oficial de Vite; compatible con TypeScript 7       |
| React Router         | 8.5.1   | Una dirección propia por sección y carga de cada módulo bajo demanda      |
| lucide-react         | 1.72.0  | Iconografía consistente                                                   |
| Geist (Fontsource)   | 5.3.0   | Tipografía alojada con la aplicación, sin peticiones a terceros           |

Tipos de desarrollo: `@types/react`, `@types/react-dom` y `@types/node` (rama
22, igual que la versión de Node.js del proyecto).

Requisito de entorno: Node.js 22.12 o superior (lo exigen Vite 8 y oxlint).
Verificado con Node.js 22.23.4 y npm 10.9.9.

### Candidatas (no instaladas, no contratadas)

| Tecnología | Uso previsto                                   | Fase | Estado                        |
| ---------- | ---------------------------------------------- | ---- | ----------------------------- |
| Supabase   | Base de datos, acceso privado y funciones de servidor | 3 | Aprobada (plan gratuito, región UE). La cuenta la crea el propietario |
| Alojamiento | Publicación privada de la aplicación          | 3    | Por decidir. Cloudflare Pages en evaluación (sección 18) |

Las librerías propuestas para fases posteriores están en la sección 21.

## 3. Estructura de carpetas

### Existe hoy

```
dealhunter/
├── CLAUDE.md               Instrucciones permanentes para Claude Code
├── PROJECT_CONTEXT.md      Alcance aprobado y estado del proyecto
├── ROADMAP.md              Las doce fases oficiales
├── ARCHITECTURE.md         Este documento
├── CHANGELOG.md            Registro de cambios
├── README.md               Instalación y ejecución
├── index.html              Punto de entrada HTML
├── package.json            Dependencias y comandos
├── package-lock.json       Versiones exactas instaladas
├── vite.config.ts          Configuración de Vite (React + Tailwind + alias)
├── tsconfig.json           Raíz de la configuración de TypeScript
├── tsconfig.app.json       TypeScript para el código de la aplicación
├── tsconfig.node.json      TypeScript para la configuración de Vite
├── .oxlintrc.json          Reglas del linter
├── .env.example            Convención de variables de entorno (sin valores)
├── .editorconfig           Formato básico común a cualquier editor
├── .nvmrc                  Versión de Node.js del proyecto
├── .gitignore
└── src/
    ├── main.tsx            Arranque de React
    ├── app/                Composición de la aplicación
    │   ├── App.tsx         Conecta el enrutador con React
    │   ├── router.tsx      Rutas: el dashboard y los seis módulos
    │   ├── layout/         Estructura principal: barra lateral, barra
    │   │                   superior (con sus paneles) y menú móvil
    │   ├── navigation/     Lista y enlaces de navegación
    │   ├── dashboard/      Pantalla principal y sus bloques
    │   └── errors/         Página no encontrada y barrera de errores
    ├── modules/            Los seis módulos oficiales
    │   ├── lead-hunter/
    │   ├── business-intelligence/
    │   ├── demo-factory/
    │   ├── proposal-engine/
    │   ├── sales-command/
    │   └── revenue-analytics/
    ├── shared/             Código común a varios módulos
    │   ├── components/     Sistema de componentes reutilizables
    │   ├── hooks/          Hooks comunes
    │   └── lib/            Utilidades
    ├── services/           Acceso a servicios externos (vacío)
    ├── config/             Registro de módulos, navegación y métricas
    └── styles/
        └── index.css       Tailwind y tokens de diseño
```

Cada módulo contiene `index.ts` (su API pública), `pages/` (su página inicial)
y, cuando los necesita, `components/` propios. `services` solo contiene un
`README.md`: todavía no hay ningún servicio conectado.

### Previsto (se crea en su fase, no antes)

| Ubicación                  | Contenido                                                      | Fase |
| -------------------------- | -------------------------------------------------------------- | ---- |
| `src/config/env.ts`        | Acceso tipado y validado a las variables de entorno            | 3    |
| `supabase/`                | Migraciones de la base de datos y funciones de servidor        | 3    |
| `src/admin/`               | Administración global (área transversal, no es un módulo)      | 11   |

## 4. Organización de módulos

Cada módulo es autónomo. Hoy tiene `index.ts`, `pages/` y, en algún caso,
`components/`. Al llegar su fase completará esta estructura interna:

```
src/modules/<modulo>/
├── index.ts        API pública: lo único que otros pueden importar
├── pages/          Pantallas del módulo
├── components/     Componentes propios del módulo
├── hooks/          Estado y acceso a datos para la interfaz
├── domain/         Lógica de negocio pura: tipos, reglas y cálculos
└── data/           Lectura y escritura de datos del módulo
```

`domain/` no depende de React ni hace entrada o salida. Eso permite probar las
reglas de negocio (puntuaciones, precios, duplicados) de forma aislada y
barata.

### Reglas de dependencia

```
app  ──►  modules  ──►  shared, services, config
```

1. Un módulo nunca importa archivos internos de otro. Si necesita algo de otro
   módulo, lo importa desde su `index.ts`.
2. `shared`, `services` y `config` nunca importan desde `modules` ni `app`.
3. Lo que usan dos o más módulos se mueve a `shared`. Lo que usa uno solo se
   queda en ese módulo.
4. Ningún componente supera una responsabilidad: los componentes grandes se
   dividen y la lógica se extrae a `hooks/` o `domain/`.
5. Dentro de un módulo se usan importaciones relativas. Hacia fuera, el alias
   `@/`. El enrutador importa cada módulo solo por su `index.ts`.

## 5. Separación frontend / backend

**Hoy:** solo existe frontend. No hay backend.

**Previsto:**

- **Frontend.** SPA estática. No contiene secretos ni lógica que deba ser de
  confianza.
- **Backend.** Sin servidor propio permanente. Supabase (candidato) aporta la
  base de datos PostgreSQL, la autenticación y el almacenamiento de archivos.
- **Lógica de servidor.** Todo lo que necesite un secreto, llame a un
  proveedor externo, use IA o tarde mucho se ejecuta en funciones de servidor
  y nunca en el navegador. Recomendación: funciones de Supabase, para mantener
  el backend en un solo sitio. Alternativa: funciones de Vercel. Se decide en
  la Fase 3.
- **Tareas largas** (análisis de webs, generación de demostraciones). Se
  gestionarán como trabajos registrados en la base de datos y procesados en
  segundo plano. El mecanismo concreto se decide en la Fase 4 o 5, cuando se
  conozcan los tiempos reales.

### Infraestructura mínima que necesita Lead Hunter

Análisis del 2026-11-13, **aprobado por el propietario** ese mismo día:
Supabase, plan gratuito, región de la UE. Nada está instalado ni contratado
todavía: la cuenta y el proyecto los crea el propietario.

| Pieza                         | ¿Hace falta? | Por qué                                                                                   | Propuesta                                        |
| ----------------------------- | ------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Backend (funciones de servidor) | Sí         | El navegador no puede guardar claves ni consultar webs de terceros; ahí corren búsquedas, importaciones y comprobaciones | Funciones de Supabase            |
| Base de datos                 | Sí           | Guardar negocios, la fuente de cada dato, el historial de búsquedas, los duplicados y el consumo | PostgreSQL de Supabase                    |
| Autenticación                 | Sí, mínima   | La base tendrá datos de contacto y la aplicación será accesible por internet              | Un único usuario privado, sin registro público   |
| Almacenamiento de archivos    | No           | Lead Hunter no maneja archivos                                                            | Se aplaza                                        |
| Fuentes de datos              | Sí           | Sin ellas no hay búsqueda real                                                            | Ver sección 14                                   |
| Protección de credenciales    | Sí           | Las claves solo pueden vivir en el servidor                                               | Secretos de las funciones de servidor            |
| Gestión de errores            | Sí           | Las fuentes externas fallan o tardan                                                      | Errores tipados y mensajes claros (sección 9)    |
| Límites de uso y costes       | Sí           | Evitar consumo no previsto                                                                | Registro de consumo y topes por fuente (sección 15) |

Plan gratuito de Supabase (cifras de su página de precios, a confirmar al
crear la cuenta): 500 MB de base de datos, 2 proyectos activos, 1 GB de
archivos, 500.000 ejecuciones de funciones al mes. **Un proyecto gratuito se
pausa tras una semana sin actividad** y hay que reactivarlo a mano. El plan
de pago cuesta desde 25 $ al mes.

No se usa Next.js: la aplicación es interna y requiere inicio de sesión, por
lo que no necesita renderizado en servidor ni posicionamiento en buscadores.
Cambiar esta decisión exige presentar antes una justificación al propietario.

## 6. Flujo de datos

Previsto a partir de la Fase 3:

```
Componente
   │  usa
   ▼
Hook del módulo  ──────────────►  caché de datos del servidor
   │  llama
   ▼
data/ del módulo
   │
   ├──►  Cliente de backend  ──►  Base de datos (permisos por fila)
   │
   └──►  Función de servidor  ──►  Adaptador  ──►  Proveedor externo
```

- Los componentes no acceden al backend directamente.
- Los datos que llegan de fuera se validan antes de usarse (sección 10).
- Cada dato sobre un negocio guardará su **origen, su fecha y si es un dato
  verificado o una estimación**. Así la interfaz nunca presenta una estimación
  como dato verificado.

## 7. Gestión de estado

| Tipo de estado                         | Solución                                             | Fase |
| -------------------------------------- | ---------------------------------------------------- | ---- |
| Estado local de un componente          | `useState` / `useReducer` de React                   | 2    |
| Estado en la URL (filtros, página)     | Enrutador                                            | 2    |
| Estado transversal pequeño (sesión)    | Contexto de React                                    | 3    |
| Datos del servidor                     | Librería de caché de datos (propuesta: TanStack Query) | 3  |

No se instala un almacén global de estado. Solo se añadiría si aparece una
necesidad concreta que lo anterior no resuelva.

## 8. Sistema de componentes y directrices visuales

Construido en la Fase 2. Tema exclusivamente oscuro e interfaz solo en
español, por decisión del propietario.

### Tokens de diseño

Definidos en `src/styles/index.css` con la sintaxis `@theme` de Tailwind 4.

| Token                                   | Uso                                                      |
| --------------------------------------- | -------------------------------------------------------- |
| `ink-950`, `ink-900`                    | Negro profundo: fondo de la aplicación y barra lateral   |
| `graphite-900` a `graphite-500`         | Grafito: tarjetas, paneles y controles                   |
| `line`, `line-strong`                   | Bordes discretos                                         |
| `fg`, `fg-muted`, `fg-subtle`           | Texto: blanco suave y grises neutros                     |
| `accent`, `accent-strong`               | Verde esmeralda: sección activa, estados y acciones      |
| `shadow-panel`, `shadow-pop`            | Profundidad de superficies y de paneles flotantes        |
| `animate-enter`, `-pop`, `-drawer`, `-fade` | Movimiento: entrada de página, paneles y menú móvil  |
| `font-sans`                             | Tipografía Geist                                         |
| `container-shell`                       | Ancho máximo del contenido                               |

### Componentes compartidos

En `src/shared/components/`. Antes de crear uno nuevo se comprueba si ya
existe aquí.

| Componente                      | Función                                                        |
| ------------------------------- | -------------------------------------------------------------- |
| `Panel`                         | Superficie con título: el contenedor base                      |
| `EmptyState`                    | Estado vacío que explica qué aparecerá en un espacio           |
| `MetricCard`                    | Widget de una métrica; sin valor muestra su estado vacío       |
| `ChartPlaceholder`              | Espacio reservado para un gráfico, sin ninguna serie de datos  |
| `PageIntro`, `ModuleIntro`      | Cabecera de una página y de la página inicial de un módulo     |
| `SectionHeading`                | Título de un bloque de contenido                               |
| `Popover`                       | Panel flotante accesible anclado a un botón                    |
| `IconButton`, `IconTile`        | Botón de icono e icono sobre superficie                        |
| `Badge`, `Notice`               | Etiqueta de estado y nota informativa                          |
| `Wordmark`                      | Identidad textual «DealHunter» (sin símbolo ni logotipo)       |

Los componentes propios de una sola zona viven en ella: los del layout en
`src/app/layout/`, los del dashboard en `src/app/dashboard/` y los de un
módulo en su carpeta `components/`.

### Directrices

1. **Solo tema oscuro.** No existe ni se prepara un tema claro.
2. **Tokens, no colores sueltos.** Ningún componente escribe un color a mano.
3. **Verde esmeralda con moderación.** Se reserva para la sección activa, los
   estados y lo que debe destacar.
4. **Primero móvil.** La barra lateral es fija a partir de `lg` (1024 px); por
   debajo se usa el menú móvil. Cuando un bloque depende de su propio ancho y
   no del de la ventana, se usan consultas de contenedor. A partir de 1920 px
   se aumenta el tamaño base de la tipografía para escalar toda la interfaz.
5. **Accesibilidad.** HTML semántico, un único `h1` por página, foco visible,
   navegación por teclado y enlace para saltar al contenido.
6. **Movimiento sobrio.** Transiciones y animaciones CSS, sin librería. Se
   respeta la preferencia del sistema de reducir el movimiento.
7. **Tipografía propia.** Geist se sirve con la aplicación; no se cargan
   fuentes desde servidores de terceros.
8. **Sin datos ficticios.** Donde no hay datos reales se muestra un estado
   vacío. Ningún gráfico, métrica o lista representa datos inventados.
9. **Ningún control aparenta una función que no existe.** La búsqueda global,
   las notificaciones y el perfil de la barra superior todavía no tienen
   funcionalidad: cada uno abre un panel que explica su estado real.

Queda por elegir la librería de gráficos. Se decidirá cuando existan datos
que representar.

## 9. Gestión de errores

**Hoy:** existe la barrera de errores de las secciones
(`src/app/errors/RouteError.tsx`), que mantiene la navegación disponible si
una sección falla, y la página de dirección inexistente.

Previsto:

1. **Interfaz.** Una barrera de errores general y otra por módulo, para que el
   fallo de un módulo no tumbe la aplicación.
2. **Datos.** La capa `data/` convierte cualquier fallo en un error tipado con
   un código y un mensaje apto para mostrar.
3. **Mensajes.** Lo que ve quien usa la aplicación nunca incluye detalles
   técnicos (trazas, consultas, nombres de tablas).
4. **Servidor.** Registros estructurados, sin secretos ni datos personales.
5. **Registro de actividad y errores** consultable desde la administración
   (Fases 3 y 11).

No se incluye ningún servicio externo de monitorización. Añadir uno requeriría
aprobación.

## 10. Validación de datos

Previsto:

- Se valida en cada frontera: formularios, respuestas de fuentes externas,
  entradas de funciones de servidor y variables de entorno.
- Un esquema por entidad sirve a la vez de validación y de tipo de TypeScript
  (propuesta: Zod, Fase 3).
- La validación del navegador es solo una ayuda. La que cuenta se repite en el
  servidor y en la base de datos (restricciones y permisos por fila).

## 11. Configuración de entornos

**Hoy:** la aplicación no necesita ninguna variable de entorno.
`.env.example` documenta la convención.

**Reglas:**

1. Entornos previstos: local, vista previa y producción.
2. Los archivos `.env` reales nunca se suben al repositorio. Solo se versiona
   `.env.example`, sin valores reales.
3. Vite expone al navegador únicamente las variables con prefijo `VITE_`.
   Todo lo que lleve ese prefijo es público.
4. Los secretos solo existen en el entorno del servidor.
5. El código lee las variables a través de `src/config/env.ts`, que las valida
   al arrancar (Fase 3, cuando exista la primera variable).

## 12. Autenticación y permisos

Previsto para la Fase 3, con Supabase como candidato:

- Registro cerrado: al ser una herramienta interna, las cuentas se crean por
  invitación, sin registro público.
- La sesión la gestiona el servicio de autenticación; la aplicación no guarda
  contraseñas.
- Los permisos se aplican en la base de datos con políticas por fila. Ocultar
  un botón en la interfaz no es un control de acceso.
- Los roles concretos y sus permisos los define el propietario en la Fase 3.
- Las claves con privilegios de administración nunca llegan al navegador.

## 13. Base de datos

Previsto para la Fase 3. **Todavía no hay ninguna tabla definida.**

- PostgreSQL (Supabase, candidato).
- El esquema se versiona en el repositorio como migraciones SQL.
- Permisos por fila activados en todas las tablas desde su creación.
- Los tipos de TypeScript se generan a partir del esquema, para que el código
  y la base de datos no diverjan.
- Restricciones en la propia base de datos (obligatoriedad, unicidad, claves
  foráneas) como última línea de defensa.
- **Preparación para SaaS (propuesta, requiere aprobación).** Asociar los
  datos de negocio a una organización desde el principio. Con un único
  cliente (WebNovalius) el coste es mínimo, y evita migrar todos los datos si
  DealHunter se abre a terceros.

## 14. Integraciones externas

**Hoy:** ninguna. La aplicación no hace ninguna petición a servicios externos.

**Patrón previsto: puertos y adaptadores.**

- Cada capacidad externa se define como una interfaz propia de DealHunter.
- Cada proveedor es un adaptador que implementa esa interfaz. Cambiar de
  proveedor no obliga a tocar los módulos.
- Toda llamada que use una clave se hace desde el servidor.
- Cada adaptador tiene tiempo máximo de espera, reintentos limitados, caché,
  registro de consumo y un interruptor para desactivarlo.

**Integraciones previstas** (ningún proveedor está elegido):

| Capacidad                                             | Módulo                       | Fase    | Proveedor                                             |
| ----------------------------------------------------- | ---------------------------- | ------- | ----------------------------------------------------- |
| Autenticación, base de datos, almacenamiento          | Transversal                  | 3       | Supabase (candidato)                                  |
| Fuentes de datos de negocios                          | Lead Hunter                  | 4       | Por decidir; solo fuentes legítimas; requiere aprobación |
| Análisis técnico de webs                              | Business Intelligence        | 5       | Por decidir; primero análisis propio con código convencional |
| Modelos de IA                                         | Los que lo justifiquen       | 5 a 8   | Por decidir; solo donde aporte valor real             |
| Generación de documentos                              | Proposal Engine              | 7       | Por decidir; preferible una librería local sin servicio externo |
| Publicación de demostraciones privadas                | Demo Factory                 | 8       | Por decidir                                           |
| Alojamiento del frontend                              | Transversal                  | 12      | Por decidir (ver sección 18)                          |

### Fuentes de datos evaluadas (2026-11-13)

**Decisión del propietario (2026-11-13):** se usan OpenStreetMap y Overture
Maps. Google Places no se utiliza como base. Cifras tomadas de la documentación de
cada proveedor mediante búsqueda; hay que confirmarlas en su página oficial
antes de contratar nada. Las marcadas con (*) proceden de terceros.

| Fuente                                   | Coste                                                                 | Qué ofrece                                                                                     | Limitaciones y condiciones de uso                                                                                                   | Valoración                          |
| ---------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| OpenStreetMap (API Overpass)             | Gratis                                                                | Nombre, dirección, tipo de negocio y, cuando alguien los ha cartografiado, web, teléfono, correo y redes | Cobertura desigual en negocios pequeños. Servidores públicos: orientación de menos de 10.000 consultas y 1 GB al día, y mucho menos para uso regular; el uso intensivo exige servidor propio. Licencia ODbL: atribución; la obligación de compartir solo nace si la base derivada se usa públicamente | Recomendada: búsqueda en vivo       |
| Overture Maps (lugares)                  | Gratis                                                                | Unos 88 millones de lugares en el mundo (Meta, Microsoft, Foursquare y otros): nombre, categoría, dirección, webs, redes, correos, teléfonos, nivel de confianza y procedencia de cada registro | No tiene API: publica archivos mensuales que hay que importar por zonas. Calidad variable. Licencias CDLA Permissive 2.0 y Apache 2.0 según el origen: permiten uso comercial y almacenamiento, con atribución | Recomendada: amplía la cobertura y aporta redes sociales |
| Google Places API (New)                  | Con web y teléfono: 1.000 búsquedas gratis al mes y después 35 $ por cada 1.000. Sin ellos: 5.000 gratis y después 32 $ por cada 1.000 | La mejor cobertura y actualidad                                    | Sus políticas solo permiten guardar el identificador del lugar; prohíben copiar y guardar nombres y direcciones. Hasta 60 resultados por búsqueda (*). Exige cuenta de facturación | No válida como base: incompatible con guardar negocios |
| Foursquare Places API                    | 500 llamadas gratis al mes (*) y después 15 $ por cada 1.000 (*)      | Datos similares a su conjunto abierto                                                          | Cara para volumen. Su conjunto de datos abierto ya forma parte de Overture                                                          | No recomendada                      |
| Extracción automática de Google Maps o de directorios, propia o mediante servicios de terceros | Variable                        | —                                                                                              | La prohíben las condiciones de uso de esas webs                                                                                     | Descartada                          |
| Registros oficiales de empresas          | —                                                                     | Datos societarios                                                                              | No informan de webs ni de presencia digital                                                                                         | No útil para este fin               |
| PageSpeed Insights API (Google)          | Gratis                                                                | Rendimiento, experiencia móvil, SEO básico y accesibilidad de una web                          | Unas 25.000 consultas al día por proyecto (*). Requiere una clave de Google Cloud                                                   | Recomendada para Business Intelligence |
| Comprobación propia de cada web          | Gratis                                                                | Si la web responde, si usa HTTPS y sus etiquetas básicas                                        | Se hace desde el servidor, con moderación                                                                                           | Recomendada                         |

**Consecuencias para el diseño**

- Ninguna fuente abierta permite afirmar que un negocio no tiene web: solo
  que no consta en esa fuente. Lead Hunter distinguirá tres estados: web
  verificada (consta y responde), web no encontrada en las fuentes, y sin web
  confirmado por una comprobación expresa.
- Cada dato guarda su fuente y su fecha. Los registros de OpenStreetMap se
  mantienen identificados, porque su licencia es distinta de la de Overture.
- El correo y las redes solo se muestran cuando la fuente los incluye.
- Antes de comprometerse con una fuente conviene una prueba de cobertura, sin
  coste, en la zona y los sectores que indique el propietario.

Fuentes consultadas: [precios de Google Maps Platform](https://developers.google.com/maps/billing-and-pricing/pricing),
[políticas de Places API](https://developers.google.com/maps/documentation/places/web-service/policies),
[guía de lugares de Overture](https://docs.overturemaps.org/guides/places/),
[atribución de Overture](https://docs.overturemaps.org/attribution/),
[preguntas legales de OpenStreetMap](https://osmfoundation.org/wiki/Licence/Licence_and_Legal_FAQ),
[API Overpass](https://wiki.openstreetmap.org/wiki/Overpass_API),
[esquema de datos abiertos de Foursquare](https://docs.foursquare.com/data-products/docs/places-os-data-schema),
[precios de Supabase](https://supabase.com/pricing) y
[condiciones de uso razonable de Vercel](https://vercel.com/docs/limits/fair-use-guidelines).

## 15. Control de costes

**Coste de la Fase 1: cero.** No hay servicios contratados, cuentas creadas ni
dependencias de pago.

Mecanismos previstos:

| Requisito del propietario                       | Mecanismo                                                                                          |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Reglas transparentes para las puntuaciones      | Motor de reglas con funciones puras: devuelve la puntuación de 0 a 100 y la lista de factores que la explican. Sin IA |
| Código convencional para operaciones sencillas  | Duplicados, filtros, cálculos de precios y métricas se resuelven con código y consultas            |
| Evitar procesos duplicados                      | Los resultados de cada análisis se guardan con fecha; solo se repiten a petición o al caducar      |
| Límites de consumo                              | Cuota por proveedor y periodo, comprobada antes de cada llamada externa                            |
| Registro de consumo                             | Cada llamada externa anota proveedor, operación, unidades y coste estimado                         |
| No depender constantemente de modelos de IA     | Un único punto de entrada en el servidor para la IA, con tope de gasto y funcionamiento degradado sin IA |
| Integraciones intercambiables                   | Puertos y adaptadores (sección 14)                                                                 |

Añadir cualquier servicio de pago requiere aprobación previa del propietario.

## 16. Administración global

**Hoy:** no existe. Se construye en la Fase 11.

**Cómo encaja:** no es un séptimo módulo, sino un área transversal
(`src/admin/`) accesible solo para el rol de administración.

**Principio que la hace viable:** desde la Fase 3, todo lo administrable se
guarda como datos de configuración y los módulos lo leen de ahí. Así, la
Fase 11 solo añade las pantallas para editar una configuración que ya existe.

| Área de administración     | Dónde vive en la arquitectura                              |
| -------------------------- | ---------------------------------------------------------- |
| Configuración general      | Datos de configuración de la plataforma                    |
| Usuarios y permisos        | Autenticación, roles y políticas por fila (sección 12)     |
| Módulos activos            | Registro de módulos (`src/config/modules.ts`) y su estado  |
| Integraciones              | Registro de adaptadores y su interruptor (sección 14)      |
| Fuentes de datos           | Adaptadores de Lead Hunter y su configuración              |
| Parámetros de puntuación   | Pesos y umbrales del motor de reglas (sección 15)          |
| Plantillas                 | Datos de Demo Factory y Proposal Engine                    |
| Servicios y tarifas        | Catálogo que usa Proposal Engine                           |
| Límites de uso             | Cuotas de consumo (sección 15)                             |
| Automatizaciones           | Definiciones aprobadas en la Fase 10                       |
| Registros de actividad     | Registro de actividad y errores (sección 9)                |
| Configuración comercial    | Datos de configuración de Sales Command y Proposal Engine  |

## 17. Seguridad y cumplimiento

| Criterio                               | Cómo se aplica                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Autenticación segura                   | Servicio de autenticación gestionado; registro cerrado por invitación (sección 12)               |
| Gestión de permisos y control de acceso | Roles y políticas por fila en la base de datos; mínimo privilegio                               |
| Protección de credenciales             | Secretos solo en el servidor; nunca en el repositorio ni en variables `VITE_`                    |
| Variables de entorno                   | Convención de la sección 11; `.gitignore` excluye todos los `.env` reales                        |
| Validación de entradas                 | Validación en cada frontera, repetida en el servidor (sección 10)                                |
| Protección de información empresarial  | Datos accesibles solo con sesión; la aplicación pide a los buscadores no ser indexada            |
| Gestión de errores                     | Mensajes sin detalles técnicos; registros sin secretos ni datos personales (sección 9)           |
| Prevención de accesos no autorizados   | Permisos por fila en todas las tablas; las claves de administración no salen del servidor        |
| Protección de datos y RGPD             | Ver más abajo                                                                                    |

**RGPD y normativa aplicable.** Requiere verificación legal antes de las fases
que tratan datos (4 y 10):

- Los datos de contacto de un negocio pueden ser datos personales (autónomos,
  personas de contacto con nombre). Hay que definir la base legal del
  tratamiento antes de recopilarlos.
- Minimización: se guarda solo lo necesario, con su origen y su fecha.
- Hay que prever cómo atender solicitudes de acceso, oposición y supresión, y
  cuánto tiempo se conservan los datos.
- Alojar los datos en una región de la Unión Europea (recomendado).
- Las comunicaciones comerciales por medios electrónicos están reguladas
  (en España, por la LSSI-CE). No se implementa ningún envío automático sin
  verificar antes la base legal y contar con autorización del propietario.

**Fuentes de datos.** Solo fuentes legítimas, respetando sus condiciones de
uso y sus límites de acceso. No se implementa scraping prohibido.

**Demostraciones.** Toda demostración de Demo Factory llevará un aviso visible
de que es una propuesta no oficial, y no se permitirá su indexación en
buscadores.

## 18. Despliegue

**Hoy:** no hay despliegue ni cuenta en ningún proveedor.

**Previsto:**

- El frontend se compila a archivos estáticos (`npm run build` genera `dist/`)
  y puede alojarse en cualquier servicio de alojamiento estático.
- Vercel era la opción inicial, pero su plan gratuito está restringido a uso
  personal no comercial y una herramienta interna de empresa no encaja; su
  plan de pago tiene coste mensual. Alternativa a valorar: un alojamiento
  estático gratuito que admita uso comercial, como Cloudflare Pages (dato de
  terceros, a confirmar). La decisión está pendiente.
- La aplicación usa enrutador: el alojamiento deberá devolver `index.html`
  para cualquier ruta. Se configura al desplegar, en la Fase 12.
- Variables y secretos se configuran en el panel del proveedor, nunca en el
  repositorio.
- **Decisión del propietario (2026-11-13):** la aplicación será privada y
  accesible desde distintos dispositivos. No se publica hasta que la
  autenticación, los permisos y la seguridad estén preparados (Fase 3).
- La publicación definitiva se hace tras la auditoría de seguridad (Fase 12).

## 19. Pruebas y calidad

**Hoy:** dos comprobaciones automáticas, ambas verificadas:

- `npm run typecheck`: TypeScript en modo estricto.
- `npm run lint`: oxlint con reglas de React y TypeScript.

No hay pruebas automatizadas en el repositorio porque todavía no existe
lógica de negocio que probar.

La interfaz de la Fase 2 se verificó en un navegador real con un guion de un
solo uso (312 comprobaciones; resultado en `ROADMAP.md`). Ese guion no forma
parte del repositorio: incorporarlo exige una dependencia de desarrollo nueva
(ver `PROJECT_CONTEXT.md`, sección 11).

**Previsto:**

- Pruebas unitarias obligatorias para la lógica de `domain/`: puntuaciones
  (Fase 5), precios (Fase 7), duplicados (Fase 4) y métricas (Fase 9).
  Propuesta: Vitest, que se instala cuando exista la primera lógica.
- Pruebas de extremo a extremo de los flujos principales en la Fase 12.

## 20. Criterios de escalabilidad

1. **Módulos aislados.** Las fronteras de la sección 4 permiten ampliar o
   reescribir un módulo sin afectar al resto.
2. **Carga por módulo.** Cada módulo se carga bajo demanda
   (`src/app/router.tsx`), para que la aplicación no pese más al crecer.
3. **Base de datos.** Paginación e índices desde el diseño del esquema.
4. **Multiorganización** (propuesta): permite pasar de herramienta interna a
   SaaS sin migrar los datos.
5. **Proveedores intercambiables.** Cambiar de fuente de datos, de modelo de
   IA o de alojamiento no obliga a reescribir los módulos.
6. **Configuración como datos.** Ajustar puntuaciones, tarifas o límites no
   requiere publicar una versión nueva.
7. **Trabajos en segundo plano.** Las tareas largas no bloquean la interfaz.

## 21. Registro de decisiones técnicas

### Decididas

| ID    | Decisión                                              | Motivo                                                                                              |
| ----- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| D-001 | SPA con React + Vite, sin Next.js                     | Preferencia del propietario. Aplicación interna con inicio de sesión: no necesita renderizado en servidor |
| D-002 | TypeScript en modo estricto                           | Detecta errores antes de ejecutar; requisito del propietario                                        |
| D-003 | Tailwind CSS 4 con tokens definidos en CSS            | Preferencia del propietario. El plugin oficial de Vite evita configuración adicional                |
| D-004 | oxlint en lugar de ESLint                             | Es el linter de la plantilla oficial de Vite. `typescript-eslint` no admite TypeScript 7            |
| D-005 | Monolito modular con una carpeta por módulo oficial   | Mantenible y sin el coste operativo de los microservicios                                           |
| D-006 | npm como gestor de paquetes                           | Viene con Node.js; no añade ninguna herramienta                                                     |
| D-007 | Alias `@/` hacia `src/`, definido solo en `tsconfig.app.json` | Importaciones estables. Vite 8 lee el alias de TypeScript, así que no se duplica            |
| D-008 | Documentación e interfaz en español; identificadores de código en inglés | El propietario confirmó la interfaz solo en español; el inglés es el estándar en código |
| D-009 | React Router como enrutador                           | Aprobado por el propietario. Dirección propia por sección, botón «atrás» y carga por módulo         |
| D-010 | lucide-react para la iconografía                      | Aprobado por el propietario. Juego de iconos coherente; solo se incluyen los que se usan            |
| D-011 | Tipografía Geist alojada con la aplicación            | Aprobada por el propietario. Aspecto idéntico en todos los dispositivos y sin peticiones a terceros |
| D-012 | Tema exclusivamente oscuro y logotipo textual provisional | Decisión del propietario. No se prepara tema claro ni se inventa un símbolo                     |
| D-013 | Los controles sin funcionalidad abren un panel que explica su estado | Cumple a la vez «incluir búsqueda, notificaciones y perfil» y «ningún botón que aparente una acción inexistente» |
| D-014 | Menú móvil con `<dialog>` nativo y panel flotante propio, sin librería de primitivas | El navegador ya resuelve el foco y el cierre; evita una dependencia |
| D-015 | Escala global en pantallas grandes subiendo el tamaño base | La interfaz está medida en rem: un solo ajuste la escala entera de forma proporcional          |
| D-016 | La rama principal es `main`; nunca se fuerza un push  | Decisión del propietario. El historial de `main` se conserva íntegro                                |
| D-017 | Backend en Supabase: base de datos, acceso privado y funciones de servidor. Plan gratuito, región de la UE | Aprobado por el propietario. Sin planes de pago; la cuenta la crea el propietario |
| D-018 | Fuentes de Lead Hunter: OpenStreetMap y Overture Maps | Aprobadas por el propietario. Son gratuitas y permiten guardar los datos. Google Places no se usa como base |
| D-019 | Aplicación privada; no se publica hasta tener autenticación, permisos y seguridad | Decisión del propietario. La base contendrá datos de contacto                  |
| D-020 | Supabase JS, Zod, TanStack Query y Vitest             | Aprobadas por el propietario. Se instalan solo cuando su fase las necesite                          |
| D-021 | Roadmap de 13 fases: funcionalidad antes que estética | Decisión del propietario (`ROADMAP.md`)                                                             |

### Propuestas (no instaladas; se confirman en su fase)

Cualquier librería o servicio nuevo requiere que el propietario lo apruebe
antes de instalarlo o contratarlo. Las propuestas P-001 a P-003 de la Fase 1
pasaron a ser las decisiones D-009 a D-011.

| ID    | Propuesta                                              | Fase               | Tipo             |
| ----- | ------------------------------------------------------ | ------------------ | ---------------- |
| P-006 | Modelo de datos multiorganización                      | 3                  | Alcance futuro   |
| P-010 | Alojamiento de la publicación privada                  | 3                  | Servicio externo; por decidir (sección 18) |
| P-011 | Librería de gráficos                                   | Cuando haya datos  | Librería gratuita; por elegir |
| P-012 | API PageSpeed Insights para el análisis de webs        | 5                  | Servicio externo gratuito |

Las propuestas P-004, P-005, P-007, P-008 y P-009 pasaron a ser las decisiones
D-017 y D-020.

## 22. Riesgos y dependencias

| Riesgo                                                                                   | Impacto                                   | Mitigación                                                                  |
| ---------------------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------- |
| Las fuentes de datos de negocios útiles pueden ser de pago o tener condiciones restrictivas | Coste y alcance de Lead Hunter          | Evaluarlas en la Fase 4 antes de programar; adaptadores intercambiables     |
| Tratamiento de datos personales y comunicaciones comerciales                             | Legal                                     | Verificación legal antes de las Fases 4 y 10 (sección 17)                   |
| Límites de los planes gratuitos de Supabase y Vercel                                     | Coste o interrupciones                    | Revisar condiciones en las Fases 3 y 12; arquitectura portable              |
| TypeScript 7 y Vite 8 son versiones mayores recientes                                    | Alguna herramienta puede no admitirlas aún | Versiones fijadas en `package-lock.json`; comprobar compatibilidad antes de añadir dependencias |
| Las funciones de servidor tienen límites de tiempo de ejecución                          | Análisis de webs y generación de demos    | Trabajos en segundo plano (sección 5)                                       |
| Una demostración podría confundirse con la web oficial de un negocio                     | Legal y reputacional                      | Aviso obligatorio de propuesta no oficial y sin indexación (sección 17)     |
| Dependencia de un único proveedor de backend                                             | Dificultad para cambiar                   | Acceso a datos encapsulado en `data/` y `services/`; PostgreSQL es estándar |
