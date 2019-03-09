import { Redirect } from 'react-router-dom'
import App from '../App';

export default [
  {
    path: '/',
    component: App,
    unauthed: () => <Redirect to='/login' />
  }
]