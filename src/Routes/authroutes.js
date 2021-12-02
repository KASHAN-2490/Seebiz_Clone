import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router';

// import { useContext } from 'react';
// import { userContext } from '../App';

// import { useSelector } from 'react-redux';


function Authenticate(props) {

    // const myValue = useSelector((state) => state.keyValue);

    const user = window.localStorage.getItem(true);

    // console.log("auth "+typeof user)

    // const {key} = useContext(userContext);

    let Comp = props.component;
    // console.log(key)

    return (
        <div>
            <Route>
            {(user !== null) ? <Redirect to="/home" /> : <Comp />}
            </Route>
            
        </div>
    );
}
export default Authenticate;