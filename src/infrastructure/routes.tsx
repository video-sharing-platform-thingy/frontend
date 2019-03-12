import React, { ReactNode } from 'react'
import IndexRoute from '../routes/index'
import { Navbar } from '../components'
import { Redirect } from 'react-router'

interface Route {
  path: string
  component: any
  header: any
  unauthed?: ReactNode
}

export default [
  {
    path: '/',
    component: IndexRoute,
    header: Navbar,
    unauthed: () => <Redirect to='/login' />
  }
] as Array<Route>
