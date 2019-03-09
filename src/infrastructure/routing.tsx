import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

const Routing = () => (
  <Switch>
    {routes.map((route) => (
      <Route
        exact
        path={route.path}
        render={props => {
          let Component = route.component

          // Once we get user logic etc, we will check if user is logged in, if user is not, then we will give the component the value of route.unauthed and render that, making sure that routing stay consistent
          // with auth.
          return <Component {...props}/>
        }}
      />
    ))}
  </Switch>
)

export default Routing