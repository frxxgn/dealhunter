/**
 * Pantalla provisional de la Fase 1.
 *
 * Solo comprueba que React, TypeScript y Tailwind (con los tokens del tema)
 * funcionan de extremo a extremo. No es la interfaz de DealHunter: la
 * estructura visual real se construye en la Fase 2 y sustituirá este archivo.
 */
export function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-ink-950 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
        Deal<span className="text-accent">Hunter</span>
      </h1>
      <p className="max-w-md text-base text-zinc-400">
        Plataforma de inteligencia comercial y gestión de oportunidades
        empresariales.
      </p>
      <p className="rounded-full border border-accent/30 bg-graphite-900 px-4 py-1.5 text-sm text-zinc-300">
        Fase 1 · Base técnica preparada. La interfaz se construye en la Fase 2.
      </p>
    </main>
  )
}
