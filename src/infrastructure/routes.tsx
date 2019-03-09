import React from 'react'
import IndexRoute from '../routes/index'
import { Navbar } from '../components'

interface Route {
  path: string
  component: any
  header?: any
  footer?: any
}

export default [
  {
    path: '/',
    component: IndexRoute
  }
] as Array<Route>
