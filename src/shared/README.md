# shared

Código reutilizable por varios módulos.

| Carpeta       | Contenido                                                        |
| ------------- | ---------------------------------------------------------------- |
| `components/` | Sistema de componentes: paneles, estados vacíos, métricas, etc.  |
| `hooks/`      | Hooks comunes                                                    |
| `lib/`        | Utilidades sin dependencia de React                              |

Regla: `shared` nunca importa desde `modules` ni desde `app`. Detalle en
`ARCHITECTURE.md`, secciones 3, 4 y 8.
