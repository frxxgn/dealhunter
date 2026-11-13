import { useEffect } from 'react'

/** Mantiene el título de la pestaña del navegador sincronizado con la página. */
export function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = title
  }, [title])
}
