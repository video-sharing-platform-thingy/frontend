import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import { Layout } from './layout'
import { Navbar } from '../components';

export default () => (
  <Switch>
    {routes.map((route) => (
      <Route
        exact
        path={route.path}
        render={(props) => {
          const Header = route.header || Navbar
          const Component = route.component
          const Footer = route.footer

          return (
            <Layout
              header={<Header {...props}/>}
              main={<Component {...props}/>}
              footer={<Footer {...props}/>}
            />
          )
        }}
        key={route.path}
      />
    ))}
  </Switch>
)
