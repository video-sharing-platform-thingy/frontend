import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import { Layout } from './Layout';

export default () => (
  <Switch>
    {routes.map((route) => (
      <Route
        exact
        path={route.path}
        render={props => {
          const Header = route.header;
          const Component = route.component;
          const Footer = route.footer;

          return (
            <Layout
              header={<Header/>}
              main={<Component {...props}/>}
              footer={<Footer/>}
            />
          )
        }}
        key={route.path}
      />
    ))}
  </Switch>
)