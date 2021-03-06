import React from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Routes = () => (
  <Switch>
    <PublicRoute path='/login' component={() => <h1>Login</h1>} />
    <PrivateRoute exact path='/' component={() => <h1>home</h1>} />
  </Switch>
)

export default Routes
