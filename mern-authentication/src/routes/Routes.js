import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from '../components/Dashboard';
import SignIn from '../components/SignIn';
import SignUp from  '../components/SignUp';

import AuthApi from '../utils/AuthApi'

const Routes = () => {
  return (
   <Switch>
     <RouteRegisteration path="/signin" component={SignIn} />
     <RouteRegisteration path="/signup" component={SignUp} />
     <RouteProtected path="/dashboard" component={Dashboard} />
   </Switch>
  )
}

const RouteRegisteration = ({ component: Component, ...rest}) => {
  const authApi = React.useContext(AuthApi);
  return <Route {...rest} render={props => !authApi.auth ? (<Component {...props}/>) : <Redirect to="/dashboard" /> } />
}

const RouteProtected = ({ component: Component, ...rest}) => {
  const authApi = React.useContext(AuthApi);
  return <Route {...rest} render={props => authApi.auth ? (<Component {...props}/>) : <Redirect to="/signin" /> } />
}

export default Routes
