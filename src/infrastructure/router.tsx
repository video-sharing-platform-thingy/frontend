import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import { Layout } from './layout'

export default () => (
  <Switch>
    {routes.map((route) => (
      <Route
        exact
        path={route.path}
        render={(props) => {
          const Header = route.header
          const Component = route.component

          return (
            <Layout
              header={<Header {...props}/>}
              main={<Component {...props}/>}
            />
          )
        }}
        key={route.path}
      />
    ))}
  </Switch>
)
