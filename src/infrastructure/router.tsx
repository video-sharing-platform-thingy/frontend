import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import { Layout } from './Layout'
import { Navbar } from '../components';

export default () => (
  <Switch>
    {routes.map((route) => (
      <Route
        exact
        path={route.path}
        render={() => {
          return (
            <Layout
              header={route.header || <Navbar />}
              main={route.component}
              footer={route.header}
            />
          )
        }}
        key={route.path}
      />
    ))}
  </Switch>
)
