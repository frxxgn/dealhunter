# Módulos de DealHunter

Esta carpeta contiene **exactamente** los seis módulos oficiales. No se añade
ninguno más (ver `CLAUDE.md`, regla absoluta de no inventar).

| Carpeta                 | Módulo                   | Fase |
| ----------------------- | ------------------------ | ---- |
| `lead-hunter`           | A. Lead Hunter           | 4    |
| `business-intelligence` | B. Business Intelligence | 5    |
| `demo-factory`          | C. Demo Factory          | 8    |
| `proposal-engine`       | D. Proposal Engine       | 7    |
| `sales-command`         | E. Sales Command         | 6    |
| `revenue-analytics`     | F. Revenue Analytics     | 9    |

- Alcance funcional de cada módulo: `PROJECT_CONTEXT.md`, sección 2.
- Estructura interna y reglas de dependencia: `ARCHITECTURE.md`, sección 4.

Cada módulo tiene su página inicial (`pages/`) y su API pública (`index.ts`),
creadas en la Fase 2. Son solo estructura visual con estados vacíos: ninguna
funcionalidad de ningún módulo está implementada todavía.
