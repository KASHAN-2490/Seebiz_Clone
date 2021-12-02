import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router';

// import { useContext } from 'react';
// import { userContext } from '../App';

// import { useSelector } from 'react-redux';



function Protected(props) {

    // const myValue = useSelector((state) => state.keyValue);

    // const {key} = useContext(userContext);

    const user = window.localStorage.getItem(true);

    // console.log("protect "+typeof user)

    let Comp = props.component;
    // console.log(key);

    return (
        <div>
            <Route>
            {(user === null) ? <Redirect to="/signin" /> : <Comp />}
            </Route>
            
        </div>
    );
}
export default Protected;