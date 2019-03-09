import { ReactNode } from 'react'
import indexRoute from '../routes/index'

interface Route {
  path: string
  component: ReactNode
  header?: ReactNode
  footer?: ReactNode
}

export default [
  {
    path: '/',
    component: indexRoute
  }
] as Array<Route>
