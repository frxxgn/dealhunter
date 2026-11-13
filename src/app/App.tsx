import { RouterProvider } from 'react-router/dom'
import { router } from '@/app/router'

/** Raíz de la aplicación: conecta el enrutador con React. */
export function App() {
  return <RouterProvider router={router} />
}
