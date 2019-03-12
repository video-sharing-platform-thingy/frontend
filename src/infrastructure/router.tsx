import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import { Layout } from './layout'
import useUser from './useUser'

export default () => {
  const { user } = useUser()
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          exact
          path={route.path}
          render={(props) => {
            const Header = route.header
            let Component = route.component

            if (!user.authed) {
              Component = route.unauthed || Component
            }

            return (
              <Layout
                header={<Header {...props} />}
                main={<Component {...props} />}
              />
            )
          }}
          key={route.path}
        />
      ))}
    </Switch>
  )
}
