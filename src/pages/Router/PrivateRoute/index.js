import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import propTypes from 'prop-types'

import API from '../../../API'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        props => API.authService.isAuthenticated() ? <Component {...props} />
          : <Redirect to='/login' />
      }
    />)
}

PrivateRoute.propTypes = {
  component: propTypes.element
}

export default PrivateRoute
