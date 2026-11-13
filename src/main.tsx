import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Tipografía Geist, alojada con la aplicación (sin peticiones a terceros).
import '@fontsource-variable/geist'
import { App } from '@/app/App'
import '@/styles/index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('No se encontró el elemento #root en index.html')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
