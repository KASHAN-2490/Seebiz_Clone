import React from 'react';
import './App.css';
import Header from './Components/header';
import FooterPage from './Components/footer';
import RoutingPage from './Routes/routing'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { useState, createContext } from 'react';

import { addData } from "./Services/Action/action";
import { useDispatch } from 'react-redux';

export const userContext = createContext();


function App() {

  
  const [_, updateApp] = useState();


function ReloadData () {

  const dispatch = useDispatch();

  let user = window.localStorage.getItem(true);
  // user = JSON.parse(user)
  // console.log("App: ", user);

const request = async () => {

  const res = await fetch("http://localhost:7000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: user
  })
  const data = await res.json();
  console.log("App: ", data.name);
  dispatch(addData(data.name))

}
request();

  return(
    <div>
    </div>
  )
}

  return (
    <Router>
        <userContext.Provider value={{ updateApp }}>
          <Header />
          <div className="App">
          <RoutingPage />
          </div>
        </userContext.Provider>
      <FooterPage />
      <ReloadData />
    </Router>
  );
}


export default App;




