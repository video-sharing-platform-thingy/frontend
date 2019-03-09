import React, { ReactNode, ReactChildren } from 'react'
import IndexRoute from '../routes/index'
import { Navbar } from '../components';

interface Route {
  path: string
  component: any
  header: any
  footer: any
}

export default [
  {
    path: '/',
    component: IndexRoute,
    header: Navbar,
    footer: () => <footer>Test</footer>
  }
] as Array<Route>
