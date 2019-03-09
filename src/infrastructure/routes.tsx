import { Redirect } from 'react-router-dom'
import indexRoute from '../routes/index'

interface Route {
  path: string;
  component: any;
  header?: any;
  footer?: any;
}

export default [
  {
    path: '/',
    component: indexRoute
  }
] as Array<Route>