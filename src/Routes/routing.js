import React from 'react';

import { Route, Switch, NavLink } from "react-router-dom";

import SignupForm from '../Components/Signup'
import Signin from '../Components/Signin';
import Categories from '../Components/Categories';
import Landingpage from '../Components/landingPage';
import Home from '../Components/home';
// import Logout from '../Components/logout';

import Protected from './protectroutes';
import Authenticate from './authroutes';



function RoutingPage() {

    return (
        <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route path="/categories" component={Categories} />
            <Route path="/categories/:id" component={Categories} />
            <Authenticate path="/signup" component={SignupForm} />
            <Authenticate path="/signin" component={Signin} />
            <Protected path="/home" component={Home} />
            {/* <Protected path="/logout" component={Logout} /> */}
            <Route path="*" component={Error} />
        </Switch>
    )
}

export default RoutingPage


function Error() {
    return (
      <div className="err">
        <h1>404</h1>
        <h3>Page not found</h3>
        <NavLink to="/">Go Back</NavLink>
      </div>
    )
  }