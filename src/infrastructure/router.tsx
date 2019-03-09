import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

export default () => (
  <Switch>
    {routes.map((route) => (
      <Route
        exact
        path={route.path}
        render={route.component}
        key={route.path}
      />
    ))}
  </Switch>
)
