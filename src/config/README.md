# config

Configuración de la aplicación.

| Archivo         | Contenido                                                      |
| --------------- | -------------------------------------------------------------- |
| `modules.ts`    | Registro único de los seis módulos oficiales                   |
| `navigation.ts` | Secciones navegables: el dashboard y los seis módulos          |
| `metrics.ts`    | Nombres de las métricas oficiales (sin valores)                |

El acceso tipado a las variables de entorno (`env.ts`) se crea en la Fase 3:
la aplicación todavía no usa ninguna. Detalle en `ARCHITECTURE.md`,
sección 11.

Regla: `config` nunca importa desde `modules` ni desde `app`.
