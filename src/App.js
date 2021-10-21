import React from 'react';
import './App.css';
import SignupForm from './Components/Signup'
import Signin from './Components/Signin';
import Home from './Components/home';

import FooterPage from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";



const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/signin" component={Signin} />
      <Route path="*" component={Error} />
    </Switch>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routing />
        
      </div>
      <FooterPage />
    </Router>
  );
}


function Error() {
  return (
    <div className="err">
      <h1>404</h1>
      <h3>Page not found</h3>
      <NavLink to="/">Go Back</NavLink>
    </div>
  )
}


export default App;




