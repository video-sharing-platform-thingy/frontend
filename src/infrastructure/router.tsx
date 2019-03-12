import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import { Layout } from './layout'
import { UserContext } from './UserProvider'

export default () => {
  const { user } = useContext(UserContext)
  console.log(user)
  return user && (
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
